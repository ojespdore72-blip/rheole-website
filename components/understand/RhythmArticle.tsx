"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sunrise, Sun, Sunset, Moon, Coffee, Briefcase, Dumbbell, MapPin, Map, TreePine, History, Bed, Plane, ArrowRight, CornerDownRight, Heart, Brain, Calendar, Activity, Zap, Watch, Train } from "lucide-react";

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
    <section id={id} className={`w-full relative py-24 md:py-32 border-b border-white/[0.04] ${alternateBg ? 'bg-[#0A0705]' : 'bg-transparent'}`}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-start gap-16 md:gap-24 relative">
        <ScrollReveal className="w-full md:w-[320px] shrink-0 sticky top-32 z-10">
          <div className="flex flex-col gap-4">
            <h2 className="text-[12px] text-[#D97757] font-medium tracking-[0.2em] uppercase">
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

function KnowledgeBlock({ type, title, children }: { type: "LifestyleScience" | "WellbeingPrinciple" | "HumanPatterns" | "RhythmNote", title: string, children: React.ReactNode }) {
  return (
    <div className="my-12 w-full p-8 rounded-2xl bg-[#0D0A08] border border-white/[0.05] relative overflow-hidden group">
      <div className="absolute top-0 left-0 w-1 h-full bg-[#D97757]/40" />
      <div className="flex items-center gap-3 mb-4">
        <Heart size={16} className="text-[#D97757]" />
        <h4 className="font-mono text-[11px] text-[#A89F91] uppercase tracking-[0.2em]">
          {type.replace(/([A-Z])/g, ' $1').trim()} <span className="text-[#D97757]/50 px-2">/</span> {title}
        </h4>
      </div>
      <div className="text-[16px] md:text-[18px] text-[#F2F2F0] leading-relaxed font-light italic">
        "{children}"
      </div>
    </div>
  );
}

function Pill({ icon: Icon, text }: { icon: any, text: string }) {
  return (
    <div className="px-4 py-2 rounded-lg border border-white/[0.06] bg-[#14100C] text-[14px] text-[#A89F91] font-light flex items-center gap-3 hover:border-[#D97757]/40 hover:text-[#F2F2F0] transition-colors cursor-default">
      <Icon size={16} className="text-[#D97757]/70" />
      {text}
    </div>
  );
}

// --- COMPLEX INTERACTIVE COMPONENTS ---

function DailyFlowVisualizer() {
  const [phase, setPhase] = useState<"morning" | "midday" | "afternoon" | "evening" | "night">("morning");

  const phases = {
    morning: { label: "Morning", icon: Sunrise, title: "Focused Work", desc: "High energy, deep focus. Recommendations prioritize quiet spaces, low interruptions, and direct commutes." },
    midday: { label: "Midday", icon: Sun, title: "Lunch & Movement", desc: "A shift in rhythm. The system naturally surfaces nearby walking routes, cafés, and opportunities for physical movement." },
    afternoon: { label: "Afternoon", icon: Briefcase, title: "Meetings & Collaboration", desc: "Interactive time. Emphasis on transit times between locations and ambient awareness of schedules." },
    evening: { label: "Evening", icon: Sunset, title: "Exploration", desc: "Work transitions to life. Recommendations pivot toward social connection, events, hobbies, and neighborhood discovery." },
    night: { label: "Night", icon: Moon, title: "Reflection & Planning", desc: "Winding down. The system protects focus, reduces non-essential alerts, and prepares for the following day." }
  };

  const current = phases[phase];

  return (
    <div className="w-full mt-12 p-8 md:p-12 border border-white/[0.06] bg-[#0A0705] rounded-3xl relative overflow-hidden flex flex-col gap-12">
      {/* Soft breathing pulsing background */}
      <motion.div 
        animate={{ scale: [1, 1.05, 1], opacity: [0.03, 0.05, 0.03] }} 
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-80 h-80 bg-[#D97757] rounded-full blur-[100px] pointer-events-none" 
      />
      
      {/* Path Selector */}
      <div className="flex flex-wrap gap-2 z-10 relative">
        {(["morning", "midday", "afternoon", "evening", "night"] as const).map(key => (
          <button
            key={key}
            onClick={() => setPhase(key)}
            className={`flex flex-1 min-w-[100px] flex-col items-center gap-3 p-4 rounded-xl border transition-all ${
              phase === key 
                ? 'bg-[#D97757]/10 text-[#D97757] border-[#D97757]/30' 
                : 'bg-[#110D0A] text-[#8C8377] border-white/[0.04] hover:text-[#D97757]/80'
            }`}
          >
            {React.createElement(phases[key].icon, { size: 20 })}
            <span className="text-[12px] font-mono uppercase tracking-wider">{phases[key].label}</span>
          </button>
        ))}
      </div>

      {/* The Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={phase}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col relative z-10 p-8 rounded-2xl bg-[#14100C] border border-white/[0.05]"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-10 h-10 rounded-full bg-[#D97757]/10 border border-[#D97757]/20 flex items-center justify-center text-[#D97757]">
              {React.createElement(current.icon, { size: 18 })}
            </div>
            <h4 className="text-[24px] font-serif-editorial text-[#F2F2F0]">{current.title}</h4>
          </div>
          <p className="text-[16px] md:text-[18px] text-[#A89F91] font-light leading-relaxed">
            {current.desc}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function ComparisonTable() {
  const comparisons = [
    { left: "Fixed schedules", right: "Living rhythms" },
    { left: "Habit streaks", right: "Adaptive understanding" },
    { left: "Reminders & Alarms", right: "Context-aware support" },
    { left: "Time blocks", right: "Lifestyle balance" },
    { left: "Productivity metrics", right: "Natural evolution" },
    { left: "Manual planning", right: "Ambient assistance" }
  ];

  return (
    <div className="w-full border border-white/[0.06] rounded-2xl overflow-hidden bg-[#0D0A08] mt-12">
      <div className="grid grid-cols-2 bg-[#0A0705] border-b border-white/[0.06] p-6">
        <div className="font-mono text-[12px] text-[#8C8377] tracking-[0.1em] uppercase">Traditional Productivity</div>
        <div className="font-mono text-[12px] text-[#D97757] tracking-[0.1em] uppercase">Rheole Rhythm Intelligence</div>
      </div>
      {comparisons.map((comp, idx) => (
        <div key={idx} className="grid grid-cols-2 p-6 border-b border-white/[0.04] last:border-0 items-center gap-6 hover:bg-white/[0.01] transition-colors">
          <div className="text-[15px] text-[#8C8377] line-through decoration-white/20">{comp.left}</div>
          <div className="text-[15px] text-[#F2F2F0] font-medium">{comp.right}</div>
        </div>
      ))}
    </div>
  );
}

// --- MAIN ARTICLE COMPONENT ---

export default function RhythmArticle() {
  return (
    <article className="w-full flex flex-col items-center">
      
      {/* 1. LIFE PATTERNS */}
      <EditorialSection id="patterns" title="Life Patterns" subtitle="Meaningful rhythms.">
        <p className="text-[18px] md:text-[22px] text-[#A89F91] font-light leading-relaxed mb-12">
          Our lives are shaped by recurring moments rather than identical days. Rheole understands these rhythms without forcing structure.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          <Pill icon={Sunrise} text="Morning energy" />
          <Pill icon={Train} text="Commute habits" />
          <Pill icon={MapPin} text="Favourite spots" />
          <Pill icon={Brain} text="Learning periods" />
          <Pill icon={Dumbbell} text="Exercise routines" />
          <Pill icon={Zap} text="Creative time" />
          <Pill icon={Coffee} text="Social evenings" />
          <Pill icon={Heart} text="Family time" />
          <Pill icon={Plane} text="Travel frequency" />
          <Pill icon={TreePine} text="Weekend exploration" />
          <Pill icon={Bed} text="Rest periods" />
          <Pill icon={Watch} text="Seasonal changes" />
        </div>

        <KnowledgeBlock type="LifestyleScience" title="The Illusion of the Perfect Schedule">
          People are not machines. Rigid schedules fail because they do not account for the messy, fluid reality of human emotion, fatigue, and spontaneity. Rhythms are resilient; schedules are fragile.
        </KnowledgeBlock>
      </EditorialSection>

      {/* 2. DAILY FLOW */}
      <EditorialSection id="flow" title="Daily Flow" subtitle="Understanding, not scheduling." alternateBg>
        <p className="text-[18px] md:text-[22px] text-[#A89F91] font-light leading-relaxed mb-12">
          Instead of displaying a timetable, Rheole understands the natural flow of a day. These are observations, not rules. The flow continuously adapts to you.
        </p>
        
        <DailyFlowVisualizer />
      </EditorialSection>

      {/* 3. ADAPTIVE ROUTINES */}
      <EditorialSection id="adaptive" title="Adaptive Routines" subtitle="Changing without losing identity.">
        <p className="text-[18px] md:text-[22px] text-[#A89F91] font-light leading-relaxed mb-8">
          Routines change. Rheole recognises temporary shifts—working from home, travelling, rainy days, holidays, or business trips—and adapts naturally without requiring manual reconfiguration.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {[
            { start: "\"I'm travelling for work.\"", evolved: "Rheole suspends your local gym recommendations and surfaces business-friendly cafés near your hotel, while respecting your morning wake-up rhythm." },
            { start: "\"I recently became a parent.\"", evolved: "Notices a profound shift in daily timing. Slowly adjusts recommendations to accommodate new rest patterns and family-friendly environments." },
            { start: "\"I work night shifts.\"", evolved: "Flipping the standard schedule. Rheole understands that your 'morning' begins at 8 PM, adapting sunlight and noise recommendations accordingly." },
            { start: "\"I'm training for a marathon.\"", evolved: "Recognises an increase in early morning movement. Integrates running routes and recovery suggestions naturally into your existing commute." }
          ].map((ex, i) => (
            <div key={i} className="p-8 border border-white/[0.04] bg-[#0A0705] rounded-2xl flex flex-col gap-6 group hover:border-[#D97757]/20 transition-colors">
              <div className="text-[20px] font-serif-editorial text-[#8C8377] italic">
                {ex.start}
              </div>
              <div className="flex items-start gap-4">
                <CornerDownRight size={20} className="text-[#D97757] mt-1 shrink-0 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
                <div className="text-[16px] text-[#F2F2F0] font-light leading-relaxed">
                  {ex.evolved}
                </div>
              </div>
            </div>
          ))}
        </div>
      </EditorialSection>

      {/* 4. BALANCE & WELLBEING */}
      <EditorialSection id="balance" title="Balance & Wellbeing" subtitle="Living intentionally." alternateBg>
        <div className="max-w-[800px]">
          <p className="text-[24px] md:text-[32px] text-[#F2F2F0] font-serif-editorial font-light leading-tight mb-8">
            Technology should support wellbeing rather than maximise productivity.
          </p>
          <p className="text-[18px] md:text-[22px] text-[#A89F91] font-light leading-relaxed mb-8">
            Rhythm Intelligence encourages balance rather than optimisation. It quietly monitors whether your days include a healthy mix of movement, focused work, meaningful breaks, time outdoors, social connection, and rest.
          </p>
          <p className="text-[18px] md:text-[22px] text-[#A89F91] font-light leading-relaxed">
            It is not a score to beat. It is a gentle reflection of your lifestyle.
          </p>
        </div>

        <KnowledgeBlock type="WellbeingPrinciple" title="The Productivity Myth">
          Optimization assumes the goal of life is to do more things faster. Balance assumes the goal of life is to do the right things with presence. Ambient Spatial Intelligence is designed for the latter.
        </KnowledgeBlock>
      </EditorialSection>

      {/* 5. UNIQUE RHEOLE FEATURES */}
      <EditorialSection id="features" title="Proprietary Concepts" subtitle="Architecting ambient life.">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          <div className="flex flex-col gap-4 p-8 rounded-2xl bg-[#0D0A08] border border-[#D97757]/30 relative overflow-hidden group lg:col-span-2">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#D97757]/5 rounded-full blur-[60px]" />
            <Activity size={24} className="text-[#D97757] mb-2" />
            <h4 className="text-[24px] font-serif-editorial text-[#F2F2F0]">Balance Indicator™</h4>
            <div className="w-12 h-[1px] bg-[#D97757]/50" />
            <p className="text-[16px] text-[#A89F91] font-light leading-relaxed max-w-[800px]">
              Reflects whether recent days include a healthy mix of movement, work, learning, exploration, rest, and social connection. It is not a score for productivity. It is a reflection of lifestyle balance.
            </p>
          </div>

          <div className="flex flex-col gap-4 p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
            <h4 className="text-[24px] font-serif-editorial text-[#F2F2F0]">Rhythm Map™</h4>
            <div className="w-8 h-[1px] bg-white/20" />
            <p className="text-[15px] text-[#A89F91] font-light leading-relaxed">
              Visualises the natural flow of your days over weeks and seasons, highlighting your unique living patterns rather than mechanical schedules.
            </p>
          </div>

          <div className="flex flex-col gap-4 p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
            <h4 className="text-[24px] font-serif-editorial text-[#F2F2F0]">Adaptive Day™</h4>
            <div className="w-8 h-[1px] bg-white/20" />
            <p className="text-[15px] text-[#A89F91] font-light leading-relaxed">
              Gently adjusts recommendations as routines organically shift because of travel, weather, workload, or unexpected life events.
            </p>
          </div>

          <div className="flex flex-col gap-4 p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
            <h4 className="text-[24px] font-serif-editorial text-[#F2F2F0]">Ambient Moments™</h4>
            <div className="w-8 h-[1px] bg-white/20" />
            <p className="text-[15px] text-[#A89F91] font-light leading-relaxed">
              Identifies small opportunities that fit naturally into your rhythm. A quiet café before a meeting, or a nearby park during an evening walk. Suggestions feel timely, never intrusive.
            </p>
          </div>

          <div className="flex flex-col gap-4 p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
            <h4 className="text-[24px] font-serif-editorial text-[#F2F2F0]">Rhythm Evolution™</h4>
            <div className="w-8 h-[1px] bg-white/20" />
            <p className="text-[15px] text-[#A89F91] font-light leading-relaxed">
              Shows how your daily life has naturally changed over months and years. From Student to Professional, or Explorer to Parent. The focus is on human growth.
            </p>
          </div>

        </div>
      </EditorialSection>

      {/* 6. COMPARISON */}
      <EditorialSection id="comparison" title="The Difference" subtitle="Life vs Optimisation." alternateBg>
        <p className="text-[18px] md:text-[22px] text-[#A89F91] font-light leading-relaxed">
          We are moving away from the era of notifications, streaks, and rigid productivity tools.
        </p>
        
        <ComparisonTable />
      </EditorialSection>

      {/* 7. FUTURE OF AMBIENT LIVING */}
      <EditorialSection id="vision" title="The Future" subtitle="Quiet intelligence.">
        <p className="text-[24px] md:text-[32px] text-[#F2F2F0] font-serif-editorial font-light leading-tight max-w-[800px]">
          Future technology will not interrupt people with constant reminders. The most intelligent systems are almost invisible.
        </p>
        <p className="text-[18px] md:text-[22px] text-[#A89F91] font-light leading-relaxed mt-8 max-w-[800px]">
          It will quietly recognise rhythms. Adapt naturally. Reduce friction. Protect focus. Encourage wellbeing. Help people move through life with less effort and more intention.
        </p>

        <div className="mt-16 p-8 md:p-12 border border-[#D97757]/30 bg-[#D97757]/5 rounded-3xl flex flex-col items-center text-center max-w-[800px] relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10 pointer-events-none" />
          <h3 className="text-[28px] md:text-[40px] font-serif-editorial text-[#F2F2F0] leading-tight relative z-10">
            "Rheole doesn't organise my life. It understands the rhythm I'm already living and gently helps me move through it with greater balance."
          </h3>
          <span className="text-[12px] font-mono text-[#D97757] uppercase tracking-[0.2em] mt-8 relative z-10">
            Rhythm Intelligence
          </span>
        </div>
      </EditorialSection>

    </article>
  );
}
