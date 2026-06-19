"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Screen {
  id: string;
  label: string;
  title: string;
  tagline: string;
  element: React.ReactNode;
}

export default function SeeMotion() {
  const [activeTab, setActiveTab] = useState("feed");

  const screens: Screen[] = [
    {
      id: "feed",
      label: "Community Feed",
      title: "Hyperlocal Node Mappings",
      tagline: "Locally anchored updates, organized organically by proximity nodes.",
      element: (
        <div className="flex flex-col gap-4 text-left font-sans text-xs w-full">
          <div className="border border-brand-blue/10 dark:border-luxury-white/10 rounded-xl p-4 bg-brand-blue/[0.02] dark:bg-luxury-white/[0.01] flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <span className="text-[9px] uppercase tracking-widest text-brand-gold font-semibold">4th Ave Circle • 1.2km</span>
              <span className="h-2 w-2 rounded-full bg-green-500 animate-ping" />
            </div>
            <p className="font-medium text-sm text-brand-blue dark:text-luxury-white">Bespoke Vinyl Listening Session</p>
            <p className="text-xs text-brand-blue/60 dark:text-luxury-white/50 leading-relaxed">
              Meeting at Horizon Sound Labs. Spinning rare ambient releases and discussing regional networks.
            </p>
            <div className="flex gap-2 mt-2 pt-2 border-t border-brand-blue/5 dark:border-luxury-white/5 text-[9px] uppercase tracking-widest text-brand-blue/40 dark:text-luxury-white/40">
              <span>18 active</span>
              <span>•</span>
              <span>2h remaining</span>
            </div>
          </div>

          <div className="border border-brand-blue/10 dark:border-luxury-white/10 rounded-xl p-4 bg-brand-blue/[0.02] dark:bg-luxury-white/[0.01] flex flex-col gap-2 opacity-65">
            <div className="flex justify-between items-center">
              <span className="text-[9px] uppercase tracking-widest text-brand-blue/40 dark:text-luxury-white/40 font-semibold">Broad St Relays • 400m</span>
            </div>
            <p className="font-medium text-sm text-brand-blue/80 dark:text-luxury-white/80">Public Art Pop-Up Installation</p>
            <p className="text-xs text-brand-blue/50 dark:text-luxury-white/40 leading-relaxed">
              Collaborative street mural assembly.
            </p>
          </div>
        </div>
      )
    },
    {
      id: "pulse",
      label: "City Pulse",
      title: "Real-Time Spatiotemporal Density",
      tagline: "Dynamic density clusters indicating active coordinates and crowd movement.",
      element: (
        <div className="flex flex-col gap-4 text-left font-sans text-xs w-full">
          <div className="border border-brand-blue/10 dark:border-luxury-white/10 rounded-xl p-4 bg-brand-blue/[0.02] dark:bg-luxury-white/[0.01] flex flex-col gap-3">
            <span className="text-[9px] uppercase tracking-widest text-brand-gold font-semibold">Live City Pulse</span>
            
            {/* Visual Mini Graph of Density */}
            <div className="flex items-end gap-1.5 h-20 w-full pt-4 border-b border-brand-blue/5 dark:border-luxury-white/5">
              {[30, 45, 20, 60, 80, 95, 55, 40, 70, 85, 90, 110, 65, 50, 45].map((height, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${(height / 120) * 100}%` }}
                  transition={{ duration: 1, delay: i * 0.05 }}
                  className={`w-full rounded-t-sm ${i === 5 || i === 11 ? "bg-brand-gold" : "bg-brand-blue/20 dark:bg-luxury-white/10"}`}
                />
              ))}
            </div>
            
            <div className="flex justify-between items-center text-[10px] text-brand-blue/60 dark:text-luxury-white/50 font-medium">
              <span>08:00 AM</span>
              <span className="text-brand-gold">PEAK DENSITY NOW</span>
              <span>08:00 PM</span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "events",
      label: "Events",
      title: "Spatial Gathering Synces",
      tagline: "Verified local events. No trackers, no ticketing ads. Just physical gatherings.",
      element: (
        <div className="flex flex-col gap-3 text-left font-sans text-xs w-full">
          <div className="border border-brand-blue/10 dark:border-luxury-white/10 rounded-xl p-4 bg-brand-blue/[0.02] dark:bg-luxury-white/[0.01] flex justify-between items-center">
            <div className="flex flex-col gap-1">
              <span className="text-[9px] uppercase tracking-widest text-brand-gold font-semibold">TONIGHT • 8:00 PM</span>
              <p className="font-semibold text-brand-blue dark:text-luxury-white">Sunset Acoustical Suite</p>
              <p className="text-[10px] text-brand-blue/50 dark:text-luxury-white/40">Highline Crest (elevation 180m)</p>
            </div>
            <span className="text-[10px] uppercase tracking-widest border border-brand-blue/20 dark:border-luxury-white/20 px-3 py-1 rounded-full font-medium text-brand-gold">
              Verified
            </span>
          </div>

          <div className="border border-brand-blue/10 dark:border-luxury-white/10 rounded-xl p-4 bg-brand-blue/[0.02] dark:bg-luxury-white/[0.01] flex justify-between items-center">
            <div className="flex flex-col gap-1">
              <span className="text-[9px] uppercase tracking-widest text-brand-blue/40 dark:text-luxury-white/40 font-semibold">TONIGHT • 11:00 PM</span>
              <p className="font-semibold text-brand-blue dark:text-luxury-white">Midnight Hack Club</p>
              <p className="text-[10px] text-brand-blue/50 dark:text-luxury-white/40">Relay Node 42</p>
            </div>
            <span className="text-[10px] uppercase tracking-widest border border-brand-blue/20 dark:border-luxury-white/20 px-3 py-1 rounded-full font-medium text-brand-blue/40 dark:text-luxury-white/40">
              Open Node
            </span>
          </div>
        </div>
      )
    },
    {
      id: "messaging",
      label: "Messaging",
      title: "Decentralized Ephemeral Chat",
      tagline: "Secure, local mesh network communications that decay naturally.",
      element: (
        <div className="flex flex-col gap-4 text-left font-sans text-xs w-full">
          <div className="border border-brand-blue/10 dark:border-luxury-white/10 rounded-xl p-4 bg-brand-blue/[0.02] dark:bg-luxury-white/[0.01] flex flex-col gap-3 h-48 justify-end">
            <div className="flex flex-col gap-1 items-start max-w-[80%]">
              <span className="text-[8px] uppercase tracking-widest text-brand-blue/40 dark:text-luxury-white/45 font-medium">Node_74a</span>
              <div className="bg-brand-blue/5 dark:bg-luxury-white/5 rounded-2xl rounded-tl-none px-3.5 py-2 text-brand-blue dark:text-luxury-white text-xs">
                Hey, is the local acoustic set starting soon?
              </div>
            </div>

            <div className="flex flex-col gap-1 items-end max-w-[80%] self-end">
              <span className="text-[8px] uppercase tracking-widest text-brand-gold font-medium">You (Anonymized)</span>
              <div className="bg-brand-gold/10 rounded-2xl rounded-tr-none px-3.5 py-2 text-brand-gold text-xs">
                Yes, soundcheck is wrapping up. Ambient lux levels are perfect.
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "routing",
      label: "Routing",
      title: "Signal-Integrated Routing Matrix",
      tagline: "Navigating paths based on weather, congestion nodes, and physical activities.",
      element: (
        <div className="flex flex-col gap-4 text-left font-sans text-xs w-full">
          <div className="border border-brand-blue/10 dark:border-luxury-white/10 rounded-xl p-4 bg-brand-blue/[0.02] dark:bg-luxury-white/[0.01] flex flex-col gap-3">
            <span className="text-[9px] uppercase tracking-widest text-brand-gold font-semibold">Active Signals Matrix</span>
            
            <div className="grid grid-cols-2 gap-2 text-[10px]">
              <div className="border border-brand-blue/5 dark:border-luxury-white/5 rounded-lg p-2.5 flex items-center justify-between">
                <span className="text-brand-blue/60 dark:text-luxury-white/40 uppercase tracking-widest text-[8px]">Weather</span>
                <span className="font-semibold text-brand-gold">12 Lux / Dry</span>
              </div>
              <div className="border border-brand-blue/5 dark:border-luxury-white/5 rounded-lg p-2.5 flex items-center justify-between">
                <span className="text-brand-blue/60 dark:text-luxury-white/40 uppercase tracking-widest text-[8px]">Congestion</span>
                <span className="font-semibold text-brand-blue dark:text-luxury-white">Avoided -14m</span>
              </div>
              <div className="border border-brand-blue/5 dark:border-luxury-white/5 rounded-lg p-2.5 flex items-center justify-between">
                <span className="text-brand-blue/60 dark:text-luxury-white/40 uppercase tracking-widest text-[8px]">Events</span>
                <span className="font-semibold text-brand-gold">Street Fair Active</span>
              </div>
              <div className="border border-brand-blue/5 dark:border-luxury-white/5 rounded-lg p-2.5 flex items-center justify-between">
                <span className="text-brand-blue/60 dark:text-luxury-white/40 uppercase tracking-widest text-[8px]">Roads</span>
                <span className="font-semibold text-brand-blue dark:text-luxury-white">Optimal Path Cache</span>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  const activeScreen = screens.find((s) => s.id === activeTab) || screens[0];

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col gap-12 items-center">
      {/* Title */}
      <div className="flex flex-col gap-4 text-center">
        <h2 className="text-2xl md:text-4xl font-light uppercase tracking-widest text-brand-blue dark:text-luxury-white font-serif-editorial">
          See Rheole in Motion
        </h2>
        <p className="text-xs uppercase tracking-widest text-brand-gold font-semibold">
          Interactive Product Demonstrations & Interface Previews
        </p>
      </div>

      {/* Grid selector + Mockup container */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mt-4">
        {/* Navigation Tabs (Cols 4) */}
        <div className="lg:col-span-4 flex flex-row lg:flex-col flex-wrap justify-center lg:justify-start gap-4">
          {screens.map((screen) => {
            const isActive = activeTab === screen.id;
            return (
              <button
                key={screen.id}
                onClick={() => setActiveTab(screen.id)}
                className={`w-auto lg:w-full text-left px-6 py-4 rounded-xl border transition-all duration-300 font-sans ${
                  isActive
                    ? "border-brand-gold bg-brand-blue/[0.02] dark:bg-luxury-white/[0.02] text-brand-gold"
                    : "border-brand-blue/5 dark:border-luxury-white/5 hover:border-brand-blue/20 dark:hover:border-luxury-white/20 text-brand-blue/60 dark:text-luxury-white/60"
                }`}
              >
                <span className="text-[10px] uppercase tracking-widest font-semibold block">
                  {screen.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Device Frame Display (Cols 8) */}
        <div className="lg:col-span-8 w-full flex flex-col items-center justify-center">
          <div className="max-w-md w-full border border-brand-blue/15 dark:border-luxury-white/10 rounded-[36px] p-4 bg-luxury-white dark:bg-luxury-black shadow-2xl relative">
            {/* Camera notch */}
            <div className="absolute top-6 left-1/2 -translate-x-1/2 w-24 h-4 rounded-full bg-brand-blue/20 dark:bg-luxury-white/10 z-20" />
            
            {/* Screen Inner Frame */}
            <div className="w-full rounded-[28px] overflow-hidden bg-brand-blue/[0.01] dark:bg-luxury-white/[0.01] border border-brand-blue/10 dark:border-luxury-white/5 py-12 px-6 min-h-[360px] flex flex-col justify-center items-center relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeScreen.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full flex flex-col gap-6"
                >
                  <div className="flex flex-col gap-1 text-center pb-2 border-b border-brand-blue/5 dark:border-luxury-white/5">
                    <h3 className="text-xs uppercase tracking-widest font-semibold text-brand-blue dark:text-luxury-white">
                      {activeScreen.title}
                    </h3>
                    <p className="text-[9px] text-brand-blue/50 dark:text-luxury-white/40 italic">
                      {activeScreen.tagline}
                    </p>
                  </div>

                  {activeScreen.element}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
