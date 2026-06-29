"use client";

import React, { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const variablesData = [
  {
    title: "Crowd & Noise",
    description: "We process real-time volume and occupancy signals to distinguish between a quiet study spot and a bustling networking hub. A cafe that is perfect for a Zoom call at 10 AM might be overwhelmingly loud by 12:30 PM. By continuously analyzing these shifts, we ensure the atmosphere always matches your immediate intent."
  },
  {
    title: "Walking Effort & Weather",
    description: "Distance is relative. We analyze the terrain, current weather conditions, and urban infrastructure to understand if a destination is truly walkable in the current moment. A five-minute walk in perfect 70-degree weather is very different from a five-minute walk during a sudden downpour or high humidity. Rheole accounts for this friction."
  },
  {
    title: "Temporal Intent",
    description: "Places shift their identities throughout the day. A location known for its excellent morning espresso might transform into a high-energy cocktail bar at night. Rheole understands these temporal shifts and filters recommendations based on exactly what the space is doing right now, not what its generic category says it does."
  },
  {
    title: "Community Presence",
    description: "We map the movement of different urban tribes. If you are a founder looking to network, the 'best' cafe isn't the one with the highest Google rating—it's the one where other founders are currently gathering. We look beyond static reviews to understand the dynamic social fabric of a location."
  }
];

export default function VariablesPage() {
  const [activeTab, setActiveTab] = useState<number | null>(0);

  return (
    <main className="min-h-screen bg-[#030303] text-[#F2F2F0] font-sans selection:bg-[#4F6EF7]/30 selection:text-white">
      
      <section className="w-full pt-[200px] pb-[160px] px-6 relative flex flex-col items-center overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#4F6EF7] rounded-full blur-[150px] opacity-[0.05] pointer-events-none" />

        <ScrollReveal className="w-full max-w-[1000px] flex flex-col gap-16 relative z-10">
          
          {/* Header */}
          <div className="flex flex-col gap-6 text-center border-b border-white/[0.06] pb-16">
            <span className="text-[#4F6EF7] text-[11px] font-medium tracking-[0.2em] uppercase">
              Core Intelligence
            </span>
            <h1 className="text-[clamp(40px,6vw,64px)] font-serif-editorial font-light leading-[1.1] tracking-tight">
              How variables alter recommendations.
            </h1>
            <p className="text-[18px] md:text-[22px] text-[#A0A0A0] font-light leading-relaxed max-w-[700px] mx-auto mt-4">
              Context is everything. A location's viability changes minute by minute based on a complex web of real-time variables.
            </p>
          </div>

          {/* Interactive Content Block */}
          <div className="flex flex-col md:flex-row gap-16 lg:gap-32 items-start mt-12">
            
            {/* Left: Table of Contents (Desktop) & Accordion Headers (Mobile) */}
            <div className="w-full md:w-[35%] flex flex-col">
              <h3 className="text-[12px] uppercase tracking-widest text-[#4F6EF7] font-medium mb-8">Table of Contents</h3>
              <div className="flex flex-col w-full">
                {variablesData.map((variable, idx) => {
                  const isActive = activeTab === idx;
                  return (
                    <div key={idx} className="flex flex-col w-full border-b border-white/[0.06] last:border-none">
                      <button 
                        onClick={() => setActiveTab(isActive ? (window.innerWidth < 768 ? null : idx) : idx)}
                        className="flex justify-between items-center w-full py-8 text-left transition-all duration-500 group"
                      >
                        <span className={`text-[22px] md:text-[26px] font-serif-editorial transition-colors duration-500 ${isActive ? 'text-[#F2F2F0]' : 'text-[#6A6A6A] group-hover:text-[#A0A0A0]'}`}>
                          {variable.title}
                        </span>
                        
                        {/* Mobile accordion icon */}
                        <span className="text-[#6A6A6A] md:hidden">
                          {isActive ? <Minus size={18} /> : <Plus size={18} />}
                        </span>
                        
                        {/* Desktop indicator */}
                        <span className={`hidden md:block transition-all duration-500 ${isActive ? 'text-[#4F6EF7] opacity-100 translate-x-0' : 'text-transparent opacity-0 -translate-x-4 group-hover:text-[#6A6A6A] group-hover:opacity-100 group-hover:translate-x-0'}`}>
                          →
                        </span>
                      </button>
                      
                      {/* Mobile Content Accordion */}
                      <div className="md:hidden">
                        <AnimatePresence>
                          {isActive && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden"
                            >
                              <div className="pb-8">
                                <p className="text-[18px] text-[#A0A0A0] font-light leading-relaxed italic border-l border-[#4F6EF7]/30 pl-6">
                                  {variable.description}
                                </p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Right: Detailed Explanation (Desktop Only) */}
            <div className="hidden md:flex flex-1 flex-col pt-4 relative min-h-[400px]">
              <AnimatePresence mode="wait">
                {activeTab !== null && (
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="relative z-10 flex flex-col gap-8"
                  >
                    <span className="text-[12px] uppercase tracking-widest text-[#6A6A6A] font-medium">{variablesData[activeTab].title} Insight</span>
                    <p className="text-[18px] lg:text-[22px] text-[#A0A0A0] font-light leading-relaxed">
                      {variablesData[activeTab].description}
                    </p>
                    <div className="w-16 h-[1px] bg-[#4F6EF7]/40 mt-4" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
          </div>

        </ScrollReveal>
      </section>
    </main>
  );
}
