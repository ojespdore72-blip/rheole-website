import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import { ArrowLeft, Clock } from "lucide-react";
import IntentArticle from "@/components/understand/IntentArticle";

export const metadata: Metadata = {
  title: "Intent Intelligence | Rheole Research",
  description: "Deeply nested page for Intent Intelligence.",
};

export default function LeafPage() {
  return (
    <div className="min-h-screen bg-[#080808] text-[#F2F2F0] pb-24">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 pt-32 flex flex-col items-start text-left">
        <ScrollReveal delay={0.1}>
          <h1 className="text-[40px] md:text-[64px] font-serif-editorial font-light mb-6 tracking-tight">Intent Intelligence</h1>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p className="text-[#A0A0A0] text-[18px] md:text-[22px] font-light max-w-[800px] mb-12">
            Deciphering the underlying goals of human behavior—moving beyond what a user types into a search bar to what they actually seek in the real world.
          </p>
        </ScrollReveal>
        
        <div className="w-full mt-12 text-left">
          <IntentArticle />
        </div>

        <ScrollReveal delay={0.3} className="mt-16">
          <Link href="/research/core-research" className="inline-flex items-center gap-2 text-[13px] uppercase tracking-widest font-medium text-white hover:text-[#4F6EF7] transition-colors border border-white/[0.1] px-6 py-3 rounded-full hover:bg-white/[0.02]">
            <ArrowLeft className="w-4 h-4" /> Go Back
          </Link>
        </ScrollReveal>
      </div>
    </div>
  );
}
