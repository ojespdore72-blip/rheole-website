"use client";

import React from "react";
import { motion } from "framer-motion";

function AmbientDotGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.08]">
      <motion.div 
        animate={{ 
          x: ["0%", "-5%", "0%"],
          y: ["0%", "5%", "0%"]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 60, 
          ease: "linear" 
        }}
        className="w-[200vw] h-[200vw] absolute -top-[50vw] -left-[50vw]"
        style={{
          backgroundImage: "radial-gradient(#F2F2F0 1px, transparent 1px)",
          backgroundSize: "64px 64px"
        }}
      />
    </div>
  );
}

export default function HeroSection() {
  const words = "The pulse of your city.".split(" ");
  
  return (
    <section className="relative w-full min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden pt-20 pb-24">
      <AmbientDotGrid />
      
      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-[1100px] px-6 mt-[-5dvh]">
        
        {/* Eyebrow */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center gap-4 mb-8"
        >
          <div className="w-8 h-[2px] bg-[#4F6EF7]/50" />
          <span className="section-eyebrow text-[#4F6EF7]">WHAT IS RHEOLE?</span>
          <div className="w-8 h-[2px] bg-[#4F6EF7]/50" />
        </motion.div>

        {/* Headline */}
        <h1 className="flex flex-wrap justify-center overflow-hidden mb-8">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                ease: [0.16, 1, 0.3, 1], 
                delay: 0.4 + (i * 0.08) 
              }}
              className="text-[clamp(56px,8vw,96px)] font-serif-editorial leading-[1.05] tracking-tight font-black text-[#F2F2F0] mr-[clamp(12px,2vw,24px)]"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Concise Explanation */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-[20px] md:text-[24px] text-[#F2F2F0] font-light max-w-[700px] mb-6"
        >
          The AI-powered spatial intelligence platform that understands your world.
        </motion.p>

        {/* Supporting Sentence */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-[#6A6A6A] text-[15px] md:text-[16px] leading-relaxed max-w-[650px] mb-12"
        >
          Discover nearby communities, events, businesses, routes, and opportunities through one intelligent experience that understands where you are, what you need, and what matters around you.
        </motion.p>

        {/* Actions */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="flex flex-col sm:flex-row items-center gap-6"
        >
          <a href="#demo" className="group relative h-[52px] px-[32px] rounded-full bg-[#F2F2F0] text-[#080808] overflow-hidden flex items-center justify-center interactive transition-all duration-300 hover:shadow-[0_0_24px_rgba(242,242,240,0.3)]">
            <span className="relative z-10 text-[13px] font-medium tracking-[0.08em] uppercase">
              Experience Rheole
            </span>
          </a>

          <a href="#motion" className="group relative h-[52px] px-[32px] rounded-full border border-[rgba(255,255,255,0.15)] text-[#F2F2F0] bg-transparent overflow-hidden flex items-center justify-center interactive transition-all duration-300 hover:border-[rgba(255,255,255,0.4)] hover:bg-[rgba(255,255,255,0.05)]">
            <span className="relative z-10 text-[13px] font-medium tracking-[0.08em] uppercase">
              Watch it in Motion
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
