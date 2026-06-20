"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import LivingEnvironment from "@/components/LivingEnvironment";
import QueryPrompt from "@/components/QueryPrompt";
import WaitlistForm from "@/components/WaitlistForm";
import RheoleLogo from "@/components/logo";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SeeMotion from "@/components/SeeMotion";
import StatementSection from "@/components/StatementSection";

const civilizationWords = [
  "Civilization", "Cities", "Communities", "Neighborhoods", "Architecture", 
  "Infrastructure", "Transit", "Mobility", "Discovery", "Markets", 
  "Trade", "Culture", "Society", "Progress", "Innovation", 
  "Knowledge", "Education", "Commerce", "History", "Generations", 
  "Public Space", "Belonging", "Movement", "Exchange", "Connection", 
  "Identity", "Growth", "Development", "Craftsmanship", "Creation", 
  "Urban Life", "Cultural Memory", "Economic Activity", "Human Progress", "Shared Spaces", 
  "Local Discovery", "Collective Intelligence", "The Built World", "Connected Places", "Living Cities", 
  "Evolving Communities"
];

const peopleWords = [
  "People", "Movement", "Journeys", "Exploration", "Discovery", 
  "Belonging", "Connection", "Friendship", "Families", "Relationships", 
  "Gathering", "Participation", "Learning", "Celebration", "Conversation", 
  "Collaboration", "Experiences", "Interaction", "Curiosity", "Adventure", 
  "Purpose", "Presence", "Identity", "Communities", "Engagement", 
  "Travel", "Navigation", "Sharing", "Creation", "Contribution", 
  "Local Life", "Human Stories", "Daily Rituals", "Social Fabric", "Collective Experience", 
  "Shared Moments", "Meaningful Encounters", "Human Connection", "The Human Network", "Life In Motion"
];

const informationWords = [
  "Information", "Knowledge", "Signals", "Awareness", "Context", 
  "Understanding", "Discovery", "Insights", "Intelligence", "Communication", 
  "Events", "Patterns", "Networks", "Visibility", "Realtime", 
  "Updates", "Coordination", "Meaning", "Attention", "Learning", 
  "Observation", "Analysis", "Understanding", "Momentum", "Connections", 
  "Data", "Contextual Intelligence", "Community Signals", "Live Activity", "Local Awareness", 
  "Collective Knowledge", "Emerging Patterns", "Human Intelligence", "Shared Understanding", "Connected Information", 
  "Spatial Intelligence", "World Awareness", "Actionable Insight", "The Pulse Of Your World"
];

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 1.6, ease: [0.16, 1, 0.3, 1] as const },
  };

  return (
    <div className="relative w-full min-h-screen bg-white overflow-hidden selection:bg-brand-gold/20 text-brand-blue">

      {/* Main Snap-Scroll Container */}
      <div id="snap-container" className="relative w-full h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth z-10">
        <Navbar />
        
        {/* HERO EXPERIENCE */}
        <section className="relative w-full h-screen flex flex-col items-center justify-center snap-start snap-always px-6">
          <div className="flex flex-col items-center gap-12 text-center">
            {/* Premium cinematic entrance + continuous levitation float */}
            <motion.div
              initial={{ scale: 0.3, opacity: 0, filter: "blur(15px)" }}
              animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 2.0, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 4.5,
                  ease: "easeInOut"
                }}
              >
                <RheoleLogo className="h-32 w-32 drop-shadow-[0_0_35px_rgba(79,70,229,0.25)] transition-transform duration-300 hover:scale-105" />
              </motion.div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30, letterSpacing: "0.1em" }}
              animate={{ opacity: 1, y: 0, letterSpacing: "0.25em" }}
              transition={{ delay: 0.8, duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-7xl lg:text-8xl font-light tracking-[0.25em] uppercase leading-none text-luxury-black"
            >
              THE PULSE OF YOUR WORLD
            </motion.h1>
          </div>
        </section>

        {/* STATEMENT SECTIONS WITH STICKY SCROLL REVEAL */}
        <StatementSection statement="Civilization moves." words={civilizationWords} />
        <StatementSection statement="People move." words={peopleWords} />
        <StatementSection statement="Information moves." words={informationWords} />



        {/* SECTION 4 — CONVERGENCE */}
        <section className="relative w-full h-screen flex flex-col items-center justify-center snap-start snap-always px-6 overflow-hidden">
          {/* Subtle emerging abstract cityscape wireframe */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 0.12, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 3, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0"
          >
            <svg width="80%" height="80%" viewBox="0 0 1000 600" fill="none" className="stroke-brand-blue dark:stroke-luxury-white opacity-40">
              <path d="M500,50 L900,250 L500,450 L100,250 Z" strokeWidth="0.5" />
              <path d="M500,150 L800,300 L500,450 L200,300 Z" strokeWidth="0.5" strokeDasharray="4 8" />
              <path d="M500,50 L500,450" strokeWidth="0.5" />
              <path d="M100,250 L900,250" strokeWidth="0.5" strokeDasharray="2 4" />
              <circle cx="500" cy="250" r="120" strokeWidth="0.5" strokeDasharray="6 12" />
              <circle cx="500" cy="250" r="4" fill="currentColor" />
              <circle cx="300" cy="350" r="3" fill="currentColor" />
              <circle cx="700" cy="150" r="3" fill="currentColor" />
            </svg>
          </motion.div>

          <motion.div 
            {...fadeInUp}
            className="max-w-4xl text-center z-10 px-6"
          >
            <p className="text-xl md:text-3xl lg:text-4xl font-light leading-relaxed font-serif-editorial italic text-brand-blue/70 dark:text-luxury-white/75">
              An invisible layer connecting everything.
            </p>
          </motion.div>
        </section>

        {/* SECTION 5 — INTERACTIVE WORLD EXPERIENCE */}
        <section className="relative w-full h-screen flex flex-col justify-center snap-start snap-always px-6 md:px-12 py-16">
          <div className="max-w-6xl w-full mx-auto flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="flex justify-between items-end border-b border-brand-blue/5 dark:border-luxury-white/5 pb-4"
            >
              <h2 className="text-xl md:text-2xl font-light uppercase tracking-widest text-brand-blue/80 dark:text-luxury-white/80">
                Resonant Space
              </h2>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
              className="w-full flex-grow h-[60vh] min-h-[350px] relative"
            >
              <LivingEnvironment />
            </motion.div>
          </div>
        </section>

        {/* SEE RHEOLE IN MOTION */}
        <section className="relative w-full h-screen flex flex-col justify-center items-center snap-start snap-always px-6 md:px-12 py-16">
          <SeeMotion />
        </section>

        {/* SECTION 6 — RHEOLE INTELLIGENCE */}
        <section className="relative w-full h-screen flex flex-col justify-center items-center snap-start snap-always px-6">
          <motion.div 
            {...fadeInUp}
            className="w-full max-w-4xl"
          >
            <QueryPrompt />
          </motion.div>
        </section>

        {/* SECTION 7 — MANIFESTO EXHIBIT */}
        <section className="relative w-full h-screen flex flex-col justify-center items-center snap-start snap-always px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl w-full border border-brand-blue/10 dark:border-luxury-white/10 rounded-2xl frosted-glass p-8 md:p-16 flex flex-col gap-10 text-center relative overflow-hidden shadow-2xl"
          >
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-brand-gold/10 to-transparent blur-xl pointer-events-none" />
            
            <h2 className="text-3xl md:text-5xl font-light font-serif-editorial uppercase tracking-widest text-brand-blue dark:text-luxury-white">
              The world is local.
            </h2>
            <div className="flex flex-col gap-6 text-md md:text-xl font-light text-brand-blue/60 dark:text-luxury-white/60 max-w-2xl mx-auto font-serif-editorial italic leading-relaxed">
              <p>Every street. Every event. Every community. Every moment.</p>
              <p className="text-brand-gold">Rheole exists to connect them.</p>
            </div>
          </motion.div>
        </section>

        {/* SECTION 8 — ACCESS */}
        <section className="relative w-full h-screen flex flex-col justify-center items-center snap-start snap-always px-6 bg-brand-blue/[0.01] dark:bg-luxury-white/[0.01]">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-lg flex flex-col gap-12 text-center"
          >
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl md:text-4xl font-light uppercase tracking-[0.2em] text-brand-blue dark:text-luxury-white font-serif-editorial italic">
                Experience Rheole
              </h2>
              <p className="text-xs uppercase tracking-widest text-brand-gold font-medium">
                Step into a guided product tour of the spatial network.
              </p>
            </div>

            <Link
              href="/experience"
              className="inline-block mx-auto text-xs uppercase tracking-[0.25em] font-medium border border-brand-blue/30 dark:border-luxury-white/20 hover:border-brand-gold hover:text-brand-gold rounded-full px-8 py-4 transition-all duration-300 text-brand-blue dark:text-luxury-white"
            >
              Begin Interactive Tour
            </Link>

            <div className="flex flex-col gap-3 pt-6 border-t border-brand-blue/5 dark:border-luxury-white/5 text-center">
              <p className="text-[10px] uppercase tracking-wider text-brand-blue/45 dark:text-luxury-white/40 max-w-sm mx-auto">
                This program is intentionally limited to ensure a high-quality early experience.
              </p>
              <WaitlistForm />
            </div>
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
