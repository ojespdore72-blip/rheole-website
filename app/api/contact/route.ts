import { NextRequest, NextResponse } from "next/server";
import { supabase, withRetry } from "@/lib/supabase/client";
import { Logger } from "@/lib/monitoring/logger";
import { z } from "zod";

const contactSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }).max(255),
  message: z.string().min(5, { message: "Message too short" }).max(5000),
  bot_field: z.string().optional(),
}).strict();

export async function POST(request: NextRequest) {
  const startTime = Date.now();

  try {
    const rawBody = await request.json();
    
    // Zod parsing (throws if invalid)
    const result = contactSchema.safeParse(rawBody);
    
    if (!result.success) {
      Logger.warn("Invalid contact form payload", { errors: result.error.issues });
      return NextResponse.json(
        { error: "Invalid input. Please check your data." },
        { status: 400 }
      );
    }

    const { email, message, bot_field } = result.data;

    // 1. Honeypot check
    if (bot_field) {
      Logger.warn("Bot submission detected in contact form honeypot", { email: "***" });
      return NextResponse.json({
        success: true,
        message: "Inquiry sent successfully. We will connect shortly.",
      });
    }

    // 3. Database save
    const client = supabase;
    if (client) {
      try {
        await withRetry(async () => {
          const { error } = await client
            .from("contact_inquiries")
            .insert([{ email, message, created_at: new Date().toISOString() }]);
          return { data: null, error };
        });
        Logger.info("Contact inquiry stored in database");
      } catch (dbErr: any) {
        Logger.warn("Supabase insert error for contact_inquiries", dbErr.message || "DB Error");
      }
    } else {
      Logger.info("Contact inquiry simulation (No Supabase client configured)", { messageLength: message.length });
      await new Promise((resolve) => setTimeout(resolve, 200));
    }

    const latency = Date.now() - startTime;
    Logger.latency("POST /api/contact", latency);

    return NextResponse.json({
      success: true,
      message: "Inquiry sent successfully. We will connect shortly.",
    });
  } catch (error: any) {
    Logger.error("Failed to process contact inquiry", error.message || "Unknown error");
    return NextResponse.json(
      { error: "Failed to submit contact inquiry. Please try again later." },
      { status: 500 }
    );
  }
}
