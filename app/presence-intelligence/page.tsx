import React from "react";
import PresenceIntelligenceArticle from "@/components/connect/PresenceIntelligenceArticle";

export const metadata = {
  title: "Nearby Presence Intelligence | Rheole",
  description: "Intelligently revealing people whose paths naturally intersect with yours while respecting privacy, consent, and relevance.",
};

export default function PresenceIntelligencePage() {
  return (
    <main className="min-h-screen bg-[#030303] text-[#F2F2F0] font-sans selection:bg-[#8B5CF6]/30 selection:text-white relative">
      {/* Soft violet/indigo background for the Human Discovery theme */}
      <div className="absolute top-0 left-0 w-full h-[800px] pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-20%] left-[10%] w-[50vw] h-[50vw] bg-[#8B5CF6]/[0.03] rounded-full blur-[120px]" />
        <div className="absolute top-[10%] right-[-10%] w-[60vw] h-[60vw] bg-[#6366F1]/[0.02] rounded-full blur-[140px]" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-[0.1]" />
      </div>

      <div className="w-full relative z-10 pt-[160px] md:pt-[200px]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col items-center text-center mb-24 md:mb-32">
          <span className="text-[#8B5CF6] text-[11px] font-medium tracking-[0.2em] uppercase mb-8">
            Feature 04 — Nearby Presence
          </span>
          <h1 className="text-[clamp(40px,7vw,80px)] font-serif-editorial font-light leading-[1.05] tracking-tight mb-8">
            The right people are often<br />already around you.
          </h1>
          <p className="text-[18px] md:text-[24px] text-[#A0A0A0] font-light leading-relaxed max-w-[700px]">
            Every day we pass hundreds of people who share our interests, ambitions, or experiences. Rheole introduces meaningful people locally through context, rather than chance.
          </p>
        </div>

        <PresenceIntelligenceArticle />
      </div>
    </main>
  );
}
