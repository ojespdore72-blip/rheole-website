"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SETTINGS = [
  { id: "location", label: "Location Tracking" },
  { id: "synthesis", label: "Data Synthesis" },
  { id: "network", label: "Network Discovery" }
];

export default function PrivacyTogglesDemo() {
  const [activeToggles, setActiveToggles] = useState<Record<string, boolean>>({
    location: false,
    synthesis: false,
    network: false
  });
  const [latestActive, setLatestActive] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setActiveToggles((prev) => {
      const newState = !prev[id];
      if (newState) {
        setLatestActive(id);
      } else {
        // If turning off the latest one, check if any others are still on
        if (latestActive === id) {
          const othersOn = Object.keys(prev).filter(k => k !== id && prev[k]);
          setLatestActive(othersOn.length > 0 ? othersOn[othersOn.length - 1] : null);
        }
      }
      return { ...prev, [id]: newState };
    });
  };

  return (
    <div className="relative w-full aspect-square rounded-[40px] spatial-glass border border-brand-blue/10 dark:border-white/10 overflow-hidden flex items-center justify-center transition-colors duration-1000">
      
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          {latestActive === "location" && (
            <motion.div 
              key="bg-location"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.15 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              {/* Radar pulse effect */}
              <motion.div 
                animate={{ scale: [1, 3], opacity: [0.8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                className="absolute w-40 h-40 rounded-full border border-brand-blue dark:border-brand-gold"
              />
              <motion.div 
                animate={{ scale: [1, 3], opacity: [0.8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 1 }}
                className="absolute w-40 h-40 rounded-full border border-brand-blue dark:border-brand-gold"
              />
              <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(0,100,224,0.2),transparent_70%)]" />
            </motion.div>
          )}

          {latestActive === "synthesis" && (
            <motion.div 
              key="bg-synthesis"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.15 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              {/* Data stream effect */}
              <div className="absolute inset-0 overflow-hidden flex justify-around opacity-50">
                {[...Array(10)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 800, opacity: [0, 1, 1, 0] }}
                    transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2 }}
                    className="w-[1px] h-32 bg-gradient-to-b from-transparent via-brand-blue dark:via-brand-gold to-transparent"
                  />
                ))}
              </div>
            </motion.div>
          )}

          {latestActive === "network" && (
            <motion.div 
              key="bg-network"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.2 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              {/* Network nodes effect */}
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0iIzAwMDAwMCIgb3BhY2l0eT0iMC4yIi8+PC9zdmc+')] dark:bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0iI2ZmZmZmZiIgb3BhY2l0eT0iMC4yIi8+PC9zdmc+')]" />
              <motion.div 
                animate={{ rotate: 360 }} 
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute w-[150%] h-[150%] bg-[radial-gradient(circle_at_50%_50%,rgba(0,100,224,0.1),transparent_60%)]" 
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Toggles UI */}
      <div className="relative z-10 flex flex-col gap-6 w-3/4 max-w-sm">
        {SETTINGS.map((setting) => {
          const isOn = activeToggles[setting.id];
          return (
            <div key={setting.id} className="flex justify-between items-center pb-6 border-b border-brand-blue/10 dark:border-white/10 last:border-0">
              <span className={`text-sm font-mono tracking-widest uppercase transition-colors duration-300 ${isOn ? "text-brand-blue dark:text-brand-gold font-semibold" : "text-brand-blue/60 dark:text-white/60"}`}>
                {setting.label}
              </span>
              <button
                onClick={() => handleToggle(setting.id)}
                className={`w-12 h-6 rounded-full flex items-center p-1 transition-colors duration-300 cursor-pointer ${
                  isOn ? "bg-brand-gold dark:bg-brand-gold" : "bg-brand-blue/20 dark:bg-white/20"
                }`}
              >
                <motion.div
                  initial={false}
                  animate={{ x: isOn ? 24 : 0 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  className="w-4 h-4 bg-white rounded-full shadow-md"
                />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
