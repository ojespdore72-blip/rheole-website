import React from "react";
import RhythmArticle from "@/components/understand/RhythmArticle";

export const metadata = {
  title: "Personal Rhythm | Rheole",
  description: "Technology shouldn't control your routine. It should quietly understand your rhythm. Discover how Rheole understands the natural, living patterns of everyday life.",
};

export default function RhythmIntelligencePage() {
  return (
    <main className="min-h-screen bg-[#110D0A] text-[#F2F2F0] font-sans selection:bg-[#D97757]/30 selection:text-white relative">
      {/* Warm Sand & Soft Terracotta background for the earthy, human, living rhythm theme */}
      <div className="absolute top-0 left-0 w-full h-[800px] pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-20%] left-[10%] w-[50vw] h-[50vw] bg-[#D97757]/[0.025] rounded-full blur-[120px]" />
        <div className="absolute top-[10%] right-[-10%] w-[60vw] h-[60vw] bg-[#A65D46]/[0.02] rounded-full blur-[140px]" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-[0.06]" />
      </div>

      <div className="w-full relative z-10 pt-[160px] md:pt-[200px]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col items-center text-center mb-24 md:mb-32">
          <span className="text-[#D97757] text-[11px] font-medium tracking-[0.2em] uppercase mb-8">
            Feature 05 — Rhythm Intelligence
          </span>
          <h1 className="text-[clamp(40px,7vw,80px)] font-serif-editorial font-light leading-[1.05] tracking-tight mb-8">
            Every life has<br />its own rhythm.
          </h1>
          <p className="text-[18px] md:text-[24px] text-[#A89F91] font-light leading-relaxed max-w-[700px]">
            Life rarely repeats exactly. Our days are shaped by recurring moments rather than identical schedules. Technology should adapt to these natural rhythms instead of expecting people to adapt to technology.
          </p>
        </div>

        <RhythmArticle />
      </div>
    </main>
  );
}
