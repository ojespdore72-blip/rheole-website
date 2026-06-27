"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

// ---------------------------------------------------------
// Helper Components
// ---------------------------------------------------------

const CHAPTERS = [
  { id: "fragmented-world", title: "The Fragmented World" },
  { id: "contextual-void", title: "Contextual Void" },
  { id: "understanding-over-search", title: "Understanding over Search" },
  { id: "quiet-ai", title: "Quiet AI" },
  { id: "invisible-infrastructure", title: "Invisible Infrastructure" },
  { id: "presence", title: "Presence" },
  { id: "privacy", title: "Privacy by Design" },
  { id: "contextual-intelligence", title: "Contextual Intelligence" },
  { id: "intelligence-layer", title: "The Intelligence Layer" },
  { id: "pulse", title: "The Pulse" },
];

const TableOfContents = ({ activeIndex, isAtBottom }: { activeIndex: number, isAtBottom: boolean }) => {
  return (
    <div 
      className={`fixed left-0 top-0 h-screen z-50 hidden lg:flex flex-col justify-center w-96 pl-12 transition-all duration-1000 pointer-events-none ${activeIndex === 0 || isAtBottom ? 'opacity-0 -translate-x-10' : 'opacity-100 translate-x-0'}`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent pointer-events-none" />
      <div className="relative z-10 h-[70vh] flex flex-col justify-between border-l border-white/10 pl-8 pointer-events-auto">
        <motion.div 
          className="absolute left-[-1px] w-[2px] bg-brand-gold transition-all duration-500 ease-out shadow-[0_0_15px_rgba(197,168,128,0.8)]"
          style={{ 
            top: `calc(${(Math.max(0, activeIndex - 1) / Math.max(1, CHAPTERS.length - 1)) * 100}%)`,
            height: '24px',
            transform: 'translateY(-50%)'
          }}
        />
        {CHAPTERS.map((chap, i) => (
          <div key={chap.id} className="group flex flex-col justify-center relative">
             <Link 
               href={`#${chap.id}`} 
               className={`flex items-center gap-6 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${activeIndex === i + 1 ? 'opacity-100 translate-x-3' : 'opacity-40 hover:opacity-100 hover:translate-x-1'}`}
             >
               <span className={`text-[10px] font-mono tracking-[0.2em] transition-colors duration-300 ${activeIndex === i + 1 ? 'text-brand-gold' : 'text-gray-500'}`}>
                 {String(i + 1).padStart(2, '0')}
               </span>
               <span className={`text-[11px] uppercase tracking-[0.2em] transition-all duration-500 ${activeIndex === i + 1 ? 'text-white font-medium drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]' : 'text-gray-400'}`}>
                 {chap.title}
               </span>
             </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

const ReadMoreBtn = ({ href }: { href: string }) => (
  <Link href={href} className="mt-8 group flex items-center gap-4">
    <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white transition-colors duration-500">
      <span className="text-white group-hover:text-black transform transition-transform duration-500 group-hover:translate-x-1">&rarr;</span>
    </div>
    <span className="text-xs font-mono uppercase tracking-widest text-gray-400 group-hover:text-white transition-colors duration-500">
      Read More
    </span>
  </Link>
);

// ---------------------------------------------------------
// Exhibits
// ---------------------------------------------------------

const Exhibit01 = () => (
  <div id="fragmented-world" className="min-h-[100dvh] pt-28 pb-12 md:pt-0 md:h-screen w-full flex items-center justify-center sticky top-0 relative overflow-hidden px-8 lg:pl-80 bg-[#0a0f1c] text-white">
    <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
      <div className="flex flex-col gap-6 z-10">
        <span className="text-brand-gold text-xs font-mono tracking-widest uppercase">Exhibit 01</span>
        <h2 className="text-4xl md:text-6xl font-serif-editorial leading-tight text-white/90">Why the world feels fragmented.</h2>
        <p className="text-lg md:text-xl text-gray-400 font-light max-w-md">
          We navigate our lives through dozens of disconnected silos. Information is everywhere, but understanding is scattered.
        </p>
        <ReadMoreBtn href="/manifesto/fragmented-world" />
      </div>
      <div className="relative h-64 lg:h-[500px] w-full rounded-xl overflow-hidden group border border-white/5 shadow-2xl">
        <Image src="/glass_network_1782537362606.png" alt="Fragmented" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
      </div>
    </div>
  </div>
);

const Exhibit02 = () => (
  <div id="contextual-void" className="min-h-[100dvh] pt-28 pb-12 md:pt-0 md:h-screen w-full flex items-center justify-center sticky top-0 relative overflow-hidden px-8 lg:pl-80 bg-[#110c14] text-white">
    <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
       <div className="relative h-64 lg:h-[500px] w-full rounded-xl overflow-hidden group border border-white/5 shadow-2xl order-2 lg:order-1">
        <Image src="/obsidian_ai_1782537375889.png" alt="Context" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-transparent to-black/30" />
      </div>
      <div className="flex flex-col gap-6 z-10 order-1 lg:order-2">
        <span className="text-brand-gold text-xs font-mono tracking-widest uppercase">Exhibit 02</span>
        <h2 className="text-4xl md:text-6xl font-serif-editorial leading-tight text-white/90">Information already exists.<br/>Context does not.</h2>
        <p className="text-lg md:text-xl text-gray-400 font-light max-w-md">
          The world doesn't need another search result. It needs the connective tissue that turns raw data into meaning.
        </p>
        <ReadMoreBtn href="/manifesto/contextual-void" />
      </div>
    </div>
  </div>
);

const Exhibit03 = () => (
  <div id="understanding-over-search" className="min-h-[100dvh] pt-28 pb-12 md:pt-0 md:h-screen w-full flex items-center justify-center sticky top-0 relative overflow-hidden px-8 lg:pl-80 bg-[#0b131a] text-white">
    <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
      <div className="flex flex-col gap-6 z-10">
        <span className="text-brand-gold text-xs font-mono tracking-widest uppercase">Exhibit 03</span>
        <h2 className="text-4xl md:text-6xl font-serif-editorial leading-tight text-white/90">People shouldn't search.<br/>The world should understand them.</h2>
        <p className="text-lg md:text-xl text-gray-400 font-light max-w-md">
           We are moving from explicit querying to implicit understanding, anticipating needs before they are articulated.
        </p>
        <ReadMoreBtn href="/manifesto/understanding-over-search" />
      </div>
      <div className="relative h-64 lg:h-[500px] w-full rounded-xl overflow-hidden group border border-white/5 shadow-2xl">
        <Image src="/contextual_landscape_1782537401766.png" alt="Landscape" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      </div>
    </div>
  </div>
);

const Exhibit04 = () => (
  <div id="quiet-ai" className="min-h-[100dvh] pt-28 pb-12 md:pt-0 md:h-screen w-full flex items-center justify-center sticky top-0 relative overflow-hidden px-8 lg:pl-80 bg-[#0f1012] text-white">
    <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
       <div className="relative h-64 lg:h-[500px] w-full rounded-xl overflow-hidden group border border-white/5 shadow-2xl order-2 lg:order-1">
        <Image src="/obsidian_ai_1782537375889.png" alt="Quiet AI" fill className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80" />
      </div>
      <div className="flex flex-col gap-6 z-10 order-1 lg:order-2">
        <span className="text-brand-gold text-xs font-mono tracking-widest uppercase">Exhibit 04</span>
        <h2 className="text-4xl md:text-6xl font-serif-editorial leading-tight text-white/90">AI should become quieter,<br/>not louder.</h2>
        <p className="text-lg md:text-xl text-gray-400 font-light max-w-md">
          True intelligence fades into the background, operating silently to orchestrate your world seamlessly.
        </p>
        <ReadMoreBtn href="/manifesto/quiet-ai" />
      </div>
    </div>
  </div>
);

const Exhibit05 = () => (
  <div id="invisible-infrastructure" className="min-h-[100dvh] pt-28 pb-12 md:pt-0 md:h-screen w-full flex items-center justify-center sticky top-0 relative overflow-hidden px-8 lg:pl-80 bg-[#1c1815] text-white">
    <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
      <div className="flex flex-col gap-6 z-10">
        <span className="text-brand-gold text-xs font-mono tracking-widest uppercase">Exhibit 05</span>
        <h2 className="text-4xl md:text-6xl font-serif-editorial leading-tight text-white/90">Communities are invisible infrastructure.</h2>
        <p className="text-lg md:text-xl text-gray-400 font-light max-w-md">
          The most valuable networks aren't digital feeds. They are the unseen human layers placed over the physical world.
        </p>
        <ReadMoreBtn href="/manifesto/invisible-infrastructure" />
      </div>
      <div className="relative h-64 lg:h-[500px] w-full rounded-xl overflow-hidden group border border-white/5 shadow-2xl">
        <Image src="/urban_connections_1782537390550.png" alt="Infrastructure" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent" />
      </div>
    </div>
  </div>
);

const Exhibit06 = () => (
  <div id="presence" className="min-h-[100dvh] pt-28 pb-12 md:pt-0 md:h-screen w-full flex items-center justify-center sticky top-0 relative overflow-hidden px-8 lg:pl-80 bg-[#0b1715] text-white">
    <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
       <div className="relative h-64 lg:h-[500px] w-full rounded-xl overflow-hidden group border border-white/5 shadow-2xl order-2 lg:order-1">
        <Image src="/glass_network_1782537362606.png" alt="Presence" fill className="object-cover transition-transform duration-1000 group-hover:scale-105 grayscale hover:grayscale-0" />
      </div>
      <div className="flex flex-col gap-6 z-10 order-1 lg:order-2">
        <span className="text-brand-gold text-xs font-mono tracking-widest uppercase">Exhibit 06</span>
        <h2 className="text-4xl md:text-6xl font-serif-editorial leading-tight text-white/90">Presence is more valuable<br/>than attention.</h2>
        <p className="text-lg md:text-xl text-gray-400 font-light max-w-md">
           Technology should not be a portal to escape reality; it should be a lens to enhance your presence within it.
        </p>
        <ReadMoreBtn href="/manifesto/presence" />
      </div>
    </div>
  </div>
);

const Exhibit07 = () => (
  <div id="privacy" className="min-h-[100dvh] pt-28 pb-12 md:pt-0 md:h-screen w-full flex items-center justify-center sticky top-0 relative overflow-hidden px-8 lg:pl-80 bg-[#111111] text-white">
    <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
      <div className="flex flex-col gap-6 z-10">
        <span className="text-brand-gold text-xs font-mono tracking-widest uppercase">Exhibit 07</span>
        <h2 className="text-4xl md:text-6xl font-serif-editorial leading-tight text-white/90">Privacy is not a setting.<br/>It is a design principle.</h2>
        <p className="text-lg md:text-xl text-gray-400 font-light max-w-md">
          Trust isn't something you toggle in a menu. It is architected into the very foundation of the experience.
        </p>
        <ReadMoreBtn href="/manifesto/privacy" />
      </div>
      <div className="relative h-64 lg:h-[500px] w-full rounded-xl overflow-hidden group border border-white/5 shadow-2xl">
        <Image src="/urban_connections_1782537390550.png" alt="Privacy" fill className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-60" />
      </div>
    </div>
  </div>
);

const Exhibit08 = () => (
  <div id="contextual-intelligence" className="min-h-[100dvh] pt-28 pb-12 md:pt-0 md:h-screen w-full flex items-center justify-center sticky top-0 relative overflow-hidden px-8 lg:pl-80 bg-[#0b111e] text-white">
    <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
       <div className="relative h-64 lg:h-[500px] w-full rounded-xl overflow-hidden group border border-white/5 shadow-2xl order-2 lg:order-1">
        <Image src="/contextual_landscape_1782537401766.png" alt="Contextual Intelligence" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
      </div>
      <div className="flex flex-col gap-6 z-10 order-1 lg:order-2">
        <span className="text-brand-gold text-xs font-mono tracking-widest uppercase">Exhibit 08</span>
        <h2 className="text-4xl md:text-6xl font-serif-editorial leading-tight text-white/90">The future belongs to<br/>contextual intelligence.</h2>
        <p className="text-lg md:text-xl text-gray-400 font-light max-w-md">
          When location understands intent, the real world becomes an interface of endless opportunities.
        </p>
        <ReadMoreBtn href="/manifesto/contextual-intelligence" />
      </div>
    </div>
  </div>
);

const Exhibit09 = () => (
  <div id="intelligence-layer" className="min-h-[100dvh] pt-28 pb-12 md:pt-0 md:h-screen w-full flex items-center justify-center sticky top-0 relative overflow-hidden px-8 lg:pl-80 bg-[#14100c] text-white">
    <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
      <div className="flex flex-col gap-6 z-10">
        <span className="text-brand-gold text-xs font-mono tracking-widest uppercase">Exhibit 09</span>
        <h2 className="text-4xl md:text-6xl font-serif-editorial leading-tight text-white/90">Rheole becomes the<br/>intelligence layer.</h2>
        <p className="text-lg md:text-xl text-gray-400 font-light max-w-md">
          The connective tissue that makes the invisible visible, transforming every city into a responsive environment.
        </p>
        <ReadMoreBtn href="/manifesto/intelligence-layer" />
      </div>
      <div className="relative h-64 lg:h-[500px] w-full rounded-xl overflow-hidden group border border-white/5 shadow-2xl">
        <Image src="/glass_network_1782537362606.png" alt="Rheole" fill className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90" />
      </div>
    </div>
  </div>
);

const Exhibit10 = () => (
  <div id="pulse" className="min-h-[100dvh] pt-28 pb-12 md:pt-0 md:h-screen w-full flex items-center justify-center sticky top-0 relative overflow-hidden px-8 lg:pl-80 bg-[#050505] text-white">
    <motion.div 
      animate={{ opacity: [0.3, 0.6, 0.3] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className="absolute inset-0 z-0"
    >
       <Image src="/obsidian_ai_1782537375889.png" alt="Pulse" fill className="object-cover opacity-20" />
    </motion.div>
    
    <div className="max-w-5xl w-full flex flex-col justify-center gap-12 z-10 relative">
      <span className="text-brand-gold text-xs font-mono tracking-widest uppercase">Exhibit 10</span>
      <h2 className="text-6xl md:text-8xl font-serif-editorial leading-tight tracking-wide text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-200 to-gray-500">
        The Pulse of Your World.
      </h2>
      <p className="text-xl md:text-2xl text-gray-400 font-light max-w-xl">
        Welcome to the next era of discovery.
      </p>
      
      <div className="flex flex-col sm:flex-row items-center gap-6 mt-8">
        <Link
          href="/manifesto/pulse"
          className="group relative px-12 py-5 bg-white text-black rounded-full text-xs font-semibold uppercase tracking-widest overflow-hidden hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-shadow duration-500"
        >
          <span className="relative z-10 group-hover:text-white transition-colors duration-500">Read Final Chapter</span>
          <div className="absolute inset-0 bg-brand-gold scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
        </Link>
      </div>
    </div>
  </div>
);

// ---------------------------------------------------------
// Main Page
// ---------------------------------------------------------

export default function Manifesto() {
  const [activeExhibit, setActiveExhibit] = useState(0);
  const [isAtBottom, setIsAtBottom] = useState(false);

  // Monitor scroll to update active exhibit
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const current = Math.round(scrollTop / windowHeight);
      setActiveExhibit(current);

      const scrollPosition = scrollTop + windowHeight;
      const totalHeight = document.documentElement.scrollHeight;
      // We check if the user is within 150px of the bottom of the page
      setIsAtBottom(scrollPosition >= totalHeight - 150);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    // Call once initially to set correct state on mount
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-black text-white selection:bg-brand-gold/20">
      <TableOfContents activeIndex={activeExhibit} isAtBottom={isAtBottom} />
      
        {/* Intro sequence */}
      <div className="h-screen flex flex-col items-center justify-center relative sticky top-0 bg-black">
        <div className="absolute inset-0 z-0">
           <Image src="/glass_network_1782537362606.png" alt="Hero" fill className="object-cover opacity-10 blur-xl" />
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-center z-10"
        >
          <p className="text-brand-gold text-xs font-mono uppercase tracking-[0.5em] mb-6">A declaration</p>
          <h1 className="text-7xl md:text-[150px] font-light font-serif-editorial tracking-widest text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20">
            MANIFESTO
          </h1>
          <motion.div 
            animate={{ y: [0, 10, 0] }} 
            transition={{ duration: 2, repeat: Infinity }}
            className="mt-20 opacity-80 flex items-center justify-center"
          >
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5v14M19 12l-7 7-7-7"/>
              </svg>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Exhibits */}
      <Exhibit01 />
      <Exhibit02 />
      <Exhibit03 />
      <Exhibit04 />
      <Exhibit05 />
      <Exhibit06 />
      <Exhibit07 />
      <Exhibit08 />
      <Exhibit09 />
      <Exhibit10 />

    </div>
  );
}
