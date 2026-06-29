"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import { Compass, Map, Users, Brain, Plus, Minus, ArrowRight } from "lucide-react";
import Link from "next/link";

const capabilities = [
  {
    id: "discover",
    title: "Discover",
    icon: <Compass size={24} strokeWidth={1} />,
    items: ["Restaurants", "Events", "Communities", "Businesses", "Hidden places"]
  },
  {
    id: "navigate",
    title: "Navigate",
    icon: <Map size={24} strokeWidth={1} />,
    items: ["Smart routing", "Live traffic", "Transit", "Walking", "Cycling"]
  },
  {
    id: "connect",
    title: "Connect",
    icon: <Users size={24} strokeWidth={1} />,
    items: ["Communities", "Founders", "Students", "Local groups", "Nearby people"]
  },
  {
    id: "understand",
    title: "Understand",
    icon: <Brain size={24} strokeWidth={1} />,
    items: ["Intent", "Context", "Time", "Weather", "Interests", "Routine"]
  }
];

export default function CapabilitiesSection() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(prev => prev === id ? null : id);
  };

  return (
    <section className="w-full py-[160px] px-6 bg-[#0a0a0a]">
      <ScrollReveal className="w-full max-w-[900px] mx-auto flex flex-col gap-16">
        
        <div className="flex flex-col items-center gap-6 text-center">
          <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-[#4F6EF7]">WHAT CAN RHEOLE DO?</span>
          <h2 className="text-[clamp(40px,5vw,64px)] font-serif-editorial font-light text-[#F2F2F0] leading-[1.1]">
            The entire city, structured for you.
          </h2>
        </div>

        <div className="flex flex-col border-t border-[rgba(255,255,255,0.08)]">
          {capabilities.map((cap) => {
            const isExpanded = expandedId === cap.id;
            
            return (
              <div
                key={cap.id}
                className="flex flex-col border-b border-[rgba(255,255,255,0.08)] overflow-hidden transition-colors duration-500 hover:bg-[rgba(255,255,255,0.01)]"
              >
                {/* Header / Trigger */}
                <button
                  onClick={() => toggleExpand(cap.id)}
                  className="w-full flex items-center justify-between py-10 px-4 group"
                >
                  <div className="flex items-center gap-8">
                    <div className="text-[#6A6A6A] group-hover:text-[#F2F2F0] transition-colors duration-500">
                      {cap.icon}
                    </div>
                    <h3 className="text-[24px] md:text-[28px] font-light font-serif-editorial text-[#F2F2F0] tracking-wide">
                      {cap.title}
                    </h3>
                  </div>
                  
                  <div className="text-[#6A6A6A] group-hover:text-[#F2F2F0] transition-colors duration-500">
                    {isExpanded ? <Minus size={16} strokeWidth={1} /> : <Plus size={16} strokeWidth={1} />}
                  </div>
                </button>

                {/* Expanded Content */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="px-4 pb-10"
                    >
                      <div className="pl-16 flex flex-col">
                        {cap.items.map((item, idx) => (
                          <motion.div
                            key={item}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.05 + 0.1, duration: 0.4 }}
                            className={`w-full max-w-[280px] ${idx !== cap.items.length - 1 ? 'border-b border-[rgba(255,255,255,0.06)]' : ''}`}
                          >
                            <Link 
                              href="/in-progress" 
                              className="group/link flex items-center justify-between text-[15px] md:text-[16px] text-[#A0A0A0] font-light transition-colors duration-300 hover:text-[#F2F2F0] py-4 w-full"
                            >
                              {item}
                              <ArrowRight size={14} className="opacity-0 -translate-x-2 transition-all duration-300 group-hover/link:opacity-100 group-hover/link:translate-x-0 text-[#4F6EF7]" />
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </ScrollReveal>
    </section>
  );
}
