"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Lock, Navigation, Brain, Target, Shield, Settings, Eye, Zap, Activity } from "lucide-react";

// ==========================================
// SECTION 1: HERO EXPERIENCE
// ==========================================
const HeroSection = () => {
  return (
    <div className="relative w-full min-h-screen flex flex-col justify-center px-6 lg:px-24 overflow-hidden">
      {/* Living light & particles */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.2, 1], filter: ['blur(100px)', 'blur(120px)', 'blur(100px)'] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-brand-gold/10 rounded-full"
        />
        <motion.div 
          animate={{ opacity: [0.1, 0.3, 0.1], scale: [1.2, 1, 1.2], filter: ['blur(80px)', 'blur(100px)', 'blur(80px)'] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 right-1/4 w-[50vw] h-[50vw] bg-brand-blue/5 rounded-full"
        />
        {/* Soft Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
            className="absolute rounded-full bg-brand-gold/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: Math.random() * 4 + 1,
              height: Math.random() * 4 + 1,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-4xl pt-32">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif-editorial text-brand-blue dark:text-luxury-white leading-tight"
        >
          Trust isn't claimed.<br/>
          <span className="italic text-brand-gold">It's designed.</span>
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="mt-12 text-lg md:text-xl font-light text-brand-blue/70 dark:text-white/70 leading-relaxed max-w-2xl"
        >
          <p className="mb-4">Every interaction inside Rheole is built around a simple principle:</p>
          <ul className="space-y-2 font-medium text-brand-blue dark:text-white/80">
            <li>Collect only what is needed.</li>
            <li>Protect it while it moves.</li>
            <li>Give users meaningful control.</li>
            <li>Keep intelligence helpful rather than intrusive.</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

// ==========================================
// SECTION 2: INTERACTIVE VIDEO EXPERIENCE
// ==========================================
const DataMovesSection = () => {
  const [scene, setScene] = useState(0);
  const totalScenes = 6;

  useEffect(() => {
    const interval = setInterval(() => {
      setScene((s) => (s + 1) % totalScenes);
    }, 4500); // Progress every 4.5 seconds
    return () => clearInterval(interval);
  }, [totalScenes]);

  const timelineLabels = ["You", "Protection", "Intelligence", "Nearby Results", "Only You", "Trust"];

  return (
    <div className="w-full py-32 px-6 lg:px-24 flex flex-col items-center">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-serif-editorial text-brand-blue dark:text-luxury-white">How Your Data Moves</h2>
      </div>

      <div className="w-full max-w-5xl h-[500px] md:h-[600px] bg-[#020205] rounded-[40px] border border-white/10 overflow-hidden relative shadow-2xl">
        {/* Timeline Scrub */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/80 to-transparent z-30 flex flex-col justify-end px-8 pb-6">
          <div className="flex justify-between w-full relative mb-2">
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/10 -translate-y-1/2 z-0" />
            <motion.div 
              className="absolute top-1/2 left-0 h-[1px] bg-brand-gold -translate-y-1/2 z-0 transition-all duration-700" 
              style={{ width: `${(scene / (totalScenes - 1)) * 100}%` }}
            />
            {timelineLabels.map((label, i) => (
              <button 
                key={i} 
                onClick={() => setScene(i)}
                className="relative z-10 flex flex-col items-center gap-2 group"
              >
                <div className={`w-3 h-3 rounded-full border-2 transition-all duration-500 ${scene === i ? 'bg-brand-gold border-brand-gold scale-125 shadow-[0_0_10px_rgba(197,168,128,0.8)]' : scene > i ? 'bg-brand-gold border-brand-gold' : 'bg-[#020205] border-white/30 group-hover:border-white/60'}`} />
                <span className={`text-[10px] uppercase tracking-wider font-mono absolute top-6 whitespace-nowrap transition-colors duration-300 ${scene === i ? 'text-brand-gold' : 'text-white/70 group-hover:text-white/70'}`}>
                  {label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Visualizer Frame */}
        <div className="w-full h-full relative flex items-center justify-center p-12 z-10">
          <AnimatePresence mode="wait">
            
            {/* Scene 1: Natural Typing */}
            {scene === 0 && (
              <motion.div key="s0" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, filter: 'blur(10px)' }} transition={{ duration: 0.8 }} className="flex flex-col items-center text-center">
                <div className="w-64 h-16 bg-white/5 border border-white/10 rounded-full flex items-center px-6 shadow-2xl backdrop-blur-md">
                  <motion.span 
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
                    className="text-xl text-white font-light tracking-wide"
                  >
                    I'm hungry<motion.span animate={{ opacity: [1, 0] }} transition={{ repeat: Infinity, duration: 0.8 }}>|</motion.span>
                  </motion.span>
                </div>
              </motion.div>
            )}

            {/* Scene 2: Particles Leaving */}
            {scene === 1 && (
              <motion.div key="s1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.8 }} className="relative w-full h-full flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center absolute z-10 backdrop-blur-md" />
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0, opacity: 1, x: 0, y: 0 }}
                    animate={{ scale: [1, 0], opacity: [1, 0], x: (Math.random() - 0.5) * 300, y: (Math.random() - 0.5) * 300 }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1, ease: "easeOut" }}
                    className="absolute w-2 h-2 bg-brand-gold rounded-full"
                  />
                ))}
              </motion.div>
            )}

            {/* Scene 3: Abstract Encryption */}
            {scene === 2 && (
              <motion.div key="s2" initial={{ opacity: 0, scale: 1.1 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.8 }} className="relative w-full h-full flex items-center justify-center">
                <motion.div 
                  animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-64 h-64 border-[1px] border-dashed border-white/20 rounded-full flex items-center justify-center"
                >
                  <motion.div 
                    animate={{ rotate: -720 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="w-48 h-48 border border-brand-gold/30 rounded-full flex items-center justify-center relative backdrop-blur-sm"
                  >
                     <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(197,168,128,0.1)_50%,transparent_75%)] bg-[size:10px_10px]" />
                  </motion.div>
                </motion.div>
                <Lock className="absolute text-brand-gold w-8 h-8" />
              </motion.div>
            )}

            {/* Scene 4: Intelligence Computed */}
            {scene === 3 && (
              <motion.div key="s3" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.8 }} className="flex gap-8 relative items-center justify-center w-full">
                <div className="w-48 h-48 bg-white/5 border border-brand-blue/20 rounded-[30px] p-6 flex flex-col justify-between backdrop-blur-md">
                   <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center"><Navigation size={14}/></div>
                   <div>
                     <p className="text-white text-sm font-medium">Nearby Spots</p>
                     <p className="text-white/70 text-[10px] mt-1 font-mono">Location Data</p>
                   </div>
                </div>
                <div className="w-48 h-48 bg-white/5 border border-green-500/20 rounded-[30px] p-6 flex flex-col justify-between backdrop-blur-md">
                   <div className="w-8 h-8 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center"><Activity size={14}/></div>
                   <div>
                     <p className="text-white text-sm font-medium">Open Now</p>
                     <p className="text-white/70 text-[10px] mt-1 font-mono">Real-time DB</p>
                   </div>
                </div>
                <p className="absolute -top-12 text-xs font-mono uppercase tracking-widest text-brand-gold">Only relevant context. Only when needed.</p>
              </motion.div>
            )}

            {/* Scene 5: Information reconstructs */}
            {scene === 4 && (
              <motion.div key="s4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.8 }} className="flex flex-col items-center">
                 <div className="relative w-64 h-32 bg-white/5 rounded-2xl border border-white/20 shadow-2xl p-6 flex items-center gap-4 backdrop-blur-xl">
                   <div className="absolute -inset-1 bg-gradient-to-r from-brand-gold to-brand-blue rounded-2xl opacity-20 blur-lg animate-pulse" />
                   <div className="w-12 h-12 bg-[#D2B48C] rounded-full shrink-0" />
                   <div>
                     <p className="text-white text-sm font-medium">The Artisan Cafe</p>
                     <p className="text-white/70 text-xs mt-1">3 mins walk • Open</p>
                   </div>
                 </div>
              </motion.div>
            )}

            {/* Scene 6: Final Message */}
            {scene === 5 && (
              <motion.div key="s5" initial={{ opacity: 0, filter: 'blur(10px)' }} animate={{ opacity: 1, filter: 'blur(0px)' }} exit={{ opacity: 0 }} transition={{ duration: 1.5 }} className="text-center max-w-lg">
                <p className="text-3xl font-serif-editorial text-white leading-relaxed">
                  Privacy should disappear into the background.<br/>
                  <span className="text-brand-gold italic">Trust should not.</span>
                </p>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// SECTION 3: INTERACTIVE TRUST PRINCIPLES
// ==========================================
const TrustPrinciplesSection = () => {
  const principles = [
    { title: "Private by Design", desc: "Your information is handled with purpose rather than excess. Every feature is built with privacy as the absolute foundation, not an afterthought." },
    { title: "Granular Control", desc: "Choose exactly what you share and when. You can toggle specific permissions on or off at any moment without breaking the core experience." },
    { title: "Intelligent Permissions", desc: "Permissions are contextual, understandable, and reversible. You'll always know exactly why a piece of data is being requested." },
    { title: "Designed for Transparency", desc: "See what information is used and why. We provide clear, plain-language reasoning for every intelligent recommendation." },
    { title: "Adaptive Protection", desc: "Security evolves with the platform. Our encryption models and data pipelines are constantly refined to stay ahead of modern threats." }
  ];

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="w-full py-32 px-6 lg:px-24">
      <div className="text-center mb-20 max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-serif-editorial text-brand-blue dark:text-luxury-white">The Architecture of Trust</h2>
        <p className="text-brand-blue/70 dark:text-white/70 mt-6 font-light">Instead of burying our philosophy in legal documents, we engineered it into the product.</p>
      </div>

      <div className="flex flex-col gap-4 max-w-4xl mx-auto">
        {principles.map((p, i) => (
          <motion.div
            key={i}
            onHoverStart={() => setHoveredIndex(i)}
            onHoverEnd={() => setHoveredIndex(null)}
            className="w-full bg-white/40 dark:bg-black/40 backdrop-blur-md border border-brand-blue/5 dark:border-white/5 rounded-[24px] overflow-hidden transition-all duration-500 cursor-pointer shadow-sm hover:shadow-xl dark:shadow-none"
            animate={{ height: hoveredIndex === i ? 'auto' : '88px' }}
          >
            <div className="px-8 py-6 flex items-center justify-between">
              <h3 className={`text-lg font-medium transition-colors duration-300 ${hoveredIndex === i ? 'text-brand-gold' : 'text-brand-blue dark:text-white'}`}>{p.title}</h3>
              <div className="w-6 h-6 rounded-full border border-brand-blue/20 dark:border-white/20 flex items-center justify-center">
                <motion.div animate={{ rotate: hoveredIndex === i ? 45 : 0 }} className="text-brand-blue/70 dark:text-white/70 text-xs">+</motion.div>
              </div>
            </div>
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: hoveredIndex === i ? 1 : 0 }} 
              className="px-8 pb-8 pt-0"
            >
              <p className="text-brand-blue/70 dark:text-white/70 font-light leading-relaxed max-w-2xl">{p.desc}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// ==========================================
// SECTION 4: CONTROL CENTRE (PRESERVED)
// ==========================================
const ControlCentreSection = ({ privacyLevel, setPrivacyLevel }: { privacyLevel: string, setPrivacyLevel: any }) => {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-20">
        {/* 3. Identity Protection Controls (PRESERVED) */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center border-t border-brand-blue/10 dark:border-white/10 pt-20">
          <div className="w-full lg:w-1/2 h-[400px] rounded-[40px] border border-brand-blue/10 dark:border-white/10 relative overflow-hidden flex flex-col">
            {/* Top Bar with Toggle */}
            <div className="w-full p-6 border-b border-brand-blue/10 dark:border-white/10 flex items-center justify-between bg-luxury-white/50 dark:bg-black/50 backdrop-blur z-20">
              <span className="text-sm font-medium tracking-wide text-brand-blue dark:text-white">Protect privacy</span>
              <button 
                onClick={() => setPrivacyLevel(privacyLevel === "public" ? "protected" : "public")} 
                className={`relative w-14 h-7 rounded-full p-1 flex items-center transition-colors duration-300 flex-shrink-0 ${privacyLevel !== "public" ? "bg-green-500" : "bg-gray-300 dark:bg-white/20"}`}
              >
                <motion.div 
                  animate={{ x: privacyLevel !== "public" ? 28 : 0 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  className="w-5 h-5 rounded-full bg-white shadow-md"
                />
              </button>
            </div>

            {/* Content Area */}
            <div className="flex-1 relative w-full h-full bg-luxury-white dark:bg-[#020205]">
              <AnimatePresence mode="wait">
                {privacyLevel === "public" ? (
                  <motion.div 
                    key="shared"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="absolute inset-0 p-6 flex flex-col gap-4"
                  >
                    <div className="w-full h-full grid grid-cols-2 gap-4">
                       <div className="bg-brand-blue/5 dark:bg-white/5 rounded-2xl overflow-hidden relative group">
                          <img src="/web_image_1.png" alt="Context" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" />
                       </div>
                       <div className="grid grid-rows-2 gap-4">
                          <div className="bg-brand-gold/20 rounded-2xl overflow-hidden relative group">
                            <img src="/web_image_3.jpg" alt="Context" className="w-full h-full object-cover mix-blend-overlay opacity-60 group-hover:scale-105 transition-transform duration-700" />
                          </div>
                          <div className="bg-brand-indigo/10 rounded-2xl flex items-center justify-center p-4">
                            <p className="text-xs font-mono text-brand-blue/70 dark:text-white/70 text-center">Processing<br/>Local Inferences</p>
                          </div>
                       </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div 
                    key="hidden"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="absolute inset-0 bg-[#D2B48C]/20 dark:bg-[#D2B48C]/10 flex flex-col items-center justify-center text-center p-8"
                  >
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-brand-gold mb-6 stroke-1"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                    <p className="text-xl font-serif-editorial text-brand-blue dark:text-white">Data not shared with Rheole</p>
                    <p className="text-sm font-light text-brand-blue/70 dark:text-white/70 mt-2">we respect your privacy</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col gap-6 text-center lg:text-left">
            <h2 className="text-3xl md:text-5xl font-light font-serif-editorial text-brand-blue dark:text-white">Absolute Control.</h2>
            <p className="text-base md:text-lg font-light text-brand-blue/70 dark:text-white/70 leading-relaxed">
              You are the administrator of your digital footprint. Rheole does not monetize data, so we have no incentive to hoard it. 
              Turn off anything you don't want to share. The intelligence layer will gracefully degrade, providing the best possible recommendations using only the context you permit.
            </p>
          </div>
        </div>
    </div>
  );
};

// ==========================================
// SECTION 5: TRUST IN MOTION
// ==========================================
const TrustInMotionSection = () => {
  const nodes = ["Location", "Context", "Intelligence", "Recommendation", "User"];

  return (
    <div className="w-full py-32 px-6 overflow-hidden flex flex-col items-center justify-center border-t border-brand-blue/5 dark:border-white/5">
       <div className="text-center mb-24 max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-serif-editorial text-brand-blue dark:text-luxury-white">Trust in Motion</h2>
        <p className="text-brand-blue/70 dark:text-white/70 mt-6 font-light">Watch how raw data is seamlessly refined into personal value without ever exposing your core identity.</p>
      </div>

      <div className="relative w-full max-w-5xl h-64 flex flex-col md:flex-row items-center justify-between z-10 px-12 md:px-0">
         {/* Connecting Line */}
         <div className="absolute top-1/2 left-0 w-full h-[1px] bg-brand-blue/10 dark:bg-white/10 hidden md:block" />
         
         {/* Glowing animated line */}
         <motion.div 
           animate={{ x: ['-100%', '100%'] }}
           transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
           className="absolute top-1/2 left-0 w-1/3 h-[2px] bg-gradient-to-r from-transparent via-brand-gold to-transparent hidden md:block"
         />

         {nodes.map((node, i) => (
           <div key={i} className="relative flex flex-col items-center gap-4 z-10 my-4 md:my-0">
             <motion.div 
               animate={{ scale: [1, 1.1, 1], boxShadow: ['0 0 0px rgba(197,168,128,0)', '0 0 20px rgba(197,168,128,0.3)', '0 0 0px rgba(197,168,128,0)'] }}
               transition={{ duration: 2, repeat: Infinity, delay: i * 0.5, ease: "easeInOut" }}
               className="w-16 h-16 rounded-full bg-white dark:bg-black border border-brand-blue/10 dark:border-white/10 shadow-lg flex items-center justify-center backdrop-blur-xl"
             >
               <div className="w-2 h-2 bg-brand-gold rounded-full" />
             </motion.div>
             <span className="text-xs font-mono uppercase tracking-widest text-brand-blue/70 dark:text-white/70">{node}</span>
           </div>
         ))}
      </div>
    </div>
  );
};

// ==========================================
// SECTION 6: FAQ
// ==========================================
const FAQSection = () => {
  const faqs = [
    { q: "Why does Rheole need my location?", a: "To create the ambient layer, the system needs physical context. However, it only processes this locally or through ephemeral enclaves. It never creates a permanent record of your whereabouts." },
    { q: "Can I control what I share?", a: "Absolutely. The Control Centre gives you granular, switch-level access to everything from location precision to community visibility. Turn off whatever you want, whenever you want." },
    { q: "How does AI use my information?", a: "AI relies on your context to provide relevant recommendations—like finding a quiet coffee shop near your exact position. It does not train global models on your private personal data." },
    { q: "Can I change permissions later?", a: "Yes. All permissions are reversible instantly. Downgrading a permission just means the intelligence layer becomes slightly less specific, gracefully degrading the experience." },
    { q: "What happens if I disable location?", a: "Rheole will rely on manual inputs or broad area selections (like a city) to offer recommendations, ensuring you still get value without sharing live coordinates." }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="w-full py-32 px-6 lg:px-24 bg-brand-blue/5 dark:bg-[#020205]">
      <div className="max-w-3xl mx-auto flex flex-col gap-16">
        <h2 className="text-3xl md:text-5xl font-serif-editorial text-brand-blue dark:text-luxury-white text-center">Clarity over Complexity.</h2>
        
        <div className="flex flex-col gap-6">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className="bg-white dark:bg-white/5 border border-brand-blue/5 dark:border-white/5 rounded-3xl p-6 md:p-8 cursor-pointer hover:shadow-lg transition-shadow duration-300"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <h3 className="text-lg font-medium text-brand-blue dark:text-white">{faq.q}</h3>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, marginTop: 0 }}
                    animate={{ opacity: 1, height: 'auto', marginTop: 16 }}
                    exit={{ opacity: 0, height: 0, marginTop: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="text-brand-blue/70 dark:text-white/70 font-light leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ==========================================
// SECTION 7: CLOSING EXPERIENCE
// ==========================================
const ClosingSection = () => {
  return (
    <div className="w-full min-h-[70vh] flex flex-col items-center justify-center px-6 text-center border-t border-brand-blue/5 dark:border-white/5">
      <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif-editorial text-brand-blue dark:text-luxury-white max-w-4xl leading-tight">
        Designed to understand your world.<br/>
        <span className="italic text-brand-gold">Built to respect it.</span>
      </h2>
      <p className="mt-8 text-lg font-light text-brand-blue/70 dark:text-white/70 max-w-xl mx-auto">
        The most intelligent experiences are the ones that feel effortless, transparent and trustworthy.
      </p>
      
      <Link href="/founding-access" className="mt-16 px-8 py-4 bg-brand-blue dark:bg-white text-white dark:text-black rounded-full text-xs font-mono uppercase tracking-widest hover:scale-105 transition-transform duration-300 shadow-xl">
        Experience Rheole
      </Link>
    </div>
  );
};

// ==========================================
// MAIN PAGE EXPORT
// ==========================================
export default function Security() {
  const [privacyLevel, setPrivacyLevel] = useState<"public" | "protected" | "local">("protected");

  return (
    <div className="relative w-full min-h-screen bg-luxury-white dark:bg-luxury-black text-brand-blue dark:text-luxury-white overflow-hidden selection:bg-brand-gold/20">
      <main className="relative z-10 w-full flex flex-col">
        <HeroSection />
        <DataMovesSection />
        <TrustPrinciplesSection />
        <ControlCentreSection privacyLevel={privacyLevel} setPrivacyLevel={setPrivacyLevel} />
        <TrustInMotionSection />
        <FAQSection />
        <ClosingSection />
      </main>
    </div>
  );
}
