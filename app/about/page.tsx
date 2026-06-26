"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useSpring, useTransform, AnimatePresence } from "framer-motion";
import ProgressiveReveal from "@/components/ProgressiveReveal";
import InteractiveEcosystemDemo from "@/components/InteractiveEcosystemDemo";
import ContextDemoAnimation from "@/components/ContextDemoAnimation";
import PrivacyTogglesDemo from "@/components/PrivacyTogglesDemo";

// Types
type Chapter = {
  id: string;
  number: string;
  title: string;
  content: React.ReactNode;
  visual: React.ReactNode;
};

const chapters: Chapter[] = [
  {
    id: "chapter-01",
    number: "01",
    title: "Why Rheole Exists",
    content: (
      <>
        <p className="text-xl md:text-2xl font-light leading-relaxed">
          We are surrounded by information, yet completely disconnected from what matters nearby.
        </p>
        <p className="text-lg text-brand-blue/60 dark:text-white/60 font-light leading-relaxed mt-6">
          We built the internet to connect the world, but in doing so, we built interfaces that pull our gaze away from our physical surroundings. We sit in crowded rooms, staring at screens, entirely unaware of the invisible opportunities passing us by.
        </p>
      </>
    ),
    visual: (
      <div className="relative w-full aspect-square rounded-[40px] spatial-glass border border-brand-blue/10 dark:border-white/10 overflow-hidden flex items-center justify-center">
        <img src="/disconnected_nodes.png" alt="Disconnected Nodes" className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-50" />
        {/* Floating disconnected nodes */}
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, Math.random() * -20 - 10, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2
            }}
            className="absolute w-2 h-2 rounded-full bg-brand-blue dark:bg-white"
            style={{
              top: `${20 + Math.random() * 60}%`,
              left: `${20 + Math.random() * 60}%`,
            }}
          />
        ))}
        {/* Subtle connecting signals */}
        <motion.div
          animate={{ scale: [1, 1.5, 1], opacity: [0, 0.1, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute w-1/2 h-1/2 rounded-full border border-brand-gold/30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-white via-transparent to-transparent dark:from-luxury-black opacity-80" />
      </div>
    )
  },
  {
    id: "chapter-02",
    number: "02",
    title: "The Problem with Today's Digital World",
    content: (
      <>
        <p className="text-xl md:text-2xl font-light leading-relaxed">
          Today's digital experiences understand destinations. They rarely understand context.
        </p>
        <p className="text-lg text-brand-blue/60 dark:text-white/60 font-light leading-relaxed mt-6">
          Look at your phone. Your maps, your messages, your events, your communities, and your recommendations all live inside separate, isolated silos. They don't talk to each other. They don't know where you are or what you need right now.
        </p>
      </>
    ),
    visual: <InteractiveEcosystemDemo />
  },
  {
    id: "chapter-03",
    number: "03",
    title: "The Missing Intelligence Layer",
    content: (
      <>
        <p className="text-xl md:text-2xl font-light leading-relaxed">
          Everything becomes connected through one living intelligence layer.
        </p>
        <p className="text-lg text-brand-blue/60 dark:text-white/60 font-light leading-relaxed mt-6">
          Rheole isn't just another application to check. It's an underlying fabric. It takes the disparate threads of people, places, events, and local knowledge, and weaves them together instantly. It makes the invisible visible.
        </p>
      </>
    ),
    visual: (
      <div className="relative w-full aspect-square rounded-[40px] spatial-glass border border-brand-gold/20 overflow-hidden flex items-center justify-center">
        <img src="/intelligence_layer.png" alt="Intelligence Layer" className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-50" />
        <svg className="absolute inset-0 w-full h-full opacity-30">
          <motion.path
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            d="M 20 50 Q 50 10 80 50 T 140 50"
            fill="none"
            stroke="#C5A880"
            strokeWidth="2"
          />
          <motion.path
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
            d="M 20 80 Q 50 40 80 80 T 140 80"
            fill="none"
            stroke="#4F46E5"
            strokeWidth="1"
          />
        </svg>
        <div className="relative z-10 w-24 h-24 rounded-full border border-brand-gold/50 flex items-center justify-center bg-luxury-white/50 dark:bg-luxury-black/50 backdrop-blur-md shadow-[0_0_50px_rgba(197,168,128,0.2)]">
          <span className="text-xs uppercase tracking-widest font-mono text-brand-gold">Rheole</span>
        </div>
      </div>
    )
  },
  {
    id: "chapter-04",
    number: "04",
    title: "Understanding Human Context",
    content: (
      <>
        <p className="text-xl md:text-2xl font-light leading-relaxed">
          Ambient intelligence, without the chatbox.
        </p>
        <p className="text-lg text-brand-blue/60 dark:text-white/60 font-light leading-relaxed mt-6">
          We don't expect you to formulate perfect prompts. Real life isn't a search bar. Rheole understands human scenarios naturally. Whether you're hungry, bored, new in town, or looking to meet founders—it anticipates your needs based on time, location, and the rhythm of the city.
        </p>
      </>
    ),
    visual: <ContextDemoAnimation />
  },
  {
    id: "chapter-05",
    number: "05",
    title: "Communities, Places & Moments",
    content: (
      <>
        <p className="text-xl md:text-2xl font-light leading-relaxed">
          The interface overlays subtle spatial intelligence without overwhelming the imagery.
        </p>
        <p className="text-lg text-brand-blue/60 dark:text-white/60 font-light leading-relaxed mt-6">
          We want you to look up, not down. Rheole brings local communities, events, and meaningful conversations to the surface exactly when you are near them.
        </p>
      </>
    ),
    visual: (
      <div className="relative w-full aspect-[4/5] md:aspect-square rounded-[40px] overflow-hidden group">
        <img src="/web_image_4.jpg" alt="Local Discovery" className="absolute inset-0 w-full h-full object-cover mix-blend-overlay transition-all duration-[2s] scale-105 group-hover:scale-100" />
        <div className="absolute inset-0 bg-brand-blue/10 mix-blend-overlay" />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="w-32 h-32 rounded-full border border-white/30 backdrop-blur-sm flex items-center justify-center"
          >
            <span className="text-[10px] text-white uppercase tracking-widest font-mono">20m Away</span>
          </motion.div>
        </div>
      </div>
    )
  },
  {
    id: "chapter-06",
    number: "06",
    title: "AI That Understands the Real World",
    content: (
      <>
        <p className="text-xl md:text-2xl font-light leading-relaxed">
          AI becomes quieter as it becomes smarter.
        </p>
        <p className="text-lg text-brand-blue/60 dark:text-white/60 font-light leading-relaxed mt-6">
          Intelligence shouldn't scream for your attention. It should process intent, context, and nearby relevance silently in the background. Rheole's AI adapts to you perfectly, providing ambient recommendations that feel inevitable rather than intrusive.
        </p>
      </>
    ),
    visual: (
      <div className="relative w-full aspect-square rounded-[40px] overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 flex items-center justify-center">
          {[1, 2, 3].map((ring) => (
            <motion.div
              key={ring}
              animate={{ scale: [1, 2], opacity: [0.5, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: ring * 1.3, ease: "linear" }}
              className="absolute w-24 h-24 rounded-full border border-brand-indigo/30"
            />
          ))}
          <div className="z-10 bg-brand-indigo p-4 rounded-full shadow-[0_0_30px_rgba(79,70,229,0.5)]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
          </div>
        </div>
      </div>
    )
  },
  {
    id: "chapter-07",
    number: "07",
    title: "Designing for Trust, Privacy & Presence",
    content: (
      <>
        <p className="text-xl md:text-2xl font-light leading-relaxed">
          Private by default. User ownership.
        </p>
        <p className="text-lg text-brand-blue/60 dark:text-white/60 font-light leading-relaxed mt-6">
          Trust is demonstrated, not claimed. Every interaction within Rheole is built on granular permissions, location control, and encrypted communication. You own your footprint.
        </p>
      </>
    ),
    visual: <PrivacyTogglesDemo />
  },
  {
    id: "chapter-08",
    number: "08",
    title: "The Future We Are Building",
    content: (
      <>
        <p className="text-xl md:text-2xl font-light leading-relaxed">
          The interface gradually expands beyond today's smartphones.
        </p>
        <p className="text-lg text-brand-blue/60 dark:text-white/60 font-light leading-relaxed mt-6 mb-12">
          From discovery to communities, navigation to AI, moving steadily toward ambient spatial intelligence. Rheole is building for a future of wearables, vehicles, and devices yet to be invented.
        </p>
        <p className="text-3xl md:text-4xl lg:text-5xl font-light font-serif-editorial text-brand-blue dark:text-white">
          The Pulse of Your World.
        </p>
      </>
    ),
    visual: (
      <div className="relative w-full aspect-square rounded-[40px] overflow-hidden flex flex-col items-center justify-center bg-luxury-black text-luxury-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(197,168,128,0.1),transparent_70%)]" />
        <div className="z-10 flex flex-col items-center text-center">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="w-40 h-40 border border-brand-gold/30 border-dashed rounded-full flex items-center justify-center relative"
          >
            <div className="w-20 h-20 border border-white/20 rounded-full flex items-center justify-center">
              <span className="text-[10px] uppercase tracking-[0.4em] font-mono text-brand-gold">OS</span>
            </div>
          </motion.div>
        </div>
      </div>
    )
  }
];

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeChapter, setActiveChapter] = useState(chapters[0].id);

  // Global scroll tracking
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <div className="relative w-full min-h-screen bg-luxury-white dark:bg-luxury-black text-brand-blue dark:text-luxury-white font-sans selection:bg-brand-gold/20">
      
      {/* Top Reading Progress Bar (Mobile mostly, but exists globally) */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-brand-gold origin-left z-50" style={{ scaleX }} />

      <div className="max-w-[1600px] mx-auto w-full flex flex-col lg:flex-row relative">
        
        {/* LEFT COLUMN: Chapter Indicator & Progress */}
        <aside className="hidden lg:flex w-1/5 flex-col sticky top-0 h-screen py-32 pl-12 pr-8 border-r border-brand-blue/5 dark:border-white/5">
          <div className="flex-1">
            <span className="text-[10px] uppercase tracking-[0.4em] font-mono text-brand-gold mb-4 block">Chapter</span>
            <AnimatePresence mode="wait">
              <motion.h2 
                key={activeChapter}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="text-6xl lg:text-8xl font-light font-serif-editorial text-brand-blue/20 dark:text-white/20"
              >
                {chapters.find(c => c.id === activeChapter)?.number || "01"}
              </motion.h2>
            </AnimatePresence>
          </div>
          <div className="flex flex-col gap-4 mt-auto">
            <span className="text-[10px] uppercase tracking-widest font-mono text-brand-blue/40 dark:text-white/40">Reading Progress</span>
            <div className="h-40 w-[1px] bg-brand-blue/10 dark:bg-white/10 relative">
              <motion.div 
                className="absolute top-0 left-0 w-[2px] -ml-[0.5px] bg-brand-gold" 
                style={{ height: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }}
              />
            </div>
          </div>
        </aside>

        {/* CENTER COLUMN: Editorial Content */}
        <main ref={containerRef} className="w-full lg:w-3/5 flex flex-col px-6 md:px-16 pt-32 pb-40 gap-32 md:gap-48 relative z-10">
          
          <div className="flex flex-col gap-6 text-center lg:text-left mb-16 lg:mb-32 pt-16">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light font-serif-editorial tracking-tight">
              The Story of <br/><span className="italic text-brand-gold">Intelligence.</span>
            </h1>
          </div>

          {chapters.map((chapter) => (
            <motion.section 
              key={chapter.id}
              id={chapter.id}
              onViewportEnter={() => setActiveChapter(chapter.id)}
              viewport={{ amount: 0.4, margin: "-100px" }}
              className="flex flex-col gap-12 group scroll-mt-32"
            >
              <div className="flex flex-col gap-4">
                <span className="lg:hidden text-[10px] uppercase tracking-[0.4em] font-mono text-brand-gold block">
                  Chapter {chapter.number}
                </span>
                <h2 className="text-3xl md:text-5xl font-light font-serif-editorial tracking-tight text-brand-blue dark:text-white group-hover:text-brand-gold transition-colors duration-500">
                  {chapter.title}
                </h2>
              </div>
              
              <div className="w-full">
                {chapter.visual}
              </div>

              <div className="w-full max-w-2xl mx-auto lg:mx-0">
                {chapter.content}
              </div>
            </motion.section>
          ))}

          {/* Outro */}
          <section className="pt-32 pb-16 flex flex-col items-center text-center gap-10">
            <h2 className="text-4xl md:text-6xl font-light font-serif-editorial">
              Ready to <span className="italic text-brand-gold">experience</span> it?
            </h2>
            <a 
              href="/founding-access" 
              className="px-10 py-5 bg-brand-blue dark:bg-white text-white dark:text-brand-blue rounded-full text-xs font-semibold uppercase tracking-widest hover:scale-105 transition-transform"
            >
              Join Founding Access
            </a>
          </section>

        </main>

        {/* RIGHT COLUMN: Table of Contents */}
        <aside className="hidden lg:flex w-1/5 flex-col sticky top-0 h-screen py-32 pr-12 pl-8 border-l border-brand-blue/5 dark:border-white/5">
          <span className="text-[10px] uppercase tracking-[0.4em] font-mono text-brand-blue/40 dark:text-white/40 mb-8 block">Index</span>
          <nav className="flex flex-col gap-6">
            {chapters.map((c) => (
              <a 
                key={c.id} 
                href={`#${c.id}`}
                className={`text-xs uppercase tracking-widest transition-all duration-300 ${
                  activeChapter === c.id 
                    ? "text-brand-gold font-medium translate-x-2" 
                    : "text-brand-blue/30 dark:text-white/30 hover:text-brand-blue dark:hover:text-white"
                }`}
              >
                {c.number}. {c.title}
              </a>
            ))}
          </nav>

        </aside>

      </div>
    </div>
  );
}
