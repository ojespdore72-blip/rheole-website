'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Code, Activity, TreePine, Wind, Thermometer, Sun, Map, Heart, Shield, Ear, Footprints, Bike, Zap, CloudRain, Accessibility, Moon, Leaf, Navigation as NavIcon, Globe, MapPin } from 'lucide-react'

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
    <div className="flex flex-col p-5 border border-white/5 bg-[#0a0a0a] rounded-lg hover:border-[#4F6EF7]/30 transition-colors h-full">
      <div className="flex items-center gap-3 mb-3">
        <Icon size={16} className="text-[#4F6EF7]" />
        <h3 className="text-[14px] text-[#F2F2F0] font-medium">{title}</h3>
      </div>
      <p className="text-[13px] text-[#A0A0A0] leading-relaxed flex-1">{desc}</p>
    </div>
  )
}

function ComparisonTable({ comparisons }: { comparisons: { left: string, right: string }[] }) {
  return (
    <div className="w-full border border-white/10 rounded-xl overflow-hidden bg-[#0a0a0a] mt-8">
      <div className="grid grid-cols-2 bg-[#050505] border-b border-white/10 p-4">
        <div className="font-mono text-[11px] text-[#6A6A6A] tracking-[0.1em] uppercase">Traditional Navigation</div>
        <div className="font-mono text-[11px] text-[#4F6EF7] tracking-[0.1em] uppercase">Rheole Movement Intelligence</div>
      </div>
      {comparisons.map((comp, idx) => (
        <div key={idx} className="grid grid-cols-2 p-4 border-b border-white/5 last:border-0 items-center gap-4">
          <div className="text-[14px] text-[#A0A0A0]">{comp.left}</div>
          <div className="text-[14px] text-[#F2F2F0] font-medium">{comp.right}</div>
        </div>
      ))}
    </div>
  )
}

// --- MAIN ARTICLE ---

export default function MovementIntelligenceArticle() {
  const [activeScenario, setActiveScenario] = useState<number | null>(null);

  const scenarios = [
    { q: "I'm moving to work.", a: "Rheole maps a route that minimizes exposure to heavy traffic exhaust, prioritizing tree-lined streets and well-paved pathways to ensure you arrive feeling fresh, rather than exhausted from navigating chaotic intersections." },
    { q: "I'm moving to college.", a: "The engine avoids major arterial roads lacking dedicated mobility lanes, cross-referencing live traffic data to guide you through quieter, safer residential capillaries while minimizing steep elevation gains." },
    { q: "I'm travelling with children.", a: "Movement adapts to prioritize wide, continuous sidewalks, pedestrian crossings with longer light timers, and routes with natural resting spots. It completely removes unpaved paths or high-speed traffic zones from consideration." },
    { q: "I prefer quiet streets.", a: "Our proprietary Quiet Route™ cross-references live acoustic maps and localized traffic patterns to guide you away from industrial noise and honking, allowing for a mentally calming journey." },
    { q: "I'm recovering from an injury.", a: "Rheole suggests a Recovery Route™ optimized for perfectly flat terrain, smooth paving, zero steps, and immediate proximity to rest infrastructure like benches or public seating." },
    { q: "I use a wheelchair.", a: "The routing engine enforces strict accessibility metrics, demanding continuous curb cuts, flat gradients, and verifiable access ramps, while warning about temporary construction blocking the right-of-way." },
    { q: "I want maximum shade.", a: "Using micro-climate modeling and municipal tree-canopy data, the Green Route™ adjusts dynamically based on the sun's current angle to keep you entirely shaded during peak afternoon heat." },
    { q: "I want scenic routes.", a: "The algorithm traces paths along waterfronts, historic districts, and parks. Instead of staring at taillights, your senses are engaged by urban beauty and architectural variety." },
    { q: "I'm travelling with my dog.", a: "Rheole biases towards routes with grass verges, public parks, and cooler pavement temperatures (avoiding sun-baked asphalt), ensuring the journey is as enjoyable for the pet as it is for the owner." },
    { q: "I'm exploring Bengaluru.", a: "The Explore Movement™ generates non-linear, engaging loops that naturally surface cultural points of interest, local cafes, and vibrant street life without requiring a specific destination." },
    { q: "I'm commuting every morning.", a: "The engine establishes a baseline of your daily movement. If it notices a lack of activity, it might suggest a route that adds just 4 minutes of movement but significantly boosts your daily cardiovascular engagement." },
    { q: "I only have fifteen minutes.", a: "Rheole instantly adapts, finding a highly compressed loop that maximizes active minutes and physical exertion within your precise time constraint, ensuring you still get movement in a busy schedule." },
    { q: "I'm training for a marathon.", a: "The system identifies uninterrupted stretches of pathway, avoiding frequent stoplights and crosswalks, allowing you to maintain a consistent pace and cadence." }
  ];

  return (
    <article className="w-full flex flex-col items-center">
      
      {/* SECTION 01: MISSION */}
      <NavSection id="MOVE_01" title="Mission">
        <p className="text-[20px] md:text-[24px] text-[#F2F2F0] font-light leading-relaxed max-w-[800px]">
          Every step has value. Movement is not merely exercise or transportation. Movement is intelligence.
        </p>
        <p className="text-[15px] md:text-[16px] text-[#A0A0A0] leading-relaxed max-w-[800px] mt-6">
          Cities should encourage movement rather than dependence on vehicles. Active mobility is not merely an alternative to driving; it is an intelligent choice when the context is right. Every journey is an opportunity to improve physical health, mental wellbeing, environmental sustainability, and overall quality of life. 
        </p>
        <p className="text-[15px] md:text-[16px] text-[#A0A0A0] leading-relaxed max-w-[800px] mt-4">
          Rheole does not simply recommend movement. It quietly identifies opportunities to integrate healthy movement into your everyday life without disrupting your day. It transforms ordinary movement into healthier living, establishing an entirely new category: Movement Intelligence.
        </p>

        <EngineeringNote type="Urban Wellness" title="Movement vs. Fitness">
          We do not track your calories for a leaderboard. We measure environmental quality to ensure your lungs are breathing cleaner air. Movement Intelligence is about everyday health, not athletic competition.
        </EngineeringNote>
      </NavSection>

      {/* SECTION 02: ACTIVE JOURNEY */}
      <NavSection id="MOVE_02" title="Active Journey™" useBlue={true}>
        <p className="text-[16px] md:text-[18px] text-[#F2F2F0] font-light leading-relaxed max-w-[800px] mb-8">
          Instead of showing only Distance, Time, and ETA, Rheole reveals the true quality of your movement.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-[800px]">
          <div className="flex flex-col p-4 bg-[#0a0a0a] border border-[#4F6EF7]/20 rounded-lg">
            <Footprints size={16} className="text-[#4F6EF7] mb-2" />
            <span className="text-[12px] text-[#A0A0A0] mb-1">Movement Distance</span>
            <span className="text-[16px] text-[#F2F2F0]">1.2 km</span>
          </div>
          <div className="flex flex-col p-4 bg-[#0a0a0a] border border-[#4F6EF7]/20 rounded-lg">
            <Activity size={16} className="text-[#4F6EF7] mb-2" />
            <span className="text-[12px] text-[#A0A0A0] mb-1">Active Minutes</span>
            <span className="text-[16px] text-[#F2F2F0]">14 min</span>
          </div>
          <div className="flex flex-col p-4 bg-[#0a0a0a] border border-[#4F6EF7]/20 rounded-lg">
            <Wind size={16} className="text-[#4F6EF7] mb-2" />
            <span className="text-[12px] text-[#A0A0A0] mb-1">Air Quality</span>
            <span className="text-[16px] text-[#10b981]">Excellent</span>
          </div>
          <div className="flex flex-col p-4 bg-[#0a0a0a] border border-[#4F6EF7]/20 rounded-lg">
            <TreePine size={16} className="text-[#4F6EF7] mb-2" />
            <span className="text-[12px] text-[#A0A0A0] mb-1">Shade Availability</span>
            <span className="text-[16px] text-[#F2F2F0]">85% Coverage</span>
          </div>
        </div>

        <p className="text-[15px] text-[#A0A0A0] leading-relaxed max-w-[800px] mt-8">
          The Active Journey™ interface presents a holistic view of your route. It surfaces elevation profiles, estimated energy expenditure, route comfort, greenery exposure, noise levels, safety context, and accessibility data. Your journey becomes healthier without necessarily becoming longer.
        </p>
      </NavSection>

      {/* SECTION 03: MOVEMENT ENGINE */}
      <NavSection id="MOVE_03" title="Movement Engine">
        <p className="text-[16px] md:text-[18px] text-[#F2F2F0] font-light leading-relaxed max-w-[800px] mb-8">
          Movement quality is more important than movement distance. Our engine evaluates dozens of hidden variables.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <GridVariable icon={Activity} title="Movement Effort & Elevation" desc="Calculates biomechanical strain based on gradient. A 2km flat journey requires vastly different effort than a 2km climb." />
          <GridVariable icon={Map} title="Path & Mobility Infra" desc="Prioritizes continuous, protected lanes over shared vehicle roads, ensuring physical separation from high-speed traffic." />
          <GridVariable icon={Wind} title="Air Quality & Heat Index" desc="Cross-references localized sensor data to guide you away from trapped exhaust zones and sun-baked asphalt heat islands." />
          <GridVariable icon={TreePine} title="Shade & Tree Cover" desc="Maps municipal canopy data against current solar angles to keep you cool during peak daytime hours." />
          <GridVariable icon={Ear} title="Noise Levels" desc="Ingests acoustic telemetry to route you through quiet residential streets rather than chaotic industrial or arterial corridors." />
          <GridVariable icon={Accessibility} title="Accessibility & Surface" desc="Evaluates paving quality, curb cuts, and resting points (benches, cafes) for a consistently comfortable journey." />
        </div>

        <EngineeringNote type="Movement Insights" title="Contextual Adaptation">
          A route that is perfect at 8:00 AM might be terrible at 1:00 PM. The Movement Engine constantly recalculates based on real-time environmental context.
        </EngineeringNote>
      </NavSection>

      {/* SECTION 04: HEALTH SIGNALS */}
      <NavSection id="MOVE_04" title="Health Signals" useBlue={true}>
        <p className="text-[16px] md:text-[18px] text-[#F2F2F0] font-light leading-relaxed max-w-[800px] mb-6">
          Movement should dynamically adapt to human wellbeing and environmental reality.
        </p>
        
        <div className="flex flex-col gap-6 max-w-[800px]">
          {[
            { state: "High Pollution", action: "Recommend indoor alternatives or quieter, tree-lined streets." },
            { state: "Extreme Heat", action: "Suggest shaded routes and emphasize hydration stops." },
            { state: "Heavy Rain", action: "Delay active movement, pivot to transit + short connection." },
            { state: "High Pollen", action: "Adjust outdoor routes away from dense specific flora clusters." },
            { state: "Excellent Weather", action: "Actively encourage movement or an Explore Movement™ loop." },
            { state: "Low Daily Movement", action: "Subtly suggest a route that adds 5 minutes of healthy activity." }
          ].map((item, i) => (
            <div key={i} className="flex gap-6 items-center p-4 bg-[#050505] border border-white/5 rounded-lg">
              <div className="font-mono text-[11px] text-[#6A6A6A] shrink-0 w-32 uppercase">{item.state}</div>
              <div className="w-4 h-[1px] bg-[#4F6EF7]/30" />
              <div className="text-[14px] text-[#A0A0A0] leading-relaxed">{item.action}</div>
            </div>
          ))}
        </div>

        <p className="text-[15px] text-[#A0A0A0] leading-relaxed max-w-[800px] mt-8">
          Rheole elegantly balances convenience with health. It understands that pushing someone to walk through heavy exhaust on a 40°C day is not intelligent mobility. The system reads the environment to ensure your movement is always restorative, not depleting.
        </p>

        <EngineeringNote type="Environmental Signals" title="Proactive Health Protection">
          By adjusting routes away from high PM2.5 concentrations, Rheole passively improves long-term respiratory health simply through intelligent routing.
        </EngineeringNote>
      </NavSection>
      
      {/* SECTION: PROPRIETARY FEATURES */}
      <NavSection id="MOVE_FEATURES" title="Rheole Exclusives">
        <p className="text-[16px] md:text-[18px] text-[#F2F2F0] font-light leading-relaxed max-w-[800px] mb-8">
          Original concepts designed specifically for human-centric mobility.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[800px]">
          <div className="p-6 border border-[#4F6EF7]/20 bg-[#4F6EF7]/5 rounded-xl">
            <h4 className="text-[18px] text-[#F2F2F0] font-medium mb-2 flex items-center gap-2">
              <Activity size={18} className="text-[#4F6EF7]" /> Active Journey™ Score
            </h4>
            <p className="text-[14px] text-[#A0A0A0] leading-relaxed">
              Our proprietary movement metric evaluating Comfort, Environmental Quality, Safety, Consistency, and Recovery Opportunities. This is not a fitness competition; it is a quality-of-movement indicator ensuring your daily routines are fundamentally healthy.
            </p>
          </div>

          <div className="p-6 border border-white/10 bg-[#0a0a0a] rounded-xl">
            <h4 className="text-[18px] text-[#F2F2F0] font-medium mb-2 flex items-center gap-2">
              <TreePine size={18} className="text-[#10b981]" /> Green Route™
            </h4>
            <p className="text-[14px] text-[#A0A0A0] leading-relaxed">
              Prioritizes greenery, continuous shade, and cleaner air over raw speed. Designed for mental decompression and physical comfort on sunny days.
            </p>
          </div>

          <div className="p-6 border border-white/10 bg-[#0a0a0a] rounded-xl">
            <h4 className="text-[18px] text-[#F2F2F0] font-medium mb-2 flex items-center gap-2">
              <Moon size={18} className="text-[#8b5cf6]" /> Quiet Route™
            </h4>
            <p className="text-[14px] text-[#A0A0A0] leading-relaxed">
              Deliberately avoids noisy, stressful roads and chaotic intersections. Engineered for psychological calm and sensory relief.
            </p>
          </div>

          <div className="p-6 border border-white/10 bg-[#0a0a0a] rounded-xl">
            <h4 className="text-[18px] text-[#F2F2F0] font-medium mb-2 flex items-center gap-2">
              <Heart size={18} className="text-[#f43f5e]" /> Recovery Route™
            </h4>
            <p className="text-[14px] text-[#A0A0A0] leading-relaxed">
              Optimized for comfortable movement after long workdays or physical fatigue. Zero steep hills, smooth surfaces, and high comfort.
            </p>
          </div>
        </div>
      </NavSection>

      {/* SECTION 05: LIVING SCENARIOS */}
      <NavSection id="MOVE_05" title="Living Scenarios" useBlue={true}>
        <p className="text-[16px] md:text-[18px] text-[#F2F2F0] font-light leading-relaxed max-w-[800px] mb-8">
          The context of human movement is infinite.
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
        
        <EngineeringNote type="Accessibility Principles" title="Universal Design">
          Movement Intelligence implies that the city must be accessible to everyone. Wheelchair routing is not an edge case; it is a core structural pillar of Rheole's engine.
        </EngineeringNote>
      </NavSection>

      {/* SECTION 06: CITY FOR PEOPLE */}
      <NavSection id="MOVE_06" title="City for People">
        <p className="text-[20px] md:text-[24px] text-[#F2F2F0] font-light leading-relaxed max-w-[800px]">
          Intelligent movement improves the city itself.
        </p>
        <p className="text-[15px] text-[#A0A0A0] leading-relaxed max-w-[800px] mt-6">
          For decades, navigation software treated cities as concrete conduits for cars. Rheole treats cities as habitats for humans. Healthy cities prioritize people over vehicles. Active mobility, accessible public spaces, and green corridors are the hallmarks of urban wellbeing.
        </p>
        <p className="text-[15px] text-[#A0A0A0] leading-relaxed max-w-[800px] mt-4">
          When technology encourages a user to move through a beautifully shaded neighborhood route instead of ordering a cab for a 2km journey, the entire ecosystem benefits. Local businesses receive foot traffic. Neighborhood design is validated. Carbon emissions drop. The city breathes.
        </p>
      </NavSection>

      {/* SECTION 07: MOVEMENT IMPACT */}
      <NavSection id="MOVE_07" title="Movement Impact" useBlue={true}>
        <p className="text-[16px] md:text-[18px] text-[#F2F2F0] font-light leading-relaxed max-w-[800px] mb-8">
          Better mobility creates healthier societies.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <GridVariable icon={Heart} title="Physical Health" desc="Integrates low-impact cardiovascular activity into daily routines without the friction of a gym visit." />
          <GridVariable icon={Wind} title="Air Quality" desc="Reduces dependence on combustion engines for short-distance trips, directly lowering local PM2.5 density." />
          <GridVariable icon={Leaf} title="Mental Wellbeing" desc="Transforms stressful commutes into moments of decompression, mindfulness, and sensory engagement." />
          <GridVariable icon={Globe} title="Carbon Emissions" desc="Shifts the transportation baseline, structurally reducing the carbon footprint of millions of micro-journeys." />
          <GridVariable icon={Footprints} title="Community Interaction" desc="Brings people back to eye-level, fostering spontaneous social encounters and neighborhood cohesion." />
          <GridVariable icon={MapPin} title="Local Businesses" desc="Pedestrians engage with local storefronts and cafes at an exponentially higher rate than drivers." />
        </div>

        <ComparisonTable comparisons={[
          { left: "Fastest route", right: "Movement Intelligence" },
          { left: "Shortest route", right: "Active Journey™" },
          { left: "ETA", right: "Health-aware routing" },
          { left: "Vehicle-first", right: "Environmental awareness" },
          { left: "Distance focused", right: "Comfort optimisation" },
          { left: "Static recommendations", right: "Human-centred mobility" }
        ]} />
      </NavSection>

      {/* SECTION 08: FUTURE OF HUMAN MOBILITY */}
      <NavSection id="MOVE_08" title="Future of Mobility" isLast={true}>
        <p className="text-[20px] md:text-[24px] text-[#F2F2F0] font-light leading-relaxed max-w-[800px]">
          Technology quietly encourages better daily choices.
        </p>
        <p className="text-[15px] text-[#A0A0A0] leading-relaxed max-w-[800px] mt-6">
          The broader vision for Rheole is a world where movement is personalized. Cities become healthier organically. Movement becomes genuinely rewarding and inherently safe. Health is no longer a separate application—it is deeply integrated into the very fabric of navigation. 
        </p>
        <p className="text-[15px] text-[#A0A0A0] leading-relaxed max-w-[800px] mt-4">
          Rheole doesn't just help you reach your destination. It helps every journey become healthier, calmer, and more meaningful.
        </p>

        <EngineeringNote type="Future Cities" title="Structural Integration">
          As our telemetry scales, Rheole's aggregated data on where people *want* to move will help urban planners build the greenways and pedestrian zones of the future.
        </EngineeringNote>
      </NavSection>

    </article>
  )
}
