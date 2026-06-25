import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    
    // Extract fields
    const role = formData.get("role") as string;
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const linkedin = formData.get("linkedin") as string;
    const portfolio = formData.get("portfolio") as string;
    const github = formData.get("github") as string;
    const skills = formData.get("skills") as string;
    const authWork = formData.get("authWork") === "true";
    const termsAgreed = formData.get("termsAgreed") === "true";
    const resume = formData.get("resume") as File;

    if (!name || !email || !skills || !resume || !role) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const arrayBuffer = await resume.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const data = await resend.emails.send({
      from: "Rheole Careers <onboarding@resend.dev>",
      to: ["careers@rheole.com"],
      subject: `New Application for ${role}: ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #002B49;">
          <h1 style="border-bottom: 1px solid #eee; padding-bottom: 10px;">Application: ${role}</h1>
          
          <h2 style="font-size: 16px; margin-top: 30px; text-transform: uppercase; color: #666; letter-spacing: 1px;">1. Contact Details</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
          
          <h2 style="font-size: 16px; margin-top: 30px; text-transform: uppercase; color: #666; letter-spacing: 1px;">2. Digital Footprint</h2>
          <p><strong>LinkedIn:</strong> ${linkedin ? `<a href="${linkedin}">${linkedin}</a>` : "Not provided"}</p>
          <p><strong>Portfolio / Website:</strong> ${portfolio ? `<a href="${portfolio}">${portfolio}</a>` : "Not provided"}</p>
          <p><strong>GitHub:</strong> ${github ? `<a href="${github}">${github}</a>` : "Not provided"}</p>
          
          <h2 style="font-size: 16px; margin-top: 30px; text-transform: uppercase; color: #666; letter-spacing: 1px;">3. Experience Note</h2>
          <div style="background: #f9f9f9; padding: 15px; border-radius: 8px;">
            <p style="margin: 0;">${skills.replace(/\n/g, "<br/>")}</p>
          </div>

          <h2 style="font-size: 16px; margin-top: 30px; text-transform: uppercase; color: #666; letter-spacing: 1px;">4. Compliance Checkboxes</h2>
          <p>✅ <strong>Authorized to work without sponsorship:</strong> ${authWork ? "Yes" : "No"}</p>
          <p>✅ <strong>Agreed to Terms & Privacy Policy:</strong> ${termsAgreed ? "Yes" : "No"}</p>
          
          <p style="margin-top: 40px; font-size: 12px; color: #999;">Resume is attached to this email as a PDF.</p>
        </div>
      `,
      attachments: [
        {
          filename: resume.name,
          content: buffer,
        },
      ],
    });

    if (data.error) {
      console.error("Resend Error:", data.error);
      return NextResponse.json(
        { error: "Failed to send application. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Application submission error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
