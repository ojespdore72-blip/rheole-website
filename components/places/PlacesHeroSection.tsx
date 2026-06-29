"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function PlacesHeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section 
      ref={containerRef}
      className="relative w-full min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden bg-[#030303]"
    >
      {/* Subtle Ambient Background Motion */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        {/* We use radial gradients to create a "breathing city" abstract look */}
        <motion.div 
          animate={{ 
            scale: [1, 1.05, 1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-[50vw] h-[50vw] bg-[#4F6EF7] rounded-full blur-[120px]"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 right-1/4 w-[40vw] h-[40vw] bg-white rounded-full blur-[150px]"
        />
      </motion.div>

      {/* Grid overlay for texture */}
      <div className="absolute inset-0 z-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20 pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-[900px] px-6 mx-auto flex flex-col items-center text-center mt-20">
        
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-[#4F6EF7] text-[11px] font-medium tracking-[0.2em] uppercase mb-8"
        >
          A New Spatial Paradigm
        </motion.span>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-[clamp(48px,8vw,96px)] font-serif-editorial font-light text-[#F2F2F0] leading-[1.05] tracking-tight mb-12"
        >
          Every place has a pulse.
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-6 max-w-[600px]"
        >
          <p className="text-[20px] md:text-[24px] text-[#A0A0A0] font-light leading-relaxed">
            Rheole understands places beyond addresses.
          </p>
          <p className="text-[16px] md:text-[18px] text-[#6A6A6A] font-light leading-relaxed">
            It understands atmosphere. Communities. Moments. Intent. Time. Movement. Context.
          </p>
          <p className="text-[16px] md:text-[18px] text-[#A0A0A0] font-light leading-relaxed mt-4">
            We don't just tell you <em className="text-[#F2F2F0] font-serif-editorial italic">where</em> it is.<br/>
            We understand <em className="text-[#F2F2F0] font-serif-editorial italic">why</em> you want to go there.
          </p>
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-[#6A6A6A]">Scroll</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-[#6A6A6A] to-transparent"
        />
      </motion.div>

    </section>
  );
}
