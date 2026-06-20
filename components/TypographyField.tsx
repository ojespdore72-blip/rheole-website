"use client";

import React from "react";
import { motion } from "framer-motion";

interface WordItem {
  text: string;
  top: string;
  left: string;
  fontSize: string;
  opacity: number;
  animationClass?: string;
}

interface TypographyFieldProps {
  words: WordItem[];
  reveal: boolean;
}

interface AnimatedWordProps {
  text: string;
  reveal: boolean;
  delay: number;
  baseOpacity: number;
}

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

      {words.map((item, index) => {
        const animClass = `anim-drift-${(index % 4) + 1}-${animScopeId}`;
        const colorClass = "text-brand-blue/90 dark:text-luxury-white/95";
        
        // Stagger delays across the grid (0 to 1.4s)
        const wordDelay = (index % 8) * 0.18;

        return (
          <div
            key={index}
            className={`absolute font-serif-editorial uppercase tracking-[0.05em] md:tracking-[0.08em] whitespace-nowrap ${item.fontSize} ${colorClass} ${animClass}`}
            style={{
              top: item.top,
              left: item.left,
              willChange: "transform",
            }}
          >
            <AnimatedWord 
              text={item.text} 
              reveal={reveal} 
              delay={wordDelay} 
              baseOpacity={item.opacity} 
            />
          </div>
        );
      })}
    </div>
  );
}
