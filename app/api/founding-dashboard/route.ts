import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase/client";
import { localDbStore } from "../founding-access/submit/route";

export async function GET(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const email = url.searchParams.get("email");

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    let userRecord: any = null;
    let referralCount = 0;

    if (supabase) {
      // 1. Get user record
      const { data: user, error } = await supabase!
        .from("founding_members")
        .select("*")
        .eq("email", email)
        .single();
        
      if (error || !user) {
        return NextResponse.json({ error: "Profile not found", details: error }, { status: 404 });
      }
      userRecord = user;

      // 2. Count referrals
      const { count } = await supabase!
        .from("founding_members")
        .select("*", { count: "exact", head: true })
        .eq("referred_by", user.referral_code);
        
      referralCount = count || 0;
    } else {
      // Mock logic
      userRecord = localDbStore.get(email);
      if (!userRecord) {
        return NextResponse.json({ error: "Profile not found" }, { status: 404 });
      }
      // Simple mock: if they exist, let's just pretend they have 0 referrals for now,
      // or count in the local map
      let count = 0;
      localDbStore.forEach((record) => {
        if (record.referred_by === userRecord.referral_code) count++;
      });
      referralCount = count;
    }

    return NextResponse.json({
      success: true,
      data: {
        referralCode: userRecord.referral_code,
        status: userRecord.application_status,
        referralCount,
        email: userRecord.email,
        fullName: userRecord.full_name
      }
    });

  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
