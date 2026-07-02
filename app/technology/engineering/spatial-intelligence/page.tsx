"use client";

import React from "react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import { 
  MapPin, 
  Orbit, 
  Layers, 
  Workflow, 
  Activity, 
  Clock, 
  ArrowRight,
  BrainCircuit,
  Network
} from "lucide-react";
import Link from "next/link";

// -----------------------------------------------------------------------------------
// REUSABLE COMPONENTS
// -----------------------------------------------------------------------------------

function SpatialNote({ title, category, children }: { title: string; category: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-4 py-8 border-t border-white/[0.08] group relative">
      <div className="absolute left-0 top-0 w-0 h-[1px] bg-[#4F6EF7] group-hover:w-full transition-all duration-700 ease-in-out" />
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

function SectionHeading({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="flex flex-col gap-4 mb-16">
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

// -----------------------------------------------------------------------------------
// SECTIONS
// -----------------------------------------------------------------------------------

function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center px-6 md:px-12 pt-32 pb-20 overflow-hidden bg-[#050505]">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-[0.03] pointer-events-none" />
      <div className="absolute top-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-[#4F6EF7]/[0.02] rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-[1200px] mx-auto z-10 flex flex-col items-start gap-12 w-full mt-12">
        <ScrollReveal>
          <div className="flex items-center gap-4">
            <div className="w-12 h-[1px] bg-[#4F6EF7]" />
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#A0A0A0] font-medium">Feature 02 — Spatial Intelligence</span>
          </div>
        </ScrollReveal>
        
        <ScrollReveal delay={0.2}>
          <h1 className="text-[64px] md:text-[96px] lg:text-[120px] text-[#F2F2F0] font-serif-editorial font-light leading-[0.95] tracking-tight max-w-[1000px]">
            The world is more than <span className="text-[#8A8A8A]">coordinates.</span>
          </h1>
        </ScrollReveal>
        
        <div className="flex flex-col gap-8 mt-8 w-full max-w-[700px]">
          <ScrollReveal delay={0.4}>
            <p className="text-[22px] md:text-[28px] text-[#A0A0A0] font-light leading-relaxed">
              Every place contains meaning. Every street has purpose. Every neighbourhood has personality. Every movement creates relationships.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.5}>
            <p className="text-[18px] text-[#6A6A6A] font-light leading-relaxed">
              Technology should understand these dimensions rather than treating locations merely as static points on a map. Rheole introduces Spatial Intelligence: the ability for technology to understand, reason about, and adapt to the physical world.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function PhilosophySection() {
  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#080808]">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-6 flex flex-col gap-8">
          <SectionHeading subtitle="Core Philosophy" title="The digital world is intelligent. The physical world is not." />
          <ScrollReveal delay={0.2}>
            <div className="text-[18px] text-[#8A8A8A] font-light leading-relaxed flex flex-col gap-6">
              <p>Traditional software understands files. Websites. Documents. Messages. Images.</p>
              <p>Modern AI understands language. It processes complex syntax and semantic structures.</p>
              <p className="text-[#F2F2F0] font-medium">
                But cities remain largely invisible to computers.
              </p>
              <p>
                Roads. Buildings. Communities. Movement. Culture. Human behaviour. Places. Relationships. They exist constantly and concurrently. Yet software rarely understands them.
              </p>
              <p>
                Spatial Intelligence solves this. It is the architectural foundation that allows computing to perceive physical reality with the same depth it currently perceives language and data.
              </p>
            </div>
          </ScrollReveal>
        </div>
        
        <div className="lg:col-span-5 lg:col-start-8 flex flex-col gap-0 justify-center">
          <ScrollReveal delay={0.3}>
            <SpatialNote category="Engineering Perspectives" title="Understanding Reality">
              Computers have understood information for decades. Rheole teaches them to understand the world itself. This is not a feature; it is the intelligence layer of the physical world.
            </SpatialNote>
          </ScrollReveal>
          <ScrollReveal delay={0.4}>
            <SpatialNote category="Definitions" title="Spatial Intelligence">
              The foundational capability of systems to understand physical environments, calculate relationships between entities, and contextualise them for human needs without explicit prompting.
            </SpatialNote>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function WhatIsSection() {
  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#050505]">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-24">
        <div className="flex flex-col items-center text-center max-w-[800px] mx-auto">
          <SectionHeading subtitle="Educational Chapter" title="What is Spatial Intelligence?" />
          <ScrollReveal delay={0.2}>
            <p className="text-[20px] text-[#8A8A8A] font-light leading-relaxed mt-4">
              It is the ability to understand relationships within the physical world. It goes beyond knowing <em className="text-[#F2F2F0] not-italic">where</em> something is, to understanding <em className="text-[#F2F2F0] not-italic">why</em> it exists, how it relates to nearby places, who uses it, when it matters, how it changes, and why context transforms its meaning.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 relative">
          {/* Visual separator line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/[0.05] -translate-x-1/2" />
          
          <div className="flex flex-col gap-12 p-8 md:p-12 bg-white/[0.01] rounded-[24px] border border-white/[0.03]">
            <ScrollReveal delay={0.3}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-white/[0.05] flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-[#8A8A8A]" />
                </div>
                <h3 className="text-[24px] text-[#A0A0A0] font-serif-editorial font-light tracking-tight">Traditional Maps</h3>
              </div>
              <ul className="flex flex-col gap-6 text-[16px] text-[#6A6A6A] font-light">
                <li className="flex items-center gap-4"><div className="w-1.5 h-1.5 bg-[#4F6EF7]/50 rounded-full" /> Coordinates</li>
                <li className="flex items-center gap-4"><div className="w-1.5 h-1.5 bg-[#4F6EF7]/50 rounded-full" /> Navigation & Directions</li>
                <li className="flex items-center gap-4"><div className="w-1.5 h-1.5 bg-[#4F6EF7]/50 rounded-full" /> Static locations</li>
                <li className="flex items-center gap-4"><div className="w-1.5 h-1.5 bg-[#4F6EF7]/50 rounded-full" /> Keyword Search</li>
                <li className="flex items-center gap-4"><div className="w-1.5 h-1.5 bg-[#4F6EF7]/50 rounded-full" /> Flat Geographic Data</li>
              </ul>
              <div className="mt-12 pt-8 border-t border-white/[0.05]">
                <p className="text-[14px] text-[#8A8A8A] uppercase tracking-widest font-medium">Function: Show Location</p>
              </div>
            </ScrollReveal>
          </div>

          <div className="flex flex-col gap-12 p-8 md:p-12 bg-[#4F6EF7]/[0.02] rounded-[24px] border border-[#4F6EF7]/[0.1]">
            <ScrollReveal delay={0.4}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-[#4F6EF7]/10 flex items-center justify-center">
                  <Orbit className="w-5 h-5 text-[#4F6EF7]" />
                </div>
                <h3 className="text-[24px] text-[#F2F2F0] font-serif-editorial font-light tracking-tight">Rheole</h3>
              </div>
              <ul className="flex flex-col gap-6 text-[16px] text-[#D1D5DB] font-light">
                <li className="flex items-center gap-4"><div className="w-1.5 h-1.5 bg-[#4F6EF7] rounded-full" /> Spatial Intelligence</li>
                <li className="flex items-center gap-4"><div className="w-1.5 h-1.5 bg-[#4F6EF7] rounded-full" /> Living relationships</li>
                <li className="flex items-center gap-4"><div className="w-1.5 h-1.5 bg-[#4F6EF7] rounded-full" /> Context-aware reasoning</li>
                <li className="flex items-center gap-4"><div className="w-1.5 h-1.5 bg-[#4F6EF7] rounded-full" /> Environmental understanding</li>
                <li className="flex items-center gap-4"><div className="w-1.5 h-1.5 bg-[#4F6EF7] rounded-full" /> Human-centred computing</li>
                <li className="flex items-center gap-4"><div className="w-1.5 h-1.5 bg-[#4F6EF7] rounded-full" /> Dynamic spatial models</li>
              </ul>
              <div className="mt-12 pt-8 border-t border-white/[0.1]">
                <p className="text-[14px] text-[#4F6EF7] uppercase tracking-widest font-medium">Function: Explain Relationships</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function SpatialModelSection() {
  const layers = [
    { title: "Physical Layer", desc: "Roads, buildings, parks, and transit infrastructure. The structural baseline.", icon: <MapPin className="w-5 h-5 text-neutral-400" /> },
    { title: "Environmental Layer™", desc: "Weather patterns, air quality, acoustic noise, and ambient temperature.", icon: <Orbit className="w-5 h-5 text-neutral-400" /> },
    { title: "Social Layer", desc: "People, communities, local events, and the density of businesses.", icon: <Network className="w-5 h-5 text-neutral-400" /> },
    { title: "Temporal Layer", desc: "Time of day, season, opening hours, and daily human rhythms.", icon: <Clock className="w-5 h-5 text-neutral-400" /> },
    { title: "Intent Layer", desc: "Why someone is here. The underlying motivation driving spatial movement.", icon: <BrainCircuit className="w-5 h-5 text-neutral-400" /> },
    { title: "Context Layer", desc: "What's happening right now. The immediate, transient state of a location.", icon: <Layers className="w-5 h-5 text-neutral-400" /> },
  ];

  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#080808]">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-20">
        <div className="flex flex-col lg:flex-row gap-16 justify-between">
          <div className="lg:w-1/2">
            <SectionHeading subtitle="Conceptual Framework" title="The Spatial Model" />
            <ScrollReveal delay={0.2}>
              <p className="text-[18px] text-[#8A8A8A] font-light leading-relaxed">
                Every place exists within multiple connected layers. A coffee shop is not just a point on a grid. It exists within a physical building, under specific weather conditions, inhabited by a social community, operating during specific hours, accommodating people with different intents, under shifting situational contexts.
              </p>
              <br/>
              <p className="text-[18px] text-[#8A8A8A] font-light leading-relaxed">
                Spatial Intelligence continuously combines these layers into a living, real-time understanding of reality.
              </p>
            </ScrollReveal>
          </div>
          <div className="lg:w-5/12 bg-white/[0.02] border border-white/[0.05] p-8 rounded-[32px]">
             <ScrollReveal delay={0.4}>
              <SpatialNote category="Proprietary Concept" title="Context Mesh™">
                The dense network of contextual signals surrounding every place. By interpolating between the six spatial layers, the Context Mesh™ enables Rheole to instantly understand the nuanced reality of any location at any specific second.
              </SpatialNote>
             </ScrollReveal>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {layers.map((layer, idx) => (
            <ScrollReveal key={idx} delay={0.1 * idx}>
              <div className="p-8 bg-[#0C0C0C] border border-white/[0.03] rounded-[24px] h-full hover:bg-white/[0.02] transition-colors group">
                <div className="w-12 h-12 rounded-full bg-white/[0.05] flex items-center justify-center mb-6 group-hover:bg-[#4F6EF7]/20 group-hover:text-[#4F6EF7] transition-colors">
                  {layer.icon}
                </div>
                <h4 className="text-[20px] text-[#F2F2F0] font-medium tracking-tight mb-3">{layer.title}</h4>
                <p className="text-[15px] text-[#8A8A8A] font-light leading-relaxed">{layer.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function UnderstandingSpaceSection() {
  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#050505]">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        <div className="lg:col-span-4 flex flex-col gap-8">
          <SectionHeading subtitle="Intelligence Framework" title="Understanding Space" />
          <ScrollReveal delay={0.2}>
            <p className="text-[18px] text-[#8A8A8A] font-light leading-relaxed">
              Rheole interprets space by evaluating continuous, overlapping variables rather than reading static labels.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <SpatialNote category="Proprietary Concept" title="Spatial Graph™">
              A continuously regenerating topology that visualises relationships between places, people, events, and movement. It is the architectural brain behind every spatial deduction.
            </SpatialNote>
          </ScrollReveal>
        </div>

        <div className="lg:col-span-7 lg:col-start-6 flex flex-col gap-12 pt-8">
          {[
            { t: "Relationships between places", d: "Understanding that a quiet bookstore next to a bustling train station serves as an acoustic refuge, altering its spatial value depending on the time of day." },
            { t: "Movement between places", d: "Recognising flow. How people organically navigate between a park and a café area, revealing the true pedestrian corridors that maps never draw." },
            { t: "Neighbourhood identity", d: "Calculating the Presence Field™—the collective character of a location derived from the types of businesses, events, and community activities that cluster there." },
            { t: "Urban evolution", d: "Utilising Spatial Memory™ to understand how places evolve over time, such as a dormant street transforming into a vibrant weekend market." },
          ].map((item, idx) => (
            <ScrollReveal key={idx} delay={0.2 + (idx * 0.1)}>
              <div className="flex flex-col gap-3">
                <h4 className="text-[22px] text-[#F2F2F0] font-serif-editorial font-light">{item.t}</h4>
                <p className="text-[16px] text-[#8A8A8A] font-light leading-relaxed">{item.d}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}

function SpatialReasoningSection() {
  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#080808]">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center">
        <div className="text-center max-w-[800px] mb-20">
          <SectionHeading subtitle="Flagship Concept" title="Spatial Reasoning" />
          <ScrollReveal delay={0.2}>
            <p className="text-[20px] text-[#8A8A8A] font-light leading-relaxed mt-4">
              Search engines provide answers based on keywords. Spatial Intelligence provides reasoning based on reality. This transforms location data into deep contextual understanding.
            </p>
          </ScrollReveal>
        </div>

        <div className="w-full flex flex-col lg:flex-row border border-white/[0.05] rounded-[32px] overflow-hidden bg-white/[0.01]">
          
          <div className="lg:w-1/2 p-12 md:p-20 border-b lg:border-b-0 lg:border-r border-white/[0.05] flex flex-col justify-center">
            <ScrollReveal>
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#6A6A6A] font-medium block mb-8">Traditional Approach</span>
              <p className="text-[32px] md:text-[40px] text-[#A0A0A0] font-serif-editorial font-light leading-tight">
                "Where is the café?"
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="mt-12 flex flex-col gap-4 text-[16px] text-[#6A6A6A] font-light">
                <div className="flex items-center gap-4 bg-black/20 p-4 rounded-xl border border-white/[0.03]">
                  <ArrowRight className="w-4 h-4 text-neutral-500" />
                  Returns a list of cafes within a 2km radius.
                </div>
                <div className="flex items-center gap-4 bg-black/20 p-4 rounded-xl border border-white/[0.03]">
                  <ArrowRight className="w-4 h-4 text-neutral-500" />
                  Sorted by distance or raw rating.
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:w-1/2 p-12 md:p-20 flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#4F6EF7]/[0.03] rounded-full blur-[80px]" />
            <ScrollReveal delay={0.3}>
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#4F6EF7] font-medium block mb-8">Spatial Reasoning Approach</span>
              <p className="text-[32px] md:text-[40px] text-[#F2F2F0] font-serif-editorial font-light leading-tight">
                Rheole reasons about reality.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.5}>
              <ul className="mt-12 flex flex-col gap-3 text-[16px] text-[#D1D5DB] font-light">
                {["This café is quiet right now.", "It is near your upcoming meeting.", "It is within a pleasant walking distance.", "It serves vegetarian options.", "The crowd level is currently low.", "The weather is clear for the walk.", "The acoustic environment is suitable for working."].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-4">
                    <div className="w-1.5 h-1.5 bg-[#4F6EF7] rounded-full shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}

function LivingCitySection() {
  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#050505]">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        <div className="flex flex-col gap-8 order-2 lg:order-1">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {["Morning", "Evening", "Weekends", "Festivals", "Rain", "Construction", "Traffic", "Communities", "Businesses"].map((item, idx) => (
              <ScrollReveal key={idx} delay={0.1 * idx}>
                <div className="p-4 border border-white/[0.03] rounded-[16px] bg-[#0A0A0A] text-center text-[14px] text-[#8A8A8A] tracking-wider uppercase font-medium hover:text-white hover:border-white/[0.1] transition-all">
                  {item}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-8 order-1 lg:order-2">
          <SectionHeading subtitle="Editorial Chapter" title="The Living City" />
          <ScrollReveal delay={0.2}>
            <div className="text-[18px] text-[#8A8A8A] font-light leading-relaxed flex flex-col gap-6">
              <p>
                Cities are constantly changing. They breathe. They swell during morning commutes and exhale during the quiet of midnight.
              </p>
              <p>
                A street that is a bustling transit corridor on a Tuesday morning transforms into a vibrant, pedestrian-only festival space on a Saturday night. A sudden rainstorm rewrites the spatial value of every outdoor plaza instantly.
              </p>
              <p>
                Rheole models cities as <span className="text-[#F2F2F0] font-medium">Living Maps™</span>—continuously evolving representations of reality rather than static geographical grids. By perceiving these shifts in real-time, Spatial Intelligence ensures that the computing layer matches the reality of the physical layer.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.4}>
            <SpatialNote category="Urban Intelligence" title="Dynamic Representation">
              A map is a photograph of reality at a single point in time. A Living Map™ is a continuous film, capturing the rhythm, flow, and shifting character of the urban environment.
            </SpatialNote>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}

function ScenariosSection() {
  const scenarios = [
    { q: "I'm hungry.", a: "Evaluating local temporal rhythms, acoustic density, and immediate walking proximity to find a place that matches the current situational mood." },
    { q: "I'm visiting Bengaluru.", a: "Modulating recommendations to prioritise iconic spatial nodes, cultural density, and accessible transit corridors over deeply local neighbourhood haunts." },
    { q: "I'm exploring alone.", a: "Prioritising secure, well-lit, heavily populated pedestrian paths and venues with high architectural transparency and comfortable solo-seating." },
    { q: "I'm travelling with children.", a: "Filtering reality for spatial accessibility, park proximity, lower noise thresholds, and immediate access to necessary amenities." },
    { q: "I'm meeting founders.", a: "Identifying environments with optimal acoustic dampening for conversation, appropriate energetic ambiance, and central coordination vectors." },
    { q: "I'm looking for inspiration.", a: "Routing through areas with high architectural variance, cultural hubs, and visually stimulating serendipitous pathways." },
    { q: "I'm searching for a peaceful place.", a: "Detecting anomalous drops in local Presence Fields™ to find temporary pockets of silence hidden within the urban density." },
    { q: "I'm planning photography.", a: "Cross-referencing the Environmental Layer™ for golden hour lighting angles against structural geometry and local crowd sparsity." },
    { q: "I'm attending an event.", a: "Predicting pre- and post-event spatial congestion and recommending adjacent nodes for decompression and social continuity." },
    { q: "I'm working remotely.", a: "Seeking environments that balance sustained ambient energy with reliable infrastructure and prolonged seating acceptance." }
  ];

  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#080808]">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-24">
        
        <div className="text-center max-w-[800px] mx-auto">
          <SectionHeading subtitle="Applied Intelligence" title="Real-World Scenarios" />
          <ScrollReveal delay={0.2}>
            <p className="text-[20px] text-[#8A8A8A] font-light leading-relaxed mt-4">
              Intent alters reality. See how Spatial Intelligence changes every recommendation by understanding the nuance of human purpose.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {scenarios.map((scen, idx) => (
            <ScrollReveal key={idx} delay={0.05 * idx}>
              <div className="p-8 border border-white/[0.03] bg-white/[0.01] rounded-[24px] h-full flex flex-col gap-4 group hover:bg-white/[0.03] transition-colors">
                <h4 className="text-[20px] text-[#F2F2F0] font-serif-editorial font-light tracking-tight group-hover:text-[#4F6EF7] transition-colors">"{scen.q}"</h4>
                <p className="text-[15px] text-[#8A8A8A] font-light leading-relaxed">{scen.a}</p>
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
    <section className="relative w-full py-[200px] px-6 md:px-12 bg-[#050505] overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-[-20%] left-[20%] w-[60vw] h-[60vw] bg-[#4F6EF7]/[0.03] rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-[1000px] mx-auto flex flex-col items-center text-center relative z-10">
        <ScrollReveal>
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#6A6A6A] font-medium mb-12 block">The Future of Computing</span>
        </ScrollReveal>
        
        <ScrollReveal delay={0.2}>
          <h2 className="text-[48px] md:text-[72px] lg:text-[88px] text-[#F2F2F0] font-serif-editorial font-light leading-[1.05] tracking-tight mb-16">
            The next evolution is understanding reality itself.
          </h2>
        </ScrollReveal>
        
        <div className="flex flex-col gap-8 max-w-[800px]">
          <ScrollReveal delay={0.4}>
            <p className="text-[22px] md:text-[28px] text-[#A0A0A0] font-light leading-relaxed">
              Computers once understood documents. Then they understood the interconnected web. Now, they understand language.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.5}>
            <p className="text-[22px] md:text-[28px] text-[#F2F2F0] font-light leading-relaxed">
              Spatial Intelligence enables computers to reason about the living world.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.6}>
            <p className="text-[18px] text-[#6A6A6A] font-light leading-relaxed mt-4">
              Technology becomes less about staring into screens and more about understanding the places we inhabit. Artificial Intelligence changed how computers understand language. Spatial Intelligence will change how computers understand the world.
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.8} className="mt-24 w-full">
          <div className="p-8 border-t border-white/[0.05] w-full flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-left">
              <span className="text-[12px] uppercase tracking-widest text-[#8A8A8A] font-medium block mb-2">Explore the Platform</span>
              <span className="text-[18px] text-[#F2F2F0] font-light">See how developers use Spatial Intelligence.</span>
            </div>
            <Link href="/technology/developer-platform/sdks" className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-white text-black text-[13px] font-medium uppercase tracking-widest hover:bg-[#F2F2F0] transition-colors shrink-0">
              Explore SDKs
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

// -----------------------------------------------------------------------------------
// MAIN EXPORT
// -----------------------------------------------------------------------------------

export default function SpatialIntelligencePage() {
  return (
    <main className="min-h-screen bg-[#050505] text-[#F2F2F0] font-sans selection:bg-[#4F6EF7]/30 selection:text-white">
      <HeroSection />
      <PhilosophySection />
      <WhatIsSection />
      <SpatialModelSection />
      <UnderstandingSpaceSection />
      <SpatialReasoningSection />
      <LivingCitySection />
      <ScenariosSection />
      <FutureSection />
    </main>
  );
}
