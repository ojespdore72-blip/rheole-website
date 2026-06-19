"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Signal {
  name: string;
  weight: string;
  status: string;
  statusColor: string;
  effect: string;
}

export default function RoutingDemo() {
  const [activeSignal, setActiveSignal] = useState("traffic");

  const signals: Record<string, Signal> = {
    traffic: {
      name: "Traffic Congestion",
      weight: "High Weight (40%)",
      status: "Central artery congested",
      statusColor: "text-red-500",
      effect: "Reroutes traffic away from bottleneck nodes into adjacent clear secondary roads."
    },
    weather: {
      name: "Weather Patterns",
      weight: "Medium Weight (20%)",
      status: "Heavy rain detected nearby",
      statusColor: "text-brand-gold",
      effect: "Filters out route segments prone to pooling and reduces estimated velocity coefficients."
    },
    events: {
      name: "Ongoing Events",
      weight: "Medium Weight (20%)",
      status: "Active street fair on 8th St",
      statusColor: "text-brand-gold",
      effect: "Marks street coordinates as closed to motorized transit and flags nearby pickup areas."
    },
    conditions: {
      name: "Road Conditions",
      weight: "Low Weight (10%)",
      status: "Pothole advisory on Bridge Node",
      statusColor: "text-yellow-500",
      effect: "Prefers paved surface nodes over deteriorating secondary segments for smooth routing."
    },
    density: {
      name: "Activity Density",
      weight: "Low Weight (10%)",
      status: "High pedestrian density in Plaza",
      statusColor: "text-brand-gold",
      effect: "Slows down estimated speeds near public squares and monitors crowd boundary paths."
    }
  };

  const active = signals[activeSignal] || signals.traffic;

  return (
    <div className="w-full flex flex-col gap-8 items-center font-sans">
      {/* Visual Routing Grid Selector */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 w-full max-w-4xl">
        {Object.entries(signals).map(([key, sig]) => {
          const isActive = activeSignal === key;
          return (
            <button
              key={key}
              onClick={() => setActiveSignal(key)}
              className={`p-4 rounded-xl border text-center transition-all duration-300 flex flex-col items-center justify-center gap-2 ${
                isActive
                  ? "border-brand-gold bg-brand-gold/[0.03] text-brand-gold"
                  : "border-brand-blue/5 dark:border-luxury-white/5 hover:border-brand-blue/20 dark:hover:border-luxury-white/20 text-brand-blue/70 dark:text-luxury-white/75"
              }`}
            >
              <span className="text-[10px] uppercase tracking-widest font-semibold block">{sig.name.split(" ")[0]}</span>
              <span className="text-[8px] uppercase tracking-widest opacity-60 block">{sig.weight.split(" ")[0]}</span>
            </button>
          );
        })}
      </div>

      {/* Interactive Detail Box */}
      <div className="w-full max-w-3xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSignal}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="border border-brand-blue/15 dark:border-luxury-white/10 rounded-2xl p-6 md:p-8 frosted-glass flex flex-col gap-6 text-left shadow-lg relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-brand-gold/5 to-transparent blur-lg pointer-events-none" />

            <div className="flex flex-col gap-1 border-b border-brand-blue/5 dark:border-luxury-white/5 pb-4">
              <span className="text-[9px] uppercase tracking-widest text-brand-gold font-semibold">{active.weight}</span>
              <h4 className="text-md md:text-lg font-medium uppercase tracking-wider text-brand-blue dark:text-luxury-white">
                {active.name}
              </h4>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs leading-relaxed">
              <div className="flex flex-col gap-1.5 border-l border-brand-blue/10 dark:border-luxury-white/10 pl-4">
                <span className="text-[8px] uppercase tracking-widest text-brand-blue/50 dark:text-luxury-white/40 font-semibold">Active State Signal</span>
                <p className={`font-semibold uppercase tracking-wider ${active.statusColor}`}>{active.status}</p>
              </div>

              <div className="flex flex-col gap-1.5 border-l border-brand-blue/10 dark:border-luxury-white/10 pl-4">
                <span className="text-[8px] uppercase tracking-widest text-brand-blue/50 dark:text-luxury-white/40 font-semibold">Routing Engine Modification</span>
                <p className="text-brand-blue/80 dark:text-luxury-white/80">{active.effect}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
