"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

const scenarios = [
  { id: "hungry", label: "Hungry", title: "Find the Best Food", description: "Discover hidden gems, trending cafes, and local favorites with live wait times." },
  { id: "bored", label: "Bored", title: "Discover Local Events", description: "See what's happening around you right now, from acoustic sets to startup mixers." },
  { id: "new_city", label: "New City", title: "Neighborhood Guides", description: "Instantly understand the vibe of a new area and find essential spots." },
  { id: "meet_people", label: "Meet People", title: "Join Communities", description: "Connect with local groups, tech founders, and hobbyists nearby." },
  { id: "events", label: "Find Events", title: "Curated Experiences", description: "Browse curated lists of upcoming experiences tailored to your interests." },
  { id: "navigate", label: "Navigate", title: "Smart Routing", description: "Get there faster with context-aware routing taking live traffic into account." },
];

export default function ProductPreviewSection() {
  const [activeScenario, setActiveScenario] = useState(scenarios[0].id);

  const currentContent = scenarios.find((s) => s.id === activeScenario);

  return (
    <section id="demo" className="w-full py-[120px] px-6 relative flex flex-col items-center">
      <ScrollReveal className="w-full max-w-[1200px] flex flex-col items-center gap-16">
        
        <div className="flex flex-col gap-4 text-center">
          <span className="section-eyebrow text-[#4F6EF7]">THE EXPERIENCE</span>
          <h2 className="text-[32px] md:text-[48px] font-light font-serif-editorial text-[#F2F2F0]">
            Your city, decoded in real-time.
          </h2>
        </div>

        {/* Interactive Container */}
        <div className="w-full flex flex-col lg:flex-row gap-12 lg:gap-24 items-center justify-center">
          
          {/* Toggles */}
          <div className="flex flex-row lg:flex-col gap-3 overflow-x-auto w-full lg:w-auto pb-4 lg:pb-0 scrollbar-hide shrink-0 snap-x">
            {scenarios.map((scenario) => {
              const isActive = activeScenario === scenario.id;
              return (
                <button
                  key={scenario.id}
                  onClick={() => setActiveScenario(scenario.id)}
                  className={`snap-center shrink-0 px-6 py-4 rounded-xl text-left transition-all duration-300 interactive min-w-[140px] lg:min-w-[200px] ${
                    isActive 
                      ? "bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.15)] shadow-[0_0_20px_rgba(255,255,255,0.03)]" 
                      : "bg-transparent border border-transparent hover:bg-[rgba(255,255,255,0.03)] opacity-60 hover:opacity-100"
                  }`}
                >
                  <span className={`block text-[14px] font-medium tracking-wide uppercase transition-colors ${
                    isActive ? "text-[#F2F2F0]" : "text-[#6A6A6A]"
                  }`}>
                    {scenario.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Device Mockup */}
          <div className="relative w-full max-w-[320px] aspect-[1/2.16] rounded-[48px] border-[8px] border-[#1A1A1A] bg-[#080808] overflow-hidden shadow-[0_0_80px_rgba(79,110,247,0.15)] flex-shrink-0 relative z-10">
            {/* Phone Notch/Island */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100px] h-[24px] bg-[#1A1A1A] rounded-b-2xl z-50" />
            
            {/* Screen Content */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#111] to-[#0a0a0a] flex flex-col p-6 pt-16 relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeScenario}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col h-full gap-6"
                >
                  {/* Mock UI Header */}
                  <div className="flex flex-col gap-2">
                    <span className="text-[#4F6EF7] text-[11px] font-medium uppercase tracking-widest">
                      {currentContent?.label} Mode
                    </span>
                    <h3 className="text-[#F2F2F0] text-[24px] font-light leading-tight">
                      {currentContent?.title}
                    </h3>
                  </div>

                  {/* Mock UI Cards */}
                  <div className="flex-1 flex flex-col gap-3">
                    {[1, 2, 3].map((item) => (
                      <div key={item} className="w-full bg-[rgba(255,255,255,0.04)] rounded-xl p-4 border border-[rgba(255,255,255,0.05)]">
                        <div className="w-2/3 h-4 bg-[rgba(255,255,255,0.1)] rounded-md mb-3" />
                        <div className="w-full h-2 bg-[rgba(255,255,255,0.05)] rounded-full mb-2" />
                        <div className="w-4/5 h-2 bg-[rgba(255,255,255,0.05)] rounded-full" />
                      </div>
                    ))}
                  </div>

                  <p className="text-[#6A6A6A] text-[13px] leading-relaxed text-center mt-auto pb-4">
                    {currentContent?.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
          
        </div>
      </ScrollReveal>
    </section>
  );
}
