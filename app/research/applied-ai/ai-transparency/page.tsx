"use client";

import React from "react";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { ArrowLeft, Clock } from "lucide-react";

export default function LeafPage() {
  return (
    <div className="min-h-screen bg-[#080808] text-[#F2F2F0] flex flex-col items-center justify-center p-6 text-center">
      <ScrollReveal>
        <Clock className="w-16 h-16 text-[#4F6EF7] mx-auto mb-8 opacity-50" />
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <h1 className="text-[40px] md:text-[64px] font-serif-editorial font-light mb-6 tracking-tight">AI Transparency</h1>
      </ScrollReveal>
      <ScrollReveal delay={0.2}>
        <p className="text-[#A0A0A0] text-[18px] md:text-[22px] font-light max-w-[600px] mb-12">
          This deeply nested page is currently under active development. The URL structure is firmly in place.
        </p>
      </ScrollReveal>
      <ScrollReveal delay={0.3}>
        <Link href="/research/applied-ai" className="inline-flex items-center gap-2 text-[13px] uppercase tracking-widest font-medium text-white hover:text-[#4F6EF7] transition-colors border border-white/[0.1] px-6 py-3 rounded-full hover:bg-white/[0.02]">
          <ArrowLeft className="w-4 h-4" /> Go Back
        </Link>
      </ScrollReveal>
    </div>
  );
}
