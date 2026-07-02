"use client";

import React from "react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import { 
  Footprints, 
  Map, 
  Compass, 
  Clock, 
  Briefcase, 
  GraduationCap, 
  HeartHandshake, 
  Plane,
  Building2,
  Users,
  Activity,
  ArrowRight,
  Route,
  Sparkles
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
          <h1 className="text-[64px] md:text-[96px] lg:text-[110px] text-[#F2F2F0] font-serif-editorial font-light leading-[0.95] tracking-tight">
            Human Mobility
          </h1>
          <p className="text-[20px] md:text-[24px] text-[#8A8A8A] font-light mt-6 tracking-wide">
            The Intelligence of Human Movement.
          </p>
        </ScrollReveal>
        
        <div className="flex flex-col gap-8 mt-12 w-full max-w-[700px]">
          <ScrollReveal delay={0.4}>
            <p className="text-[22px] md:text-[28px] text-[#A0A0A0] font-light leading-relaxed">
              Every city exists because people move. Every economy grows because people move. Every discovery happens because people move.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.5}>
            <p className="text-[18px] text-[#6A6A6A] font-light leading-relaxed">
              Technology has spent decades optimizing routes. Very little technology understands movement itself. Rheole believes mobility should be understood before it is optimized.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function StoryOfMovementSection() {
  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#050505]">
      <div className="max-w-[1000px] mx-auto flex flex-col gap-16">
        <SectionHeading subtitle="Historical Perspective" title="The Story of Movement" centered={false} />
        
        <ScrollReveal delay={0.2}>
          <p className="text-[28px] md:text-[36px] text-[#F2F2F0] font-serif-editorial font-light leading-tight">
            Human history is written in footsteps.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
          <ScrollReveal delay={0.3}>
            <p className="text-[18px] text-[#8A8A8A] font-light leading-relaxed">
              Movement is more than transportation. It is the catalyst for how societies evolve. Migration spread humanity across the globe. Trade routes built the first global economies. Pilgrimages established shared culture. Exploration accelerated innovation. 
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.4}>
             <p className="text-[18px] text-[#8A8A8A] font-light leading-relaxed">
              When we reduce movement to a simple calculation of distance over time, we ignore the profound social, economic, and cultural significance of why people leave their homes in the first place.
            </p>
          </ScrollReveal>
        </div>
        
        <ScrollReveal delay={0.5}>
          <div className="flex flex-wrap gap-3 mt-8">
            {["Migration", "Trade", "Cities", "Education", "Culture", "Innovation", "Exploration", "Commerce", "Relationships", "Civilisations"].map((item, idx) => (
              <span key={idx} className="px-4 py-2 border border-white/[0.05] rounded-full text-[14px] text-[#A0A0A0] bg-white/[0.02]">
                {item}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function WhatIsSection() {
  const dimensions = [
    { title: "Purpose", desc: "The underlying intention that triggers the journey." },
    { title: "Time", desc: "The temporal constraints and rhythms governing the movement." },
    { title: "Context", desc: "The situational variables (weather, companions) surrounding the act." },
    { title: "Emotion", desc: "The psychological state driving or affecting the journey." },
    { title: "Environment", desc: "The physical topography and infrastructure being traversed." },
    { title: "Accessibility", desc: "The physical and socioeconomic capacity to complete the movement." },
    { title: "Opportunity", desc: "The latent possibilities that arise spontaneously during transit." },
    { title: "Community", desc: "The social fabric woven by collective movement patterns." }
  ];

  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#080808]">
      <div className="max-w-[1000px] mx-auto flex flex-col gap-16">
        <div className="text-center max-w-[800px] mx-auto">
          <SectionHeading subtitle="Educational Chapter" title="What is Human Mobility?" centered={true} />
        </div>

        <ScrollReveal delay={0.2}>
          <div className="p-12 border border-white/[0.05] bg-[#050505] rounded-[24px] text-center max-w-[800px] mx-auto">
            <p className="text-[22px] md:text-[28px] text-[#F2F2F0] font-serif-editorial font-light leading-relaxed">
              Human Mobility is the study of how people move through physical environments, why they move, how movement shapes society, and how intelligent systems can improve those experiences.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-16">
          <ScrollReveal delay={0.3}>
            <p className="text-[18px] text-[#A0A0A0] font-light text-center mb-12">
              Mobility is profoundly multidimensional.
            </p>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dimensions.map((dim, idx) => (
              <ScrollReveal key={idx} delay={0.1 * idx}>
                <div className="flex flex-col gap-2 border-t border-white/[0.05] pt-6">
                  <h4 className="text-[16px] text-white font-medium">{dim.title}</h4>
                  <p className="text-[14px] text-[#8A8A8A] font-light leading-relaxed">{dim.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyPeopleMoveSection() {
  const intents = [
    { label: "Work", icon: <Briefcase className="w-4 h-4"/> },
    { label: "Learn", icon: <GraduationCap className="w-4 h-4"/> },
    { label: "Explore", icon: <Compass className="w-4 h-4"/> },
    { label: "Meet", icon: <Users className="w-4 h-4"/> },
    { label: "Create", icon: <Sparkles className="w-4 h-4"/> },
    { label: "Celebrate", icon: <Activity className="w-4 h-4"/> },
    { label: "Heal", icon: <HeartHandshake className="w-4 h-4"/> },
    { label: "Travel", icon: <Plane className="w-4 h-4"/> }
  ];

  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#050505]">
      <div className="max-w-[1000px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="flex flex-col gap-8">
          <SectionHeading subtitle="Behavioural Science" title="Why People Move" centered={false} />
          
          <ScrollReveal delay={0.2}>
            <p className="text-[20px] text-[#A0A0A0] font-light leading-relaxed">
              Every movement begins with human intention.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <p className="text-[18px] text-[#8A8A8A] font-light leading-relaxed">
              People do not wake up desiring to traverse geographic coordinates. They desire to work, to learn, to discover, to escape, to support others, to build businesses, and to volunteer. Technology should understand that purpose rather than only calculate distance.
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={0.4}>
            <ResearchNote category="Human Factors" title="Intention vs Routing">
              When an algorithm only understands the destination, it optimises for speed. When it understands the intention, it optimises for experience.
            </ResearchNote>
          </ScrollReveal>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          {intents.map((intent, idx) => (
            <ScrollReveal key={idx} delay={0.05 * idx}>
              <div className="flex items-center gap-3 p-6 bg-white/[0.02] border border-white/[0.05] rounded-xl hover:bg-white/[0.05] transition-colors">
                <span className="text-[#4F6EF7]">{intent.icon}</span>
                <span className="text-[15px] text-[#F2F2F0] font-medium">{intent.label}</span>
              </div>
            </ScrollReveal>
          ))}
          <ScrollReveal delay={0.6}>
            <div className="col-span-2 flex items-center justify-center p-6 border border-white/[0.05] border-dashed rounded-xl">
              <span className="text-[13px] text-[#6A6A6A] font-medium uppercase tracking-widest">And countless other reasons</span>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function ScienceOfMovementSection() {
  const topics = [
    "Walking", "Cycling", "Driving", "Public transport", "Shared mobility", "Micro mobility", 
    "Accessibility", "Multimodal journeys", "Movement psychology", "Decision making", 
    "Travel behaviour", "Comfort", "Safety", "Reliability"
  ];

  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#080808]">
      <div className="max-w-[1000px] mx-auto flex flex-col gap-12">
        <SectionHeading subtitle="Mobility Mechanics" title="The Science of Movement" centered={true} />
        
        <ScrollReveal delay={0.2}>
          <p className="text-[18px] text-[#8A8A8A] font-light text-center max-w-[700px] mx-auto leading-relaxed">
            Movement occurs across diverse, intersecting modalities. The science of human mobility requires understanding the mechanical realities of these modalities and the psychological factors that govern how people choose between them.
          </p>
        </ScrollReveal>
        
        <div className="flex flex-wrap justify-center gap-4 mt-8 max-w-[800px] mx-auto">
          {topics.map((topic, idx) => (
            <ScrollReveal key={idx} delay={0.05 * idx}>
              <div className="px-5 py-3 rounded-full border border-white/[0.08] bg-white/[0.02] text-[15px] text-[#D1D5DB] font-light">
                {topic}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function LivingSystemSection() {
  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#050505]">
      <div className="max-w-[1000px] mx-auto flex flex-col lg:flex-row gap-20">
        <div className="lg:w-1/2 flex flex-col justify-center gap-8">
          <SectionHeading subtitle="Urban Dynamics" title="The City as a Living System" centered={false} />
          <ScrollReveal delay={0.2}>
            <p className="text-[18px] text-[#8A8A8A] font-light leading-relaxed">
              Cities behave like living organisms. They breathe in commuters in the morning, and breathe them out in the evening. They react to festivals, emergencies, construction, and weather. 
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <p className="text-[18px] text-[#8A8A8A] font-light leading-relaxed">
              Every neighbourhood, business district, and university develops unique, shifting movement patterns. Understanding these rhythms allows intelligent systems to anticipate the city's state before the user even departs.
            </p>
          </ScrollReveal>
        </div>
        
        <div className="lg:w-1/2">
          <ScrollReveal delay={0.4}>
            <div className="p-8 border border-white/[0.05] rounded-[24px] bg-[#0A0A0A] flex flex-col gap-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Building2 className="w-32 h-32" />
              </div>
              <h4 className="text-[16px] text-white font-medium uppercase tracking-widest relative z-10">The Urban Pulse</h4>
              <div className="flex flex-col gap-3 relative z-10">
                {["Morning Rush", "Lunch Hour Micro-movements", "Evening Dispersal", "Night Economy", "Weekend Leisure", "Event Spikes"].map((rhythm, idx) => (
                  <div key={idx} className="flex items-center gap-4 border-b border-white/[0.05] pb-3">
                    <Clock className="w-4 h-4 text-[#4F6EF7]" />
                    <span className="text-[15px] text-[#A0A0A0] font-light">{rhythm}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function PatternsSection() {
  const concepts = [
    { t: "Movement Network™", d: "The holistic map of human flow, superseding the static street grid." },
    { t: "Daily Flow™", d: "The macro-level tidal patterns of population shifting across a geography." },
    { t: "Urban Pulse™", d: "The real-time heartbeat of a city, dictated by density and activity." },
    { t: "Journey Rhythm™", d: "The micro-cadence of a single user's transit behaviour." },
    { t: "Mobility Graph™", d: "The relational database connecting intent, space, and time." },
    { t: "Neighbourhood Dynamics™", d: "The hyper-local conditions that dictate micro-movements." }
  ];

  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#080808]">
      <div className="max-w-[1000px] mx-auto flex flex-col gap-16">
        <div className="text-center">
          <SectionHeading subtitle="Proprietary Concepts" title="Patterns of Mobility" centered={true} />
          <ScrollReveal delay={0.2}>
            <p className="text-[18px] text-[#8A8A8A] font-light mt-4">
              Movement becomes relationships. Not roads.
            </p>
          </ScrollReveal>
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

function ScenariosSection() {
  const scenarios = [
    { title: "I'm commuting.", why: "To fulfill economic and professional obligations with maximum reliability and minimal cognitive load." },
    { title: "I'm exploring Bengaluru.", why: "To experience serendipity, cultural immersion, and culinary discovery without strict temporal bounds." },
    { title: "I'm visiting elderly parents.", why: "To provide familial care, necessitating highly predictable and accessible transit options." },
    { title: "I'm cycling.", why: "For physical wellbeing and environmental consciousness, requiring atmospheric and safety-first environmental data." },
    { title: "I'm working remotely.", why: "Seeking acoustic comfort, high-quality connectivity, and atmospheric inspiration outside the traditional office." },
    { title: "I'm delivering goods.", why: "Executing a hyper-optimised logistical task reliant on micro-local access data and parking availability." }
  ];

  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#050505]">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-24">
        
        <div className="text-center max-w-[800px] mx-auto">
          <SectionHeading subtitle="Applied Scenarios" title="Real-World Examples" centered={true} />
          <ScrollReveal delay={0.2}>
            <p className="text-[18px] text-[#8A8A8A] font-light leading-relaxed mt-4">
              Observe why people move. The 'how' is merely a mechanical execution of the 'why'.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {scenarios.map((scen, idx) => (
            <ScrollReveal key={idx} delay={0.05 * idx}>
              <div className="p-8 border border-white/[0.03] bg-[#0A0A0A] rounded-[24px] h-full flex flex-col gap-4">
                <h4 className="text-[18px] text-white font-medium italic">"{scen.title}"</h4>
                <div className="mt-2 pt-4 border-t border-white/[0.05]">
                  <span className="text-[10px] text-[#6A6A6A] uppercase tracking-widest block mb-2">The Intention</span>
                  <p className="text-[15px] text-[#8A8A8A] font-light leading-relaxed">{scen.why}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}

function DesigningForPeopleSection() {
  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#080808]">
      <div className="max-w-[1000px] mx-auto flex flex-col gap-12 text-center items-center">
        <SectionHeading subtitle="Editorial" title="Designing for People" centered={true} />
        
        <ScrollReveal delay={0.2}>
          <p className="text-[28px] md:text-[36px] text-[#F2F2F0] font-serif-editorial font-light leading-tight max-w-[800px]">
            Cities should not optimise for vehicles. They should optimise for people.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <p className="text-[18px] text-[#8A8A8A] font-light leading-relaxed max-w-[700px] mt-6">
            Mobility is a human experience before it is an engineering problem. Designing technology that understands Walkability, Accessibility, Universal design, Green mobility, Public spaces, Safety, Health, and Inclusion ensures that intelligence serves civilisation, not just infrastructure.
          </p>
        </ScrollReveal>
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
            The Future of Human Mobility
          </h2>
        </ScrollReveal>
        
        <div className="flex flex-col gap-8">
          <ScrollReveal delay={0.4}>
            <p className="text-[20px] md:text-[24px] text-[#A0A0A0] font-light leading-relaxed">
              Future mobility will not be defined by faster vehicles. It will be defined by better understanding.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.5}>
            <p className="text-[18px] text-[#8A8A8A] font-light leading-relaxed">
              Technology should understand purpose, context, environment, community, wellbeing, and opportunity before suggesting movement.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.6}>
            <div className="mt-12 p-8 border border-white/[0.05] rounded-[24px] bg-white/[0.02]">
              <p className="text-[20px] md:text-[28px] text-white font-serif-editorial font-light leading-relaxed">
                The future belongs to intelligence that helps people move through life rather than simply across maps.
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

export default function HumanMobilityPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-[#F2F2F0] font-sans selection:bg-white/20 selection:text-white pt-16">
      <HeroSection />
      <StoryOfMovementSection />
      <WhatIsSection />
      <WhyPeopleMoveSection />
      <ScienceOfMovementSection />
      <LivingSystemSection />
      <PatternsSection />
      <ScenariosSection />
      <DesigningForPeopleSection />
      <FutureSection />
    </main>
  );
}
