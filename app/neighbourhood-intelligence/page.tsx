import React from "react";
import NeighbourhoodIntelligenceArticle from "@/components/connect/NeighbourhoodIntelligenceArticle";

export const metadata = {
  title: "Neighbourhood Intelligence | Rheole",
  description: "Rheole transforms neighbourhoods into living knowledge. Understand the rhythms, communities, and growth of where you live.",
};

export default function NeighbourhoodIntelligencePage() {
  return (
    <main className="min-h-screen bg-[#030303] text-[#F2F2F0] font-sans selection:bg-[#10B981]/30 selection:text-white relative">
      {/* Sophisticated emerald/stone background for the urban ecosystem theme */}
      <div className="absolute top-0 left-0 w-full h-[800px] pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-20%] left-[10%] w-[50vw] h-[50vw] bg-[#10B981]/[0.025] rounded-full blur-[120px]" />
        <div className="absolute top-[10%] right-[-10%] w-[60vw] h-[60vw] bg-[#059669]/[0.02] rounded-full blur-[140px]" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-[0.1]" />
      </div>

      <div className="w-full relative z-10 pt-[160px] md:pt-[200px]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col items-center text-center mb-24 md:mb-32">
          <span className="text-[#10B981] text-[11px] font-medium tracking-[0.2em] uppercase mb-8">
            Feature 05 — Neighbourhood
          </span>
          <h1 className="text-[clamp(40px,7vw,80px)] font-serif-editorial font-light leading-[1.05] tracking-tight mb-8">
            Every neighbourhood has<br />its own story.
          </h1>
          <p className="text-[18px] md:text-[24px] text-[#A0A0A0] font-light leading-relaxed max-w-[700px]">
            A neighbourhood is more than streets and buildings. It is a living, evolving ecosystem. Rheole helps you understand the place you live, work, or spend time—not just navigate through it.
          </p>
        </div>

        <NeighbourhoodIntelligenceArticle />
      </div>
    </main>
  );
}
