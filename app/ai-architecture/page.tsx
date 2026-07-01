"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import { 
  Network, 
  BrainCircuit, 
  Layers, 
  Map, 
  ShieldCheck, 
  ArrowDown, 
  Workflow,
  Cpu,
  Globe,
  Fingerprint,
  ChevronRight,
  MessageSquare,
  CircleDot
} from "lucide-react";

// -----------------------------------------------------------------------------------
// REUSABLE COMPONENTS
// -----------------------------------------------------------------------------------

function KnowledgeBlock({ title, label, children }: { title: string; label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-5 p-8 border border-white/[0.06] bg-[#0A0A0A]/50 backdrop-blur-md rounded-xl hover:border-white/[0.12] transition-colors duration-500">
      <div className="flex items-center gap-3">
        <div className="w-1 h-1 bg-[#4F6EF7] rounded-full shadow-[0_0_8px_#4F6EF7]" />
        <span className="text-[9px] uppercase tracking-[0.25em] text-[#8A8A8A] font-medium">{label}</span>
      </div>
      <h4 className="text-[17px] text-[#F2F2F0] font-medium tracking-tight">{title}</h4>
      <div className="text-[14px] text-[#A0A0A0] leading-[1.8] font-light flex flex-col gap-4">
        {children}
      </div>
    </div>
  );
}

function SectionDivider() {
  return (
    <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/[0.05] to-transparent my-[120px]" />
  );
}

// -----------------------------------------------------------------------------------
// SECTIONS
// -----------------------------------------------------------------------------------

function ThinkingSection() {
  return (
    <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center px-6 md:px-12 pt-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#020202]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#4F6EF7] opacity-[0.02] blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-[1000px] mx-auto z-10 flex flex-col items-center text-center gap-12">
        <ScrollReveal>
          <div className="flex items-center gap-3 border border-white/[0.08] px-5 py-2.5 rounded-full bg-white/[0.01] backdrop-blur-sm">
            <Cpu size={14} className="text-[#4F6EF7]" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#A0A0A0] font-medium">AI Architecture</span>
          </div>
        </ScrollReveal>
        
        <ScrollReveal delay={0.2}>
          <h1 className="text-[56px] md:text-[84px] lg:text-[100px] text-[#F2F2F0] font-serif-editorial font-light leading-[1.0] tracking-tight">
            Great intelligence begins with understanding.
          </h1>
        </ScrollReveal>
        
        <ScrollReveal delay={0.4} className="mt-8">
          <div className="flex flex-col items-center gap-6 max-w-[700px]">
            <p className="text-[20px] md:text-[24px] text-[#A0A0A0] font-light leading-[1.6]">
              Artificial intelligence should not imitate conversation. It should understand situations.
            </p>
            <p className="text-[18px] text-[#8A8A8A] font-light leading-[1.7]">
              The goal of Rheole is not to answer more questions. It is to make better decisions. We believe that true intelligence is ambient, deeply aware of reality, and capable of profound spatial reasoning.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function PhilosophySection() {
  return (
    <section className="relative w-full py-[120px] px-6 md:px-12 bg-[#020202]">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
        
        <div className="lg:col-span-7 flex flex-col gap-12">
          <ScrollReveal>
            <h2 className="text-[36px] md:text-[52px] text-[#F2F2F0] font-serif-editorial font-light leading-[1.1] tracking-tight">
              Intelligence as a System, Not a Model.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="text-[18px] text-[#A0A0A0] font-light leading-[1.8] flex flex-col gap-8">
              <p>
                Rheole views intelligence as a highly orchestrated collaboration between multiple specialised capabilities. A single language model, no matter how vast its parameter count, is fundamentally isolated from reality. It knows text, but it does not know <em className="text-[#F2F2F0]">context</em>.
              </p>
              <p>
                Understanding requires more than processing text. It requires <span className="text-[#F2F2F0]">Intent</span> to grasp human desire. It requires <span className="text-[#F2F2F0]">Context</span> to frame the moment. It requires <span className="text-[#F2F2F0]">Environment</span> and <span className="text-[#F2F2F0]">Spatial Understanding</span> to anchor the reasoning in physical reality. It requires <span className="text-[#F2F2F0]">Memory</span> to respect history, and <span className="text-[#F2F2F0]">Learning</span> to adapt over time.
              </p>
              <p>
                Every capability contributes to a singular, coherent understanding. In the Rheole architecture, no single model controls every decision. Instead, an ensemble of reasoning engines collaborate to perceive, analyze, and synthesize reality.
              </p>
            </div>
          </ScrollReveal>
        </div>

        <div className="lg:col-span-5 flex flex-col gap-6 pt-4">
          <KnowledgeBlock title="Ambient Intelligence Engine™" label="Architecture Principles">
            <p>
              The orchestration system that combines contextual, spatial and behavioural understanding into coherent assistance. It does not wait for a prompt; it continuously evaluates the living world, remaining silent until an intervention is truly valuable.
            </p>
          </KnowledgeBlock>
          
          <KnowledgeBlock title="Beyond the Prompt" label="AI Insights">
            <p>
              Traditional AI systems are reactive—they wait in a suspended state until stimulated by user input. Rheole operates as a continuous reasoning loop, evaluating environmental shifts and spatial telemetry long before a user forms a request.
            </p>
          </KnowledgeBlock>
        </div>

      </div>
    </section>
  );
}

function ReasoningEngineSection() {
  const journey = [
    "User Situation",
    "Intent Understanding",
    "Context Analysis",
    "Environmental Awareness",
    "Spatial Understanding",
    "Knowledge Integration",
    "Reasoning",
    "Decision",
    "Transparent Explanation"
  ];

  return (
    <section className="relative w-full py-[120px] px-6 md:px-12 bg-[#050505] border-y border-white/[0.04]">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-20">
        
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <ScrollReveal>
            <div className="flex flex-col gap-6 max-w-[600px]">
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#6A6A6A] font-medium">The Core Concept</span>
              <h2 className="text-[36px] md:text-[52px] text-[#F2F2F0] font-serif-editorial font-light leading-[1.1] tracking-tight">
                The Reasoning Engine
              </h2>
              <p className="text-[18px] text-[#8A8A8A] font-light leading-[1.7]">
                Every interaction within Rheole follows a rigorous reasoning journey. We do not map inputs directly to outputs. We map inputs to an understanding of reality, reason about that reality, and then derive a decision.
              </p>
            </div>
          </ScrollReveal>
          
          <div className="w-full md:w-[400px]">
            <KnowledgeBlock title="Reasoning Graph™" label="Proprietary Concept">
              <p>
                A transparent, internal representation of how multiple signals and intelligence layers contribute to a single decision. It allows the architecture to audit its own logic before presenting a conclusion to the user.
              </p>
            </KnowledgeBlock>
          </div>
        </div>

        {/* The Journey Flow */}
        <ScrollReveal delay={0.2}>
          <div className="w-full py-20 px-8 bg-[#020202] border border-white/[0.05] rounded-3xl relative overflow-hidden flex flex-col items-center">
            <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1px] bg-gradient-to-b from-transparent via-[#4F6EF7]/30 to-transparent" />
            
            <div className="flex flex-col gap-8 relative z-10 w-full max-w-[600px]">
              {journey.map((step, index) => (
                <div key={index} className="flex flex-col items-center gap-4">
                  <div className="bg-[#0A0A0A] border border-white/[0.08] px-8 py-4 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.5)] flex items-center justify-center w-[80%] hover:border-[#4F6EF7]/40 transition-colors duration-300">
                    <span className="text-[15px] text-[#F2F2F0] font-medium tracking-wide">{step}</span>
                  </div>
                  {index < journey.length - 1 && (
                    <ArrowDown size={20} className="text-[#4F6EF7]/50" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}

function IntelligenceLayersSection() {
  const layers = [
    { title: "Intent Intelligence", desc: "Deciphers the underlying goal behind human input, filtering out ambiguity to isolate true desire.", icon: <BrainCircuit size={24} /> },
    { title: "Context Intelligence", desc: "Synthesizes temporal, calendar, and historical parameters to frame the situation accurately.", icon: <Workflow size={24} /> },
    { title: "Environmental Intelligence", desc: "Processes ambient conditions—weather, lighting, acoustics, and crowd density—in real-time.", icon: <Globe size={24} /> },
    { title: "Spatial Intelligence", desc: "Understands the physical topology of reality, interpreting distance, architecture, and mobility vectors.", icon: <Map size={24} /> },
    { title: "Memory Intelligence", desc: "Respects user history and personal preferences without violating cryptographic privacy boundaries.", icon: <Fingerprint size={24} /> },
    { title: "Reasoning Intelligence", desc: "The cognitive core that evaluates all filtered data to form logical, explainable conclusions.", icon: <Cpu size={24} /> },
    { title: "Learning Intelligence", desc: "Continuously adapts to user feedback and evolving real-world patterns to improve future decisions.", icon: <Network size={24} /> }
  ];

  return (
    <section className="relative w-full py-[120px] px-6 md:px-12 bg-[#020202]">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-20">
        
        <div className="flex flex-col md:flex-row gap-16">
          <div className="flex-1">
            <ScrollReveal>
              <h2 className="text-[36px] md:text-[52px] text-[#F2F2F0] font-serif-editorial font-light leading-[1.1] tracking-tight">
                Intelligence Layers™
              </h2>
              <div className="mt-8 text-[18px] text-[#A0A0A0] font-light leading-[1.8] flex flex-col gap-6 max-w-[700px]">
                <p>
                  Intelligence within Rheole is structurally organized into specialized layers. These are independent yet cooperative reasoning systems, each dedicated to a specific dimension of understanding.
                </p>
                <p>
                  By decoupling these capabilities, each layer can contribute its unique perspective while remaining part of one unified architectural system. This allows Rheole to think comprehensively about a situation.
                </p>
              </div>
            </ScrollReveal>
          </div>
          
          <div className="w-full md:w-[350px] pt-4">
             <KnowledgeBlock title="Living Context™" label="Definitions">
              <p>
                A continuously evolving situational understanding rather than a static snapshot. It represents reality as a fluid state, updating precisely as the world around you changes.
              </p>
            </KnowledgeBlock>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {layers.map((layer, index) => (
            <ScrollReveal key={index} delay={index * 0.05}>
              <div className="flex flex-col gap-5 p-8 bg-[#070707] border border-white/[0.04] rounded-2xl h-full hover:bg-[#0A0A0A] hover:border-white/[0.08] transition-all duration-300">
                <div className="text-[#4F6EF7] bg-[#4F6EF7]/10 w-12 h-12 rounded-xl flex items-center justify-center">
                  {layer.icon}
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="text-[18px] text-[#F2F2F0] font-medium tracking-tight">{layer.title}</h3>
                  <p className="text-[14px] text-[#8A8A8A] font-light leading-[1.6]">{layer.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}

function DecisionFlowSection() {
  const [activeTab, setActiveTab] = useState(0);

  const scenarios = [
    {
      query: "I'm hungry.",
      flow: ["Intent: Nourishment / Dining", "Current location: Financial District", "Time: 14:30 (Late Lunch)", "Weather: Raining heavily", "Nearby restaurants: 42 within 1km", "Personal preferences: Vegetarian, prefers quiet", "Travel mode: Walking preferred", "Available time: 45 minutes until next meeting"],
      decision: "Suggests an indoor vegetarian cafe 2 blocks away with an underground pathway connection.",
      explanation: "Recommended because it avoids the rain, aligns with your dietary preferences, and ensures you return in time for your 15:15 meeting."
    },
    {
      query: "I'm bored.",
      flow: ["Intent: Entertainment / Exploration", "Current location: South Bank", "Time: 19:00 (Evening)", "Weather: Clear, mild", "Nearby events: 14 active occurrences", "Personal preferences: Art, live music", "Travel mode: Open", "Available time: Entire evening"],
      decision: "Suggests a contemporary art gallery opening with live jazz, 10 minutes away by foot.",
      explanation: "Recommended because the weather is ideal for a walk, and it perfectly matches your historical interest in local live music and art."
    },
    {
      query: "I'm travelling.",
      flow: ["Intent: Navigation / Transit", "Current location: Airport Terminal 2", "Time: 08:00 (Rush Hour)", "Weather: Clear", "Traffic: Heavy congestion on highways", "Personal preferences: Efficiency over cost", "Travel mode: Open", "Available time: Meeting at 09:30"],
      decision: "Suggests taking the Express Train rather than a rideshare.",
      explanation: "Recommended because heavy highway congestion will delay a car by 45 minutes, whereas the train ensures arrival 20 minutes before your meeting."
    },
    {
      query: "I'm meeting investors.",
      flow: ["Intent: Professional Networking / Ambiance", "Current location: Midtown", "Time: 10:00 (Morning)", "Weather: Overcast", "Nearby places: 85 cafes", "Personal preferences: Premium aesthetics, low noise", "Travel mode: Walking", "Available time: 60 minute duration"],
      decision: "Suggests a private lounge cafe with high acoustic dampening and premium seating.",
      explanation: "Recommended because the acoustic profile of this space is optimized for discrete conversation, suitable for a professional meeting."
    }
  ];

  return (
    <section className="relative w-full py-[120px] px-6 md:px-12 bg-[#050505] border-y border-white/[0.04]">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-16">
        
        <ScrollReveal>
          <div className="flex flex-col items-center text-center gap-6">
            <h2 className="text-[36px] md:text-[52px] text-[#F2F2F0] font-serif-editorial font-light leading-[1.1] tracking-tight">
              The Flow of Decision
            </h2>
            <p className="text-[18px] text-[#8A8A8A] font-light max-w-[600px] leading-[1.7]">
              Observe how the architecture reasons through simple statements. The focus is always on profound reasoning, not superficial recommendations.
            </p>
          </div>
        </ScrollReveal>

        <div className="flex flex-col lg:flex-row gap-12 max-w-[1000px] mx-auto w-full">
          
          <div className="w-full lg:w-[300px] flex flex-col gap-3">
            {scenarios.map((scenario, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`text-left px-6 py-4 rounded-xl border transition-all duration-300 ${
                  activeTab === index 
                    ? "bg-white/[0.05] border-white/[0.1] text-white" 
                    : "bg-transparent border-transparent text-[#6A6A6A] hover:text-[#A0A0A0] hover:bg-white/[0.02]"
                }`}
              >
                <span className="text-[16px] font-medium block">"{scenario.query}"</span>
              </button>
            ))}
          </div>

          <div className="flex-1 bg-[#020202] border border-white/[0.06] rounded-2xl p-8 md:p-12 relative overflow-hidden min-h-[500px]">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#4F6EF7]/5 blur-[100px] rounded-full pointer-events-none" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col h-full relative z-10"
              >
                <div className="flex items-center gap-4 mb-8 pb-8 border-b border-white/[0.05]">
                  <div className="w-8 h-8 rounded-full bg-white/[0.05] flex items-center justify-center">
                    <span className="text-white text-[14px]">User</span>
                  </div>
                  <span className="text-[24px] text-white font-medium tracking-tight">"{scenarios[activeTab].query}"</span>
                </div>

                <div className="flex-1 flex flex-col gap-8 mb-8">
                  <span className="text-[11px] uppercase tracking-[0.2em] text-[#4F6EF7] font-medium">Reasoning Flow</span>
                  <div className="flex flex-col gap-4">
                    {scenarios[activeTab].flow.map((step, i) => (
                      <div key={i} className="flex items-center gap-4">
                        <ArrowDown size={14} className="text-[#6A6A6A]" />
                        <span className="text-[14px] text-[#A0A0A0]">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-auto flex flex-col gap-6 pt-8 border-t border-white/[0.05]">
                  <div className="flex flex-col gap-2">
                    <span className="text-[11px] uppercase tracking-[0.2em] text-[#4F6EF7] font-medium">Decision</span>
                    <span className="text-[18px] text-[#F2F2F0] font-medium">{scenarios[activeTab].decision}</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-[11px] uppercase tracking-[0.2em] text-[#6A6A6A] font-medium">Transparent Explanation</span>
                    <span className="text-[14px] text-[#8A8A8A] italic leading-relaxed">{scenarios[activeTab].explanation}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}

function TrustTransparencySection() {
  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#020202]">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-24">
        
        <ScrollReveal>
          <div className="max-w-[800px]">
            <h2 className="text-[36px] md:text-[56px] text-[#F2F2F0] font-serif-editorial font-light leading-[1.1] tracking-tight">
              Trust & Transparency.
            </h2>
            <p className="mt-8 text-[20px] text-[#A0A0A0] font-light leading-[1.7]">
              Understanding should always remain understandable. An intelligence architecture that operates as a black box is inherently untrustworthy for spatial computing.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12">
          
          <div className="flex flex-col gap-4">
            <h3 className="text-[20px] text-[#F2F2F0] font-medium border-b border-white/[0.05] pb-4">Explainable Decisions™</h3>
            <p className="text-[15px] text-[#8A8A8A] font-light leading-[1.7]">
              Every important recommendation generated by Rheole can be traced back through its reasoning graph. You have the right to know exactly which contextual signals led to a specific outcome.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-[20px] text-[#F2F2F0] font-medium border-b border-white/[0.05] pb-4">Confidence Indicators</h3>
            <p className="text-[15px] text-[#8A8A8A] font-light leading-[1.7]">
              When the architecture is operating with incomplete spatial data or uncertain intent, it explicitly declares its confidence level. It will never present a guess as an absolute truth.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-[20px] text-[#F2F2F0] font-medium border-b border-white/[0.05] pb-4">Graceful Uncertainty</h3>
            <p className="text-[15px] text-[#8A8A8A] font-light leading-[1.7]">
              Fallback behavior is engineered into the core. If the Reasoning Engine cannot confidently determine an outcome, it defaults to offering alternative interpretations or requesting human oversight.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-[20px] text-[#F2F2F0] font-medium border-b border-white/[0.05] pb-4">User Corrections</h3>
            <p className="text-[15px] text-[#8A8A8A] font-light leading-[1.7]">
              Transparency enables correction. Because the reasoning is visible, users can correct mistaken assumptions. This feedback loop actively updates the local Memory Intelligence.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-[20px] text-[#F2F2F0] font-medium border-b border-white/[0.05] pb-4">Permission-Based</h3>
            <p className="text-[15px] text-[#8A8A8A] font-light leading-[1.7]">
              Intelligence requires data, but it only uses the data you explicitly permit. The Privacy-first architecture ensures that sensitive streams (like calendar or precise location) are deeply protected.
            </p>
          </div>

          <div className="flex flex-col gap-4 pt-4">
            <KnowledgeBlock title="Decision Science" label="Research Highlights">
              <p>
                Our research indicates that users are exponentially more likely to adopt ambient AI systems when the system provides a succinct "Why" alongside its "What". Trust is built through visibility.
              </p>
            </KnowledgeBlock>
          </div>

        </div>

      </div>
    </section>
  );
}

function RealWorldThinkingSection() {
  return (
    <section className="relative w-full py-[120px] px-6 md:px-12 bg-[#050505] border-y border-white/[0.04]">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-20">
        
        <ScrollReveal>
          <h2 className="text-[36px] md:text-[52px] text-[#F2F2F0] font-serif-editorial font-light leading-[1.1] tracking-tight max-w-[800px]">
            Real-world thinking requires real-world architecture.
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          <ScrollReveal delay={0.1}>
            <div className="bg-[#020202] border border-white/[0.05] rounded-3xl p-10 flex flex-col gap-8 h-full">
              <div className="flex items-center gap-4 border-b border-white/[0.05] pb-6">
                <MessageSquare className="text-[#6A6A6A]" size={24} />
                <h3 className="text-[24px] text-[#A0A0A0] font-medium tracking-tight">Traditional AI Systems</h3>
              </div>
              <ul className="flex flex-col gap-6 text-[16px] text-[#8A8A8A] font-light">
                <li className="flex items-start gap-4"><CircleDot size={12} className="mt-1.5 opacity-50" /> Prompt-driven and highly reactive.</li>
                <li className="flex items-start gap-4"><CircleDot size={12} className="mt-1.5 opacity-50" /> Relies on single-interaction query loops.</li>
                <li className="flex items-start gap-4"><CircleDot size={12} className="mt-1.5 opacity-50" /> Operates with limited situational awareness.</li>
                <li className="flex items-start gap-4"><CircleDot size={12} className="mt-1.5 opacity-50" /> Processes requests without understanding reality.</li>
                <li className="flex items-start gap-4"><CircleDot size={12} className="mt-1.5 opacity-50" /> Provides minimal explanation for its outputs.</li>
                <li className="flex items-start gap-4"><CircleDot size={12} className="mt-1.5 opacity-50" /> Session-focused, forgetting context quickly.</li>
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="bg-[#0A0A0A] border border-[#4F6EF7]/20 rounded-3xl p-10 flex flex-col gap-8 h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-[#4F6EF7]/5 blur-[60px] rounded-full pointer-events-none" />
              <div className="flex items-center gap-4 border-b border-white/[0.08] pb-6 relative z-10">
                <Layers className="text-[#4F6EF7]" size={24} />
                <h3 className="text-[24px] text-[#F2F2F0] font-medium tracking-tight">Rheole AI Architecture</h3>
              </div>
              <ul className="flex flex-col gap-6 text-[16px] text-[#D0D0D0] font-light relative z-10">
                <li className="flex items-start gap-4"><CircleDot size={12} className="mt-1.5 text-[#4F6EF7]" /> Situation-driven and deeply proactive.</li>
                <li className="flex items-start gap-4"><CircleDot size={12} className="mt-1.5 text-[#4F6EF7]" /> Employs continuous, background reasoning.</li>
                <li className="flex items-start gap-4"><CircleDot size={12} className="mt-1.5 text-[#4F6EF7]" /> Utilizes multi-layer intelligence for perspective.</li>
                <li className="flex items-start gap-4"><CircleDot size={12} className="mt-1.5 text-[#4F6EF7]" /> Anchored by profound spatial awareness.</li>
                <li className="flex items-start gap-4"><CircleDot size={12} className="mt-1.5 text-[#4F6EF7]" /> Delivers explainable decisions through logic graphs.</li>
                <li className="flex items-start gap-4"><CircleDot size={12} className="mt-1.5 text-[#4F6EF7]" /> Context-aware adaptation to a living world.</li>
              </ul>
            </div>
          </ScrollReveal>

        </div>

      </div>
    </section>
  );
}

function FutureOfAISection() {
  return (
    <section className="relative w-full py-[200px] px-6 md:px-12 bg-[#020202] overflow-hidden text-center">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#4F6EF7] opacity-[0.02] blur-[200px] rounded-full pointer-events-none" />
      
      <div className="max-w-[900px] mx-auto flex flex-col items-center gap-12 relative z-10">
        
        <ScrollReveal>
          <h2 className="text-[48px] md:text-[72px] text-[#F2F2F0] font-serif-editorial font-light leading-[1.0] tracking-tight">
            The Future of Intelligence
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="text-[20px] md:text-[24px] text-[#A0A0A0] font-light leading-[1.7] flex flex-col gap-8">
            <p>
              Artificial Intelligence will ultimately move beyond isolated prompts and generative parlor tricks.
            </p>
            <p>
              Future systems will understand people, places, and environments continuously. They will not wait to be queried. They will observe, reason, and act with profound situational awareness.
            </p>
            <p className="text-[#F2F2F0] text-[24px] md:text-[32px] font-serif-editorial italic">
              The most advanced AI will become quieter, more transparent, and infinitely more helpful.
            </p>
            <p>
              Ambient Spatial Intelligence represents the inevitable engineering evolution of that future. And Rheole is building its foundation.
            </p>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}

// -----------------------------------------------------------------------------------
// PAGE EXPORT
// -----------------------------------------------------------------------------------

export default function AIArchitecturePage() {
  return (
    <div className="relative w-full bg-[#020202] text-[#F2F2F0] selection:bg-[#4F6EF7]/30 selection:text-[#F2F2F0]">
      <ThinkingSection />
      <PhilosophySection />
      <ReasoningEngineSection />
      <IntelligenceLayersSection />
      <DecisionFlowSection />
      <TrustTransparencySection />
      <RealWorldThinkingSection />
      <FutureOfAISection />
    </div>
  );
}
