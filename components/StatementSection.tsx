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
    // Find the custom scroll container
    const scrollContainer = document.getElementById("snap-container");
    if (!scrollContainer) return;

    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const containerRect = scrollContainer.getBoundingClientRect();
      
      // Calculate start offset relative to scroll container top
      const start = rect.top - containerRect.top;
      const sectionHeight = rect.height;
      const viewportHeight = containerRect.height;
      
      const stickyRange = sectionHeight - viewportHeight;
      if (stickyRange <= 0) return;
      
      // Progress from 0 (top aligned) to 1 (fully scrolled sticky range)
      const currentScroll = -start;
      const currentProgress = Math.max(0, Math.min(1, currentScroll / stickyRange));
      setProgress(currentProgress);
    };

    // Listen to scroll events on the custom scroll container
    scrollContainer.addEventListener("scroll", handleScroll, { passive: true });
    
    // Trigger initial calculation
    handleScroll();

    // Poll occasionally to handle initial layout loads or resizing
    const interval = setInterval(handleScroll, 200);

    return () => {
      scrollContainer.removeEventListener("scroll", handleScroll);
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
      className="relative w-full h-[180vh] snap-start"
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
