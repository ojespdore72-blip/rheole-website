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
      setTime((prev) => (prev + dt) % 30); // 30 second loop
      frameId = requestAnimationFrame(loop);
    };
    frameId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(frameId);
  }, []);

  // Section timing
  const isSection1 = time >= 0 && time < 9;
  const isSection2 = time >= 9 && time < 18;
  const isSection3 = time >= 18 && time < 30;

  return (
    <section className="relative w-full py-24 lg:py-32 px-6 md:px-12 border-t border-brand-blue/5 overflow-hidden">
      
      {/* Background Image for Section 1 (Subtle & Faded) */}
      <motion.div 
        animate={{ opacity: isSection1 ? 0.08 : 0 }} 
        transition={{ duration: 1.5 }}
        className="absolute inset-0 pointer-events-none"
      >
        <img src="/bengaluru_professional.png" alt="Professional in Bengaluru" className="w-full h-full object-cover object-center mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
      </motion.div>
      <div className="absolute inset-0 bg-brand-blue/[0.01]" />

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
        
        {/* Left: Synchronized Narrative Text */}
        <div className="lg:col-span-6 flex flex-col justify-start min-h-[40vh] lg:min-h-[720px] relative z-10 px-0">
          <AnimatePresence mode="wait">
            {isSection1 && (
              <motion.div 
                key="text-1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col gap-6"
              >
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-light font-serif-editorial text-brand-blue leading-[1.1]">The intelligence layer for the real world.</h2>
                <p className="text-lg md:text-xl font-light text-brand-blue/80 leading-relaxed max-w-lg">
                  Rheole understands the relationships between people, places, communities and events, helping you discover what matters around you in real time.
                </p>
              </motion.div>
            )}

            {isSection2 && (
              <motion.div 
                key="text-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col gap-6"
              >
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-light font-serif-editorial text-brand-blue leading-[1.1]">Built around your world.</h2>
                <div className="text-lg md:text-xl font-light text-brand-blue/80 leading-relaxed max-w-lg flex flex-col gap-2">
                  <p>Not another social platform.</p>
                  <p>Not another map.</p>
                  <p>Not another chatbot.</p>
                  <p className="mt-4">One intelligent experience connecting discovery, navigation, communities and local intelligence into a single platform.</p>
                </div>
              </motion.div>
            )}

            {isSection3 && (
              <motion.div 
                key="text-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col gap-6"
              >
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-light font-serif-editorial text-brand-blue leading-[1.1]">Everything nearby. Instantly understood.</h2>
                <div className="text-lg md:text-xl font-light text-brand-blue/80 leading-relaxed max-w-lg flex flex-col gap-4">
                  <p>Ask naturally.</p>
                  <div className="flex flex-col gap-2 pl-4 border-l border-brand-gold/40 italic text-brand-blue/90 font-medium">
                    {time >= 19 && <motion.span initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>"I'm hungry."</motion.span>}
                    {time >= 21 && <motion.span initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>"I'm new here."</motion.span>}
                    {time >= 23 && <motion.span initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>"What's happening tonight?"</motion.span>}
                    {time >= 25 && <motion.span initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>"Find entrepreneurs near me."</motion.span>}
                  </div>
                  {time >= 27 && (
                    <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                      Rheole transforms simple intent into intelligent recommendations.
                    </motion.p>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Right: The Loop Animation Mockup */}
        <div className="lg:col-span-6 flex justify-center items-start relative h-full mt-4 lg:mt-0">
          <div className="sticky top-20 lg:top-32 w-full max-w-[300px] lg:max-w-[360px] h-[600px] lg:h-[720px] rounded-[40px] lg:rounded-[48px] bg-black border-[6px] lg:border-[8px] border-[#1a1a1a] shadow-2xl p-2 z-10 flex flex-col">
            <div className="relative w-full h-full rounded-[38px] overflow-hidden bg-[#05050C] flex flex-col text-white">
              
              {/* Dynamic Island */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-full z-50 flex items-center justify-between px-3">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-gold/50" />
                <div className="w-8 h-1.5 rounded-full bg-white/10" />
              </div>

              {/* Time Progress Bar */}
              <div className="absolute top-0 left-0 h-0.5 bg-brand-gold/20 w-full z-50">
                <div className="h-full bg-brand-gold" style={{ width: `${(time / 30) * 100}%` }} />
              </div>

              <div className="w-full h-full relative pt-14 px-4 overflow-hidden">
                <AnimatePresence mode="popLayout">

                  
                  {/* SCENE 1: Discoveries appearing naturally */}
                  {isSection1 && (
                    <motion.div 
                      key="sec-1"
                      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                      className="absolute inset-0 flex flex-col p-4 bg-[#05050C]"
                    >
                      <div className="flex justify-between items-center mb-6 mt-4 border-b border-white/10 pb-4">
                        <span className="text-xl font-serif-editorial">Nearby Now</span>
                        <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
                      </div>
                      
                      <div className="flex flex-col gap-4 relative">
                        {/* Radar Sweep Effect */}
                        <motion.div 
                           animate={{ y: [0, 500, 0] }} 
                           transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                           className="absolute left-0 right-0 h-0.5 bg-brand-gold/50 shadow-[0_0_20px_rgba(197,168,128,0.5)] z-20"
                        />
                        {[
                          { n: "Modern Art Gallery", t: "Culture", d: "0.2 mi", delay: 1 },
                          { n: "Tech Hub Cafe", t: "Workspace", d: "0.4 mi", delay: 2 },
                          { n: "Startup Mixer", t: "Event", d: "0.5 mi", delay: 3 },
                          { n: "Run Club", t: "Community", d: "0.8 mi", delay: 4 },
                        ].map((place, i) => (
                          <motion.div 
                            key={place.n}
                            initial={{ opacity: 0, scale: 0.95, y: 15 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ delay: place.delay, duration: 0.6, ease: "easeOut" }}
                            className="bg-white/[0.03] border border-white/10 p-4 rounded-2xl flex flex-col gap-1 relative z-10 backdrop-blur-sm"
                          >
                            <span className="text-sm font-medium text-white">{place.n}</span>
                            <div className="flex justify-between items-center text-[10px] font-mono text-white/50">
                              <span>{place.t}</span>
                              <span className="text-brand-gold">{place.d}</span>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* SCENE 2: Built around your world */}
                  {isSection2 && (
                    <motion.div 
                      key="sec-2"
                      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                      className="absolute inset-0 flex flex-col p-4 bg-[#05050C] gap-4"
                    >
                      <div className="grid grid-cols-2 gap-3 mt-4">
                         <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="bg-white/[0.03] border border-white/10 p-4 rounded-2xl flex flex-col gap-2">
                           <span className="text-[9px] uppercase font-mono text-brand-gold">Live Event</span>
                           <span className="text-sm font-medium text-white">Art Walk</span>
                         </motion.div>
                         <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 }} className="bg-white/[0.03] border border-white/10 p-4 rounded-2xl flex flex-col gap-2">
                           <span className="text-[9px] uppercase font-mono text-green-400">Navigation</span>
                           <span className="text-sm font-medium text-white">Route Clear</span>
                         </motion.div>
                      </div>

                      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="bg-gradient-to-br from-brand-gold/20 to-transparent border border-brand-gold/20 p-5 rounded-2xl mt-2 flex flex-col gap-2">
                        <span className="text-[10px] uppercase font-mono text-brand-gold">AI Insight</span>
                        <p className="text-sm text-white/90">Based on your routine, the downtown district has high creative density right now.</p>
                      </motion.div>

                      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }} className="bg-white/[0.03] border border-white/10 p-5 rounded-2xl mt-2 flex flex-col gap-3">
                        <span className="text-[9px] uppercase font-mono text-white/50">Your Communities</span>
                        <div className="flex gap-2">
                           <span className="px-3 py-1.5 bg-white/10 rounded-lg text-xs text-white">Designers</span>
                           <span className="px-3 py-1.5 bg-white/10 rounded-lg text-xs text-white">Founders</span>
                        </div>
                      </motion.div>
                    </motion.div>
                  )}

                  {/* SCENE 3: Chatting with AI (Ask Naturally) */}
                  {isSection3 && (
                    <motion.div 
                      key="sec-3"
                      initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                      className="absolute inset-0 flex flex-col p-4 bg-[#05050C] overflow-hidden"
                    >
                      <div className="flex items-center gap-2 mb-2 mt-4 border-b border-white/10 pb-4 shrink-0">
                        <div className="w-6 h-6 rounded-full bg-brand-gold/20 flex items-center justify-center">
                          <span className="w-1.5 h-1.5 bg-brand-gold rounded-full" />
                        </div>
                        <span className="text-sm font-medium text-white">Rheole AI</span>
                      </div>
                      
                      {/* Flex justify-end pushes chat messages from bottom up */}
                      <div className="flex flex-col gap-4 relative justify-end h-full pb-10">
                        {/* Chat Messages */}
                        
                        {/* Q1 */}
                        {time >= 19 && (
                           <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col gap-2 shrink-0">
                             <div className="self-end bg-white/10 text-white px-3 py-2 rounded-2xl rounded-tr-sm text-sm">I'm hungry.</div>
                             {time >= 19.5 && (
                                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="self-start bg-white/[0.05] border border-white/10 p-3 rounded-2xl rounded-tl-sm w-[85%]">
                                   <span className="text-xs text-white/50 mb-1 block">Found 3 places</span>
                                   <div className="bg-brand-gold/10 p-2 rounded-xl border border-brand-gold/20">
                                     <span className="text-sm text-white block">Soma Cafe</span>
                                     <span className="text-[10px] text-brand-gold">0.2 mi • High match</span>
                                   </div>
                                </motion.div>
                             )}
                           </motion.div>
                        )}

                        {/* Q2 */}
                        {time >= 21 && (
                           <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col gap-2 shrink-0">
                             <div className="self-end bg-white/10 text-white px-3 py-2 rounded-2xl rounded-tr-sm text-sm">I'm new here.</div>
                             {time >= 21.5 && (
                                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="self-start bg-white/[0.05] border border-white/10 p-3 rounded-2xl rounded-tl-sm w-[85%]">
                                   <span className="text-[10px] uppercase font-mono text-brand-gold block mb-1">Spatial Overview</span>
                                   <span className="text-xs text-white block">You're in the Arts District. Lots of galleries nearby.</span>
                                </motion.div>
                             )}
                           </motion.div>
                        )}

                        {/* Q3 */}
                        {time >= 23 && (
                           <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col gap-2 shrink-0">
                             <div className="self-end bg-white/10 text-white px-3 py-2 rounded-2xl rounded-tr-sm text-sm">What's happening tonight?</div>
                             {time >= 23.5 && (
                                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="self-start bg-white/[0.05] border border-white/10 p-3 rounded-2xl rounded-tl-sm w-[85%]">
                                   <span className="text-[10px] text-white/50 block mb-1">Live Events</span>
                                   <span className="text-sm text-white block">Jazz Night at Blue Room</span>
                                </motion.div>
                             )}
                           </motion.div>
                        )}

                        {/* Q4 */}
                        {time >= 25 && (
                           <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col gap-2 shrink-0">
                             <div className="self-end bg-white/10 text-white px-3 py-2 rounded-2xl rounded-tr-sm text-sm">Find entrepreneurs near me.</div>
                             {time >= 25.5 && (
                                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="self-start bg-brand-gold/10 border border-brand-gold/20 p-3 rounded-2xl rounded-tl-sm w-[85%]">
                                   <span className="text-[10px] uppercase font-mono text-brand-gold block mb-1">Community</span>
                                   <span className="text-xs text-white block">Founders Breakfast (10m)</span>
                                </motion.div>
                             )}
                           </motion.div>
                        )}
                      </div>
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
