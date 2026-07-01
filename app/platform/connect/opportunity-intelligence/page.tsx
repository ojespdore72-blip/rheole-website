import React from "react";
import OpportunityIntelligenceArticle from "@/components/connect/OpportunityIntelligenceArticle";

export const metadata = {
  title: "Opportunity Presence Intelligence | Rheole",
  description: "Discover entrepreneurial potential already present around you. Rheole quietly reduces the distance between local ecosystems, innovators, and opportunities.",
};

export default function OpportunityIntelligencePage() {
  return (
    <main className="min-h-screen bg-[#030303] text-[#F2F2F0] font-sans selection:bg-[#4F6EF7]/30 selection:text-white relative">
      {/* Abstract Background for Founders/Opportunity Theme */}
      <div className="absolute top-0 left-0 w-full h-[800px] pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-[#4F6EF7]/[0.03] rounded-full blur-[120px]" />
        <div className="absolute top-[20%] right-[-10%] w-[50vw] h-[50vw] bg-white/[0.02] rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-[0.15]" />
      </div>

      <div className="w-full relative z-10 pt-[160px] md:pt-[200px]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col items-center text-center mb-24 md:mb-32">
          <span className="text-[#4F6EF7] text-[11px] font-medium tracking-[0.2em] uppercase mb-8">
            Feature 02 — Opportunities
          </span>
          <h1 className="text-[clamp(40px,7vw,80px)] font-serif-editorial font-light leading-[1.05] tracking-tight mb-8">
            The next great company<br />may already be around you.
          </h1>
          <p className="text-[18px] md:text-[24px] text-[#A0A0A0] font-light leading-relaxed max-w-[700px]">
            Ideas grow faster when surrounded by people who challenge, complement, and inspire them. Cities already contain thousands of entrepreneurs. Most never meet. Rheole quietly reduces that distance.
          </p>
        </div>

        <OpportunityIntelligenceArticle />
      </div>
    </main>
  );
}
