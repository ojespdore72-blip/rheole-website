"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import ScrollReveal, { RevealChild } from "@/components/ScrollReveal";
import LivingImage from "@/components/LivingImage";

// Dummy Editorial Photos
const photos = [
  "/web_image_1.png",
  "/web_image_3.jpg",
  "/web_image_4.jpg"
];

// Canvas Dot Grid Component for ambient background
function AmbientDotGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.08]">
      <motion.div 
        animate={{ 
          x: ["0%", "-5%", "0%"],
          y: ["0%", "5%", "0%"]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 60, 
          ease: "linear" 
        }}
        className="w-[200vw] h-[200vw] absolute -top-[50vw] -left-[50vw]"
        style={{
          backgroundImage: "radial-gradient(#F2F2F0 1px, transparent 1px)",
          backgroundSize: "64px 64px"
        }}
      />
    </div>
  );
}

// Hero Component
function HeroSection() {
  const words = "The pulse of your city.".split(" ");
  
  return (
    <section className="relative w-full min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden pt-20 pb-24">
      <AmbientDotGrid />
      
      {/* Main content shifted slightly above true center */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-[1100px] px-6 mt-[-5dvh]">
        
        {/* Eyebrow */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center gap-4 mb-8"
        >
          <div className="w-8 h-[2px] bg-[#4F6EF7]/50" />
          <span className="section-eyebrow text-[#4F6EF7]">BENGALURU · HYPERLOCAL INTELLIGENCE</span>
          <div className="w-8 h-[2px] bg-[#4F6EF7]/50" />
        </motion.div>

        {/* Headline */}
        <h1 className="flex flex-wrap justify-center overflow-hidden mb-6">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                ease: [0.16, 1, 0.3, 1], 
                delay: 0.4 + (i * 0.08) 
              }}
              className="text-[clamp(56px,8vw,96px)] font-serif-editorial leading-[1.05] tracking-tight font-black text-[#F2F2F0] mr-[clamp(12px,2vw,24px)]"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-body-editorial max-w-[600px] mb-12"
        >
          The intelligence layer between people and the physical world. Re-imagining local communities and spatial discovery.
        </motion.p>

        {/* App Badges & Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="flex flex-col sm:flex-row items-center gap-8 mb-12"
        >
          <a href="#" className="flex items-center justify-center gap-3 w-[160px] py-3 rounded-xl border border-[rgba(255,255,255,0.15)] bg-transparent opacity-60 hover:opacity-100 transition-opacity duration-300 interactive">
            <span className="text-[13px] tracking-wide font-medium text-[#F2F2F0]">App Store</span>
          </a>

          {/* Scroll Indicator between buttons */}
          <div className="w-[1px] h-12 bg-gradient-to-b from-[rgba(255,255,255,0.0)] via-[#6A6A6A] to-[rgba(255,255,255,0.0)] relative overflow-hidden hidden sm:block">
            <motion.div 
              animate={{ top: ['-100%', '100%'] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              className="absolute left-0 w-full h-1/2 bg-[#F2F2F0]"
            />
          </div>

          <a href="#" className="flex items-center justify-center gap-3 w-[160px] py-3 rounded-xl border border-[rgba(255,255,255,0.15)] bg-transparent opacity-60 hover:opacity-100 transition-opacity duration-300 interactive">
            <span className="text-[13px] tracking-wide font-medium text-[#F2F2F0]">Google Play</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

// Live Intelligence Demo Section
function LiveDemoSection() {
  const scenarios = [
    {
      query: "Find me an emerging startup mixer in Indiranagar tonight",
      responses: [
        { status: "Active Now", title: "Indiranagar Mixer", desc: "120+ attendees in the last hour. High density of startup founders." },
        { status: "Trending", title: "Tech Hub 100ft Rd", desc: "Acoustic event starting in 30 mins. Moderate noise level expected." }
      ]
    },
    {
      query: "Where is the best quiet spot for deep work near Koramangala?",
      responses: [
        { status: "Low Noise", title: "The Courtyard Cafe", desc: "Current noise level: 45dB. 30% capacity, high probability of finding seating." },
        { status: "Moderate", title: "Third Wave Coffee", desc: "Steady hum. Good for focus, but seating is limited right now." }
      ]
    },
    {
      query: "Are there any live acoustic music events happening right now?",
      responses: [
        { status: "Live Now", title: "Blue Frog Acoustic", desc: "Live jazz trio currently playing. Crowd sentiment is highly positive." },
        { status: "Starting Soon", title: "The Piano Man", desc: "Next set begins in 15 minutes. Best to grab a table now." }
      ]
    },
    {
      query: "Show me the highest density of designers right now.",
      responses: [
        { status: "High Density", title: "HSR Layout Sector 2", desc: "Unusual concentration of creative agency check-ins detected." },
        { status: "Trending", title: "Koramangala Social", desc: "Design week after-party gathering momentum. High energy." }
      ]
    },
    {
      query: "Where can I find a late-night street food cluster with low wait times?",
      responses: [
        { status: "Active Now", title: "VV Puram Food Street", desc: "Peak hours are over. Wait times down by 40%. High activity." },
        { status: "Moderate Wait", title: "Mosque Road", desc: "Still crowded, but movement is fast. Famous rolls highly rated tonight." }
      ]
    }
  ];

  const [activeScenarioIdx, setActiveScenarioIdx] = useState(0);
  const [displayedQuery, setDisplayedQuery] = useState("");
  const [messagesShown, setMessagesShown] = useState(0);

  useEffect(() => {
    let currentQuery = scenarios[activeScenarioIdx].query;
    let charIndex = 0;
    
    // Reset state for new scenario
    setDisplayedQuery("");
    setMessagesShown(0);

    // 1. Typewriter effect for query
    const typeInterval = setInterval(() => {
      if (charIndex < currentQuery.length) {
        setDisplayedQuery(currentQuery.substring(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        
        // 2. Show first response after typing
        setTimeout(() => setMessagesShown(1), 600);
        // 3. Show second response
        setTimeout(() => setMessagesShown(2), 1400);
        // 4. Wait, then go to next scenario
        setTimeout(() => {
          setMessagesShown(0); // fade out responses
          setTimeout(() => {
            setActiveScenarioIdx((prev) => (prev + 1) % scenarios.length);
          }, 600);
        }, 6000);
      }
    }, 40); // typing speed

    return () => {
      clearInterval(typeInterval);
    };
  }, [activeScenarioIdx]); // Only re-run when scenario changes

  const activeScenario = scenarios[activeScenarioIdx];

  return (
    <section className="w-full py-[160px] px-6 flex justify-center">
      <ScrollReveal className="w-full max-w-[1100px] flex flex-col gap-8">
        
        <div className="flex flex-col gap-2">
          <span className="section-eyebrow">LIVE INTELLIGENCE LAYER</span>
        </div>

        <div className="luxury-glass-panel p-8 md:p-12 min-h-[400px] flex flex-col gap-8 relative overflow-hidden group">
          {/* Subtle Accent Glow */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#4F6EF7]/5 rounded-full blur-[80px] pointer-events-none" />

          {/* Chat / Query */}
          <div className="flex flex-col gap-4 max-w-[600px] z-10 min-h-[96px]">
            <p className="text-[#6A6A6A] font-mono text-[13px]">
              {">"} User Query
            </p>
            <div className="text-[20px] md:text-[24px] text-[#F2F2F0] font-light leading-relaxed">
              <span className="mr-1">"{displayedQuery}"</span>
              <motion.span 
                animate={{ opacity: [1, 0] }} 
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="inline-block w-3 h-[24px] bg-[#4F6EF7] align-middle"
              />
            </div>
          </div>

          {/* Responses */}
          <div className="flex flex-col md:flex-row gap-6 mt-4 md:mt-8 z-10 h-[180px]">
            <AnimatePresence>
              {messagesShown >= 1 && (
                <motion.div 
                  key={`msg-1-${activeScenarioIdx}`}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12, transition: { duration: 0.4 } }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="flex-1 bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] rounded-[12px] p-6 border-l-2 !border-l-[#4F6EF7]"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#4ade80] shadow-[0_0_8px_rgba(74,222,128,0.8)] animate-pulse" />
                    <span className="text-[11px] text-[#4ade80] uppercase tracking-wider font-medium">{activeScenario.responses[0].status}</span>
                  </div>
                  <h3 className="text-[#F2F2F0] text-[18px] mb-2 font-medium">{activeScenario.responses[0].title}</h3>
                  <p className="text-[#6A6A6A] text-[14px]">{activeScenario.responses[0].desc}</p>
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {messagesShown >= 2 && (
                <motion.div 
                  key={`msg-2-${activeScenarioIdx}`}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12, transition: { duration: 0.4 } }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="flex-1 bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] rounded-[12px] p-6 border-l-2 !border-l-[#4F6EF7]"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#4ade80] shadow-[0_0_8px_rgba(74,222,128,0.8)] animate-pulse" />
                    <span className="text-[11px] text-[#4ade80] uppercase tracking-wider font-medium">{activeScenario.responses[1].status}</span>
                  </div>
                  <h3 className="text-[#F2F2F0] text-[18px] mb-2 font-medium">{activeScenario.responses[1].title}</h3>
                  <p className="text-[#6A6A6A] text-[14px]">{activeScenario.responses[1].desc}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </ScrollReveal>
    </section>
  );
}

// Roots Section
function RootsSection() {
  return (
    <section className="w-full py-[160px] px-6">
      <div className="max-w-[1100px] mx-auto flex flex-col gap-24">
        
        {/* Mosaic */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">
          {/* Large Left */}
          <ScrollReveal className="md:col-span-7 h-[400px] md:h-full relative rounded-lg overflow-hidden border border-[rgba(255,255,255,0.06)] group">
            <motion.div 
              initial={{ scale: 0.96 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0"
            >
              <LivingImage src={photos[0]} alt="Bengaluru City" className="w-full h-full object-cover" />
            </motion.div>
            <div className="absolute bottom-0 left-0 w-full h-[20%] bg-gradient-to-t from-[rgba(0,0,0,0.4)] to-transparent" />
          </ScrollReveal>

          {/* Stacked Right */}
          <div className="md:col-span-5 flex flex-col gap-6 h-[800px] md:h-full">
            <ScrollReveal delay={0.12} className="flex-1 relative rounded-lg overflow-hidden border border-[rgba(255,255,255,0.06)]">
              <motion.div 
                initial={{ scale: 0.96 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0"
              >
                <LivingImage src={photos[1]} alt="Local community" className="w-full h-full object-cover" />
              </motion.div>
              <div className="absolute bottom-0 left-0 w-full h-[20%] bg-gradient-to-t from-[rgba(0,0,0,0.4)] to-transparent" />
            </ScrollReveal>
            <ScrollReveal delay={0.24} className="flex-1 relative rounded-lg overflow-hidden border border-[rgba(255,255,255,0.06)]">
              <motion.div 
                initial={{ scale: 0.96 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0"
              >
                <LivingImage src={photos[2]} alt="Spatial architecture" className="w-full h-full object-cover" />
              </motion.div>
              <div className="absolute bottom-0 left-0 w-full h-[20%] bg-gradient-to-t from-[rgba(0,0,0,0.4)] to-transparent" />
            </ScrollReveal>
          </div>
        </div>

        {/* Copy Block */}
        <ScrollReveal>
          <div className="flex flex-col items-center">
            <div className="w-full max-w-[680px] h-[1px] bg-[rgba(255,255,255,0.06)] mb-12" />
            <p className="text-[24px] md:text-[32px] font-light font-serif-editorial text-[#F2F2F0] text-center max-w-[680px] leading-[1.4]">
              We are not building an escape to the metaverse. We are building the tools to fall back in love with your physical city.
            </p>
            <div className="w-full max-w-[680px] h-[1px] bg-[rgba(255,255,255,0.06)] mt-12" />
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}

// Join Section
function JoinSection() {
  return (
    <section className="w-full py-[200px] px-6 relative overflow-hidden flex flex-col items-center">
      {/* Massive radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#4F6EF7] rounded-full blur-[160px] opacity-[0.08] pointer-events-none" />
      
      <ScrollReveal className="relative z-10 flex flex-col items-center text-center">
        <h2 className="text-[clamp(48px,6vw,72px)] font-serif-editorial font-light text-[#F2F2F0] mb-16 tracking-tight">
          Join the new future.
        </h2>
        
        <Link 
          href="/founding-access"
          className="group relative h-[52px] px-[28px] rounded-full border border-[#4F6EF7] text-[#4F6EF7] bg-transparent overflow-hidden flex items-center justify-center interactive transition-all duration-300 hover:shadow-[0_0_24px_rgba(79,110,247,0.3)] mb-12"
        >
          <span className="relative z-10 text-[14px] font-medium tracking-wide uppercase transition-colors group-hover:text-white">
            Request Early Access
          </span>
          <div className="absolute inset-0 bg-[#4F6EF7] opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
        </Link>
        
        {/* Socials */}
        <div className="flex items-center gap-6">
          <a href="https://www.instagram.com/rheole_?igsh=MTV5dnF2ODU0ODVjMg==" target="_blank" rel="noopener noreferrer" className="text-[12px] text-[#3A3A3A] hover:text-[#6A6A6A] transition-colors uppercase tracking-widest interactive">Instagram</a>
          <span className="w-1 h-1 rounded-full bg-[rgba(255,255,255,0.1)]" />
          <a href="https://www.facebook.com/share/1cR5NhDCZm/" target="_blank" rel="noopener noreferrer" className="text-[12px] text-[#3A3A3A] hover:text-[#6A6A6A] transition-colors uppercase tracking-widest interactive">Facebook</a>
          <span className="w-1 h-1 rounded-full bg-[rgba(255,255,255,0.1)]" />
          <a href="https://x.com/rheole_" target="_blank" rel="noopener noreferrer" className="text-[12px] text-[#3A3A3A] hover:text-[#6A6A6A] transition-colors uppercase tracking-widest interactive">Twitter</a>
        </div>
      </ScrollReveal>
    </section>
  );
}

export default function Home() {
  return (
    <div className="relative w-full bg-[#080808]">
      <HeroSection />
      <LiveDemoSection />
      <RootsSection />
      <JoinSection />
    </div>
  );
}
