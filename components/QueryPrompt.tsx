"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const queries = [
  "What's happening nearby?",
  "Best place to watch today's sunset?",
  "Which route saves the most time?",
  "What events are happening tonight?",
];

const mockResponses: Record<string, { answer: string; metadata: string[] }> = {
  "What's happening nearby?": {
    answer: "A quiet local vinyl session at Horizon Sound Labs, a pop-up art showcase on 4th Ave, and an active spatial community gathering in Central Park.",
    metadata: ["3 Clusters", "1.2km radius", "Real-time updates"],
  },
  "Best place to watch today's sunset?": {
    answer: "Highline Crest (elevation 180m). Direct line of sight. Sunset peaks at 8:12 PM. Ambient light levels dropping to 12 lux.",
    metadata: ["Local spot", "Peak visibility", "8:12 PM Peak"],
  },
  "Which route saves the most time?": {
    answer: "The Riverside Parkway corridor bypasses the central congestion node, routing you around the active public street festival. Saving 14 minutes.",
    metadata: ["Spatial intelligence", "Dynamic detour", "-14 min"],
  },
  "What events are happening tonight?": {
    answer: "4 local events synced: The Digital Vernacular workshop (7 PM), Sunset Acoustical Suite (8 PM), Midnight Hack Club (11 PM), and Starlight Observational Gathering.",
    metadata: ["4 Verified events", "No tickets required", "Local networks"],
  },
};

export default function QueryPrompt() {
  const [currentQueryIndex, setCurrentQueryIndex] = useState(0);
  const [placeholderText, setPlaceholderText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [showResponse, setShowResponse] = useState(false);
  const [activeResponse, setActiveResponse] = useState<{ answer: string; metadata: string[] } | null>(null);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentFullQuery = queries[currentQueryIndex];

    if (inputValue !== "") {
      // User is typing, stop placeholder animation
      return;
    }

    if (!isDeleting) {
      // Typing forward
      if (placeholderText.length < currentFullQuery.length) {
        timer = setTimeout(() => {
          setPlaceholderText(currentFullQuery.substring(0, placeholderText.length + 1));
        }, 80);
      } else {
        // Wait before deleting or executing
        timer = setTimeout(() => {
          // Trigger mock response display automatically for demo, or delete
          setActiveResponse(mockResponses[currentFullQuery]);
          setShowResponse(true);
          
          setTimeout(() => {
            setShowResponse(false);
            setIsDeleting(true);
          }, 4500);
        }, 1500);
      }
    } else {
      // Deleting text
      if (placeholderText.length > 0) {
        timer = setTimeout(() => {
          setPlaceholderText(currentFullQuery.substring(0, placeholderText.length - 1));
        }, 40);
      } else {
        setIsDeleting(false);
        setCurrentQueryIndex((prev) => (prev + 1) % queries.length);
      }
    }

    return () => clearTimeout(timer);
  }, [placeholderText, isDeleting, currentQueryIndex, inputValue]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setShowResponse(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.trim()) {
      // Generate a mock response for custom queries
      setActiveResponse({
        answer: `Routing spatial clusters for: "${inputValue}". Found active local conversation streams and real-time events surrounding this query.`,
        metadata: ["Dynamic intelligence", "Spatial layer active", "Now"],
      });
      setShowResponse(true);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col gap-8 px-4 items-center">
      {/* Search Input Container */}
      <div className="relative w-full">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder={inputValue ? "" : placeholderText}
          className="w-full text-2xl md:text-4xl font-light tracking-tight text-center py-6 px-8 rounded-2xl bg-brand-blue/[0.02] dark:bg-luxury-white/[0.01] border border-brand-blue/10 dark:border-luxury-white/5 focus:outline-none focus:border-brand-gold/60 dark:focus:border-brand-gold/60 focus:bg-white dark:focus:bg-luxury-black transition-all duration-500 placeholder-brand-blue/20 dark:placeholder-luxury-white/20 uppercase tracking-widest text-[16px] md:text-[22px] selection:bg-brand-gold/20"
        />
        <div className="absolute bottom-2 right-4 text-[9px] uppercase tracking-widest text-brand-blue/70 dark:text-luxury-white/30 hidden sm:block">
          Press Enter to query
        </div>
      </div>

      {/* Response Box - Minimalist editorial card */}
      <motion.div 
        layout 
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full min-h-[160px] flex items-center justify-center"
      >
        <AnimatePresence mode="wait">
          {showResponse && activeResponse && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.97, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -10, scale: 0.97, filter: "blur(4px)" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-2xl frosted-glass rounded-xl p-8 flex flex-col gap-6 text-left glow-border shadow-2xl relative overflow-hidden"
            >
              {/* Top ambient glow */}
              <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-brand-gold to-transparent opacity-80" />

              <div className="flex flex-col gap-3">
                <span className="text-[10px] tracking-widest uppercase text-brand-gold font-semibold flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-gold animate-ping" />
                  Rheole Local Engine
                </span>
                <p className="text-md md:text-lg text-brand-blue/90 dark:text-luxury-white/95 leading-relaxed font-light font-serif-editorial">
                  &ldquo;{activeResponse.answer}&rdquo;
                </p>
              </div>

              {/* Tags/Metadata */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-brand-blue/5 dark:border-luxury-white/5">
                {activeResponse.metadata.map((meta, i) => (
                  <span
                    key={i}
                    className="text-[9px] uppercase tracking-widest bg-brand-blue/[0.03] dark:bg-luxury-white/[0.03] px-3 py-1 rounded-full border border-brand-blue/5 dark:border-luxury-white/5 text-brand-blue/70 dark:text-luxury-white/40"
                  >
                    {meta}
                  </span>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
