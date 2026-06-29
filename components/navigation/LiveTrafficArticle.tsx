'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Code, Activity, MapPin, Zap, CloudLightning, Train, ShieldAlert, BarChart } from 'lucide-react'

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
        <div className="col-span-6 md:col-span-4 font-mono text-[11px] text-[#6A6A6A] tracking-[0.1em] uppercase">Traditional Traffic Systems</div>
        <div className="col-span-6 md:col-span-5 font-mono text-[11px] text-[#4F6EF7] tracking-[0.1em] uppercase">Rheole Urban Intelligence</div>
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

export default function LiveTrafficArticle() {
  const [activeScenario, setActiveScenario] = useState<number | null>(null);

  const scenarios = [
    { q: "It's raining.", a: "Vehicle spacing instantly increases. Average speeds drop by 20%. Pedestrians vanish from exposed sidewalks and crowd under transit shelters. The city slows down to manage reduced friction." },
    { q: "Concert ends in ten minutes.", a: "Thousands of pedestrians will suddenly surge into a two-block radius, triggering temporary road closures and a massive spike in ride-hail vehicle density near designated pickup zones." },
    { q: "Metro line temporarily unavailable.", a: "A wave of human density shifts immediately from underground stations to surface-level bus stops and arterial roads, causing cascading localized congestion." },
    { q: "Unexpected road closure.", a: "Traffic behaves like water hitting a rock, rapidly diffusing into adjacent secondary streets and residential areas, completely altering neighborhood acoustic and pollution levels." },
    { q: "Morning school traffic.", a: "Micro-bottlenecks form simultaneously at hundreds of specific coordinate points between 7:45 AM and 8:15 AM, dissolving entirely by 8:30 AM." }
  ];

  return (
    <article className="w-full flex flex-col items-center">
      
      {/* SECTION 01: MISSION */}
      <NavSection id="SYS_01" title="Mission">
        <p className="text-[20px] md:text-[24px] text-[#F2F2F0] font-light leading-relaxed max-w-[800px]">
          Movement becomes information. Understanding movement becomes intelligence.
        </p>
        <p className="text-[15px] md:text-[16px] text-[#A0A0A0] leading-relaxed max-w-[800px] mt-6">
          Traffic should never be reduced to static red and green lines painted over a map. Roads are only one small part of urban movement. Every vehicle, pedestrian, bus, metro, cyclist, weather change, and local event contributes to a massive, continuous system. Rheole understands the city as a living, breathing entity.
        </p>
      </NavSection>

      {/* SECTION 02: LIVE CITY */}
      <NavSection id="SYS_02" title="Live City" useBlue={true}>
        <p className="text-[16px] text-[#F2F2F0] font-medium mb-6">Simulation: Friday, 6:00 PM — Heavy Rain.</p>
        
        {/* Interactive Dashboard UI */}
        <div className="w-full bg-[#050505] border border-[#4F6EF7]/20 rounded-2xl overflow-hidden font-mono shadow-[0_0_30px_rgba(79,110,247,0.05)]">
          <div className="flex border-b border-[#4F6EF7]/20 bg-[#4F6EF7]/5 p-4 justify-between items-center text-[12px] text-[#4F6EF7]">
            <span className="flex items-center gap-2"><Activity size={14} className="animate-pulse" /> URBAN FLOW OBSERVER</span>
            <span>SYSTEM ACTIVE</span>
          </div>
          
          <div className="p-6 border-b border-white/5 bg-[#0a0a0a]">
            <span className="text-[10px] text-[#6A6A6A] block mb-2">MACRO BEHAVIOUR</span>
            <div className="text-[16px] text-[#F2F2F0] font-medium leading-relaxed">
              The city's behaviour is fundamentally altering. Pedestrian density is dropping 60% as people seek shelter. Surface friction has increased, reducing arterial velocity by 25%. A major concert is releasing 15,000 attendees into the downtown core in 12 minutes. 
            </div>
          </div>

          <div className="p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-6 bg-[#050505]">
            <div className="flex flex-col gap-1">
              <span className="text-[10px] text-[#6A6A6A]">VEHICLE VELOCITY</span>
              <span className="text-[14px] text-[#ef4444]">-25% (Decreased)</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] text-[#6A6A6A]">TRANSIT LOAD</span>
              <span className="text-[14px] text-[#4F6EF7]">+40% (Surging)</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] text-[#6A6A6A]">PEDESTRIAN DENSITY</span>
              <span className="text-[14px] text-[#A0A0A0]">-60% (Dropping)</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] text-[#6A6A6A]">LOCAL EVENTS</span>
              <span className="text-[14px] text-[#eab308]">1 Major (Active)</span>
            </div>
          </div>
        </div>
      </NavSection>

      {/* SECTION 03: URBAN FLOW ENGINE */}
      <NavSection id="SYS_03" title="Urban Flow Engine">
        <p className="text-[16px] md:text-[18px] text-[#F2F2F0] font-light leading-relaxed max-w-[800px] mb-8">
          Congestion is merely a symptom. Rheole calculates the root causes.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <GridVariable icon={BarChart} title="Movement Patterns" desc="The historical baseline of how specific districts behave on given days and times." />
          <GridVariable icon={MapPin} title="Commercial Districts" desc="Areas with extreme shifts in population density between 9 AM and 5 PM." />
          <GridVariable icon={Train} title="Public Transport" desc="The pulse of trains and buses injecting localized groups of pedestrians onto sidewalks." />
          <GridVariable icon={CloudLightning} title="Weather Constraints" desc="Atmospheric conditions that instantly alter human willingness to walk or cycle." />
          <GridVariable icon={ShieldAlert} title="Emergency Corridors" desc="Unpredictable, high-priority movement requiring immediate clearance." />
          <GridVariable icon={Activity} title="Event Discharges" desc="Stadiums and schools releasing thousands of individuals simultaneously." />
        </div>
      </NavSection>

      {/* SECTION 04: REAL-TIME SIGNALS */}
      <NavSection id="SYS_04" title="Real-Time Signals" useBlue={true}>
        <div className="flex flex-col gap-6 max-w-[800px]">
          {[
            { layer: "01", name: "Moving Bottlenecks", desc: "Slow-moving heavy freight or construction vehicles causing a rolling wave of congestion behind them." },
            { layer: "02", name: "Accident Shockwaves", desc: "The immediate, radial slowing of traffic spanning outwards from a collision site." },
            { layer: "03", name: "Parking Availability", desc: "The hidden congestion caused by hundreds of vehicles circling a single block looking for a space." },
            { layer: "04", name: "Large Gatherings", desc: "Unexpected political rallies or festivals claiming road space without prior scheduling." },
            { layer: "05", name: "Road Safety", desc: "Live structural hazards, flooded underpasses, or degraded road surfaces requiring immediate rerouting." }
          ].map((item, i) => (
            <div key={i} className="flex gap-6 items-start">
              <div className="font-mono text-[14px] text-[#4F6EF7] mt-1 shrink-0">SIG_{item.layer}</div>
              <div>
                <h4 className="text-[16px] text-[#F2F2F0] font-medium">{item.name}</h4>
                <p className="text-[14px] text-[#A0A0A0] leading-relaxed mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <EngineeringNote type="AI Prediction" title="Signal Synthesis">
          A traditional map sees a road closure and paints it red. Rheole sees a road closure, understands that 400 cars per hour must now divert, and calculates exactly which secondary streets will become congested in 10 minutes.
        </EngineeringNote>
      </NavSection>

      {/* SECTION 05: LIVING SCENARIOS */}
      <NavSection id="SYS_05" title="Living Scenarios">
        <p className="text-[16px] md:text-[18px] text-[#A0A0A0] font-light leading-relaxed max-w-[800px] mb-8">
          The city is a responsive entity. Every event triggers a cascading reaction.
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
                    Scenario: "{item.q}"
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

      {/* SECTION 06: PATTERN INTELLIGENCE */}
      <NavSection id="SYS_06" title="Pattern Intelligence" useBlue={true}>
        <p className="text-[16px] md:text-[18px] text-[#F2F2F0] font-light leading-relaxed max-w-[800px] mb-6">
          Traffic is highly predictable. Randomness is an illusion.
        </p>
        <p className="text-[15px] text-[#A0A0A0] leading-relaxed max-w-[800px] mb-8">
          Cities possess deep, rhythmic personalities. Monday mornings display a vastly different mobility profile than Friday afternoons. A specific arterial road behaves entirely differently during tourist season versus the middle of winter. By analyzing these recurring weekly rhythms, seasonal shifts, and neighbourhood habits, Rheole predicts future movement rather than merely reacting to the present.
        </p>
        <EngineeringNote type="Urban Fact" title="The Personality of Roads">
          A road is not a static object. A street that operates as a high-speed commuter artery at 8:00 AM can transform into a dense, slow-moving commercial pedestrian zone by 6:00 PM. Its identity changes hourly.
        </EngineeringNote>
      </NavSection>
      
      {/* SECTION 07: COMPARISON SECTION */}
      <NavSection id="SYS_07" title="System Comparison">
        <ComparisonTable comparisons={[
          { feature: "Data Model", traditional: "Show congestion as static red/green lines.", rheole: "Understands urban movement as an interconnected system." },
          { feature: "Response", traditional: "Reacts manually to incidents after they happen.", rheole: "Connects multiple live signals to predict cascading delays." },
          { feature: "Perspective", traditional: "Road-first perspective.", rheole: "City-wide intelligence encompassing all transit modes." },
          { feature: "Interpretation", traditional: "Requires manual human interpretation of delays.", rheole: "Recognizes historical movement patterns automatically." }
        ]} />
      </NavSection>

      {/* SECTION 08: WHY FLOW MATTERS */}
      <NavSection id="SYS_08" title="Why Flow Matters" useBlue={true}>
        <p className="text-[20px] md:text-[24px] text-[#F2F2F0] font-light leading-relaxed max-w-[800px]">
          Traffic is not only about roads. It affects the city as a living ecosystem.
        </p>
        <p className="text-[15px] text-[#A0A0A0] leading-relaxed max-w-[800px] mt-6">
          Movement profoundly influences economic activity, emergency response times, urban productivity, local businesses, and environmental air quality. When a city's flow breaks down, healthcare is delayed, fuel consumption spikes, and daily quality of life plummets. 
        </p>
        <p className="text-[15px] text-[#A0A0A0] leading-relaxed max-w-[800px] mt-4">
          Understanding this flow isn't just a navigation feature; it is the fundamental requirement for building a resilient, sustainable city.
        </p>
      </NavSection>

      {/* SECTION 09: FUTURE OF URBAN FLOW */}
      <NavSection id="SYS_09" title="Future of Urban Flow" isLast={true}>
        <p className="text-[20px] md:text-[24px] text-[#F2F2F0] font-light leading-relaxed max-w-[800px]">
          Cities should become self-understanding.
        </p>
        <p className="text-[15px] text-[#A0A0A0] leading-relaxed max-w-[800px] mt-6">
          The future of urban flow lies in proactive intelligence. As Rheole connects millions of data points continuously, movement becomes entirely predictable. Navigation systems will route vehicles to balance city-wide loads, preventing congestion before it ever physically manifests. 
        </p>
        <EngineeringNote type="Future Vision" title="Proactive Urban Intelligence">
          In a self-understanding city, you will never encounter a traffic jam because the system will have quietly resolved the bottleneck thirty minutes before you arrived.
        </EngineeringNote>
      </NavSection>

    </article>
  )
}
