"use client";

import React from "react";
import { motion } from "framer-motion";

interface SecurityLayer {
  title: string;
  metric: string;
  desc: string;
  points: string[];
}

export default function SecurityArchitecture() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as const },
  };

  const layers: SecurityLayer[] = [
    {
      title: "Zero Trust Protocol",
      metric: "Layer 1",
      desc: "Every request inside the Rheole local network is continuously validated. Presence signature tokens verify user authorization on local nodes dynamically.",
      points: [
        "Continuous token rotation",
        "Local signature authentication",
        "Boundary access control checking"
      ]
    },
    {
      title: "Spatial Encryption",
      metric: "Layer 2",
      desc: "All spatial information in transit is encrypted using TLS 1.3, while local databases on client devices leverage hardware-backed AES-256 key registries.",
      points: [
        "Hardware-enclave key management",
        "TLS 1.3 spatial socket streams",
        "Local cache-file isolation"
      ]
    },
    {
      title: "Account & Session Integrity",
      metric: "Layer 3",
      desc: "Session security detects location anomalies and prevents account takeover using adaptive risk evaluation and cryptographic device validation.",
      points: [
        "Cryptographic device handshake",
        "Velocity validation checking",
        "MFA authentication integration"
      ]
    },
    {
      title: "Infrastructure Isolation",
      metric: "Layer 4",
      desc: "The network infrastructure is partitioned using container isolation and strict network routing, monitoring all server logs for deviations in real time.",
      points: [
        "Container boundaries",
        "Real-time event log parsing",
        "Vulnerability signature scanning"
      ]
    }
  ];

  return (
    <div className="w-full min-h-screen py-32 px-6 md:px-12 max-w-5xl mx-auto flex flex-col gap-16 md:gap-24">
      {/* Title */}
      <motion.div {...fadeInUp} className="flex flex-col gap-4 border-b border-brand-blue/15 dark:border-luxury-white/10 pb-8">
        <h1 className="text-4xl md:text-6xl font-light tracking-wide uppercase text-brand-blue dark:text-luxury-white font-serif-editorial">
          SECURITY ARCHITECTURE
        </h1>
        <p className="text-xs uppercase tracking-widest text-brand-gold font-semibold">
          Hardware-backed encryption. Zero trust boundary validation.
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
          &ldquo;Security is not a parameter. It is the fundamental boundary condition of our spatial compute systems.&rdquo;
        </p>
        <p className="text-sm tracking-wide uppercase text-brand-blue/50 dark:text-luxury-white/50">
          Our infrastructure validates sessions continuously, protecting private messaging pipelines and spatial index nodes from intrusion.
        </p>
      </motion.div>

      {/* Animated Architecture Diagram */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="w-full border border-brand-blue/10 dark:border-luxury-white/10 rounded-2xl frosted-glass p-8 flex flex-col gap-8 relative overflow-hidden shadow-xl"
      >
        <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-brand-gold/15 to-transparent blur-xl pointer-events-none" />
        
        <h3 className="text-xs uppercase tracking-widest text-brand-gold font-semibold">
          Continuous Authentication & Validation Loop
        </h3>

        {/* Custom SVG Process Diagram */}
        <div className="w-full flex items-center justify-center py-6">
          <svg viewBox="0 0 800 240" fill="none" className="w-full max-w-3xl stroke-brand-blue dark:stroke-luxury-white opacity-85">
            {/* Step 1: Request */}
            <circle cx="100" cy="120" r="32" strokeWidth="0.75" />
            <path d="M100,100 L100,140 M85,120 L115,120" strokeWidth="0.75" />
            <text x="100" y="123" textAnchor="middle" className="text-[10px] tracking-widest uppercase font-sans font-semibold fill-brand-gold">Client</text>
            <text x="100" y="190" textAnchor="middle" className="text-[9px] tracking-widest uppercase font-sans fill-current">Device Cache</text>

            {/* Line 1 */}
            <path d="M140,120 L230,120" strokeWidth="0.75" />
            <polygon points="230,120 224,117 224,123" fill="currentColor" className="stroke-none" />

            {/* Step 2: Gateway */}
            <rect x="250" y="70" width="120" height="100" rx="8" strokeWidth="0.75" />
            <text x="310" y="110" textAnchor="middle" className="text-[10px] tracking-widest uppercase font-sans font-semibold fill-current">Zero Trust</text>
            <text x="310" y="130" textAnchor="middle" className="text-[9px] tracking-widest uppercase font-sans font-semibold fill-brand-gold">Gateway</text>
            <text x="310" y="150" textAnchor="middle" className="text-[8px] font-sans fill-current opacity-60">Continuous Auth</text>
            <text x="310" y="190" textAnchor="middle" className="text-[9px] tracking-widest uppercase font-sans fill-current">TLS 1.3 Session</text>

            {/* Line 2 */}
            <path d="M380,120 L470,120" strokeWidth="0.75" />
            <polygon points="470,120 464,117 464,123" fill="currentColor" className="stroke-none" />

            {/* Step 3: HSM Node */}
            <polygon points="540,60 610,120 540,180 470,120" strokeWidth="0.75" strokeDasharray="3 3" />
            <circle cx="540" cy="120" r="4" fill="currentColor" />
            <text x="540" y="124" textAnchor="middle" className="text-[9px] tracking-widest uppercase font-sans font-semibold fill-brand-gold">Enclave</text>
            <text x="540" y="190" textAnchor="middle" className="text-[9px] tracking-widest uppercase font-sans fill-current">HSM Validation</text>

            {/* Line 3 */}
            <path d="M610,120 L700,120" strokeWidth="0.75" />
            <polygon points="700,120 694,117 694,123" fill="currentColor" className="stroke-none" />

            {/* Step 4: Storage */}
            <circle cx="730" cy="120" r="20" strokeWidth="0.75" />
            <text x="730" y="190" textAnchor="middle" className="text-[9px] tracking-widest uppercase font-sans fill-current">Index Node</text>
          </svg>
        </div>

        <p className="text-xs text-brand-blue/50 dark:text-luxury-white/40 leading-relaxed text-center max-w-xl mx-auto">
          Hardware-backed encryption keys and session tokens are rotated continuously client-side. The servers process zero plaintext transaction identifiers, isolating database infrastructure.
        </p>
      </motion.div>

      {/* Four Security Layers Grid */}
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
              <p className="text-sm text-brand-blue/70 dark:text-luxury-white/70 leading-relaxed font-light font-sans">
                {layer.desc}
              </p>
              
              <ul className="flex flex-col gap-1.5 mt-2">
                {layer.points.map((point, idx) => (
                  <li key={idx} className="text-[10px] uppercase tracking-widest text-brand-blue/50 dark:text-luxury-white/45 flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-brand-gold" />
                    {point}
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
          Questions about our security infrastructure?
        </h2>
        <a
          href="/contact"
          className="inline-block mx-auto text-xs uppercase tracking-[0.25em] font-medium border border-brand-blue/30 dark:border-luxury-white/20 hover:border-brand-gold hover:text-brand-gold rounded-full px-8 py-4 transition-all duration-300 text-brand-blue dark:text-luxury-white"
        >
          Contact Security Team
        </a>
      </motion.div>
    </div>
  );
}
