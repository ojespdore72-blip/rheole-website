'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Code, MapPin, Zap, Train, Activity, Clock, ShieldAlert, ArrowRight, CheckCircle2 } from 'lucide-react'

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

function ComparisonTable({ comparisons }: { comparisons: { feature: string, traditional: string, rheole: string }[] }) {
  return (
    <div className="w-full border border-white/10 rounded-xl overflow-hidden bg-[#0a0a0a] mt-8">
      <div className="grid grid-cols-12 bg-[#050505] border-b border-white/10 p-4">
        <div className="col-span-3 font-mono text-[11px] text-[#6A6A6A] tracking-[0.1em] uppercase hidden md:block">Focus Area</div>
        <div className="col-span-6 md:col-span-4 font-mono text-[11px] text-[#6A6A6A] tracking-[0.1em] uppercase">Traditional Transit Apps</div>
        <div className="col-span-6 md:col-span-5 font-mono text-[11px] text-[#4F6EF7] tracking-[0.1em] uppercase">Rheole Adaptive Transit</div>
      </div>
      {comparisons.map((comp, idx) => (
        <div key={idx} className="grid grid-cols-12 p-4 border-b border-white/5 last:border-0 items-center gap-4 md:gap-0">
          <div className="col-span-12 md:col-span-3 text-[13px] text-[#6A6A6A] font-medium uppercase tracking-wider">{comp.feature}</div>
          <div className="col-span-6 md:col-span-4 text-[13px] text-[#A0A0A0] leading-relaxed pr-4">{comp.traditional}</div>
          <div className="col-span-6 md:col-span-5 text-[13px] text-[#F2F2F0] leading-relaxed">{comp.rheole}</div>
        </div>
      ))}
    </div>
  )
}

// --- MAIN ARTICLE ---

export default function AdaptiveTransitArticle() {
  const [activeScenario, setActiveScenario] = useState<number | null>(null);
  const [activeAdaptation, setActiveAdaptation] = useState<number | null>(null);

  const realJourneys = [
    { q: "I'm commuting every morning.", a: "Rheole learns your precise office arrival threshold, orchestrating a sequence that prioritises reliability over raw speed, ensuring you never miss a 9:00 AM meeting due to micro-delays." },
    { q: "I'm visiting Bengaluru.", a: "The engine heavily weights simplicity, avoiding complex bus transfers and prioritizing high-frequency metro lines and direct ride-shares to minimize navigational anxiety." },
    { q: "I'm travelling with elderly parents.", a: "Walking effort is mathematically minimized. The engine exclusively selects stations with operational elevators and filters out routes requiring steep inclines or rushed transfers." },
    { q: "I need the lowest-cost journey.", a: "Rheole composes a purely public transit and walking graph, sacrificing time for absolute cost efficiency while still maintaining acceptable safety parameters." },
    { q: "I'm travelling late at night.", a: "Cost and speed are deprioritized. The engine actively seeks well-lit walking corridors, populated transit hubs, and direct ride-shares to ensure maximum physical security." }
  ];

  const adaptiveDecisions = [
    { trigger: "Metro Delayed", outcome: "Bus becomes the mathematically superior node; journey instantly re-orchestrated." },
    { trigger: "Heavy Rain", outcome: "Walking segments are aggressively reduced; ride-share or direct bus links are appended." },
    { trigger: "Concert Finishes", outcome: "Engine preemptively routes you to a secondary station 400m away to avoid severe platform congestion." },
    { trigger: "Battery Low", outcome: "An EV charging station is seamlessly injected into your driving or shared-EV route without causing terminal delay." },
    { trigger: "Wheelchair User", outcome: "A transfer is automatically shifted to a different station where elevator telemetry confirms operational status." }
  ];

  return (
    <article className="w-full flex flex-col items-center">
      
      {/* SECTION 01: MISSION */}
      <NavSection id="SYS_01" title="Mission">
        <p className="text-[20px] md:text-[24px] text-[#F2F2F0] font-light leading-relaxed max-w-[800px]">
          Transit is not choosing a vehicle. Transit is orchestrating an entire journey.
        </p>
        <p className="text-[15px] md:text-[16px] text-[#A0A0A0] leading-relaxed max-w-[800px] mt-6">
          The best journey rarely relies on a single mode of transport. It is a fluid combination of walking, metro, bus, ride-sharing, cycling, EV networks, and micro-mobility. Rheole understands the complete journey, eliminating the fragmentation of switching between different apps and isolated transport systems.
        </p>
      </NavSection>

      {/* SECTION 02: JOURNEY ORCHESTRATION */}
      <NavSection id="SYS_02" title="Journey Orchestration" useBlue={true}>
        <p className="text-[16px] text-[#F2F2F0] font-medium mb-6">Instead of one route, observe an intelligent journey.</p>
        
        <div className="w-full bg-[#050505] border border-[#4F6EF7]/20 rounded-2xl p-6 md:p-8 font-mono shadow-[0_0_30px_rgba(79,110,247,0.05)] flex flex-col md:flex-row items-center justify-between gap-4">
          {["Home", "5 min Walk", "Metro", "Coffee Pickup", "Shared Bike", "Office"].map((step, idx, arr) => (
            <React.Fragment key={idx}>
              <div className="flex flex-col items-center gap-2 text-center">
                <div className="w-12 h-12 rounded-full border border-[#4F6EF7]/30 bg-[#4F6EF7]/5 flex items-center justify-center text-[#4F6EF7]">
                  {idx === 0 || idx === arr.length - 1 ? <MapPin size={18} /> : <Activity size={18} />}
                </div>
                <span className="text-[11px] text-[#F2F2F0] uppercase tracking-wider">{step}</span>
              </div>
              {idx !== arr.length - 1 && (
                <div className="hidden md:flex text-[#4F6EF7]/50">
                  <ArrowRight size={16} />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
        <p className="text-[14px] text-[#A0A0A0] font-sans mt-6 leading-relaxed max-w-[800px]">
          This sequence is vastly superior to driving during rush hour. It integrates a brief walk, a high-speed underground transit leg, a contextual stop for coffee, and a final micro-mobility connection. This is **Journey Orchestration**—Rheole's signature mobility philosophy.
        </p>
      </NavSection>

      {/* SECTION 03: TRANSIT ENGINE */}
      <NavSection id="SYS_03" title="Transit Engine">
        <p className="text-[16px] md:text-[18px] text-[#F2F2F0] font-light leading-relaxed max-w-[800px] mb-8">
          The variables Rheole evaluates to compose a perfect journey.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <GridVariable icon={Train} title="Platform Congestion" desc="Evaluates live density on platforms to avoid overcrowded stations." />
          <GridVariable icon={Activity} title="Walking Effort" desc="Calculates elevation, weather, and distance to ensure pedestrian comfort." />
          <GridVariable icon={Clock} title="Transfer Complexity" desc="Measures the time and physical difficulty of switching between transit modes." />
          <GridVariable icon={ShieldAlert} title="Arrival Certainty" desc="Determines the statistical probability of reaching the destination on time." />
          <GridVariable icon={Zap} title="Energy Consumption" desc="Optimizes for the lowest carbon footprint across multimodal connections." />
          <GridVariable icon={MapPin} title="Ride Availability" desc="Tracks live deployment of ride-shares and micro-mobility vehicles near transit hubs." />
        </div>
      </NavSection>

      {/* SECTION 04: ADAPTIVE DECISIONS */}
      <NavSection id="SYS_04" title="Adaptive Decisions" useBlue={true}>
        <p className="text-[16px] md:text-[18px] text-[#F2F2F0] font-light leading-relaxed max-w-[800px] mb-8">
          Transit conditions change continuously. The journey must adapt.
        </p>
        <div className="flex flex-col gap-2 max-w-[800px]">
          {adaptiveDecisions.map((item, idx) => {
            const isActive = activeAdaptation === idx;
            return (
              <div key={idx} className={`border ${isActive ? 'border-[#4F6EF7]/30 bg-[#4F6EF7]/5' : 'border-white/5 bg-[#080808]'} rounded-lg overflow-hidden transition-colors`}>
                <button 
                  onClick={() => setActiveAdaptation(isActive ? null : idx)}
                  className="w-full flex justify-between items-center p-5 text-left"
                >
                  <span className={`text-[15px] font-medium ${isActive ? 'text-[#4F6EF7]' : 'text-[#F2F2F0]'}`}>
                    {item.trigger}
                  </span>
                  <ChevronDown size={16} className={`text-[#6A6A6A] transition-transform ${isActive ? 'rotate-180 text-[#4F6EF7]' : ''}`} />
                </button>
                <AnimatePresence>
                  {isActive && (
                    <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden">
                      <div className="p-5 pt-0 text-[14px] text-[#A0A0A0] leading-relaxed border-t border-[#4F6EF7]/10 mt-2 flex items-start gap-3">
                        <ArrowRight size={16} className="text-[#4F6EF7] mt-0.5 shrink-0" />
                        {item.outcome}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </NavSection>

      {/* SECTION 05: TRANSIT ORCHESTRATION (Novel Feature) */}
      <NavSection id="SYS_05" title="Transit Orchestration">
        <p className="text-[20px] md:text-[24px] text-[#F2F2F0] font-light leading-relaxed max-w-[800px]">
          Rheole continuously re-composes the entire day.
        </p>
        <p className="text-[15px] text-[#A0A0A0] leading-relaxed max-w-[800px] mt-6">
          Traditional navigation apps plan one isolated trip at a time. Rheole thinks in continuous movement graphs. Your entire day becomes one intelligent mobility plan.
        </p>

        <div className="w-full max-w-[800px] mt-8 p-6 rounded-xl border border-[#4F6EF7]/20 bg-[#4F6EF7]/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#4F6EF7]/10 blur-[80px] pointer-events-none" />
          <h4 className="font-mono text-[11px] text-[#4F6EF7] uppercase tracking-[0.2em] mb-6">Continuous Movement Graph</h4>
          <div className="flex flex-col gap-4 relative z-10 font-mono text-[13px] text-[#F2F2F0]">
            <div className="flex items-center gap-4"><div className="w-2 h-2 rounded-full bg-[#4F6EF7]" /> <span>08:30 — Walk to Metro</span></div>
            <div className="flex items-center gap-4"><div className="w-2 h-2 rounded-full bg-[#4F6EF7]" /> <span>08:45 — Metro to Downtown</span></div>
            <div className="flex items-center gap-4"><div className="w-2 h-2 rounded-full bg-[#4F6EF7]" /> <span>09:15 — Ride-share to Coworking Space</span></div>
            <div className="flex items-center gap-4"><div className="w-2 h-2 rounded-full bg-[#4F6EF7]" /> <span>12:30 — Walk to Lunch Reservation</span></div>
            <div className="flex items-center gap-4"><div className="w-2 h-2 rounded-full bg-[#4F6EF7]" /> <span>14:00 — Walk to Client Meeting</span></div>
            <div className="flex items-center gap-4"><div className="w-2 h-2 rounded-full bg-[#4F6EF7]" /> <span>18:00 — Shared EV to Evening Event</span></div>
            <div className="flex items-center gap-4"><div className="w-2 h-2 rounded-full bg-[#4F6EF7]" /> <span>21:30 — Direct Return Journey Home</span></div>
          </div>
        </div>
      </NavSection>

      {/* SECTION 06: JOURNEY CONFIDENCE (Unique Feature) */}
      <NavSection id="SYS_06" title="Journey Confidence" useBlue={true}>
        <p className="text-[20px] md:text-[24px] text-[#F2F2F0] font-light leading-relaxed max-w-[800px]">
          Users understand certainty, not only prediction.
        </p>
        <p className="text-[15px] text-[#A0A0A0] leading-relaxed max-w-[800px] mt-6 mb-8">
          Instead of providing a fragile ETA that shatters at the first sign of traffic, Rheole introduces **Journey Confidence**—a real-time probability score of your arrival.
        </p>

        <div className="w-full max-w-[400px] bg-[#050505] border border-[#4F6EF7]/30 rounded-2xl p-6 shadow-[0_0_40px_rgba(79,110,247,0.1)]">
          <div className="flex justify-between items-end mb-6 border-b border-white/10 pb-6">
            <div>
              <span className="text-[10px] text-[#6A6A6A] font-mono tracking-widest block mb-1">ARRIVAL</span>
              <span className="text-[32px] text-[#F2F2F0] font-light leading-none">9:02 AM</span>
            </div>
            <div className="text-right">
              <span className="text-[10px] text-[#6A6A6A] font-mono tracking-widest block mb-1">CONFIDENCE</span>
              <span className="text-[32px] text-[#4F6EF7] font-medium leading-none">98%</span>
            </div>
          </div>
          <div className="flex flex-col gap-3 font-mono text-[11px] text-[#A0A0A0]">
            <div className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#4F6EF7]" /> Metro currently on schedule.</div>
            <div className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#4F6EF7]" /> Light surface traffic detected.</div>
            <div className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#4F6EF7]" /> Normal walking pace sustained.</div>
            <div className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#4F6EF7]" /> Weather stable.</div>
            <div className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#4F6EF7]" /> 2 viable alternative routes available.</div>
          </div>
        </div>
      </NavSection>

      {/* SECTION 07: REAL JOURNEYS */}
      <NavSection id="SYS_07" title="Real Journeys">
        <p className="text-[16px] md:text-[18px] text-[#A0A0A0] font-light leading-relaxed max-w-[800px] mb-8">
          Personalized orchestration across limitless constraints.
        </p>
        <div className="flex flex-col gap-2 max-w-[800px]">
          {realJourneys.map((item, idx) => {
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
      </NavSection>
      
      {/* SECTION 08: MOBILITY NETWORK & EDGE CONDITIONS */}
      <NavSection id="SYS_08" title="Mobility Network" useBlue={true}>
        <p className="text-[20px] md:text-[24px] text-[#F2F2F0] font-light leading-relaxed max-w-[800px]">
          Every transport mode strengthens the others.
        </p>
        <p className="text-[15px] text-[#A0A0A0] leading-relaxed max-w-[800px] mt-6">
          Rheole understands relationships between mobility systems rather than treating them separately. A metro line is exponentially more powerful when synchronized with live micro-mobility deployment at its exit.
        </p>
        <EngineeringNote type="Edge Condition Insight" title="Systemic Resilience">
          During extreme edge conditions—such as a transit strike, train cancellation, or severe flooding—the network dynamically rebalances. If a metro line fails, Rheole instantly recalculates the entire city's load, distributing users across ride-shares, buses, and walking corridors to prevent catastrophic localized congestion.
        </EngineeringNote>
      </NavSection>

      {/* SECTION 09: COMPARISON SECTION */}
      <NavSection id="SYS_09" title="System Comparison">
        <ComparisonTable comparisons={[
          { feature: "Scope", traditional: "One isolated trip at a time.", rheole: "Entire-day movement orchestration." },
          { feature: "Transfers", traditional: "Static transfer recommendations.", rheole: "Adaptive mobility predicting connection confidence." },
          { feature: "Metric", traditional: "Solely focused on ETA.", rheole: "Focused on Journey Confidence scoring." },
          { feature: "Methodology", traditional: "Mode-by-mode navigation.", rheole: "Seamless multi-modal optimization." }
        ]} />
      </NavSection>

      {/* SECTION 10: FUTURE OF MOVEMENT */}
      <NavSection id="SYS_10" title="Future of Transit" isLast={true} useBlue={true}>
        <p className="text-[20px] md:text-[24px] text-[#F2F2F0] font-light leading-relaxed max-w-[800px]">
          The best navigation disappears into everyday life.
        </p>
        <p className="text-[15px] text-[#A0A0A0] leading-relaxed max-w-[800px] mt-6">
          In the future, cities become fully orchestrated. Journeys become completely adaptive. Vehicles cooperate with infrastructure. Movement becomes an invisible, frictionless utility. Rheole's ultimate vision is not to build a better transit app, but to build a reality where users simply arrive, without ever worrying about how.
        </p>
      </NavSection>

    </article>
  )
}
