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
    <section className="relative w-full min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden py-[160px]">
      <AmbientDotGrid />
      
      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center text-center w-full max-w-[1200px] px-6">
        
        {/* Headline */}
        <h1 className="flex flex-wrap justify-center overflow-hidden mb-6">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                ease: [0.16, 1, 0.3, 1], 
                delay: 0.4 + (i * 0.05) 
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
          transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-[24px] md:text-[32px] text-[#F2F2F0] font-serif-editorial font-light max-w-[700px] mb-6 leading-tight"
        >
          The AI-powered spatial intelligence platform that understands your world.
        </motion.p>

        {/* Supporting Sentence */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="text-[#6A6A6A] text-[18px] md:text-[20px] font-light leading-relaxed max-w-[650px] mb-12"
        >
          Discover nearby communities, events, businesses, routes, and opportunities through one intelligent experience that understands where you are, what you need, and what matters around you.
        </motion.p>

        {/* Actions */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <a href="#demo" className="h-[52px] px-8 rounded-full bg-[#F2F2F0] text-[#080808] flex items-center justify-center transition-all duration-500 hover:scale-[1.02]">
            <span className="text-[13px] font-medium tracking-[0.08em] uppercase">
              Experience Rheole
            </span>
          </a>

          <a href="#motion" className="h-[52px] px-8 rounded-full border border-[rgba(255,255,255,0.15)] bg-transparent text-[#F2F2F0] flex items-center justify-center transition-all duration-500 hover:border-[rgba(255,255,255,0.4)] hover:bg-[rgba(255,255,255,0.05)]">
            <span className="text-[13px] font-medium tracking-[0.08em] uppercase">
              Watch it in Motion
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
