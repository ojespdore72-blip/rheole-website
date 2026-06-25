"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import RheoleLogo from "@/components/logo";

// ==========================================
// NARRATIVE CONTENT
// ==========================================
const NARRATIVE = [
  {
    title: "The world is already speaking.",
    desc: "Communities. Events. People. Places. Signals are everywhere, but they are disconnected."
  },
  {
    title: "Rheole understands what matters around you.",
    desc: "The interface begins connecting nearby communities, events, and places automatically. No clutter, just context."
  },
  {
    title: "AI Discovery",
    desc: "The interface feels intelligent rather than searchable. Just ask what you want."
  },
  {
    title: "Live World",
    desc: "Everything updates naturally. See people joining events, real-time emergency notifications, and traffic insights."
  },
  {
    title: "Your Intelligence",
    desc: "The platform learns your interests while keeping you in absolute control. Nearby recommendations adapt automatically."
  },
  {
    title: "Communities",
    desc: "Every community has members, events, discussions, and a location. Real-world circles, anchored to the physical world."
  },
  {
    title: "Events",
    desc: "Beautifully presented with AI recommendation scores, weather updates, and estimated crowd sizes."
  },
  {
    title: "The Intelligence Layer",
    desc: "A living spatial map. Heatmaps, movement, and live updates paint a picture of reality without tracking individuals."
  },
  {
    title: "Your privacy remains yours.",
    desc: "Total control. Location permissions are granular. Communication is encrypted. The AI is transparent."
  },
  {
    title: "The Pulse of Your World.",
    desc: "Multiple intelligent services—Discovery, Mobility, Communities, Communication—connected together into one seamless experience."
  }
];

// ==========================================
// HELPER COMPONENTS FOR SCREENS
// ==========================================

// Screen 1 & 8: Abstract City / Intelligence Layer
const AbstractCity = ({ isHeatmap = false }) => (
  <div className="absolute inset-0 bg-[#03030A] flex items-center justify-center overflow-hidden">
    {/* Animated Grid */}
    <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:20px_20px]" />
    
    <svg viewBox="0 0 400 600" className="w-full h-full opacity-50">
      <motion.path
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 4, ease: "easeInOut" }}
        d="M50 100 L300 200 L200 400 L50 300 Z"
        fill="none"
        stroke="#ffffff"
        strokeWidth="0.5"
      />
      <motion.path
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 3, delay: 0.5, ease: "easeInOut" }}
        d="M100 150 L250 220 L150 350 L80 250 Z"
        fill="none"
        stroke="#ffffff"
        strokeWidth="0.5"
        strokeDasharray="4 4"
      />
    </svg>

    {/* Glowing Nodes (Signals) */}
    {[
      { top: '30%', left: '40%', delay: 1 },
      { top: '45%', left: '70%', delay: 1.5 },
      { top: '60%', left: '30%', delay: 2 },
      { top: '20%', left: '60%', delay: 2.5 }
    ].map((pos, i) => (
      <motion.div
        key={i}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: [0, 1.2, 1], opacity: [0, 1, 0.8] }}
        transition={{ delay: pos.delay, duration: 1.5 }}
        className="absolute w-3 h-3 rounded-full bg-brand-gold shadow-[0_0_15px_rgba(197,168,128,0.8)]"
        style={{ top: pos.top, left: pos.left }}
      />
    ))}

    {/* Heatmap overlay for Screen 8 */}
    <AnimatePresence>
      {isHeatmap && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(197,168,128,0.15),transparent_60%)]"
        />
      )}
    </AnimatePresence>
  </div>
);

// Screen 3: AI Chat
const AIChat = () => {
  const [typed, setTyped] = useState("");
  const [showResponse, setShowResponse] = useState(false);
  const fullText = "What's happening near me tonight?";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i <= fullText.length) {
        setTyped(fullText.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
        setTimeout(() => setShowResponse(true), 600);
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col gap-4 h-full pt-12 px-4">
      <div className="self-end max-w-[85%] bg-luxury-white/10 rounded-2xl rounded-tr-sm p-4 border border-luxury-white/10 text-luxury-white/90">
        {typed}
        {!showResponse && <span className="animate-pulse">|</span>}
      </div>
      
      <AnimatePresence>
        {showResponse && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="self-start max-w-[95%] bg-brand-gold/[0.05] rounded-2xl rounded-tl-sm p-4 border border-brand-gold/20"
          >
            <p className="mb-3 text-luxury-white/90">I found several active clusters nearby for tonight:</p>
            <div className="flex flex-wrap gap-2">
              {['Concerts', 'Communities', 'Meetups', 'Food Festivals', 'Sports', 'Learning'].map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="px-3 py-1.5 bg-brand-gold/10 text-brand-gold rounded-full text-[10px] font-medium tracking-wide uppercase border border-brand-gold/20"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// ==========================================
// MAIN COMPONENT
// ==========================================
export default function ExperienceNarrative() {
  const [screen, setScreen] = useState(0);

  const handleNext = () => {
    if (screen < NARRATIVE.length - 1) setScreen(screen + 1);
  };
  const handlePrev = () => {
    if (screen > 0) setScreen(screen - 1);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "Space") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [screen]);

  return (
    <div className="w-full min-h-screen bg-[#03030A] text-luxury-white relative overflow-hidden flex flex-col selection:bg-brand-gold/20">
      
      {/* Premium Header */}
      <header className="relative z-50 w-full px-8 py-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-4 group">
          <RheoleLogo className="h-6 w-auto transition-transform duration-500 group-hover:scale-105" />
          <span className="text-xs uppercase tracking-[0.2em] text-luxury-white/40 font-mono hidden sm:block">Narrative Preview</span>
        </Link>
        <div className="flex items-center gap-6">
          <span className="text-[10px] font-mono tracking-widest text-brand-gold uppercase">
            {String(screen + 1).padStart(2, '0')} / 10
          </span>
          <Link 
            href="/" 
            className="text-[10px] uppercase tracking-widest text-luxury-white/60 hover:text-luxury-white transition-colors duration-300"
          >
            Close
          </Link>
        </div>
      </header>

      {/* Main Layout: Split Screen (Left Narrative, Right Device) */}
      <main className="flex-1 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between px-6 lg:px-12 py-12 relative z-10">
        
        {/* Left Column: Narrative Text */}
        <div className="lg:w-5/12 flex flex-col justify-center h-full gap-8 z-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={screen}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-6"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light font-serif-editorial text-luxury-white leading-tight">
                {NARRATIVE[screen].title}
              </h1>
              <p className="text-lg md:text-xl font-light text-luxury-white/60 leading-relaxed font-sans max-w-md">
                {NARRATIVE[screen].desc}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              disabled={screen === 0}
              className={`p-4 rounded-full border border-luxury-white/10 transition-colors ${screen === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-luxury-white/5 hover:border-luxury-white/30 text-luxury-white'}`}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <button
              onClick={handleNext}
              className="px-8 py-4 bg-luxury-white text-[#03030A] rounded-full text-xs font-semibold uppercase tracking-widest hover:bg-brand-gold transition-colors flex items-center gap-3"
            >
              {screen === NARRATIVE.length - 1 ? "Finish" : "Next"}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>
        </div>

        {/* Right Column: The Device Mockup */}
        <div className="lg:w-6/12 flex justify-center items-center relative mt-16 lg:mt-0">
          
          {/* Ambient Device Glow */}
          <motion.div 
            animate={{ 
              backgroundColor: screen === 8 ? "rgba(0,0,0,0)" : "rgba(197, 168, 128, 0.05)",
              scale: screen === 9 ? 1.1 : 1
            }}
            transition={{ duration: 1 }}
            className="absolute inset-0 blur-[100px] rounded-full w-[120%] h-[120%] left-[-10%] top-[-10%] pointer-events-none" 
          />
          
          {/* Hardware Frame */}
          <motion.div 
            layout
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className={`relative rounded-[48px] bg-black border-[8px] border-[#1a1a1a] shadow-2xl overflow-hidden flex flex-col justify-between ${
              screen === 9 ? 'w-[360px] h-[720px] lg:w-[400px] lg:h-[800px]' : 'w-[320px] h-[660px]'
            }`}
          >
            {/* Inner Screen Bezel */}
            <div className="relative w-full h-full rounded-[38px] overflow-hidden bg-[#05050C] flex flex-col">
              
              {/* Dynamic Island / Notch */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-full z-50 flex items-center justify-between px-3">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-gold/50" />
                <div className="w-8 h-1.5 rounded-full bg-white/10" />
              </div>

              {/* Status Bar */}
              <div className="w-full h-12 flex justify-between items-center px-6 pt-3 text-[11px] font-medium text-white/50 z-40 absolute top-0">
                <span>9:41</span>
                <div className="flex items-center gap-1.5">
                  <svg width="16" height="10" viewBox="0 0 16 10" fill="currentColor"><path d="M14 0H2C0.9 0 0 0.9 0 2V8C0 9.1 0.9 10 2 10H14C15.1 10 16 9.1 16 8V2C16 0.9 15.1 0 14 0ZM14 8H2V2H14V8Z"/><rect x="4" y="4" width="8" height="2"/></svg>
                </div>
              </div>

              {/* DEVICE CONTENT AREA */}
              <div className="flex-1 w-full h-full relative">
                <AnimatePresence mode="wait">
                  
                  {/* Screen 1: The world is already speaking */}
                  {screen === 0 && (
                    <motion.div key="s1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="h-full w-full">
                      <AbstractCity />
                    </motion.div>
                  )}

                  {/* Screen 2: Rheole understands what matters */}
                  {screen === 1 && (
                    <motion.div key="s2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="h-full w-full relative">
                      <AbstractCity />
                      <motion.div 
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 1, type: "spring", damping: 20 }}
                        className="absolute bottom-10 left-4 right-4 bg-luxury-white/[0.05] backdrop-blur-xl border border-luxury-white/10 rounded-3xl p-6"
                      >
                        <div className="flex items-center justify-between border-b border-luxury-white/10 pb-4 mb-4">
                          <span className="text-xs font-mono uppercase tracking-widest text-brand-gold">Proximity Hub</span>
                          <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <p className="text-3xl font-light text-white">12</p>
                            <p className="text-[10px] uppercase tracking-widest text-white/50 mt-1">Communities</p>
                          </div>
                          <div>
                            <p className="text-3xl font-light text-white">3</p>
                            <p className="text-[10px] uppercase tracking-widest text-white/50 mt-1">Live Events</p>
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  )}

                  {/* Screen 3: AI Discovery */}
                  {screen === 2 && (
                    <motion.div key="s3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="h-full w-full pt-20">
                      <AIChat />
                    </motion.div>
                  )}

                  {/* Screen 4: Live World */}
                  {screen === 3 && (
                    <motion.div key="s4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="h-full w-full flex flex-col gap-4 pt-24 px-4 overflow-hidden">
                      <motion.div initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="w-full bg-red-500/10 border border-red-500/20 rounded-2xl p-4 flex flex-col gap-2">
                        <span className="text-[9px] uppercase tracking-widest text-red-400 font-bold">Emergency Notification</span>
                        <span className="text-xs text-white/90">Road closure on 4th Ave due to water main break. Traffic insight updated.</span>
                      </motion.div>
                      <motion.div initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.6 }} className="w-full bg-luxury-white/5 border border-luxury-white/10 rounded-2xl p-4 flex flex-col gap-2">
                        <div className="flex justify-between items-center">
                          <span className="text-[9px] uppercase tracking-widest text-brand-gold">Trending Neighbourhood</span>
                          <span className="text-[9px] font-mono text-white/40">JUST NOW</span>
                        </div>
                        <span className="text-sm font-medium text-white/90">SOMA District</span>
                        <span className="text-xs text-white/50">Density spiking. 4 new events starting in 30 mins.</span>
                      </motion.div>
                      <motion.div initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 1 }} className="w-full bg-luxury-white/5 border border-luxury-white/10 rounded-2xl p-4 flex flex-col gap-2">
                        <span className="text-[9px] uppercase tracking-widest text-brand-gold">People Joining</span>
                        <div className="flex -space-x-2">
                          {[1,2,3,4,5].map(i => <div key={i} className="w-8 h-8 rounded-full border border-black bg-luxury-white/20" />)}
                          <div className="w-8 h-8 rounded-full border border-black bg-brand-gold/20 flex items-center justify-center text-[10px] text-brand-gold font-medium">+14</div>
                        </div>
                        <span className="text-xs text-white/70 mt-1">Joined "Startup Founders Mixer"</span>
                      </motion.div>
                    </motion.div>
                  )}

                  {/* Screen 5: Your Intelligence */}
                  {screen === 4 && (
                    <motion.div key="s5" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="h-full w-full flex flex-col pt-24 px-4 gap-6">
                      <div className="flex flex-wrap gap-2">
                        {['Technology', 'Cycling', 'Photography', 'Entrepreneurship'].map((tag, i) => (
                          <motion.div 
                            key={tag}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1, backgroundColor: i < 2 ? 'rgba(197,168,128,0.2)' : 'rgba(255,255,255,0.05)' }}
                            transition={{ delay: i * 0.1 }}
                            className={`px-4 py-2 rounded-full border text-xs font-medium ${i < 2 ? 'border-brand-gold/50 text-brand-gold' : 'border-white/10 text-white/50'}`}
                          >
                            {tag}
                          </motion.div>
                        ))}
                      </div>
                      <div className="flex flex-col gap-4 mt-4">
                        <motion.div layoutId="card-tech" className="w-full h-32 rounded-3xl bg-gradient-to-br from-brand-gold/10 to-transparent border border-brand-gold/20 p-5 flex flex-col justify-between">
                          <span className="text-[10px] uppercase tracking-widest text-brand-gold">Recommended for you</span>
                          <span className="text-lg font-serif-editorial text-white">Hardware Builders Meetup</span>
                        </motion.div>
                        <motion.div layoutId="card-cycle" className="w-full h-24 rounded-3xl bg-luxury-white/5 border border-luxury-white/10 p-5 flex flex-col justify-between">
                          <span className="text-[10px] uppercase tracking-widest text-white/50">Because you like Cycling</span>
                          <span className="text-sm font-medium text-white">Morning City Loop</span>
                        </motion.div>
                      </div>
                    </motion.div>
                  )}

                  {/* Screen 6: Communities */}
                  {screen === 5 && (
                    <motion.div key="s6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="h-full w-full pt-20 px-4">
                      <div className="text-2xl font-serif-editorial text-white mb-6 px-2">Local Communities</div>
                      <div className="flex flex-col gap-3">
                        {[
                          { name: 'Startup Founders', members: 420, active: 45, type: 'Tech' },
                          { name: 'SOMA Run Club', members: 1205, active: 112, type: 'Fitness' },
                          { name: 'Film & Photo', members: 840, active: 12, type: 'Arts' },
                          { name: 'Local Book Club', members: 310, active: 4, type: 'Culture' },
                        ].map((com, i) => (
                          <motion.div 
                            key={com.name}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: i * 0.1 }}
                            className="p-4 rounded-2xl border border-white/5 bg-white/[0.02] flex items-center justify-between"
                          >
                            <div className="flex flex-col gap-1">
                              <span className="text-[10px] font-mono text-brand-gold uppercase">{com.type}</span>
                              <span className="text-sm font-medium text-white">{com.name}</span>
                            </div>
                            <div className="flex flex-col items-end gap-1 text-right">
                              <span className="text-xs text-white/60">{com.members} mem</span>
                              <div className="flex items-center gap-1.5">
                                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                                <span className="text-[10px] text-white/40 font-mono">{com.active} active</span>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Screen 7: Events */}
                  {screen === 6 && (
                    <motion.div key="s7" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="h-full w-full pt-20 px-4">
                      <div className="text-2xl font-serif-editorial text-white mb-6 px-2">Tonight</div>
                      <motion.div 
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="w-full rounded-3xl bg-white/[0.03] border border-white/10 overflow-hidden"
                      >
                        <div className="h-32 bg-brand-gold/10 relative">
                          <div className="absolute top-4 right-4 bg-black/50 backdrop-blur px-2 py-1 rounded border border-white/10 text-[9px] font-mono text-brand-gold">
                            98% AI MATCH
                          </div>
                        </div>
                        <div className="p-5 flex flex-col gap-4">
                          <div className="flex flex-col gap-1">
                            <span className="text-[10px] text-white/50 uppercase tracking-widest">Live Music</span>
                            <span className="text-lg font-medium text-white leading-tight">Underground Acoustic Session</span>
                          </div>
                          <div className="grid grid-cols-2 gap-y-3 border-t border-white/5 pt-4">
                            <div className="flex flex-col gap-1 text-left">
                              <span className="text-[9px] font-mono text-white/40">WEATHER</span>
                              <span className="text-xs text-white/80">Clear • 68°</span>
                            </div>
                            <div className="flex flex-col gap-1 text-left">
                              <span className="text-[9px] font-mono text-white/40">TRANSIT</span>
                              <span className="text-xs text-white/80">12 min walk</span>
                            </div>
                            <div className="flex flex-col gap-1 text-left">
                              <span className="text-[9px] font-mono text-white/40">CROWD</span>
                              <span className="text-xs text-brand-gold">High (Est. 150)</span>
                            </div>
                            <div className="flex flex-col gap-1 text-left">
                              <span className="text-[9px] font-mono text-white/40">FRIENDS</span>
                              <span className="text-xs text-white/80">3 attending</span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  )}

                  {/* Screen 8: Spatial Intelligence */}
                  {screen === 7 && (
                    <motion.div key="s8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="h-full w-full">
                      <AbstractCity isHeatmap={true} />
                      <div className="absolute bottom-12 w-full text-center">
                        <span className="px-4 py-2 bg-black/40 backdrop-blur-md rounded-full border border-white/10 text-[10px] uppercase tracking-[0.2em] font-medium text-brand-gold shadow-lg">
                          The Intelligence Layer
                        </span>
                      </div>
                    </motion.div>
                  )}

                  {/* Screen 9: Privacy */}
                  {screen === 8 && (
                    <motion.div key="s9" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="h-full w-full bg-black flex flex-col justify-center items-center gap-6 px-6">
                      <div className="text-xl font-light text-white text-center mb-4">Your privacy remains yours.</div>
                      {[
                        { title: 'Granular Controls', desc: 'Share only what you want, when you want.' },
                        { title: 'Encrypted Mesh', desc: 'Communications are secured end-to-end.' },
                        { title: 'Complete Ownership', desc: 'Your data is never sold to brokers.' },
                      ].map((item, i) => (
                        <motion.div 
                          key={item.title}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.2 }}
                          className="w-full bg-white/[0.02] border border-white/10 p-5 rounded-2xl flex flex-col gap-2"
                        >
                          <span className="text-sm font-medium text-brand-gold">{item.title}</span>
                          <span className="text-xs text-white/50">{item.desc}</span>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}

                  {/* Screen 10: The Future (Final) */}
                  {screen === 9 && (
                    <motion.div key="s10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="h-full w-full flex flex-col items-center justify-center gap-12 bg-[#03030A]">
                      <div className="flex flex-col items-center gap-6 text-center px-6">
                        <RheoleLogo className="h-12 w-auto animate-pulse-slow" />
                        <h2 className="text-2xl font-light font-serif-editorial text-white uppercase tracking-[0.2em]">The Pulse of Your World</h2>
                      </div>
                      
                      <div className="flex flex-col gap-4 w-full px-8">
                        <Link href="/founding-access" className="w-full py-4 rounded-full bg-brand-gold hover:bg-[#d6b78c] transition-colors text-black text-center text-xs font-bold uppercase tracking-widest">
                          Download Rheole
                        </Link>
                        <Link href="/founding-access" className="w-full py-4 rounded-full border border-white/20 hover:border-white/50 text-white text-center text-xs font-bold uppercase tracking-widest transition-colors">
                          Join Founding Access
                        </Link>
                      </div>
                    </motion.div>
                  )}

                </AnimatePresence>
              </div>

              {/* Home Indicator Bar */}
              <div className="w-full h-8 flex justify-center items-center pb-2 z-40">
                <div className="w-32 h-1 rounded-full bg-white/30" />
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
