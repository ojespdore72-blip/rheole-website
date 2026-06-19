"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PrivacySection {
  id: string;
  title: string;
  desc: React.ReactNode;
}

interface GlossaryItem {
  term: string;
  definition: string;
}

export default function Privacy() {
  const [activeSection, setActiveSection] = useState("what-we-collect");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeGlossaryTerm, setActiveGlossaryTerm] = useState<string | null>(null);

  const sections: PrivacySection[] = [
    {
      id: "what-we-collect",
      title: "What We Collect",
      desc: (
        <div className="flex flex-col gap-3 font-sans">
          <p>Depending on how you use Rheole, information may include:</p>
          <div className="grid grid-cols-2 gap-2 text-xs">
            {[
              "Account details",
              "Anonymized profile hashes",
              "Spatial coordinates",
              "Community node records",
              "Registered local events",
              "Decentralized mesh headers",
              "Search queries",
              "Hardware identifiers",
              "Platform event logs"
            ].map((item, idx) => (
              <div key={idx} className="border border-brand-blue/5 dark:border-luxury-white/5 rounded-lg p-2.5 bg-brand-blue/[0.01] dark:bg-luxury-white/[0.01] flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-brand-gold" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: "why-we-collect",
      title: "Why We Collect Information",
      desc: (
        <div className="flex flex-col gap-3 font-sans">
          <p>Information helps us provide:</p>
          <div className="grid grid-cols-2 gap-2 text-xs">
            {[
              "Relevant community mapping",
              "Bespoke local discovery",
              "Event calendar validation",
              "Intelligent routing vectors",
              "Decentralized node status",
              "Abuse & sybil detection",
              "Spatial engine improvements",
              "Continuous security audits"
            ].map((item, idx) => (
              <div key={idx} className="border border-brand-blue/5 dark:border-luxury-white/5 rounded-lg p-2.5 bg-brand-blue/[0.01] dark:bg-luxury-white/[0.01] flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-brand-gold" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: "location-info",
      title: "Location Information",
      desc: (
        <div className="flex flex-col gap-3 font-sans">
          <p>
            Location is an important part of the Rheole experience. Proximity processing powers local discovery, node matches, and traffic calculations.
          </p>
          <div className="border-l-2 border-brand-gold pl-4 italic text-brand-blue/80 dark:text-luxury-white/80 my-2">
            Users maintain full granularity control. GPS coordinates are converted immediately on-device into geohash coordinates, keeping literal lat/long locations out of central storage servers.
          </div>
        </div>
      )
    },
    {
      id: "messaging-privacy",
      title: "Messages & Communications",
      desc: "Private communication is routed peer-to-peer across decentralized relays. The payload is encrypted using hardware-backed enclaves and automatically decays from all temporary node nodes within 24 hours of session inactivity."
    },
    {
      id: "user-control",
      title: "Your Control",
      desc: (
        <div className="flex flex-col gap-2 font-sans">
          <p>
            We believe you should remain sovereign over your physical presence. You have the right to request access to records, edit profile hashes, flush cached data, or request permanent deletion of database tags by contacting:
          </p>
          <a href="mailto:privacy@rheole.com" className="text-brand-gold hover:underline font-semibold mt-1">
            privacy@rheole.com
          </a>
        </div>
      )
    },
    {
      id: "data-sharing",
      title: "Data Sharing Principles",
      desc: "Rheole does not sell or lease personal information. Period. Spatial logs are cached client-side and only shared with infrastructure relays required to transmit messages or map traffic clusters."
    }
  ];

  const glossary: GlossaryItem[] = [
    {
      term: "Client-Side Geohashing",
      definition: "Converting precise GPS coordinates into broader alphanumeric grid areas on the device before transmission."
    },
    {
      term: "Ephemeral Decay",
      definition: "The automatic, permanent deletion of temporary messaging payloads and active node records within 24 hours of inactivity."
    },
    {
      term: "Mesh Routing",
      definition: "Transmitting communications dynamically across nearby peer nodes rather than routing through a single central server."
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const container = document.documentElement || document.body;
      const scrolled = container.scrollTop;
      const total = container.scrollHeight - container.clientHeight;
      setScrollProgress(total > 0 ? (scrolled / total) * 100 : 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-[2px] bg-brand-blue/5 dark:bg-luxury-white/5 z-50">
        <motion.div 
          className="h-full bg-brand-gold"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Title */}
      <motion.div {...fadeInUp} className="flex flex-col gap-4 border-b border-brand-blue/15 dark:border-luxury-white/10 pb-8">
        <h1 className="text-4xl md:text-6xl font-light tracking-wide uppercase text-brand-blue dark:text-luxury-white font-serif-editorial">
          Privacy Policy
        </h1>
        <p className="text-[10px] tracking-widest uppercase text-brand-gold font-semibold">
          Your presence. Your coordinates. Your ownership.
        </p>
      </motion.div>

      {/* Main Grid: Sidebar + Content */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Sticky Sidebar (Cols 4) */}
        <aside className="lg:col-span-4 sticky top-28 flex flex-col gap-8">
          <nav className="flex flex-col gap-2.5">
            <span className="text-[9px] uppercase tracking-widest text-brand-blue/40 dark:text-luxury-white/40 font-semibold mb-1">
              Privacy Structure
            </span>
            {sections.map((sec) => {
              const isActive = activeSection === sec.id;
              return (
                <button
                  key={sec.id}
                  onClick={() => scrollToSection(sec.id)}
                  className={`text-left text-xs uppercase tracking-wider py-1.5 transition-all duration-300 ${
                    isActive
                      ? "text-brand-gold font-semibold border-l-2 border-brand-gold pl-3"
                      : "text-brand-blue/60 dark:text-luxury-white/60 hover:text-brand-blue dark:hover:text-luxury-white border-l border-brand-blue/10 dark:border-luxury-white/10 pl-3"
                  }`}
                >
                  {sec.title}
                </button>
              );
            })}
          </nav>

          {/* Interactive Glossary */}
          <div className="border border-brand-blue/10 dark:border-luxury-white/10 rounded-xl p-4 bg-brand-blue/[0.01] dark:bg-luxury-white/[0.01] flex flex-col gap-3">
            <span className="text-[9px] uppercase tracking-widest text-brand-gold font-semibold">
              Glossary of Principles
            </span>
            <div className="flex flex-col gap-2">
              {glossary.map((item, idx) => (
                <div key={idx} className="flex flex-col gap-1 text-left">
                  <button
                    onClick={() => setActiveGlossaryTerm(activeGlossaryTerm === item.term ? null : item.term)}
                    className="text-xs font-semibold text-brand-blue dark:text-luxury-white hover:text-brand-gold text-left uppercase tracking-wider"
                  >
                    {item.term} {activeGlossaryTerm === item.term ? "−" : "+"}
                  </button>
                  <AnimatePresence>
                    {activeGlossaryTerm === item.term && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="text-[10px] text-brand-blue/60 dark:text-luxury-white/50 leading-relaxed font-light mt-1 font-sans pl-1"
                      >
                        {item.definition}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* Content Panel (Cols 8) */}
        <div className="lg:col-span-8 flex flex-col gap-12 text-sm leading-relaxed text-brand-blue/70 dark:text-luxury-white/70 font-light">
          {sections.map((sec) => (
            <section
              key={sec.id}
              id={sec.id}
              className="flex flex-col gap-4 border-b border-brand-blue/5 dark:border-luxury-white/5 pb-8 scroll-mt-32"
            >
              <h2 className="text-lg font-medium text-brand-blue dark:text-luxury-white uppercase tracking-wider">
                {sec.title}
              </h2>
              <div className="font-sans leading-relaxed text-brand-blue/75 dark:text-luxury-white/75">
                {sec.desc}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
