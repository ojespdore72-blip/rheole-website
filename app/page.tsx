"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import QueryPrompt from "@/components/QueryPrompt";
import WaitlistForm from "@/components/WaitlistForm";
import RheoleLogo from "@/components/logo";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SeeMotion from "@/components/SeeMotion";
import StatementSection from "@/components/StatementSection";

interface WordItem {
  text: string;
  top: string;
  left: string;
  fontSize: string;
  opacity: number;
  animationClass?: string;
}

const civilizationWords: WordItem[] = [
  { text: "Infrastructure", top: "12%", left: "15%", fontSize: "text-[10px] md:text-xs", opacity: 0.08, animationClass: "" },
  { text: "Spatial Matrix", top: "25%", left: "70%", fontSize: "text-xs md:text-sm", opacity: 0.12, animationClass: "" },
  { text: "Expansion", top: "82%", left: "10%", fontSize: "text-[10px] md:text-xs", opacity: 0.07, animationClass: "" },
  { text: "Networks", top: "78%", left: "80%", fontSize: "text-sm md:text-base", opacity: 0.11, animationClass: "" },
  { text: "Evolution", top: "18%", left: "45%", fontSize: "text-[10px] md:text-xs", opacity: 0.06, animationClass: "" },
  { text: "Metropolis", top: "68%", left: "22%", fontSize: "text-xs md:text-sm", opacity: 0.09, animationClass: "" },
  { text: "Architecture", top: "40%", left: "8%", fontSize: "text-[11px] md:text-xs", opacity: 0.08, animationClass: "" },
  { text: "Urban Flow", top: "88%", left: "48%", fontSize: "text-xs md:text-sm", opacity: 0.07, animationClass: "" },
  { text: "Chronology", top: "32%", left: "82%", fontSize: "text-[10px] md:text-xs", opacity: 0.05, animationClass: "" },
  { text: "Cooperative Progress", top: "58%", left: "78%", fontSize: "text-[11px] md:text-xs", opacity: 0.10, animationClass: "" },
  { text: "Regional Systems", top: "15%", left: "80%", fontSize: "text-xs md:text-sm", opacity: 0.06, animationClass: "" },
  { text: "Foundation", top: "90%", left: "28%", fontSize: "text-[10px] md:text-xs", opacity: 0.08, animationClass: "" },
];

const peopleWords: WordItem[] = [
  { text: "Community", top: "15%", left: "12%", fontSize: "text-xs md:text-sm", opacity: 0.12, animationClass: "" },
  { text: "Encounters", top: "28%", left: "75%", fontSize: "text-[10px] md:text-xs", opacity: 0.07, animationClass: "" },
  { text: "Density Resonance", top: "80%", left: "15%", fontSize: "text-sm md:text-base", opacity: 0.11, animationClass: "" },
  { text: "Interaction", top: "76%", left: "80%", fontSize: "text-xs md:text-sm", opacity: 0.08, animationClass: "" },
  { text: "Mobility", top: "18%", left: "48%", fontSize: "text-[10px] md:text-xs", opacity: 0.06, animationClass: "" },
  { text: "Collective Flows", top: "68%", left: "18%", fontSize: "text-xs md:text-sm", opacity: 0.09, animationClass: "" },
  { text: "Gathering", top: "38%", left: "10%", fontSize: "text-[11px] md:text-xs", opacity: 0.08, animationClass: "" },
  { text: "Harmonious Spaces", top: "88%", left: "50%", fontSize: "text-xs md:text-sm", opacity: 0.07, animationClass: "" },
  { text: "Frequency", top: "32%", left: "82%", fontSize: "text-[10px] md:text-xs", opacity: 0.05, animationClass: "" },
  { text: "People Move", top: "58%", left: "78%", fontSize: "text-[11px] md:text-xs", opacity: 0.10, animationClass: "" },
  { text: "Pulse", top: "18%", left: "82%", fontSize: "text-xs md:text-sm", opacity: 0.06, animationClass: "" },
  { text: "Connections", top: "90%", left: "32%", fontSize: "text-[10px] md:text-xs", opacity: 0.08, animationClass: "" },
];

const informationWords: WordItem[] = [
  { text: "Digital Streams", top: "14%", left: "10%", fontSize: "text-xs md:text-sm", opacity: 0.12, animationClass: "" },
  { text: "Dynamic Data", top: "24%", left: "72%", fontSize: "text-[10px] md:text-xs", opacity: 0.07, animationClass: "" },
  { text: "Ephemeral Pulse", top: "82%", left: "18%", fontSize: "text-sm md:text-base", opacity: 0.11, animationClass: "" },
  { text: "Routing Protocols", top: "76%", left: "78%", fontSize: "text-xs md:text-sm", opacity: 0.08, animationClass: "" },
  { text: "Convergence", top: "18%", left: "50%", fontSize: "text-[10px] md:text-xs", opacity: 0.06, animationClass: "" },
  { text: "Integrity", top: "68%", left: "15%", fontSize: "text-xs md:text-sm", opacity: 0.09, animationClass: "" },
  { text: "Signal", top: "38%", left: "12%", fontSize: "text-[11px] md:text-xs", opacity: 0.08, animationClass: "" },
  { text: "Transmission", top: "88%", left: "48%", fontSize: "text-xs md:text-sm", opacity: 0.07, animationClass: "" },
  { text: "Synchronicity", top: "30%", left: "84%", fontSize: "text-[10px] md:text-xs", opacity: 0.05, animationClass: "" },
  { text: "Intelligence Layer", top: "58%", left: "76%", fontSize: "text-[11px] md:text-xs", opacity: 0.10, animationClass: "" },
  { text: "Data Convergence", top: "16%", left: "78%", fontSize: "text-xs md:text-sm", opacity: 0.06, animationClass: "" },
  { text: "Resilience", top: "90%", left: "30%", fontSize: "text-[10px] md:text-xs", opacity: 0.08, animationClass: "" },
];

export default function Home() {
  const [activeCohort, setActiveCohort] = useState<"explorers" | "collectives" | "organisers">("explorers");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 1.6, ease: [0.16, 1, 0.3, 1] as const },
  };

  return (
    <div className="relative w-full min-h-screen bg-white overflow-hidden selection:bg-brand-gold/20 text-brand-blue">

      {/* Main Snap-Scroll Container */}
      <div id="snap-container" className="relative w-full h-auto md:h-screen md:overflow-y-auto md:snap-y md:snap-mandatory scroll-smooth z-10">
        <Navbar />
        
        {/* HERO EXPERIENCE */}
        <section className="relative w-full min-h-screen md:h-screen flex flex-col items-center justify-center md:snap-start md:snap-always py-12 md:py-0 px-6">
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

        {/* SECTION 2 — STATEMENT INDEX */}
        <section className="relative w-full py-20 md:py-28 px-6 md:px-12 border-t border-brand-blue/5">
          <div className="max-w-6xl w-full mx-auto flex flex-col gap-10 md:gap-12 select-none text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4 }}
              className="text-4xl md:text-7xl font-serif-editorial font-light leading-none text-brand-blue"
            >
              Civilization moves.
            </motion.h2>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, delay: 0.3 }}
              className="text-4xl md:text-7xl font-serif-editorial font-light leading-none text-brand-blue"
            >
              People move.
            </motion.h2>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, delay: 0.6 }}
              className="text-4xl md:text-7xl font-serif-editorial font-light leading-none text-brand-blue"
            >
              Information moves.
            </motion.h2>
          </div>
        </section>

        {/* SECTION 3 — PRODUCT DESCRIPTION */}
        <section className="relative w-full min-h-screen md:h-screen flex flex-col justify-center md:snap-start md:snap-always px-6 md:px-12 py-20 md:py-0 overflow-hidden border-t border-brand-blue/5">
          {/* Subtle emerging abstract cityscape wireframe background */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 0.12, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 3, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0"
          >
            <svg width="80%" height="80%" viewBox="0 0 1000 600" fill="none" className="stroke-brand-blue opacity-40">
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

          <div className="max-w-6xl w-full mx-auto flex flex-col gap-8 z-10">
            <motion.h2 
              {...fadeInUp}
              className="text-3xl md:text-5xl font-light tracking-tight text-brand-blue font-serif-editorial italic"
            >
              An invisible layer connecting everything
            </motion.h2>
            <motion.div 
              {...fadeInUp}
              className="text-sm md:text-base text-brand-blue/70 leading-relaxed font-sans max-w-3xl flex flex-col gap-6"
            >
              <p>
                Rheole is a spatial intelligence platform that helps people understand the world around them in real time. It brings together communities, local events, places, opportunities, and meaningful interactions into a single intelligent experience, enabling users to discover what matters nearby through context-aware recommendations rather than endless searching.
              </p>
              <p>
                Beyond discovery, Rheole connects people with their surroundings through AI-powered insights, personalized recommendations, intelligent navigation, and dynamic community experiences. Whether finding relevant events, exploring neighborhoods, connecting with like-minded people, or staying informed about local activity, Rheole continuously adapts to each user's interests while respecting privacy and user control.
              </p>
              <p>
                As Rheole evolves, it aims to become the intelligence layer between people and the physical world. By combining artificial intelligence, spatial computing, and community-driven information, the platform delivers a more connected, informed, and efficient way to experience everyday life—transforming fragmented local information into a unified, intelligent ecosystem that grows alongside its users.
              </p>
            </motion.div>
          </div>
        </section>

        {/* SECTION 4.1 — INFRASTRUCTURE MATRIX */}
        <section className="relative w-full min-h-screen md:h-screen flex flex-col justify-center md:snap-start md:snap-always px-6 md:px-12 py-20 md:py-0 border-t border-brand-blue/5">
          <div className="max-w-6xl w-full mx-auto flex flex-col gap-16">
            <motion.div {...fadeInUp} className="flex flex-col gap-4 text-left max-w-xl">
              <span className="text-xs tracking-[0.25em] font-medium text-brand-gold uppercase">THE METROPOLIS INTEGRATION</span>
              <h2 className="text-3xl md:text-5xl font-light tracking-tight text-brand-blue font-serif-editorial italic leading-tight">
                Architectural technology engineered for local resilience.
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6">
              {[
                { num: "01", title: "MESH NODES", desc: "Local peer-to-peer relay structures that form coordinate hubs dynamically." },
                { num: "02", title: "DECAY RATIOS", desc: "Automatic local data degradation that ensures messages and data disappear safely." },
                { num: "03", title: "RESONANCE METRIC", desc: "Real-time density interpretation mapping active wavelengths without tracking." },
                { num: "04", title: "SENSORY ROUTING", desc: "Navigation cache mapping paths according to local blockages, weather, and traffic." }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: idx * 0.15 }}
                  className="flex flex-col justify-between p-8 border border-brand-blue/5 hover:border-brand-gold/20 rounded-2xl bg-white hover:bg-brand-blue/[0.01] transition-all duration-500 hover:shadow-xl hover:shadow-brand-gold/[0.02] group min-h-[220px]"
                >
                  <span className="text-sm font-mono tracking-widest text-brand-gold font-light group-hover:translate-x-1 transition-transform duration-300">{item.num}</span>
                  <div className="flex flex-col gap-2 mt-8">
                    <h3 className="text-xs uppercase tracking-[0.2em] font-medium text-brand-blue">{item.title}</h3>
                    <p className="text-xs text-brand-blue/60 leading-relaxed font-sans">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4.2 — THE LIFECYCLE */}
        <section className="relative w-full min-h-screen md:h-screen flex flex-col justify-center md:snap-start md:snap-always px-6 md:px-12 py-20 md:py-0 border-t border-brand-blue/5">
          <div className="max-w-6xl w-full mx-auto flex flex-col gap-20">
            <motion.div {...fadeInUp} className="flex flex-col gap-4 text-center max-w-2xl mx-auto">
              <span className="text-xs tracking-[0.25em] font-medium text-brand-gold uppercase">THE INTERACTIVE LOOP</span>
              <h2 className="text-3xl md:text-5xl font-light tracking-tight text-brand-blue font-serif-editorial italic">
                How the physical world resonates with Rheole
              </h2>
            </motion.div>

            <div className="flex flex-col md:flex-row justify-between items-stretch gap-12 md:gap-6 relative">
              <div className="absolute top-1/3 left-12 right-12 h-[1px] bg-brand-blue/5 hidden md:block z-0" />
              
              {[
                { step: "01", name: "EMIT", subtitle: "SIGNAL INITIATION", desc: "Local users share coordinates, event updates, or space activities. All data points are cached safely without user profiling." },
                { step: "02", name: "RESOLVE", subtitle: "SPATIAL COORDINATION", desc: "Rheole's mesh protocol aggregates signals, resolves coordinates, and creates active resonance clusters in real time." },
                { step: "03", name: "RESONATE", subtitle: "SPATIAL INTERACTION", desc: "Discover active community nodes, join local mesh chats, and navigate weather-optimized routes down your street." }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.4, delay: idx * 0.2 }}
                  className="flex-1 flex flex-col gap-6 p-8 rounded-2xl bg-white border border-brand-blue/5 relative z-10 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-baseline gap-4">
                    <span className="text-4xl font-light font-serif-editorial italic text-brand-gold">{item.step}</span>
                    <div className="flex flex-col">
                      <span className="text-xs uppercase tracking-[0.2em] font-semibold text-brand-blue">{item.name}</span>
                      <span className="text-[9px] tracking-widest text-brand-blue/40 font-mono">{item.subtitle}</span>
                    </div>
                  </div>
                  <p className="text-xs text-brand-blue/60 leading-relaxed font-sans mt-2">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>



        {/* SEE RHEOLE IN MOTION */}
        <section className="relative w-full min-h-screen md:h-screen flex flex-col justify-center items-center md:snap-start md:snap-always px-6 md:px-12 py-16 md:py-0">
          <SeeMotion />
        </section>

        {/* SECTION 5.1 — COHORT SEGMENTS */}
        <section className="relative w-full min-h-screen md:h-screen flex flex-col justify-center md:snap-start md:snap-always px-6 md:px-12 py-20 md:py-0 border-t border-brand-blue/5">
          <div className="max-w-5xl w-full mx-auto flex flex-col gap-12">
            <motion.div {...fadeInUp} className="flex flex-col gap-4 text-center max-w-xl mx-auto">
              <span className="text-xs tracking-[0.25em] font-medium text-brand-gold uppercase">SEGMENTED UTILITY</span>
              <h2 className="text-3xl md:text-4xl font-light uppercase tracking-widest text-brand-blue font-serif-editorial">
                Tailored Wavelengths
              </h2>
            </motion.div>

            <div className="flex justify-center border-b border-brand-blue/5 pb-2 max-w-md mx-auto w-full gap-8">
              {[
                { id: "explorers", label: "Explorers" },
                { id: "collectives", label: "Collectives" },
                { id: "organisers", label: "Organisers" }
              ].map((tab) => {
                const isActive = activeCohort === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveCohort(tab.id as any)}
                    className={`text-xs uppercase tracking-[0.2em] font-medium pb-2 border-b-2 transition-all duration-300 ${
                      isActive ? "border-brand-gold text-brand-gold font-semibold" : "border-transparent text-brand-blue/40 hover:text-brand-blue"
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            <div className="min-h-[220px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCohort}
                  initial={{ opacity: 0, scale: 0.98, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98, y: -10 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-white border border-brand-blue/5 rounded-3xl p-10 md:p-14 shadow-xl shadow-brand-blue/[0.01]"
                >
                  <div className="flex flex-col gap-4 text-left">
                    <span className="text-[10px] tracking-widest font-mono text-brand-gold uppercase">
                      {activeCohort === "explorers" && "01 / PHYSICAL DISCOVERY"}
                      {activeCohort === "collectives" && "02 / LOCAL CONVERGENCE"}
                      {activeCohort === "organisers" && "03 / COORDINATED MATRIX"}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-light font-serif-editorial italic text-brand-blue">
                      {activeCohort === "explorers" && "Uncover the rhythm of your surroundings."}
                      {activeCohort === "collectives" && "Anchor your community nodes to real coordinates."}
                      {activeCohort === "organisers" && "Manage local signal distributions seamlessly."}
                    </h3>
                  </div>

                  <p className="text-xs text-brand-blue/60 leading-relaxed font-sans text-left">
                    {activeCohort === "explorers" && "Discover real-time density updates, find verified acoustics events, and navigate weather-aware routes. Exploration feels natural, tailored to what is actively happening nearby without trackers."}
                    {activeCohort === "collectives" && "Connect neighborhood circles, organize spontaneous meets, and communicate securely via decaying mesh-chats. Take ownership of local spaces and share context without corporate feeds."}
                    {activeCohort === "organisers" && "Broadcast localized notifications, share spatial coordinate updates, and monitor crowd density flows. Built for space coordinators, event curators, and local project leaders."}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* SECTION 6 — RHEOLE INTELLIGENCE */}
        <section className="relative w-full min-h-screen md:h-screen flex flex-col justify-center items-center md:snap-start md:snap-always py-12 md:py-0 px-6">
          <motion.div 
            {...fadeInUp}
            className="w-full max-w-4xl"
          >
            <QueryPrompt />
          </motion.div>
        </section>

        {/* SECTION 7 — MANIFESTO EXHIBIT */}
        <section className="relative w-full min-h-screen md:h-screen flex flex-col justify-center items-center md:snap-start md:snap-always py-12 md:py-0 px-6 md:px-12">
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

        {/* SECTION 7.1 — FAQ ACCORDION */}
        <section className="relative w-full min-h-screen md:h-screen flex flex-col justify-center md:snap-start md:snap-always px-6 md:px-12 py-20 md:py-0 border-t border-brand-blue/5">
          <div className="max-w-3xl w-full mx-auto flex flex-col gap-12">
            <motion.div {...fadeInUp} className="flex flex-col gap-4 text-center">
              <span className="text-xs tracking-[0.25em] font-medium text-brand-gold uppercase">CLARITY MATRIX</span>
              <h2 className="text-3xl md:text-4xl font-light uppercase tracking-widest text-brand-blue font-serif-editorial">
                Technical Specifications
              </h2>
            </motion.div>

            <div className="flex flex-col border-t border-brand-blue/10">
              {[
                { q: "Do I need special hardware to run a Rheole node?", a: "No. The spatial mesh utilizes standard smartphone GPS, Bluetooth, and Wi-Fi antennas to coordinate signals. Nodes are resolved locally using secure peer-to-peer caching." },
                { q: "How is user privacy protected?", a: "Rheole does not store your location history or create target profiles. All coordinates decay and expire automatically after set intervals. You remain anonymized, and mesh chats decay to keep your data footprint at zero." },
                { q: "How does weather-aware and events-aware routing work?", a: "Our routing matrix polls real-time weather logs and density reports. If a flood signal or festival block is detected, path algorithms recalculate coordinates instantly to suggest optimized local detours." }
              ].map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div key={idx} className="border-b border-brand-blue/5">
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full py-6 flex justify-between items-center text-left hover:text-brand-gold transition-colors duration-300 focus:outline-none"
                    >
                      <span className="text-xs md:text-sm uppercase tracking-widest font-medium text-brand-blue">{faq.q}</span>
                      <span className="text-xs font-mono font-light text-brand-gold transition-transform duration-300 ml-4">
                        {isOpen ? "✕" : "＋"}
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="pb-6 text-xs text-brand-blue/60 leading-relaxed font-sans">
                            {faq.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION 8 — ACCESS */}
        <section className="relative w-full min-h-screen md:h-screen flex flex-col justify-center items-center md:snap-start md:snap-always py-12 md:py-0 px-6 bg-brand-blue/[0.01] dark:bg-luxury-white/[0.01]">
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
        <section className="relative w-full md:snap-start md:snap-always mt-auto">
          <Footer />
        </section>

      </div>
    </div>
  );
}
