import { NextRequest, NextResponse } from "next/server";
import { supabase, withRetry } from "@/lib/supabase/client";
import { Logger } from "@/lib/monitoring/logger";

export async function POST(request: NextRequest) {
  const startTime = Date.now();
  
  try {
    const body = await request.json();
    const { email, bot_field } = body;

    // 1. Bot Honeypot Check
    if (bot_field) {
      Logger.warn("Bot submission detected in waitlist honeypot", { email });
      // Return fake success to fool bots
      return NextResponse.json({
        success: true,
        message: "You are registered. We will reach out when the pulse aligns.",
      });
    }

    // 2. Email Validation
    if (!email || !email.includes("@") || email.length > 254) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // 3. Persist to database (Supabase or local storage mock fallback)
    const client = supabase;
    if (client) {
      await withRetry(async () => {
        const { error } = await client
          .from("waitlist")
          .insert([{ email, created_at: new Date().toISOString() }]);
        return { data: null, error };
      });
      
      Logger.info("Waitlist entry created in database", { email });
    } else {
      // Mock DB save simulation for local development / testing
      Logger.info("Waitlist entry simulation (No Supabase client configured)", { email });
      await new Promise((resolve) => setTimeout(resolve, 100));
    }

    const latency = Date.now() - startTime;
    Logger.latency("POST /api/waitlist", latency, { email });

    return NextResponse.json({
      success: true,
      message: "You are registered. We will reach out when the pulse aligns.",
    });
  } catch (error: any) {
    Logger.error("Failed to process waitlist submission", error);
    return NextResponse.json(
      { error: "Failed to submit. Please try again later." },
      { status: 500 }
    );
  }
}
