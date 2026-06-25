"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ProgressiveReveal() {
  const [time, setTime] = useState(0);

  // High performance 60fps timer loop
  useEffect(() => {
    let lastTime = performance.now();
    let frameId: number;
    const loop = (currentTime: number) => {
      const dt = (currentTime - lastTime) / 1000;
      lastTime = currentTime;
      setTime((prev) => (prev + dt) % 20); // 20 second loop
      frameId = requestAnimationFrame(loop);
    };
    frameId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(frameId);
  }, []);

  // Text Highlighting Logic based on time
  const isCiv = time >= 0 && time < 5;
  const isPeople = time >= 5 && time < 8;
  const isInfo = time >= 8 && time < 14;
  const isLayer = time >= 14 && time < 20;

  return (
    <section className="relative w-full py-24 lg:py-32 px-6 md:px-12 border-t border-brand-blue/5 bg-brand-blue/[0.01]">
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 relative">
        
        {/* Left: Synchronized Narrative Text */}
        <div className="lg:col-span-6 flex flex-col gap-6 lg:gap-10 lg:py-32">
          <motion.div 
            animate={{ opacity: isCiv ? 1 : 0.3, scale: isCiv ? 1 : 0.98 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6"
          >
            <h2 className="text-4xl md:text-6xl font-light font-serif-editorial text-brand-blue leading-tight transition-all duration-500">Civilization moves.</h2>
          </motion.div>

          <motion.div 
            animate={{ opacity: isPeople ? 1 : 0.3, scale: isPeople ? 1 : 0.98 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6"
          >
            <h2 className="text-4xl md:text-6xl font-light font-serif-editorial text-brand-blue leading-tight transition-all duration-500">People move.</h2>
          </motion.div>

          <motion.div 
            animate={{ opacity: isInfo ? 1 : 0.3, scale: isInfo ? 1 : 0.98 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6"
          >
            <h2 className="text-4xl md:text-6xl font-light font-serif-editorial text-brand-blue leading-tight transition-all duration-500">Information moves.</h2>
          </motion.div>
        </div>

        {/* Right: The Loop Animation Mockup */}
        <div className="lg:col-span-6 hidden lg:flex justify-center items-start relative h-full">
          <div className="sticky top-32 w-full max-w-[360px] h-[720px] rounded-[48px] bg-black border-[8px] border-[#1a1a1a] shadow-2xl p-2.5 z-10 flex flex-col">
            <div className="relative w-full h-full rounded-[38px] overflow-hidden bg-[#05050C] flex flex-col text-white">
              
              {/* Dynamic Island */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-full z-50 flex items-center justify-between px-3">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-gold/50" />
                <div className="w-8 h-1.5 rounded-full bg-white/10" />
              </div>

              {/* Time Progress Bar (Optional, for demo feel, very subtle) */}
              <div className="absolute top-0 left-0 h-0.5 bg-brand-gold/20 w-full z-50">
                <div className="h-full bg-brand-gold" style={{ width: `${(time / 20) * 100}%` }} />
              </div>

              <div className="w-full h-full relative pt-14 px-4 overflow-hidden">
                <AnimatePresence mode="popLayout">
                  
                  {/* SCENE 0: 0-2s Understanding Surroundings */}
                  {time >= 0 && time < 2 && (
                    <motion.div 
                      key="scene-0"
                      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                      className="absolute inset-0 flex flex-col items-center justify-center"
                    >
                      <motion.div 
                        animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }} 
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="w-32 h-32 rounded-full border border-brand-gold/30 absolute"
                      />
                      <span className="text-[10px] uppercase font-mono tracking-widest text-brand-gold animate-pulse mt-4">
                        Understanding surroundings...
                      </span>
                    </motion.div>
                  )}

                  {/* SCENE 1: 2-5s Recommendations Populate */}
                  {time >= 2 && time < 5 && (
                    <motion.div 
                      key="scene-1"
                      initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
                      className="w-full h-full flex flex-col gap-4"
                    >
                      <span className="text-2xl font-serif-editorial leading-tight">Understanding what's happening around you.</span>
                      <div className="flex flex-col gap-3 mt-4">
                        {['Startup Meetup', 'Photography Walk', 'Live Music'].map((evt, i) => (
                          <motion.div 
                            key={evt}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.2 }}
                            className="bg-white/[0.03] border border-white/5 p-4 rounded-2xl flex flex-col gap-1"
                          >
                            <span className="text-sm font-medium">{evt}</span>
                            <div className="flex gap-3 text-[9px] font-mono text-white/40">
                              <span>0.8 mi</span>
                              <span>42 Attending</span>
                              <span className="text-brand-gold">95% Match</span>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* SCENE 2: 5-8s Event Expands */}
                  {time >= 5 && time < 8 && (
                    <motion.div 
                      key="scene-2"
                      initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }}
                      className="w-full h-full flex flex-col"
                    >
                      <div className="w-full h-48 bg-gradient-to-br from-brand-gold/20 to-transparent rounded-3xl p-4 flex flex-col justify-between border border-brand-gold/10">
                        <span className="bg-black/50 w-max px-2 py-1 rounded text-[9px] uppercase tracking-widest text-brand-gold border border-brand-gold/20">Live Event</span>
                        <div className="flex flex-col">
                          <span className="text-2xl font-serif-editorial">Startup Meetup</span>
                          <span className="text-xs text-white/70">Founders connecting locally.</span>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-3 mt-4">
                        <div className="bg-white/[0.02] p-3 rounded-2xl flex flex-col gap-1 border border-white/5">
                          <span className="text-[9px] font-mono text-white/40">ATTENDEES</span>
                          <span className="text-sm">124 people</span>
                        </div>
                        <div className="bg-white/[0.02] p-3 rounded-2xl flex flex-col gap-1 border border-white/5">
                          <span className="text-[9px] font-mono text-white/40">TRANSIT</span>
                          <span className="text-sm">12 min train</span>
                        </div>
                        <div className="bg-white/[0.02] p-3 rounded-2xl flex flex-col gap-1 border border-white/5">
                          <span className="text-[9px] font-mono text-white/40">WEATHER</span>
                          <span className="text-sm">Clear • 68°</span>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* SCENE 3: 8-11s AI Explains */}
                  {time >= 8 && time < 11 && (
                    <motion.div 
                      key="scene-3"
                      initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
                      className="w-full h-full flex flex-col gap-6"
                    >
                      <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                        <div className="w-8 h-8 rounded-full bg-brand-gold/20 border border-brand-gold flex items-center justify-center animate-pulse">
                          <span className="text-[10px] text-brand-gold font-mono">AI</span>
                        </div>
                        <span className="text-[10px] uppercase font-mono tracking-widest text-brand-gold">Intelligence Note</span>
                      </div>
                      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="text-lg font-light leading-relaxed">
                        Because you frequently attend technology events, this founder meetup is highly relevant.
                      </motion.p>
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="bg-white/[0.05] p-4 rounded-xl border border-white/10 mt-4">
                        <span className="text-xs text-white/80">Three of your nearby communities are also attending this event.</span>
                      </motion.div>
                    </motion.div>
                  )}

                  {/* SCENE 4: 11-14s Communities */}
                  {time >= 11 && time < 14 && (
                    <motion.div 
                      key="scene-4"
                      initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                      className="w-full h-full flex flex-col gap-4"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-2xl font-serif-editorial">Communities</span>
                        <span className="text-[10px] text-brand-gold font-mono uppercase">Nearby</span>
                      </div>
                      {[
                        { n: "Entrepreneurs", m: 420, a: "High" },
                        { n: "Cyclists", m: 89, a: "Moderate" },
                        { n: "Designers", m: 215, a: "High" },
                        { n: "Chess Club", m: 42, a: "Low" }
                      ].map((c, i) => (
                        <motion.div 
                          key={c.n}
                          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.15 }}
                          className="flex justify-between items-center bg-white/[0.02] border border-white/5 p-4 rounded-2xl"
                        >
                          <div className="flex flex-col">
                            <span className="text-sm font-medium">{c.n}</span>
                            <span className="text-[10px] text-white/40">{c.m} Members</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className={`w-1.5 h-1.5 rounded-full ${c.a === 'High' ? 'bg-green-500 animate-pulse' : 'bg-white/20'}`} />
                            <span className="text-[9px] font-mono text-white/60">{c.a} Activity</span>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}

                  {/* SCENE 5: 14-17s Spatial Intelligence Flow */}
                  {time >= 14 && time < 17 && (
                    <motion.div 
                      key="scene-5"
                      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                      className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(197,168,128,0.2),transparent_70%)] flex items-center justify-center overflow-hidden"
                    >
                      {/* Grid background */}
                      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:10px_10px]" />
                      
                      {/* Floating Data Nodes */}
                      {[
                        { t: "Traffic Normal", top: "20%", left: "10%", delay: 0 },
                        { t: "3 Events", top: "60%", left: "70%", delay: 0.5 },
                        { t: "Route Clear", top: "80%", left: "20%", delay: 1 },
                        { t: "Density High", top: "40%", left: "50%", delay: 1.5 }
                      ].map((node, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: -20 }}
                          transition={{ delay: node.delay, duration: 2, ease: "linear" }}
                          className="absolute bg-black/80 border border-brand-gold/20 px-3 py-1.5 rounded text-[9px] font-mono text-brand-gold whitespace-nowrap"
                          style={{ top: node.top, left: node.left }}
                        >
                          {node.t}
                        </motion.div>
                      ))}
                    </motion.div>
                  )}

                  {/* SCENE 6: 17-20s Settles */}
                  {time >= 17 && (
                    <motion.div 
                      key="scene-6"
                      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                      className="absolute inset-0 flex flex-col items-center justify-center gap-6"
                    >
                      <motion.div animate={{ scale: [1, 1.05, 1] }} transition={{ repeat: Infinity, duration: 4 }} className="w-16 h-16 rounded-full border border-brand-gold/30 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
                      </motion.div>
                      <h2 className="text-2xl font-light font-serif-editorial text-brand-gold uppercase tracking-[0.2em] text-center px-4">
                        The Pulse of Your World
                      </h2>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Home Bar */}
              <div className="w-full h-8 flex justify-center items-center pb-2 z-40 absolute bottom-0 bg-gradient-to-t from-black to-transparent">
                <div className="w-32 h-1 rounded-full bg-white/30" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
