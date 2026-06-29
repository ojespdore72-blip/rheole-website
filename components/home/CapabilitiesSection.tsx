"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import { Compass, Map, Users, Brain } from "lucide-react";

const capabilities = [
  {
    id: "discover",
    title: "Discover",
    icon: <Compass size={24} strokeWidth={1.5} />,
    items: ["Restaurants", "Events", "Communities", "Businesses", "Hidden places"]
  },
  {
    id: "navigate",
    title: "Navigate",
    icon: <Map size={24} strokeWidth={1.5} />,
    items: ["Smart routing", "Live traffic", "Transit", "Walking", "Cycling"]
  },
  {
    id: "connect",
    title: "Connect",
    icon: <Users size={24} strokeWidth={1.5} />,
    items: ["Communities", "Founders", "Students", "Local groups", "Nearby people"]
  },
  {
    id: "understand",
    title: "Understand",
    icon: <Brain size={24} strokeWidth={1.5} />,
    items: ["Intent", "Context", "Time", "Weather", "Interests", "Routine"]
  }
];

export default function CapabilitiesSection() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section className="w-full py-[120px] px-6 bg-[#0a0a0a]">
      <ScrollReveal className="w-full max-w-[1200px] mx-auto flex flex-col gap-16">
        
        <div className="flex flex-col gap-4 text-center">
          <span className="section-eyebrow text-[#4F6EF7]">WHAT CAN RHEOLE DO?</span>
          <h2 className="text-[32px] md:text-[48px] font-light font-serif-editorial text-[#F2F2F0]">
            The entire city, structured for you.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((cap) => (
            <div
              key={cap.id}
              className="relative rounded-2xl border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.02)] p-8 transition-colors duration-500 hover:bg-[rgba(255,255,255,0.05)] hover:border-[rgba(255,255,255,0.15)] flex flex-col items-center text-center overflow-hidden h-[300px]"
              onMouseEnter={() => setHoveredId(cap.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Icon & Title */}
              <motion.div 
                className="flex flex-col items-center gap-4 mt-8"
                animate={{ y: hoveredId === cap.id ? -20 : 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="w-16 h-16 rounded-full bg-[#111] border border-[rgba(255,255,255,0.1)] flex items-center justify-center text-[#4F6EF7]">
                  {cap.icon}
                </div>
                <h3 className="text-[20px] font-medium text-[#F2F2F0] tracking-wide uppercase">
                  {cap.title}
                </h3>
              </motion.div>

              {/* Expanded Items */}
              <AnimatePresence>
                {hoveredId === cap.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute bottom-8 left-0 w-full flex flex-col gap-2 px-6"
                  >
                    {cap.items.map((item, idx) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.05, duration: 0.3 }}
                        className="text-[14px] text-[#A0A0A0] font-light"
                      >
                        {item}
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

      </ScrollReveal>
    </section>
  );
}
