"use client";

import React from "react";
import { motion } from "framer-motion";

export default function FounderLetter() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as const },
  };

  return (
    <div className="w-full min-h-screen py-32 px-6 md:px-12 max-w-2xl mx-auto flex flex-col gap-16 md:gap-20 selection:bg-brand-gold/20">
      {/* Title */}
      <motion.div {...fadeInUp} className="flex flex-col gap-4 border-b border-brand-blue/15 dark:border-luxury-white/10 pb-8">
        <h1 className="text-3xl md:text-5xl font-light tracking-wide uppercase text-brand-blue dark:text-luxury-white font-serif-editorial">
          FOUNDER LETTER
        </h1>
        <p className="text-xs uppercase tracking-widest text-brand-gold font-semibold">
          A note on local intelligence and physical computing.
        </p>
      </motion.div>

      {/* Editorial Letter Body */}
      <motion.article
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.2 }}
        className="flex flex-col gap-6 text-brand-blue/90 dark:text-luxury-white/90 font-light text-base md:text-lg leading-relaxed font-serif-editorial"
      >
        <p>To those who explore,</p>

        <p>
          Every day, millions of events unfold around us. Communities form, conversations begin, places come alive, and opportunities appear. Yet, most of it goes completely unnoticed.
        </p>

        <p>
          We live in an era where we can discover what is happening across the world in seconds. Yet we remain surprisingly blind to our immediate surroundings. We often do not know what is happening down our street, which local communities share our interests, or which nearby events are worth attending. The physical world around us has become invisible behind screens designed to capture and hold our attention.
        </p>

        <p>
          Rheole exists to change that.
        </p>

        <p>
          We are building the intelligence layer between people and the physical world. Not by creating another social network, but by helping people understand the world immediately around them. Simply. Naturally. Instantly.
        </p>

        <p>
          Our technology continuously interprets signals from communities, events, conversations, movement, and local activity to build a complete, real-time understanding of what matters—not globally, but locally.
        </p>

        <p>
          We are committed to building this responsibly, keeping coordinates and presence data hashed on the edge. Technology should respect your privacy while bringing you closer to your physical coordinates.
        </p>

        <p>
          Thank you for joining us on this journey to make the physical world visible again.
        </p>

        <div className="mt-8 flex flex-col gap-1 not-italic">
          <span className="font-semibold text-brand-blue dark:text-luxury-white uppercase tracking-wider text-sm">
            Ojes P Dore
          </span>
          <span className="text-xs text-brand-gold uppercase tracking-widest text-[10px]">
            Founder of Rheole
          </span>
        </div>
      </motion.article>

      {/* Footer link to main */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="border-t border-brand-blue/15 dark:border-luxury-white/10 pt-12 text-center"
      >
        <a
          href="/"
          className="text-xs uppercase tracking-widest text-brand-blue/50 dark:text-luxury-white/40 hover:text-brand-gold transition-colors duration-300"
        >
          Return to home
        </a>
      </motion.div>
    </div>
  );
}
