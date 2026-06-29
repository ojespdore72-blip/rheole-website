"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import { ChevronRight } from "lucide-react";

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
    <section id="demo" className="w-full py-[160px] px-6 relative flex flex-col items-center overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#4F6EF7] rounded-full blur-[120px] opacity-[0.03] pointer-events-none" />

      <ScrollReveal className="w-full max-w-[1200px] flex flex-col items-center gap-20 relative z-10">
        
        <div className="flex flex-col items-center gap-6 text-center">
          <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-[#4F6EF7]">THE EXPERIENCE</span>
          <h2 className="text-[clamp(40px,5vw,64px)] font-serif-editorial font-light text-[#F2F2F0] leading-[1.1]">
            Your city, decoded in real-time.
          </h2>
        </div>

        {/* Interactive Container */}
        <div className="w-full flex flex-col lg:flex-row gap-16 lg:gap-32 items-center justify-center">
          
          {/* Elegant Toggles Menu */}
          <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto w-full lg:w-auto pb-6 lg:pb-0 scrollbar-hide shrink-0">
            {scenarios.map((scenario) => {
              const isActive = activeScenario === scenario.id;
              return (
                <button
                  key={scenario.id}
                  onClick={() => setActiveScenario(scenario.id)}
                  className="relative group flex items-center justify-between py-4 px-6 min-w-[200px] text-left transition-all duration-500 rounded-2xl hover:bg-[rgba(255,255,255,0.02)]"
                >
                  <span className={`block text-[13px] font-medium tracking-[0.08em] uppercase transition-colors duration-500 ${
                    isActive ? "text-[#F2F2F0]" : "text-[#6A6A6A] group-hover:text-[#A0A0A0]"
                  }`}>
                    {scenario.label}
                  </span>
                  
                  {/* Active Indicator & Arrow */}
                  <div className="flex items-center gap-4">
                    <ChevronRight size={14} className={`transition-all duration-500 ${
                      isActive ? "text-[#F2F2F0] opacity-100 translate-x-0" : "text-[#6A6A6A] opacity-0 -translate-x-4 group-hover:opacity-50 group-hover:-translate-x-2"
                    }`} />
                  </div>
                  
                  {/* Active Line (Desktop) */}
                  {isActive && (
                    <motion.div 
                      layoutId="activeIndicator"
                      className="absolute left-0 top-1/4 bottom-1/4 w-[2px] bg-[#4F6EF7] rounded-full hidden lg:block"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  {/* Active Line (Mobile) */}
                  {isActive && (
                    <motion.div 
                      layoutId="activeIndicatorMobile"
                      className="absolute bottom-0 left-1/4 right-1/4 h-[2px] bg-[#4F6EF7] rounded-full lg:hidden"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Premium Device Mockup */}
          <div className="relative w-full max-w-[340px] aspect-[1/2.16] rounded-[56px] p-2 bg-gradient-to-b from-[#333] to-[#111] shadow-[0_0_80px_rgba(79,110,247,0.1),_inset_0_0_2px_rgba(255,255,255,0.2)] flex-shrink-0">
            {/* Inner Screen Bezel */}
            <div className="w-full h-full bg-[#030303] rounded-[48px] overflow-hidden relative">
              
              {/* Phone Notch/Island */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[110px] h-[30px] bg-black rounded-full z-50 flex items-center justify-between px-3">
                 <div className="w-2.5 h-2.5 rounded-full bg-[#111] border border-white/5" />
                 <div className="w-1.5 h-1.5 rounded-full bg-[#161616] border border-white/5" />
              </div>
              
              {/* Screen Content */}
              <div className="absolute inset-0 flex flex-col p-6 pt-20 relative">
                
                {/* Subtle internal gradient matching brand */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#4F6EF7]/5 to-transparent pointer-events-none" />

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeScenario}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15, filter: "blur(4px)" }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col h-full gap-8 relative z-10"
                  >
                    {/* Mock UI Header */}
                    <div className="flex flex-col gap-3 text-center">
                      <motion.span 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1, duration: 0.4 }}
                        className="inline-block px-3 py-1 bg-[#4F6EF7]/10 border border-[#4F6EF7]/20 rounded-full text-[#4F6EF7] text-[9px] font-medium uppercase tracking-[0.2em] self-center"
                      >
                        {currentContent?.label}
                      </motion.span>
                      <h3 className="text-[#F2F2F0] text-[28px] font-serif-editorial font-light leading-tight">
                        {currentContent?.title}
                      </h3>
                    </div>

                    {/* Premium Mock UI Cards */}
                    <div className="flex-1 flex flex-col gap-4">
                      {[1, 2, 3].map((item, idx) => (
                        <motion.div 
                          key={item} 
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 + (idx * 0.1), duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                          className="w-full bg-white/[0.03] backdrop-blur-md rounded-2xl p-5 border border-white/[0.08] flex items-start gap-4 relative overflow-hidden"
                        >
                          {/* Shimmer effect */}
                          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.04] to-transparent animate-[shimmer_2s_infinite]" />
                          
                          <div className="w-12 h-12 rounded-xl bg-white/[0.05] flex-shrink-0" />
                          <div className="flex flex-col gap-2.5 w-full mt-1">
                            <div className="w-3/4 h-3 bg-white/[0.1] rounded-full" />
                            <div className="w-1/2 h-2.5 bg-white/[0.04] rounded-full" />
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Descriptive Text overlay at bottom */}
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5, duration: 0.6 }}
                      className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-[#030303] via-[#030303]/80 to-transparent -mx-6 -mb-6 pb-10"
                    >
                      <p className="text-[#A0A0A0] text-[13px] leading-relaxed text-center font-light">
                        {currentContent?.description}
                      </p>
                    </motion.div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
          
        </div>
      </ScrollReveal>
    </section>
  );
}
