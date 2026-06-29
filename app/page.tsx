"use client";

import React from "react";
import HeroSection from "@/components/home/HeroSection";
import ProductPreviewSection from "@/components/home/ProductPreviewSection";
import CapabilitiesSection from "@/components/home/CapabilitiesSection";
import LivingImage from "@/components/LivingImage";
import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";
import Link from "next/link";

// -----------------------------------------------------------------------------
// TEMPORARY LEGACY SECTIONS (Restyled to match Unified Design System)
// -----------------------------------------------------------------------------

const photos = [
  "/web_image_1.png",
  "/web_image_3.jpg",
  "/web_image_4.jpg"
];

function LegacyRootsSection() {
  return (
    <section className="w-full py-[160px] px-6">
      <div className="w-full max-w-[1200px] mx-auto flex flex-col gap-16">
        
        {/* Mosaic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">
          {/* Large Left */}
          <ScrollReveal className="md:col-span-7 h-[400px] md:h-full relative rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.06)] group">
            <motion.div 
              initial={{ scale: 0.96 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0"
            >
              <LivingImage src={photos[0]} alt="Bengaluru City" className="w-full h-full object-cover" />
            </motion.div>
            <div className="absolute bottom-0 left-0 w-full h-[20%] bg-gradient-to-t from-[rgba(0,0,0,0.4)] to-transparent" />
          </ScrollReveal>

          {/* Stacked Right */}
          <div className="md:col-span-5 flex flex-col gap-6 h-[800px] md:h-full">
            <ScrollReveal delay={0.12} className="flex-1 relative rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.06)]">
              <motion.div 
                initial={{ scale: 0.96 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0"
              >
                <LivingImage src={photos[1]} alt="Local community" className="w-full h-full object-cover" />
              </motion.div>
              <div className="absolute bottom-0 left-0 w-full h-[20%] bg-gradient-to-t from-[rgba(0,0,0,0.4)] to-transparent" />
            </ScrollReveal>
            <ScrollReveal delay={0.24} className="flex-1 relative rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.06)]">
              <motion.div 
                initial={{ scale: 0.96 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0"
              >
                <LivingImage src={photos[2]} alt="Spatial architecture" className="w-full h-full object-cover" />
              </motion.div>
              <div className="absolute bottom-0 left-0 w-full h-[20%] bg-gradient-to-t from-[rgba(0,0,0,0.4)] to-transparent" />
            </ScrollReveal>
          </div>
        </div>

        {/* Copy Block */}
        <ScrollReveal>
          <div className="flex flex-col items-center">
            <div className="w-full max-w-[650px] h-[1px] bg-[rgba(255,255,255,0.06)] mb-12" />
            <p className="text-[24px] md:text-[32px] font-light font-serif-editorial text-[#F2F2F0] text-center max-w-[650px] leading-[1.4]">
              We are not building an escape to the metaverse. We are building the tools to fall back in love with your physical city.
            </p>
            <div className="w-full max-w-[650px] h-[1px] bg-[rgba(255,255,255,0.06)] mt-12" />
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}

function LegacyJoinSection() {
  return (
    <section className="w-full py-[160px] px-6 relative overflow-hidden flex flex-col items-center bg-[#0a0a0a]">
      {/* Massive radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#4F6EF7] rounded-full blur-[160px] opacity-[0.05] pointer-events-none" />
      
      <ScrollReveal className="relative z-10 flex flex-col items-center text-center">
        <h2 className="text-[clamp(40px,5vw,64px)] font-serif-editorial font-light text-[#F2F2F0] mb-12 tracking-tight leading-[1.1]">
          Join the new future.
        </h2>
        
        <Link 
          href="/founding-access"
          className="h-[52px] px-8 rounded-full bg-[#F2F2F0] text-[#080808] flex items-center justify-center transition-all duration-500 hover:scale-[1.02] mb-12"
        >
          <span className="text-[13px] font-medium tracking-[0.08em] uppercase">
            Request Early Access
          </span>
        </Link>
        
        {/* Socials */}
        <div className="flex items-center gap-6">
          <a href="https://www.instagram.com/rheole_?igsh=MTV5dnF2ODU0ODVjMg==" target="_blank" rel="noopener noreferrer" className="text-[12px] text-[#3A3A3A] hover:text-[#6A6A6A] transition-colors uppercase tracking-widest interactive">Instagram</a>
          <span className="w-1 h-1 rounded-full bg-[rgba(255,255,255,0.1)]" />
          <a href="https://www.facebook.com/share/1cR5NhDCZm/" target="_blank" rel="noopener noreferrer" className="text-[12px] text-[#3A3A3A] hover:text-[#6A6A6A] transition-colors uppercase tracking-widest interactive">Facebook</a>
          <span className="w-1 h-1 rounded-full bg-[rgba(255,255,255,0.1)]" />
          <a href="https://x.com/rheole_" target="_blank" rel="noopener noreferrer" className="text-[12px] text-[#3A3A3A] hover:text-[#6A6A6A] transition-colors uppercase tracking-widest interactive">Twitter</a>
        </div>
      </ScrollReveal>
    </section>
  );
}

// -----------------------------------------------------------------------------
// MAIN PAGE
// -----------------------------------------------------------------------------

export default function Home() {
  return (
    <div className="relative w-full bg-[#080808]">
      <HeroSection />
      <ProductPreviewSection />
      <CapabilitiesSection />
      <LegacyRootsSection />
      <LegacyJoinSection />
    </div>
  );
}
