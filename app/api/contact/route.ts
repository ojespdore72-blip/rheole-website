import { NextRequest, NextResponse } from "next/server";
import { supabase, withRetry } from "@/lib/supabase/client";
import { Logger } from "@/lib/monitoring/logger";

export async function POST(request: NextRequest) {
  const startTime = Date.now();

  try {
    const body = await request.json();
    const { email, message, bot_field } = body;

    // 1. Honeypot check
    if (bot_field) {
      Logger.warn("Bot submission detected in contact form honeypot", { email });
      // Fake success response to deflect bot retry
      return NextResponse.json({
        success: true,
        message: "Inquiry sent successfully. We will connect shortly.",
      });
    }

    // 2. Input validation
    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!message || message.trim().length < 5) {
      return NextResponse.json(
        { error: "Please enter a message of at least 5 characters." },
        { status: 400 }
      );
    }

    // 3. Database save (Supabase or simulation)
    const client = supabase;
    if (client) {
      // Attempt to save to contact_inquiries table if it exists
      try {
        await withRetry(async () => {
          const { error } = await client
            .from("contact_inquiries")
            .insert([{ email, message, created_at: new Date().toISOString() }]);
          return { data: null, error };
        });
        Logger.info("Contact inquiry stored in database", { email });
      } catch (dbErr: any) {
        // Fallback log (e.g. if the optional table is not created yet)
        Logger.warn("Supabase insert error for contact_inquiries, falling back to log stream", dbErr);
      }
    } else {
      Logger.info("Contact inquiry simulation (No Supabase client configured)", { email, messageLength: message.length });
      await new Promise((resolve) => setTimeout(resolve, 200));
    }

    const latency = Date.now() - startTime;
    Logger.latency("POST /api/contact", latency, { email });

    return NextResponse.json({
      success: true,
      message: "Inquiry sent successfully. We will connect shortly.",
    });
  } catch (error: any) {
    Logger.error("Failed to process contact inquiry", error);
    return NextResponse.json(
      { error: "Failed to submit contact inquiry. Please try again later." },
      { status: 500 }
    );
  }
}
