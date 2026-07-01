"use client";

import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import { 
  MapPin, 
  Orbit, 
  Workflow, 
  Activity, 
  Layers, 
  ArrowRight, 
  Compass,
  Radio,
  Clock,
  Navigation,
  Globe2
} from "lucide-react";
import Link from "next/link";

// -----------------------------------------------------------------------------------
// REUSABLE COMPONENTS
// -----------------------------------------------------------------------------------

function SpatialNote({ title, category, children }: { title: string; category: string; children: React.ReactNode }) {
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
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-6 md:px-12 pt-20 overflow-hidden bg-[#050505]">
      {/* Spatial Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)] pointer-events-none" />
      
      <div className="max-w-[1200px] mx-auto z-10 flex flex-col items-start gap-12 w-full mt-24">
        <ScrollReveal>
          <div className="flex items-center gap-4">
            <div className="w-12 h-[1px] bg-[#4F6EF7]" />
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#A0A0A0] font-medium">Spatial Computing</span>
          </div>
        </ScrollReveal>
        
        <ScrollReveal delay={0.2}>
          <h1 className="text-[64px] md:text-[96px] lg:text-[120px] text-[#F2F2F0] font-serif-editorial font-light leading-[0.95] tracking-tight max-w-[1000px]">
            The world is the original interface.
          </h1>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 w-full">
          <ScrollReveal delay={0.4}>
            <p className="text-[22px] md:text-[28px] text-[#A0A0A0] font-light leading-relaxed max-w-[500px]">
              People naturally understand places, directions, distances, and environments. Technology should develop the exact same ability.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.5}>
            <p className="text-[18px] text-[#6A6A6A] font-light leading-relaxed max-w-[450px]">
              Spatial Computing is not about strapping a screen to your face or displaying digital information in space. It is the architectural evolution of computing—moving from understanding rigid screens to understanding fluid spaces.
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
      <div className="max-w-[1200px] mx-auto flex flex-col gap-24">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5 flex flex-col gap-8">
            <ScrollReveal>
              <h2 className="text-[40px] md:text-[56px] text-[#F2F2F0] font-serif-editorial font-light leading-[1.1] tracking-tight">
                The Spatial Philosophy.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="text-[18px] text-[#8A8A8A] font-light leading-relaxed flex flex-col gap-6">
                <p>
                  For decades, computers have understood files. Then they evolved to understand applications. Then they understood the cloud.
                </p>
                <p className="text-[#F2F2F0] font-medium">
                  The next evolution is understanding the physical world itself.
                </p>
                <p>
                  Rheole views the world as a continuously woven fabric of spatial relationships rather than a database of isolated GPS coordinates. Coordinates are static. Reality is dynamic.
                </p>
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-12 pt-4">
            <ScrollReveal delay={0.2}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex flex-col gap-3">
                  <span className="text-[#4F6EF7]"><Orbit size={24} strokeWidth={1.5} /></span>
                  <p className="text-[16px] text-[#F2F2F0]">Places relate to people.</p>
                  <p className="text-[14px] text-[#6A6A6A] font-light">A café is not just an address; it is a node where local creatives aggregate.</p>
                </div>
                <div className="flex flex-col gap-3">
                  <span className="text-[#4F6EF7]"><Activity size={24} strokeWidth={1.5} /></span>
                  <p className="text-[16px] text-[#F2F2F0]">Events influence movement.</p>
                  <p className="text-[14px] text-[#6A6A6A] font-light">A stadium concert dictates the velocity and density of surrounding transit lines.</p>
                </div>
                <div className="flex flex-col gap-3">
                  <span className="text-[#4F6EF7]"><Globe2 size={24} strokeWidth={1.5} /></span>
                  <p className="text-[16px] text-[#F2F2F0]">Weather changes behaviour.</p>
                  <p className="text-[14px] text-[#6A6A6A] font-light">Precipitation alters the desirability of outdoor spaces and changes commute times.</p>
                </div>
                <div className="flex flex-col gap-3">
                  <span className="text-[#4F6EF7]"><Workflow size={24} strokeWidth={1.5} /></span>
                  <p className="text-[16px] text-[#F2F2F0]">Communities shape neighbourhoods.</p>
                  <p className="text-[14px] text-[#6A6A6A] font-light">The character of a district is defined by the recurring interactions of its inhabitants.</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        <div className="w-full h-[1px] bg-white/[0.05]" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <SpatialNote title="Traditional Computing" category="Comparison">
            Operates on files, applications, and commands. It is screen-first, requires explicit human input for every action, and possesses zero environmental awareness.
          </SpatialNote>
          <SpatialNote title="Spatial Computing" category="Comparison">
            Operates on places, relationships, and living environments. It is context-aware, requires minimal input, and reasons through physical world intelligence.
          </SpatialNote>
          <SpatialNote title="Spatial Context™" category="Proprietary Concept">
            Understanding not only <em>where</em> something is, but <em>why</em> that location matters in the precise moment and situation of the user.
          </SpatialNote>
        </div>

      </div>
    </section>
  );
}

function LivingWorldSection() {
  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#030303] overflow-hidden">
      <div className="absolute right-0 top-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_right,rgba(79,110,247,0.05)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="max-w-[1200px] mx-auto flex flex-col gap-16 relative z-10">
        <ScrollReveal>
          <h2 className="text-[48px] md:text-[72px] text-[#F2F2F0] font-serif-editorial font-light leading-[1.0] tracking-tight">
            The Living World.
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <ScrollReveal delay={0.1}>
            <p className="text-[20px] md:text-[24px] text-[#A0A0A0] font-light leading-relaxed">
              Traditional maps describe geography. Rheole understands living environments. 
            </p>
            <p className="text-[18px] text-[#6A6A6A] font-light leading-relaxed mt-8">
              A map assumes a city is static—a collection of concrete blocks that do not change. But cities are living organisms. Buildings change purposes. Businesses open and close. Crowds aggregate and disperse. Weather systems roll through. Traffic algorithms evolve. 
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-4">
            {[
              "The physical world changes continuously.",
              "Intelligence should evolve alongside it.",
              "Context expires rapidly.",
              "Relationships dictate relevance."
            ].map((statement, i) => (
              <ScrollReveal key={i} delay={0.2 + (i * 0.1)}>
                <div className="flex items-center gap-6 p-6 border border-white/[0.05] bg-white/[0.01] rounded-xl hover:bg-white/[0.03] transition-colors">
                  <div className="w-8 h-8 rounded-full border border-[#4F6EF7]/30 flex items-center justify-center text-[#4F6EF7] font-serif-editorial">
                    {i + 1}
                  </div>
                  <span className="text-[16px] text-[#F2F2F0] font-medium tracking-wide">{statement}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
        
        <div className="mt-8">
          <SpatialNote title="Dynamic Environment™" category="Rheole Concept">
            The core belief that a static database cannot power spatial intelligence. If the system does not understand that a street is temporarily flooded or that a plaza is currently filled with a festival, it does not truly understand space.
          </SpatialNote>
        </div>
      </div>
    </section>
  );
}

function UnderstandingSection() {
  const layers = [
    { title: "Places & Landmarks", desc: "The static anchors of the physical world." },
    { title: "Routes & Transportation", desc: "The arteries connecting spatial nodes." },
    { title: "Businesses & Communities", desc: "The economic and social operators within places." },
    { title: "Events & Occurrences", desc: "Temporal anomalies that temporarily redefine space." },
    { title: "Neighbourhoods", desc: "Cultural zones defined by human consensus." },
    { title: "Movement Vectors", desc: "The flow of crowds and vehicles in real-time." },
    { title: "Environmental Conditions", desc: "Weather, temperature, lighting, and acoustics." },
    { title: "Accessibility & Walkability", desc: "The friction involved in traversing a space." }
  ];

  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#080808]">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-24">
        
        <div className="flex flex-col gap-8 max-w-[800px]">
          <ScrollReveal>
            <h2 className="text-[40px] md:text-[56px] text-[#F2F2F0] font-serif-editorial font-light leading-[1.1] tracking-tight">
              Deconstructing Spatial Understanding.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-[18px] md:text-[22px] text-[#A0A0A0] font-light leading-relaxed">
              How does technology actually interpret space? It requires layering deeply disparate data formats into a singular mathematical understanding.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {layers.map((layer, index) => (
            <ScrollReveal key={index} delay={index * 0.05}>
              <div className="flex flex-col gap-4">
                <div className="w-full h-[1px] bg-gradient-to-r from-[#4F6EF7] to-transparent mb-2" />
                <h3 className="text-[18px] text-[#F2F2F0] font-medium tracking-tight">{layer.title}</h3>
                <p className="text-[14px] text-[#6A6A6A] font-light leading-relaxed">{layer.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="p-8 md:p-12 border border-white/[0.05] bg-white/[0.01] rounded-3xl text-center flex flex-col items-center gap-6 max-w-[900px] mx-auto">
            <Layers size={32} className="text-[#4F6EF7]" />
            <p className="text-[20px] md:text-[26px] text-[#F2F2F0] font-light font-serif-editorial leading-[1.4]">
              Understanding these individual layers is simple. Understanding the <span className="italic text-[#4F6EF7]">relationships</span> between these layers creates intelligence.
            </p>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}

function WorldGraphSection() {
  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#030303] overflow-hidden">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-24">
        
        <div className="flex flex-col md:flex-row gap-12 items-end justify-between border-b border-white/[0.05] pb-12">
          <ScrollReveal>
            <div className="flex flex-col gap-6 max-w-[600px]">
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#6A6A6A] font-medium">Signature Concept</span>
              <h2 className="text-[40px] md:text-[64px] text-[#F2F2F0] font-serif-editorial font-light leading-[1.0] tracking-tight">
                The Living World Graph™
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-[16px] text-[#8A8A8A] font-light max-w-[400px]">
              No place exists independently. Everything influences everything else. The physical world must be represented as a continuously evolving network of relationships.
            </p>
          </ScrollReveal>
        </div>

        {/* Abstract Horizontal Graph Representation */}
        <ScrollReveal delay={0.2}>
          <div className="w-full flex overflow-x-auto pb-8 hide-scrollbar">
            <div className="flex items-center gap-4 min-w-max px-4">
              {[
                { label: "Person", icon: <MapPin size={16} /> },
                { label: "Café", icon: <Compass size={16} /> },
                { label: "Community", icon: <Orbit size={16} /> },
                { label: "Event", icon: <Radio size={16} /> },
                { label: "Business", icon: <Activity size={16} /> },
                { label: "Neighbourhood", icon: <Globe2 size={16} /> },
                { label: "Transit", icon: <Navigation size={16} /> },
                { label: "Weather", icon: <Clock size={16} /> },
                { label: "Opportunity", icon: <Workflow size={16} /> }
              ].map((node, i, arr) => (
                <React.Fragment key={i}>
                  <div className="flex flex-col items-center justify-center w-[120px] h-[120px] rounded-full border border-white/[0.08] bg-[#080808] text-[#F2F2F0] hover:border-[#4F6EF7] transition-colors gap-3">
                    <span className="text-[#6A6A6A]">{node.icon}</span>
                    <span className="text-[12px] font-medium tracking-wide">{node.label}</span>
                  </div>
                  {i < arr.length - 1 && (
                    <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-[#4F6EF7]/50 to-transparent" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
          <SpatialNote title="Place Intelligence™" category="Definitions">
            The understanding that every location has characteristics, relationships, and meaning far beyond its latitude and longitude. A library means quiet. A stadium means crowds.
          </SpatialNote>
          <SpatialNote title="Human Geography" category="Research Insights">
            Humans do not navigate space mathematically. We navigate via landmarks, meaning, and purpose. The Living World Graph aligns machine routing with human cognitive mapping.
          </SpatialNote>
        </div>

      </div>
    </section>
  );
}

function ReasoningSection() {
  const examples = [
    {
      title: "\"I'm visiting Bengaluru.\"",
      steps: ["Nearby culture", "Current weather", "Time available", "Crowd levels", "Walking distance", "Public transport", "Local events", "Restaurant reservations"],
      result: "Recommends an indoor art exhibition near a Metro station, avoiding afternoon monsoon showers."
    },
    {
      title: "\"I'm commuting.\"",
      steps: ["Live transit delays", "Pedestrian density", "Weather conditions", "Alternative routes", "Time sensitivity"],
      result: "Suggests departing 10 minutes early and taking a secondary route due to a local street fair blocking the primary artery."
    },
    {
      title: "\"I'm exercising.\"",
      steps: ["Air quality index", "Park accessibility", "Lighting conditions", "Elevation profiles", "Previous activity"],
      result: "Routes you through a well-lit botanical path with high air quality, avoiding major intersections."
    }
  ];

  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#080808]">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-20">
        
        <ScrollReveal>
          <div className="text-center flex flex-col items-center gap-6">
            <h2 className="text-[36px] md:text-[56px] text-[#F2F2F0] font-serif-editorial font-light leading-[1.1] tracking-tight">
              Real-World Reasoning.
            </h2>
            <p className="text-[18px] text-[#A0A0A0] font-light max-w-[700px]">
              Rheole does not merely retrieve locations from a database. It reasons about environments holistically.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {examples.map((ex, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="flex flex-col gap-8 p-8 border border-white/[0.05] bg-[#030303] rounded-2xl h-full relative group hover:border-white/[0.1] transition-colors">
                <div className="absolute top-0 right-8 w-[1px] h-full bg-white/[0.02]" />
                
                <h3 className="text-[24px] font-medium text-[#F2F2F0] font-serif-editorial">
                  {ex.title}
                </h3>
                
                <div className="flex flex-col gap-3 relative z-10">
                  {ex.steps.map((step, j) => (
                    <div key={j} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#4F6EF7]/40 group-hover:bg-[#4F6EF7] transition-colors" />
                      <span className="text-[13px] text-[#8A8A8A] font-light">{step}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto pt-6 border-t border-white/[0.05]">
                  <p className="text-[15px] text-[#F2F2F0] leading-relaxed">
                    <span className="text-[#4F6EF7] uppercase tracking-widest text-[10px] block mb-2 font-medium">Outcome</span>
                    {ex.result}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
           <SpatialNote title="Spatial Reasoning™" category="Proprietary Concept">
            The capability of the intelligence engine to understand the friction and synergy between locations, movement, people, time, and context <em>before</em> offering a decision.
          </SpatialNote>
        </ScrollReveal>

      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#050505]">
      <div className="max-w-[1000px] mx-auto flex flex-col items-center text-center gap-12">
        <ScrollReveal>
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#6A6A6A] font-medium border border-white/[0.05] px-4 py-2 rounded-full">
            The Human Experience
          </span>
        </ScrollReveal>
        
        <ScrollReveal delay={0.1}>
          <h2 className="text-[40px] md:text-[64px] text-[#F2F2F0] font-serif-editorial font-light leading-[1.1] tracking-tight">
            Adapt to the world, not the computer.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="text-[20px] md:text-[24px] text-[#A0A0A0] font-light leading-relaxed flex flex-col gap-8 max-w-[800px]">
            <p>
              Spatial Computing should fundamentally reduce cognitive effort. 
            </p>
            <p>
              People should not have to constantly search, compare, and interpret fragmented geographical information across five different applications. 
            </p>
            <p className="text-[#F2F2F0] italic font-serif-editorial">
              Technology should quietly understand surroundings and provide relevant assistance only when genuinely helpful.
            </p>
            <p>
              Computing must adapt to the world instead of forcing the world to adapt to computing.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function FutureSection() {
  return (
    <section className="relative w-full py-[200px] px-6 md:px-12 bg-[#020202] overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[#4F6EF7] opacity-[0.03] blur-[200px] rounded-full pointer-events-none" />
      
      <div className="max-w-[1000px] mx-auto text-center flex flex-col gap-16 relative z-10">
        <ScrollReveal>
          <h2 className="text-[48px] md:text-[80px] lg:text-[100px] text-[#F2F2F0] font-serif-editorial font-light leading-[1.0] tracking-tight">
            The Future of Computing.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="text-[18px] md:text-[22px] text-[#A0A0A0] font-light leading-relaxed flex flex-col gap-8 max-w-[800px] mx-auto">
            <p>
              The future of computing is no longer confined to screens. It extends into the places we visit, the people we meet, the environments we experience, and the decisions we make.
            </p>
            <p>
              Spatial Computing becomes the ultimate bridge between digital intelligence and physical reality.
            </p>
            <p className="text-[#F2F2F0] text-[24px] md:text-[32px] font-medium mt-8">
              Ambient Spatial Intelligence builds upon this foundation to create technology that understands where we are, what surrounds us, and how those surroundings shape our lives.
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

export default function SpatialComputingPage() {
  return (
    <div className="relative w-full bg-[#050505] text-[#F2F2F0] selection:bg-[#4F6EF7]/30 selection:text-[#F2F2F0]">
      <HeroSection />
      <PhilosophySection />
      <LivingWorldSection />
      <UnderstandingSection />
      <WorldGraphSection />
      <ReasoningSection />
      <ExperienceSection />
      <FutureSection />
    </div>
  );
}
