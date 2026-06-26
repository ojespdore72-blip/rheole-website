"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Simulated AI Processing Steps
const ProcessingStep = ({ text, delay }: { text: string, delay: number }) => (
  <motion.div 
    initial={{ opacity: 0, x: -10 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay, duration: 0.5 }}
    className="flex items-center gap-3 text-xs md:text-sm font-mono text-brand-blue/60 dark:text-white/60 mb-2"
  >
    <div className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
    {text}
  </motion.div>
);

export default function Intelligence() {
  const [activeQuery, setActiveQuery] = useState<number | null>(null);

  const queries = [
    {
      prompt: "I'm hungry.",
      context: "Time: 12:45 PM | Location: Indiranagar | Weather: 28°C",
      steps: [
        "Analyzing local density...",
        "Cross-referencing historical wait times...",
        "Filtering out high-decibel locations...",
        "Identifying optimal routing..."
      ],
      result: "We recommend 'The Courtyard'. It is currently operating at 30% capacity, offering a peaceful environment. A 5-minute walk from your location.",
      visual: (
        <div className="w-full h-full relative rounded-2xl overflow-hidden border border-brand-blue/10 dark:border-white/10 bg-white/50 dark:bg-black/50 flex flex-col justify-end p-4">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(197,168,128,0.2),transparent_50%)]" />
          {/* Audio/Density Visualizer */}
          <div className="flex items-end h-24 gap-2 border-b border-brand-blue/20 dark:border-white/20 pb-2">
            {[40, 70, 90, 80, 20, 50, 10, 30, 60, 40, 20].map((h, i) => (
              <motion.div 
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ duration: 1, delay: i * 0.05 }}
                className={`flex-1 rounded-t-sm ${h > 70 ? 'bg-red-400/50' : h > 40 ? 'bg-brand-gold/50' : 'bg-green-400/50'}`}
              />
            ))}
          </div>
          <p className="text-[10px] uppercase tracking-widest text-brand-blue/50 dark:text-white/50 font-mono mt-2">Ambient Audio Mapping</p>
        </div>
      )
    },
    {
      prompt: "I'm visiting Bengaluru.",
      context: "Context: First time visitor | Interests: Culture, Tech",
      steps: [
        "Mapping high-activity tech hubs...",
        "Correlating with cultural landmarks...",
        "Checking live event schedules...",
        "Synthesizing introductory route..."
      ],
      result: "An acoustic indie session is starting in 20 minutes near the Koramangala Tech Park. High concentration of designers and founders detected nearby.",
      visual: (
        <div className="w-full h-full relative rounded-2xl overflow-hidden border border-brand-blue/10 dark:border-white/10 bg-white/50 dark:bg-black/50 flex items-center justify-center">
          <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 20, ease: "linear" }} className="absolute w-[80%] aspect-square border border-brand-gold/20 rounded-full border-dashed" />
          <motion.div animate={{ rotate: -360 }} transition={{ repeat: Infinity, duration: 30, ease: "linear" }} className="absolute w-[60%] aspect-square border border-brand-blue/30 dark:border-white/10 rounded-full" />
          <div className="w-3 h-3 bg-brand-gold rounded-full shadow-[0_0_15px_#C5A880]" />
          
          <motion.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 1.5 }} className="absolute top-[20%] right-[10%] p-2 bg-black/80 rounded border border-white/10 text-[10px] font-mono text-white">Event: Indie Acoustic</motion.div>
          <motion.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 2.0 }} className="absolute bottom-[20%] left-[10%] p-2 bg-black/80 rounded border border-white/10 text-[10px] font-mono text-white">Density: Tech/Design</motion.div>
        </div>
      )
    },
    {
      prompt: "Find startup founders.",
      context: "Intent: Networking | Radius: 5km",
      steps: [
        "Scanning local co-working densities...",
        "Analyzing live event attendance patterns...",
        "Detecting anomalous clusters...",
      ],
      result: "A spontaneous founders breakfast is forming at Third Wave Coffee, HSR Layout. 15+ confirmed builders. Density is currently peaking.",
      visual: (
        <div className="w-full h-full relative rounded-2xl overflow-hidden border border-brand-blue/10 dark:border-white/10 bg-white/50 dark:bg-black/50 p-6 flex flex-col justify-center gap-4">
          <div className="flex gap-4 items-end justify-center">
            {[1, 2, 3].map((cluster, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: cluster === 2 ? 1.2 : 1, opacity: cluster === 2 ? 1 : 0.4 }}
                  transition={{ delay: 1 + i * 0.2 }}
                  className={`rounded-full ${cluster === 2 ? 'bg-brand-gold w-16 h-16 shadow-[0_0_30px_rgba(197,168,128,0.5)]' : 'bg-white/20 w-10 h-10'}`}
                />
                <span className="text-[9px] font-mono text-brand-blue/50 dark:text-white/50">Node {cluster}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-[10px] uppercase tracking-widest text-brand-gold font-mono mt-4">Cluster Identified</p>
        </div>
      )
    },
    {
      prompt: "I'm bored.",
      context: "Context: Unstructured time | Preferences: Dynamic",
      steps: [
        "Evaluating real-time city pulse...",
        "Cross-referencing implicit interests...",
        "Identifying spontaneous gatherings...",
      ],
      result: "There is an unlisted underground art pop-up currently active 2 miles away. Entry is open for the next hour. Low crowd density detected.",
      visual: (
        <div className="w-full h-full relative rounded-2xl overflow-hidden border border-brand-blue/10 dark:border-white/10 bg-white/50 dark:bg-black/50 flex items-center justify-center">
           <motion.div 
            animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute w-32 h-32 bg-brand-indigo/30 blur-2xl rounded-full" 
          />
          <div className="relative z-10 px-4 py-2 border border-brand-indigo/50 bg-brand-indigo/10 text-brand-indigo dark:text-indigo-300 font-mono text-[10px] uppercase tracking-widest rounded-full backdrop-blur-md">
            Signal Detected
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="relative w-full min-h-screen bg-luxury-white dark:bg-luxury-black text-brand-blue dark:text-luxury-white overflow-hidden selection:bg-brand-gold/20">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-[50vw] h-[50vw] bg-brand-blue/5 dark:bg-white/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-[10%] right-[10%] w-[40vw] h-[40vw] bg-brand-gold/5 rounded-full blur-[120px]" />
      </div>

      <main className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-24 min-h-screen flex flex-col">
        
        {/* Header */}
        <div className="flex flex-col gap-6 text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs tracking-[0.4em] uppercase font-mono text-brand-gold">Ambient Intelligence</span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light font-serif-editorial leading-tight">
            Experience the <span className="italic text-brand-gold">intelligence</span> layer.
          </h1>
          <p className="text-sm md:text-base font-light text-brand-blue/60 dark:text-white/60 tracking-wide mt-4">
            Select an intention below to see how Rheole resolves context in real-time. No fake chatbots. Just pure spatial reasoning.
          </p>
        </div>

        {/* Interactive Workspace */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 h-full flex-grow">
          
          {/* Prompts Column */}
          <div className="w-full lg:w-1/3 flex flex-col gap-4">
            <p className="text-xs uppercase tracking-widest font-mono text-brand-blue/40 dark:text-white/40 mb-2">Intentions</p>
            {queries.map((q, idx) => (
              <button
                key={idx}
                onClick={() => setActiveQuery(idx)}
                className={`text-left p-6 rounded-3xl transition-spring border backdrop-blur-sm ${
                  activeQuery === idx 
                    ? "bg-brand-blue/5 dark:bg-white/10 border-brand-gold/40 shadow-[0_10px_30px_rgba(197,168,128,0.15)] scale-[1.02]" 
                    : "bg-transparent border-brand-blue/10 dark:border-white/10 hover:bg-brand-blue/5 dark:hover:bg-white/5"
                }`}
              >
                <h3 className="text-lg md:text-xl font-light text-brand-blue dark:text-white">
                  "{q.prompt}"
                </h3>
              </button>
            ))}
          </div>

          {/* Reasoning & Visualizer Column */}
          <div className="w-full lg:w-2/3 flex flex-col gap-6">
             <p className="text-xs uppercase tracking-widest font-mono text-brand-blue/40 dark:text-white/40 mb-2 lg:hidden">Processing</p>
            
            <div className="flex-grow w-full rounded-[40px] spatial-glass border border-brand-blue/10 dark:border-white/10 p-6 md:p-10 flex flex-col shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] relative overflow-hidden min-h-[500px]">
              
              <AnimatePresence mode="wait">
                {activeQuery === null ? (
                  <motion.div 
                    key="empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 flex flex-col items-center justify-center text-center p-8"
                  >
                    <div className="w-16 h-16 rounded-full border border-brand-blue/20 dark:border-white/20 border-t-brand-gold animate-spin mb-6" />
                    <p className="text-sm uppercase tracking-widest font-mono text-brand-blue/40 dark:text-white/40">Waiting for intention</p>
                  </motion.div>
                ) : (
                  <motion.div 
                    key={activeQuery}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full flex flex-col gap-8"
                  >
                    {/* Context Header */}
                    <div className="border-b border-brand-blue/10 dark:border-white/10 pb-4">
                      <p className="text-[10px] md:text-xs font-mono uppercase tracking-widest text-brand-gold mb-2">Active Context</p>
                      <p className="text-sm text-brand-blue/80 dark:text-white/80 font-mono">{queries[activeQuery].context}</p>
                    </div>

                    {/* Content Grid */}
                    <div className="flex flex-col md:flex-row gap-8 flex-grow">
                      
                      {/* Left: Reasoning Steps */}
                      <div className="w-full md:w-1/2 flex flex-col">
                        <p className="text-[10px] font-mono uppercase tracking-widest text-brand-blue/40 dark:text-white/40 mb-6">Reasoning Path</p>
                        <div className="flex flex-col flex-grow">
                          {queries[activeQuery].steps.map((step, i) => (
                            <ProcessingStep key={i} text={step} delay={i * 0.6} />
                          ))}
                        </div>
                        
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: queries[activeQuery].steps.length * 0.6 + 0.5 }}
                          className="mt-auto pt-6 border-t border-brand-blue/10 dark:border-white/10"
                        >
                          <p className="text-[10px] font-mono uppercase tracking-widest text-brand-gold mb-3">Resolution</p>
                          <p className="text-base md:text-lg font-light leading-relaxed text-brand-blue dark:text-white italic font-serif-editorial">
                            {queries[activeQuery].result}
                          </p>
                        </motion.div>
                      </div>

                      {/* Right: Visualizer */}
                      <div className="w-full md:w-1/2 h-48 md:h-auto">
                        <motion.div 
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 1, duration: 1 }}
                          className="w-full h-full"
                        >
                          {queries[activeQuery].visual}
                        </motion.div>
                      </div>

                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}
