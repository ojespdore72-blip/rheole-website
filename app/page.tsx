"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import ClientMotionConfig from "@/components/ClientMotionConfig";
import SocialChannels from "@/components/SocialChannels";
import RheoleLogo from "@/components/logo";

// Dummy Editorial Photos (can be replaced with real assets later)
const photos = [
  "/web_image_1.png",
  "/web_image_3.jpg",
  "/web_image_4.jpg"
];

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  
  // Parallax and Opacity transforms
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.15], [1, 0.9]);
  const introOpacity = useTransform(scrollYProgress, [0.1, 0.25, 0.35], [0, 1, 0]);
  const introY = useTransform(scrollYProgress, [0.1, 0.25], [100, 0]);
  
  const [activeScenario, setActiveScenario] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ 
        x: (e.clientX / window.innerWidth - 0.5) * 30, 
        y: (e.clientY / window.innerHeight - 0.5) * 30 
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scenarios = [
    {
      id: "visit",
      prompt: "I'm visiting Bengaluru for the first time.",
      response: "Analyzing local density... Found 3 active tech hubs, 12 live acoustic events, and an emerging startup mixer near Indiranagar.",
      visual: (
        <div className="relative w-full h-full flex items-center justify-center">
          <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 20, ease: "linear" }} className="absolute w-[200px] h-[200px] border border-brand-gold/20 rounded-full border-dashed" />
          <motion.div animate={{ rotate: -360 }} transition={{ repeat: Infinity, duration: 30, ease: "linear" }} className="absolute w-[300px] h-[300px] border border-brand-blue/30 dark:border-white/10 rounded-full" />
          <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 4 }} className="w-4 h-4 bg-brand-gold rounded-full shadow-[0_0_20px_#C5A880]" />
          {/* Data nodes */}
          <div className="absolute top-[20%] right-[20%] p-2 bg-black/80 backdrop-blur border border-white/10 rounded-xl shadow-2xl">
            <p className="text-[10px] text-white/80 font-mono">Indiranagar Mixer</p>
            <p className="text-[8px] text-brand-gold mt-1">120+ Active</p>
          </div>
          <div className="absolute bottom-[30%] left-[10%] p-2 bg-black/80 backdrop-blur border border-white/10 rounded-xl shadow-2xl">
            <p className="text-[10px] text-white/80 font-mono">Tech Hub</p>
            <p className="text-[8px] text-green-400 mt-1">High Density</p>
          </div>
        </div>
      )
    },
    {
      id: "hungry",
      prompt: "Find somewhere peaceful to eat.",
      response: "Filtering for low ambient noise... 'The Courtyard' currently has 30% occupancy and matches your aesthetic preferences.",
      visual: (
        <div className="relative w-full h-full flex flex-col items-center justify-center p-8 gap-4">
          <div className="w-full flex items-end h-32 gap-2 border-b border-brand-blue/20 dark:border-white/10 pb-2">
            {[40, 70, 30, 80, 20, 50, 10].map((h, i) => (
              <motion.div 
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ duration: 1, delay: i * 0.1 }}
                className={`flex-1 rounded-t-sm ${h > 50 ? 'bg-red-400/50' : h > 30 ? 'bg-brand-gold/50' : 'bg-green-400/50'}`}
              />
            ))}
          </div>
          <p className="text-xs uppercase tracking-widest text-brand-blue/50 dark:text-white/50 font-mono">Live Audio Topology</p>
        </div>
      )
    }
  ];

  return (
    <div ref={containerRef} className="relative w-full bg-luxury-white dark:bg-luxury-black text-brand-blue dark:text-luxury-white font-sans overflow-clip">

      
      {/* 1. HERO - Living City Visualization */}
      <motion.section 
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="fixed inset-0 z-0 flex flex-col items-center justify-center pointer-events-none"
      >
        <motion.div 
          animate={{ x: mousePos.x, y: mousePos.y }}
          className="absolute inset-0 flex items-center justify-center"
        >
          {/* Spatial OS Glows */}
          <div className="absolute w-[80vw] h-[80vw] md:w-[50vw] md:h-[50vw] bg-brand-gold/10 dark:bg-brand-gold/5 rounded-full blur-[100px] md:blur-[150px] animate-pulse-slow" />
          <div className="absolute top-[20%] left-[20%] w-[40vw] h-[40vw] bg-brand-indigo/10 dark:bg-brand-indigo/5 rounded-full blur-[120px]" style={{ animation: 'pulse-slow 15s infinite reverse' }} />
          
          {/* Abstract Grid Map */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(10,37,64,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(10,37,64,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_10%,transparent_100%)]" />
        </motion.div>

        <div className="relative z-10 flex flex-col items-center gap-8 text-center px-4">
          <motion.div 
            initial={{ scale: 0.9, filter: "blur(10px)", opacity: 0 }}
            animate={{ scale: 1, filter: "blur(0px)", opacity: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <RheoleLogo className="h-20 w-20 md:h-28 md:w-28 drop-shadow-[0_0_40px_rgba(197,168,128,0.3)]" />
          </motion.div>
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 1.2 }}
            className="text-5xl sm:text-6xl md:text-8xl lg:text-[100px] font-light font-serif-editorial tracking-tight leading-[1.1] md:leading-[1]"
          >
            The pulse of<br/><span className="italic text-gradient-gold-blue">your city.</span>
          </motion.h1>
        </div>
      </motion.section>

      {/* Spacer for Hero */}
      <div className="h-[120vh]" />

      {/* 2. THE CORE PRINCIPLE */}
      <motion.section 
        style={{ opacity: introOpacity, y: introY }}
        className="relative z-10 min-h-screen flex items-center justify-center px-6"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-light leading-tight font-serif-editorial text-brand-blue dark:text-white">
            Rheole is not another application.
            <br />
            <br />
            <span className="text-brand-gold italic">It is the intelligence layer</span> between people and the physical world.
          </h2>
        </div>
      </motion.section>

      {/* 3. INTERACTIVE SPATIAL DEMO (VisionOS Style) */}
      <section className="relative z-10 min-h-[150vh] py-32 px-4 md:px-12 bg-[#020205] text-white">
        <div className="max-w-7xl mx-auto flex flex-col gap-24">
          
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-xs uppercase tracking-[0.3em] font-mono text-brand-gold mb-6">Live Demonstration</h3>
            <h2 className="text-4xl md:text-6xl font-light font-serif-editorial">Experience ambient intelligence.</h2>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 items-center justify-center">
            
            {/* Context Inputs */}
            <div className="w-full lg:w-1/3 flex flex-col gap-4">
              {scenarios.map((scenario, idx) => (
                <button
                  key={scenario.id}
                  onClick={() => setActiveScenario(idx)}
                  className={`text-left p-6 rounded-3xl transition-spring backdrop-blur-xl border ${
                    activeScenario === idx 
                      ? "bg-white/10 border-brand-gold/40 shadow-[0_20px_40px_-10px_rgba(197,168,128,0.15)] scale-[1.02]" 
                      : "bg-transparent border-white/5 hover:bg-white/5"
                  }`}
                >
                  <p className="text-lg font-medium text-white leading-relaxed">
                    "{scenario.prompt}"
                  </p>
                </button>
              ))}
            </div>

            {/* Spatial Output Interface */}
            <div className="w-full lg:w-2/3 h-[500px] md:h-[600px] spatial-glass rounded-[40px] border border-white/20 dark:border-white/10 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] dark:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.5)] overflow-hidden relative group">
              {/* Glass Glare */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent opacity-50 pointer-events-none z-20 mix-blend-overlay" />
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeScenario}
                  initial={{ opacity: 0, filter: "blur(20px)", scale: 0.95 }}
                  animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                  exit={{ opacity: 0, filter: "blur(20px)", scale: 1.05 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 flex flex-col z-10"
                >
                  {/* Visualizer Area */}
                  <div className="flex-1 relative overflow-hidden bg-gradient-to-b from-transparent to-white/5">
                    {scenarios[activeScenario].visual}
                  </div>
                  
                  {/* AI Response Area */}
                  <div className="p-8 border-t border-white/10 bg-black/40 backdrop-blur-3xl min-h-[160px] flex items-center">
                    <p className="text-lg md:text-xl font-light leading-relaxed text-white">
                      <span className="inline-block w-2 h-2 rounded-full bg-brand-gold animate-pulse mr-4" />
                      {scenarios[activeScenario].response}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            
          </div>
        </div>
      </section>

      {/* 4. EDITORIAL PHOTOGRAPHY / LIVING CITY */}
      <section className="relative z-10 py-32 overflow-hidden bg-brand-blue text-luxury-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-16">
          <h2 className="text-3xl md:text-5xl font-light font-serif-editorial">
            Rooted in <span className="text-brand-gold italic">reality.</span>
          </h2>
          <p className="mt-6 text-lg font-light text-white/70 max-w-xl">
            We are not building an escape to the metaverse. We are building the tools to fall back in love with your physical city.
          </p>
        </div>
        
        {/* Horizontal Scroll Gallery */}
        <div className="flex gap-8 px-6 lg:px-12 overflow-x-auto pb-12 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden">
          {photos.map((photo, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="relative w-[300px] md:w-[450px] aspect-[4/5] flex-shrink-0 snap-center rounded-3xl overflow-hidden group"
            >
              <div className="absolute inset-0 bg-white/5 group-hover:scale-105 transition-transform duration-[2s] ease-out">
                {/* Real Image */}
                <img src={photo} alt={`Location ${i + 1}`} className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-50" />
                {/* Fallback pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),transparent)]" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8">
                <p className="text-xs uppercase tracking-widest font-mono text-brand-gold mb-2">Location {i + 1}</p>
                <p className="text-lg font-light">Bengaluru</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. IMMERSIVE CTA */}
      <section className="relative z-10 py-40 px-6 flex flex-col items-center text-center bg-luxury-white dark:bg-luxury-black border-t border-brand-blue/10 dark:border-white/10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-2xl flex flex-col items-center gap-10"
        >
          <RheoleLogo className="h-16 w-16 drop-shadow-xl" />
          <h2 className="text-4xl md:text-6xl font-light font-serif-editorial">
            Join the new future.
          </h2>
          <Link 
            href="/founding-access" 
            className="group relative px-12 py-5 bg-brand-blue dark:bg-white text-white dark:text-brand-blue rounded-full text-sm font-medium tracking-widest uppercase overflow-hidden haptic-press shadow-2xl"
          >
            <span className="relative z-10 transition-colors duration-500 group-hover:text-brand-blue dark:group-hover:text-white">Request Early Access</span>
            <div className="absolute inset-0 bg-brand-gold dark:bg-brand-blue scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
          </Link>
        </motion.div>
      </section>

      {/* 6. SOCIAL CHANNELS */}
      <SocialChannels />
    </div>
  );
}
