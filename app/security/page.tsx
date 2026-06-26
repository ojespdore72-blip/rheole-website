"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Interactive Simulator: Data Flow
const DataFlowVisualizer = ({ level }: { level: "public" | "protected" | "local" }) => {
  return (
    <div className="w-full h-full relative flex items-center justify-center p-8">
      {/* Device Node */}
      <div className="absolute bottom-[20%] left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20">
        <div className="w-16 h-16 rounded-full bg-black border-2 border-brand-gold shadow-[0_0_20px_rgba(197,168,128,0.3)] flex items-center justify-center backdrop-blur-xl">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C5A880" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
        </div>
        <span className="text-[10px] font-mono uppercase tracking-widest text-brand-gold">Your Device</span>
      </div>

      {/* Server Node */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20">
        <div className="w-16 h-16 rounded-full bg-black border-2 border-brand-blue shadow-[0_0_20px_rgba(79,70,229,0.2)] flex items-center justify-center backdrop-blur-xl">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>
        </div>
        <span className="text-[10px] font-mono uppercase tracking-widest text-brand-blue/50 dark:text-white/50">Rheole Cloud</span>
      </div>

      {/* Data Path */}
      <svg className="absolute inset-0 w-full h-full z-10" style={{ pointerEvents: 'none' }}>
        <path d="M 50% 80% L 50% 20%" stroke="rgba(255,255,255,0.1)" strokeWidth="2" strokeDasharray="4 4" />
        
        <AnimatePresence>
          {level === "public" && (
            <motion.circle
              initial={{ cy: "80%", opacity: 1 }}
              animate={{ cy: "20%", opacity: 1 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              cx="50%" r="4" fill="#EF4444"
            />
          )}
          {level === "protected" && (
            <motion.circle
              initial={{ cy: "80%", opacity: 1, r: 4 }}
              animate={{ cy: "20%", opacity: 0.2, r: 10 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              cx="50%" fill="#4F46E5"
            />
          )}
          {level === "local" && (
            <motion.circle
              initial={{ cy: "80%", opacity: 1, r: 4 }}
              animate={{ cy: "70%", opacity: 0, r: 8 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
              cx="50%" fill="#10B981"
            />
          )}
        </AnimatePresence>
      </svg>
      
      {/* Shield overlay for protected/local */}
      <AnimatePresence>
        {(level === "protected" || level === "local") && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30"
          >
            <div className="w-24 h-24 border border-brand-gold/30 bg-brand-gold/5 backdrop-blur-sm rounded-full flex items-center justify-center">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C5A880" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            {level === "local" && (
              <div className="absolute top-[80%] left-1/2 -translate-x-1/2 whitespace-nowrap text-[9px] font-mono text-green-400 bg-black/80 px-2 py-1 rounded">Never leaves device</div>
            )}
            {level === "protected" && (
              <div className="absolute top-[80%] left-1/2 -translate-x-1/2 whitespace-nowrap text-[9px] font-mono text-brand-gold bg-black/80 px-2 py-1 rounded">End-to-End Encrypted</div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function Security() {
  const [privacyLevel, setPrivacyLevel] = useState<"public" | "protected" | "local">("protected");

  return (
    <div className="relative w-full min-h-screen bg-luxury-white dark:bg-[#020205] text-brand-blue dark:text-luxury-white overflow-hidden selection:bg-brand-gold/20">

      <main className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-24 min-h-screen flex flex-col gap-32">
        
        {/* Header */}
        <div className="flex flex-col gap-6 text-center max-w-3xl mx-auto mt-10">
          <span className="text-xs tracking-[0.4em] uppercase font-mono text-brand-gold">Trust & Security</span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light font-serif-editorial leading-tight">
            Designed for <span className="italic text-brand-gold">trust.</span>
          </h1>
          <p className="text-lg md:text-xl font-light text-brand-blue/60 dark:text-white/60 tracking-wide mt-4 max-w-2xl mx-auto">
            We believe that ambient intelligence requires absolute privacy. Experience exactly how your data flows, where it stays, and what you control.
          </p>
        </div>

        {/* 1. Interactive Data Flow Simulation */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
          <div className="w-full lg:w-1/2 flex flex-col gap-8">
            <h2 className="text-3xl md:text-5xl font-light font-serif-editorial">Data Architecture</h2>
            <p className="text-base md:text-lg font-light text-brand-blue/70 dark:text-white/70 leading-relaxed">
              Toggle the privacy models below to understand how Rheole handles your location, preferences, and identity.
            </p>
            
            <div className="flex flex-col gap-4 mt-4">
              <button onClick={() => setPrivacyLevel("public")} className={`text-left p-4 rounded-2xl border transition-spring ${privacyLevel === 'public' ? 'border-red-500/50 bg-red-500/5' : 'border-white/10 hover:bg-white/5'}`}>
                <h3 className="font-medium text-red-400 mb-1">Standard Cloud Model (Competitors)</h3>
                <p className="text-xs text-white/50 font-light">Data leaves your device, is processed in plaintext on servers, and stored permanently.</p>
              </button>
              <button onClick={() => setPrivacyLevel("protected")} className={`text-left p-4 rounded-2xl border transition-spring ${privacyLevel === 'protected' ? 'border-brand-gold/50 bg-brand-gold/5' : 'border-white/10 hover:bg-white/5'}`}>
                <h3 className="font-medium text-brand-gold mb-1">Rheole Secure Tunnel</h3>
                <p className="text-xs text-white/50 font-light">End-to-End encrypted. Processed in ephemeral memory enclaves. Destroyed immediately after.</p>
              </button>
              <button onClick={() => setPrivacyLevel("local")} className={`text-left p-4 rounded-2xl border transition-spring ${privacyLevel === 'local' ? 'border-green-500/50 bg-green-500/5' : 'border-white/10 hover:bg-white/5'}`}>
                <h3 className="font-medium text-green-400 mb-1">Rheole Local Core</h3>
                <p className="text-xs text-white/50 font-light">Highly sensitive inferences (e.g. daily routines) are processed entirely on-device and never leave your phone.</p>
              </button>
            </div>
          </div>
          <div className="w-full lg:w-1/2 h-[500px] spatial-glass rounded-[40px] border border-white/10 overflow-hidden relative">
            <DataFlowVisualizer level={privacyLevel} />
          </div>
        </div>

        {/* 2. Visual Architecture Diagram */}
        <div className="flex flex-col gap-16 items-center w-full py-20 border-t border-brand-blue/10 dark:border-white/10">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-light font-serif-editorial">The Invisible Shield</h2>
            <p className="mt-4 text-brand-blue/60 dark:text-white/60 font-light">Instead of bullet points, here is exactly how our encryption infrastructure is built.</p>
          </div>
          
          <div className="w-full max-w-5xl h-[400px] md:h-[600px] rounded-[40px] bg-black border border-white/10 p-8 flex flex-col md:flex-row items-center justify-between relative overflow-hidden group">
            {/* Background nodes */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(79,70,229,0.1),transparent_70%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
            
            {/* Alice (User) */}
            <div className="relative z-10 w-48 h-48 rounded-full border border-white/20 bg-black/80 backdrop-blur-xl flex flex-col items-center justify-center gap-4">
              <span className="text-xs uppercase tracking-widest text-white/50 font-mono">Client</span>
              <div className="w-12 h-12 rounded bg-brand-gold/20 flex items-center justify-center border border-brand-gold/50">
                <span className="text-brand-gold text-[10px] font-mono">Keys</span>
              </div>
            </div>

            {/* The connection */}
            <div className="relative z-0 flex-1 h-[2px] bg-white/10 mx-4 md:mx-8 flex items-center justify-center">
              <motion.div 
                animate={{ x: [-100, 100], opacity: [0, 1, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="w-24 h-[2px] bg-gradient-to-r from-transparent via-brand-gold to-transparent absolute"
              />
              <div className="px-4 py-2 bg-[#020205] border border-white/20 rounded-full text-[10px] uppercase tracking-widest font-mono text-white/70 absolute">
                AES-256-GCM
              </div>
            </div>

            {/* Bob (Server) */}
            <div className="relative z-10 w-48 h-48 rounded-full border border-white/20 bg-black/80 backdrop-blur-xl flex flex-col items-center justify-center gap-4">
              <span className="text-xs uppercase tracking-widest text-white/50 font-mono">Enclave</span>
              <div className="w-12 h-12 rounded bg-brand-indigo/20 flex items-center justify-center border border-brand-indigo/50">
                <span className="text-brand-indigo text-[10px] font-mono">Blind</span>
              </div>
            </div>
            
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] text-white/40 uppercase tracking-widest font-mono hidden md:block">
              Zero-Knowledge Architecture Overview
            </div>
          </div>
        </div>

        {/* 3. Identity Protection Controls */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center border-t border-brand-blue/10 dark:border-white/10 pt-20">
          <div className="w-full lg:w-1/2 h-[400px] spatial-glass rounded-[40px] border border-white/10 p-10 relative overflow-hidden flex flex-col justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/10 to-transparent pointer-events-none" />
            <h3 className="text-xs uppercase tracking-widest font-mono text-white/50 mb-8">Identity Controls</h3>
            
            <div className="flex flex-col gap-6 w-full max-w-sm">
              {[
                { label: "Precise Location", active: false },
                { label: "Social Graph", active: false },
                { label: "Behavioral Analytics", active: false },
                { label: "Local Caching", active: true }
              ].map((setting, i) => (
                <div key={i} className="flex items-center justify-between group">
                  <span className={`text-sm md:text-base font-light transition-colors ${setting.active ? 'text-white' : 'text-white/40'}`}>
                    {setting.label}
                  </span>
                  <div className={`w-12 h-6 rounded-full p-1 flex items-center transition-colors ${setting.active ? 'bg-green-500' : 'bg-white/10'} cursor-not-allowed`}>
                    <motion.div 
                      layout
                      className="w-4 h-4 rounded-full bg-white shadow-sm"
                      style={{ transform: setting.active ? 'translateX(24px)' : 'translateX(0px)' }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="absolute bottom-10 right-10 opacity-20">
              <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col gap-6 text-center lg:text-left">
            <h2 className="text-3xl md:text-5xl font-light font-serif-editorial">Absolute Control.</h2>
            <p className="text-base md:text-lg font-light text-brand-blue/70 dark:text-white/70 leading-relaxed">
              You are the administrator of your digital footprint. Rheole does not monetize data, so we have no incentive to hoard it. 
              Turn off anything you don't want to share. The intelligence layer will gracefully degrade, providing the best possible recommendations using only the context you permit.
            </p>
          </div>
        </div>

      </main>
    </div>
  );
}
