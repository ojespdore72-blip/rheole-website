"use client";

import React from "react";

interface KineticBackgroundProps {
  text1: string; // Inner circle text
  text2: string; // Outer circle text
  clockwiseSpeed?: number; // Speed in seconds for clockwise rotation
  counterSpeed?: number; // Speed in seconds for counterclockwise rotation
}

export default function KineticBackground({
  text1,
  text2,
  clockwiseSpeed = 160,
  counterSpeed = 200,
}: KineticBackgroundProps) {
  // Unique IDs for SVG paths to prevent conflicts
  const pathId1 = React.useId().replace(/:/g, "-");
  const pathId2 = React.useId().replace(/:/g, "-");

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden">
      {/* 
        Concentric SVG Orbits. 
        Using GPU-accelerated CSS animations for 60fps performance.
        Includes a media query fallback in CSS styles to respect prefers-reduced-motion.
      */}
      <div className="relative w-[130vw] h-[130vw] md:w-[95vh] md:h-[95vh] max-w-[900px] max-h-[900px] flex items-center justify-center opacity-8 dark:opacity-10 transition-opacity duration-1000">
        
        {/* Style tag to inject custom animations and handle accessibility */}
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes kinetic-clockwise {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes kinetic-counter {
            from { transform: rotate(360deg); }
            to { transform: rotate(0deg); }
          }
          .animate-kinetic-cw {
            animation: kinetic-clockwise ${clockwiseSpeed}s linear infinite;
            transform-origin: center;
          }
          .animate-kinetic-ccw {
            animation: kinetic-counter ${counterSpeed}s linear infinite;
            transform-origin: center;
          }
          @media (prefers-reduced-motion: reduce) {
            .animate-kinetic-cw, .animate-kinetic-ccw {
              animation: none !important;
            }
          }
        `}} />

        {/* Outer Orbit (Counter-Clockwise) */}
        <svg
          viewBox="0 0 600 600"
          className="absolute inset-0 w-full h-full animate-kinetic-ccw text-brand-blue dark:text-luxury-white"
        >
          <defs>
            {/* Circle 2 (Radius 270) */}
            <path
              id={`path-${pathId2}`}
              d="M 300,300 m -270,0 a 270,270 0 1,1 540,0 a 270,270 0 1,1 -540,0"
            />
          </defs>
          <text className="font-serif-editorial text-[9px] md:text-[10px] uppercase tracking-[0.25em] fill-current">
            <textPath href={`#path-${pathId2}`} startOffset="0%">
              {text2}
            </textPath>
          </text>
        </svg>

        {/* Inner Orbit (Clockwise) */}
        <svg
          viewBox="0 0 600 600"
          className="absolute inset-0 w-full h-full animate-kinetic-cw text-brand-blue dark:text-luxury-white"
        >
          <defs>
            {/* Circle 1 (Radius 220) */}
            <path
              id={`path-${pathId1}`}
              d="M 300,300 m -220,0 a 220,220 0 1,1 440,0 a 220,220 0 1,1 -440,0"
            />
          </defs>
          <text className="font-serif-editorial text-[10px] md:text-[11px] uppercase tracking-[0.3em] fill-current">
            <textPath href={`#path-${pathId1}`} startOffset="0%">
              {/* Allow gold colored span accents occasionally */}
              <tspan fill="currentColor">{text1.split("•").map((part, index) => (
                <React.Fragment key={index}>
                  {index > 0 && <tspan fill="#C5A880" className="px-2">•</tspan>}
                  {part}
                </React.Fragment>
              ))}</tspan>
            </textPath>
          </text>
        </svg>
        
        {/* Subtle center lens overlay to anchor the design */}
        <div className="absolute w-[60%] h-[60%] rounded-full border border-brand-blue/[0.02] dark:border-luxury-white/[0.02] bg-radial from-transparent to-luxury-white/5 pointer-events-none" />
      </div>
    </div>
  );
}
