"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TermSection {
  id: string;
  title: string;
  content: string;
}

export default function Terms() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeSection, setActiveSection] = useState("terms-use");

  const sections: TermSection[] = [
    {
      id: "terms-use",
      title: "1. Terms of Use",
      content: "By accessing the Rheole platform, you agree to interface with physical surroundings respectfully and in compliance with local spatial laws. Users are solely responsible for interactions initiated through spatial coordinates."
    },
    {
      id: "network-integrity",
      title: "2. Platform Network Integrity",
      content: "You agree not to deploy spoofed coordinates, automated spatial bots, or sybil attacks against decentralized node registries. Violations will result in permanent device-key blacklisting from client peer relays."
    },
    {
      id: "liability",
      title: "3. Limitation of Liability",
      content: "Rheole serves as an ambient registry connecting real-world nodes. We assume no liability for the accuracy of local event coordinates or safety parameters during real-world meetups. Use spatial judgment."
    }
  ];

  const filteredSections = sections.filter(
    (sec) =>
      sec.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sec.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as const },
  };

  return (
    <div className="w-full min-h-screen py-32 px-6 md:px-12 max-w-5xl mx-auto flex flex-col gap-16 md:gap-24 font-sans selection:bg-brand-gold/20">
      {/* Title */}
      <motion.div {...fadeInUp} className="flex flex-col gap-4 border-b border-brand-blue/15 dark:border-luxury-white/10 pb-8">
        <h1 className="text-4xl md:text-6xl font-light tracking-wide uppercase text-brand-blue dark:text-luxury-white font-serif-editorial">
          Terms of Service
        </h1>
        <p className="text-[10px] tracking-widest uppercase text-brand-gold font-semibold">
          Last updated: June 19, 2026
        </p>
      </motion.div>

      {/* Main Grid: Sidebar + Content */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Sticky Sidebar Outline (Cols 4) */}
        <aside className="lg:col-span-4 sticky top-28 flex flex-col gap-6">
          {/* Search Box */}
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search sections..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full text-xs py-3 px-4 rounded-xl bg-brand-blue/[0.02] dark:bg-luxury-white/[0.01] border border-brand-blue/10 dark:border-luxury-white/5 focus:outline-none focus:border-brand-gold transition-all duration-300 text-brand-blue dark:text-luxury-white"
            />
          </div>

          <nav className="flex flex-col gap-2.5">
            <span className="text-[9px] uppercase tracking-widest text-brand-blue/40 dark:text-luxury-white/40 font-semibold mb-1">
              Table of Contents
            </span>
            {sections.map((sec) => {
              const isActive = activeSection === sec.id;
              return (
                <button
                  key={sec.id}
                  onClick={() => scrollToSection(sec.id)}
                  className={`text-left text-xs uppercase tracking-wider py-1.5 transition-all duration-300 ${
                    isActive
                      ? "text-brand-gold font-medium border-l-2 border-brand-gold pl-3"
                      : "text-brand-blue/60 dark:text-luxury-white/60 hover:text-brand-blue dark:hover:text-luxury-white border-l border-brand-blue/10 dark:border-luxury-white/10 pl-3"
                  }`}
                >
                  {sec.title}
                </button>
              );
            })}
          </nav>
        </aside>

        {/* Content Panel (Cols 8) */}
        <div className="lg:col-span-8 flex flex-col gap-12 text-sm leading-relaxed text-brand-blue/70 dark:text-luxury-white/70 font-light">
          <AnimatePresence mode="wait">
            {filteredSections.length > 0 ? (
              filteredSections.map((sec) => (
                <section
                  key={sec.id}
                  id={sec.id}
                  className="flex flex-col gap-4 border-b border-brand-blue/5 dark:border-luxury-white/5 pb-8 scroll-mt-32"
                >
                  <h2 className="text-lg font-medium text-brand-blue dark:text-luxury-white uppercase tracking-wider">
                    {sec.title}
                  </h2>
                  <p className="font-sans leading-relaxed text-brand-blue/75 dark:text-luxury-white/75">
                    {sec.content}
                  </p>
                </section>
              ))
            ) : (
              <p className="text-center text-xs uppercase tracking-widest text-brand-blue/40 dark:text-luxury-white/40 py-12">
                No matching sections found.
              </p>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
