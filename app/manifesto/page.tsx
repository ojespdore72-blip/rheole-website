"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

const Statement = ({ text, index, total }: { text: string; index: number; total: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Fade in as it approaches center, fade out as it leaves
  const opacity = useTransform(scrollYProgress, [0.2, 0.45, 0.55, 0.8], [0, 1, 1, 0]);
  
  // Scale up slightly as it reaches center
  const scale = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0.8, 1, 0.9]);
  
  // Subtle parallax Y movement
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <div ref={ref} className="h-screen w-full flex items-center justify-center relative snap-center px-4">
      <motion.div 
        style={{ opacity, scale, y }}
        className="max-w-4xl text-center flex flex-col gap-8"
      >
        {index === 0 && <span className="text-brand-gold text-xs font-mono uppercase tracking-[0.4em]">The Paradox</span>}
        {index === 4 && <span className="text-brand-gold text-xs font-mono uppercase tracking-[0.4em]">What we believe</span>}
        {index === 8 && <span className="text-brand-gold text-xs font-mono uppercase tracking-[0.4em]">The Invisible Layer</span>}
        
        <h2 className={`font-light font-serif-editorial leading-tight tracking-wide text-gray-900 dark:text-white ${text.length > 50 ? 'text-3xl md:text-5xl lg:text-6xl' : 'text-5xl md:text-7xl lg:text-8xl'}`}>
          {text}
        </h2>
        
        {/* Subtle breathing underline */}
        <motion.div 
          animate={{ width: ["0%", "40%", "0%"], opacity: [0, 0.5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="h-[1px] bg-brand-gold mx-auto mt-4" 
        />
      </motion.div>
    </div>
  );
};

export default function Manifesto() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  
  // Background gradient shift based on scroll
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["#ffffff", "#f9f9fb", "#ffffff"]
  );

  const statements = [
    "We know what is happening across continents.",
    "We often do not know what is happening around the corner.",
    "We navigate the world with unprecedented technology.",
    "Yet remain disconnected from our immediate surroundings.",
    "We believe the future does not need more information.",
    "The future needs better understanding.",
    "We believe discovery should be meaningful.",
    "We believe local knowledge should not be hidden.",
    "Every city has a rhythm.",
    "Every neighborhood has a pulse.",
    "Most of it exists unseen.",
    "Rheole exists to make the invisible visible.",
    "Not through noise. Not through endless feeds.",
    "But through context. Awareness. Understanding.",
    "The future is not virtual.",
    "The future is local.",
    "Technology should not pull people away from the real world.",
    "It should help them engage with it more deeply.",
    "We are building a new layer of understanding.",
    "The world is already speaking.",
    "Rheole exists to help people hear it."
  ];

  return (
    <motion.div 
      ref={containerRef}
      style={{ backgroundColor }}
      className="relative w-full min-h-screen text-gray-900 dark:text-white font-sans selection:bg-brand-gold/20"
    >
      {/* Reactive Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <motion.div 
          style={{ top: backgroundY }}
          className="absolute w-full h-[100vh] bg-[radial-gradient(ellipse_at_center,rgba(197,168,128,0.05),transparent_60%)] blur-[100px]" 
        />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiIvPjwvc3ZnPg==')] opacity-30" />
      </div>


      {/* Intro sequence */}
      <div className="h-screen flex flex-col items-center justify-center relative snap-start">
        <motion.div 
          initial={{ opacity: 0, filter: "blur(20px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="text-center"
        >
          <p className="text-brand-gold text-xs font-mono uppercase tracking-[0.5em] mb-6">A declaration</p>
          <h1 className="text-7xl md:text-[150px] font-light font-serif-editorial tracking-widest text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20">
            MANIFESTO
          </h1>
          <motion.div 
            animate={{ y: [0, 10, 0] }} 
            transition={{ duration: 2, repeat: Infinity }}
            className="mt-20 opacity-50"
          >
            <span className="text-xs tracking-widest uppercase font-mono">Scroll</span>
          </motion.div>
        </motion.div>
      </div>

      {/* The Exhibition */}
      <div className="relative z-10 pb-[20vh] snap-y snap-mandatory">
        {statements.map((text, i) => (
          <Statement key={i} text={text} index={i} total={statements.length} />
        ))}
      </div>

      {/* Outro */}
      <div className="min-h-screen flex items-center justify-center relative snap-center bg-black">
        <div className="text-center max-w-4xl px-4 flex flex-col gap-16 items-center">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-light font-serif-editorial">
            The future belongs to those who understand their world.
          </h2>
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <Link
              href="/founding-access"
              className="group relative px-12 py-5 bg-white text-black rounded-full text-xs font-semibold uppercase tracking-widest overflow-hidden"
            >
              <span className="relative z-10 group-hover:text-white transition-colors duration-500">Join the Movement</span>
              <div className="absolute inset-0 bg-brand-blue scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
