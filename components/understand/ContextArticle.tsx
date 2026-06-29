"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CloudRain, Sun, Moon, MapPin, Clock, Calendar, Users, Briefcase, Activity, Battery, Car, Navigation, Headphones, Thermometer, ShieldAlert, Zap, BookOpen, Coffee, Sunrise, Sunset, Building2, Wind, ArrowRight, CornerDownRight, Plane, ShieldCheck, HelpCircle } from "lucide-react";

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
    <section id={id} className={`w-full relative py-24 md:py-32 border-b border-white/[0.04] ${alternateBg ? 'bg-[#030303]' : 'bg-transparent'}`}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-start gap-16 md:gap-24 relative">
        <ScrollReveal className="w-full md:w-[320px] shrink-0 sticky top-32 z-10">
          <div className="flex flex-col gap-4">
            <h2 className="text-[12px] text-[#D97706] font-medium tracking-[0.2em] uppercase">
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

function KnowledgeBlock({ type, title, children }: { type: "RealityInsight" | "DecisionScience" | "HumanBehaviour" | "UrbanComputing", title: string, children: React.ReactNode }) {
  return (
    <div className="my-12 w-full p-8 rounded-2xl bg-[#050505] border border-white/[0.05] relative overflow-hidden group">
      <div className="absolute top-0 left-0 w-1 h-full bg-[#D97706]/40" />
      <div className="flex items-center gap-3 mb-4">
        <Compass size={16} className="text-[#D97706]" />
        <h4 className="font-mono text-[11px] text-[#A0A0A0] uppercase tracking-[0.2em]">
          {type.replace(/([A-Z])/g, ' $1').trim()} <span className="text-[#D97706]/50 px-2">/</span> {title}
        </h4>
      </div>
      <div className="text-[16px] md:text-[18px] text-[#F2F2F0] leading-relaxed font-light italic">
        "{children}"
      </div>
    </div>
  );
}

function Compass({ size, className }: { size: number, className?: string }) {
  return <MapPin size={size} className={className} />;
}

function Pill({ icon: Icon, text }: { icon: any, text: string }) {
  return (
    <div className="px-4 py-2 rounded-lg border border-white/[0.06] bg-[#0A0A0A] text-[14px] text-[#A0A0A0] font-light flex items-center gap-3 hover:border-[#D97706]/40 hover:text-[#F2F2F0] transition-colors cursor-default">
      <Icon size={16} className="text-[#D97706]/70" />
      {text}
    </div>
  );
}

// --- COMPLEX INTERACTIVE COMPONENTS ---

function ContextMatrix() {
  const [scenario, setScenario] = useState<"sunny" | "rain" | "night" | "airport">("sunny");

  const scenarios = {
    sunny: {
      icon: Sun, label: "Sunny day",
      outcome: "An outdoor café with patio seating, 5 mins walk."
    },
    rain: {
      icon: CloudRain, label: "Heavy rain",
      outcome: "An indoor restaurant, avoiding open streets."
    },
    night: {
      icon: Moon, label: "Late night",
      outcome: "A 24-hour food spot or late-night diner."
    },
    airport: {
      icon: Plane, label: "Airport",
      outcome: "A quick grab-and-go kiosk near your boarding gate."
    }
  };

  const current = scenarios[scenario];

  return (
    <div className="w-full mt-12 p-8 md:p-12 border border-white/[0.06] bg-[#050505] rounded-3xl relative overflow-hidden flex flex-col gap-12">
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#D97706]/[0.03] rounded-full blur-[80px] pointer-events-none" />
      
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 relative z-10">
        
        {/* The Constant Intent */}
        <div className="flex-1 flex flex-col items-center text-center">
          <div className="text-[12px] font-mono text-[#6A6A6A] tracking-[0.1em] uppercase mb-4">Same Intent</div>
          <div className="px-6 py-4 rounded-xl bg-[#0A0A0A] border border-white/[0.05] text-[20px] font-serif-editorial text-[#F2F2F0]">
            "I'm hungry"
          </div>
        </div>

        <ArrowRight size={24} className="text-[#6A6A6A] hidden md:block" />

        {/* The Changing Context */}
        <div className="flex-[1.5] flex flex-col gap-4">
          <div className="text-[12px] font-mono text-[#D97706] tracking-[0.1em] uppercase mb-1">Changing Context</div>
          <div className="flex flex-wrap gap-2">
            {(["sunny", "rain", "night", "airport"] as const).map(key => {
              const item = scenarios[key];
              return (
                <button
                  key={key}
                  onClick={() => setScenario(key)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-[14px] font-medium transition-all ${
                    scenario === key 
                      ? 'bg-[#D97706]/10 text-[#D97706] border border-[#D97706]/30' 
                      : 'bg-[#0A0A0A] text-[#6A6A6A] border border-white/[0.05] hover:text-[#A0A0A0]'
                  }`}
                >
                  <item.icon size={14} />
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>

      </div>

      {/* The Dynamic Outcome */}
      <AnimatePresence mode="wait">
        <motion.div
          key={scenario}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="w-full pt-8 border-t border-white/[0.05] flex flex-col md:flex-row items-center gap-6"
        >
          <div className="w-12 h-12 rounded-full border border-[#D97706]/30 bg-[#D97706]/10 flex items-center justify-center shrink-0">
            <Compass size={20} className="text-[#D97706]" />
          </div>
          <div className="flex flex-col">
            <span className="text-[12px] font-mono text-[#D97706] uppercase tracking-[0.1em] mb-1">Completely Different Decision</span>
            <span className="text-[18px] md:text-[22px] font-light text-[#F2F2F0] leading-relaxed">
              {current.outcome}
            </span>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function TransparentReasoningVisualizer() {
  const breakdown = [
    { label: "Context Factors", value: "Raining, 18:30, Walking, 20% Battery" },
    { label: "Detected Situation", value: "User is exposed to weather with low device capability" },
    { label: "Possible Interpretations", value: "Needs immediate shelter OR shortest route home" },
    { label: "Selected Understanding", value: "Prioritize closest indoor environment on route home" },
    { label: "Recommendation", value: "Indoor café 2 blocks away to wait out the rain while charging" }
  ];

  return (
    <div className="w-full flex flex-col mt-12 gap-0 relative">
      <div className="absolute top-4 bottom-4 left-[15px] w-[2px] bg-gradient-to-b from-[#D97706]/50 via-white/[0.05] to-transparent" />
      {breakdown.map((step, idx) => (
        <div key={idx} className="flex gap-8 relative z-10 group py-4">
          <div className="w-8 h-8 rounded-full border border-[#D97706]/30 bg-[#0A0A0A] flex items-center justify-center shrink-0 mt-1">
            <div className={`w-2 h-2 rounded-full ${idx === 0 ? 'bg-[#D97706]' : 'bg-[#D97706]/40 group-hover:bg-[#D97706]'} transition-colors`} />
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[12px] font-mono text-[#6A6A6A] uppercase tracking-[0.1em]">{step.label}</span>
            <span className="text-[16px] md:text-[18px] text-[#F2F2F0] font-light">{step.value}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

function ComparisonTable() {
  const comparisons = [
    { left: "Prompt-first", right: "Context-first" },
    { left: "Static input", right: "Continuously adaptive" },
    { left: "Single interaction", right: "Spatial awareness" },
    { left: "Limited awareness", right: "Environmental understanding" },
    { left: "Generic responses", right: "Human-centred reasoning" },
    { left: "User explains everything", right: "Reality-aware intelligence" }
  ];

  return (
    <div className="w-full border border-white/[0.06] rounded-2xl overflow-hidden bg-[#0A0A0A] mt-12">
      <div className="grid grid-cols-2 bg-[#050505] border-b border-white/[0.06] p-6">
        <div className="font-mono text-[12px] text-[#6A6A6A] tracking-[0.1em] uppercase">Traditional AI</div>
        <div className="font-mono text-[12px] text-[#D97706] tracking-[0.1em] uppercase">Rheole Context Intelligence</div>
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

export default function ContextArticle() {
  return (
    <article className="w-full flex flex-col items-center">
      
      {/* 1. CONTEXT LAYERS */}
      <EditorialSection id="layers" title="Context Layers" subtitle="The invisible variables.">
        <p className="text-[18px] md:text-[22px] text-[#A0A0A0] font-light leading-relaxed mb-12">
          People do not live inside search boxes. People live inside context. Every decision we make is influenced by countless invisible variables. Traditional software ignores these variables; Rheole begins with them.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          <Pill icon={MapPin} text="Location" />
          <Pill icon={Clock} text="Time" />
          <Pill icon={CloudRain} text="Weather" />
          <Pill icon={Car} text="Traffic" />
          <Pill icon={Users} text="Nearby people" />
          <Pill icon={Activity} text="Current activity" />
          <Pill icon={Navigation} text="Movement" />
          <Pill icon={Calendar} text="Calendar" />
          <Pill icon={Battery} text="Battery level" />
          <Pill icon={Headphones} text="Noise level" />
          <Pill icon={ShieldAlert} text="Safety" />
          <Pill icon={Building2} text="Business hours" />
          <Pill icon={Wind} text="Air quality" />
          <Pill icon={Briefcase} text="Local opportunities" />
        </div>

        <KnowledgeBlock type="RealityInsight" title="Physical Reality as the Interface">
          A truly intelligent system understands that its user exists in a physical world subject to weather, time, and physical limitations. Failing to account for these is a failure of intelligence.
        </KnowledgeBlock>
      </EditorialSection>

      {/* 2. THE CONTEXT ENGINE & UNDERSTANDING CHANGE */}
      <EditorialSection id="understanding-change" title="Understanding Change" subtitle="Reality never stops moving." alternateBg>
        <p className="text-[18px] md:text-[22px] text-[#A0A0A0] font-light leading-relaxed">
          Morning becomes afternoon. Rain begins. Traffic shifts. A meeting ends. Context is continuously evolving. The Context Engine adapts every recommendation accordingly. AI should never assume reality remains constant.
        </p>
        
        <ContextMatrix />
      </EditorialSection>

      {/* 3. CONTEXT IN ACTION */}
      <EditorialSection id="context-in-action" title="Context in Action" subtitle="Translating reality.">
        <p className="text-[18px] md:text-[22px] text-[#A0A0A0] font-light leading-relaxed">
          When you tell Rheole what is happening, it cross-references your statement with reality to generate a profound understanding—not a generic response.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {[
            { start: "\"I'm late.\"", evolved: "Cross-references live traffic, your calendar, and alternative transit to provide the single fastest route or suggest notifying attendees." },
            { start: "\"I'm travelling.\"", evolved: "Notices you are in a foreign country, adapting recommendations to highly-rated tourist safety zones and translating local menus." },
            { start: "\"I'm working.\"", evolved: "Mutes non-essential notifications and highlights nearby quiet cafés with strong Wi-Fi and power outlets." },
            { start: "\"I'm waiting for a train.\"", evolved: "Understands you have a 15-minute dwell time and surfaces a quick local opportunity right inside the station." }
          ].map((ex, i) => (
            <div key={i} className="p-8 border border-white/[0.04] bg-[#0A0A0A] rounded-2xl flex flex-col gap-6 group hover:border-[#D97706]/20 transition-colors">
              <div className="text-[20px] font-serif-editorial text-[#6A6A6A] italic">
                {ex.start}
              </div>
              <div className="flex items-start gap-4">
                <CornerDownRight size={20} className="text-[#D97706] mt-1 shrink-0 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
                <div className="text-[16px] text-[#F2F2F0] font-light leading-relaxed">
                  {ex.evolved}
                </div>
              </div>
            </div>
          ))}
        </div>
      </EditorialSection>

      {/* 4. TRANSPARENT REASONING */}
      <EditorialSection id="transparency" title="Transparent Reasoning" subtitle="Understanding the machine." alternateBg>
        <p className="text-[18px] md:text-[22px] text-[#A0A0A0] font-light leading-relaxed mb-8">
          Context is complex. When Rheole makes a decision, it exposes the exact contextual variables it used. You can see the conflicts, the confidence levels, and the reasoning.
        </p>
        
        <TransparentReasoningVisualizer />

        <div className="mt-16 flex items-start gap-6 p-6 border border-[#D97706]/20 bg-[#D97706]/5 rounded-xl">
          <HelpCircle size={24} className="text-[#D97706] shrink-0" />
          <div className="flex flex-col gap-2">
            <h5 className="text-[16px] text-[#F2F2F0] font-medium">Missing Context</h5>
            <p className="text-[15px] text-[#A0A0A0] font-light leading-relaxed">When a situation is ambiguous, Rheole explains what additional information would improve its understanding, politely asking follow-up questions instead of guessing blindly.</p>
          </div>
        </div>
      </EditorialSection>

      {/* UNIQUE RHEOLE FEATURES */}
      <EditorialSection id="features" title="Proprietary Concepts" subtitle="The architectural breakthrough.">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          <div className="flex flex-col gap-4 p-8 rounded-2xl bg-[#080808] border border-[#D97706]/30 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#D97706]/5 rounded-full blur-[60px]" />
            <h4 className="text-[24px] font-serif-editorial text-[#F2F2F0]">Context Graph™</h4>
            <div className="w-8 h-[1px] bg-[#D97706]/50" />
            <p className="text-[15px] text-[#A0A0A0] font-light leading-relaxed">
              Visualises every contextual signal contributing to a recommendation, mapping reality in real-time.
            </p>
          </div>

          <div className="flex flex-col gap-4 p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
            <h4 className="text-[24px] font-serif-editorial text-[#F2F2F0]">Live Context™</h4>
            <div className="w-8 h-[1px] bg-white/20" />
            <p className="text-[15px] text-[#A0A0A0] font-light leading-relaxed">
              Continuously updates understanding as reality changes, ensuring that an answer provided at 10 AM is updated by 2 PM if the weather or traffic shifts.
            </p>
          </div>

          <div className="flex flex-col gap-4 p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
            <h4 className="text-[24px] font-serif-editorial text-[#F2F2F0]">Context Drift™</h4>
            <div className="w-8 h-[1px] bg-white/20" />
            <p className="text-[15px] text-[#A0A0A0] font-light leading-relaxed">
              Explains why a recommendation changed over time. It allows the user to see exactly which variable (e.g., a sudden road closure) triggered the new outcome.
            </p>
          </div>

          <div className="flex flex-col gap-4 p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
            <h4 className="text-[24px] font-serif-editorial text-[#F2F2F0]">Explain This Context™</h4>
            <div className="w-8 h-[1px] bg-white/20" />
            <p className="text-[15px] text-[#A0A0A0] font-light leading-relaxed">
              Allows users to inspect exactly which contextual factors influenced a decision, opening the "black box" of AI.
            </p>
          </div>

        </div>

        <KnowledgeBlock type="UrbanComputing" title="The Invisible Layer">
          Context is the invisible layer that sits between human intention and digital execution. By capturing context, Rheole removes the burden of explanation from the human.
        </KnowledgeBlock>
      </EditorialSection>

      {/* 6. WITHOUT CONTEXT */}
      <EditorialSection id="without-context" title="Without Context" subtitle="Why generic AI fails." alternateBg>
        <p className="text-[18px] md:text-[22px] text-[#A0A0A0] font-light leading-relaxed">
          Removing context from AI creates generic experiences. It forces the user to explain everything.
        </p>
        
        <ComparisonTable />
      </EditorialSection>

      {/* 7. FUTURE OF CONTEXTUAL COMPUTING */}
      <EditorialSection id="vision" title="The Future" subtitle="Understanding reality.">
        <p className="text-[24px] md:text-[32px] text-[#F2F2F0] font-serif-editorial font-light leading-tight max-w-[800px]">
          The future of computing will not be defined by larger models. It will be defined by deeper understanding.
        </p>
        <p className="text-[18px] md:text-[22px] text-[#A0A0A0] font-light leading-relaxed mt-8 max-w-[800px]">
          Computers should understand the world before responding. The best technology quietly adapts to reality instead of asking users to explain everything.
        </p>

        <div className="mt-16 p-8 md:p-12 border border-[#D97706]/30 bg-[#D97706]/5 rounded-3xl flex flex-col items-center text-center max-w-[800px] relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10 pointer-events-none" />
          <h3 className="text-[28px] md:text-[40px] font-serif-editorial text-[#F2F2F0] leading-tight relative z-10">
            "AI isn't intelligent because it answers questions. It's intelligent because it understands reality."
          </h3>
          <span className="text-[12px] font-mono text-[#D97706] uppercase tracking-[0.2em] mt-8 relative z-10">
            Context Intelligence
          </span>
        </div>
      </EditorialSection>

    </article>
  );
}
