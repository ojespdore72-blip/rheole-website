import React from "react";
import ContextArticle from "@/components/understand/ContextArticle";

export const metadata = {
  title: "Context Intelligence | Rheole",
  description: "The invisible layer behind every decision. Computers should understand the world before responding. Discover Rheole's Context-First Spatial Intelligence.",
};

export default function ContextIntelligencePage() {
  return (
    <main className="min-h-screen bg-[#050505] text-[#F2F2F0] font-sans selection:bg-[#D97706]/30 selection:text-white relative">
      {/* Deep Obsidian and Amber/Gold background for the physical reality theme */}
      <div className="absolute top-0 left-0 w-full h-[800px] pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-20%] left-[10%] w-[50vw] h-[50vw] bg-[#D97706]/[0.025] rounded-full blur-[120px]" />
        <div className="absolute top-[10%] right-[-10%] w-[60vw] h-[60vw] bg-[#B45309]/[0.02] rounded-full blur-[140px]" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-[0.08]" />
      </div>

      <div className="w-full relative z-10 pt-[160px] md:pt-[200px]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col items-center text-center mb-24 md:mb-32">
          <span className="text-[#D97706] text-[11px] font-medium tracking-[0.2em] uppercase mb-8">
            Feature 02 — Context Intelligence
          </span>
          <h1 className="text-[clamp(40px,7vw,80px)] font-serif-editorial font-light leading-[1.05] tracking-tight mb-8">
            The world changes<br />every second.
          </h1>
          <p className="text-[18px] md:text-[24px] text-[#A0A0A0] font-light leading-relaxed max-w-[700px]">
            No two moments are identical. Even if you ask the exact same question twice, the correct answer may be completely different. Intelligence begins by understanding reality before generating responses.
          </p>
        </div>

        <ContextArticle />
      </div>
    </main>
  );
}
