"use client";

import React from "react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import { 
  Lock, 
  Users, 
  HeartHandshake, 
  Sliders, 
  BookOpen, 
  Eye, 
  EyeOff, 
  ShieldCheck, 
  AlertCircle, 
  BarChart, 
  GitMerge, 
  Layers, 
  Brain, 
  Target,
  Trash2,
  MapPin,
  CloudSun,
  Clock,
  Info,
  ChevronRight,
  ShieldAlert,
  Fingerprint
} from "lucide-react";

// -----------------------------------------------------------------------------------
// REUSABLE COMPONENTS
// -----------------------------------------------------------------------------------

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
          <h1 className="text-[64px] md:text-[96px] lg:text-[110px] text-[#F2F2F0] font-serif-editorial font-light leading-[0.95] tracking-tight max-w-[1000px]">
            AI Transparency
          </h1>
          <p className="text-[20px] md:text-[24px] text-[#8A8A8A] font-light mt-6 tracking-wide">
            Understanding Intelligence Instead of Trusting It.
          </p>
        </ScrollReveal>
        
        <div className="flex flex-col gap-8 mt-12 w-full max-w-[700px]">
          <ScrollReveal delay={0.4}>
            <p className="text-[22px] md:text-[28px] text-[#A0A0A0] font-light leading-relaxed">
              Artificial Intelligence is becoming increasingly powerful. Yet many systems remain painfully difficult to understand.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.5}>
            <p className="text-[18px] text-[#6A6A6A] font-light leading-relaxed">
              Users receive answers, recommendations, and predictions, but rarely receive explanations. Trust should never depend upon mystery. Trust grows from understanding.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function BlackBoxSection() {
  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#050505]">
      <div className="max-w-[1000px] mx-auto flex flex-col gap-16 text-center items-center">
        <SectionHeading subtitle="Editorial" title="The Black Box" centered={true} />
        
        <ScrollReveal delay={0.2}>
          <p className="text-[28px] md:text-[40px] text-[#F2F2F0] font-serif-editorial font-light leading-tight">
            For decades computers explained every calculation.<br/>
            Modern AI often explains none.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <p className="text-[18px] text-[#8A8A8A] font-light leading-relaxed max-w-[700px] mt-6">
            When complex neural architectures arrive at a conclusion, they often discard the mathematical journey required to get there. As a result, modern intelligent systems can appear opaque, arbitrary, or magical. But users deserve more than answers. They deserve understanding.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

function WhyItMattersSection() {
  const benefits = [
    { name: "Trust", desc: "People only rely on systems they can comprehend.", icon: <HeartHandshake className="w-4 h-4"/> },
    { name: "Learning", desc: "Understanding how an AI thinks improves how users prompt it.", icon: <BookOpen className="w-4 h-4"/> },
    { name: "Decision making", desc: "Executives require the 'why' before acting on a prediction.", icon: <Brain className="w-4 h-4"/> },
    { name: "Safety", desc: "Opaque reasoning hides critical failure modes.", icon: <ShieldAlert className="w-4 h-4"/> },
    { name: "Privacy", desc: "Transparency reveals what data was actually used.", icon: <Lock className="w-4 h-4"/> },
    { name: "Accountability", desc: "Allows auditors to verify ethical constraints.", icon: <ShieldCheck className="w-4 h-4"/> },
    { name: "Confidence", desc: "Users proceed boldly when reasoning is verifiable.", icon: <Target className="w-4 h-4"/> },
    { name: "Human agency", desc: "Ensures the user remains the ultimate decision maker.", icon: <Fingerprint className="w-4 h-4"/> }
  ];

  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#080808]">
      <div className="max-w-[1000px] mx-auto flex flex-col gap-16">
        <div className="text-center max-w-[800px] mx-auto">
          <SectionHeading subtitle="Educational Chapter" title="Why Transparency Matters" centered={true} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, idx) => (
            <ScrollReveal key={idx} delay={0.05 * idx}>
              <div className="flex flex-col gap-3 p-6 border border-white/[0.05] rounded-xl bg-white/[0.02]">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-full bg-white/[0.05] text-[#4F6EF7]">
                    {b.icon}
                  </div>
                  <h4 className="text-[16px] text-white font-medium">{b.name}</h4>
                </div>
                <p className="text-[14px] text-[#8A8A8A] font-light leading-relaxed">{b.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowWeReasonSection() {
  const questions = [
    "What happened?",
    "Why was this recommended?",
    "Which contextual signals mattered?",
    "Which signals did not?",
    "What alternatives were considered?",
    "How confident is the system?",
    "What changed since the last recommendation?"
  ];

  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#050505]">
      <div className="max-w-[1000px] mx-auto flex flex-col lg:flex-row gap-20">
        <div className="lg:w-1/2 flex flex-col gap-8">
          <SectionHeading subtitle="Reasoning Architecture" title="How Rheole Reasons" centered={false} />
          <ScrollReveal delay={0.2}>
            <p className="text-[18px] text-[#8A8A8A] font-light leading-relaxed">
              At Rheole, intelligence is a two-way conversation. Reasoning is visible rather than hidden.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <p className="text-[18px] text-[#8A8A8A] font-light leading-relaxed">
              Every recommendation generated by our models contains a companion 'Reason Graph' that mathematically documents the exact series of environmental, contextual, and temporal steps that led to the conclusion.
            </p>
          </ScrollReveal>
        </div>
        
        <div className="lg:w-1/2">
          <div className="p-8 border border-white/[0.05] rounded-[24px] bg-[#0A0A0A] flex flex-col gap-4">
            <h4 className="text-[13px] text-[#6A6A6A] font-medium uppercase tracking-widest mb-4">Every recommendation must answer</h4>
            {questions.map((q, idx) => (
              <ScrollReveal key={idx} delay={0.1 * idx}>
                <div className="flex items-center gap-4 py-3 border-b border-white/[0.05]">
                  <ChevronRight className="w-4 h-4 text-[#4F6EF7]" />
                  <span className="text-[16px] text-[#E0E0E0] font-light">{q}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function UnderstandingSection() {
  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#080808]">
      <div className="max-w-[1000px] mx-auto flex flex-col gap-16">
        <div className="text-center">
          <SectionHeading subtitle="Applied Intelligence" title="Understanding Recommendations" centered={true} />
          <ScrollReveal delay={0.2}>
            <p className="text-[18px] text-[#8A8A8A] font-light mt-4 max-w-[700px] mx-auto">
              The goal is to show the reasoning rather than just presenting the output.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
          
          <ScrollReveal delay={0.3}>
            <div className="p-8 border border-white/[0.05] bg-[#050505] rounded-2xl">
              <h3 className="text-[24px] text-white font-serif-editorial font-light mb-6">"I'm hungry."</h3>
              <p className="text-[14px] text-[#6A6A6A] uppercase tracking-widest mb-4">Traditional Output</p>
              <div className="p-4 bg-white/[0.02] border border-white/[0.05] rounded-xl mb-8">
                <span className="text-[18px] text-white">Restaurant Name</span>
              </div>
              
              <p className="text-[14px] text-[#6A6A6A] uppercase tracking-widest mb-4">Rheole Explanation</p>
              <div className="flex flex-wrap gap-2">
                {["Nearby", "Open now", "Matches dietary preferences", "Walking distance", "Quiet environment", "Weather suitable", "Friends nearby", "Low waiting time"].map((tag, i) => (
                  <span key={i} className="px-3 py-1.5 border border-[#4F6EF7]/20 bg-[#4F6EF7]/5 rounded-md text-[13px] text-[#A0A0A0]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.4}>
            <div className="p-8 border border-white/[0.05] bg-[#050505] rounded-2xl">
              <h3 className="text-[24px] text-white font-serif-editorial font-light mb-6">"I'm bored."</h3>
              <p className="text-[14px] text-[#6A6A6A] uppercase tracking-widest mb-4">Traditional Output</p>
              <div className="p-4 bg-white/[0.02] border border-white/[0.05] rounded-xl mb-8">
                <span className="text-[18px] text-white">Event Name</span>
              </div>
              
              <p className="text-[14px] text-[#6A6A6A] uppercase tracking-widest mb-4">Rheole Explanation</p>
              <div className="flex flex-wrap gap-2">
                {["Events", "Communities", "Nearby activities", "Time available", "Current weather", "Budget", "Contextual mood"].map((tag, i) => (
                  <span key={i} className="px-3 py-1.5 border border-[#4F6EF7]/20 bg-[#4F6EF7]/5 rounded-md text-[13px] text-[#A0A0A0]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
          
        </div>
      </div>
    </section>
  );
}

function UncertaintySection() {
  const levels = [
    { t: "High Confidence", d: "Context is clear, historical data matches, environment is stable." },
    { t: "Moderate Confidence", d: "Context is partial. Multiple valid outcomes exist." },
    { t: "Low Confidence", d: "Missing information or conflicting context." },
    { t: "Changing Environment", d: "Conditions are shifting faster than prediction models allow." }
  ];

  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#050505]">
      <div className="max-w-[1000px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="flex flex-col gap-8">
          <SectionHeading subtitle="Epistemology" title="Uncertainty & Confidence" centered={false} />
          
          <ScrollReveal delay={0.2}>
            <p className="text-[20px] text-[#A0A0A0] font-light leading-relaxed">
              Intelligent systems should admit uncertainty.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <p className="text-[18px] text-[#8A8A8A] font-light leading-relaxed">
              When a system pretends to be 100% certain about an ambiguous human situation, it lies. Admitting uncertainty improves trust rather than reducing it, because it aligns the machine's confidence with reality.
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={0.4}>
            <div className="flex flex-wrap gap-3 mt-4">
              <span className="text-[13px] border border-white/[0.1] px-3 py-1 rounded-full text-white">Confidence Level™</span>
              <span className="text-[13px] border border-white/[0.1] px-3 py-1 rounded-full text-white">Reasoning Confidence™</span>
              <span className="text-[13px] border border-white/[0.1] px-3 py-1 rounded-full text-white">Missing Context™</span>
            </div>
          </ScrollReveal>
        </div>
        
        <div className="flex flex-col gap-4">
          {levels.map((level, idx) => (
            <ScrollReveal key={idx} delay={0.05 * idx}>
              <div className="flex items-start gap-4 p-5 bg-white/[0.02] border border-white/[0.05] rounded-xl hover:bg-white/[0.05] transition-colors">
                <Info className="w-5 h-5 text-[#4F6EF7] mt-0.5 shrink-0" />
                <div>
                  <span className="text-[16px] text-[#F2F2F0] font-medium block mb-1">{level.t}</span>
                  <span className="text-[14px] text-[#8A8A8A] font-light">{level.d}</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function UserControlSection() {
  const controls = [
    "View reasoning.",
    "Adjust preferences.",
    "Hide contextual signals.",
    "Remove history.",
    "Delete memories.",
    "Disable recommendations.",
    "Permission management.",
    "Context controls."
  ];

  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#080808]">
      <div className="max-w-[1000px] mx-auto flex flex-col gap-12 text-center items-center">
        <SectionHeading subtitle="Agency" title="User Control" centered={true} />
        
        <ScrollReveal delay={0.2}>
          <p className="text-[24px] md:text-[32px] text-[#F2F2F0] font-serif-editorial font-light leading-tight max-w-[800px]">
            The user remains in absolute control.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <p className="text-[18px] text-[#8A8A8A] font-light leading-relaxed max-w-[700px] mt-6">
            Transparency is meaningless without agency. Seeing how a system thinks must be paired with the ability to correct it, constrain it, or turn it off entirely.
          </p>
        </ScrollReveal>

        <div className="flex flex-wrap justify-center gap-4 mt-8 max-w-[800px]">
          {controls.map((c, i) => (
            <ScrollReveal key={i} delay={0.05 * i}>
              <div className="px-5 py-3 rounded-full border border-white/[0.08] bg-white/[0.02] text-[15px] text-[#D1D5DB] font-light flex items-center gap-2">
                {c === "Delete memories." ? <Trash2 className="w-4 h-4 text-red-400"/> : <Sliders className="w-4 h-4 text-[#8A8A8A]"/>}
                {c}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrustByDesignSection() {
  const principles = [
    { t: "No invisible manipulation.", d: "Systems must never optimise for metrics at the expense of user intent." },
    { t: "No unexplained ranking.", d: "If Option A is above Option B, the mathematical reason must be accessible." },
    { t: "Explainability.", d: "Every model output must be traceable back to its contextual inputs." },
    { t: "Minimal collection.", d: "Collect only the environmental data necessary for the current reasoning phase." },
    { t: "Continuous transparency.", d: "Explanations aren't buried in menus; they are attached directly to the UI." }
  ];

  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#050505]">
      <div className="max-w-[1000px] mx-auto flex flex-col lg:flex-row gap-20">
        <div className="lg:w-1/3">
          <SectionHeading subtitle="Ethics" title="Trust by Design" centered={false} />
        </div>
        <div className="lg:w-2/3 flex flex-col gap-10">
          {principles.map((p, idx) => (
            <ScrollReveal key={idx} delay={0.1 * idx}>
              <div className="flex flex-col gap-2">
                <h4 className="text-[20px] text-[#F2F2F0] font-medium tracking-tight flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#4F6EF7]" /> {p.t}
                </h4>
                <p className="text-[16px] text-[#8A8A8A] font-light leading-relaxed pl-8">{p.d}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ConceptsSection() {
  const concepts = [
    { t: "Reason Graph™", d: "Visualises every factor contributing to a recommendation." },
    { t: "Decision Timeline™", d: "Shows how reasoning changed over time." },
    { t: "Confidence Spectrum™", d: "Displays confidence levels instead of binary certainty." },
    { t: "Context Inspector™", d: "Allows users to inspect which contextual signals influenced an outcome." },
    { t: "Alternative Paths™", d: "Shows other reasonable recommendations and why they were ranked differently." },
    { t: "Transparency Layer™", d: "A unified explanation interface available across every Rheole feature." }
  ];

  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#080808]">
      <div className="max-w-[1000px] mx-auto flex flex-col gap-16">
        <div className="text-center">
          <SectionHeading subtitle="Proprietary Terminology" title="Original Research Concepts" centered={true} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {concepts.map((concept, idx) => (
             <ScrollReveal key={idx} delay={0.1 * idx}>
              <div className="p-8 h-full bg-[#050505] border border-white/[0.05] rounded-xl hover:border-white/[0.1] transition-all">
                <h4 className="text-[16px] text-white font-medium mb-3">{concept.t}</h4>
                <p className="text-[14px] text-[#8A8A8A] font-light leading-relaxed">{concept.d}</p>
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
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#6A6A6A] font-medium mb-12 block">Research Vision</span>
        </ScrollReveal>
        
        <ScrollReveal delay={0.2}>
          <h2 className="text-[40px] md:text-[64px] text-[#F2F2F0] font-serif-editorial font-light leading-[1.1] tracking-tight mb-16">
            The Future of Transparent AI
          </h2>
        </ScrollReveal>
        
        <div className="flex flex-col gap-8">
          <ScrollReveal delay={0.4}>
            <p className="text-[20px] md:text-[24px] text-[#A0A0A0] font-light leading-relaxed">
              Future intelligence will not be measured only by accuracy. It will also be measured by clarity.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.5}>
            <p className="text-[18px] text-[#8A8A8A] font-light leading-relaxed">
              People should understand why intelligent systems behave the way they do. The future belongs to AI that explains itself.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.6}>
            <div className="mt-12 p-8 border border-white/[0.05] rounded-[24px] bg-white/[0.02]">
              <p className="text-[20px] md:text-[28px] text-white font-serif-editorial font-light leading-relaxed">
                The future of AI isn't just intelligent.<br/>It's understandable.
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

export default function AITransparencyPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-[#F2F2F0] font-sans selection:bg-white/20 selection:text-white pt-16">
      <HeroSection />
      <BlackBoxSection />
      <WhyItMattersSection />
      <HowWeReasonSection />
      <UnderstandingSection />
      <UncertaintySection />
      <UserControlSection />
      <TrustByDesignSection />
      <ConceptsSection />
      <FutureSection />
    </main>
  );
}
