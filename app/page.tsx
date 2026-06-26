"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import WaitlistForm from "@/components/WaitlistForm";
import RheoleLogo from "@/components/logo";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProgressiveReveal from "@/components/ProgressiveReveal";

export default function Home() {
  const [activeScenario, setActiveScenario] = useState(0);

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as const },
  };

  const scenarios = [
    {
      id: "visit",
      title: "I'm visiting a new city.",
      desc: "Rheole's intelligence layer instantly maps high-density areas, active events, and local rhythms without needing a search query.",
      ui: (
        <div className="w-full h-full bg-[#05050C] p-4 flex flex-col gap-4">
          <div className="flex items-center justify-between border-b border-white/10 pb-2">
            <span className="text-[10px] uppercase text-brand-gold font-mono">Spatial Map</span>
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          </div>
          <div className="flex-1 bg-white/[0.02] border border-white/5 rounded-2xl relative overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(197,168,128,0.2),transparent_70%)]" />
            <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 4 }} className="absolute w-16 h-16 rounded-full border border-brand-gold/20" />
            <div className="absolute top-1/4 left-1/4 p-1.5 bg-black/80 border border-white/10 rounded text-[8px] text-white font-mono">Central Plaza: High Activity</div>
            <div className="absolute bottom-1/3 right-1/4 p-1.5 bg-black/80 border border-white/10 rounded text-[8px] text-white font-mono">South St: 4 Events</div>
          </div>
        </div>
      )
    },
    {
      id: "communities",
      title: "I want to discover communities.",
      desc: "Connect with local circles built around shared interests, anchored to real physical coordinates.",
      ui: (
        <div className="w-full h-full bg-[#05050C] p-4 flex flex-col gap-4">
          <div className="flex items-center justify-between border-b border-white/10 pb-2">
            <span className="text-[10px] uppercase text-brand-gold font-mono">Local Circles</span>
            <span className="text-[10px] text-white/50">Nearby</span>
          </div>
          <div className="flex flex-col gap-2">
            {['Creative Builders', 'SOMA Run Club', 'Founders Breakfast'].map((c, i) => (
              <motion.div key={c} initial={{ x: -10, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: i * 0.1 }} className="p-3 bg-white/[0.02] border border-white/10 rounded-xl flex justify-between items-center">
                <span className="text-xs text-white">{c}</span>
                <span className="text-[9px] text-white/50 font-mono">+{Math.floor(Math.random()*100)+20} Mem</span>
              </motion.div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: "events",
      title: "I want to know what's happening nearby.",
      desc: "Live, context-aware event discovery prioritized by your interests and real-time community density.",
      ui: (
        <div className="w-full h-full bg-[#05050C] p-4 flex flex-col gap-4">
          <div className="flex items-center justify-between border-b border-white/10 pb-2">
            <span className="text-[10px] uppercase text-brand-gold font-mono">Live Events</span>
          </div>
          <div className="p-4 bg-gradient-to-br from-brand-gold/10 to-transparent border border-brand-gold/20 rounded-2xl flex flex-col gap-2">
            <span className="text-[8px] uppercase tracking-widest text-brand-gold bg-brand-gold/10 px-2 py-0.5 rounded-sm w-max">98% AI Match</span>
            <span className="text-sm text-white font-medium">Underground Acoustic Session</span>
            <div className="flex gap-4 mt-2">
              <span className="text-[9px] text-white/50 font-mono">1.2 mi</span>
              <span className="text-[9px] text-white/50 font-mono">Starts 8PM</span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "route",
      title: "I need the fastest route to an event.",
      desc: "Intelligent navigation that adapts dynamically to street festivals, crowd congestion, and localized weather.",
      ui: (
        <div className="w-full h-full bg-[#05050C] p-4 flex flex-col gap-4">
          <div className="flex items-center justify-between border-b border-white/10 pb-2">
            <span className="text-[10px] uppercase text-brand-gold font-mono">Routing Matrix</span>
          </div>
          <div className="flex-1 bg-white/[0.02] border border-white/5 rounded-2xl relative overflow-hidden flex flex-col p-4 justify-between">
            <div className="w-full h-1/2 flex items-center justify-center relative">
              <svg viewBox="0 0 100 50" className="w-full h-full overflow-visible">
                <path d="M0,25 Q25,5 50,25 T100,25" fill="none" stroke="#C5A880" strokeWidth="2" strokeDasharray="4 4" className="animate-[dash_2s_linear_infinite]" />
                <circle cx="50" cy="25" r="8" fill="rgba(239,68,68,0.2)" stroke="rgba(239,68,68,0.5)" />
              </svg>
            </div>
            <div className="p-2 bg-red-500/10 border border-red-500/20 rounded-lg">
              <span className="text-[9px] text-red-400 font-mono">Detour: Festival Block Detected</span>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="relative w-full min-h-screen bg-white overflow-hidden selection:bg-brand-gold/20 text-brand-blue font-sans">
      <Navbar />
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full min-h-screen flex flex-col items-center justify-center pt-64 pb-24 px-6 md:px-12 overflow-hidden">
        {/* Animated grid background */}
        <div className="flex flex-col items-center gap-8 text-center max-w-4xl mt-12">
          
          <motion.div
            initial={{ scale: 0.8, opacity: 0, filter: "blur(10px)" }}
            animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}>
              <RheoleLogo className="h-24 w-24 md:h-32 md:w-32 drop-shadow-[0_0_35px_rgba(79,70,229,0.25)]" />
            </motion.div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-light tracking-[0.1em] md:tracking-[0.2em] uppercase leading-tight text-luxury-black max-w-[90vw]"
          >
            THE PULSE OF YOUR WORLD
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-base md:text-xl font-light text-brand-blue/80 max-w-2xl leading-relaxed mt-2"
          >
            An AI-powered spatial intelligence platform connecting people, communities, places, and real-world activity into one seamless experience.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center gap-4 mt-6"
          >
            <Link href="/experience" className="w-full sm:w-auto px-8 py-4 bg-brand-gold text-brand-blue hover:bg-[#d6b78c] transition-colors rounded-full text-xs font-semibold uppercase tracking-widest shadow-lg shadow-brand-gold/20">
              Experience Rheole
            </Link>
            <a href="#how-it-works" className="w-full sm:w-auto px-8 py-4 border border-brand-blue/20 text-brand-blue hover:border-brand-blue transition-colors rounded-full text-xs font-semibold uppercase tracking-widest text-center">
              How It Works
            </a>
          </motion.div>
        </div>
      </section>

      {/* 2. PROGRESSIVE SCROLL NARRATIVE & 3. EARLY PRODUCT REVEAL */}
      <ProgressiveReveal />

      {/* DISCOVERY SECTION */}
      <section className="relative w-full py-24 md:py-32 px-0 md:px-12 lg:px-24 bg-[#05050C] text-white flex flex-col items-center justify-center overflow-hidden border-t border-white/5">
        {/* Background atmospheric glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(197,168,128,0.1),transparent_50%)]" />
        
        <motion.div {...fadeInUp} className="relative z-10 flex flex-col items-center gap-12 md:gap-16 w-full max-w-[90rem]">
          <div className="text-center space-y-6 max-w-3xl px-6 md:px-0">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-light font-serif-editorial tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-white via-[#F5F2EB] to-white/70">
              Discovery
            </h2>
            <p className="text-sm md:text-lg text-brand-gold/90 font-light tracking-[0.2em] uppercase">
              Captures the joy of discovering places nearby
            </p>
          </div>

          <div className="w-full flex md:grid md:grid-cols-3 gap-6 md:gap-8 lg:gap-10 overflow-x-auto snap-x snap-mandatory px-6 md:px-0 pb-8 md:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {[
              "/web_image_1.png",
              "/web_image_3.jpg",
              "/web_image_4.jpg"
            ].map((src, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1.2, delay: idx * 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="group relative w-[85vw] md:w-full flex-shrink-0 snap-center rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 hover:border-brand-gold/40 transition-colors duration-700 bg-white/[0.02]"
              >
                {/* 
                  Aspect ratio 2:3 on mobile (aspect-[2/3])
                  Aspect ratio 16:9 on desktop (md:aspect-[16/9]) 
                */}
                <div className="relative w-full aspect-[2/3] md:aspect-[16/9] overflow-hidden">
                  <img
                    src={src}
                    alt={`Discovery Image ${idx + 1}`}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-[1.03] will-change-transform"
                    loading="lazy"
                  />
                  {/* Subtle overlay gradient for premium depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#05050C]/90 via-transparent to-transparent opacity-50 group-hover:opacity-30 transition-opacity duration-700" />
                  
                  {/* Premium inner border highlight */}
                  <div className="absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-white/10 group-hover:ring-brand-gold/30 transition-all duration-700 pointer-events-none" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 4. HOW RHEOLE WORKS */}
      <section id="how-it-works" className="relative w-full py-24 lg:py-32 px-6 md:px-12 border-t border-brand-blue/5">
        <div className="max-w-6xl mx-auto flex flex-col gap-20">
          <motion.div {...fadeInUp} className="flex flex-col gap-4 text-center max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-widest font-medium text-brand-gold">The Mechanism</span>
            <h2 className="text-4xl md:text-5xl font-light font-serif-editorial text-brand-blue">How Rheole Works</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8">
            {[
              { num: "01", title: "Understand your context.", desc: "The platform ingests real-time spatial data, community signals, and local events to map the reality of your surroundings." },
              { num: "02", title: "Connect relevant people, places and events.", desc: "Information is synthesized and structured. Abstract noise becomes clear, actionable connections." },
              { num: "03", title: "Continuously adapt with AI.", desc: "Rheole's local engine learns your specific interests, ensuring recommendations remain hyper-relevant and entirely personalized." }
            ].map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: idx * 0.2 }}
                className="flex flex-col gap-6"
              >
                <span className="text-5xl font-light font-serif-editorial text-brand-gold/30">{step.num}</span>
                <h3 className="text-xl font-medium text-brand-blue tracking-wide">{step.title}</h3>
                <p className="text-brand-blue/70 leading-relaxed font-light">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. REAL SCENARIOS (IMAGINE YOUR DAY) */}
      <section className="relative w-full py-24 lg:py-32 px-6 md:px-12 border-t border-brand-blue/5 bg-luxury-black text-luxury-white">
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          <motion.div {...fadeInUp} className="flex flex-col gap-4">
            <span className="text-xs uppercase tracking-widest font-mono text-brand-gold">Use Cases</span>
            <h2 className="text-4xl md:text-5xl font-light font-serif-editorial text-white">Imagine your day.</h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
            
            {/* Scenario Selector */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              {scenarios.map((scenario, idx) => (
                <motion.button
                  key={scenario.id}
                  onClick={() => setActiveScenario(idx)}
                  className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 ${
                    activeScenario === idx 
                      ? "bg-white/[0.05] border-brand-gold text-white shadow-[0_0_30px_rgba(197,168,128,0.1)]" 
                      : "bg-transparent border-white/10 text-white/50 hover:bg-white/[0.02] hover:text-white/80"
                  }`}
                >
                  <h3 className="text-lg md:text-xl font-medium mb-2">{scenario.title}</h3>
                  <AnimatePresence>
                    {activeScenario === idx && (
                      <motion.p 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="text-sm font-light text-white/70 leading-relaxed overflow-hidden"
                      >
                        {scenario.desc}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.button>
              ))}
            </div>

            {/* Reactive Device Mockup */}
            <div className="lg:col-span-7 flex justify-center">
              <div className="w-[300px] h-[600px] lg:w-[340px] lg:h-[680px] rounded-[40px] bg-black border-[6px] border-[#222] shadow-2xl overflow-hidden p-2 relative">
                <div className="w-full h-full rounded-[30px] overflow-hidden bg-[#05050C]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeScenario}
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.4 }}
                      className="w-full h-full pt-10"
                    >
                      {scenarios[activeScenario].ui}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. DESIGNED FOR TRUST */}
      <section className="relative w-full py-24 lg:py-32 px-6 md:px-12 border-t border-brand-blue/5">
        <div className="max-w-6xl mx-auto flex flex-col gap-16">
          <motion.div {...fadeInUp} className="flex flex-col gap-4 text-center max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-widest font-medium text-brand-gold">Security & Architecture</span>
            <h2 className="text-4xl md:text-5xl font-light font-serif-editorial text-brand-blue">Designed for Trust</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Privacy-first architecture", desc: "Built from the ground up to minimize data collection and prioritize local-first processing." },
              { title: "Granular user controls", desc: "You decide exactly what is shared, with whom, and for how long." },
              { title: "Human-centered AI", desc: "Our models act as transparent assistants, not opaque psychological manipulators." },
              { title: "Modern authentication", desc: "Secure, frictionless identity verification using the latest cryptographic standards." },
              { title: "Encrypted communication", desc: "Private and community messages are locked behind robust encryption protocols." },
              { title: "Transparent data practices", desc: "No hidden data brokers. No targeted advertising profiles. Absolute clarity." }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="p-8 rounded-2xl border border-brand-blue/10 bg-white hover:shadow-xl hover:border-brand-gold/30 transition-all duration-300"
              >
                <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-blue mb-3">{feature.title}</h3>
                <p className="text-sm font-light text-brand-blue/70 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* 8. FINAL CTA & PRODUCT PREVIEW LINK */}
      <section className="relative w-full py-32 px-6 bg-brand-blue text-white flex flex-col items-center justify-center text-center">
        <motion.div {...fadeInUp} className="max-w-3xl flex flex-col items-center gap-10">
          <RheoleLogo className="h-16 w-auto invert opacity-90" />
          <h2 className="text-4xl md:text-6xl font-light font-serif-editorial leading-tight">
            See it for yourself.
          </h2>
          <p className="text-lg md:text-xl font-light text-white/70 max-w-xl">
            Dive into the full interactive narrative to experience exactly how Rheole connects your world.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 w-full sm:w-auto">
            <Link href="/experience" className="w-full sm:w-auto px-10 py-5 bg-brand-gold text-brand-blue hover:bg-[#d6b78c] transition-colors rounded-full text-xs font-semibold uppercase tracking-widest shadow-xl">
              Launch Product Preview
            </Link>
            <Link href="/founding-access" className="w-full sm:w-auto px-10 py-5 border border-white/20 hover:border-white transition-colors rounded-full text-xs font-semibold uppercase tracking-widest">
              Join Founding Access
            </Link>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
