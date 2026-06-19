"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Atmosphere from "@/components/Atmosphere";
import Footer from "@/components/Footer";
import Link from "next/link";
import Navbar from "@/components/Navbar";

interface CategoryItem {
  id: string;
  label: string;
  description: string;
}

const categories: CategoryItem[] = [
  {
    id: "people",
    label: "People",
    description: "Resonances of presence. Meet the minds, creators, and neighbors sharing your coordinates.",
  },
  {
    id: "communities",
    label: "Communities",
    description: "Locally organized nodes. Connect with neighborhood circles and collectives sharing your space.",
  },
  {
    id: "events",
    label: "Events",
    description: "Moments in motion. Live gatherings, exhibitions, and spontaneous meets happening now.",
  },
  {
    id: "places",
    label: "Places",
    description: "Rediscover the physical. Unearth hidden spaces, cafes, and urban landmarks down your street.",
  },
  {
    id: "conversations",
    label: "Conversations",
    description: "Hyperlocal wavelengths. Real-time dialogues and discussions anchored to where you stand.",
  },
  {
    id: "opportunities",
    label: "Opportunities",
    description: "Serendipitous collaborations. Local gigs, projects, and resources waiting to be unlocked.",
  },
];

function InteractiveCategories() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const activeDescription = hoveredId
    ? categories.find((c) => c.id === hoveredId)?.description
    : "The world becoming more visible.";

  return (
    <div className="flex flex-col gap-12 items-center w-full max-w-3xl mx-auto">
      {/* Category Labels Grid */}
      <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-4 md:gap-x-8">
        {categories.map((category, index) => {
          const isHovered = hoveredId === category.id;
          const isAnyHovered = hoveredId !== null;
          const opacity = isHovered ? 1 : isAnyHovered ? 0.35 : 0.85;

          return (
            <React.Fragment key={category.id}>
              {index > 0 && (
                <span className="text-brand-blue/20 dark:text-luxury-white/10 select-none hidden sm:inline text-sm">
                  •
                </span>
              )}
              <div
                className="relative cursor-pointer group py-1"
                onMouseEnter={() => setHoveredId(category.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <motion.span
                  animate={{ opacity }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className={`text-sm md:text-lg tracking-[0.2em] uppercase font-medium transition-colors duration-300 font-sans ${
                    isHovered
                      ? "text-brand-gold"
                      : "text-brand-blue/80 dark:text-luxury-white/80 group-hover:text-brand-blue dark:group-hover:text-luxury-white"
                  }`}
                >
                  {category.label}
                </motion.span>
                {isHovered && (
                  <motion.div
                    layoutId="activeUnderline"
                    className="absolute -bottom-1 left-0 right-0 h-[1px] bg-brand-gold"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </div>
            </React.Fragment>
          );
        })}
      </div>

      {/* Dynamic Description Box */}
      <div className="h-16 flex items-center justify-center px-4 w-full">
        <AnimatePresence mode="wait">
          <motion.p
            key={hoveredId || "default"}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className={`text-xs md:text-sm tracking-widest uppercase text-center leading-relaxed ${
              hoveredId
                ? "text-brand-blue/90 dark:text-luxury-white/90 font-medium"
                : "text-brand-blue/40 dark:text-luxury-white/45 italic"
            }`}
          >
            {activeDescription}
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default function About() {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 1.6, ease: [0.16, 1, 0.3, 1] as const },
  };

  return (
    <div className="relative w-full min-h-screen bg-luxury-white dark:bg-luxury-black overflow-hidden selection:bg-brand-gold/20 text-brand-blue dark:text-luxury-white">
      {/* Atmosphere background */}
      <Atmosphere />

      {/* Main Snap-Scroll Container */}
      <div id="snap-container" className="relative w-full h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth z-10">
        <Navbar />
        
        {/* SECTION 1 — TITLE */}
        <section className="relative w-full h-screen flex flex-col items-center justify-center snap-start snap-always px-6">
          <motion.div 
            {...fadeInUp}
            className="max-w-4xl text-center flex flex-col gap-6"
          >
            <h1 className="text-5xl md:text-8xl font-light tracking-[0.2em] uppercase leading-none font-serif-editorial">
              About Rheole
            </h1>
            <div className="flex flex-col gap-4 text-md md:text-xl font-light text-brand-blue/60 dark:text-luxury-white/60 font-serif-editorial italic leading-relaxed max-w-2xl mx-auto mt-6">
              <p>Most of the world exists around us.</p>
              <p>Yet very little of it is visible.</p>
              <p className="text-brand-blue dark:text-luxury-white mt-4 not-italic uppercase tracking-widest text-xs md:text-sm font-sans font-semibold">
                Communities. Events. Conversations. Opportunities. Places. Moments.
              </p>
              <p className="text-brand-gold mt-4">Rheole exists to make them discoverable.</p>
            </div>
          </motion.div>
        </section>

        {/* SECTION 2 — THE PROBLEM */}
        <section className="relative w-full h-screen flex flex-col items-center justify-center snap-start snap-always px-6">
          <motion.div 
            {...fadeInUp}
            className="max-w-3xl text-center flex flex-col gap-8"
          >
            <p className="text-2xl md:text-4xl font-light leading-relaxed font-serif-editorial text-brand-blue/90 dark:text-luxury-white/95">
              Today's digital platforms connect people to content.
            </p>
            <p className="text-xl md:text-2xl font-light leading-relaxed font-serif-editorial text-brand-blue/60 dark:text-luxury-white/60 italic">
              But not to the world around them.
            </p>
            <div className="w-[1px] h-12 bg-brand-gold/30 mx-auto mt-4" />
            <p className="text-sm md:text-base tracking-widest uppercase text-brand-blue/50 dark:text-luxury-white/50">
              You know what is happening across the planet. You often do not know what is happening down your street.
            </p>
          </motion.div>
        </section>

        {/* SECTION 3 — THE INSIGHT */}
        <section className="relative w-full h-screen flex flex-col items-center justify-center snap-start snap-always px-6">
          <motion.div 
            {...fadeInUp}
            className="max-w-3xl text-center flex flex-col gap-6"
          >
            <h2 className="text-4xl md:text-7xl font-light tracking-wide uppercase text-brand-blue dark:text-luxury-white font-serif-editorial">
              The world is local.
            </h2>
            <div className="flex flex-col gap-4 text-md md:text-xl font-light text-brand-blue/60 dark:text-luxury-white/60 font-serif-editorial italic leading-relaxed mt-6">
              <p>Every city has its own rhythm.</p>
              <p>Every neighborhood has its own pulse.</p>
              <p>Every community has its own story.</p>
              <p>Most of it remains invisible.</p>
              <p className="text-brand-gold not-italic uppercase tracking-widest text-xs md:text-sm font-sans font-semibold mt-4">
                Rheole reveals it.
              </p>
            </div>
          </motion.div>
        </section>

        {/* SECTION 4 — WHAT IS RHEOLE? */}
        <section className="relative w-full h-screen flex flex-col items-center justify-center snap-start snap-always px-6">
          <motion.div 
            {...fadeInUp}
            className="max-w-4xl text-center flex flex-col gap-10"
          >
            <h3 className="text-2xl md:text-4xl font-light uppercase tracking-widest text-brand-blue dark:text-luxury-white font-serif-editorial">
              A Living Layer of Local Intelligence
            </h3>
            <p className="text-lg md:text-2xl font-light text-brand-blue/70 dark:text-luxury-white/70 max-w-2xl mx-auto leading-relaxed font-sans">
              Rheole helps people discover what matters surrounding them in real time:
            </p>

            <InteractiveCategories />
          </motion.div>
        </section>

        {/* SECTION 5 — A DAY WITH RHEOLE */}
        <section className="relative w-full h-screen flex flex-col items-center justify-center snap-start snap-always px-6">
          <div className="max-w-4xl w-full flex flex-col gap-12">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="text-xl md:text-2xl font-light uppercase tracking-widest text-center text-brand-blue/50 dark:text-luxury-white/50"
            >
              A Day with Rheole
            </motion.h3>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 mt-4">
              {[
                { time: "Morning", text: "You discover a new café nearby." },
                { time: "Afternoon", text: "You find an event happening a few streets away." },
                { time: "Evening", text: "You join a local community discussing something that matters to you." },
                { time: "Night", text: "You discover a place you never knew existed." }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.25, duration: 1.4 }}
                  className="flex flex-col gap-4 border-l border-brand-blue/10 dark:border-luxury-white/10 pl-6 text-left"
                >
                  <span className="text-xs tracking-widest uppercase font-semibold text-brand-gold">
                    {item.time}
                  </span>
                  <p className="text-sm md:text-base font-light text-brand-blue/60 dark:text-luxury-white/60 leading-relaxed italic font-serif-editorial">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 6 — WHY IT MATTERS */}
        <section className="relative w-full h-screen flex flex-col items-center justify-center snap-start snap-always px-6">
          <motion.div 
            {...fadeInUp}
            className="max-w-3xl text-center flex flex-col gap-8"
          >
            <p className="text-2xl md:text-4xl font-light leading-relaxed font-serif-editorial text-brand-blue/90 dark:text-luxury-white/95">
              Cities are becoming smarter. People are becoming more connected.
            </p>
            <p className="text-xl md:text-2xl font-light leading-relaxed font-serif-editorial text-brand-blue/60 dark:text-luxury-white/60 italic">
              Yet local awareness remains fragmented.
            </p>
            <div className="w-[1px] h-12 bg-brand-gold/30 mx-auto mt-4" />
            <p className="text-sm md:text-base tracking-widest uppercase text-brand-blue/50 dark:text-luxury-white/50 leading-relaxed max-w-xl mx-auto">
              Rheole exists to bridge that gap. Not by creating another social network, but by helping people understand the world immediately around them.
            </p>
          </motion.div>
        </section>

        {/* SECTION 7 — THE VISION */}
        <section className="relative w-full h-screen flex flex-col items-center justify-center snap-start snap-always px-6">
          <motion.div 
            {...fadeInUp}
            className="max-w-4xl text-center flex flex-col gap-6"
          >
            <div className="flex flex-col gap-4 text-4xl md:text-7xl font-light tracking-[0.15em] uppercase leading-tight font-serif-editorial">
              <p className="opacity-30">The future is local.</p>
              <p className="opacity-50">The future is intelligent.</p>
              <p className="opacity-75">The future is connected.</p>
              <p className="opacity-90">The future is aware.</p>
              <p className="text-brand-gold">The future is Rheole.</p>
            </div>
          </motion.div>
        </section>

        {/* SECTION 8 — CALL TO ACTION */}
        <section className="relative w-full h-screen flex flex-col justify-center items-center snap-start snap-always px-6 bg-brand-blue/[0.01] dark:bg-luxury-white/[0.01]">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-lg flex flex-col gap-10 text-center"
          >
            <div className="flex flex-col gap-4">
              <h2 className="text-3xl md:text-5xl font-light font-serif-editorial uppercase tracking-widest text-brand-blue dark:text-luxury-white">
                Experience your world differently.
              </h2>
            </div>

            <Link
              href="/experience"
              className="inline-block mx-auto text-xs uppercase tracking-[0.25em] font-medium border border-brand-blue/30 dark:border-luxury-white/20 hover:border-brand-gold hover:text-brand-gold rounded-full px-8 py-4 transition-all duration-300 text-brand-blue dark:text-luxury-white"
            >
              Experience Rheole
            </Link>
          </motion.div>
        </section>

        {/* FOOTER SECTION */}
        <section className="relative w-full snap-start snap-always mt-auto">
          <Footer />
        </section>

      </div>
    </div>
  );
}
