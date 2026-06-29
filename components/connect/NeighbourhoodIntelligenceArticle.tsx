"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Users2, Building2, Trees, ShieldAlert, Heart, Calendar, GraduationCap, Briefcase, Camera, Music, BookOpen, Coffee, Sunrise, Sun, Sunset, Moon, Activity, ShieldCheck, Map, Clock, ArrowRight } from "lucide-react";

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
            <h2 className="text-[12px] text-[#10B981] font-medium tracking-[0.2em] uppercase">
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

function UrbanInsight({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <div className="my-12 w-full p-8 rounded-2xl bg-[#080808] border border-white/[0.05] relative overflow-hidden group">
      <div className="absolute top-0 left-0 w-1 h-full bg-[#10B981]/50" />
      <div className="flex items-center gap-3 mb-4">
        <Map size={16} className="text-[#10B981]" />
        <h4 className="font-mono text-[11px] text-[#A0A0A0] uppercase tracking-[0.2em]">
          Urban Insight <span className="text-[#10B981]/50 px-2">/</span> {title}
        </h4>
      </div>
      <div className="text-[16px] md:text-[18px] text-[#F2F2F0] leading-relaxed font-light italic">
        "{children}"
      </div>
    </div>
  );
}

function DetailPill({ icon: Icon, text }: { icon?: any, text: string }) {
  return (
    <div className="px-4 py-2 rounded-lg border border-white/[0.06] bg-[#0A0A0A] text-[14px] text-[#A0A0A0] font-light flex items-center gap-3">
      {Icon && <Icon size={16} className="text-[#10B981]/70" />}
      {text}
    </div>
  );
}

// --- COMPLEX INTERACTIVE COMPONENTS ---

function NeighbourhoodPulse() {
  const [activeTime, setActiveTime] = useState<"morning" | "afternoon" | "evening" | "night">("morning");

  const rhythms = {
    morning: {
      icon: Sunrise,
      title: "Morning (6AM - 11AM)",
      desc: "The neighbourhood wakes up. High footfall near transit hubs, bustling local cafés, school drop-offs, and early morning runners in the green spaces.",
      metrics: [
        { label: "Coffee shops", level: "High activity" },
        { label: "Transit", level: "Peak commute" },
        { label: "Parks", level: "Active" }
      ]
    },
    afternoon: {
      icon: Sun,
      title: "Afternoon (11AM - 5PM)",
      desc: "A shift in pace. Business districts and coworking spaces reach maximum density. Local markets open for fresh produce, and lunch spots are crowded.",
      metrics: [
        { label: "Coworking", level: "Full capacity" },
        { label: "Libraries", level: "Active" },
        { label: "Retail", level: "Moderate" }
      ]
    },
    evening: {
      icon: Sunset,
      title: "Evening (5PM - 9PM)",
      desc: "The transition to leisure. Families occupy playgrounds, local gyms peak, and restaurant districts become the center of gravity as residents return.",
      metrics: [
        { label: "Restaurants", level: "High activity" },
        { label: "Fitness", level: "Peak" },
        { label: "Transit", level: "Return commute" }
      ]
    },
    night: {
      icon: Moon,
      title: "Night (9PM - 6AM)",
      desc: "The quiet hours. Activity localizes to late-night hubs, safe well-lit corridors, and 24-hour pharmacies, while residential zones power down.",
      metrics: [
        { label: "Entertainment", level: "Active" },
        { label: "Residential", level: "Quiet" },
        { label: "Safety", level: "Well-lit routes" }
      ]
    }
  };

  const active = rhythms[activeTime];

  return (
    <div className="w-full mt-12 p-8 md:p-12 border border-white/[0.06] bg-[#080808] rounded-3xl relative overflow-hidden flex flex-col gap-12">
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#10B981]/[0.03] rounded-full blur-[80px] pointer-events-none" />
      
      {/* Interactive Time Selector */}
      <div className="flex gap-2 p-1 border border-white/[0.06] bg-[#050505] rounded-xl self-start">
        {(["morning", "afternoon", "evening", "night"] as const).map(time => (
          <button
            key={time}
            onClick={() => setActiveTime(time)}
            className={`px-6 py-2.5 rounded-lg text-[14px] font-medium transition-all ${
              activeTime === time 
                ? 'bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/20' 
                : 'text-[#6A6A6A] hover:text-[#A0A0A0] border border-transparent'
            }`}
          >
            <span className="capitalize">{time}</span>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTime}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col gap-8"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full border border-[#10B981]/30 bg-[#10B981]/10 flex items-center justify-center">
              <active.icon size={20} className="text-[#10B981]" />
            </div>
            <h4 className="text-[24px] font-serif-editorial text-[#F2F2F0]">{active.title}</h4>
          </div>
          
          <p className="text-[16px] md:text-[18px] text-[#A0A0A0] font-light leading-relaxed max-w-[600px]">
            {active.desc}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-white/[0.04]">
            {active.metrics.map((metric, idx) => (
              <div key={idx} className="flex flex-col gap-1">
                <span className="text-[12px] text-[#6A6A6A] uppercase tracking-[0.1em] font-mono">{metric.label}</span>
                <span className="text-[15px] text-[#F2F2F0] font-light">{metric.level}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function EvolutionTimeline() {
  const events = [
    { year: "Recent", title: "New specialty café opened", desc: "A shift towards artisanal coffee culture in the north district." },
    { year: "6 Months Ago", title: "Metro station expansion", desc: "Improved connectivity driving new residential demand." },
    { year: "1 Year Ago", title: "Startup Hub established", desc: "An old warehouse converted into a thriving coworking space." }
  ];

  return (
    <div className="w-full flex flex-col gap-8 mt-12 relative">
      <div className="absolute top-0 bottom-0 left-[19px] w-[1px] bg-white/[0.05]" />
      {events.map((evt, idx) => (
        <div key={idx} className="flex gap-8 relative z-10 group">
          <div className="w-10 h-10 rounded-full border border-white/10 bg-[#050505] flex items-center justify-center shrink-0 group-hover:border-[#10B981]/50 group-hover:bg-[#10B981]/10 transition-colors">
            <div className="w-2 h-2 rounded-full bg-[#10B981]" />
          </div>
          <div className="flex flex-col gap-2 pt-2">
            <span className="text-[12px] font-mono text-[#10B981] uppercase tracking-[0.1em]">{evt.year}</span>
            <h5 className="text-[18px] text-[#F2F2F0] font-medium">{evt.title}</h5>
            <p className="text-[15px] text-[#A0A0A0] font-light leading-relaxed">{evt.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function ComparisonTable() {
  const comparisons = [
    { left: "Static map coordinates", right: "Living neighbourhood profiles" },
    { left: "Local resident complaints", right: "Continuous urban intelligence" },
    { left: "Fragmented business listings", right: "Urban evolution tracking" },
    { left: "Random forums", right: "Context-rich understanding" },
    { left: "Advertising boards", right: "Opportunity discovery" }
  ];

  return (
    <div className="w-full border border-white/[0.06] rounded-2xl overflow-hidden bg-[#0A0A0A] mt-12">
      <div className="grid grid-cols-2 bg-[#050505] border-b border-white/[0.06] p-6">
        <div className="font-mono text-[12px] text-[#6A6A6A] tracking-[0.1em] uppercase">Traditional Locality Apps</div>
        <div className="font-mono text-[12px] text-[#10B981] tracking-[0.1em] uppercase">Rheole Neighbourhood Intelligence</div>
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

export default function NeighbourhoodIntelligenceArticle() {
  return (
    <article className="w-full flex flex-col items-center">
      
      {/* 2. LIVING PROFILE & LOCAL INTELLIGENCE */}
      <EditorialSection id="living-profile" title="Living Profile" subtitle="A continuously updated portrait.">
        <p className="text-[18px] md:text-[22px] text-[#A0A0A0] font-light leading-relaxed">
          Neighbourhoods are constantly evolving. People move in. Businesses open. Events appear. Infrastructure changes. We transform this continuous evolution into living, readable knowledge.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          <DetailPill icon={Users2} text="Population character" />
          <DetailPill icon={Building2} text="Commercial balance" />
          <DetailPill icon={Trees} text="Green spaces" />
          <DetailPill icon={GraduationCap} text="Education" />
          <DetailPill icon={Heart} text="Healthcare access" />
          <DetailPill icon={MapPin} text="Mobility options" />
          <DetailPill icon={Coffee} text="Local businesses" />
          <DetailPill icon={Music} text="Culture & Art" />
        </div>

        <UrbanInsight title="Reading the Environment">
          We process signals—footfall patterns, seasonal changes, public space utilization, and urban development—to understand a neighbourhood exactly the way a seasoned local would.
        </UrbanInsight>
      </EditorialSection>

      {/* 3. DAILY LIFE */}
      <EditorialSection id="daily-life" title="Daily Life" subtitle="The Neighbourhood Pulse." alternateBg>
        <p className="text-[18px] md:text-[22px] text-[#A0A0A0] font-light leading-relaxed">
          A neighbourhood at 8 AM is a completely different place than the same neighbourhood at 8 PM. Rheole maps the daily rhythm of an area.
        </p>
        
        <NeighbourhoodPulse />
      </EditorialSection>

      {/* 4. GROWTH & CHANGE */}
      <EditorialSection id="growth" title="Growth & Change" subtitle="Understanding urban evolution.">
        <p className="text-[18px] md:text-[22px] text-[#A0A0A0] font-light leading-relaxed">
          Neighbourhoods are not static. New cafés, metro expansions, housing developments, and community initiatives constantly reshape the ecosystem. We track this long-term transformation.
        </p>
        
        <EvolutionTimeline />
      </EditorialSection>

      {/* 5. SAFETY & OPPORTUNITIES */}
      <EditorialSection id="safety" title="Safety & Wellbeing" subtitle="Thoughtful, factual insights." alternateBg>
        <p className="text-[18px] md:text-[22px] text-[#A0A0A0] font-light leading-relaxed mb-12">
          We avoid unsupported safety claims or subjective rankings. Instead, we present informational insights based on physical urban realities.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 border-b border-white/[0.04] pb-16">
          {[
            { title: "Walkability & Lighting", desc: "Understanding the distribution of street lighting and safe pedestrian routes." },
            { title: "Emergency Access", desc: "Proximity to healthcare facilities, clinics, and emergency services." },
            { title: "Accessibility", desc: "The physical design of public spaces, senior-friendly zones, and transit nodes." },
            { title: "Environmental Quality", desc: "Green cover, noise levels, and seasonal air quality trends." }
          ].map((feature, i) => (
            <div key={i} className="flex gap-4">
              <ShieldCheck size={20} className="text-[#10B981] shrink-0 mt-1" />
              <div className="flex flex-col">
                <h5 className="text-[16px] text-[#F2F2F0] font-medium mb-1">{feature.title}</h5>
                <p className="text-[14px] text-[#A0A0A0] font-light leading-relaxed">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-[28px] md:text-[36px] font-serif-editorial text-[#F2F2F0] leading-tight mb-6">
          Local Opportunities
        </h3>
        <p className="text-[18px] md:text-[22px] text-[#A0A0A0] font-light leading-relaxed mb-12">
          Neighbourhoods generate unique opportunities—volunteer programmes, learning workshops, local hiring, and skill-sharing. We surface them naturally.
        </p>
        
        <div className="flex flex-col gap-6">
          <div className="p-6 border border-white/[0.06] bg-[#0A0A0A] rounded-2xl flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-[#10B981]/10 flex items-center justify-center shrink-0">
              <Activity size={16} className="text-[#10B981]" />
            </div>
            <div>
              <h5 className="text-[16px] text-[#F2F2F0] font-medium mb-1">Local Opportunity Feed™</h5>
              <p className="text-[15px] text-[#A0A0A0] font-light leading-relaxed">Curated opportunities emerging within the neighbourhood. Not advertisements, but meaningful community and professional intersections.</p>
            </div>
          </div>
        </div>

      </EditorialSection>

      {/* UNIQUE RHEOLE FEATURES */}
      <EditorialSection id="features" title="Proprietary Concepts" subtitle="Architectural-level intelligence.">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          <div className="flex flex-col gap-4 p-8 rounded-2xl bg-[#080808] border border-[#10B981]/20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#10B981]/10 rounded-full blur-[40px]" />
            <h4 className="text-[24px] font-serif-editorial text-[#F2F2F0]">Living Profile™</h4>
            <div className="w-8 h-[1px] bg-[#10B981]/50" />
            <p className="text-[15px] text-[#A0A0A0] font-light leading-relaxed">
              A continuously updated, algorithmic portrait of a neighbourhood that reflects real-world changes instantly.
            </p>
          </div>

          <div className="flex flex-col gap-4 p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
            <h4 className="text-[24px] font-serif-editorial text-[#F2F2F0]">Neighbourhood Pulse™</h4>
            <div className="w-8 h-[1px] bg-white/20" />
            <p className="text-[15px] text-[#A0A0A0] font-light leading-relaxed">
              A temporal heatmap showing how active the locality is throughout the morning, afternoon, evening, and weekend.
            </p>
          </div>

          <div className="flex flex-col gap-4 p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05] lg:col-span-2">
            <h4 className="text-[24px] font-serif-editorial text-[#F2F2F0]">Neighbourhood DNA™</h4>
            <div className="w-8 h-[1px] bg-white/20" />
            <p className="text-[15px] text-[#A0A0A0] font-light leading-relaxed mb-4">
              Summarises the fundamental character of an area. Descriptive, never judgemental.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-1.5 rounded-full bg-[#10B981]/10 text-[#10B981] text-[13px]">Creative</span>
              <span className="px-4 py-1.5 rounded-full bg-[#10B981]/10 text-[#10B981] text-[13px]">Student-friendly</span>
              <span className="px-4 py-1.5 rounded-full bg-[#10B981]/10 text-[#10B981] text-[13px]">Family-oriented</span>
              <span className="px-4 py-1.5 rounded-full bg-[#10B981]/10 text-[#10B981] text-[13px]">Business district</span>
              <span className="px-4 py-1.5 rounded-full bg-[#10B981]/10 text-[#10B981] text-[13px]">Historic</span>
              <span className="px-4 py-1.5 rounded-full bg-[#10B981]/10 text-[#10B981] text-[13px]">Technology hub</span>
            </div>
          </div>

        </div>
      </EditorialSection>

      {/* COMPARISON */}
      <EditorialSection id="comparison" title="The Difference" subtitle="Context over coordinates." alternateBg>
        <p className="text-[18px] md:text-[22px] text-[#A0A0A0] font-light leading-relaxed">
          Traditional map applications help you pass through a neighbourhood. Rheole helps you understand it.
        </p>
        
        <ComparisonTable />
      </EditorialSection>

      {/* 8. FUTURE OF NEIGHBOURHOODS */}
      <EditorialSection id="vision" title="The Vision" subtitle="Connecting to where you live.">
        <p className="text-[24px] md:text-[32px] text-[#F2F2F0] font-serif-editorial font-light leading-tight max-w-[800px]">
          Cities become stronger when residents understand their surroundings.
        </p>
        <p className="text-[18px] md:text-[22px] text-[#A0A0A0] font-light leading-relaxed mt-8 max-w-[800px]">
          Technology should help people participate in local life rather than merely navigating through it. Neighbourhoods should become understandable.
        </p>

        <div className="mt-16 p-8 md:p-12 border border-[#10B981]/30 bg-[#10B981]/5 rounded-3xl flex flex-col items-center text-center max-w-[800px] relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10 pointer-events-none" />
          <h3 className="text-[28px] md:text-[40px] font-serif-editorial text-[#F2F2F0] leading-tight relative z-10">
            "Rheole doesn't just show me my neighbourhood. It helps me understand how it lives, changes and grows with the people who shape it."
          </h3>
          <span className="text-[12px] font-mono text-[#10B981] uppercase tracking-[0.2em] mt-8 relative z-10">
            Locality Intelligence
          </span>
        </div>
      </EditorialSection>

    </article>
  );
}
