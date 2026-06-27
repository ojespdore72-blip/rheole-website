import { NextRequest, NextResponse } from "next/server";
import { Logger } from "@/lib/monitoring/logger";
import { Resend } from "resend";


// Simple in-memory store for OTPs (for development)
// In production, use Redis (e.g., Upstash) or database
const otpStore = new Map<string, { code: string; expiresAt: number; lastSentAt: number }>();

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    const now = Date.now();
    const existing = otpStore.get(email);

    // Rate limiting: 30 seconds
    if (existing && now - existing.lastSentAt < 30000) {
      return NextResponse.json(
        { error: "Please wait 30 seconds before requesting another code." },
        { status: 429 }
      );
    }

    // Generate 6 digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    
    otpStore.set(email, {
      code: otp,
      expiresAt: now + 10 * 60 * 1000, // 10 minutes
      lastSentAt: now,
    });

    const resend = new Resend(process.env.RESEND_API_KEY || "re_dummy");

    const { error: emailError } = await resend.emails.send({
      from: 'Rheole <hello@rheole.com>',
      to: email,
      subject: 'Rheole Founding Access Verification',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <title>Rheole Founding Access</title>
        </head>
        <body style="background-color: #FAF9F6; margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background-color: #FAF9F6; padding: 60px 20px;">
            <tr>
              <td align="center">
                <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="max-width: 500px; background-color: #ffffff; border: 1px solid rgba(10, 37, 64, 0.1); border-radius: 12px; padding: 40px; text-align: center;">
                  <tr>
                    <td style="padding-bottom: 30px;">
                      <h1 style="color: #0A2540; font-family: Georgia, serif; font-size: 24px; font-weight: normal; letter-spacing: 2px; text-transform: uppercase; margin: 0;">RHEOLE</h1>
                      <p style="color: #C5A880; font-size: 10px; letter-spacing: 3px; text-transform: uppercase; margin-top: 8px; margin-bottom: 0;">Founding Access</p>
                    </td>
                  </tr>
                  <tr>
                    <td style="border-top: 1px solid rgba(10, 37, 64, 0.05); padding-top: 30px; padding-bottom: 30px;">
                      <p style="color: rgba(10, 37, 64, 0.7); font-size: 14px; line-height: 24px; margin-bottom: 24px;">Your verification code to securely access the Founding Program is below.</p>
                      <div style="background-color: rgba(197, 168, 128, 0.05); border: 1px solid rgba(197, 168, 128, 0.3); border-radius: 8px; padding: 20px; display: inline-block;">
                        <strong style="color: #C5A880; font-size: 32px; letter-spacing: 8px; font-weight: 500;">${otp}</strong>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td style="border-top: 1px solid rgba(10, 37, 64, 0.05); padding-top: 30px;">
                      <p style="color: rgba(10, 37, 64, 0.4); font-size: 11px; line-height: 18px; margin: 0;">
                        This code will expire in 10 minutes.<br>
                        If you did not request this, please ignore this email.
                      </p>
                    </td>
                  </tr>
                </table>
                <p style="color: rgba(10, 37, 64, 0.3); font-size: 10px; letter-spacing: 2px; text-transform: uppercase; margin-top: 30px;">© 2026 Rheole Inc. All rights reserved.</p>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `
    });

    if (emailError) {
      Logger.error("Resend API error", emailError);
      return NextResponse.json({ error: "Failed to send verification email" }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: "OTP sent successfully" });
  } catch (error) {
    Logger.error("OTP generation failed", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const { email, otp } = await request.json();
    
    const record = otpStore.get(email);
    const now = Date.now();

    if (!record || record.expiresAt < now) {
      return NextResponse.json({ error: "OTP expired or invalid" }, { status: 400 });
    }

    if (record.code !== otp) {
      return NextResponse.json({ error: "Incorrect verification code" }, { status: 400 });
    }

    // Clear after success
    otpStore.delete(email);

    return NextResponse.json({ success: true, message: "Email verified successfully" });
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
