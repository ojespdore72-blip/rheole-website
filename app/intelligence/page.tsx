"use client";

import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

// -----------------------------------------------------------------
// Sub-components: Experiments
// -----------------------------------------------------------------

const SimulatedVideo = () => {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    // 20 second loop: 4 stages, 5s each
    const interval = setInterval(() => {
      setStage(s => (s + 1) % 4);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 bg-[#050505] overflow-hidden font-mono flex items-center justify-center">
       {/* Ambient scanning line */}
       <motion.div 
         animate={{ y: ["0%", "500%", "0%"] }} 
         transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
         className="absolute top-0 left-0 w-full h-[1px] bg-brand-gold/20 shadow-[0_0_15px_rgba(197,168,128,0.5)] z-50 pointer-events-none"
       />

       <AnimatePresence mode="wait">
         {stage === 0 && (
           <motion.div key="s0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, filter: 'blur(10px)' }} className="w-full h-full flex flex-col items-center justify-center relative">
             <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="w-[400px] h-[400px] border border-brand-gold/10 rounded-full border-dashed absolute" />
             <div className="text-brand-gold text-[10px] uppercase tracking-[0.3em] mb-4">Phase 01</div>
             <div className="text-white text-xl md:text-2xl tracking-widest font-light">Scanning Spatial Context</div>
             {/* Small animated nodes */}
             {[...Array(12)].map((_, i) => (
                <motion.div 
                  key={i} 
                  initial={{ scale: 0 }} 
                  animate={{ scale: [0, 1, 0] }} 
                  transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }} 
                  className="absolute w-1.5 h-1.5 bg-white/50 rounded-full shadow-[0_0_10px_white]" 
                  style={{ top: 10 + Math.random()*80 + '%', left: 10 + Math.random()*80 + '%' }} 
                />
             ))}
           </motion.div>
         )}

         {stage === 1 && (
           <motion.div key="s1" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, filter: 'blur(10px)' }} className="w-full h-full flex flex-col items-center justify-center relative">
             <div className="text-blue-400 text-[10px] uppercase tracking-[0.3em] mb-4">Phase 02</div>
             <div className="text-white text-xl md:text-2xl tracking-widest font-light">Identifying Implicit Intent</div>
             <motion.div initial={{ width: 0 }} animate={{ width: 300 }} transition={{ duration: 2, ease: "easeOut" }} className="h-[1px] bg-blue-500 mt-8 shadow-[0_0_20px_blue]" />
             
             {/* Connecting nodes */}
             <div className="absolute inset-0 flex items-center justify-center gap-12 mt-20 opacity-50">
               <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="w-4 h-4 bg-white rounded-full" />
               <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 1.5, duration: 1 }} className="w-24 h-[1px] bg-white origin-left" />
               <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }} className="w-4 h-4 bg-brand-gold rounded-full shadow-[0_0_15px_rgba(197,168,128,1)]" />
             </div>
           </motion.div>
         )}

         {stage === 2 && (
           <motion.div key="s2" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="w-full h-full flex flex-col items-center justify-center relative">
             <div className="text-brand-gold text-[10px] uppercase tracking-[0.3em] mb-4">Phase 03</div>
             <div className="text-white text-xl md:text-2xl tracking-widest font-light">Synthesizing Environment</div>
             <div className="mt-12 flex gap-6">
                <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }} className="px-6 py-4 border border-white/10 rounded-xl bg-white/5 backdrop-blur-md">
                   <div className="text-gray-500 text-[10px] uppercase tracking-widest">Density</div>
                   <div className="text-white mt-2 text-lg">LOW</div>
                </motion.div>
                <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6 }} className="px-6 py-4 border border-brand-gold/30 rounded-xl bg-brand-gold/5 backdrop-blur-md">
                   <div className="text-brand-gold/70 text-[10px] uppercase tracking-widest">Cluster Match</div>
                   <div className="text-brand-gold mt-2 text-lg">94.2%</div>
                </motion.div>
             </div>
           </motion.div>
         )}

         {stage === 3 && (
           <motion.div key="s3" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1.5, ease: "easeOut" }} className="w-full h-full flex flex-col items-center justify-center relative">
             <div className="w-20 h-20 rounded-full border border-brand-gold/20 flex items-center justify-center mb-8">
                <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 4, repeat: Infinity }} className="w-4 h-4 bg-brand-gold rounded-full shadow-[0_0_30px_#C5A880]" />
             </div>
             <div className="text-white text-3xl md:text-4xl font-serif-editorial tracking-[0.2em]">RHEOLE</div>
             <div className="text-gray-500 text-[10px] uppercase tracking-[0.5em] mt-6">The Intelligence Layer</div>
           </motion.div>
         )}
       </AnimatePresence>

       {/* Timecode overlay */}
       <div className="absolute bottom-6 right-8 text-gray-600 text-[10px] tracking-widest">
          REC • 00:00:{(stage * 5).toString().padStart(2, '0')}
       </div>
    </div>
  );
};

const VideoDemo = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center p-8 relative bg-transparent">
      <div className="text-center mb-12 z-10">
        <p className="text-brand-gold text-xs font-mono uppercase tracking-[0.2em] mb-4">Prologue</p>
        <h2 className="text-3xl md:text-5xl font-serif-editorial text-brand-blue dark:text-luxury-white">See Intelligence in Action</h2>
        <p className="text-sm text-gray-400 mt-4 max-w-md mx-auto">A 20-second glimpse into how Rheole perceives the world.</p>
      </div>

      <div className="relative w-full max-w-4xl aspect-video rounded-3xl overflow-hidden border border-brand-blue/10 dark:border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] z-10 bg-black">
        <SimulatedVideo />
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-12 text-gray-500 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase font-mono tracking-widest">Scroll to Begin</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-gray-500 to-transparent" />
      </motion.div>
    </div>
  );
};

const Experiment1 = () => {
  const [input, setInput] = useState("");
  const [hasResults, setHasResults] = useState(false);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && input.trim() !== '') {
      setHasResults(true);
    }
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center p-8 relative bg-black/5 dark:bg-black/20">
      <div className="text-center mb-12">
        <p className="text-brand-gold text-xs font-mono uppercase tracking-[0.2em] mb-4">Experiment 01</p>
        <h2 className="text-3xl md:text-5xl font-serif-editorial text-brand-blue dark:text-luxury-white">Natural Intent</h2>
        <p className="text-sm text-gray-400 mt-4 max-w-md mx-auto">What are you looking for right now? Type naturally and press Enter.</p>
      </div>

      <div className="relative w-full max-w-2xl z-10">
        <input 
          type="text" 
          placeholder="I'm hungry..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-full bg-white/5 dark:bg-black/20 border border-brand-blue/10 dark:border-white/10 rounded-full px-8 py-6 text-xl md:text-2xl text-center text-brand-blue dark:text-white placeholder:text-gray-400 focus:outline-none focus:border-brand-gold shadow-[0_0_50px_rgba(0,0,0,0.05)] backdrop-blur-md transition-all duration-500"
        />
        
        <AnimatePresence>
          {hasResults && (
            <>
              {/* Fake Results Blooming */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute -top-24 -left-12 p-4 bg-white/80 dark:bg-black/60 backdrop-blur-md border border-brand-blue/5 dark:border-white/5 rounded-2xl shadow-xl flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">☕</div>
                <div>
                  <p className="text-xs font-bold text-brand-blue dark:text-white">The Roastery</p>
                  <p className="text-[10px] text-gray-500">2 mins walk • Quiet</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.8, x: -20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute top-1/2 -right-24 p-4 bg-white/80 dark:bg-black/60 backdrop-blur-md border border-brand-blue/5 dark:border-white/5 rounded-2xl shadow-xl flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">👥</div>
                <div>
                  <p className="text-xs font-bold text-brand-blue dark:text-white">Design Meetup</p>
                  <p className="text-[10px] text-gray-500">Starting now • 3 connections</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.8, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="absolute -bottom-20 left-1/2 -translate-x-1/2 p-4 bg-white/80 dark:bg-black/60 backdrop-blur-md border border-brand-blue/5 dark:border-white/5 rounded-2xl shadow-xl flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">🚶</div>
                <div>
                  <p className="text-xs font-bold text-brand-blue dark:text-white">Scenic Route</p>
                  <p className="text-[10px] text-gray-500">Weather is perfect</p>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {hasResults && (
           <motion.p 
             initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
             className="absolute bottom-12 text-[10px] uppercase font-mono tracking-widest text-brand-gold animate-pulse"
           >
             Resolving Intent...
           </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};

const Experiment2 = () => {
  const [time, setTime] = useState(50);
  const [weather, setWeather] = useState(50);

  const getResult = () => {
    if (time > 70) return { title: "Late Night Jazz", icon: "🎷", desc: "Open till 2AM • Intimate" };
    if (weather < 30) return { title: "Cozy Bookstore", icon: "📚", desc: "Warm indoors • 5 mins away" };
    return { title: "Outdoor Terrace", icon: "☀️", desc: "Perfect weather • Lively" };
  };

  const result = getResult();

  return (
    <div className="w-full h-screen flex flex-col md:flex-row items-center justify-center p-8 relative gap-16 bg-brand-blue/5 dark:bg-[#0a0f1c]">
      <div className="text-left max-w-sm z-10">
        <p className="text-brand-gold text-xs font-mono uppercase tracking-[0.2em] mb-4">Experiment 02</p>
        <h2 className="text-3xl md:text-5xl font-serif-editorial text-brand-blue dark:text-luxury-white leading-tight">Understanding Context</h2>
        <p className="text-sm text-gray-400 mt-4">Adjust the environmental factors. Watch how the recommendation breathes and adapts instantly.</p>
        
        <div className="mt-12 flex flex-col gap-8">
          <div className="flex flex-col gap-2">
             <div className="flex justify-between text-[10px] font-mono uppercase text-brand-blue/50 dark:text-white/50">
               <span>Morning</span><span>Time</span><span>Night</span>
             </div>
             <input type="range" min="0" max="100" value={time} onChange={(e) => setTime(Number(e.target.value))} className="accent-brand-gold" />
          </div>
          <div className="flex flex-col gap-2">
             <div className="flex justify-between text-[10px] font-mono uppercase text-brand-blue/50 dark:text-white/50">
               <span>Rain</span><span>Weather</span><span>Sunny</span>
             </div>
             <input type="range" min="0" max="100" value={weather} onChange={(e) => setWeather(Number(e.target.value))} className="accent-brand-gold" />
          </div>
        </div>
      </div>

      <div className="relative w-72 h-72 flex items-center justify-center border border-brand-blue/5 dark:border-white/5 rounded-[40px] bg-white/5 dark:bg-black/20 backdrop-blur-xl shadow-2xl z-10">
         <AnimatePresence mode="wait">
            <motion.div 
              key={result.title}
              initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center text-center gap-4"
            >
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-3xl shadow-inner border border-white/20">
                {result.icon}
              </div>
              <div>
                <h3 className="text-xl font-medium text-brand-blue dark:text-white">{result.title}</h3>
                <p className="text-xs text-gray-400 mt-1">{result.desc}</p>
              </div>
            </motion.div>
         </AnimatePresence>
      </div>
    </div>
  );
};

const Experiment3 = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const recommendations = [
    {
      id: 1,
      title: "Founders Breakfast",
      initial: "F",
      reasoning: (
        <>This event matches your interest in <span className="text-brand-gold font-medium">entrepreneurship</span>, is within walking distance, and <span className="text-brand-gold font-medium">three nearby communities</span> you follow are currently attending.</>
      )
    },
    {
      id: 2,
      title: "Local Art Walk",
      initial: "L",
      reasoning: (
        <>You frequently attend <span className="text-brand-gold font-medium">indie art galleries</span>, and the weather is perfectly clear for an <span className="text-brand-gold font-medium">outdoor stroll</span> this evening.</>
      )
    },
    {
      id: 3,
      title: "Tech Meetup",
      initial: "T",
      reasoning: (
        <>Several of your <span className="text-brand-gold font-medium">close connections</span> are attending, and it aligns perfectly with your <span className="text-brand-gold font-medium">open calendar slot</span> at 6 PM.</>
      )
    }
  ];

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center p-8 relative bg-luxury-white dark:bg-[#050810]">
      <div className="text-center mb-16 z-10">
        <p className="text-brand-gold text-xs font-mono uppercase tracking-[0.2em] mb-4">Experiment 03</p>
        <h2 className="text-3xl md:text-5xl font-serif-editorial text-brand-blue dark:text-luxury-white">Transparent Reasoning</h2>
        <p className="text-sm text-gray-400 mt-4 max-w-md mx-auto">AI shouldn't be a black box. Ask why.</p>
      </div>

      <div className="relative flex flex-col md:flex-row items-start justify-center gap-6 w-full max-w-6xl z-10">
        {recommendations.map((rec) => (
          <div key={rec.id} className="relative flex flex-col items-center w-full max-w-sm">
            <div className="w-full p-6 bg-white/10 dark:bg-black/30 backdrop-blur-xl border border-brand-blue/10 dark:border-white/10 rounded-3xl shadow-2xl flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 shrink-0 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold font-serif-editorial italic text-xl">{rec.initial}</div>
                <div>
                  <p className="text-sm font-bold text-brand-blue dark:text-white leading-tight">{rec.title}</p>
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-1">Recommended</p>
                </div>
              </div>
              <button 
                onClick={() => setExpandedId(expandedId === rec.id ? null : rec.id)}
                className={`w-10 h-10 shrink-0 rounded-full border border-brand-blue/20 dark:border-white/20 flex items-center justify-center text-xs font-mono transition-all duration-300 ${expandedId === rec.id ? 'bg-brand-gold text-black border-transparent shadow-[0_0_20px_rgba(197,168,128,0.4)]' : 'hover:border-brand-gold text-brand-blue dark:text-white'}`}
              >
                Why?
              </button>
            </div>

            <AnimatePresence>
              {expandedId === rec.id && (
                <motion.div 
                  initial={{ opacity: 0, height: 0, y: -10 }}
                  animate={{ opacity: 1, height: 'auto', y: 16 }}
                  exit={{ opacity: 0, height: 0, y: -10 }}
                  className="w-[90%] overflow-hidden bg-white/5 dark:bg-white/5 backdrop-blur-md border border-brand-blue/5 dark:border-white/5 rounded-2xl shadow-lg"
                >
                  <div className="p-5 flex gap-4 items-start">
                    <div className="w-1 h-full min-h-[40px] bg-brand-gold rounded-full shrink-0" />
                    <p className="text-sm font-light leading-relaxed text-brand-blue/80 dark:text-white/80">
                      {rec.reasoning}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

const Experiment4 = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center relative overflow-hidden bg-black/5 dark:bg-black/40">
      <div className="absolute top-1/4 md:top-1/3 left-12 z-20 max-w-sm">
        <p className="text-brand-gold text-xs font-mono uppercase tracking-[0.2em] mb-4">Experiment 04</p>
        <h2 className="text-3xl md:text-5xl font-serif-editorial text-brand-blue dark:text-luxury-white leading-tight">The Living City</h2>
        <p className="text-sm text-gray-500 mt-4">The physical world is continuously changing. The interface reflects that reality.</p>
      </div>

      {/* Abstract Animated Map */}
      <div className="absolute inset-0 flex items-center justify-center opacity-40">
        <div className="w-[80vw] h-[80vh] md:w-[60vw] md:h-[60vh] relative border border-brand-blue/5 dark:border-white/5 rounded-full" style={{ perspective: '1000px' }}>
          <motion.div 
            animate={{ rotateX: 60, rotateZ: 360 }}
            transition={{ duration: 40, ease: "linear", repeat: Infinity }}
            className="w-full h-full absolute inset-0 rounded-full border border-brand-gold/20 border-dashed"
          >
            {/* Pulsing Nodes */}
            {[...Array(8)].map((_, i) => (
              <motion.div 
                key={i}
                className="absolute w-2 h-2 bg-brand-gold rounded-full"
                style={{
                  top: `${Math.random() * 80 + 10}%`,
                  left: `${Math.random() * 80 + 10}%`,
                  boxShadow: '0 0 20px rgba(197,168,128,1)'
                }}
                animate={{ scale: [1, 2, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2 }}
              />
            ))}
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-12 text-[10px] uppercase font-mono tracking-widest text-brand-blue/50 dark:text-white/50 animate-pulse z-10">
        Observing Spatial Shifts...
      </div>
    </div>
  );
};

const Experiment5 = () => {
  const [radius, setRadius] = useState(0);

  const users = useMemo(() => {
    return Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      avatar: `https://i.pravatar.cc/150?u=exp5_user_${i}`,
      dist: Math.random() * 45 + 5, // distance from center (5% to 50%)
      angle: Math.random() * 360,
    }));
  }, []);

  return (
    <div className="w-full h-screen flex items-center justify-center p-8 relative bg-gradient-to-br from-[#F5F2EC] via-[#FDFBF7] to-[#EAE4D9] dark:from-[#110E0A] dark:via-[#1A1510] dark:to-[#0D0A07] overflow-hidden">
      
      {/* Premium Skin Texture Live Background Overlay - reduced opacity */}
      <div 
        className="absolute inset-0 z-0 opacity-15 dark:opacity-10 mix-blend-multiply dark:mix-blend-overlay pointer-events-none" 
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} 
      />

      <div className="z-10 flex flex-col md:flex-row gap-16 items-center w-full max-w-4xl">
        <div className="flex-1 text-left z-20">
          <p className="text-brand-gold text-xs font-mono uppercase tracking-[0.2em] mb-4">Experiment 05</p>
          <h2 className="text-3xl md:text-5xl font-serif-editorial text-brand-blue dark:text-luxury-white leading-tight drop-shadow-sm">Personal Intelligence</h2>
          <p className="text-sm text-gray-700 dark:text-gray-400 mt-4 max-w-sm mb-8 drop-shadow-sm">Adjust your physical constraints. The entire environment instantly reorganizes around you.</p>
          
          <div className="p-6 rounded-[24px] bg-white/40 dark:bg-black/40 border border-brand-blue/10 dark:border-white/10 backdrop-blur-xl shadow-lg">
            <p className="text-xs uppercase tracking-widest font-mono text-brand-blue/60 dark:text-white/60 mb-6">Travel Radius</p>
            <input 
              type="range" 
              min="0" max="100" 
              value={radius} 
              onChange={(e) => setRadius(Number(e.target.value))}
              className="w-full accent-brand-gold cursor-pointer relative z-30"
            />
            <div className="flex justify-between mt-2 text-[10px] font-mono text-gray-500">
              <span>0km</span>
              <span>Walking (1km)</span>
              <span>City-wide (10km)</span>
            </div>
          </div>
        </div>

        <div className="flex-1 relative h-[300px] md:h-[400px] w-full border border-brand-blue/10 dark:border-white/10 rounded-full flex items-center justify-center overflow-hidden z-10 shadow-inner bg-white/20 dark:bg-black/20 backdrop-blur-sm">
           <motion.div 
             animate={{ width: `${radius}%`, height: `${radius}%` }}
             transition={{ type: "spring", bounce: 0.2 }}
             className="absolute bg-brand-gold/10 dark:bg-brand-gold/5 rounded-full border border-brand-gold/30 flex items-center justify-center shadow-[0_0_30px_rgba(197,168,128,0.15)]"
           >
              <div className="w-3 h-3 bg-brand-gold rounded-full shadow-[0_0_15px_rgba(197,168,128,1)] z-30" />
           </motion.div>
           
           {users.map((u) => {
             const isInside = u.dist <= radius / 2;
             return (
               <motion.div
                 key={u.id}
                 className="absolute z-20 flex flex-col items-center justify-center gap-1"
                 style={{
                   left: `calc(50% + ${Math.cos((u.angle * Math.PI) / 180) * u.dist}%)`,
                   top: `calc(50% + ${Math.sin((u.angle * Math.PI) / 180) * u.dist}%)`,
                   x: '-50%',
                   y: '-50%'
                 }}
                 initial={{ opacity: 0, scale: 0 }}
                 animate={{ 
                   opacity: isInside ? 1 : 0, 
                   scale: isInside ? 1 : 0,
                   y: isInside ? [0, -4, 0] : 0
                 }}
                 transition={{ 
                   opacity: { duration: 0.3 },
                   scale: { type: "spring", bounce: 0.4 },
                   y: { duration: 3, repeat: Infinity, delay: u.id * 0.1 }
                 }}
               >
                 <div className="w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden border-2 border-brand-gold/50 shadow-xl bg-luxury-black">
                   <img src={u.avatar} alt="User" className="w-full h-full object-cover" />
                 </div>
                 <div className="w-1.5 h-1.5 bg-brand-gold rounded-full animate-pulse shadow-[0_0_8px_rgba(197,168,128,1)]" />
               </motion.div>
             )
           })}
        </div>
      </div>
    </div>
  );
};

const Experiment6 = () => {
  const row1 = [
    { text: "Your community is gathering nearby.", delay: 0.5 },
    { text: "Heavy rain expected in 10 mins.", delay: 1.0 },
    { text: "This café is unusually quiet.", delay: 1.5 },
    { text: "Your usual commute has heavy traffic.", delay: 2.0 },
  ];
  const row2 = [
    { text: "A friend just checked in at the park.", delay: 2.5 },
    { text: "There is a tech meetup starting soon.", delay: 3.0 },
    { text: "It's the perfect weather for a walk.", delay: 3.5 },
  ];

  const renderBubble = (n: any) => (
    <motion.div 
      key={n.text}
      initial={{ opacity: 0, y: 30, filter: 'blur(15px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: false, amount: 0.8 }}
      transition={{ 
        opacity: { delay: n.delay, duration: 2 },
        filter: { delay: n.delay, duration: 3, ease: "easeOut" },
        y: { delay: n.delay, duration: 1, ease: "easeOut" }
      }}
      className="px-6 py-3 rounded-full bg-white/5 backdrop-blur-[30px] border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.5)] flex items-center gap-3"
    >
      <div className="w-1.5 h-1.5 rounded-full bg-brand-gold shadow-[0_0_10px_rgba(197,168,128,0.8)] animate-pulse" />
      <span className="text-sm text-white/90 font-light tracking-wide">{n.text}</span>
    </motion.div>
  );

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center p-8 relative bg-[#050810] overflow-hidden">
      
      {/* Ambient Breathing Background Mesh */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, 90, 0]
          }}
          transition={{ duration: 20, ease: "easeInOut", repeat: Infinity }}
          className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-brand-blue/20 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.5, 0.2],
            x: [0, 100, 0]
          }}
          transition={{ duration: 25, ease: "easeInOut", repeat: Infinity, delay: 5 }}
          className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-brand-gold/10 rounded-full blur-[100px]" 
        />
      </div>

      <div className="text-center z-20 mb-16 pointer-events-none">
        <p className="text-brand-gold text-xs font-mono uppercase tracking-[0.2em] mb-4">Experiment 06</p>
        <h2 className="text-3xl md:text-5xl font-serif-editorial text-white drop-shadow-lg">Ambient Intelligence</h2>
        <p className="text-sm text-white/50 mt-4 max-w-sm mx-auto drop-shadow-md">True intelligence works quietly. Reducing effort rather than demanding attention.</p>
      </div>

      <div className="relative z-10 flex flex-col gap-6 items-center w-full max-w-5xl">
        <div className="flex flex-wrap justify-center gap-4">
          {row1.map(renderBubble)}
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {row2.map(renderBubble)}
        </div>
      </div>
    </div>
  );
};

const EndExperience = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center p-8 relative overflow-hidden bg-[#F9F6F0] dark:bg-[#0D0B08]">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
         <motion.div 
           initial={{ scale: 2, opacity: 0 }}
           whileInView={{ scale: 1, opacity: 1 }}
           viewport={{ once: false }}
           transition={{ duration: 1.5, ease: "easeOut" }}
           className="w-[120vw] h-[120vw] bg-[radial-gradient(circle_at_center,rgba(197,168,128,0.08),transparent_50%)]"
         />
      </div>

      <div className="z-10 text-center flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0, duration: 1 }}
          className="w-12 h-12 mb-8 border border-brand-gold/30 rounded-full flex items-center justify-center bg-[#F9F6F0] dark:bg-[#0D0B08]"
        >
          <div className="w-2 h-2 bg-brand-gold rounded-full" />
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, filter: 'blur(0px)' }}
          viewport={{ once: false }}
          transition={{ delay: 0.2, duration: 1 }}
          className="text-5xl md:text-7xl font-serif-editorial text-brand-blue dark:text-luxury-white tracking-wide relative z-10"
        >
          The Pulse of Your World.
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="relative z-10"
        >
          <Link href="/founding-access" className="mt-12 inline-block px-8 py-3 border border-brand-blue/20 dark:border-white/20 rounded-full text-xs uppercase tracking-widest font-mono text-brand-blue dark:text-white hover:bg-brand-blue hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-500 bg-white/50 dark:bg-black/50 backdrop-blur-sm">
            Experience Rheole
          </Link>
        </motion.div>
      </div>

      {/* Smooth transition gradient to blend with the Footer below */}
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-luxury-white via-luxury-white/80 to-transparent dark:from-luxury-black dark:via-luxury-black/80 dark:to-transparent z-20 pointer-events-none" />
    </div>
  );
};

// -----------------------------------------------------------------
// Main Page Shell
// -----------------------------------------------------------------

export default function IntelligenceLaboratory() {
  return (
    <div className="relative w-full min-h-screen bg-luxury-white dark:bg-luxury-black text-brand-blue dark:text-luxury-white selection:bg-brand-gold/20">
      
      {/* Background ambient lighting shared across experiments */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[10%] left-[10%] w-[40vw] h-[40vw] bg-brand-blue/5 dark:bg-white/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[10%] right-[20%] w-[30vw] h-[30vw] bg-brand-gold/5 rounded-full blur-[100px]" />
      </div>

      <main className="relative w-full z-10 flex flex-col">
        <VideoDemo />
        <Experiment1 />
        <Experiment2 />
        <Experiment3 />
        <Experiment4 />
        <Experiment5 />
        <Experiment6 />
        <EndExperience />
      </main>

    </div>
  );
}
