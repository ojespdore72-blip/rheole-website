"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Atmosphere from "@/components/Atmosphere";
import Footer from "@/components/Footer";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import AskWorld from "@/components/AskWorld";
import RoutingDemo from "@/components/RoutingDemo";

interface CategoryItem {
  id: string;
  label: string;
  description: string;
}

const categories: CategoryItem[] = [
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
    id: "movement",
    label: "Movement",
    description: "Kinetic routing. Understanding how the city flows, routes, and travels in real time.",
  },
  {
    id: "localActivity",
    label: "Local activity",
    description: "The city's active pulse. Real-time density, events, and evolving local signals.",
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

export default function Intelligence() {
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

      <Navbar />

      {/* Main Snap-Scroll Container */}
      <div className="relative w-full h-auto scroll-smooth z-10">
        
        {/* TITLE SECTION */}
        <section className="relative w-full min-h-screen flex flex-col items-center justify-center py-20 px-6">
          <motion.div 
            {...fadeInUp}
            className="max-w-4xl text-center flex flex-col gap-6"
          >
            <h1 className="text-5xl md:text-8xl font-light tracking-[0.2em] uppercase leading-none font-serif-editorial">
              INTELLIGENCE
            </h1>
            <div className="flex flex-col gap-4 text-md md:text-xl font-light text-brand-blue/60 dark:text-luxury-white/60 font-serif-editorial italic leading-relaxed max-w-2xl mx-auto mt-6">
              <p>Understanding the world around you.</p>
              <p>In real time.</p>
              <p className="text-brand-blue dark:text-luxury-white mt-4 not-italic uppercase tracking-widest text-xs md:text-sm font-sans font-semibold">
                Every day, millions of events unfold around us. Communities form. Conversations begin. Places come alive. Opportunities appear. Most of it goes unnoticed.
              </p>
              <p className="text-brand-gold mt-4">Rheole Intelligence exists to change that.</p>
            </div>
          </motion.div>
        </section>

        {/* SECTION 1 — THE PROBLEM */}
        <section className="relative w-full min-h-screen flex flex-col items-center justify-center py-20 px-6">
          <motion.div 
            {...fadeInUp}
            className="max-w-3xl text-center flex flex-col gap-8"
          >
            <p className="text-sm md:text-base tracking-widest uppercase text-brand-gold font-semibold mb-4">
              THE PROBLEM
            </p>
            <p className="text-2xl md:text-4xl font-light leading-relaxed font-serif-editorial text-brand-blue/90 dark:text-luxury-white/95">
              Information has never been more accessible.
            </p>
            <p className="text-xl md:text-2xl font-light leading-relaxed font-serif-editorial text-brand-blue/60 dark:text-luxury-white/60 italic">
              Yet local understanding remains fragmented.
            </p>
            <div className="w-[1px] h-12 bg-brand-gold/30 mx-auto mt-4" />
            <p className="text-sm md:text-base tracking-widest uppercase text-brand-blue/50 dark:text-luxury-white/50 leading-relaxed max-w-xl mx-auto">
              You can discover what is happening across the world in seconds. Yet you may not know: What is happening nearby. Which communities matter to you. Which events are worth attending. Where the city is most alive. The world around us remains surprisingly invisible.
            </p>
          </motion.div>
        </section>

        {/* SECTION 2 — THE INTELLIGENCE LAYER */}
        <section className="relative w-full min-h-screen flex flex-col items-center justify-center py-20 px-6">
          <motion.div 
            {...fadeInUp}
            className="max-w-4xl text-center flex flex-col gap-8"
          >
            <p className="text-sm md:text-base tracking-widest uppercase text-brand-gold font-semibold">
              THE INTELLIGENCE LAYER
            </p>
            <h2 className="text-2xl md:text-4xl font-light uppercase tracking-widest text-brand-blue dark:text-luxury-white font-serif-editorial">
              Rheole Intelligence
            </h2>
            <p className="text-md md:text-xl font-light text-brand-blue/70 dark:text-luxury-white/70 max-w-2xl mx-auto leading-relaxed">
              Rheole Intelligence is designed to help people better understand the places they live, work, travel, and explore. It continuously interprets signals from:
            </p>

            <InteractiveCategories />

            <div className="flex flex-col gap-2 mt-4">
              <p className="text-sm md:text-base tracking-widest uppercase text-brand-blue/50 dark:text-luxury-white/50">
                to create a more complete understanding of what matters.
              </p>
              <p className="text-brand-gold tracking-[0.2em] uppercase text-xs md:text-sm font-semibold">
                Not globally. Locally.
              </p>
            </div>
          </motion.div>
        </section>

        {/* SECTION 3 — ASK YOUR WORLD */}
        <section className="relative w-full min-h-screen flex flex-col items-center justify-center py-20 px-6">
          <div className="max-w-4xl w-full flex flex-col gap-12 text-center">
            <motion.div {...fadeInUp} className="flex flex-col gap-4">
              <span className="text-sm md:text-base tracking-widest uppercase text-brand-gold font-semibold">
                ASK YOUR WORLD
              </span>
              <p className="text-md md:text-lg font-light text-brand-blue/60 dark:text-luxury-white/60 italic max-w-xl mx-auto">
                Imagine asking your surroundings for context, resolved in real time.
              </p>
            </motion.div>

            <AskWorld />

            <motion.div {...fadeInUp} className="mt-4">
              <p className="text-sm md:text-base tracking-widest uppercase text-brand-blue/50 dark:text-luxury-white/50">
                Rheole Intelligence transforms local information into useful understanding.
              </p>
            </motion.div>
          </div>
        </section>

        {/* SECTION 4 — LOCAL INTELLIGENCE */}
        <section className="relative w-full min-h-screen flex flex-col items-center justify-center py-20 px-6">
          <motion.div 
            {...fadeInUp}
            className="max-w-3xl text-center flex flex-col gap-8"
          >
            <p className="text-sm md:text-base tracking-widest uppercase text-brand-gold font-semibold">
              LOCAL INTELLIGENCE
            </p>
            <p className="text-2xl md:text-4xl font-light leading-relaxed font-serif-editorial text-brand-blue/90 dark:text-luxury-white/95">
              Every city has its own rhythm. Every neighborhood has its own pulse. Every community has its own story.
            </p>
            <p className="text-xl md:text-2xl font-light leading-relaxed font-serif-editorial text-brand-blue/60 dark:text-luxury-white/60 italic">
              Rheole Intelligence helps reveal those patterns.
            </p>
            <div className="w-[1px] h-12 bg-brand-gold/30 mx-auto mt-4" />
            <p className="text-sm md:text-base tracking-widest uppercase text-brand-blue/50 dark:text-luxury-white/50 leading-relaxed max-w-xl mx-auto">
              Not through endless feeds. Not through noise. But through meaningful context.
            </p>
          </motion.div>
        </section>

        {/* SECTION 5 — INTELLIGENT DISCOVERY */}
        <section className="relative w-full min-h-screen flex flex-col items-center justify-center py-20 px-6">
          <motion.div 
            {...fadeInUp}
            className="max-w-3xl text-center flex flex-col gap-8"
          >
            <p className="text-sm md:text-base tracking-widest uppercase text-brand-gold font-semibold">
              INTELLIGENT DISCOVERY
            </p>
            <p className="text-2xl md:text-4xl font-light leading-relaxed font-serif-editorial text-brand-blue/90 dark:text-luxury-white/95">
              Discovery should feel natural.
            </p>
            <div className="flex flex-col gap-2 text-xl md:text-2xl font-light text-brand-blue/60 dark:text-luxury-white/60 font-serif-editorial italic leading-relaxed">
              <p>The best places.</p>
              <p>The most relevant events.</p>
              <p>The communities that matter.</p>
              <p>The moments worth experiencing.</p>
            </div>
            <div className="w-[1px] h-12 bg-brand-gold/30 mx-auto mt-4" />
            <p className="text-sm md:text-base tracking-widest uppercase text-brand-blue/50 dark:text-luxury-white/50 leading-relaxed max-w-xl mx-auto">
              Rheole Intelligence helps people discover them with less effort and greater confidence.
            </p>
          </motion.div>
        </section>

        {/* SECTION 6 — INTELLIGENT ROUTING */}
        <section className="relative w-full min-h-screen flex flex-col items-center justify-center py-20 px-6">
          <div className="max-w-4xl w-full flex flex-col gap-12 text-center">
            <motion.div {...fadeInUp} className="flex flex-col gap-4">
              <span className="text-sm md:text-base tracking-widest uppercase text-brand-gold font-semibold">
                INTELLIGENT ROUTING
              </span>
              <p className="text-md md:text-lg font-light text-brand-blue/60 dark:text-luxury-white/60 italic max-w-xl mx-auto">
                Movement is more than navigation. The shortest path is not always the best path.
              </p>
            </motion.div>

            <RoutingDemo />

            <motion.div {...fadeInUp} className="mt-4">
              <p className="text-sm md:text-base tracking-widest uppercase text-brand-blue/50 dark:text-luxury-white/50 leading-relaxed max-w-xl mx-auto">
                Rheole Intelligence evaluates Traffic, Weather, Local activity, Events, and Road conditions in real time to optimize decisions.
              </p>
            </motion.div>
          </div>
        </section>

        {/* SECTION 7 — CITY PULSE */}
        <section className="relative w-full min-h-screen flex flex-col items-center justify-center py-20 px-6">
          <motion.div 
            {...fadeInUp}
            className="max-w-3xl text-center flex flex-col gap-8"
          >
            <p className="text-sm md:text-base tracking-widest uppercase text-brand-gold font-semibold">
              CITY PULSE
            </p>
            <p className="text-2xl md:text-4xl font-light leading-relaxed font-serif-editorial text-brand-blue/90 dark:text-luxury-white/95">
              Cities are constantly changing.
            </p>
            <div className="flex flex-col gap-2 text-xl md:text-2xl font-light text-brand-blue/60 dark:text-luxury-white/60 font-serif-editorial italic leading-relaxed">
              <p>Activity shifts.</p>
              <p>Events emerge.</p>
              <p>Communities gather.</p>
              <p>Conversations evolve.</p>
            </div>
            <div className="w-[1px] h-12 bg-brand-gold/30 mx-auto mt-4" />
            <p className="text-sm md:text-base tracking-widest uppercase text-brand-blue/50 dark:text-luxury-white/50 leading-relaxed max-w-xl mx-auto">
              Rheole Intelligence helps transform those changes into meaningful awareness.
            </p>
          </motion.div>
        </section>

        {/* SECTION 8 — THE FUTURE */}
        <section className="relative w-full min-h-screen flex flex-col items-center justify-center py-20 px-6">
          <motion.div 
            {...fadeInUp}
            className="max-w-4xl text-center flex flex-col gap-6"
          >
            <p className="text-sm md:text-base tracking-widest uppercase text-brand-gold font-semibold mb-4">
              THE FUTURE
            </p>
            <div className="flex flex-col gap-4 text-4xl md:text-7xl font-light tracking-[0.15em] uppercase leading-tight font-serif-editorial">
              <p className="opacity-60">The future is better understanding.</p>
              <p className="text-brand-gold">Rheole Intelligence</p>
            </div>
            <p className="text-sm md:text-base tracking-widest uppercase text-brand-blue/50 dark:text-luxury-white/50 leading-relaxed max-w-xl mx-auto mt-6">
              is being built to help people make sense of the places around them. Simply. Naturally. Instantly.
            </p>
          </motion.div>
        </section>

        {/* FINAL STATEMENT & CALL TO ACTION */}
        <section className="relative w-full min-h-screen flex flex-col justify-center items-center py-20 px-6 bg-brand-blue/[0.01] dark:bg-luxury-white/[0.01]">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-lg flex flex-col gap-10 text-center"
          >
            <div className="flex flex-col gap-4">
              <p className="text-brand-gold uppercase tracking-[0.2em] text-xs md:text-sm font-semibold">
                The world is already speaking.
              </p>
              <h2 className="text-3xl md:text-5xl font-light font-serif-editorial uppercase tracking-widest text-brand-blue dark:text-luxury-white leading-tight">
                Rheole Intelligence helps you hear it.
              </h2>
            </div>

            <Link
              href="/founding-access"
              className="inline-block mx-auto text-xs uppercase tracking-[0.25em] font-medium border border-brand-blue/30 dark:border-luxury-white/20 hover:border-brand-gold hover:text-brand-gold rounded-full px-8 py-4 transition-all duration-300 text-brand-blue dark:text-luxury-white"
            >
              Request Early Access
            </Link>
          </motion.div>
        </section>

        {/* FOOTER SECTION */}
        <section className="relative w-full mt-auto">
          <Footer />
        </section>

      </div>
    </div>
  );
}
