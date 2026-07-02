import { NextRequest, NextResponse } from "next/server";
import { supabase, withRetry } from "@/lib/supabase/client";
import { Logger } from "@/lib/monitoring/logger";
import { z } from "zod";

// In-memory fallback for local development without Supabase
export const localDbStore = new Map<string, any>();

const submitSchema = z.object({
  email: z.string().email(),
  fullName: z.string().min(2).max(100),
  dob: z.string().optional(),
  mobile: z.string().optional(),
  country: z.string().optional(),
  city: z.string().optional(),
  discovery: z.string().optional(),
  excitement: z.string().min(10).max(5000),
}).strict();

function generateReferralCode() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let code = "";
  for (let i = 0; i < 6; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return `RHE-${code}`;
}

export async function POST(request: NextRequest) {
  try {
    const rawData = await request.json();
    
    // Zod Validation
    const result = submitSchema.safeParse(rawData);
    if (!result.success) {
      Logger.warn("Invalid founding-access submit payload", { errors: result.error.errors });
      return NextResponse.json({ error: "Invalid input data" }, { status: 400 });
    }

    const data = result.data;
    const referralCode = generateReferralCode();
    
    const dbRecord = {
      email: data.email,
      full_name: data.fullName,
      date_of_birth: data.dob,
      phone: data.mobile,
      country: data.country,
      city: data.city,
      experience_text: data.discovery,
      why_rheole: data.excitement,
      referral_code: referralCode,
      application_status: "approved",
      email_verified: true,
      otp_verified_at: new Date().toISOString(),
      created_at: new Date().toISOString()
    };

    if (supabase) {
      await withRetry(async () => {
        const { error } = await supabase!.from("founding_members").insert([dbRecord]);
        if (error) throw error;
        return { data: null, error: null };
      });
      Logger.info("Founding Member created in database");
    } else {
      localDbStore.set(data.email, dbRecord);
      localDbStore.set(referralCode, dbRecord);
      Logger.info("Founding Member simulated save (No Supabase client)");
    }

    return NextResponse.json({
      success: true,
      referralCode,
      message: "Founding Access profile created."
    });

  } catch (error: any) {
    Logger.error("Failed to submit founding access application", error.message || "Unknown error");
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
