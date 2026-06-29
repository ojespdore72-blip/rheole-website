import React from "react";
import EnvironmentArticle from "@/components/understand/EnvironmentArticle";

export const metadata = {
  title: "Living Conditions | Rheole",
  description: "Environmental Intelligence. The world changes before we do. Understand how changing environmental conditions shape intelligent decisions and human movement.",
};

export default function EnvironmentalIntelligencePage() {
  return (
    <main className="min-h-screen bg-[#020617] text-[#F2F2F0] font-sans selection:bg-[#06B6D4]/30 selection:text-white relative">
      {/* Deep Atmospheric Slate & Cyan background for the elemental weather/time theme */}
      <div className="absolute top-0 left-0 w-full h-[800px] pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-20%] left-[10%] w-[50vw] h-[50vw] bg-[#06B6D4]/[0.025] rounded-full blur-[120px]" />
        <div className="absolute top-[10%] right-[-10%] w-[60vw] h-[60vw] bg-[#0EA5E9]/[0.02] rounded-full blur-[140px]" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-[0.06]" />
      </div>

      <div className="w-full relative z-10 pt-[160px] md:pt-[200px]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col items-center text-center mb-24 md:mb-32">
          <span className="text-[#06B6D4] text-[11px] font-medium tracking-[0.2em] uppercase mb-8">
            Feature 03 — Living Conditions
          </span>
          <h1 className="text-[clamp(40px,7vw,80px)] font-serif-editorial font-light leading-[1.05] tracking-tight mb-8">
            The world changes<br />before we do.
          </h1>
          <p className="text-[18px] md:text-[24px] text-[#94A3B8] font-light leading-relaxed max-w-[700px]">
            Humans constantly adapt to changing surroundings. Technology should do the same. Time and weather are not background information—they are active participants in every intelligent decision.
          </p>
        </div>

        <EnvironmentArticle />
      </div>
    </main>
  );
}
