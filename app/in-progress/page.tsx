"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function InProgressPage() {
  return (
    <div className="relative w-full min-h-[100dvh] bg-[#080808] flex flex-col items-center justify-center p-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center max-w-[600px] gap-8"
      >
        <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-[#4F6EF7]">RHEOLE PLATFORM</span>
        
        <h1 className="text-[clamp(40px,5vw,64px)] font-serif-editorial font-light text-[#F2F2F0] leading-[1.1]">
          Contents in Progress
        </h1>
        
        <p className="text-[18px] text-[#6A6A6A] font-light leading-relaxed">
          This feature is currently being built for the founding release. Check back soon or request early access to test it live.
        </p>
        
        <div className="flex items-center gap-6 mt-4">
          <Link 
            href="/"
            className="h-[52px] px-8 rounded-full border border-[rgba(255,255,255,0.15)] bg-transparent text-[#F2F2F0] flex items-center justify-center transition-all duration-500 hover:border-[rgba(255,255,255,0.4)] hover:bg-[rgba(255,255,255,0.05)]"
          >
            <span className="text-[13px] font-medium tracking-[0.08em] uppercase">
              Back to Home
            </span>
          </Link>
          <Link 
            href="/founding-access"
            className="h-[52px] px-8 rounded-full bg-[#F2F2F0] text-[#080808] flex items-center justify-center transition-all duration-500 hover:scale-[1.02]"
          >
            <span className="text-[13px] font-medium tracking-[0.08em] uppercase">
              Request Access
            </span>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
