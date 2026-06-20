"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import Image from "next/image";

const visions = [
  {
    id: "network",
    src: "/vision/rheole_vision_network_1781893148900.png",
    title: "Spatial Intelligence",
    description: "Visualizing the invisible network connecting people, places, and events in real-time."
  },
  {
    id: "people",
    src: "/vision/rheole_vision_people_1781893159291.png",
    title: "Meaningful Connection",
    description: "Bringing the digital layer into the physical world to foster genuine human interaction."
  },
  {
    id: "map",
    src: "/vision/rheole_vision_map_1781893174344.png",
    title: "City Context",
    description: "Navigate your metropolis with profound local context and hyper-relevant discovery."
  }
];

interface ProgressDotProps {
  index: number;
  scrollXProgress: MotionValue<number>;
  total: number;
}

function ProgressDot({ index, scrollXProgress, total }: ProgressDotProps) {
  const opacity = useTransform(
    scrollXProgress,
    [(index - 0.5) / total, index / total, (index + 0.5) / total],
    [0.2, 1, 0.2]
  );
  return (
    <motion.div
      className="w-2 h-2 rounded-full bg-brand-gold"
      style={{ opacity }}
    />
  );
}

export default function VisionCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useScroll({ container: containerRef });

  return (
    <div className="w-full relative flex flex-col gap-6 py-12">
      <div className="px-6 md:px-12 flex justify-between items-end">
        <h3 className="text-xl md:text-3xl font-serif-editorial uppercase tracking-widest text-brand-blue dark:text-luxury-white">
          The Rheole Vision
        </h3>
        <div className="hidden md:flex gap-2">
          {/* Progress indicator dots */}
          {visions.map((_, i) => (
            <ProgressDot
              key={i}
              index={i}
              scrollXProgress={scrollXProgress}
              total={visions.length}
            />
          ))}
        </div>
      </div>

      <div 
        ref={containerRef}
        className="w-full flex overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8 px-6 md:px-12 gap-6"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {visions.map((vision, index) => (
          <div 
            key={vision.id}
            className="relative min-w-[85vw] md:min-w-[60vw] lg:min-w-[45vw] h-[50vh] md:h-[60vh] rounded-2xl overflow-hidden snap-center flex-shrink-0 group"
          >
            <Image 
              src={vision.src} 
              alt={vision.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            
            {/* Gradient Overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />
            
            {/* Content */}
            <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 flex flex-col gap-2">
              <span className="text-[10px] uppercase tracking-[0.2em] text-brand-gold font-medium">
                0{index + 1}
              </span>
              <h4 className="text-2xl md:text-3xl font-light text-white tracking-wide">
                {vision.title}
              </h4>
              <p className="text-sm md:text-base text-white/70 max-w-md font-light leading-relaxed">
                {vision.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      {/* CSS to hide scrollbar explicitly for webkit */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </div>
  );
}
