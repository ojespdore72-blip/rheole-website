"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FlowStep {
  label: string;
  value: string;
}

interface QueryFlow {
  id: string;
  question: string;
  steps: {
    reasoning: string;
    insight: string;
    action: string;
  };
}

export default function AskWorld() {
  const [activeQuery, setActiveQuery] = useState("nearby");

  const flows: QueryFlow[] = [
    {
      id: "nearby",
      question: "What is happening nearby?",
      steps: {
        reasoning: "Filters coordinates into geohashes, indexes active proximity groups, and analyzes crowd presence signatures.",
        insight: "Detected vinyl pop-up at Horizon Sound Labs (18 attending) and a street mural session nearby (12 active).",
        action: "Recommend Horizon Sound Labs vinyl session. Link local geohash nodes."
      }
    },
    {
      id: "route",
      question: "Which route makes the most sense right now?",
      steps: {
        reasoning: "Correlates weather conditions, live city street fairs, and congestion zones along potential route nodes.",
        insight: "The Parkway corridor has high traffic density due to a local festival. Highline path is clear and dry.",
        action: "Route calculated via Highline corridor, saving 14 minutes."
      }
    },
    {
      id: "events",
      question: "What events are worth attending tonight?",
      steps: {
        reasoning: "Cross-checks active calendar nodes and organic crowd density to isolate verified physical gatherings.",
        insight: "Sunset acoustical session has 42 confirmed check-ins. Hack club starts in 3 hours.",
        action: "Add Sunset Acoustical Suite to local calendar. Pin coordinate marker."
      }
    },
    {
      id: "active",
      question: "Which areas are most active today?",
      steps: {
        reasoning: "Aggregates anonymous presence logs to compute relative local density across neighborhood cells.",
        insight: "Central Square node reports 2.4x baseline activity. Riverside node remains quiet.",
        action: "Highlight Central Square geohash cell on dynamic map."
      }
    },
    {
      id: "join",
      question: "What communities should I join?",
      steps: {
        reasoning: "Matches user interest tags against local geohash registry listings to locate active collectives.",
        insight: "Synthesizers Group and Spatial Computing circles are active in your coordinates.",
        action: "Provide mesh relay access keys for localized channels."
      }
    }
  ];

  const activeFlow = flows.find((f) => f.id === activeQuery) || flows[0];

  return (
    <div className="w-full flex flex-col gap-8 items-center">
      {/* Question Selector Button List */}
      <div className="flex flex-wrap justify-center gap-3 max-w-2xl">
        {flows.map((flow) => {
          const isActive = activeQuery === flow.id;
          return (
            <button
              key={flow.id}
              onClick={() => setActiveQuery(flow.id)}
              className={`text-xs uppercase tracking-widest px-4 py-2.5 rounded-full border transition-all duration-300 ${
                isActive
                  ? "border-brand-gold bg-brand-gold/10 text-brand-gold font-medium"
                  : "border-brand-blue/10 dark:border-luxury-white/5 hover:border-brand-blue/30 dark:hover:border-luxury-white/20 text-brand-blue/70 dark:text-luxury-white/60"
              }`}
            >
              {flow.question}
            </button>
          );
        })}
      </div>

      {/* Interactive Step-by-Step Flow Display */}
      <div className="w-full max-w-3xl mt-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFlow.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="border border-brand-blue/15 dark:border-luxury-white/10 rounded-2xl p-6 md:p-8 frosted-glass flex flex-col gap-6 text-left shadow-lg relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-brand-gold/5 to-transparent blur-lg pointer-events-none" />
            
            {/* Question */}
            <div className="flex flex-col gap-1 border-b border-brand-blue/5 dark:border-luxury-white/5 pb-4">
              <span className="text-[9px] uppercase tracking-widest text-brand-gold font-semibold">User Query</span>
              <h4 className="text-md md:text-lg font-medium font-serif-editorial italic text-brand-blue dark:text-luxury-white">
                &ldquo;{activeFlow.question}&rdquo;
              </h4>
            </div>

            {/* Reasoning, Insight, Action */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs leading-relaxed font-sans">
              <div className="flex flex-col gap-2 border-l border-brand-blue/10 dark:border-luxury-white/10 pl-4">
                <span className="text-[9px] uppercase tracking-widest text-brand-blue/70 dark:text-luxury-white/40 font-semibold">1. Reasoning</span>
                <p className="text-brand-blue/80 dark:text-luxury-white/80">{activeFlow.steps.reasoning}</p>
              </div>

              <div className="flex flex-col gap-2 border-l border-brand-blue/10 dark:border-luxury-white/10 pl-4">
                <span className="text-[9px] uppercase tracking-widest text-brand-gold font-semibold">2. Insight</span>
                <p className="text-brand-blue/80 dark:text-luxury-white/80">{activeFlow.steps.insight}</p>
              </div>

              <div className="flex flex-col gap-2 border-l border-brand-blue/10 dark:border-luxury-white/10 pl-4">
                <span className="text-[9px] uppercase tracking-widest text-brand-blue/70 dark:text-luxury-white/40 font-semibold">3. Action</span>
                <p className="text-brand-blue/80 dark:text-luxury-white/80 font-medium">{activeFlow.steps.action}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
