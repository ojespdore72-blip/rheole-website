"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import TypographyField from "./TypographyField";

interface WordItem {
  text: string;
  top: string;
  left: string;
  fontSize: string;
  opacity: number;
  animationClass?: string;
}

interface StatementSectionProps {
  statement: string;
  words: WordItem[];
}

export default function StatementSection({ statement, words }: StatementSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const sectionHeight = rect.height;
      const viewportHeight = window.innerHeight;
      
      const stickyRange = sectionHeight - viewportHeight;
      if (stickyRange <= 0) return;
      
      const currentScroll = -rect.top;
      const currentProgress = Math.max(0, Math.min(1, currentScroll / stickyRange));
      setProgress(currentProgress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    
    // Trigger initial calculation
    handleScroll();

    // Poll occasionally to handle initial layout loads or resizing
    const interval = setInterval(handleScroll, 200);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(interval);
    };
  }, []);

  // Map progress: starts at 0, starts fading in at 15% scroll, fully visible at 60% scroll
  const opacity = progress < 0.15 
    ? 0 
    : progress > 0.6 
    ? 1 
    : (progress - 0.15) / 0.45;

  const reveal = progress > 0.15;

  return (
    <div 
      ref={containerRef} 
      className="relative w-full h-[180vh]"
    >
      {/* Sticky viewport container (keeps the statement centered while background words fade in) */}
      <div className="sticky top-0 w-full h-screen flex flex-col items-center justify-center overflow-hidden px-6">
        
        <motion.div 
          style={{ opacity }}
          className="absolute inset-0 w-full h-full pointer-events-none select-none z-0"
        >
          <TypographyField words={words} reveal={reveal} />
        </motion.div>

        <div className="max-w-4xl text-center z-10">
          <h2 className="text-3xl md:text-6xl lg:text-7xl font-serif-editorial font-light leading-none text-brand-blue/90 dark:text-luxury-white/95">
            &ldquo;{statement}&rdquo;
          </h2>
        </div>
      </div>
    </div>
  );
}
