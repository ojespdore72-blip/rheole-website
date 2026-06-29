import React from "react";
import IntentArticle from "@/components/understand/IntentArticle";

export const metadata = {
  title: "Intent Intelligence | Rheole",
  description: "Understanding begins before searching. Rheole bridges the gap between human intention and computer comprehension, establishing the foundation of Ambient Spatial Intelligence.",
};

export default function IntentIntelligencePage() {
  return (
    <main className="min-h-screen bg-[#030303] text-[#F2F2F0] font-sans selection:bg-[#E5E7EB]/30 selection:text-white relative">
      {/* Deep intellectual Dark Silver / Platinum background */}
      <div className="absolute top-0 left-0 w-full h-[800px] pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-20%] left-[10%] w-[50vw] h-[50vw] bg-[#D1D5DB]/[0.015] rounded-full blur-[120px]" />
        <div className="absolute top-[10%] right-[-10%] w-[60vw] h-[60vw] bg-[#9CA3AF]/[0.015] rounded-full blur-[140px]" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-[0.1]" />
      </div>

      <div className="w-full relative z-10 pt-[160px] md:pt-[200px]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col items-center text-center mb-24 md:mb-32">
          <span className="text-[#9CA3AF] text-[11px] font-medium tracking-[0.2em] uppercase mb-8">
            Feature 01 — Intent Intelligence
          </span>
          <h1 className="text-[clamp(40px,7vw,80px)] font-serif-editorial font-light leading-[1.05] tracking-tight mb-8">
            Understanding begins<br />before searching.
          </h1>
          <p className="text-[18px] md:text-[24px] text-[#A0A0A0] font-light leading-relaxed max-w-[700px]">
            Most technology waits for explicit instructions. Humans rarely think that way. We think in intentions. Rheole bridges this gap, creating an ambient intelligence that understands your purpose before you even type a word.
          </p>
        </div>

        <IntentArticle />
      </div>
    </main>
  );
}
