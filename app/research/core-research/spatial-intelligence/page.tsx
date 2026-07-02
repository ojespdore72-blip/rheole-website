"use client";

import React from "react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import { 
  Globe, 
  Map, 
  Navigation,
  Briefcase, 
  GraduationCap, 
  Users, 
  Plane, 
  HeartHandshake, 
  Sparkles, 
  Building2,
  Eye, 
  Brain, 
  Cog, 
  Repeat,
  CloudSun, 
  Clock, 
  Smile, 
  Target, 
  Compass,
  Link as LinkIcon, 
  Network, 
  Waypoints,
  HelpCircle,
  Sun,
  Wind,
  CloudRain,
  MapPin,
  ChevronRight,
  Activity,
  GitMerge,
  Layers,
  ThermometerSun
} from "lucide-react";

// -----------------------------------------------------------------------------------
// REUSABLE COMPONENTS
// -----------------------------------------------------------------------------------

function SectionHeading({ title, subtitle, centered = false }: { title: string; subtitle?: string; centered?: boolean }) {
  return (
    <div className={`flex flex-col gap-4 mb-16 ${centered ? "items-center text-center mx-auto" : ""}`}>
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

function ResearchNote({ title, category, children }: { title: string; category: string; children: React.ReactNode }) {
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
    <section className="relative w-full min-h-screen flex flex-col justify-center px-6 md:px-12 pt-32 pb-20 overflow-hidden bg-[#080808]">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02] mix-blend-overlay pointer-events-none" />
      
      <div className="max-w-[1000px] mx-auto z-10 flex flex-col items-start gap-12 w-full mt-12">
        <ScrollReveal>
          <div className="flex items-center gap-4">
            <div className="w-12 h-[1px] bg-white/[0.2]" />
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#A0A0A0] font-medium">Rheole Research • Core Research</span>
          </div>
        </ScrollReveal>
        
        <ScrollReveal delay={0.2}>
          <h1 className="text-[64px] md:text-[96px] lg:text-[110px] text-[#F2F2F0] font-serif-editorial font-light leading-[0.95] tracking-tight max-w-[1000px]">
            Spatial Intelligence
          </h1>
          <p className="text-[20px] md:text-[24px] text-[#8A8A8A] font-light mt-6 tracking-wide">
            Teaching Computers to Understand the Physical World.
          </p>
        </ScrollReveal>
        
        <div className="flex flex-col gap-8 mt-12 w-full max-w-[700px]">
          <ScrollReveal delay={0.4}>
            <p className="text-[22px] md:text-[28px] text-[#A0A0A0] font-light leading-relaxed">
              The physical world is not random. Everything exists within relationships.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.5}>
            <p className="text-[18px] text-[#6A6A6A] font-light leading-relaxed">
              Buildings relate to neighbourhoods. Roads relate to movement. Communities relate to culture. Humans naturally understand these relationships, but computers largely do not. Spatial Intelligence gives computational systems the ability to understand the structure, relationships, and meaning of the physical world.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function TheWorldSection() {
  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#050505]">
      <div className="max-w-[1000px] mx-auto flex flex-col gap-16 text-center items-center">
        <SectionHeading subtitle="Editorial" title="The World" centered={true} />
        
        <ScrollReveal delay={0.2}>
          <p className="text-[28px] md:text-[40px] text-[#F2F2F0] font-serif-editorial font-light leading-tight">
            The world is more than geography.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <p className="text-[18px] text-[#8A8A8A] font-light leading-relaxed max-w-[700px] mt-6">
            People experience places through meaning rather than coordinates. A university is not simply a building; it is learning. A café is not simply a location; it is conversation. A park is not simply green space; it is wellbeing. Technology must understand these meanings to be truly intelligent.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

function WhySpaceMattersSection() {
  const experiences = [
    { label: "Learning", icon: <GraduationCap className="w-4 h-4"/> },
    { label: "Working", icon: <Briefcase className="w-4 h-4"/> },
    { label: "Meeting", icon: <Users className="w-4 h-4"/> },
    { label: "Travelling", icon: <Plane className="w-4 h-4"/> },
    { label: "Healing", icon: <HeartHandshake className="w-4 h-4"/> },
    { label: "Creating", icon: <Sparkles className="w-4 h-4"/> }
  ];

  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#080808]">
      <div className="max-w-[1000px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="flex flex-col gap-8">
          <SectionHeading subtitle="Human Geography" title="Why Space Matters" centered={false} />
          
          <ScrollReveal delay={0.2}>
            <p className="text-[20px] text-[#A0A0A0] font-light leading-relaxed">
              Every human experience happens somewhere.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <p className="text-[18px] text-[#8A8A8A] font-light leading-relaxed">
              Space shapes behaviour. The environment shapes choices. Location shapes opportunity. You cannot separate human intention from the physical constraints and affordances of the space they occupy. To understand human behaviour, AI must first understand spatial dynamics.
            </p>
          </ScrollReveal>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          {experiences.map((exp, idx) => (
            <ScrollReveal key={idx} delay={0.05 * idx}>
              <div className="flex items-center gap-3 p-5 bg-white/[0.02] border border-white/[0.05] rounded-xl">
                <span className="text-[#4F6EF7]">{exp.icon}</span>
                <span className="text-[15px] text-[#F2F2F0] font-medium">{exp.label}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhatIsSection() {
  const pillars = [
    { name: "Perception", desc: "Sensing the physical state of the environment.", icon: <Eye className="w-5 h-5"/> },
    { name: "Understanding", desc: "Extracting semantic meaning from spatial data.", icon: <Brain className="w-5 h-5"/> },
    { name: "Reasoning", desc: "Deducing relationships between distant places.", icon: <Cog className="w-5 h-5"/> },
    { name: "Adaptation", desc: "Evolving recommendations as space changes.", icon: <Repeat className="w-5 h-5"/> }
  ];

  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#050505]">
      <div className="max-w-[1000px] mx-auto flex flex-col gap-16">
        <div className="text-center max-w-[800px] mx-auto">
          <SectionHeading subtitle="Educational Chapter" title="What is Spatial Intelligence?" centered={true} />
        </div>

        <ScrollReveal delay={0.2}>
          <div className="p-12 border border-white/[0.05] bg-[#0A0A0A] rounded-[24px] text-center max-w-[800px] mx-auto">
            <p className="text-[22px] md:text-[28px] text-[#F2F2F0] font-serif-editorial font-light leading-relaxed">
              Spatial Intelligence is the ability of computational systems to perceive, understand, reason about, and adapt to the physical world.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {pillars.map((pillar, idx) => (
            <ScrollReveal key={idx} delay={0.1 * idx}>
              <div className="flex flex-col gap-4 p-6 border-t border-white/[0.05]">
                <div className="text-[#4F6EF7]">{pillar.icon}</div>
                <h4 className="text-[16px] text-white font-medium">{pillar.name}</h4>
                <p className="text-[14px] text-[#8A8A8A] font-light leading-relaxed">{pillar.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function SpatialModelSection() {
  const layers = [
    { title: "Physical Layer", desc: "Roads, Buildings, Parks, Infrastructure", icon: <Building2 className="w-4 h-4"/> },
    { title: "Environmental Layer", desc: "Weather, Light, Noise, Air quality", icon: <CloudSun className="w-4 h-4"/> },
    { title: "Temporal Layer", desc: "Time, Season, Events, Opening hours", icon: <Clock className="w-4 h-4"/> },
    { title: "Human Layer", desc: "People, Communities, Culture, Movement", icon: <Users className="w-4 h-4"/> },
    { title: "Intent Layer", desc: "Purpose, Goals, Needs", icon: <Target className="w-4 h-4"/> },
    { title: "Opportunity Layer", desc: "Businesses, Events, Experiences, Learning", icon: <Sparkles className="w-4 h-4"/> }
  ];

  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#080808]">
      <div className="max-w-[1000px] mx-auto flex flex-col gap-16">
        <SectionHeading subtitle="Conceptual Framework" title="The Spatial Model" centered={false} />
        
        <ScrollReveal delay={0.2}>
          <p className="text-[18px] text-[#8A8A8A] font-light leading-relaxed max-w-[800px]">
            Every place consists of interconnected layers. These layers stack together to combine into a living model of reality, ensuring the AI comprehends a coordinate as a multifaceted entity rather than a flat point on a map.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {layers.map((layer, idx) => (
             <ScrollReveal key={idx} delay={0.05 * idx}>
              <div className="p-6 bg-[#050505] border border-white/[0.05] rounded-xl flex items-start gap-4">
                <div className="p-2 bg-white/[0.05] rounded-full text-white">{layer.icon}</div>
                <div>
                  <h4 className="text-[16px] text-white font-medium mb-1">{layer.title}</h4>
                  <p className="text-[14px] text-[#8A8A8A] font-light leading-relaxed">{layer.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function RelationshipsSection() {
  const examples = [
    "A restaurant near an office.",
    "A park beside a university.",
    "A metro station connected to a business district.",
    "A community growing around a neighbourhood.",
    "A founder ecosystem around a technology hub."
  ];

  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#050505]">
      <div className="max-w-[1000px] mx-auto flex flex-col gap-16 text-center items-center">
        <SectionHeading subtitle="Ecology" title="Understanding Relationships" centered={true} />
        
        <ScrollReveal delay={0.2}>
          <p className="text-[18px] text-[#8A8A8A] font-light leading-relaxed max-w-[800px]">
            Spatial Intelligence focuses on relationships rather than isolated objects. A building alone is just steel and concrete. Meaning emerges from relationships.
          </p>
        </ScrollReveal>

        <div className="flex flex-col gap-4 mt-8 w-full max-w-[600px]">
          {examples.map((ex, idx) => (
             <ScrollReveal key={idx} delay={0.1 * idx}>
              <div className="p-4 border-b border-white/[0.05] text-[16px] text-[#E0E0E0] font-light italic">
                "{ex}"
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function SpatialReasoningSection() {
  const questions = [
    "Why is it relevant?",
    "Who benefits?",
    "When is it useful?",
    "How does it connect to surrounding places?",
    "How does the environment influence it?",
    "How does human behaviour change its meaning?"
  ];

  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#080808]">
      <div className="max-w-[1000px] mx-auto flex flex-col lg:flex-row gap-20">
        <div className="lg:w-1/2 flex flex-col gap-8">
          <SectionHeading subtitle="Cognitive Shift" title="Spatial Reasoning" centered={false} />
          
          <ScrollReveal delay={0.2}>
            <p className="text-[20px] text-[#A0A0A0] font-light leading-relaxed">
              Instead of asking "Where is it?", Spatial Intelligence asks deeper questions.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <p className="text-[18px] text-[#8A8A8A] font-light leading-relaxed">
              Coordinates do not solve human problems. Understanding the holistic relevance, timing, and environmental pressures of a space allows technology to suggest solutions rather than just destinations.
            </p>
          </ScrollReveal>
        </div>
        
        <div className="lg:w-1/2 flex flex-col justify-center">
          <div className="p-8 border border-white/[0.05] rounded-[24px] bg-white/[0.01]">
            <div className="flex flex-col gap-4">
              {questions.map((q, idx) => (
                <ScrollReveal key={idx} delay={0.05 * idx}>
                  <div className="flex items-center gap-3 text-[16px] text-[#F2F2F0] font-light">
                    <HelpCircle className="w-4 h-4 text-[#4F6EF7]" /> {q}
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LivingWorldSection() {
  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#050505]">
      <div className="max-w-[1000px] mx-auto flex flex-col gap-12 text-center items-center">
        <SectionHeading subtitle="Urban Dynamics" title="The Living World" centered={true} />
        
        <ScrollReveal delay={0.2}>
          <p className="text-[28px] md:text-[36px] text-[#F2F2F0] font-serif-editorial font-light leading-tight max-w-[800px]">
            Cities should never be modelled as static maps.<br/>They should be understood as living systems.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <p className="text-[18px] text-[#8A8A8A] font-light leading-relaxed max-w-[700px] mt-6">
            The physical world is constantly evolving through construction, weather, crowds, businesses, communities, festivals, traffic, public transport, nature, and infrastructure. A static map is obsolete the moment a rainstorm hits or a crowd gathers.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

function ScenariosSection() {
  const scenarios = [
    { t: "I'm looking for investors.", r: "Reasons about technology hubs, founder ecosystems, and serendipitous professional spaces rather than searching for 'VC offices'." },
    { t: "I'm exploring Bengaluru.", r: "Identifies interconnected historical districts with dense cultural layers, evaluating walkability instead of showing tourist traps." },
    { t: "I'm planning photography.", r: "Analyses building orientation, incoming cloud cover, and street-level noise to recommend exactly when light hits an architectural facade." },
    { t: "I'm relocating.", r: "Evaluates the proximity of schools to green spaces, commute flows, and community demographics rather than just property values." },
    { t: "I'm searching for inspiration.", r: "Finds environments with specific atmospheric qualities (acoustic resonance, natural light, creative communities) to match human intent." }
  ];

  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#080808]">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-24">
        
        <div className="text-center max-w-[800px] mx-auto">
          <SectionHeading subtitle="Applied Scenarios" title="Real-World Applications" centered={true} />
          <ScrollReveal delay={0.2}>
            <p className="text-[18px] text-[#8A8A8A] font-light leading-relaxed mt-4">
              Observe how Spatial Intelligence reasons about relationships instead of simply searching locations.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {scenarios.map((scen, idx) => (
            <ScrollReveal key={idx} delay={0.05 * idx}>
              <div className="p-8 border border-white/[0.03] bg-[#0A0A0A] rounded-[24px] h-full flex flex-col gap-4 hover:border-white/[0.1] transition-colors">
                <h4 className="text-[18px] text-white font-medium italic">"{scen.t}"</h4>
                <div className="mt-2 pt-4 border-t border-white/[0.05]">
                  <p className="text-[15px] text-[#8A8A8A] font-light leading-relaxed">{scen.r}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}

function PrinciplesSection() {
  const principles = [
    "Meaning over coordinates.",
    "Relationships over isolated places.",
    "Understanding before optimisation.",
    "Context before assumptions.",
    "Environment before prediction.",
    "Human-centred reasoning.",
    "Explainability.",
    "Privacy.",
    "Continuous learning."
  ];

  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#050505]">
      <div className="max-w-[1000px] mx-auto flex flex-col lg:flex-row gap-20">
        <div className="lg:w-1/3">
          <SectionHeading subtitle="Design Principles" title="Foundational Principles" centered={false} />
        </div>
        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
          {principles.map((p, idx) => (
            <ScrollReveal key={idx} delay={0.05 * idx}>
              <div className="p-4 border-l-2 border-[#4F6EF7]/40 bg-white/[0.01]">
                <h4 className="text-[16px] text-[#F2F2F0] font-medium tracking-tight">{p}</h4>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ConceptsSection() {
  const concepts = [
    { t: "Spatial Graph™", d: "Represents relationships between places, people, events and opportunities." },
    { t: "Meaning Layer™", d: "Captures the purpose and significance of locations beyond coordinates." },
    { t: "Reality Model™", d: "A continuously evolving representation of the physical world." },
    { t: "Relationship Engine™", d: "Reasons about how places influence one another." },
    { t: "Living Space™", d: "Treats cities as dynamic systems rather than static maps." },
    { t: "Opportunity Graph™", d: "Identifies meaningful opportunities emerging from spatial relationships." }
  ];

  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#080808]">
      <div className="max-w-[1000px] mx-auto flex flex-col gap-16">
        <div className="text-center">
          <SectionHeading subtitle="Proprietary Terminology" title="Original Research Concepts" centered={true} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {concepts.map((concept, idx) => (
             <ScrollReveal key={idx} delay={0.1 * idx}>
              <div className="p-8 h-full bg-[#050505] border border-white/[0.05] rounded-xl hover:border-white/[0.1] transition-all">
                <h4 className="text-[16px] text-white font-medium mb-3">{concept.t}</h4>
                <p className="text-[14px] text-[#8A8A8A] font-light leading-relaxed">{concept.d}</p>
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
    <section className="relative w-full py-[200px] px-6 md:px-12 bg-[#050505] overflow-hidden border-t border-white/[0.05]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-white/[0.02] rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-[800px] mx-auto flex flex-col items-center text-center relative z-10">
        <ScrollReveal>
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#6A6A6A] font-medium mb-12 block">Research Vision</span>
        </ScrollReveal>
        
        <ScrollReveal delay={0.2}>
          <h2 className="text-[40px] md:text-[64px] text-[#F2F2F0] font-serif-editorial font-light leading-[1.1] tracking-tight mb-16">
            The Future of Spatial Computing
          </h2>
        </ScrollReveal>
        
        <div className="flex flex-col gap-8">
          <ScrollReveal delay={0.4}>
            <p className="text-[20px] md:text-[24px] text-[#A0A0A0] font-light leading-relaxed">
              Computers first understood numbers. Then documents. Then the internet. Then language. The next frontier is understanding physical reality.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.5}>
            <p className="text-[18px] text-[#8A8A8A] font-light leading-relaxed">
              Spatial Intelligence enables technology to understand places, movement, relationships, and environments as interconnected systems.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.6}>
            <div className="mt-12 p-8 border border-white/[0.05] rounded-[24px] bg-white/[0.02]">
              <p className="text-[20px] md:text-[28px] text-white font-serif-editorial font-light leading-relaxed">
                The future belongs to intelligence grounded in the real world.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

// -----------------------------------------------------------------------------------
// MAIN EXPORT
// -----------------------------------------------------------------------------------

export default function SpatialIntelligenceResearchPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-[#F2F2F0] font-sans selection:bg-white/20 selection:text-white pt-16">
      <HeroSection />
      <TheWorldSection />
      <WhySpaceMattersSection />
      <WhatIsSection />
      <SpatialModelSection />
      <RelationshipsSection />
      <SpatialReasoningSection />
      <LivingWorldSection />
      <ScenariosSection />
      <PrinciplesSection />
      <ConceptsSection />
      <FutureSection />
    </main>
  );
}
