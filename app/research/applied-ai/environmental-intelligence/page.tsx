"use client";

import React from "react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import { 
  CloudSun, 
  ThermometerSun, 
  Wind, 
  Building2, 
  Trees, 
  Users, 
  Sun,
  Moon,
  Droplets,
  Volume2,
  CalendarDays,
  Map,
  Compass,
  Clock
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
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#A0A0A0] font-medium">Rheole Research • Applied AI</span>
          </div>
        </ScrollReveal>
        
        <ScrollReveal delay={0.2}>
          <h1 className="text-[64px] md:text-[96px] lg:text-[110px] text-[#F2F2F0] font-serif-editorial font-light leading-[0.95] tracking-tight max-w-[1000px]">
            Environmental Intelligence
          </h1>
          <p className="text-[20px] md:text-[24px] text-[#8A8A8A] font-light mt-6 tracking-wide">
            The World That Quietly Shapes Every Decision.
          </p>
        </ScrollReveal>
        
        <div className="flex flex-col gap-8 mt-12 w-full max-w-[700px]">
          <ScrollReveal delay={0.4}>
            <p className="text-[22px] md:text-[28px] text-[#A0A0A0] font-light leading-relaxed">
              Every decision we make is influenced by the world around us.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.5}>
            <p className="text-[18px] text-[#6A6A6A] font-light leading-relaxed">
              We walk because the weather is pleasant. We stay indoors because of heavy rain. We choose a café because it has shade. The environment quietly influences nearly everything we do. Most software ignores these influences. Environmental Intelligence places them at the centre.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function LivingWorldSection() {
  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#050505]">
      <div className="max-w-[1000px] mx-auto flex flex-col gap-16 text-center items-center">
        <SectionHeading subtitle="Editorial" title="The Living World" centered={true} />
        
        <ScrollReveal delay={0.2}>
          <p className="text-[28px] md:text-[40px] text-[#F2F2F0] font-serif-editorial font-light leading-tight">
            The world is always speaking.<br/>
            Most technology simply isn't listening.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <p className="text-[18px] text-[#8A8A8A] font-light leading-relaxed max-w-[700px] mt-6">
            People never exist independently from their surroundings. The environment is not a passive background upon which human life plays out. It is the context. It is the influence. It is intelligence.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

function WhatIsSection() {
  const elements = [
    { name: "Time", icon: <Clock className="w-4 h-4"/> },
    { name: "Light", icon: <Sun className="w-4 h-4"/> },
    { name: "Weather", icon: <CloudSun className="w-4 h-4"/> },
    { name: "Temperature", icon: <ThermometerSun className="w-4 h-4"/> },
    { name: "Humidity", icon: <Droplets className="w-4 h-4"/> },
    { name: "Wind", icon: <Wind className="w-4 h-4"/> },
    { name: "Noise", icon: <Volume2 className="w-4 h-4"/> },
    { name: "Air quality", icon: <Wind className="w-4 h-4"/> },
    { name: "Green spaces", icon: <Trees className="w-4 h-4"/> },
    { name: "Crowd density", icon: <Users className="w-4 h-4"/> },
    { name: "Seasonality", icon: <CalendarDays className="w-4 h-4"/> },
    { name: "Infrastructure", icon: <Building2 className="w-4 h-4"/> }
  ];

  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#080808]">
      <div className="max-w-[1000px] mx-auto flex flex-col gap-16">
        <div className="text-center max-w-[800px] mx-auto">
          <SectionHeading subtitle="Educational Chapter" title="What is Environmental Intelligence?" centered={true} />
        </div>

        <ScrollReveal delay={0.2}>
          <div className="p-12 border border-white/[0.05] bg-[#050505] rounded-[24px] text-center max-w-[800px] mx-auto">
            <p className="text-[22px] md:text-[28px] text-[#F2F2F0] font-serif-editorial font-light leading-relaxed">
              The ability for computational systems to understand how changing environmental conditions influence people, movement, opportunities and everyday decisions.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-12 flex flex-wrap justify-center gap-4 max-w-[800px] mx-auto">
          {elements.map((item, idx) => (
            <ScrollReveal key={idx} delay={0.05 * idx}>
              <div className="flex items-center gap-2 px-4 py-2 border border-white/[0.05] rounded-full text-[14px] text-[#8A8A8A] bg-white/[0.02]">
                <span className="text-[#4F6EF7]/80">{item.icon}</span> {item.name}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ModelSection() {
  const layers = [
    {
      title: "Natural Layer",
      desc: "Weather, temperature, wind, sunlight, rain, and air quality.",
      color: "border-[#4F6EF7]/30"
    },
    {
      title: "Urban Layer",
      desc: "Buildings, roads, parks, transit, lighting, and infrastructure.",
      color: "border-white/30"
    },
    {
      title: "Human Layer",
      desc: "Crowds, movement, communities, events, and businesses.",
      color: "border-white/10"
    },
    {
      title: "Temporal Layer",
      desc: "Morning, afternoon, evening, night, weekdays, and weekends.",
      color: "border-[#A0A0A0]/30"
    },
    {
      title: "Seasonal Layer",
      desc: "Summer, monsoon, winter, and cultural festivals.",
      color: "border-[#F2F2F0]/20"
    }
  ];

  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#050505]">
      <div className="max-w-[1000px] mx-auto flex flex-col lg:flex-row gap-20">
        <div className="lg:w-1/3 flex flex-col gap-8">
          <SectionHeading subtitle="Conceptual Framework" title="The Environmental Model" centered={false} />
          <ScrollReveal delay={0.2}>
            <p className="text-[18px] text-[#8A8A8A] font-light leading-relaxed">
              Environmental Intelligence consists of deeply interconnected layers. 
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <p className="text-[18px] text-[#8A8A8A] font-light leading-relaxed">
              A recommendation is never derived from a single data point. It emerges from the collision and interaction of these layers at a specific geographic coordinate.
            </p>
          </ScrollReveal>
        </div>
        
        <div className="lg:w-2/3 flex flex-col gap-4">
          {layers.map((layer, idx) => (
            <ScrollReveal key={idx} delay={0.1 * idx}>
              <div className={`p-6 bg-white/[0.01] border-l-2 ${layer.color} border-y border-r border-y-white/[0.02] border-r-white/[0.02] rounded-r-xl`}>
                <h4 className="text-[16px] text-white font-medium mb-2">{layer.title}</h4>
                <p className="text-[14px] text-[#8A8A8A] font-light">{layer.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ChangesUsSection() {
  const examples = [
    { t: "Rain", d: "Increases indoor activity and drastically alters local transport demand." },
    { t: "Pleasant Evenings", d: "Increase public life, serendipitous meetings, and foot traffic." },
    { t: "High Temperatures", d: "Reduce walking, shifting the threshold for 'too far' down to mere meters." },
    { t: "Air Quality", d: "Dictates the viability of cycling and outdoor exercise." },
    { t: "Sunset", d: "Fundamentally changes architectural photography, mood, and safety perceptions." },
    { t: "Festivals", d: "Transform quiet neighbourhoods into dense, high-energy cultural hubs." }
  ];

  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#080808]">
      <div className="max-w-[1000px] mx-auto flex flex-col gap-16">
        <div className="text-center">
          <SectionHeading subtitle="Behavioural Science" title="How the World Changes Us" centered={true} />
          <ScrollReveal delay={0.2}>
            <p className="text-[18px] text-[#8A8A8A] font-light mt-4 max-w-[700px] mx-auto">
              The environment is dynamic, not static. It possesses the power to rewrite human routines in real-time.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {examples.map((ex, idx) => (
             <ScrollReveal key={idx} delay={0.1 * idx}>
              <div className="p-8 h-full bg-[#050505] border border-white/[0.05] rounded-xl hover:border-white/[0.1] transition-all">
                <h4 className="text-[18px] text-white font-medium mb-3">{ex.t}</h4>
                <p className="text-[14px] text-[#8A8A8A] font-light leading-relaxed">{ex.d}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function DecisionMakingSection() {
  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#050505]">
      <div className="max-w-[1000px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="flex flex-col gap-8">
          <SectionHeading subtitle="Cognitive Context" title="Human Decision Making" centered={false} />
          
          <ScrollReveal delay={0.2}>
            <p className="text-[20px] text-[#A0A0A0] font-light leading-relaxed">
              People rarely make decisions in isolation.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <p className="text-[18px] text-[#8A8A8A] font-light leading-relaxed">
              Every choice is constantly influenced by Comfort, Safety, Convenience, Opportunity, Visibility, Accessibility, Time, and Environment. A café is not just a coordinate—it is a sanctuary during a storm, a shaded patio during a heatwave, or a bustling hub during a cool evening.
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={0.4}>
            <ResearchNote category="Human Factors" title="Environmental Perception">
              Human beings unconsciously weigh dozens of environmental factors before deciding where to go. Software that ignores this math fails to provide true utility.
            </ResearchNote>
          </ScrollReveal>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          {["Comfort", "Safety", "Convenience", "Opportunity", "Visibility", "Accessibility", "Time", "Environment"].map((intent, idx) => (
            <ScrollReveal key={idx} delay={0.05 * idx}>
              <div className="flex items-center justify-center p-4 bg-white/[0.02] border border-white/[0.05] rounded-full hover:bg-white/[0.05] transition-colors">
                <span className="text-[14px] text-[#F2F2F0] font-medium tracking-wide">{intent}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function LivingCitySection() {
  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#080808]">
      <div className="max-w-[1000px] mx-auto flex flex-col gap-12 text-center items-center">
        <SectionHeading subtitle="Urban Computing" title="The Living City" centered={true} />
        
        <ScrollReveal delay={0.2}>
          <p className="text-[28px] md:text-[36px] text-[#F2F2F0] font-serif-editorial font-light leading-tight max-w-[800px]">
            Cities breathe.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <p className="text-[18px] text-[#8A8A8A] font-light leading-relaxed max-w-[700px] mt-6">
            Morning. Office hours. Lunch. Rush hour. Weekend markets. Nightlife. Rainstorms. Sporting events. Construction. School holidays. Every city changes continuously. Environmental Intelligence models these changes instead of treating cities as fixed, immutable maps.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

function ScenariosSection() {
  const scenarios = [
    { title: "I'm hungry.", shift: "Normally routing to a popular distant restaurant, the system notices heavy rainfall and instead prioritises a highly-rated, structurally covered café just fifty meters away." },
    { title: "I'm exploring Bengaluru.", shift: "Rather than defaulting to the busiest landmarks, it recognises high noon heat and suggests a shaded, canopy-rich historical walk through Cubbon Park." },
    { title: "I'm exercising.", shift: "Detecting poor air quality along the usual urban route, it recalculates a path through a dense greenbelt, preserving the runner's cardiovascular health." },
    { title: "I'm photographing architecture.", shift: "Understanding the sun's trajectory and current cloud cover to recommend arriving at the basilica exactly when the 'golden hour' light pierces the stained glass." },
    { title: "I'm looking for a quiet place.", shift: "Cross-referencing live acoustic data, construction zones, and crowd density to find a serene courtyard completely insulated from the city's noise." },
    { title: "I'm taking children to a park.", shift: "Evaluating UV index, availability of natural shade, and recent rain (mud conditions) to ensure the park is actually viable for play." }
  ];

  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#050505]">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-24">
        
        <div className="text-center max-w-[800px] mx-auto">
          <SectionHeading subtitle="Applied Scenarios" title="Real-World Examples" centered={true} />
          <ScrollReveal delay={0.2}>
            <p className="text-[18px] text-[#8A8A8A] font-light leading-relaxed mt-4">
              Observe how changing environmental conditions fundamentally reshape the recommendation.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {scenarios.map((scen, idx) => (
            <ScrollReveal key={idx} delay={0.05 * idx}>
              <div className="p-8 border border-white/[0.03] bg-[#0A0A0A] rounded-[24px] h-full flex flex-col gap-4">
                <h4 className="text-[18px] text-white font-medium italic">"{scen.title}"</h4>
                <div className="mt-2 pt-4 border-t border-white/[0.05]">
                  <span className="text-[10px] text-[#6A6A6A] uppercase tracking-widest block mb-2">Environmental Shift</span>
                  <p className="text-[15px] text-[#8A8A8A] font-light leading-relaxed">{scen.shift}</p>
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
    { t: "The world is dynamic.", d: "Static maps fail because they represent infrastructure, not reality. Reality is constantly moving." },
    { t: "Context outweighs assumptions.", d: "A five-star rating means nothing if the venue has no roof during a thunderstorm." },
    { t: "Recommendations should evolve continuously.", d: "What was a great suggestion at 9:00 AM may be a terrible suggestion by 9:15 AM if conditions shift." },
    { t: "Environment should be explainable.", d: "The user must always know that a route was altered specifically because of air quality or lighting." },
    { t: "Technology should adapt faster than conditions change.", d: "Intelligence must be predictive, not purely reactive, anticipating the environment's next state." },
    { t: "Human comfort matters.", d: "Systems should optimise for physiological and psychological wellbeing, not just mathematical efficiency." },
    { t: "Environmental awareness increases trust.", d: "When a system proves it understands the physical world, users trust it with their physical decisions." }
  ];

  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#080808]">
      <div className="max-w-[1000px] mx-auto flex flex-col lg:flex-row gap-20">
        <div className="lg:w-1/3">
          <SectionHeading subtitle="Design Principles" title="Environmental Computing Principles" centered={false} />
        </div>
        <div className="lg:w-2/3 flex flex-col gap-12">
          {principles.map((p, idx) => (
            <ScrollReveal key={idx} delay={0.1 * idx}>
              <div className="flex flex-col gap-2">
                <h4 className="text-[20px] text-[#F2F2F0] font-medium tracking-tight">{p.t}</h4>
                <p className="text-[16px] text-[#8A8A8A] font-light leading-relaxed">{p.d}</p>
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
    { t: "Environmental Graph™", d: "Models relationships between environmental factors and human behaviour." },
    { t: "Living Conditions™", d: "A continuously evolving understanding of the surrounding environment." },
    { t: "Urban Atmosphere™", d: "Describes the combined effect of weather, people, infrastructure and activity." },
    { t: "Comfort Field™", d: "Represents how comfortable an environment is for different activities." },
    { t: "Adaptive Environment™", d: "Explains how recommendations evolve as surroundings change." },
    { t: "Environmental Memory™", d: "Understands how places behave across days, seasons and years." }
  ];

  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#050505]">
      <div className="max-w-[1000px] mx-auto flex flex-col gap-16">
        <div className="text-center">
          <SectionHeading subtitle="Proprietary Terminology" title="Original Research Concepts" centered={true} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {concepts.map((concept, idx) => (
             <ScrollReveal key={idx} delay={0.1 * idx}>
              <div className="p-8 h-full bg-white/[0.02] border border-white/[0.05] rounded-xl hover:border-white/[0.1] transition-all">
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
    <section className="relative w-full py-[200px] px-6 md:px-12 bg-[#080808] overflow-hidden border-t border-white/[0.05]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#4F6EF7]/[0.05] rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-[800px] mx-auto flex flex-col items-center text-center relative z-10">
        <ScrollReveal>
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#6A6A6A] font-medium mb-12 block">Research Vision</span>
        </ScrollReveal>
        
        <ScrollReveal delay={0.2}>
          <h2 className="text-[40px] md:text-[64px] text-[#F2F2F0] font-serif-editorial font-light leading-[1.1] tracking-tight mb-16">
            The Future of Environmental Computing
          </h2>
        </ScrollReveal>
        
        <div className="flex flex-col gap-8">
          <ScrollReveal delay={0.4}>
            <p className="text-[20px] md:text-[24px] text-[#A0A0A0] font-light leading-relaxed">
              Future computers will not simply display forecasts. They will understand how the world changes human experiences.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.5}>
            <p className="text-[18px] text-[#8A8A8A] font-light leading-relaxed">
              Environmental Intelligence transforms static software into living systems that evolve alongside reality. The future belongs to systems that perceive environments rather than merely displaying them.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.6}>
            <div className="mt-12 p-8 border border-white/[0.05] rounded-[24px] bg-white/[0.02]">
              <p className="text-[20px] md:text-[28px] text-white font-serif-editorial font-light leading-relaxed">
                The future of computing will not simply understand people. It will understand the world people live within.
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

export default function EnvironmentalIntelligencePage() {
  return (
    <main className="min-h-screen bg-[#050505] text-[#F2F2F0] font-sans selection:bg-white/20 selection:text-white pt-16">
      <HeroSection />
      <LivingWorldSection />
      <WhatIsSection />
      <ModelSection />
      <ChangesUsSection />
      <DecisionMakingSection />
      <LivingCitySection />
      <ScenariosSection />
      <PrinciplesSection />
      <ConceptsSection />
      <FutureSection />
    </main>
  );
}
