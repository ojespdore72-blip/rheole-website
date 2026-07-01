"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import { 
  PlayCircle, ArrowRight, Search, Zap
} from "lucide-react";

import {
  heroData, whatIsRheoleData, experienceData,
  platformPreviewData, technologyPreviewData, 
  researchTrustPreviewData, finalCtaData
} from "@/lib/data/homepage";

export default function Homepage() {
  const [isDemoActive, setIsDemoActive] = useState(false);
  
  // Parallax Setup
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Sticky Scroll Text Opacity for "What is Rheole"
  const textOpacity = useTransform(scrollYProgress, [0.1, 0.2, 0.25], [0.2, 1, 1]);

  return (
    <div ref={containerRef} className="bg-[#080808] text-[#F2F2F0] selection:bg-[#4F6EF7]/30 selection:text-[#F2F2F0] font-sans">
      
      {/* 1. HERO (100vh) - Cinematic Map Background */}
      <section className="relative h-[100vh] flex flex-col justify-center px-6 md:px-12 pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/home/platform.png"
            alt="Ambient Spatial Intelligence"
            fill
            className="object-cover opacity-40 scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#080808]/50 via-transparent to-[#080808]" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto w-full flex flex-col items-center text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[64px] md:text-[100px] lg:text-[140px] text-white font-serif-editorial font-light leading-[0.95] tracking-tighter mb-8"
          >
            {heroData.headline.split('.').map((part, i) => (
              <React.Fragment key={i}>
                {part}
                {i === 0 && <span className="text-[#4F6EF7]">.</span>}
              </React.Fragment>
            ))}
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1.2 }}
            className="text-[24px] md:text-[40px] text-[#A0A0A0] font-light tracking-tight mb-16 max-w-[800px]"
          >
            {heroData.subheadline}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="flex flex-col sm:flex-row items-center gap-6 backdrop-blur-md p-2 rounded-full bg-white/[0.02] border border-white/[0.05]"
          >
            <Link 
              href={heroData.ctaPrimary.link}
              className="h-[56px] px-8 rounded-full bg-white text-black font-medium text-[16px] flex items-center justify-center hover:scale-105 transition-transform duration-300 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]"
            >
              {heroData.ctaPrimary.label}
            </Link>
            <button className="h-[56px] px-8 rounded-full bg-transparent text-white font-medium text-[16px] flex items-center justify-center gap-3 hover:bg-white/[0.05] transition-colors group">
              <PlayCircle className="w-5 h-5 text-[#A0A0A0] group-hover:text-white transition-colors" />
              {heroData.ctaSecondary.label}
            </button>
          </motion.div>
        </div>
      </section>

      {/* 2. WHAT IS RHEOLE? (Sticky Scroll Reveal) */}
      <section className="min-h-[100vh] flex flex-col justify-center py-32 px-6 md:px-12 bg-black relative">
        <div className="max-w-[1200px] mx-auto text-center sticky top-1/4">
          <motion.div style={{ opacity: textOpacity }}>
            {whatIsRheoleData.map((line, i) => (
              <p key={i} className={`text-[32px] md:text-[64px] font-serif-editorial font-light leading-[1.1] mb-6 ${
                i >= 5 ? "text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]" : "text-[#333]"
              }`}>
                {line}
              </p>
            ))}
          </motion.div>
        </div>
        {/* Spacer for sticky scroll */}
        <div className="h-[50vh]" />
      </section>

      {/* 3. EXPERIENCE RHEOLE (Glassmorphism Spatial UI) */}
      <section className="min-h-[100vh] flex flex-col justify-center px-6 md:px-12 bg-[#080808] relative overflow-hidden">
        {/* Deep ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#4F6EF7]/10 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="max-w-[1200px] mx-auto w-full relative z-10 flex flex-col items-center text-center py-32">
          <ScrollReveal>
            <h2 className="text-[40px] md:text-[80px] font-serif-editorial font-light text-white mb-24 drop-shadow-2xl">{experienceData.title}</h2>
          </ScrollReveal>

          <div className="relative w-full max-w-[700px] flex justify-center">
            <button 
              onClick={() => setIsDemoActive(!isDemoActive)}
              className={`relative z-20 w-[90%] md:w-[600px] p-6 md:p-8 rounded-[40px] flex items-center justify-between transition-all duration-700 backdrop-blur-3xl ${
                isDemoActive 
                  ? "bg-white/[0.05] border border-white/[0.2] shadow-[0_30px_100px_-20px_rgba(79,110,247,0.4)] translate-y-[-20px]" 
                  : "bg-white/[0.02] border border-white/[0.05] hover:border-white/[0.1] hover:bg-white/[0.04]"
              }`}
            >
              <div className="flex items-center gap-6">
                <div className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-500 ${isDemoActive ? "bg-[#4F6EF7] shadow-[0_0_30px_-5px_rgba(79,110,247,0.8)]" : "bg-black border border-white/[0.1]"}`}>
                  <Search className={`w-6 h-6 ${isDemoActive ? "text-white" : "text-[#A0A0A0]"}`} />
                </div>
                <span className={`text-[28px] md:text-[40px] font-light tracking-tight ${isDemoActive ? "text-white" : "text-[#8A8A8A]"}`}>
                  &quot;{experienceData.trigger}&quot;
                </span>
              </div>
              <Zap className={`w-8 h-8 transition-all duration-500 ${isDemoActive ? "text-[#4F6EF7] opacity-100 scale-110" : "text-white/[0.2] opacity-50"}`} />
            </button>

            {/* Spatial Floating Responses */}
            <AnimatePresence>
              {isDemoActive && (
                <>
                  {experienceData.responses.map((res, i) => {
                    const positions = [
                      { x: -300, y: 100, delay: 0.1 },
                      { x: 300, y: 120, delay: 0.2 },
                      { x: -200, y: -120, delay: 0.3 },
                      { x: 250, y: -100, delay: 0.4 }
                    ];
                    return (
                      <motion.div 
                        key={i}
                        initial={{ opacity: 0, scale: 0.8, x: 0, y: 0 }}
                        animate={{ opacity: 1, scale: 1, x: positions[i].x, y: positions[i].y }}
                        exit={{ opacity: 0, scale: 0.8, x: 0, y: 0 }}
                        transition={{ delay: positions[i].delay, duration: 0.8, type: "spring", bounce: 0.4 }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 rounded-[32px] bg-black/60 backdrop-blur-2xl border border-white/[0.1] shadow-2xl z-10 w-[240px]"
                      >
                        <span className="block text-[11px] uppercase tracking-[0.2em] text-[#8A8A8A] font-medium mb-2">{res.label}</span>
                        <span className="block text-[20px] text-white font-light">{res.value}</span>
                      </motion.div>
                    );
                  })}
                </>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 4. PLATFORM PREVIEW (80vh) */}
      <section className="h-[80vh] flex flex-col justify-center px-6 md:px-12 relative overflow-hidden group">
        <div className="absolute inset-0 z-0">
          <Image src="/images/home/platform.png" alt="Platform Visual" fill className="object-cover opacity-30 group-hover:opacity-50 group-hover:scale-105 transition-all duration-1000" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        </div>
        <div className="max-w-[1200px] mx-auto w-full relative z-10">
          <ScrollReveal>
            <h2 className="text-[12px] uppercase tracking-[0.2em] text-[#4F6EF7] font-medium mb-6">{platformPreviewData.headline}</h2>
            <h3 className="text-[48px] md:text-[80px] font-serif-editorial font-light text-white leading-tight mb-8">
              {platformPreviewData.subheadline}
            </h3>
            <p className="text-[20px] md:text-[24px] text-[#A0A0A0] font-light leading-relaxed mb-12 max-w-[600px]">
              {platformPreviewData.description}
            </p>
            <Link 
              href={platformPreviewData.cta.link}
              className="inline-flex items-center gap-3 h-[64px] px-10 rounded-full bg-white text-black font-medium text-[16px] hover:scale-105 transition-transform duration-300"
            >
              {platformPreviewData.cta.label} <ArrowRight className="w-5 h-5" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* 5. TECHNOLOGY PREVIEW (80vh) */}
      <section className="h-[80vh] flex flex-col justify-center px-6 md:px-12 relative overflow-hidden group">
        <div className="absolute inset-0 z-0">
          <Image src="/images/home/technology.png" alt="Technology Visual" fill className="object-cover opacity-30 group-hover:opacity-50 group-hover:scale-105 transition-all duration-1000" />
          <div className="absolute inset-0 bg-gradient-to-l from-black via-black/80 to-transparent" />
        </div>
        <div className="max-w-[1200px] mx-auto w-full relative z-10 flex justify-end text-right">
          <ScrollReveal className="max-w-[600px] flex flex-col items-end">
            <h2 className="text-[12px] uppercase tracking-[0.2em] text-[#A0A0A0] font-medium mb-6">{technologyPreviewData.headline}</h2>
            <h3 className="text-[48px] md:text-[80px] font-serif-editorial font-light text-white leading-tight mb-8">
              {technologyPreviewData.subheadline}
            </h3>
            <p className="text-[20px] md:text-[24px] text-[#A0A0A0] font-light leading-relaxed mb-12">
              {technologyPreviewData.description}
            </p>
            <Link 
              href={technologyPreviewData.cta.link}
              className="inline-flex items-center gap-3 h-[64px] px-10 rounded-full bg-black/50 backdrop-blur-xl border border-white/[0.2] text-white font-medium text-[16px] hover:bg-white/[0.1] transition-colors"
            >
              {technologyPreviewData.cta.label} <ArrowRight className="w-5 h-5 text-[#A0A0A0]" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* 6. RESEARCH & TRUST PREVIEW (80vh) */}
      <section className="h-[80vh] flex flex-col justify-center px-6 md:px-12 relative overflow-hidden group border-y border-white/[0.05]">
        <div className="absolute inset-0 z-0">
          <Image src="/images/home/research.png" alt="Research Visual" fill className="object-cover opacity-30 group-hover:opacity-50 group-hover:scale-105 transition-all duration-1000" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black" />
        </div>
        <div className="max-w-[1200px] mx-auto w-full relative z-10 flex flex-col items-center text-center">
          <ScrollReveal>
            <h2 className="text-[12px] uppercase tracking-[0.2em] text-[#4F6EF7] font-medium mb-6">{researchTrustPreviewData.headline}</h2>
            <h3 className="text-[48px] md:text-[80px] font-serif-editorial font-light text-white leading-tight mb-8">
              {researchTrustPreviewData.subheadline}
            </h3>
            <p className="text-[20px] md:text-[24px] text-[#A0A0A0] font-light leading-relaxed mb-12 max-w-[800px] mx-auto">
              {researchTrustPreviewData.description}
            </p>
            <Link 
              href={researchTrustPreviewData.cta.link}
              className="inline-flex items-center gap-3 h-[64px] px-10 rounded-full bg-white text-black font-medium text-[16px] hover:scale-105 transition-transform duration-300"
            >
              {researchTrustPreviewData.cta.label} <ArrowRight className="w-5 h-5" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* 7. FINAL CTA (80vh) */}
      <section className="h-[80vh] flex flex-col justify-center px-6 md:px-12 text-center relative overflow-hidden bg-black">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[#4F6EF7]/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]" />

        <ScrollReveal>
          <div className="max-w-[1200px] mx-auto relative z-10">
            <h2 className="text-[48px] md:text-[100px] font-serif-editorial font-light text-white leading-[1.05] mb-12 tracking-tight">
              {finalCtaData.headline}<br />
              <span className="text-[#6A6A6A]">{finalCtaData.highlight}</span>
            </h2>
            
            <Link 
              href={finalCtaData.cta.link}
              className="mt-8 inline-flex items-center justify-center h-[72px] px-14 rounded-full bg-white text-black font-medium text-[18px] hover:scale-105 transition-transform duration-300 shadow-[0_0_50px_-10px_rgba(255,255,255,0.4)]"
            >
              {finalCtaData.cta.label}
            </Link>
          </div>
        </ScrollReveal>
      </section>

    </div>
  );
}
