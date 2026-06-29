"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, BrainCircuit, Activity, CloudRain, Clock, MapPin, Calendar, Compass, Thermometer, Battery, Users, ArrowRight, CornerDownRight, CheckCircle2, AlertCircle, Settings2, Network } from "lucide-react";

// --- REUSABLE EDITORIAL COMPONENTS ---

function ScrollReveal({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function EditorialSection({ id, title, subtitle, children, alternateBg = false }: { id: string, title: string, subtitle?: string, children: React.ReactNode, alternateBg?: boolean }) {
  return (
    <section id={id} className={`w-full relative py-24 md:py-32 border-b border-white/[0.04] ${alternateBg ? 'bg-[#050505]' : 'bg-transparent'}`}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-start gap-16 md:gap-24 relative">
        <ScrollReveal className="w-full md:w-[320px] shrink-0 sticky top-32 z-10">
          <div className="flex flex-col gap-4">
            <h2 className="text-[12px] text-[#9CA3AF] font-medium tracking-[0.2em] uppercase">
              {title}
            </h2>
            {subtitle && (
              <h3 className="text-[28px] md:text-[36px] font-serif-editorial text-[#F2F2F0] leading-tight">
                {subtitle}
              </h3>
            )}
            <div className="w-12 h-[1px] bg-white/[0.1] mt-4" />
          </div>
        </ScrollReveal>

        <div className="flex-1 w-full flex flex-col gap-12">
          <ScrollReveal delay={0.1}>
            {children}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function KnowledgeBlock({ type, title, children }: { type: "CognitivePsychology" | "DecisionScience" | "AIInsight", title: string, children: React.ReactNode }) {
  return (
    <div className="my-12 w-full p-8 rounded-2xl bg-[#080808] border border-white/[0.05] relative overflow-hidden group">
      <div className="absolute top-0 left-0 w-1 h-full bg-[#9CA3AF]/40" />
      <div className="flex items-center gap-3 mb-4">
        <BrainCircuit size={16} className="text-[#9CA3AF]" />
        <h4 className="font-mono text-[11px] text-[#A0A0A0] uppercase tracking-[0.2em]">
          {type.replace(/([A-Z])/g, ' $1').trim()} <span className="text-[#9CA3AF]/50 px-2">/</span> {title}
        </h4>
      </div>
      <div className="text-[16px] md:text-[18px] text-[#F2F2F0] leading-relaxed font-light italic">
        "{children}"
      </div>
    </div>
  );
}

// --- COMPLEX INTERACTIVE COMPONENTS ---

function ReasoningGraph() {
  const steps = [
    { label: "Implicit Query", value: "\"I'm hungry\"", active: true },
    { label: "Time Context", value: "Lunch break (1:00 PM)", active: true },
    { label: "Constraint", value: "40 minutes available", active: true },
    { label: "Preference", value: "Vegetarian history", active: true },
    { label: "Mode", value: "Walking today", active: true },
    { label: "Environment", value: "Weather pleasant", active: true },
    { label: "Intent Deduced", value: "Needs a quick, walkable vegetarian lunch with outdoor seating", final: true }
  ];

  return (
    <div className="w-full mt-12 p-8 md:p-12 border border-white/[0.06] bg-[#080808] rounded-3xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#E5E7EB]/[0.02] rounded-full blur-[80px] pointer-events-none" />
      
      <div className="flex flex-col gap-6 relative z-10">
        {steps.map((step, idx) => (
          <div key={idx} className="flex flex-col gap-2 relative">
            <div className="flex items-center gap-4">
              <div className={`w-3 h-3 rounded-full ${step.final ? 'bg-[#F2F2F0] shadow-[0_0_12px_rgba(242,242,240,0.5)]' : 'bg-[#6A6A6A]'}`} />
              <div className="flex flex-col">
                <span className="text-[12px] font-mono text-[#6A6A6A] uppercase tracking-[0.1em]">{step.label}</span>
                <span className={`text-[18px] md:text-[22px] font-light ${step.final ? 'text-[#F2F2F0] font-serif-editorial' : 'text-[#A0A0A0]'}`}>
                  {step.value}
                </span>
              </div>
            </div>
            {idx < steps.length - 1 && (
              <div className="w-[1px] h-8 bg-gradient-to-b from-[#6A6A6A]/50 to-transparent ml-[5.5px]" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function IntentEvolution() {
  const examples = [
    { start: "\"I'm hungry.\"", evolved: "Actually wants a quiet meeting place to discuss work." },
    { start: "\"I'm bored.\"", evolved: "Actually wants social interaction and community participation." },
    { start: "\"I'm travelling.\"", evolved: "Actually needs safe transportation and familiar food." },
    { start: "\"I need coffee.\"", evolved: "Actually needs a productive workspace with stable Wi-Fi." }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
      {examples.map((ex, i) => (
        <div key={i} className="p-8 border border-white/[0.04] bg-[#0A0A0A] rounded-2xl flex flex-col gap-6 group hover:bg-[#0C0C0C] transition-colors">
          <div className="text-[20px] font-serif-editorial text-[#6A6A6A] italic">
            {ex.start}
          </div>
          <div className="flex items-start gap-4">
            <CornerDownRight size={20} className="text-[#9CA3AF] mt-1 shrink-0 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
            <div className="text-[16px] text-[#F2F2F0] font-light leading-relaxed">
              {ex.evolved}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function ComparisonTable() {
  const comparisons = [
    { left: "Prompt driven", right: "Intent-first" },
    { left: "Keyword matching", right: "Context aware" },
    { left: "Command based", right: "Spatial reasoning" },
    { left: "Reactive", right: "Transparent understanding" },
    { left: "Single request", right: "Ambient intelligence" },
    { left: "Limited context", right: "Continuous adaptation" }
  ];

  return (
    <div className="w-full border border-white/[0.06] rounded-2xl overflow-hidden bg-[#0A0A0A] mt-12">
      <div className="grid grid-cols-2 bg-[#050505] border-b border-white/[0.06] p-6">
        <div className="font-mono text-[12px] text-[#6A6A6A] tracking-[0.1em] uppercase">Traditional AI</div>
        <div className="font-mono text-[12px] text-[#F2F2F0] tracking-[0.1em] uppercase">Rheole Intent Intelligence</div>
      </div>
      {comparisons.map((comp, idx) => (
        <div key={idx} className="grid grid-cols-2 p-6 border-b border-white/[0.04] last:border-0 items-center gap-6 hover:bg-white/[0.01] transition-colors">
          <div className="text-[15px] text-[#6A6A6A] line-through decoration-white/20">{comp.left}</div>
          <div className="text-[15px] text-[#F2F2F0] font-medium">{comp.right}</div>
        </div>
      ))}
    </div>
  );
}

// --- MAIN ARTICLE COMPONENT ---

export default function IntentArticle() {
  return (
    <article className="w-full flex flex-col items-center">
      
      {/* 1. UNDERSTANDING vs SEARCH */}
      <EditorialSection id="understanding" title="Understanding" subtitle="Meaning over keywords.">
        <p className="text-[18px] md:text-[22px] text-[#A0A0A0] font-light leading-relaxed mb-12">
          Search looks for words. Intent looks for meaning. Commands are explicit; intent is implicit. While traditional search engines return vast lists of uncurated information, an intent engine suggests targeted outcomes based on human purpose.
        </p>

        <div className="flex flex-col md:flex-row gap-8 items-center border border-white/[0.05] bg-[#0A0A0A] p-8 rounded-2xl">
          <div className="flex-1 flex flex-col items-center text-center gap-4">
            <Search size={32} className="text-[#6A6A6A]" />
            <h4 className="font-mono text-[13px] text-[#A0A0A0] tracking-[0.2em] uppercase">Search Paradigm</h4>
            <p className="text-[14px] text-[#6A6A6A]">"What did the user type?"</p>
          </div>
          
          <ArrowRight size={24} className="text-[#333] hidden md:block" />
          
          <div className="flex-1 flex flex-col items-center text-center gap-4">
            <BrainCircuit size={32} className="text-[#F2F2F0]" />
            <h4 className="font-mono text-[13px] text-[#F2F2F0] tracking-[0.2em] uppercase">Intent Paradigm</h4>
            <p className="text-[14px] text-[#A0A0A0]">"What is the user trying to achieve?"</p>
          </div>
        </div>

        <KnowledgeBlock type="CognitivePsychology" title="The Command Friction">
          Human cognition is goal-oriented, not command-oriented. Forcing a human to translate their goal into a searchable keyword string creates cognitive friction. True intelligence removes the translation step entirely.
        </KnowledgeBlock>
      </EditorialSection>

      {/* 2. INTENT ENGINE */}
      <EditorialSection id="intent-engine" title="The Intent Engine" subtitle="The layers of understanding." alternateBg>
        <p className="text-[18px] md:text-[22px] text-[#A0A0A0] font-light leading-relaxed mb-12">
          Intent is never derived from a single data point. It is an ambient computation of your spatial, temporal, and historical realities.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { icon: MapPin, title: "Location & Velocity", desc: "Are you walking in a familiar neighbourhood, or driving through a new city?" },
            { icon: Clock, title: "Time & Urgency", desc: "Is this a leisurely Sunday morning or a frantic Tuesday lunch hour?" },
            { icon: Activity, title: "Current Activity", desc: "Are you stationary at a desk, or actively navigating a transit hub?" },
            { icon: CloudRain, title: "Weather context", desc: "A sudden downpour changes 'I want coffee' to 'I need the closest indoor seating'." },
            { icon: Users, title: "Companions", desc: "Are you alone, or does your proximity graph show you are with family?" },
            { icon: Calendar, title: "Schedule", desc: "Do you have two hours to spare, or a meeting in 45 minutes?" }
          ].map((item, idx) => (
            <div key={idx} className="flex gap-4 p-6 border border-white/[0.04] bg-[#080808] rounded-xl hover:border-[#9CA3AF]/30 transition-colors">
              <item.icon size={20} className="text-[#9CA3AF] shrink-0 mt-1" />
              <div className="flex flex-col gap-2">
                <h5 className="text-[16px] text-[#F2F2F0] font-medium">{item.title}</h5>
                <p className="text-[14px] text-[#A0A0A0] font-light leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </EditorialSection>

      {/* 3. REASONING GRAPH */}
      <EditorialSection id="reasoning" title="Reasoning Graph" subtitle="AI should never feel mysterious.">
        <p className="text-[18px] md:text-[22px] text-[#A0A0A0] font-light leading-relaxed">
          Instead of simply giving an answer, Rheole explains its reasoning. Every recommendation can be expanded into a transparent trail of logic, building profound trust.
        </p>
        
        <ReasoningGraph />
      </EditorialSection>

      {/* 4. HUMAN THINKING */}
      <EditorialSection id="human-thinking" title="Human Thinking" subtitle="Intentions evolve." alternateBg>
        <p className="text-[18px] md:text-[22px] text-[#A0A0A0] font-light leading-relaxed">
          A single sentence can represent multiple possible intentions. What begins as a physiological need often evolves into a spatial or social requirement.
        </p>

        <IntentEvolution />

        <KnowledgeBlock type="AIInsight" title="Semantic Ambiguity">
          Traditional AI fails at semantic ambiguity because it locks onto keywords. Ambient Spatial Intelligence succeeds by cross-referencing ambiguity with real-time environmental constraints.
        </KnowledgeBlock>
      </EditorialSection>

      {/* 5. TRANSPARENT AI */}
      <EditorialSection id="transparency" title="Transparent AI" subtitle="Trust through clarity.">
        <p className="text-[18px] md:text-[22px] text-[#A0A0A0] font-light leading-relaxed mb-12">
          When an AI makes a suggestion, you deserve to know why. We designed Rheole to explicitly state its confidence levels and alternative interpretations.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-4">
            <CheckCircle2 size={24} className="text-[#9CA3AF]" />
            <h4 className="text-[20px] font-serif-editorial text-[#F2F2F0]">High Confidence</h4>
            <p className="text-[15px] text-[#A0A0A0] font-light leading-relaxed">When context aligns perfectly, Rheole confidently suggests a single, optimal outcome. The reasoning is clear and undisputed.</p>
          </div>
          <div className="flex flex-col gap-4">
            <AlertCircle size={24} className="text-[#6A6A6A]" />
            <h4 className="text-[20px] font-serif-editorial text-[#F2F2F0]">Handling Uncertainty</h4>
            <p className="text-[15px] text-[#A0A0A0] font-light leading-relaxed">When intent is ambiguous, Rheole does not guess blindly. It politely asks a clarifying question, exposing its alternative interpretations.</p>
          </div>
        </div>
      </EditorialSection>

      {/* UNIQUE RHEOLE FEATURES */}
      <EditorialSection id="features" title="Proprietary Concepts" subtitle="The architectural foundation." alternateBg>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          <div className="flex flex-col gap-4 p-8 rounded-2xl bg-[#080808] border border-[#9CA3AF]/30 relative overflow-hidden group lg:col-span-2">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#9CA3AF]/5 rounded-full blur-[60px]" />
            <Network size={24} className="text-[#9CA3AF] mb-2" />
            <h4 className="text-[24px] font-serif-editorial text-[#F2F2F0]">Intent Graph™</h4>
            <div className="w-12 h-[1px] bg-[#9CA3AF]/50" />
            <p className="text-[16px] text-[#A0A0A0] font-light leading-relaxed max-w-[800px]">
              Visualises how Rheole interprets your current goal through multiple contextual signals rather than isolated keywords. It is the engine that transforms "I'm tired" into "Find the quietest route home."
            </p>
          </div>

          <div className="flex flex-col gap-4 p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
            <h4 className="text-[24px] font-serif-editorial text-[#F2F2F0]">Explain My Recommendation™</h4>
            <div className="w-8 h-[1px] bg-white/20" />
            <p className="text-[15px] text-[#A0A0A0] font-light leading-relaxed">
              Every recommendation can be expanded into a transparent reasoning trail. You always understand why something appeared on your screen.
            </p>
          </div>

          <div className="flex flex-col gap-4 p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
            <h4 className="text-[24px] font-serif-editorial text-[#F2F2F0]">Ambient Intent™</h4>
            <div className="w-8 h-[1px] bg-white/20" />
            <p className="text-[15px] text-[#A0A0A0] font-light leading-relaxed">
              Instead of waiting for commands, Rheole quietly notices when assistance could genuinely help (like a delayed commute or sudden weather change) without becoming intrusive.
            </p>
          </div>

        </div>
      </EditorialSection>

      {/* 6. WHY INTENT MATTERS */}
      <EditorialSection id="why-matters" title="Why Intent Matters" subtitle="Calm technology.">
        <p className="text-[18px] md:text-[22px] text-[#A0A0A0] font-light leading-relaxed">
          Intent reduces friction. Intent reduces searching. Intent reduces decision fatigue. Understanding people is infinitely more valuable than perfectly processing their commands.
        </p>
        
        <ComparisonTable />
      </EditorialSection>

      {/* 7. FUTURE OF UNDERSTANDING */}
      <EditorialSection id="vision" title="The Future" subtitle="Understanding imperfect thinking." alternateBg>
        <p className="text-[24px] md:text-[32px] text-[#F2F2F0] font-serif-editorial font-light leading-tight max-w-[800px]">
          Technology should not wait for perfect instructions.
        </p>
        <p className="text-[18px] md:text-[22px] text-[#A0A0A0] font-light leading-relaxed mt-8 max-w-[800px]">
          The future belongs to systems that quietly understand context, purpose, and intention before responding. The best AI is not the one that talks the most. It is the one that understands the most.
        </p>

        <div className="mt-16 p-8 md:p-12 border border-[#9CA3AF]/30 bg-[#9CA3AF]/5 rounded-3xl flex flex-col items-center text-center max-w-[800px] relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10 pointer-events-none" />
          <h3 className="text-[28px] md:text-[40px] font-serif-editorial text-[#F2F2F0] leading-tight relative z-10">
            "Rheole understands me before I even know how to ask."
          </h3>
          <span className="text-[12px] font-mono text-[#9CA3AF] uppercase tracking-[0.2em] mt-8 relative z-10">
            Ambient Spatial Intelligence
          </span>
        </div>
      </EditorialSection>

    </article>
  );
}
