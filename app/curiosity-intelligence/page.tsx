import React from "react";
import CuriosityArticle from "@/components/understand/CuriosityArticle";

export const metadata = {
  title: "Curiosity Intelligence | Rheole",
  description: "The best AI understands who you are becoming. Discover how Rheole understands the natural evolution of human curiosity.",
};

export default function CuriosityIntelligencePage() {
  return (
    <main className="min-h-screen bg-[#02010A] text-[#F2F2F0] font-sans selection:bg-[#8B5CF6]/30 selection:text-white relative">
      {/* Deep Indigo & Amethyst (Violet/Purple) background for the expansive neural/learning theme */}
      <div className="absolute top-0 left-0 w-full h-[800px] pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-20%] left-[10%] w-[50vw] h-[50vw] bg-[#8B5CF6]/[0.025] rounded-full blur-[120px]" />
        <div className="absolute top-[10%] right-[-10%] w-[60vw] h-[60vw] bg-[#6366F1]/[0.02] rounded-full blur-[140px]" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-[0.05]" />
      </div>

      <div className="w-full relative z-10 pt-[160px] md:pt-[200px]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col items-center text-center mb-24 md:mb-32">
          <span className="text-[#8B5CF6] text-[11px] font-medium tracking-[0.2em] uppercase mb-8">
            Feature 04 — Curiosity Intelligence
          </span>
          <h1 className="text-[clamp(40px,7vw,80px)] font-serif-editorial font-light leading-[1.05] tracking-tight mb-8">
            Every passion begins<br />with a question.
          </h1>
          <p className="text-[18px] md:text-[24px] text-[#A78BFA] font-light leading-relaxed max-w-[700px]">
            People rarely wake up with a lifelong passion. Interests grow through exposure, experiences, and exploration. Technology should nurture curiosity instead of reinforcing routine.
          </p>
        </div>

        <CuriosityArticle />
      </div>
    </main>
  );
}
