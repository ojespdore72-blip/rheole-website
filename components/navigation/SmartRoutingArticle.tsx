'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Code, Database, Cpu, Zap, Radio, Globe, Navigation as NavIcon } from 'lucide-react'

// --- REUSABLE ENGINEERING COMPONENTS ---

function ScrollReveal({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

function NavSection({ id, title, children, isLast = false, useBlue = false }: { id: string, title: string, children: React.ReactNode, isLast?: boolean, useBlue?: boolean }) {
  return (
    <section className={`w-full relative pt-16 md:pt-24 pb-8 ${useBlue ? 'bg-[#4F6EF7]/5' : ''}`}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-start gap-12 relative">
        <ScrollReveal className="w-full md:w-[280px] shrink-0 sticky top-32 z-10 hidden md:block">
          <div className="flex flex-col gap-3">
            <h2 className="text-[18px] md:text-[20px] text-[#F2F2F0] font-medium tracking-wide">
              {title}
            </h2>
            <div className="w-8 h-[1px] bg-[#4F6EF7]/50 mt-2" />
          </div>
        </ScrollReveal>

        <div className="flex-1 w-full flex flex-col gap-8 pb-12">
          {/* Mobile Title */}
          <ScrollReveal className="md:hidden flex flex-col gap-2 mb-4">
            <h2 className="text-[24px] text-[#F2F2F0] font-medium tracking-wide">
              {title}
            </h2>
            <div className="w-8 h-[1px] bg-[#4F6EF7]/50 mt-2" />
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            {children}
          </ScrollReveal>
        </div>
      </div>
      
      {!isLast && (
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="w-full h-[1px] bg-gradient-to-r from-[#4F6EF7]/20 to-transparent" />
        </div>
      )}
    </section>
  )
}

function EngineeringNote({ type = "Insight", title, children }: { type?: string, title: string, children: React.ReactNode }) {
  return (
    <div className="my-8 w-full p-6 rounded-xl bg-[#080808] border-l-2 border-[#4F6EF7] relative overflow-hidden group">
      <div className="absolute inset-0 bg-[#4F6EF7]/[0.02] pointer-events-none" />
      <div className="flex items-center gap-3 mb-3">
        <Code size={14} className="text-[#4F6EF7]" />
        <h4 className="font-mono text-[11px] text-[#4F6EF7] uppercase tracking-[0.2em]">
          {type} // {title}
        </h4>
      </div>
      <div className="text-[14px] md:text-[15px] text-[#A0A0A0] leading-relaxed">
        {children}
      </div>
    </div>
  )
}

function GridVariable({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <div className="flex flex-col p-5 border border-white/5 bg-[#0a0a0a] rounded-lg hover:border-[#4F6EF7]/30 transition-colors">
      <div className="flex items-center gap-3 mb-3">
        <Icon size={16} className="text-[#4F6EF7]" />
        <h3 className="text-[14px] text-[#F2F2F0] font-medium">{title}</h3>
      </div>
      <p className="text-[13px] text-[#A0A0A0] leading-relaxed">{desc}</p>
    </div>
  )
}

function ComparisonTable({ comparisons }: { comparisons: { left: string, right: string, explanation: string }[] }) {
  return (
    <div className="w-full border border-white/10 rounded-xl overflow-hidden bg-[#0a0a0a] mt-8">
      <div className="grid grid-cols-12 bg-[#050505] border-b border-white/10 p-4">
        <div className="col-span-3 font-mono text-[11px] text-[#6A6A6A] tracking-[0.1em] uppercase">Variable A</div>
        <div className="col-span-3 font-mono text-[11px] text-[#6A6A6A] tracking-[0.1em] uppercase">Variable B</div>
        <div className="col-span-6 font-mono text-[11px] text-[#6A6A6A] tracking-[0.1em] uppercase">AI Resolution Logic</div>
      </div>
      {comparisons.map((comp, idx) => (
        <div key={idx} className="grid grid-cols-1 md:grid-cols-12 p-4 border-b border-white/5 last:border-0 items-center gap-4 md:gap-0">
          <div className="col-span-3 text-[14px] text-[#F2F2F0] font-medium">{comp.left}</div>
          <div className="col-span-3 text-[14px] text-[#F2F2F0] font-medium text-opacity-60">{comp.right}</div>
          <div className="col-span-6 text-[13px] text-[#A0A0A0] leading-relaxed">{comp.explanation}</div>
        </div>
      ))}
    </div>
  )
}

// --- MAIN ARTICLE ---

export default function SmartRoutingArticle() {
  const [activeScenario, setActiveScenario] = useState<number | null>(null);

  const scenarios = [
    { q: "I'm travelling with children.", a: "Rheole biases towards routes with continuous wide sidewalks, low traffic density, and immediate access to metro stations with operational elevators, deprioritizing sheer speed." },
    { q: "I'm walking at night.", a: "The engine temporarily down-weights unlit paths and parks, aggressively surfacing well-lit arterial roads and areas with high pedestrian flow or open businesses." },
    { q: "I need EV charging.", a: "The route dynamically recalculates not just for distance, but to intersect with available, compatible DC fast-charging stations without causing excessive detour time." },
    { q: "I have only twenty minutes.", a: "The 'Urgency' heuristic overrides cost and scenic preferences, locking onto the mathematically fastest multi-modal combination, even if it requires two transfers." },
    { q: "I want scenic roads.", a: "The engine cross-references geographic data to trace coastal roads, parks, and historic districts, deliberately ignoring freeways." }
  ];

  return (
    <article className="w-full flex flex-col items-center">
      
      {/* SECTION 01: MISSION */}
      <NavSection id="SYS_01" title="Mission">
        <p className="text-[20px] md:text-[24px] text-[#F2F2F0] font-light leading-relaxed max-w-[800px]">
          Routing is no longer simply calculating physical distance.
        </p>
        <p className="text-[15px] md:text-[16px] text-[#A0A0A0] leading-relaxed max-w-[800px] mt-6">
          Traditional navigation engines look at a map as a static graph of roads. Rheole views movement as a living system. To make the smartest decision, Rheole evaluates movement, real-time traffic, incoming weather, localized events, user intent, multimodal transportation, safety metrics, personal preferences, energy requirements, timing constraints, and accessibility.
        </p>
      </NavSection>

      {/* SECTION 02: LIVE DEMONSTRATION */}
      <NavSection id="SYS_02" title="Live Demonstration" useBlue={true}>
        <p className="text-[16px] text-[#F2F2F0] font-medium mb-6">Mission: Reach Cubbon Park.</p>
        
        {/* Interactive Dashboard UI */}
        <div className="w-full bg-[#050505] border border-[#4F6EF7]/20 rounded-2xl overflow-hidden font-mono shadow-[0_0_30px_rgba(79,110,247,0.05)]">
          <div className="flex border-b border-[#4F6EF7]/20 bg-[#4F6EF7]/5 p-4 justify-between items-center text-[12px] text-[#4F6EF7]">
            <span className="flex items-center gap-2"><Radio size={14} className="animate-pulse" /> LIVE TELEMETRY</span>
            <span>T-MINUS 00:00</span>
          </div>
          
          <div className="p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex flex-col gap-1">
              <span className="text-[10px] text-[#6A6A6A]">CURRENT TIME</span>
              <span className="text-[14px] text-[#F2F2F0]">6:15 PM</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] text-[#6A6A6A]">WEATHER</span>
              <span className="text-[14px] text-[#F2F2F0]">Light Rain</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] text-[#6A6A6A]">TRAFFIC</span>
              <span className="text-[14px] text-[#ef4444]">Heavy</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] text-[#6A6A6A]">PARKING</span>
              <span className="text-[14px] text-[#eab308]">Limited</span>
            </div>
          </div>
          
          <div className="p-6 border-t border-white/5 bg-[#0a0a0a]">
            <span className="text-[10px] text-[#6A6A6A] block mb-2">AI RESOLUTION</span>
            <div className="text-[18px] text-[#4F6EF7] font-medium mb-2 flex items-center gap-2">
              <NavIcon size={18} />
              Metro + 6 Minute Walk
            </div>
            <p className="text-[13px] text-[#A0A0A0] font-sans">
              <span className="text-[#F2F2F0] font-medium">Decision Logic:</span> Heavy surface traffic at 6:15 PM invalidates driving. Light rain makes cycling uncomfortable. Limited parking increases terminal delay. The Metro bypasses surface congestion entirely, and a short 6-minute walk minimizes rain exposure.
            </p>
          </div>
        </div>
      </NavSection>

      {/* SECTION 03: DECISION ENGINE */}
      <NavSection id="SYS_03" title="Decision Engine">
        <p className="text-[16px] md:text-[18px] text-[#F2F2F0] font-light leading-relaxed max-w-[800px] mb-8">
          The Smart Routing engine evaluates movement through a dense matrix of real-time variables.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <GridVariable icon={Zap} title="Live Traffic" desc="Ingests velocity data across arterial and capillary roads to bypass immediate congestion." />
          <GridVariable icon={Globe} title="Weather Density" desc="Cross-references micro-climate data to avoid flooded underpasses and heavy rain zones." />
          <GridVariable icon={Cpu} title="Crowd Density" desc="Monitors localized cellular density to route around unexpected protests or stadium exits." />
          <GridVariable icon={Database} title="Public Transport" desc="Hooks into live transit APIs to sync walking speeds with train arrivals." />
          <GridVariable icon={Zap} title="Elevation" desc="Calculates topographical strain for cycling and walking routes to minimize physical exertion." />
          <GridVariable icon={Radio} title="Accessibility" desc="Maps out continuous wheelchair-friendly sidewalks, ramps, and operational elevators." />
        </div>
      </NavSection>

      {/* SECTION 04: INTELLIGENCE LAYERS */}
      <NavSection id="SYS_04" title="Intelligence Layers" useBlue={true}>
        <div className="flex flex-col gap-6 max-w-[800px]">
          {[
            { layer: "01", name: "Geography", desc: "The static base map of physical infrastructure, roads, and terrain." },
            { layer: "02", name: "Transport", desc: "The overlay of all available multimodal transit options and schedules." },
            { layer: "03", name: "Real-time Conditions", desc: "Live injection of traffic, weather, road closures, and accidents." },
            { layer: "04", name: "Context", desc: "Evaluating the time of day, day of the week, and seasonal anomalies." },
            { layer: "05", name: "Intent", desc: "Understanding why the user is travelling (e.g., urgency vs leisure)." },
            { layer: "06", name: "Prediction", desc: "Forecasting traffic states 30 minutes into the future to prevent driving into forming jams." },
            { layer: "07", name: "Recommendation", desc: "The final synthesis outputting the absolute smartest multimodal decision." }
          ].map((item, i) => (
            <div key={i} className="flex gap-6 items-start">
              <div className="font-mono text-[14px] text-[#4F6EF7] mt-1 shrink-0">L_{item.layer}</div>
              <div>
                <h4 className="text-[16px] text-[#F2F2F0] font-medium">{item.name}</h4>
                <p className="text-[14px] text-[#A0A0A0] leading-relaxed mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </NavSection>

      {/* SECTION 05: REAL SCENARIOS */}
      <NavSection id="SYS_05" title="Routing Scenarios">
        <p className="text-[16px] md:text-[18px] text-[#A0A0A0] font-light leading-relaxed max-w-[800px] mb-8">
          Algorithms adapting instantaneously to human constraints.
        </p>

        <div className="flex flex-col gap-2 max-w-[800px]">
          {scenarios.map((item, idx) => {
            const isActive = activeScenario === idx;
            return (
              <div key={idx} className={`border ${isActive ? 'border-[#4F6EF7]/30 bg-[#4F6EF7]/5' : 'border-white/5 bg-[#080808]'} rounded-lg overflow-hidden transition-colors`}>
                <button 
                  onClick={() => setActiveScenario(isActive ? null : idx)}
                  className="w-full flex justify-between items-center p-5 text-left"
                >
                  <span className={`text-[15px] font-medium ${isActive ? 'text-[#4F6EF7]' : 'text-[#F2F2F0]'}`}>
                    "{item.q}"
                  </span>
                  <ChevronDown size={16} className={`text-[#6A6A6A] transition-transform ${isActive ? 'rotate-180 text-[#4F6EF7]' : ''}`} />
                </button>
                <AnimatePresence>
                  {isActive && (
                    <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden">
                      <div className="p-5 pt-0 text-[14px] text-[#A0A0A0] leading-relaxed border-t border-[#4F6EF7]/10 mt-2">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>

        <ComparisonTable comparisons={[
          { left: "Fastest", right: "Safest", explanation: "Bypasses high-speed motorways in favor of well-lit, lower-speed residential streets." },
          { left: "Shortest", right: "Most Comfortable", explanation: "Accepts a 12% increase in distance to avoid unpaved roads and severe elevation changes." },
          { left: "Walking", right: "Metro", explanation: "Triggers multimodal switch when walking duration exceeds localized humidity thresholds." }
        ]} />
      </NavSection>

      {/* SECTION 06: EDGE CONDITIONS */}
      <NavSection id="SYS_06" title="Edge Conditions" useBlue={true}>
        <p className="text-[16px] md:text-[18px] text-[#F2F2F0] font-light leading-relaxed max-w-[800px] mb-6">
          Cities are chaotic. Navigation must be resilient.
        </p>
        <p className="text-[15px] text-[#A0A0A0] leading-relaxed max-w-[800px] mb-8">
          During extreme edge conditions—such as sudden flash flooding, unannounced political rallies, power outages disabling traffic lights, or severe transit delays—Rheole isolates the affected geographic polygons in real-time. The predictive layer calculates the ripple effect of the congestion, proactively rerouting users through secondary arterial networks before they encounter the bottleneck.
        </p>
        <EngineeringNote type="Urban Mobility Insight" title="Adaptive Resilience">
          A routing engine that only reacts to traffic is already too late. Rheole identifies the leading edge of a traffic jam and routes you away from where the traffic *will* be in 15 minutes.
        </EngineeringNote>
      </NavSection>

      {/* SECTION 07: ENGINEERING INSIGHTS */}
      <NavSection id="SYS_07" title="Why It Matters">
        <p className="text-[20px] md:text-[24px] text-[#F2F2F0] font-light leading-relaxed max-w-[800px]">
          Movement is a highly complex computational problem.
        </p>
        <p className="text-[15px] text-[#A0A0A0] leading-relaxed max-w-[800px] mt-6">
          Every single journey contains hundreds of rapidly changing variables. Humans inherently simplify these decisions based on habit. AI, however, evaluates the entire mathematical reality. 
        </p>
        <p className="text-[15px] text-[#A0A0A0] leading-relaxed max-w-[800px] mt-4">
          Intelligent routing does not simply reduce travel time. It fundamentally influences daily stress levels, physical safety, fuel consumption, environmental impact, and overall urban efficiency. A city where movement is optimized is a city that breathes easier.
        </p>
      </NavSection>

      {/* SECTION 08: FUTURE OF MOBILITY */}
      <NavSection id="SYS_08" title="Future of Mobility" isLast={true} useBlue={true}>
        <p className="text-[20px] md:text-[24px] text-[#F2F2F0] font-light leading-relaxed max-w-[800px]">
          Movement becomes proactive, rather than reactive.
        </p>
        <p className="text-[15px] text-[#A0A0A0] leading-relaxed max-w-[800px] mt-6">
          The future of routing integrates seamlessly with autonomous vehicles, micromobility fleets, and spatial computing. As ambient intelligence evolves, Rheole will orchestrate movement before you even request a route—anticipating your needs based on context, aligning with predictive city-wide traffic models, and delivering a perfectly fluid journey.
        </p>
        <EngineeringNote type="Future Vision" title="Ambient Orchestration">
          You will not ask for directions. The infrastructure will simply guide you.
        </EngineeringNote>
      </NavSection>

    </article>
  )
}
