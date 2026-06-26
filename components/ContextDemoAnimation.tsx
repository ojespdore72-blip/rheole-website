"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, MapPin, Coffee, Activity, ArrowRight } from "lucide-react";
import Logo from "@/components/logo";

export default function ContextDemoAnimation() {
  const [phase, setPhase] = useState<"intro" | "chat">("intro");
  const [messages, setMessages] = useState<{ id: number; type: "user" | "ai"; text: string | React.ReactNode }[]>([]);

  useEffect(() => {
    let timers: NodeJS.Timeout[] = [];

    const startSequence = () => {
      setPhase("intro");
      setMessages([]);
      
      timers.forEach(clearTimeout);
      timers = [];

      // 1. Transition to chat at 3 seconds
      timers.push(setTimeout(() => setPhase("chat"), 2500));

      // 2. Chat script
      const script = [
        { delay: 3500, type: "user", text: "I'm hungry." },
        { delay: 4500, type: "ai", text: (
          <div className="flex flex-col gap-2">
            <span>Found 3 great spots near you based on your previous visits.</span>
            <div className="bg-black/20 rounded-lg p-2 border border-white/10 flex items-center gap-2">
              <Coffee size={14} className="text-brand-gold" />
              <span className="text-xs">Blue Bottle Coffee • 200m away</span>
            </div>
          </div>
        ) },
        { delay: 6500, type: "user", text: "I'm new here." },
        { delay: 7500, type: "ai", text: "Welcome! The downtown hub is a great place to start. I've highlighted some key landmarks on your map." },
        { delay: 9500, type: "user", text: "I want to meet founders." },
        { delay: 10500, type: "ai", text: "There's an open audio room 'Local Tech Founders' live right now with 120 listeners. Want me to connect you?" },
        { delay: 12500, type: "user", text: "Where is a quiet place to work?" },
        { delay: 13500, type: "ai", text: "The City Library has low foot traffic right now. I'll route you there." },
      ];

      script.forEach((step, index) => {
        timers.push(
          setTimeout(() => {
            setMessages((prev) => [...prev, { id: index, type: step.type as "user" | "ai", text: step.text }]);
          }, step.delay)
        );
      });

      // Loop after 16 seconds
      timers.push(setTimeout(startSequence, 16000));
    };

    startSequence();

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="relative w-full h-[80vh] min-h-[600px] md:h-auto md:aspect-[2/3] md:min-h-[700px] rounded-none md:rounded-[40px] overflow-hidden flex items-center justify-center bg-[#03030A] shadow-[inset_0_0_100px_rgba(0,0,0,0.5)] border-y md:border border-brand-blue/10">
      
      {/* Background Image of Girl Holding Phone */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-luminosity"
        style={{ backgroundImage: "url('/images/context-demo-bg.png')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#03030A] via-transparent to-[#03030A]/50" />

      {/* The Phone Screen Overlay */}
      {/* Dynamic size to breathe on mobile, capped at standard phone ratios */}
      <div className="relative z-10 h-[80%] max-h-[750px] w-auto max-w-[85%] aspect-[9/19.5] bg-black rounded-[2rem] md:rounded-[3rem] border-4 md:border-8 border-gray-900 shadow-2xl overflow-hidden flex flex-col">
        
        {/* Dynamic content inside phone */}
        <AnimatePresence mode="wait">
          {phase === "intro" ? (
            <motion.div
              key="intro"
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex flex-col items-center justify-center bg-black"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <Logo />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="mt-4"
              >
                <div className="w-6 h-6 border-2 border-white/20 border-t-brand-gold rounded-full animate-spin" />
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute inset-0 flex flex-col bg-gradient-to-b from-gray-900 to-black font-sans"
            >
              {/* Chat Header */}
              <div className="h-16 flex items-center justify-between px-6 border-b border-white/10 bg-black/50 backdrop-blur-md z-20">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-brand-gold/20 flex items-center justify-center">
                    <Sparkles size={14} className="text-brand-gold" />
                  </div>
                  <span className="text-white text-sm font-medium">Rheole Intelligence</span>
                </div>
              </div>

              {/* Messages Area */}
              <div className="flex-1 overflow-hidden flex flex-col gap-4 p-4 justify-end pb-8">
                <AnimatePresence initial={false}>
                  {messages.map((msg) => (
                    <motion.div
                      key={msg.id}
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                        msg.type === "user" 
                          ? "bg-white/10 text-white self-end rounded-tr-sm" 
                          : "bg-transparent border border-white/10 text-white/80 self-start rounded-tl-sm"
                      }`}
                    >
                      {msg.text}
                    </motion.div>
                  ))}
                </AnimatePresence>
                
                {/* Typing indicator (shows when waiting for AI) */}
                {messages.length > 0 && messages[messages.length - 1].type === "user" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="self-start text-white/40 text-xs px-2 flex gap-1 items-center"
                  >
                    <motion.span animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1 }} className="w-1 h-1 bg-white/50 rounded-full" />
                    <motion.span animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="w-1 h-1 bg-white/50 rounded-full" />
                    <motion.span animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="w-1 h-1 bg-white/50 rounded-full" />
                  </motion.div>
                )}
              </div>

              {/* Chat Input */}
              <div className="h-16 px-4 pb-4 bg-transparent z-20">
                <div className="w-full h-full bg-white/5 border border-white/10 rounded-full flex items-center px-4">
                  <span className="text-white/30 text-xs flex-1">Ask anything...</span>
                  <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                    <ArrowRight size={12} className="text-white/50" />
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Phone Notch/Dynamic Island mockup */}
        <div className="absolute top-0 inset-x-0 flex justify-center z-50 pointer-events-none">
          <div className="w-24 h-6 bg-black rounded-b-3xl" />
        </div>
        {/* Home Indicator */}
        <div className="absolute bottom-2 inset-x-0 flex justify-center z-50 pointer-events-none">
          <div className="w-24 h-1 bg-white/20 rounded-full" />
        </div>
      </div>
    </div>
  );
}
