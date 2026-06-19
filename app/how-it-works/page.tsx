"use client";

import React from "react";
import { motion } from "framer-motion";

interface Pillar {
  title: string;
  subtitle: string;
  desc: string;
  details: string[];
}

export default function HowItWorks() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as const },
  };

  const pillars: Pillar[] = [
    {
      title: "Location Processing",
      subtitle: "Hyperlocal coordinate hashing",
      desc: "Rheole handles spatial data entirely client-side. Rather than streaming raw GPS tracks to central servers, device coordinates are localized into decentralized geohash clusters.",
      details: ["Client-side geohash compilation", "Zero raw GPS tracking", "Local boundary caching"]
    },
    {
      title: "Identity & Anonymity",
      subtitle: "Decentralized trust verification",
      desc: "Presence on the network is verified cryptographically without exposing literal user profiles. Identity decays naturally and is never sold.",
      details: ["Local signature verification", "Ephemeral spatial profile decay", "Decentralized auth tokens"]
    },
    {
      title: "Communities",
      subtitle: "Locally anchored nodes",
      desc: "Communities are mapped using spatial density and user-selected nodes rather than algorithms focused on maximizing screen time.",
      details: ["Spatial boundary clustering", "Interest-driven density mappings", "Peer moderation nodes"]
    },
    {
      title: "Events",
      subtitle: "Moments in physical motion",
      desc: "Rheole maps real-time events by monitoring presence clusters and localized schedules, filtering out noise and advertising.",
      details: ["Presence density index", "Real-time calendar verification", "Organic crowd signals"]
    },
    {
      title: "Messaging",
      subtitle: "Decentralized mesh delivery",
      desc: "Hyperlocal discussions route through local relays and peer connections, ensuring chat stays persistent and secure locally.",
      details: ["Local channel grouping", "Encrypted transmission", "Automatic history decay"]
    },
    {
      title: "Intelligence & Routing",
      subtitle: "Multi-signal routing engine",
      desc: "Movement decisions are evaluated dynamically by combining traffic density, micro-weather patterns, ongoing events, and road conditions.",
      details: ["Dynamic detour mapping", "Weather density index", "Real-time signal synthesis"]
    }
  ];

  return (
    <div className="w-full min-h-screen py-32 px-6 md:px-12 max-w-5xl mx-auto flex flex-col gap-16 md:gap-24">
      {/* Title Header */}
      <motion.div {...fadeInUp} className="flex flex-col gap-4 border-b border-brand-blue/15 dark:border-luxury-white/10 pb-8">
        <h1 className="text-4xl md:text-6xl font-light tracking-wide uppercase text-brand-blue dark:text-luxury-white font-serif-editorial">
          HOW RHEOLE WORKS
        </h1>
        <p className="text-xs uppercase tracking-widest text-brand-gold font-semibold">
          An architecture designed to keep spatial data local and secure.
        </p>
      </motion.div>

      {/* Narrative Concept */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.2 }}
        className="flex flex-col gap-8 text-brand-blue/80 dark:text-luxury-white/80 font-light text-md md:text-lg leading-relaxed max-w-3xl"
      >
        <p className="font-serif-editorial italic text-xl md:text-3xl text-brand-blue dark:text-luxury-white leading-relaxed">
          &ldquo;We don't build maps to track individuals. We compile real-time spatial frequencies to help people discover the world around them.&rdquo;
        </p>
        <p className="text-sm tracking-wide uppercase text-brand-blue/50 dark:text-luxury-white/50">
          The underlying design shifts data control back to the edge, processing proximity without compromising privacy.
        </p>
      </motion.div>

      {/* Visual Spatial Processing Simulation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="w-full border border-brand-blue/10 dark:border-luxury-white/10 rounded-2xl frosted-glass p-8 flex flex-col gap-8 relative overflow-hidden shadow-xl"
      >
        <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-brand-gold/15 to-transparent blur-xl pointer-events-none" />
        
        <h3 className="text-xs uppercase tracking-widest text-brand-gold font-semibold">
          Spatial Clustering Flow Diagram
        </h3>

        {/* Custom SVG Process Diagram */}
        <div className="w-full flex items-center justify-center py-6">
          <svg viewBox="0 0 800 200" fill="none" className="w-full max-w-3xl stroke-brand-blue dark:stroke-luxury-white opacity-85">
            {/* Step 1 */}
            <circle cx="100" cy="100" r="40" strokeWidth="0.75" strokeDasharray="3 3" />
            <circle cx="100" cy="100" r="6" fill="currentColor" />
            <text x="100" y="170" textAnchor="middle" className="text-[10px] tracking-widest uppercase font-sans font-medium fill-current">Device GPS</text>
            
            {/* Arrow 1 */}
            <path d="M160,100 L220,100" strokeWidth="0.75" strokeDasharray="2 2" />
            <polygon points="220,100 214,97 214,103" fill="currentColor" className="stroke-none" />

            {/* Step 2 */}
            <rect x="250" y="60" width="100" height="80" rx="6" strokeWidth="0.75" />
            <text x="300" y="105" textAnchor="middle" className="text-[10px] tracking-widest uppercase font-sans font-semibold fill-brand-gold">Local Hash</text>
            <text x="300" y="170" textAnchor="middle" className="text-[10px] tracking-widest uppercase font-sans font-medium fill-current">Edge Hashing</text>

            {/* Arrow 2 */}
            <path d="M370,100 L430,100" strokeWidth="0.75" />
            <polygon points="430,100 424,97 424,103" fill="currentColor" className="stroke-none" />

            {/* Step 3 */}
            <polygon points="500,50 550,100 500,150 450,100" strokeWidth="0.75" strokeDasharray="4 2" />
            <circle cx="500" cy="100" r="4" fill="currentColor" />
            <text x="500" y="170" textAnchor="middle" className="text-[10px] tracking-widest uppercase font-sans font-medium fill-current">Mesh Sync</text>

            {/* Arrow 3 */}
            <path d="M570,100 L630,100" strokeWidth="0.75" strokeDasharray="2 2" />
            <polygon points="630,100 624,97 624,103" fill="currentColor" className="stroke-none" />

            {/* Step 4 */}
            <circle cx="700" cy="100" r="40" strokeWidth="0.75" />
            <circle cx="700" cy="100" r="8" className="fill-brand-gold" />
            <text x="700" y="170" textAnchor="middle" className="text-[10px] tracking-widest uppercase font-sans font-medium fill-current">Rheole Pulse</text>
          </svg>
        </div>

        <p className="text-xs text-brand-blue/50 dark:text-luxury-white/40 leading-relaxed text-center max-w-xl mx-auto mt-2">
          Your coordinates are immediately scrubbed and hashed locally. The network only receives spatial indexes, preventing continuous activity tracking back to specific profiles.
        </p>
      </motion.div>

      {/* Six Pillars Grid (Visual cards replaced with Custom Spaced layouts matching Careers) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.4 }}
        className="flex flex-col gap-12 mt-8 border-t border-brand-blue/15 dark:border-luxury-white/10 pt-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 gap-y-16">
          {pillars.map((pillar, index) => (
            <div key={index} className="flex flex-col gap-4 border-l border-brand-blue/10 dark:border-luxury-white/10 pl-6 text-left">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] tracking-widest uppercase text-brand-gold font-semibold">
                  {pillar.subtitle}
                </span>
                <h3 className="text-lg md:text-xl font-medium text-brand-blue dark:text-luxury-white uppercase tracking-wider">
                  {pillar.title}
                </h3>
              </div>
              <p className="text-sm text-brand-blue/70 dark:text-luxury-white/70 leading-relaxed font-light font-sans">
                {pillar.desc}
              </p>
              
              <ul className="flex flex-col gap-1 mt-2">
                {pillar.details.map((detail, idx) => (
                  <li key={idx} className="text-[10px] uppercase tracking-widest text-brand-blue/50 dark:text-luxury-white/45 flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-brand-gold" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Footer CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="flex flex-col gap-8 text-center border-t border-brand-blue/15 dark:border-luxury-white/10 pt-16 mt-8"
      >
        <h2 className="text-xl md:text-3xl font-light uppercase tracking-widest text-brand-blue dark:text-luxury-white leading-relaxed">
          Ready to experience the spatial layer?
        </h2>
        <a
          href="/founding-access"
          className="inline-block mx-auto text-xs uppercase tracking-[0.25em] font-medium border border-brand-blue/30 dark:border-luxury-white/20 hover:border-brand-gold hover:text-brand-gold rounded-full px-8 py-4 transition-all duration-300 text-brand-blue dark:text-luxury-white"
        >
          Request Early Access
        </a>
      </motion.div>
    </div>
  );
}
