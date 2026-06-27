"use client";

import React from "react";
import { motion } from "framer-motion";

interface ArchitectureCard {
  title: string;
  metric: string;
  details: string[];
}

export default function PrivacyArchitecture() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as const },
  };

  const layers: ArchitectureCard[] = [
    {
      title: "Data We Collect",
      metric: "Minimum Footprint",
      details: [
        "Ephemeral Localized Geohashes (not literal coordinates)",
        "Profile Pseudonym Signatures",
        "Public Event Registries & Schedule Tags",
        "Temporary Mesh Message Headers (decay within 24h)"
      ]
    },
    {
      title: "Why We Collect It",
      metric: "Strict Utility",
      details: [
        "To recommend active communities in your geohash",
        "To index and coordinate local gathering markers",
        "To route mesh communications across nearby relays",
        "To calculate multi-signal path optimizations"
      ]
    },
    {
      title: "How It Is Protected",
      metric: "Edge Isolation",
      details: [
        "AES-256 local database encryption",
        "Client-side signature hashing before transit",
        "P2P mesh routing for community chat nodes",
        "No centralized tracking databases"
      ]
    },
    {
      title: "Your Absolute Control",
      metric: "User Sovereignty",
      details: [
        "Modify location granularity parameters anytime",
        "Instantly flush cached local data stacks",
        "Request full account database deletion",
        "Revoke community signature authorization keys"
      ]
    }
  ];

  return (
    <div className="w-full min-h-screen py-32 px-6 md:px-12 max-w-5xl mx-auto flex flex-col gap-16 md:gap-24">
      {/* Title */}
      <motion.div {...fadeInUp} className="flex flex-col gap-4 border-b border-brand-blue/15 dark:border-luxury-white/10 pb-8">
        <h1 className="text-4xl md:text-6xl font-light tracking-wide uppercase text-brand-blue dark:text-luxury-white font-serif-editorial">
          PRIVACY ARCHITECTURE
        </h1>
        <p className="text-xs uppercase tracking-widest text-brand-gold font-semibold">
          Decentralized spatial privacy. Proven by design.
        </p>
      </motion.div>

      {/* Narrative Intro */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.2 }}
        className="flex flex-col gap-8 text-brand-blue/80 dark:text-luxury-white/80 font-light text-md md:text-lg leading-relaxed max-w-3xl"
      >
        <p className="font-serif-editorial italic text-xl md:text-3xl text-brand-blue dark:text-luxury-white leading-relaxed">
          &ldquo;Privacy is not about hiding information. It is about retaining ownership of your physical presence.&rdquo;
        </p>
        <p className="text-sm tracking-wide uppercase text-brand-blue/70 dark:text-luxury-white/50">
          Our system translates location data into dynamic mathematical indexes, ensuring that your coordinates are never permanently logged.
        </p>
      </motion.div>

      {/* Interactive Privacy Diagram */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4 }}
        className="-mx-6 w-[calc(100%+3rem)] md:mx-0 md:w-full border-y md:border border-brand-blue/10 dark:border-luxury-white/10 rounded-none md:rounded-2xl frosted-glass p-8 flex flex-col gap-8 relative overflow-hidden shadow-xl"
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-brand-gold/10 to-transparent blur-xl pointer-events-none" />
        
        <h3 className="text-xs uppercase tracking-widest text-brand-gold font-semibold">
          Data Pipeline Anonymization Map
        </h3>

        {/* Custom SVG Architecture Map */}
        <div className="w-full flex items-center justify-center py-6">
          <svg viewBox="0 0 800 220" fill="none" className="w-full max-w-3xl stroke-brand-blue dark:stroke-luxury-white opacity-85">
            {/* User GPS */}
            <circle cx="80" cy="110" r="24" strokeWidth="0.75" />
            <path d="M80,95 L80,125 M65,110 L95,110" strokeWidth="0.75" strokeDasharray="2 2" />
            <text x="80" y="170" textAnchor="middle" className="text-[9px] tracking-widest uppercase font-sans fill-current">Raw GPS Coordinate</text>

            {/* Line 1 */}
            <path d="M110,110 L190,110" strokeWidth="0.75" />
            <polygon points="190,110 184,107 184,113" fill="currentColor" className="stroke-none" />

            {/* Anonymization Box */}
            <rect x="210" y="70" width="160" height="80" rx="8" strokeWidth="0.75" />
            <text x="290" y="105" textAnchor="middle" className="text-[10px] tracking-widest uppercase font-sans font-semibold fill-brand-gold">Local Geohashing</text>
            <text x="290" y="125" textAnchor="middle" className="text-[9px] font-sans fill-current opacity-60">Scrubbing & Precision Truncation</text>
            <text x="290" y="170" textAnchor="middle" className="text-[9px] tracking-widest uppercase font-sans fill-current">Edge Processing (On-Device)</text>

            {/* Line 2 */}
            <path d="M380,110 L460,110" strokeWidth="0.75" />
            <polygon points="460,110 454,107 454,113" fill="currentColor" className="stroke-none" />

            {/* Mesh Box */}
            <polygon points="550,60 630,110 550,160 470,110" strokeWidth="0.75" strokeDasharray="3 3" />
            <text x="550" y="115" textAnchor="middle" className="text-[10px] tracking-widest uppercase font-sans font-semibold fill-current">Decentralized Mesh</text>
            <text x="550" y="170" textAnchor="middle" className="text-[9px] tracking-widest uppercase font-sans fill-current">Spatial Index Node</text>

            {/* Line 3 */}
            <path d="M630,110 L700,110" strokeWidth="0.75" />
            <polygon points="700,110 694,107 694,113" fill="currentColor" className="stroke-none" />

            {/* Output */}
            <circle cx="730" cy="110" r="12" strokeWidth="0.75" />
            <text x="730" y="170" textAnchor="middle" className="text-[9px] tracking-widest uppercase font-sans fill-current">Rheole Pulse</text>
          </svg>
        </div>

        <p className="text-xs text-brand-blue/70 dark:text-luxury-white/40 leading-relaxed text-center max-w-xl mx-auto">
          Coordinates never leave the device in raw format. Hashing coordinates at the client level ensures your path history is cryptographically decoupled from your profile identity before interacting with spatial routing relays.
        </p>
      </motion.div>

      {/* Grid List */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.4 }}
        className="flex flex-col gap-12 mt-8 border-t border-brand-blue/15 dark:border-luxury-white/10 pt-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 gap-y-16">
          {layers.map((layer, index) => (
            <div key={index} className="flex flex-col gap-4 border-l border-brand-blue/10 dark:border-luxury-white/10 pl-6 text-left">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] tracking-widest uppercase text-brand-gold font-semibold">
                  {layer.metric}
                </span>
                <h3 className="text-lg md:text-xl font-medium text-brand-blue dark:text-luxury-white uppercase tracking-wider">
                  {layer.title}
                </h3>
              </div>
              
              <ul className="flex flex-col gap-2 mt-2">
                {layer.details.map((detail, idx) => (
                  <li key={idx} className="text-xs text-brand-blue/70 dark:text-luxury-white/70 leading-relaxed font-sans flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-gold mt-1.5 shrink-0" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="flex flex-col gap-8 text-center border-t border-brand-blue/15 dark:border-luxury-white/10 pt-16 mt-8"
      >
        <h2 className="text-xl md:text-3xl font-light uppercase tracking-widest text-brand-blue dark:text-luxury-white leading-relaxed">
          Request early access to the secure local network.
        </h2>
        <a
          href="/founding-access"
          className="inline-block mx-auto text-xs uppercase tracking-[0.25em] font-medium border border-brand-blue/30 dark:border-luxury-white/20 hover:border-brand-gold hover:text-brand-gold rounded-full px-8 py-4 transition-all duration-300 text-brand-blue dark:text-luxury-white"
        >
          Join the Future
        </a>
      </motion.div>
    </div>
  );
}
