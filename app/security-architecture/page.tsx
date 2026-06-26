"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MagneticButton from "@/components/MagneticButton";

interface SecurityLayer {
  title: string;
  metric: string;
  desc: string;
  points: string[];
}

export default function SecurityArchitecture() {
  const [precision, setPrecision] = useState<"exact" | "blurred">("blurred");
  const [retention, setRetention] = useState<"ephemeral" | "persistent">("ephemeral");

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
      points: ["Continuous token rotation", "Local signature authentication", "Boundary access control checking"]
    },
    {
      title: "Spatial Encryption",
      metric: "Layer 2",
      desc: "All spatial information in transit is encrypted using TLS 1.3, while local databases on client devices leverage hardware-backed AES-256 key registries.",
      points: ["Hardware-enclave key management", "TLS 1.3 spatial socket streams", "Local cache-file isolation"]
    },
    {
      title: "Account & Session Integrity",
      metric: "Layer 3",
      desc: "Session security detects location anomalies and prevents account takeover using adaptive risk evaluation and cryptographic device validation.",
      points: ["Cryptographic device handshake", "Velocity validation checking", "MFA authentication integration"]
    },
    {
      title: "Infrastructure Isolation",
      metric: "Layer 4",
      desc: "The network infrastructure is partitioned using container isolation and strict network routing, monitoring all server logs for deviations in real time.",
      points: ["Container boundaries", "Real-time event log parsing", "Vulnerability signature scanning"]
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

      {/* Interactive Trust Diagram */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="w-full border border-brand-blue/10 dark:border-luxury-white/10 rounded-3xl spatial-glass p-8 md:p-12 flex flex-col gap-12 relative overflow-hidden shadow-2xl"
      >
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-gold/10 blur-[120px] pointer-events-none rounded-full" />
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center z-10 gap-8">
          <div>
            <h3 className="text-xs uppercase tracking-widest text-brand-gold font-semibold mb-2">
              Interactive Trust Visualization
            </h3>
            <p className="text-sm font-light text-brand-blue/60 dark:text-white/60 max-w-md">
              Toggle the privacy controls below to see how Rheole routes and protects your spatial data in real-time.
            </p>
          </div>
          
          {/* Controls */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between gap-6 bg-white/5 p-3 rounded-2xl border border-white/10">
              <span className="text-xs font-mono uppercase tracking-widest text-white/80">Location</span>
              <div className="flex gap-2">
                <button 
                  onClick={() => setPrecision("blurred")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${precision === "blurred" ? "bg-brand-gold text-brand-blue shadow-lg scale-105" : "text-white/50 hover:text-white"}`}
                >
                  Blurred
                </button>
                <button 
                  onClick={() => setPrecision("exact")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${precision === "exact" ? "bg-brand-gold text-brand-blue shadow-lg scale-105" : "text-white/50 hover:text-white"}`}
                >
                  Exact
                </button>
              </div>
            </div>
            
            <div className="flex items-center justify-between gap-6 bg-white/5 p-3 rounded-2xl border border-white/10">
              <span className="text-xs font-mono uppercase tracking-widest text-white/80">Memory</span>
              <div className="flex gap-2">
                <button 
                  onClick={() => setRetention("ephemeral")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${retention === "ephemeral" ? "bg-brand-blue text-white border border-white/20 shadow-lg scale-105" : "text-white/50 hover:text-white"}`}
                >
                  Ephemeral
                </button>
                <button 
                  onClick={() => setRetention("persistent")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${retention === "persistent" ? "bg-brand-blue text-white border border-white/20 shadow-lg scale-105" : "text-white/50 hover:text-white"}`}
                >
                  Persistent
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Data Flow Canvas */}
        <div className="relative w-full h-[300px] bg-black/40 rounded-2xl border border-white/5 overflow-hidden flex items-center justify-center">
          {/* Data Source (User) */}
          <div className="absolute left-10 flex flex-col items-center gap-2">
            <motion.div 
              animate={{ filter: precision === "blurred" ? "blur(8px)" : "blur(0px)" }}
              className="w-16 h-16 rounded-full bg-brand-gold/20 border border-brand-gold flex items-center justify-center relative"
            >
              <div className="w-2 h-2 bg-brand-gold rounded-full" />
              {precision === "blurred" && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute inset-0 rounded-full border border-brand-gold border-dashed animate-spin-slow" />
              )}
            </motion.div>
            <span className="text-[10px] uppercase font-mono text-white/60">Source</span>
          </div>

          {/* Encryption Tunnel */}
          <div className="absolute left-32 right-32 h-[2px] bg-white/10 flex items-center">
            {/* Animated Data Packets */}
            <motion.div 
              animate={{ x: ["0%", "400%"] }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              className="w-12 h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent"
            />
            {/* Encryption Lock */}
            <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-[#020205] border border-brand-blue/30 rounded-lg flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-brand-gold stroke-[2]"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
            </div>
          </div>

          {/* Data Destination (Server Enclave) */}
          <div className="absolute right-10 flex flex-col items-center gap-2">
            <motion.div 
              animate={{ borderColor: retention === "ephemeral" ? "rgba(255,255,255,0.2)" : "rgba(197,168,128,0.5)" }}
              className="w-24 h-24 rounded-2xl bg-white/5 border border-white/20 flex flex-col items-center justify-center gap-2 relative overflow-hidden"
            >
              {retention === "ephemeral" ? (
                <>
                  <motion.div animate={{ opacity: [1, 0, 1] }} transition={{ repeat: Infinity, duration: 1.5 }} className="w-12 h-1 bg-white/20 rounded-full" />
                  <motion.div animate={{ opacity: [1, 0, 1] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.2 }} className="w-10 h-1 bg-white/20 rounded-full" />
                  <p className="text-[8px] text-white/40 mt-2 font-mono">Auto-Delete</p>
                </>
              ) : (
                <>
                  <div className="w-12 h-1 bg-brand-gold/80 rounded-full" />
                  <div className="w-10 h-1 bg-brand-gold/80 rounded-full" />
                  <div className="w-8 h-1 bg-brand-gold/80 rounded-full" />
                  <p className="text-[8px] text-brand-gold mt-2 font-mono">Stored</p>
                </>
              )}
            </motion.div>
            <span className="text-[10px] uppercase font-mono text-white/60">Enclave</span>
          </div>
        </div>

      </motion.div>

      {/* Four Security Layers Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-12 gap-y-16 mt-8"
      >
        {layers.map((layer, index) => (
          <div key={index} className="flex flex-col gap-4 border-l border-brand-blue/10 dark:border-luxury-white/10 pl-6 text-left group">
            <div className="flex flex-col gap-1">
              <span className="text-[10px] tracking-widest uppercase text-brand-gold font-semibold transition-colors group-hover:text-white">
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
                  <span className="h-1 w-1 rounded-full bg-brand-gold transition-transform group-hover:scale-150" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </motion.div>

      {/* Footer CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="flex flex-col items-center gap-8 text-center border-t border-brand-blue/15 dark:border-luxury-white/10 pt-16 mt-8"
      >
        <h2 className="text-xl md:text-3xl font-light uppercase tracking-widest text-brand-blue dark:text-luxury-white leading-relaxed">
          Questions about our security infrastructure?
        </h2>
        <MagneticButton strength={0.2}>
          <a
            href="/contact"
            className="inline-block mx-auto text-xs uppercase tracking-[0.25em] font-medium border border-brand-blue/30 dark:border-luxury-white/20 hover:border-brand-gold hover:text-brand-gold rounded-full px-8 py-4 transition-all duration-300 text-brand-blue dark:text-luxury-white"
          >
            Contact Security Team
          </a>
        </MagneticButton>
      </motion.div>
    </div>
  );
}
