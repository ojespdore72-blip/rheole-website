"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/components/logo";

const DOTS = [
  { id: 0, x: 20, y: 40 },
  { id: 1, x: 45, y: 25 },
  { id: 2, x: 75, y: 35 },
  { id: 3, x: 80, y: 65 },
  { id: 4, x: 50, y: 80 },
  { id: 5, x: 30, y: 60 }
];

const PEOPLE_TARGETS = [
  { x: 15, y: 50 },
  { x: 35, y: 45 },
  { x: 65, y: 45 },
  { x: 85, y: 55 },
  { x: 45, y: 65 },
  { x: 25, y: 75 },
  { x: 75, y: 75 }
];

export default function ConnectTheDotsDemo() {
  const [connectedDots, setConnectedDots] = useState<number[]>([]);
  const [isComplete, setIsComplete] = useState(false);
  
  // Track mouse for drawing the active line
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handlePointerMove = (e: React.PointerEvent) => {
    if (isComplete || connectedDots.length === 0) return;
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });

    // Auto-connect dots if we drag near them
    const CONNECT_RADIUS = 8; // 8% threshold for connecting
    const nearestDot = DOTS.find(d => 
      !connectedDots.includes(d.id) && 
      Math.abs(d.x - x) < CONNECT_RADIUS && 
      Math.abs(d.y - y) < CONNECT_RADIUS
    );
    
    if (nearestDot) {
      handleDotClick(nearestDot.id);
    }
  };

  const handleDotClick = (id: number) => {
    if (isComplete) return;
    
    // If not connected yet
    if (!connectedDots.includes(id)) {
      const newConnected = [...connectedDots, id];
      setConnectedDots(newConnected);
      
      if (newConnected.length === DOTS.length) {
        setIsComplete(true);
      }
    }
  };

  return (
    <div 
      ref={containerRef}
      onPointerMove={handlePointerMove}
      className="relative w-full h-[750px] md:h-[800px] rounded-none md:rounded-[40px] spatial-glass border-y md:border border-brand-blue/10 dark:border-white/10 overflow-hidden flex items-center justify-center select-none"
    >
      {/* Background Images */}
      <AnimatePresence>
        {!isComplete ? (
          <motion.img 
            key="disconnected"
            src="/disconnected_nodes.png" 
            alt="Disconnected Nodes" 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 w-full h-full object-cover mix-blend-overlay" 
          />
        ) : (
          <motion.img 
            key="connected"
            src="/images/connected-people.png" 
            alt="Connected People" 
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.8, scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute inset-0 w-full h-full object-cover mix-blend-overlay" 
          />
        )}
      </AnimatePresence>

      {/* Smoke Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />

      {/* SVG Drawing Layer */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" style={{ overflow: "visible" }}>
        {/* Draw lines between connected dots */}
        {connectedDots.length > 1 && connectedDots.map((dotId, index) => {
          if (index === 0) return null;
          const prevDot = DOTS.find(d => d.id === connectedDots[index - 1])!;
          const currDot = DOTS.find(d => d.id === dotId)!;
          
          return (
            <motion.line
              key={`line-${prevDot.id}-${currDot.id}`}
              x1={`${prevDot.x}%`} y1={`${prevDot.y}%`}
              x2={`${currDot.x}%`} y2={`${currDot.y}%`}
              stroke="white"
              strokeWidth="2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.8 }}
              transition={{ duration: 0.3 }}
            />
          );
        })}

        {/* Draw active line to mouse */}
        {!isComplete && connectedDots.length > 0 && connectedDots.length < DOTS.length && (
          <line
            x1={`${DOTS.find(d => d.id === connectedDots[connectedDots.length - 1])!.x}%`} 
            y1={`${DOTS.find(d => d.id === connectedDots[connectedDots.length - 1])!.y}%`}
            x2={`${mousePos.x}%`} 
            y2={`${mousePos.y}%`}
            stroke="rgba(255, 255, 255, 0.4)"
            strokeWidth="2"
            strokeDasharray="4 4"
          />
        )}

        {/* After completion: shoot lines from center logo to people */}
        {isComplete && PEOPLE_TARGETS.map((target, i) => (
          <motion.line
            key={`shoot-${i}`}
            x1="50%" y1="12%"
            x2={`${target.x}%`} y2={`${target.y}%`}
            stroke="url(#goldGradient)"
            strokeWidth="1.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0, 0.6, 0] }}
            transition={{ duration: 2, delay: 1 + i * 0.2, repeat: Infinity, repeatDelay: 2 }}
          />
        ))}

        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C6A87C" stopOpacity="1" />
            <stop offset="100%" stopColor="#C6A87C" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      {/* Interactive Dots */}
      {!isComplete && DOTS.map((dot) => {
        const isConnected = connectedDots.includes(dot.id);
        const isNext = connectedDots.length > 0 && !isConnected;

        return (
          <motion.button
            key={`dot-${dot.id}`}
            onClick={() => handleDotClick(dot.id)}
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 0.9 }}
            className={`absolute w-6 h-6 -ml-3 -mt-3 rounded-full flex items-center justify-center z-20 cursor-pointer transition-colors ${
              isConnected ? "bg-white" : "bg-brand-blue/30 dark:bg-white/30 border border-white/50 hover:bg-white/50"
            }`}
            style={{ left: `${dot.x}%`, top: `${dot.y}%` }}
          >
            {isConnected && <div className="w-2 h-2 bg-brand-blue rounded-full" />}
            {isNext && (
              <motion.div 
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="absolute w-full h-full rounded-full border border-white"
              />
            )}
          </motion.button>
        );
      })}

      {/* Instructions Overlay */}
      <AnimatePresence>
        {!isComplete && connectedDots.length === 0 && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="absolute top-12 left-6 md:top-8 md:left-8 pointer-events-none z-20"
          >
            <p className="text-black text-sm md:text-base font-mono tracking-[0.3em] uppercase">
              Connect the dots
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Completion Logo Overlay */}
      <AnimatePresence>
        {isComplete && (
          <>
            {/* Heading in top left */}
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2, duration: 1 }}
              className="absolute top-12 left-6 md:top-8 md:left-8 text-black text-sm md:text-base font-mono tracking-[0.3em] uppercase z-30"
            >
              Intelligence Activated
            </motion.p>

            {/* Logo in top center, scaled up 2x */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.5 }}
              animate={{ opacity: 1, y: 0, scale: 2 }}
              transition={{ duration: 1, delay: 0.5, type: "spring" }}
              className="absolute top-24 md:top-16 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center"
            >
              <Logo />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
