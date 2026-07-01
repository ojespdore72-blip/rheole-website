"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import { ChevronDown, ArrowRight, Layers, BrainCircuit, Activity, Lock, Maximize, Zap, Code2, Cpu, Map } from "lucide-react";
import Link from "next/link";

// -----------------------------------------------------------------------------------
// REUSABLE COMPONENTS
// -----------------------------------------------------------------------------------

function KnowledgeBlock({ title, label = "Knowledge Block", children }: { title: string; label?: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-4 p-8 md:p-10 border border-white/[0.05] bg-white/[0.01] rounded-2xl shrink-0 h-fit sticky top-32 group hover:bg-white/[0.02] transition-colors duration-500">
      <div className="flex items-center gap-3">
        <div className="w-1.5 h-1.5 bg-[#4F6EF7] rounded-full" />
        <span className="text-[10px] uppercase tracking-[0.2em] text-[#6A6A6A] font-medium">{label}</span>
      </div>
      <h4 className="text-[18px] text-[#F2F2F0] font-medium tracking-tight mt-2">{title}</h4>
      <div className="text-[14px] text-[#A0A0A0] leading-relaxed font-light flex flex-col gap-4 mt-2">
        {children}
      </div>
    </div>
  );
}

// -----------------------------------------------------------------------------------
// SECTION COMPONENTS
// -----------------------------------------------------------------------------------

function IntroSection() {
  return (
    <section className="relative w-full min-h-[100vh] flex flex-col items-center justify-center px-6 md:px-12 pt-24 overflow-hidden">
      {/* Ambient background effect */}
      <div className="absolute inset-0 bg-[#030303]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(79,110,247,0.05)_0%,rgba(0,0,0,0)_60%)]" />
      
      <div className="max-w-[1200px] mx-auto z-20 flex flex-col items-center text-center gap-12 mt-16">
        <ScrollReveal>
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#6A6A6A] font-medium border border-white/[0.05] px-4 py-2 rounded-full bg-white/[0.02]">
            Rheole Technology
          </span>
        </ScrollReveal>
        
        <ScrollReveal delay={0.2}>
          <h1 className="text-[48px] md:text-[80px] lg:text-[110px] text-[#F2F2F0] font-serif-editorial font-light leading-[1.0] tracking-tight max-w-[1000px]">
            Technology should understand reality <span className="text-[#8A8A8A] italic">before</span> responding.
          </h1>
        </ScrollReveal>
        
        <ScrollReveal delay={0.4} className="mt-8">
          <p className="text-[18px] md:text-[24px] text-[#A0A0A0] font-light max-w-[750px] leading-relaxed">
            Rheole is not powered by a single AI model or a rigid algorithm. It is a continuous orchestration of spatial computing, contextual reasoning, environmental awareness, and human-centered engineering.
          </p>
        </ScrollReveal>
        
        <ScrollReveal delay={0.6} className="mt-16 text-[#6A6A6A] flex flex-col items-center gap-4 animate-pulse">
          <span className="text-[10px] uppercase tracking-widest font-medium">Explore Architecture</span>
          <ChevronDown size={16} strokeWidth={1.5} />
        </ScrollReveal>
      </div>
    </section>
  );
}

function PhilosophySection() {
  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 border-t border-white/[0.03]">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row gap-24">
        
        <div className="flex-1 flex flex-col gap-12">
          <ScrollReveal>
            <h2 className="text-[32px] md:text-[56px] text-[#F2F2F0] font-serif-editorial font-light leading-[1.1] tracking-tight">
              Intelligence emerges when systems cooperate.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="text-[18px] md:text-[24px] text-[#A0A0A0] font-light leading-relaxed flex flex-col gap-8">
              <p>
                Technology today is loud. It demands constant input. It requires you to translate your human intent into database queries.
              </p>
              <p className="text-[#F2F2F0] text-[24px] md:text-[32px] leading-snug border-l-2 border-[#4F6EF7] pl-8 py-2">
                Technology should not feel like technology.
              </p>
              <p>
                Artificial Intelligence alone is not enough to solve this. Maps alone are not enough. Sensors alone are not enough. Data alone is not enough.
              </p>
              <p>
                Rheole was engineered under a single premise: intelligence only emerges when all of these systems work together invisibly in the background.
              </p>
            </div>
          </ScrollReveal>
        </div>

        <div className="w-full md:w-[400px]">
          <KnowledgeBlock title="Ambient Intelligence Engine™" label="Proprietary Concept">
            <p>
              The orchestration layer at the heart of Rheole. Rather than forcing you to open a specific app for a specific task, the Engine constantly evaluates your context in the background.
            </p>
            <p>
              It combines LLM-based reasoning, precise spatial data, and real-time environmental sensors into one unified stream of understanding.
            </p>
          </KnowledgeBlock>
        </div>

      </div>
    </section>
  );
}

function TechStackSection() {
  const layers = [
    { name: "Human Presence Layer", desc: "Local identity and network topology." },
    { name: "Mobility Intelligence", desc: "Vector prediction and transit routing." },
    { name: "Mapping Layer", desc: "Cartographic rendering and spatial nodes." },
    { name: "Real-time Data Layer", desc: "Live event ingestion and mutation." },
    { name: "Environmental Engine", desc: "Weather, lighting, and acoustic states." },
    { name: "Context Engine", desc: "Temporal and calendar-based awareness." },
    { name: "Artificial Intelligence", desc: "Semantic reasoning and synthesis." },
    { name: "Spatial Intelligence", desc: "The foundational topology of reality." },
  ];

  return (
    <section className="relative w-full py-[200px] px-6 md:px-12 bg-[#050505] border-y border-white/[0.03] overflow-hidden">
      
      {/* Background visual */}
      <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/[0.02] rounded-full flex items-center justify-center opacity-30 pointer-events-none">
        <div className="w-[600px] h-[600px] border border-white/[0.03] rounded-full flex items-center justify-center">
          <div className="w-[400px] h-[400px] border border-white/[0.05] rounded-full" />
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto flex flex-col gap-24 relative z-10">
        
        <ScrollReveal>
          <div className="flex flex-col gap-6 max-w-[800px]">
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#6A6A6A] font-medium">The Stack</span>
            <h2 className="text-[40px] md:text-[64px] text-[#F2F2F0] font-serif-editorial font-light leading-[1.1] tracking-tight">
              An architecture of understanding.
            </h2>
            <p className="text-[18px] md:text-[22px] text-[#8A8A8A] font-light leading-relaxed">
              Rheole separates intelligence into specialized layers. This is not a monolithic application; it is a highly decoupled stack of engines that evaluate reality from different perspectives.
            </p>
          </div>
        </ScrollReveal>

        <div className="flex flex-col md:flex-row gap-16 items-center">
          
          {/* Visual Stack Diagram */}
          <div className="flex-1 w-full flex flex-col gap-3">
            {layers.map((layer, i) => (
              <ScrollReveal key={i} delay={i * 0.05} className="w-full">
                <div 
                  className="w-full py-5 px-8 bg-[#0A0A0A] border border-white/[0.05] rounded-xl flex items-center justify-between group hover:bg-[#111111] hover:border-white/[0.1] transition-all duration-500 cursor-default relative overflow-hidden"
                  style={{ transform: `scale(${1 - (i * 0.02)})`, opacity: 1 - (i * 0.05) }}
                >
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#4F6EF7] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="text-[16px] text-[#F2F2F0] font-medium tracking-tight z-10">{layer.name}</span>
                  <span className="text-[13px] text-[#6A6A6A] font-light z-10 hidden md:block">{layer.desc}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="w-full md:w-[450px] flex flex-col gap-8">
            <KnowledgeBlock title="Privacy Layer" label="Architecture Insight">
              <p>
                Notice what wraps all of these layers: the Privacy Layer. It sits invisibly between the Cloud Infrastructure and the Human Presence Layer. 
              </p>
              <p>
                By decoupling identity from spatial queries, Rheole ensures that the intelligence engine can understand a scene without ever needing to know exactly who is looking at it.
              </p>
            </KnowledgeBlock>
          </div>

        </div>

      </div>
    </section>
  );
}

function IntelligenceEngineSection() {
  const steps = [
    { label: "Input", title: "User Intent", desc: "A vague human request or an implicit routine.", icon: <Activity size={20} /> },
    { label: "Filter", title: "Context", desc: "Time of day, calendar events, immediate history.", icon: <BrainCircuit size={20} /> },
    { label: "Filter", title: "Environment", desc: "Current weather, lighting, acoustic levels.", icon: <Layers size={20} /> },
    { label: "Filter", title: "Spatial Understanding", desc: "The topology of the city and active entities.", icon: <Map size={20} /> },
    { label: "Compute", title: "Reasoning", desc: "Synthesizing the filtered data against the intent.", icon: <Cpu size={20} /> },
    { label: "Output", title: "Recommendation", desc: "The single best action, place, or route.", icon: <Zap size={20} /> }
  ];

  return (
    <section className="relative w-full py-[160px] px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-24">
        
        <div className="flex flex-col md:flex-row justify-between items-end gap-12 border-b border-white/[0.05] pb-16">
          <ScrollReveal>
            <div className="flex flex-col gap-6 max-w-[700px]">
              <h2 className="text-[40px] md:text-[56px] text-[#F2F2F0] font-serif-editorial font-light leading-[1.1] tracking-tight">
                The Adaptive Intelligence Pipeline™
              </h2>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.1}>
            <p className="text-[16px] md:text-[18px] text-[#8A8A8A] font-light max-w-[400px]">
              Every interaction passes through multiple reasoning filters. Intelligence is a process of elimination, not a process of searching.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="flex flex-col gap-6 p-8 bg-white/[0.01] border border-white/[0.03] rounded-2xl h-full group hover:bg-white/[0.02] transition-colors duration-500">
                <div className="flex items-center justify-between text-[#4F6EF7]">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-[#6A6A6A]">{step.label}</span>
                  {step.icon}
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-[20px] text-white font-medium">{step.title}</h3>
                  <p className="text-[14px] text-[#A0A0A0] font-light leading-relaxed">{step.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}

function InformationFlowSection() {
  return (
    <section className="relative w-full py-[200px] px-6 md:px-12 bg-[#030303]">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-24 text-center">
        
        <ScrollReveal>
          <div className="flex flex-col items-center gap-6 max-w-[800px]">
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#6A6A6A] font-medium">Data Transformation</span>
            <h2 className="text-[40px] md:text-[64px] text-[#F2F2F0] font-serif-editorial font-light leading-[1.1] tracking-tight">
              Transforming reality into understanding.
            </h2>
            <p className="text-[18px] md:text-[22px] text-[#8A8A8A] font-light leading-relaxed">
              Data is meaningless without relationships. Rheole does not simply store places; it stores the dynamic relationships between places, events, and movement.
            </p>
          </div>
        </ScrollReveal>

        {/* Massive Flow Diagram */}
        <ScrollReveal delay={0.2} className="w-full">
          <div className="w-full py-24 px-8 md:px-16 border border-white/[0.05] bg-[#050505] rounded-3xl flex flex-col items-center gap-16 relative overflow-hidden">
            
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(79,110,247,0.02)_0%,rgba(0,0,0,0)_100%)] pointer-events-none" />

            {/* Top row */}
            <div className="flex flex-wrap justify-center gap-4 w-full max-w-[800px] z-10">
              {['Places', 'People', 'Businesses', 'Events', 'Movement', 'Environment'].map((item) => (
                <div key={item} className="px-6 py-3 border border-white/[0.08] rounded-full text-[13px] text-[#A0A0A0] bg-[#0A0A0A]">
                  {item}
                </div>
              ))}
            </div>

            {/* Down arrows */}
            <div className="flex flex-col items-center gap-2 text-[#4F6EF7] z-10 opacity-50">
              <div className="w-[1px] h-12 bg-gradient-to-b from-[#4F6EF7] to-transparent" />
            </div>

            {/* Middle layer */}
            <div className="w-full max-w-[600px] py-8 border border-[#4F6EF7]/20 bg-[#4F6EF7]/5 rounded-2xl flex items-center justify-center text-[18px] text-[#F2F2F0] font-serif-editorial z-10 shadow-[0_0_60px_rgba(79,110,247,0.05)]">
              Living World Graph™
            </div>

            {/* Down arrows */}
            <div className="flex flex-col items-center gap-2 text-[#4F6EF7] z-10 opacity-50">
              <div className="w-[1px] h-12 bg-gradient-to-b from-[#4F6EF7] to-transparent" />
            </div>

            {/* Bottom Row */}
            <div className="flex flex-wrap justify-center gap-8 w-full max-w-[800px] z-10">
              <div className="flex flex-col items-center gap-3">
                <span className="text-[16px] text-white font-medium tracking-tight">Understanding</span>
                <span className="text-[12px] text-[#6A6A6A]">Semantic mapping</span>
              </div>
              <ArrowRight className="text-[#6A6A6A] mt-1" size={16} />
              <div className="flex flex-col items-center gap-3">
                <span className="text-[16px] text-white font-medium tracking-tight">Reasoning</span>
                <span className="text-[12px] text-[#6A6A6A]">Contextual filtering</span>
              </div>
              <ArrowRight className="text-[#6A6A6A] mt-1" size={16} />
              <div className="flex flex-col items-center gap-3">
                <span className="text-[16px] text-white font-medium tracking-tight">Decision</span>
                <span className="text-[12px] text-[#6A6A6A]">User experience</span>
              </div>
            </div>

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}

function WhyArchitectureSection() {
  const benefits = [
    { title: "Clarity", desc: "A decoupled architecture ensures that routing logic never interferes with social graph logic, resulting in pristine, bug-free experiences." },
    { title: "Scalability", desc: "When an event scales from 10 to 10,000 people, the Real-time Data Layer scales independently of the Mapping Layer." },
    { title: "Reliability", desc: "If the AI layer experiences high latency, the core mapping and routing engines degrade gracefully, remaining perfectly functional." },
    { title: "Adaptability", desc: "New intelligence models can be swapped into the Context Fabric™ without rewriting the entire application frontend." }
  ];

  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 border-y border-white/[0.03]">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row gap-24">
        
        <div className="w-full md:w-[400px]">
          <KnowledgeBlock title="Context Fabric™" label="Technology Notes">
            <p>
              The system that continuously assembles contextual signals into one coherent understanding. 
            </p>
            <p>
              It weaves together calendar APIs, accelerometer data, weather APIs, and local time into a standardized format that the reasoning engine can digest instantly.
            </p>
          </KnowledgeBlock>
        </div>

        <div className="flex-1 flex flex-col gap-16">
          <ScrollReveal>
            <h2 className="text-[32px] md:text-[48px] text-[#F2F2F0] font-serif-editorial font-light leading-[1.1] tracking-tight">
              Why build it this way?
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {benefits.map((benefit, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3 border-b border-white/[0.1] pb-4">
                    <Maximize size={16} className="text-[#4F6EF7]" />
                    <h3 className="text-[18px] text-white font-medium tracking-tight">{benefit.title}</h3>
                  </div>
                  <p className="text-[15px] text-[#A0A0A0] font-light leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

function PrivacySection() {
  return (
    <section className="relative w-full py-[200px] px-6 md:px-12 bg-[#050505]">
      <div className="max-w-[1000px] mx-auto flex flex-col items-center text-center gap-16">
        
        <ScrollReveal>
          <div className="w-16 h-16 bg-[#0A0A0A] border border-white/[0.05] rounded-full flex items-center justify-center text-white mb-8 mx-auto">
            <Lock size={24} strokeWidth={1.5} />
          </div>
          <h2 className="text-[40px] md:text-[64px] text-[#F2F2F0] font-serif-editorial font-light leading-[1.1] tracking-tight">
            Privacy as an architectural foundation.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-[18px] md:text-[24px] text-[#8A8A8A] font-light max-w-[800px] leading-relaxed">
            Privacy cannot be added later. It must be designed into the lowest levels of the engine. In Rheole, the system that knows your identity is cryptographically separated from the system that knows your location.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-12">
          <ScrollReveal delay={0.3}>
            <div className="p-8 border border-white/[0.05] bg-[#0A0A0A] rounded-2xl flex flex-col gap-4 text-left">
              <span className="text-[14px] text-white font-medium">On-Device Reasoning</span>
              <p className="text-[13px] text-[#A0A0A0] font-light">Whenever mathematically possible, contextual inference happens on your local hardware, never hitting our cloud.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.4}>
            <div className="p-8 border border-white/[0.05] bg-[#0A0A0A] rounded-2xl flex flex-col gap-4 text-left">
              <span className="text-[14px] text-white font-medium">Permission-Based</span>
              <p className="text-[13px] text-[#A0A0A0] font-light">Intelligence is an opt-in layer. If you disable calendar access, the system degrades gracefully rather than breaking.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.5}>
            <div className="p-8 border border-white/[0.05] bg-[#0A0A0A] rounded-2xl flex flex-col gap-4 text-left">
              <span className="text-[14px] text-white font-medium">Transparent AI</span>
              <p className="text-[13px] text-[#A0A0A0] font-light">The engine will always explain exactly which contextual signals were used to generate a recommendation.</p>
            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}

function EngineeringPrinciplesSection() {
  const principles = [
    "Technology should explain itself.",
    "Systems should degrade gracefully.",
    "Intelligence should remain transparent.",
    "Performance is a feature.",
    "Latency matters.",
    "Reliability matters.",
    "Accessibility matters.",
    "Every engineering decision should improve human experience."
  ];

  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 border-t border-white/[0.03]">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row gap-24">
        
        <div className="w-full md:w-[400px]">
          <ScrollReveal>
            <h2 className="text-[32px] md:text-[48px] text-[#F2F2F0] font-serif-editorial font-light leading-[1.1] tracking-tight">
              Engineering<br />Principles
            </h2>
            <p className="mt-6 text-[15px] text-[#8A8A8A] font-light">
              The internal guidelines used by the architecture and engineering teams at Rheole. These are not marketing slogans; they are code review requirements.
            </p>
          </ScrollReveal>
        </div>

        <div className="flex-1 flex flex-col gap-0 border-t border-white/[0.05]">
          {principles.map((principle, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <div className="py-6 border-b border-white/[0.05] flex items-center gap-6 group hover:bg-white/[0.01] transition-colors duration-300 px-4">
                <Code2 size={16} className="text-[#6A6A6A] group-hover:text-[#4F6EF7] transition-colors" />
                <span className="text-[18px] md:text-[22px] text-[#A0A0A0] group-hover:text-white transition-colors font-light">
                  {principle}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}

function FutureSection() {
  return (
    <section className="relative w-full py-[240px] px-6 md:px-12 overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[#4F6EF7] rounded-full blur-[250px] opacity-[0.03] pointer-events-none" />

      <div className="max-w-[1000px] mx-auto text-center flex flex-col items-center gap-16 relative z-10">
        
        <ScrollReveal>
          <span className="text-[11px] uppercase tracking-[0.2em] text-[#6A6A6A] font-medium border border-white/[0.05] px-4 py-2 rounded-full bg-white/[0.02]">
            The Future of Spatial Computing
          </span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="text-[48px] md:text-[80px] lg:text-[100px] text-[#F2F2F0] font-serif-editorial font-light leading-[1.05] tracking-tight">
            Technology will become ambient.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="text-[20px] md:text-[28px] text-[#A0A0A0] font-light max-w-[800px] leading-relaxed flex flex-col gap-8">
            <p>
              Future computing will not revolve around isolated applications fighting for your attention on a glass screen.
            </p>
            <p className="text-white italic font-serif-editorial text-[28px] md:text-[40px]">
              Invisible. Context-aware. Human-centered.
            </p>
            <p>
              It will revolve around intelligent layers that understand the world continuously. The ultimate goal of Rheole's technology is to disappear entirely.
            </p>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}

// -----------------------------------------------------------------------------------
// MAIN PAGE EXPORT
// -----------------------------------------------------------------------------------

export default function TechnologyPage() {
  return (
    <div className="relative w-full bg-[#030303] text-[#F2F2F0] selection:bg-[#4F6EF7]/30 selection:text-[#F2F2F0]">
      <IntroSection />
      <PhilosophySection />
      <TechStackSection />
      <IntelligenceEngineSection />
      <InformationFlowSection />
      <WhyArchitectureSection />
      <PrivacySection />
      <EngineeringPrinciplesSection />
      <FutureSection />
    </div>
  );
}
