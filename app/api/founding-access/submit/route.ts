import { NextRequest, NextResponse } from "next/server";
import { supabase, withRetry } from "@/lib/supabase/client";
import { Logger } from "@/lib/monitoring/logger";

// In-memory fallback for local development without Supabase
export const localDbStore = new Map<string, any>();

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
    const data = await request.json();
    
    // Minimal validation
    if (!data.email || !data.fullName || !data.excitement) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

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
      Logger.info("Founding Member created in database", { email: data.email });
    } else {
      // Mock save
      localDbStore.set(data.email, dbRecord);
      localDbStore.set(referralCode, dbRecord); // Allow lookup by referral code
      Logger.info("Founding Member simulated save (No Supabase client)", { email: data.email, code: referralCode });
    }

    return NextResponse.json({
      success: true,
      referralCode,
      message: "Founding Access profile created."
    });

  } catch (error: any) {
    Logger.error("Failed to submit founding access application", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
