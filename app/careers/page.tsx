"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Link from "next/link";

const ChallengeWidget = ({ title, desc, visual }: any) => (
  <div className="w-full lg:w-1/3 flex flex-col gap-6">
    <div className="w-full aspect-square spatial-glass rounded-3xl border border-brand-blue/10 dark:border-white/10 overflow-hidden relative flex items-center justify-center p-6 group hover:border-brand-gold/50 transition-colors duration-500">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-blue/5 dark:from-white/5 to-transparent z-0" />
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        {visual}
      </div>
    </div>
    <div>
      <h3 className="text-xl font-medium text-brand-blue dark:text-white mb-2">{title}</h3>
      <p className="text-sm font-light text-brand-blue/70 dark:text-white/70 leading-relaxed">{desc}</p>
    </div>
  </div>
);

export default function Careers() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  return (
    <div ref={containerRef} className="relative w-full min-h-screen bg-luxury-white dark:bg-[#020205] text-brand-blue dark:text-white overflow-hidden selection:bg-brand-gold/20 font-sans">
      {/* 1. HERO - Emotional Aspiration */}
      <motion.section 
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="relative z-0 flex flex-col items-center justify-center pt-32 pb-20 px-6 min-h-[80vh]"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(79,70,229,0.15),transparent_60%)] pointer-events-none" />
        <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center gap-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="w-20 h-20 rounded-full border border-brand-gold/30 bg-brand-gold/5 flex items-center justify-center mb-4"
          >
            <div className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-[100px] font-light font-serif-editorial leading-[1.1] tracking-tight"
          >
            Build the <span className="italic text-brand-gold">layer</span> <br/>that connects the world.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="text-lg md:text-2xl font-light text-brand-blue/70 dark:text-white/70 max-w-2xl leading-relaxed"
          >
            We don't need more social feeds. We need engineers, designers, and thinkers who want to make physical reality legible, intelligent, and deeply human again.
          </motion.p>
        </div>
      </motion.section>

      {/* 2. CULTURE & PHILOSOPHY */}
      <section className="relative z-10 w-full py-32 px-6 md:px-12 bg-brand-blue/[0.02] dark:bg-[#05050C] border-t border-brand-blue/5 dark:border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col gap-24">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
            <div className="w-full lg:w-1/2 flex flex-col gap-8">
              <span className="text-xs uppercase tracking-[0.4em] font-mono text-brand-gold">Engineering Culture</span>
              <h2 className="text-4xl md:text-6xl font-light font-serif-editorial leading-tight">
                Originality over conformity.
              </h2>
              <div className="flex flex-col gap-6 text-lg font-light text-brand-blue/70 dark:text-white/70 leading-relaxed">
                <p>
                  At Rheole, we do not follow standard playbooks. We are building an operating system for the physical world. This requires first-principles thinking across every discipline.
                </p>
                <p>
                  <strong className="text-brand-blue dark:text-white font-medium">Ownership:</strong> There are no cogs here. You own entire domains. If you see a problem, you have the authority to solve it.
                </p>
                <p>
                  <strong className="text-brand-blue dark:text-white font-medium">Learning:</strong> We are tackling unmapped territory in spatial AI and distributed systems. We expect you to be comfortable in the unknown.
                </p>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2">
              <div className="w-full aspect-[4/3] rounded-[40px] overflow-hidden relative">
                <img src="/web_image_1.png" alt="Culture" className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity opacity-40 hover:mix-blend-normal hover:opacity-100 transition-all duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-white dark:from-black via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-8 left-8">
                  <p className="text-xs uppercase tracking-widest font-mono text-brand-blue/70 dark:text-white/70">Bengaluru Lab</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ENGINEERING CHALLENGES (WIDGETS) */}
      <section className="relative z-10 w-full py-32 px-6 md:px-12 bg-luxury-white dark:bg-black">
        <div className="max-w-7xl mx-auto flex flex-col gap-20">
          <div className="text-center max-w-3xl mx-auto flex flex-col gap-6">
            <span className="text-xs uppercase tracking-[0.4em] font-mono text-brand-gold">The Work</span>
            <h2 className="text-4xl md:text-6xl font-light font-serif-editorial">Problems worth solving.</h2>
            <p className="text-lg font-light text-brand-blue/70 dark:text-white/70">We are not optimizing ad clicks. We are solving core infrastructure challenges in spatial computing.</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            <ChallengeWidget 
              title="Spatial AI & Reasoning"
              desc="Building ambient models that understand the implicit context of a user's location, intent, and local density without requiring explicit search queries."
              visual={
                <div className="w-full h-full relative flex items-center justify-center">
                  <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="w-32 h-32 border border-brand-indigo/30 rounded-full flex items-center justify-center">
                    <motion.div animate={{ rotate: -360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} className="w-20 h-20 border border-brand-gold/30 rounded-full border-dashed flex items-center justify-center">
                      <div className="w-2 h-2 bg-brand-blue dark:bg-white rounded-full shadow-[0_0_10px_rgba(79,70,229,0.5)] dark:shadow-[0_0_10px_white]" />
                    </motion.div>
                  </motion.div>
                </div>
              }
            />
            <ChallengeWidget 
              title="Distributed Local Maps"
              desc="Ingesting millions of ephemeral events, pop-ups, and community gatherings into a dynamic topology that updates in milliseconds."
              visual={
                <div className="w-full h-full relative flex flex-col items-center justify-center gap-4">
                   <div className="w-full h-1/2 flex items-end justify-center gap-2">
                     {[30, 70, 40, 90, 50].map((h, i) => (
                       <motion.div 
                        key={i}
                        animate={{ height: [`${h}%`, `${Math.max(10, h - 20)}%`, `${h}%`] }}
                        transition={{ duration: 2 + i * 0.5, repeat: Infinity }}
                        className="w-4 bg-brand-blue/20 dark:bg-white/20 rounded-t"
                       />
                     ))}
                   </div>
                   <div className="w-3/4 h-[1px] bg-brand-blue/10 dark:bg-white/10" />
                </div>
              }
            />
            <ChallengeWidget 
              title="Design & Motion"
              desc="Crafting interfaces that feel alive. Fluid physics, spatial depth, and micro-interactions that communicate intelligence instantly."
              visual={
                <div className="w-full h-full relative flex items-center justify-center">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-24 h-24 rounded-3xl bg-brand-blue/5 dark:bg-white/10 backdrop-blur-md border border-brand-blue/10 dark:border-white/20 shadow-2xl flex items-center justify-center cursor-pointer"
                  >
                    <span className="text-xs font-mono text-brand-blue/70 dark:text-white/70">Hover</span>
                  </motion.div>
                </div>
              }
            />
          </div>
        </div>
      </section>

      {/* 4. OPEN ROLES */}
      <section className="relative z-10 w-full py-32 px-6 md:px-12 bg-brand-blue/[0.02] dark:bg-[#020205] border-t border-brand-blue/5 dark:border-white/5">
        <div className="max-w-4xl mx-auto flex flex-col gap-16">
          <div className="text-center max-w-3xl mx-auto flex flex-col gap-6">
            <span className="text-xs uppercase tracking-[0.4em] font-mono text-brand-gold">Open Roles</span>
            <h2 className="text-4xl md:text-6xl font-light font-serif-editorial">Join the team.</h2>
            <p className="text-lg font-light text-brand-blue/70 dark:text-white/70">We are intentionally building a small, exceptional team. If you are world-class at what you do, we want to hear from you.</p>
          </div>

          <div className="flex flex-col gap-6">
            {[
              {
                title: "Founding Engineer (Backend)",
                location: "Bengaluru / Remote",
                desc: "Build robust scalable APIs, design data pipelines, and architect low-latency spatial queries."
              },
              {
                title: "Senior Machine Learning Engineer",
                location: "Bengaluru / Remote",
                desc: "Develop contextual recommendation algorithms, work on NLP models, and optimize inference performance."
              },
              {
                title: "Data Analyst",
                location: "Remote",
                desc: "Analyze user interaction patterns, build core dashboards, and interpret spatial data at scale."
              }
            ].map((role, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 p-8 border border-brand-blue/10 dark:border-white/10 rounded-3xl bg-luxury-white/50 dark:bg-black/50 spatial-glass group hover:border-brand-gold/30 transition-colors"
              >
                <div className="flex flex-col gap-3">
                  <h3 className="text-xl font-medium text-brand-blue dark:text-white uppercase tracking-wider group-hover:text-brand-gold transition-colors">
                    {role.title}
                  </h3>
                  <p className="text-sm font-light text-brand-blue/70 dark:text-white/70 max-w-xl">
                    {role.desc}
                  </p>
                  <span className="text-[10px] uppercase tracking-widest font-mono text-brand-blue/70 dark:text-white/70 mt-2">
                    Location: {role.location}
                  </span>
                </div>
                <Link
                  href={`/careers/apply?role=${encodeURIComponent(role.title)}`}
                  className="shrink-0 px-8 py-3 border border-brand-blue/20 dark:border-white/20 rounded-full text-xs font-mono uppercase tracking-widest text-brand-blue dark:text-white hover:bg-brand-gold hover:text-white hover:border-brand-gold transition-all"
                >
                  Apply
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-sm text-brand-blue/70 dark:text-white/70 italic">
              Don't see a role that fits? We hire for talent, curiosity, and craftsmanship. <a href="mailto:founders@rheole.com" className="text-brand-gold hover:underline">Email the founders.</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
