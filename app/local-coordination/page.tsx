import React from "react";
import LocalGroupsArticle from "@/components/connect/LocalGroupsArticle";

export const metadata = {
  title: "Local Coordination Intelligence | Rheole",
  description: "The objective is to show how people naturally coordinate everyday life with those around them. This is about enabling meaningful, purpose-driven collaboration.",
};

export default function LocalCoordinationPage() {
  return (
    <main className="min-h-screen bg-[#030303] text-[#F2F2F0] font-sans selection:bg-[#4F6EF7]/30 selection:text-white relative">
      {/* Warm, organic background for the Neighborhood/Local theme */}
      <div className="absolute top-0 left-0 w-full h-[800px] pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-20%] w-[70vw] h-[70vw] bg-[#eab308]/[0.02] rounded-full blur-[140px]" />
        <div className="absolute top-[10%] right-[-15%] w-[60vw] h-[60vw] bg-[#10b981]/[0.02] rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-[0.1]" />
      </div>

      <div className="w-full relative z-10 pt-[160px] md:pt-[200px]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col items-center text-center mb-24 md:mb-32">
          <span className="text-[#eab308] text-[11px] font-medium tracking-[0.2em] uppercase mb-8">
            Feature 03 — Local Groups
          </span>
          <h1 className="text-[clamp(40px,7vw,80px)] font-serif-editorial font-light leading-[1.05] tracking-tight mb-8">
            Every neighbourhood<br />already works together.
          </h1>
          <p className="text-[18px] md:text-[24px] text-[#A0A0A0] font-light leading-relaxed max-w-[700px]">
            The strongest connections often happen within a few kilometres. Neighbours solve problems. Students organise projects. Residents share updates. Rheole helps these interactions happen naturally.
          </p>
        </div>

        <LocalGroupsArticle />
      </div>
    </main>
  );
}
