"use client";

import React from "react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import { 
  Terminal, 
  MousePointer2, 
  Search, 
  Hand, 
  Mic, 
  Sparkles, 
  Wind,
  BrainCircuit,
  EyeOff,
  ShieldCheck,
  CheckCircle2,
  Workflow,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

// -----------------------------------------------------------------------------------
// REUSABLE COMPONENTS
// -----------------------------------------------------------------------------------

function ResearchNote({ title, category, children }: { title: string; category: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-4 py-8 border-t border-white/[0.08] group relative">
      <div className="absolute left-0 top-0 w-0 h-[1px] bg-[#F2F2F0] group-hover:w-full transition-all duration-700 ease-in-out" />
      <div className="flex items-center gap-3">
        <span className="text-[10px] uppercase tracking-[0.2em] text-[#6A6A6A] font-medium">{category}</span>
        <div className="flex-1 border-b border-white/[0.03] border-dashed" />
      </div>
      <h4 className="text-[18px] text-[#F2F2F0] font-medium tracking-tight mt-2">{title}</h4>
      <div className="text-[15px] text-[#8A8A8A] leading-relaxed font-light">
        {children}
      </div>
    </div>
  );
}

function SectionHeading({ title, subtitle, centered = false }: { title: string; subtitle?: string; centered?: boolean }) {
  return (
    <div className={`flex flex-col gap-4 mb-16 ${centered ? "items-center text-center mx-auto" : ""}`}>
      {subtitle && (
        <ScrollReveal>
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#6A6A6A] font-medium">{subtitle}</span>
        </ScrollReveal>
      )}
      <ScrollReveal delay={0.1}>
        <h2 className="text-[40px] md:text-[56px] text-[#F2F2F0] font-serif-editorial font-light leading-[1.1] tracking-tight max-w-[800px]">
          {title}
        </h2>
      </ScrollReveal>
    </div>
  );
}

// -----------------------------------------------------------------------------------
// SECTIONS
// -----------------------------------------------------------------------------------

function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center px-6 md:px-12 pt-32 pb-20 overflow-hidden bg-[#080808]">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02] mix-blend-overlay pointer-events-none" />
      
      <div className="max-w-[1000px] mx-auto z-10 flex flex-col items-start gap-12 w-full mt-12">
        <ScrollReveal>
          <div className="flex items-center gap-4">
            <div className="w-12 h-[1px] bg-white/[0.2]" />
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#A0A0A0] font-medium">Rheole Research • Applied AI</span>
          </div>
        </ScrollReveal>
        
        <ScrollReveal delay={0.2}>
          <h1 className="text-[64px] md:text-[96px] lg:text-[110px] text-[#F2F2F0] font-serif-editorial font-light leading-[0.95] tracking-tight">
            Ambient AI
          </h1>
          <p className="text-[20px] md:text-[24px] text-[#8A8A8A] font-light mt-6 tracking-wide">
            The Next Evolution of Human-Centred Intelligence.
          </p>
        </ScrollReveal>
        
        <div className="flex flex-col gap-8 mt-12 w-full max-w-[700px]">
          <ScrollReveal delay={0.4}>
            <p className="text-[22px] md:text-[28px] text-[#A0A0A0] font-light leading-relaxed">
              For decades, software has required people to adapt to computers. Commands. Menus. Search boxes. Prompts. Notifications. Buttons.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.5}>
            <p className="text-[18px] text-[#6A6A6A] font-light leading-relaxed">
              Humans have learned how to communicate with machines. Ambient AI reverses this relationship. Machines begin learning how to understand humans. Without constant interaction. Without interruption. Without unnecessary complexity.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function TheShiftSection() {
  const timeline = [
    { icon: <Terminal className="w-4 h-4"/>, label: "Command Line" },
    { icon: <MousePointer2 className="w-4 h-4"/>, label: "Graphical Interfaces" },
    { icon: <Search className="w-4 h-4"/>, label: "Search" },
    { icon: <Hand className="w-4 h-4"/>, label: "Touch" },
    { icon: <Mic className="w-4 h-4"/>, label: "Voice" },
    { icon: <Sparkles className="w-4 h-4"/>, label: "Generative AI" },
  ];

  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#050505]">
      <div className="max-w-[1000px] mx-auto flex flex-col gap-16">
        <div className="flex flex-col gap-8">
          <SectionHeading subtitle="Historical Context" title="The Shift" />
          <ScrollReveal delay={0.2}>
            <p className="text-[28px] md:text-[36px] text-[#F2F2F0] font-serif-editorial font-light leading-tight">
              Technology has always waited to be asked. The next generation will quietly understand.
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.3}>
          <div className="flex flex-wrap items-center gap-4 mt-8">
            {timeline.map((item, idx) => (
              <React.Fragment key={idx}>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.05] bg-white/[0.02] text-[#8A8A8A] text-[13px] tracking-wide">
                  {item.icon} {item.label}
                </div>
                {idx < timeline.length - 1 && <ArrowRight className="w-4 h-4 text-[#444]" />}
              </React.Fragment>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <ScrollReveal delay={0.4}>
            <p className="text-[18px] text-[#8A8A8A] font-light leading-relaxed">
              Every stage in the evolution of computing was designed to reduce friction. Moving from typing arcane commands to clicking icons to tapping glass, the goal was to make human-computer interaction more natural.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.5}>
            <p className="text-[18px] text-[#8A8A8A] font-light leading-relaxed">
              Yet, all of them share a fundamental flaw: they still require the human to initiate. Ambient AI removes another layer entirely. It removes the necessity of the prompt.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function WhatIsSection() {
  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#080808]">
      <div className="max-w-[1000px] mx-auto flex flex-col gap-16">
        <div className="text-center">
          <SectionHeading subtitle="Educational Chapter" title="What is Ambient AI?" centered={true} />
        </div>

        <ScrollReveal delay={0.2}>
          <div className="p-12 md:p-16 border border-white/[0.05] bg-white/[0.01] rounded-[24px] text-center">
            <p className="text-[22px] md:text-[32px] text-[#F2F2F0] font-serif-editorial font-light leading-relaxed max-w-[800px] mx-auto">
              Ambient AI is intelligence that continuously understands people, places, and situations while remaining calm, respectful, and unobtrusive.
            </p>
            <p className="text-[18px] text-[#8A8A8A] font-light mt-8">
              It does not seek attention. It quietly becomes useful.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {[
            { title: "Generative AI", desc: "Focuses on creating content, writing code, and answering direct questions based on explicit prompts." },
            { title: "Spatial AI", desc: "Focuses on understanding the physical relationships and geometry of the environment." },
            { title: "Ambient AI", desc: "Focuses on understanding the human state, context, and intent to provide calm, zero-click utility.", active: true }
          ].map((item, idx) => (
            <ScrollReveal key={idx} delay={0.3 + (idx * 0.1)}>
              <div className={`p-8 h-full rounded-[16px] border ${item.active ? 'border-white/[0.1] bg-white/[0.03]' : 'border-white/[0.03] bg-transparent'}`}>
                <h4 className={`text-[18px] mb-4 ${item.active ? 'text-white' : 'text-[#8A8A8A]'}`}>{item.title}</h4>
                <p className="text-[15px] text-[#6A6A6A] font-light leading-relaxed">{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function PrinciplesSection() {
  const principles = [
    { title: "Understanding before responding.", desc: "An AI should silently observe the context of a situation before attempting to offer an intervention." },
    { title: "Context before commands.", desc: "The state of the world (time, location, weather, company) carries more weight than explicit verbal instructions." },
    { title: "Intent before interaction.", desc: "Deducing what a user is trying to achieve is more valuable than forcing them to navigate a menu." },
    { title: "Transparency before automation.", desc: "The user must always understand why a system made a choice, possessing the ability to override it instantly." },
    { title: "Privacy before personalization.", desc: "Intelligence must never come at the cost of surveillance. Computation should be local, and data should be ephemeral." },
    { title: "Calm before convenience.", desc: "A system should never interrupt a user's focus unless the notification is critical. Silence is the default." },
    { title: "Human agency before optimisation.", desc: "AI should augment human decision-making, not replace it in the name of raw efficiency." }
  ];

  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#050505]">
      <div className="max-w-[1000px] mx-auto flex flex-col lg:flex-row gap-20">
        <div className="lg:w-1/3">
          <SectionHeading subtitle="The Framework" title="The Principles" />
          <ScrollReveal delay={0.2}>
            <p className="text-[18px] text-[#8A8A8A] font-light leading-relaxed">
              These research principles govern every Ambient AI system designed at Rheole. They ensure that intelligence serves the human, rather than demanding the human serve the system.
            </p>
          </ScrollReveal>
        </div>
        <div className="lg:w-2/3 flex flex-col gap-12">
          {principles.map((p, idx) => (
            <ScrollReveal key={idx} delay={0.1 * idx}>
              <div className="flex flex-col gap-2">
                <h4 className="text-[20px] text-[#F2F2F0] font-medium tracking-tight">{p.title}</h4>
                <p className="text-[16px] text-[#8A8A8A] font-light leading-relaxed">{p.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ReactiveToProactiveSection() {
  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#080808]">
      <div className="max-w-[1000px] mx-auto flex flex-col gap-20">
        <div className="text-center">
          <SectionHeading subtitle="Evolution" title="From Reactive to Proactive" centered={true} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ScrollReveal delay={0.1}>
            <div className="flex flex-col gap-4 p-8 border-l border-white/[0.05]">
              <span className="text-[12px] uppercase tracking-widest text-[#6A6A6A]">Traditional Software</span>
              <p className="text-[24px] text-[#A0A0A0] font-serif-editorial">Waits.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="flex flex-col gap-4 p-8 border-l border-white/[0.05]">
              <span className="text-[12px] uppercase tracking-widest text-[#6A6A6A]">AI Assistants</span>
              <p className="text-[24px] text-[#A0A0A0] font-serif-editorial">Respond.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <div className="flex flex-col gap-4 p-8 border-l-2 border-white/[0.8]">
              <span className="text-[12px] uppercase tracking-widest text-white">Ambient AI</span>
              <p className="text-[24px] text-white font-serif-editorial">Understands.</p>
            </div>
          </ScrollReveal>
        </div>

        <div className="w-full bg-white/[0.02] border border-white/[0.05] rounded-[32px] p-12 md:p-16 flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/2 flex flex-col justify-center">
            <ScrollReveal>
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#6A6A6A] font-medium block mb-6">Reactive Approach</span>
              <p className="text-[24px] text-[#A0A0A0] font-serif-editorial font-light leading-tight">
                User stops walking, takes out phone, opens app, and types: <br/>"Find coffee near me."
              </p>
            </ScrollReveal>
          </div>
          <div className="lg:w-1/2 flex flex-col justify-center">
            <ScrollReveal delay={0.2}>
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#F2F2F0] font-medium block mb-6">Ambient Approach</span>
              <ul className="flex flex-col gap-4 text-[16px] text-[#D1D5DB] font-light">
                <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-neutral-500" /> System notices meeting ends in 15 minutes.</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-neutral-500" /> A nearby café is unusually quiet today.</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-neutral-500" /> The weather is pleasant.</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-neutral-500" /> Walking is ideal.</li>
              </ul>
              <p className="mt-6 text-[15px] text-[#8A8A8A] font-light">
                The recommendation is prepared silently. Proactive assistance must never become intrusive. It simply exists, ready if the user checks their device.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContextAndSpaceSection() {
  const signals = [
    "Time", "Location", "Movement", "Environment", "Routine", "Nearby opportunities", "Current activity", "Companions", "Weather", "Events", "Preferences"
  ];
  const spatial = [
    "Roads", "Buildings", "Communities", "Businesses", "Transit", "Events", "Neighbourhoods", "Conditions", "Spatial relationships"
  ];

  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#050505]">
      <div className="max-w-[1000px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
        
        <div className="flex flex-col gap-8">
          <SectionHeading subtitle="Deep Education" title="The Role of Context" />
          <ScrollReveal delay={0.2}>
            <p className="text-[18px] text-[#8A8A8A] font-light leading-relaxed">
              AI without context produces generic experiences. An assistant that doesn't know it is raining will suggest an outdoor patio. An assistant that doesn't know you are with your family will suggest a quiet cocktail bar.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <div className="flex flex-wrap gap-2 mt-4">
              {signals.map((sig, idx) => (
                <span key={idx} className="px-3 py-1 bg-white/[0.03] border border-white/[0.05] rounded-full text-[13px] text-[#A0A0A0]">
                  {sig}
                </span>
              ))}
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.4}>
             <ResearchNote category="Contextual Intelligence" title="Signal Combination">
              Context is not a single variable. It is the mathematical intersection of these signals that creates a highly specific reality frame for the user at any given second.
            </ResearchNote>
          </ScrollReveal>
        </div>

        <div className="flex flex-col gap-8">
          <SectionHeading subtitle="Physical Grounding" title="The Role of Space" />
          <ScrollReveal delay={0.2}>
            <p className="text-[18px] text-[#8A8A8A] font-light leading-relaxed">
              Ambient AI must understand physical environments. A digital brain must comprehend the physical stage upon which human life occurs.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <div className="flex flex-wrap gap-2 mt-4">
              {spatial.map((sig, idx) => (
                <span key={idx} className="px-3 py-1 bg-[#4F6EF7]/[0.05] border border-[#4F6EF7]/[0.1] rounded-full text-[13px] text-[#A0A0A0]">
                  {sig}
                </span>
              ))}
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.4}>
             <ResearchNote category="Spatial Computing" title="Grounded Intelligence">
              Intelligence becomes dramatically more useful when grounded in the physical world. Without spatial understanding, AI is confined to the screen. With it, AI inhabits the environment.
            </ResearchNote>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}

function TrustSection() {
  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#080808]">
      <div className="max-w-[800px] mx-auto flex flex-col items-center text-center">
        <ShieldCheck className="w-12 h-12 text-white/30 mb-8" />
        <SectionHeading subtitle="The Foundation" title="The Role of Trust" centered={true} />
        
        <ScrollReveal delay={0.2}>
          <p className="text-[24px] text-[#F2F2F0] font-serif-editorial font-light leading-relaxed mb-12">
            Trust is not a feature. Trust is the foundation.
          </p>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 text-left w-full mt-8">
          {[
            { t: "Privacy by Design", d: "Architecture built to forget by default." },
            { t: "Consent", d: "Explicit, unambiguous agreement for sensing." },
            { t: "Transparency", d: "Clear indicators when AI is processing context." },
            { t: "Local Processing", d: "Data stays on the device wherever mathematically possible." },
            { t: "User Control", d: "Complete agency over what the system knows." },
            { t: "Explainable AI", d: "The ability to ask 'Why did you suggest this?'" },
            { t: "Minimal Data", d: "Collecting only what is strictly required." },
            { t: "Revocable Permissions", d: "Instant, permanent deletion of contextual access." }
          ].map((item, idx) => (
            <ScrollReveal key={idx} delay={0.1 * idx}>
              <div className="flex flex-col gap-1 border-b border-white/[0.05] pb-4">
                <span className="text-[16px] text-white font-medium">{item.t}</span>
                <span className="text-[14px] text-[#8A8A8A] font-light">{item.d}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ScenariosSection() {
  const scenarios = [
    { q: "I'm hungry.", a: "Quietly evaluating your routine, nearby restaurant acoustic levels, and current walking pace to surface a subtle suggestion for a quiet café." },
    { q: "I'm travelling.", a: "Suppressing routine local notifications while seamlessly preparing translation matrices and identifying high-trust transit corridors." },
    { q: "I'm late.", a: "Detecting anomalous movement speed and automatically checking transit delays without waiting for a frantic query." },
    { q: "I'm exploring.", a: "Recognizing a meandering walking pattern and gently surfacing serendipitous historical notes about the surrounding architecture." },
    { q: "I'm working.", a: "Engaging absolute silence protocols. Suppressing non-critical physical world updates to protect deep focus." },
    { q: "I'm studying.", a: "Identifying library proximity and automatically muting all incoming ambient chimes." },
    { q: "I'm with my family.", a: "Shifting recommendation parameters from 'efficient solo spaces' to 'accommodating, low-friction environments'." },
    { q: "I'm feeling tired.", a: "Noticing slower physical rhythms and prioritizing recommendations with immediate seating and minimal wait times." },
    { q: "I'm attending a conference.", a: "Understanding the dense spatial clustering of industry peers and surfacing relevant schedule contexts invisibly." },
    { q: "I'm searching for inspiration.", a: "Recognizing unstructured time in a new neighbourhood and softly highlighting a nearby gallery that aligns with past aesthetic preferences." }
  ];

  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#050505]">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-24">
        
        <div className="text-center max-w-[800px] mx-auto">
          <SectionHeading subtitle="Applied Intelligence" title="Real-World Scenarios" centered={true} />
          <ScrollReveal delay={0.2}>
            <p className="text-[18px] text-[#8A8A8A] font-light leading-relaxed mt-4">
              For every scenario, observe how Ambient AI quietly understands. It is not merely what it recommends, but how it deduces the requirement without being asked.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {scenarios.map((scen, idx) => (
            <ScrollReveal key={idx} delay={0.05 * idx}>
              <div className="p-8 border border-white/[0.03] bg-[#0A0A0A] rounded-[24px] h-full flex flex-col gap-4">
                <h4 className="text-[18px] text-white font-medium">"{scen.q}"</h4>
                <p className="text-[15px] text-[#8A8A8A] font-light leading-relaxed">{scen.a}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}

function ManifestoSection() {
  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#080808]">
      <div className="max-w-[800px] mx-auto flex flex-col gap-16">
        <SectionHeading subtitle="Design Principles" title="The Ambient Manifesto" />
        
        <div className="flex flex-col gap-12">
          {[
            { t: "The best interface is often invisible.", d: "If a user has to look at a screen to benefit from the intelligence, the system has failed to be truly ambient." },
            { t: "The best notification is the one never sent.", d: "Attention is a scarce human resource. Every vibration or sound must justify the interruption." },
            { t: "Understanding should replace configuration.", d: "Users should not spend hours tweaking settings. The system should learn from natural behaviour." },
            { t: "Intelligence should remain explainable.", d: "Black boxes erode trust. An ambient system must always be able to articulate its reasoning." },
            { t: "Technology should reduce attention, not compete for it.", d: "The goal of Rheole is to help humans look up at the physical world, not down at their devices." }
          ].map((item, idx) => (
            <ScrollReveal key={idx} delay={0.1 * idx}>
              <div className="flex flex-col gap-3 pl-6 border-l-2 border-white/[0.1]">
                <h4 className="text-[22px] text-[#F2F2F0] font-serif-editorial">{item.t}</h4>
                <p className="text-[16px] text-[#8A8A8A] font-light leading-relaxed">{item.d}</p>
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
    <section className="relative w-full py-[200px] px-6 md:px-12 bg-[#050505] overflow-hidden border-t border-white/[0.05]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-white/[0.02] rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-[800px] mx-auto flex flex-col items-center text-center relative z-10">
        <ScrollReveal>
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#6A6A6A] font-medium mb-12 block">Research Perspective</span>
        </ScrollReveal>
        
        <ScrollReveal delay={0.2}>
          <h2 className="text-[40px] md:text-[64px] text-[#F2F2F0] font-serif-editorial font-light leading-[1.1] tracking-tight mb-16">
            The Future of Ambient Intelligence
          </h2>
        </ScrollReveal>
        
        <div className="flex flex-col gap-8">
          <ScrollReveal delay={0.4}>
            <p className="text-[20px] md:text-[24px] text-[#A0A0A0] font-light leading-relaxed">
              Future computers will not revolve around screens. They will revolve around understanding.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.5}>
            <p className="text-[18px] text-[#8A8A8A] font-light leading-relaxed">
              Ambient AI represents the transition from interacting with computers to living alongside intelligent systems that quietly assist without dominating attention. 
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.6}>
            <div className="mt-12 p-8 border border-white/[0.05] rounded-[24px] bg-white/[0.02]">
              <p className="text-[24px] md:text-[32px] text-white font-serif-editorial font-light leading-tight">
                The future is not more AI.<br/>
                <span className="text-[#6A6A6A]">The future is calmer AI.</span>
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

// -----------------------------------------------------------------------------------
// MAIN EXPORT
// -----------------------------------------------------------------------------------

export default function AmbientAIPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-[#F2F2F0] font-sans selection:bg-white/20 selection:text-white pt-16">
      <HeroSection />
      <TheShiftSection />
      <WhatIsSection />
      <PrinciplesSection />
      <ReactiveToProactiveSection />
      <ContextAndSpaceSection />
      <TrustSection />
      <ScenariosSection />
      <ManifestoSection />
      <FutureSection />
    </main>
  );
}
