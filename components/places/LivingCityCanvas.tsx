"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Abstract nodes representing places in the city
const CITY_NODES = [
  { id: "cafe1", x: 20, y: 30, type: "cafe", name: "Third Wave Coffee", pulseDelay: 0 },
  { id: "event1", x: 60, y: 15, type: "event", name: "Founder Meetup", pulseDelay: 2 },
  { id: "park1", x: 75, y: 60, type: "park", name: "Cubbon Park", pulseDelay: 1 },
  { id: "comm1", x: 35, y: 70, type: "community", name: "Design Network", pulseDelay: 3 },
  { id: "route1", x: 45, y: 40, type: "route", name: "Metro Station", pulseDelay: 0.5 },
];

export default function LivingCityCanvas() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  return (
    <section className="w-full min-h-screen py-[160px] px-6 relative flex flex-col items-center">
      
      <div className="w-full max-w-[1200px] flex flex-col gap-12 relative z-10">
        <div className="flex flex-col gap-4">
          <span className="text-[#4F6EF7] text-[11px] font-medium tracking-[0.2em] uppercase">
            Chapter 2: Living Discovery
          </span>
          <h2 className="text-[clamp(32px,5vw,48px)] font-serif-editorial font-light text-[#F2F2F0] leading-[1.1]">
            The Living Canvas
          </h2>
          <p className="text-[#A0A0A0] text-[18px] max-w-[500px] font-light">
            Places aren't static pins. They are living networks of people, weather, and moments.
          </p>
        </div>

        {/* Abstract Canvas */}
        <div className="relative w-full aspect-[16/9] lg:aspect-[21/9] bg-[#0A0A0A] rounded-[32px] border border-[rgba(255,255,255,0.06)] overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.5)]">
          
          {/* Ambient dynamic weather/time effect */}
          <motion.div 
            animate={{ 
              background: [
                "radial-gradient(circle at 20% 30%, rgba(79, 110, 247, 0.05) 0%, transparent 50%)",
                "radial-gradient(circle at 80% 60%, rgba(255, 200, 100, 0.05) 0%, transparent 50%)",
                "radial-gradient(circle at 20% 30%, rgba(79, 110, 247, 0.05) 0%, transparent 50%)"
              ]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0"
          />

          {/* Grid lines (abstract streets) */}
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />

          {/* Glowing Nodes */}
          {CITY_NODES.map((node) => {
            const isHovered = hoveredNode === node.id;
            
            return (
              <div 
                key={node.id}
                className="absolute"
                style={{ left: `${node.x}%`, top: `${node.y}%` }}
                onMouseEnter={() => setHoveredNode(node.id)}
                onMouseLeave={() => setHoveredNode(null)}
              >
                {/* Pulse Ring */}
                <motion.div
                  animate={{ scale: [1, 2, 3], opacity: [0.5, 0, 0] }}
                  transition={{ duration: 3, delay: node.pulseDelay, repeat: Infinity, ease: "easeOut" }}
                  className="absolute inset-0 -m-4 rounded-full border border-[#4F6EF7]"
                />
                
                {/* Node Core */}
                <motion.div 
                  className={`relative w-3 h-3 rounded-full cursor-pointer transition-colors duration-500 ${
                    isHovered ? "bg-white" : "bg-[#4F6EF7]"
                  }`}
                  animate={{ boxShadow: isHovered ? "0 0 20px rgba(255,255,255,0.8)" : "0 0 10px rgba(79,110,247,0.5)" }}
                />

                {/* Info Panel Expansion */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      layoutId={`card-${node.id}`}
                      initial={{ opacity: 0, y: 10, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.9 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute left-6 top-1/2 -translate-y-1/2 w-[240px] bg-white/[0.05] backdrop-blur-xl border border-white/[0.1] rounded-2xl p-5 shadow-2xl z-50 pointer-events-none"
                    >
                      <span className="text-[#4F6EF7] text-[10px] uppercase tracking-widest font-medium mb-1 block">
                        {node.type}
                      </span>
                      <h4 className="text-white text-[18px] font-serif-editorial mb-3">{node.name}</h4>
                      
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center justify-between text-[11px]">
                          <span className="text-[#6A6A6A]">Atmosphere</span>
                          <span className="text-[#F2F2F0]">Vibrant</span>
                        </div>
                        <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: "80%" }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="h-full bg-gradient-to-r from-[#4F6EF7] to-white"
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
