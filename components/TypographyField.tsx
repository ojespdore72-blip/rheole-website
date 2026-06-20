"use client";

import React from "react";
import { motion } from "framer-motion";

interface TypographyFieldProps {
  words: string[];
  reveal: boolean;
}

interface AnimatedWordProps {
  text: string;
  reveal: boolean;
  delay: number;
  baseOpacity: number;
}

// 40 Hand-crafted slots layout with safe, well-spaced coordinates.
// Center zone (Top: 38%-62%, Left: 30%-70%) is kept clear for negative space.
// Coordinates are carefully budgeted to guarantee zero overlap.
const slots = [
  // Quadrant 1 (Top Left)
  { top: "5%", left: "4%", fontSize: "text-[10px] md:text-xs", opacity: 0.10 },
  { top: "6%", left: "26%", fontSize: "text-xs md:text-sm", opacity: 0.15 },
  { top: "14%", left: "8%", fontSize: "text-[11px] md:text-xs", opacity: 0.12 },
  { top: "15%", left: "30%", fontSize: "text-sm md:text-md", opacity: 0.20 },
  { top: "23%", left: "5%", fontSize: "text-xs md:text-sm", opacity: 0.18 },
  { top: "24%", left: "22%", fontSize: "text-md md:text-lg", opacity: 0.24 },
  { top: "31%", left: "10%", fontSize: "text-lg md:text-xl", opacity: 0.28 },
  { top: "32%", left: "28%", fontSize: "text-xl md:text-2xl", opacity: 0.35 },
  { top: "38%", left: "4%", fontSize: "text-lg", opacity: 0.28 },
  { top: "39%", left: "18%", fontSize: "text-xl md:text-2xl", opacity: 0.32 },

  // Quadrant 2 (Top Right)
  { top: "4%", left: "86%", fontSize: "text-[10px] md:text-xs", opacity: 0.10 },
  { top: "5%", left: "64%", fontSize: "text-xs md:text-sm", opacity: 0.15 },
  { top: "13%", left: "81%", fontSize: "text-[11px] md:text-xs", opacity: 0.12 },
  { top: "14%", left: "55%", fontSize: "text-sm md:text-md", opacity: 0.20 },
  { top: "22%", left: "88%", fontSize: "text-xs md:text-sm", opacity: 0.18 },
  { top: "23%", left: "68%", fontSize: "text-md md:text-lg", opacity: 0.24 },
  { top: "30%", left: "78%", fontSize: "text-lg md:text-xl", opacity: 0.28 },
  { top: "31%", left: "57%", fontSize: "text-xl md:text-2xl", opacity: 0.35 },
  { top: "38%", left: "84%", fontSize: "text-lg", opacity: 0.28 },
  { top: "39%", left: "70%", fontSize: "text-xl md:text-2xl", opacity: 0.32 },

  // Quadrant 3 (Bottom Left)
  { top: "92%", left: "5%", fontSize: "text-[10px] md:text-xs", opacity: 0.10 },
  { top: "89%", left: "22%", fontSize: "text-xs md:text-sm", opacity: 0.15 },
  { top: "81%", left: "8%", fontSize: "text-[11px] md:text-xs", opacity: 0.12 },
  { top: "78%", left: "28%", fontSize: "text-sm md:text-md", opacity: 0.20 },
  { top: "71%", left: "4%", fontSize: "text-xs md:text-sm", opacity: 0.18 },
  { top: "68%", left: "20%", fontSize: "text-md md:text-lg", opacity: 0.24 },
  { top: "61%", left: "10%", fontSize: "text-lg md:text-xl", opacity: 0.28 },
  { top: "58%", left: "26%", fontSize: "text-xl md:text-2xl", opacity: 0.35 },
  { top: "52%", left: "4%", fontSize: "text-lg", opacity: 0.28 },
  { top: "49%", left: "18%", fontSize: "text-xl md:text-2xl", opacity: 0.32 },

  // Quadrant 4 (Bottom Right)
  { top: "92%", left: "85%", fontSize: "text-[10px] md:text-xs", opacity: 0.10 },
  { top: "89%", left: "65%", fontSize: "text-xs md:text-sm", opacity: 0.15 },
  { top: "82%", left: "81%", fontSize: "text-[11px] md:text-xs", opacity: 0.12 },
  { top: "78%", left: "57%", fontSize: "text-sm md:text-md", opacity: 0.20 },
  { top: "71%", left: "88%", fontSize: "text-xs md:text-sm", opacity: 0.18 },
  { top: "68%", left: "70%", fontSize: "text-md md:text-lg", opacity: 0.24 },
  { top: "61%", left: "78%", fontSize: "text-lg md:text-xl", opacity: 0.28 },
  { top: "58%", left: "59%", fontSize: "text-xl md:text-2xl", opacity: 0.35 },
  { top: "51%", left: "84%", fontSize: "text-lg", opacity: 0.28 },
  { top: "49%", left: "68%", fontSize: "text-xl md:text-2xl", opacity: 0.32 },
];

function AnimatedWord({ text, reveal, delay, baseOpacity }: AnimatedWordProps) {
  const characters = Array.from(text);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.02,
        delayChildren: delay,
      }
    }
  };

  const letterVariants = {
    hidden: { 
      opacity: 0, 
      y: 5,
      filter: "blur(3px)" 
    },
    visible: { 
      opacity: baseOpacity, 
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as const
      }
    }
  };

  return (
    <motion.span
      variants={containerVariants}
      initial="hidden"
      animate={reveal ? "visible" : "hidden"}
      className="inline-block"
    >
      {characters.map((char, i) => (
        <motion.span
          key={i}
          variants={letterVariants}
          className="inline-block"
          style={{ display: char === " " ? "inline" : "inline-block" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
}

export default function TypographyField({ words, reveal }: TypographyFieldProps) {
  const animScopeId = React.useId().replace(/:/g, "-");

  // Keep it limited to slots length to ensure 1:1 mapping with no duplicates or overlaps
  const uniqueWords = words.slice(0, slots.length);

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0 overflow-hidden">
      {/* 
        Slow drift animations on the individual word containers
      */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes float-drift-1-${animScopeId} {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(5px, -12px, 0); }
        }
        @keyframes float-drift-2-${animScopeId} {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(-7px, 7px, 0); }
        }
        @keyframes float-drift-3-${animScopeId} {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(10px, 5px, 0); }
        }
        @keyframes float-drift-4-${animScopeId} {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(-5px, -9px, 0); }
        }

        .anim-drift-1-${animScopeId} {
          animation: float-drift-1-${animScopeId} 75s ease-in-out infinite;
        }
        .anim-drift-2-${animScopeId} {
          animation: float-drift-2-${animScopeId} 85s ease-in-out infinite;
        }
        .anim-drift-3-${animScopeId} {
          animation: float-drift-3-${animScopeId} 95s ease-in-out infinite;
        }
        .anim-drift-4-${animScopeId} {
          animation: float-drift-4-${animScopeId} 105s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .anim-drift-1-${animScopeId},
          .anim-drift-2-${animScopeId},
          .anim-drift-3-${animScopeId},
          .anim-drift-4-${animScopeId} {
            animation: none !important;
            transform: none !important;
          }
        }
      `}} />

      {uniqueWords.map((wordText, index) => {
        const slot = slots[index % slots.length];
        const animClass = `anim-drift-${(index % 4) + 1}-${animScopeId}`;
        const colorClass = "text-brand-blue/90 dark:text-luxury-white/95";
        
        // Stagger delays across the grid (0 to 1.4s)
        const wordDelay = (index % 8) * 0.18;

        return (
          <div
            key={index}
            className={`absolute font-serif-editorial uppercase tracking-[0.05em] md:tracking-[0.08em] whitespace-nowrap ${slot.fontSize} ${colorClass} ${animClass}`}
            style={{
              top: slot.top,
              left: slot.left,
              willChange: "transform",
            }}
          >
            <AnimatedWord 
              text={wordText} 
              reveal={reveal} 
              delay={wordDelay} 
              baseOpacity={slot.opacity} 
            />
          </div>
        );
      })}
    </div>
  );
}
