"use client";

import React from "react";
import ScrollReveal from "@/components/ScrollReveal";

// -----------------------------------------------------------------------------------
// KNOWLEDGE BLOCK COMPONENT
// -----------------------------------------------------------------------------------
function KnowledgeBlock({ category, title, children }: { category: string; title?: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-3 p-6 md:p-8 bg-neutral-900/40 border-l border-neutral-700/50 my-12 relative overflow-hidden group">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-neutral-700/50 to-transparent" />
      <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 font-medium font-sans">
        {category}
      </span>
      {title && <h5 className="text-[16px] text-neutral-200 font-serif-editorial font-medium">{title}</h5>}
      <div className="text-[14px] text-neutral-400 font-light leading-relaxed font-sans">
        {children}
      </div>
    </div>
  );
}

// -----------------------------------------------------------------------------------
// UNIQUE CONCEPT COMPONENT
// -----------------------------------------------------------------------------------
function ConceptBlock({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex flex-col gap-4 border-b border-neutral-800 pb-8 mb-8">
      <h4 className="text-[20px] md:text-[24px] text-neutral-200 font-serif-editorial tracking-tight">{title}</h4>
      <p className="text-[15px] md:text-[17px] text-neutral-400 font-light leading-relaxed max-w-[800px]">
        {description}
      </p>
    </div>
  );
}

// -----------------------------------------------------------------------------------
// PAGE SECTIONS
// -----------------------------------------------------------------------------------

function HeroSection() {
  return (
    <section className="relative w-full min-h-[90vh] flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-32 pb-16">
      <div className="max-w-[1200px] w-full mx-auto flex flex-col gap-12 z-20">
        <ScrollReveal>
          <div className="flex flex-col gap-2">
            <span className="text-[11px] uppercase tracking-[0.3em] text-neutral-500 font-medium font-sans">Rheole Research</span>
            <span className="text-[12px] text-neutral-600 font-serif-editorial italic">The Science Behind Ambient Spatial Intelligence</span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <h1 className="text-[56px] md:text-[96px] lg:text-[120px] text-neutral-100 font-serif-editorial font-light leading-[0.95] tracking-tight max-w-[1000px]">
            The future begins with better questions.
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <div className="flex flex-col md:flex-row gap-12 md:gap-24 mt-12 md:mt-24 border-t border-neutral-800 pt-12">
            <div className="flex-1 text-[20px] md:text-[28px] text-neutral-300 font-light leading-snug font-serif-editorial">
              Every meaningful technological breakthrough begins by asking new questions rather than merely improving old answers.
            </div>
            <div className="flex-1 text-[16px] md:text-[18px] text-neutral-500 font-light leading-relaxed font-sans max-w-[500px]">
              Rheole researches how people understand and interact with the physical world. We explore the deep connections between intent, environment, human behavior, and computation to build systems that quietly understand.
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function PhilosophySection() {
  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 lg:px-24 bg-neutral-950">
      <div className="max-w-[900px] mx-auto flex flex-col gap-16 text-center">
        <ScrollReveal>
          <div className="text-[32px] md:text-[48px] text-neutral-200 font-serif-editorial font-light leading-tight">
            Technology changes.<br />
            <span className="text-neutral-500">Research creates the future.</span><br />
            Products evolve.<br />
            <span className="text-neutral-500">Ideas endure.</span>
          </div>
        </ScrollReveal>
        
        <ScrollReveal delay={0.2}>
          <p className="text-[18px] md:text-[22px] text-neutral-400 font-light leading-relaxed max-w-[700px] mx-auto">
            Rheole is built upon continuous exploration into how humans understand places, movement, communities, and intelligence. Research is not a department. It is the foundation of every decision.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

function VisionSection() {
  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 lg:px-24 border-t border-neutral-900">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">
        
        <div className="md:col-span-4 flex flex-col gap-6 sticky top-32 self-start">
          <ScrollReveal>
            <h2 className="text-[32px] md:text-[40px] text-neutral-200 font-serif-editorial tracking-tight leading-tight">
              Our Research Vision
            </h2>
            <div className="w-12 h-[1px] bg-neutral-600 mt-4" />
          </ScrollReveal>
        </div>

        <div className="md:col-span-8 flex flex-col gap-12">
          <ScrollReveal>
            <p className="text-[20px] md:text-[28px] text-neutral-300 font-light leading-relaxed font-serif-editorial">
              We operate at the intersection of incredibly dense, historically separated domains. True innovation rarely happens in the center of a discipline; it emerges when boundaries overlap.
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={0.1}>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-8">
              {['People', 'Places', 'Movement', 'Artificial Intelligence', 'Urban Systems', 'Human Behaviour', 'Design', 'Privacy', 'Computing'].map((item, i) => (
                <div key={i} className="flex flex-col gap-2">
                  <div className="w-1.5 h-1.5 bg-neutral-700 rounded-full" />
                  <span className="text-[15px] text-neutral-400 tracking-wide font-sans">{item}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <KnowledgeBlock category="Research Notes" title="The Overlap Hypothesis">
            Our teams do not work in isolation. Behavioral psychologists sit alongside privacy engineers and urban computing specialists. We believe that to build spatial intelligence, we must first understand how cities breathe, how people navigate anxiety in crowds, and how algorithms can interpret physical ambiance.
          </KnowledgeBlock>
        </div>

      </div>
    </section>
  );
}

function DisciplinesSection() {
  const disciplines = [
    { title: "Ambient Spatial Intelligence", desc: "The foundational capability of systems to understand physical environments and contextualize them for human needs without explicit prompting." },
    { title: "Intent Intelligence", desc: "Deciphering the underlying goals of human behavior—moving beyond what a user types into a search bar to what they actually seek in the real world." },
    { title: "Context Intelligence", desc: "The study of temporal, spatial, and relational variables that alter the meaning of a place or situation at any given moment." },
    { title: "Human-Centered AI", desc: "Designing machine learning systems that prioritize cognitive ease, transparency, and human agency over sheer predictive power." },
    { title: "Urban Computing", desc: "Analyzing cities as dynamic, computable ecosystems rather than static geographical grids." },
    { title: "Environmental Intelligence", desc: "Understanding the atmospheric and physical qualities of spaces—noise, light, density, and mood." },
    { title: "Mobility Science", desc: "The physics and psychology of how entities move through physical space, optimizing for flow, safety, and serendipity." },
    { title: "Behavioural Psychology", desc: "Studying how environments, recommendations, and interfaces influence human decision-making and spatial exploration." },
    { title: "Decision Science", desc: "Mapping the heuristics people use to choose destinations and social interactions in complex urban environments." },
    { title: "Digital Wellbeing", desc: "Creating interfaces that reduce screen time, lower cognitive load, and encourage active participation in the physical world." },
    { title: "Human Presence", desc: "Understanding the emotional and social weight of physical proximity and serendipitous encounters." },
    { title: "Privacy Engineering", desc: "Pioneering new cryptographic and systemic approaches to process deep spatial context without centralizing sensitive human data." },
  ];

  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 lg:px-24 bg-neutral-950">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-24">
        
        <ScrollReveal>
          <div className="max-w-[700px] flex flex-col gap-6">
            <h2 className="text-[40px] md:text-[56px] text-neutral-200 font-serif-editorial tracking-tight leading-[1.1]">
              The Disciplines We Explore
            </h2>
            <p className="text-[18px] text-neutral-500 font-light leading-relaxed">
              To build the future of ambient computing, we pull from specialized scientific domains, weaving them together to understand the full spectrum of human spatial experience.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {disciplines.map((d, i) => (
            <ScrollReveal key={i} delay={(i % 3) * 0.1}>
              <div className="flex flex-col gap-4 group">
                <h3 className="text-[18px] text-neutral-300 font-medium tracking-tight group-hover:text-white transition-colors">{d.title}</h3>
                <div className="w-8 h-[1px] bg-neutral-800 group-hover:w-16 transition-all duration-500" />
                <p className="text-[14px] text-neutral-500 font-light leading-relaxed">
                  {d.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <KnowledgeBlock category="Field Insights" title="Interdisciplinary Impact">
          Our mobility science breakthroughs directly inform our privacy engineering. By understanding that human movement patterns are highly predictable, our privacy teams develop noise-injection algorithms that preserve aggregate urban intelligence while mathematically obscuring individual trajectories.
        </KnowledgeBlock>

      </div>
    </section>
  );
}

function ThemesSection() {
  const themes = [
    { q: "How do people make decisions?", impact: "Influences our recommendation architecture to account for cognitive biases and situational fatigue." },
    { q: "How do cities communicate?", impact: "Shapes our data pipelines to capture the 'pulse' of a neighborhood—its living, breathing state." },
    { q: "How should AI explain itself?", impact: "Drives our Transparent Intelligence Model, ensuring the platform can always justify its nudges." },
    { q: "What makes technology feel trustworthy?", impact: "Informs UI design, reducing latency and creating deterministic behaviors in stochastic environments." },
    { q: "How can computing disappear into everyday life?", impact: "Guides our shift away from active screen-time toward ambient, peripheral notifications." },
    { q: "Can AI understand places instead of only prompts?", impact: "The core of our spatial indexing—turning coordinates into contextual narratives." },
    { q: "How does environment shape behaviour?", impact: "Helps us route people not just efficiently, but through spaces that positively affect their mood." },
    { q: "Can recommendations become transparent?", impact: "Fosters user trust by explicitly showing the variables (weather, crowdedness, past preferences) used." },
    { q: "Can cities become understandable?", impact: "Democratizes local knowledge, making massive urban complexity legible to newcomers." },
    { q: "How do meaningful human encounters happen?", impact: "The foundation of our Connect pillar, engineering serendipity without surveillance." }
  ];

  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 lg:px-24 border-y border-neutral-900">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row gap-24">
        
        <div className="md:w-1/3 flex flex-col gap-8 sticky top-32 self-start">
          <ScrollReveal>
            <h2 className="text-[32px] md:text-[48px] text-neutral-200 font-serif-editorial tracking-tight leading-tight">
              Research Themes
            </h2>
            <p className="text-[16px] text-neutral-500 font-light leading-relaxed mt-4">
              We anchor our long-term investments around persistent, difficult questions. We do not seek definitive answers; we seek evolving understandings that guide our engineering.
            </p>
          </ScrollReveal>
        </div>

        <div className="md:w-2/3 flex flex-col gap-12">
          {themes.map((theme, i) => (
            <ScrollReveal key={i} delay={0.1}>
              <div className="flex flex-col gap-4 border-l border-neutral-800 pl-6 md:pl-10 relative">
                <div className="absolute top-2 left-[-4px] w-2 h-2 rounded-full bg-neutral-700" />
                <h3 className="text-[20px] md:text-[26px] text-neutral-300 font-serif-editorial italic font-light">
                  {theme.q}
                </h3>
                <div className="flex flex-col gap-1 mt-2">
                  <span className="text-[10px] uppercase tracking-widest text-neutral-600 font-medium">Potential Impact</span>
                  <p className="text-[15px] text-neutral-400 font-light leading-relaxed">
                    {theme.impact}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}

          <KnowledgeBlock category="Current Investigations" title="The Cognitive Load Project">
            We are actively running longitudinal studies on how traditional navigation apps increase cortisol levels in dense urban environments. Our hypothesis is that giving fewer, highly contextual directions reduces stress compared to constant micro-instructions.
          </KnowledgeBlock>
        </div>

      </div>
    </section>
  );
}

function ProductLifecycleSection() {
  const steps = [
    "Observation", "Research", "Experiment", "Prototype", "Validation", "Engineering", "Product", "Continuous Learning"
  ];

  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 lg:px-24 bg-neutral-950">
      <div className="max-w-[1000px] mx-auto flex flex-col gap-24 text-center items-center">
        
        <ScrollReveal>
          <h2 className="text-[32px] md:text-[48px] text-neutral-200 font-serif-editorial tracking-tight leading-tight">
            From Research to Product
          </h2>
          <p className="text-[18px] text-neutral-500 font-light max-w-[600px] mt-6 mx-auto">
            Every Rheole capability begins as a research question. We do not build features looking for problems. We study human interaction with the physical world and engineer solutions.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mt-8">
            {steps.map((step, i) => (
              <React.Fragment key={i}>
                <div className="text-[14px] md:text-[18px] text-neutral-300 font-medium tracking-wide">
                  {step}
                </div>
                {i < steps.length - 1 && (
                  <div className="text-neutral-700 hidden md:flex items-center text-[20px]">
                    ↓
                  </div>
                )}
                {i < steps.length - 1 && (
                  <div className="text-neutral-700 flex md:hidden items-center text-[16px] w-full justify-center my-2">
                    ↓
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </ScrollReveal>

        <div className="w-full text-left mt-12">
          <KnowledgeBlock category="Engineering Perspective">
            The transition from 'Validation' to 'Engineering' is deliberately slow. We build throwaway prototypes to test spatial algorithms in the real world before committing them to our core platform architecture. This ensures our foundational intelligence layer remains unpolluted by short-term feature experiments.
          </KnowledgeBlock>
        </div>

      </div>
    </section>
  );
}

function ConceptsSection() {
  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 lg:px-24 border-t border-neutral-900">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row gap-24">
        
        <div className="md:w-1/3 flex flex-col gap-8 sticky top-32 self-start">
          <ScrollReveal>
            <h2 className="text-[32px] md:text-[48px] text-neutral-200 font-serif-editorial tracking-tight leading-tight">
              Proprietary Concepts
            </h2>
            <p className="text-[16px] text-neutral-500 font-light leading-relaxed mt-4">
              These evolving paradigms represent Rheole's unique intellectual property in spatial computing. They are presented as evolving research directions rather than finished technologies.
            </p>
          </ScrollReveal>
        </div>

        <div className="md:w-2/3 flex flex-col">
          <ScrollReveal delay={0.1}>
            <ConceptBlock 
              title="Ambient Spatial Intelligence™" 
              description="The emerging discipline combining spatial understanding, context, behaviour, and AI. It is the ability of an intelligent system to parse the physical world as deeply as it parses text." 
            />
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <ConceptBlock 
              title="Living World Theory™" 
              description="The hypothesis that cities should be understood as continuously evolving systems rather than static maps. A map is a picture; the Living World is an organism." 
            />
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <ConceptBlock 
              title="Human Context Framework™" 
              description="A conceptual framework describing how intent, environment, time, relationships, and movement combine into contextual understanding. It turns coordinates into meaning." 
            />
          </ScrollReveal>
          <ScrollReveal delay={0.4}>
            <ConceptBlock 
              title="Transparent Intelligence Model™" 
              description="A research initiative exploring explainable AI for everyday decision-making, ensuring that when the platform suggests a route or a place, the user understands exactly why." 
            />
          </ScrollReveal>
          <ScrollReveal delay={0.5}>
            <ConceptBlock 
              title="Urban Cognition™" 
              description="The study of how humans perceive, navigate, and emotionally understand cities. It bridges urban planning, cognitive science, and interface design." 
            />
          </ScrollReveal>
          
          <KnowledgeBlock category="Definitions" title="Concept vs Feature">
            At Rheole, a 'Concept' is an intellectual framework we use to understand the world. A 'Feature' is the software instantiation of that concept. Concepts outlive features.
          </KnowledgeBlock>
        </div>

      </div>
    </section>
  );
}

function OpenQuestionsSection() {
  const questions = [
    "Can AI understand intention without constant prompting?",
    "Can navigation optimise wellbeing instead of only travel time?",
    "Can local knowledge become living intelligence?",
    "Can neighbourhoods become digitally understandable?",
    "Can recommendations explain themselves?",
    "Can technology encourage curiosity?",
    "Can ambient computing remain private?",
    "Can software reduce cognitive load instead of increasing it?"
  ];

  return (
    <section className="relative w-full py-[200px] px-6 md:px-12 lg:px-24 bg-neutral-950">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center text-center gap-16">
        
        <ScrollReveal>
          <span className="text-[11px] uppercase tracking-[0.3em] text-neutral-500 font-medium">Unresolved Frontiers</span>
          <h2 className="text-[40px] md:text-[64px] text-neutral-200 font-serif-editorial tracking-tight leading-[1.1] mt-6 max-w-[800px] mx-auto">
            The questions we continue to explore.
          </h2>
        </ScrollReveal>

        <div className="flex flex-col gap-8 md:gap-12 mt-12 w-full max-w-[900px]">
          {questions.map((q, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <div className="text-[24px] md:text-[36px] text-neutral-400 font-serif-editorial font-light hover:text-white transition-colors duration-500 cursor-default">
                {q}
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="w-full text-left max-w-[900px] mt-16">
          <KnowledgeBlock category="Did You Know?" title="The Power of the Unresolved">
            We intentionally keep our most difficult questions visible to our entire engineering team. A solved problem creates software; an unresolved question creates breakthroughs.
          </KnowledgeBlock>
        </div>

      </div>
    </section>
  );
}

function PrinciplesSection() {
  const principles = [
    { title: "Research before assumptions.", desc: "We rely on data, observation, and spatial science, not intuition." },
    { title: "Human-centered thinking.", desc: "Technology must bend to human psychology, not the other way around." },
    { title: "Explainable intelligence.", desc: "A black box is inherently untrustworthy in the physical world." },
    { title: "Evidence over trends.", desc: "We do not chase cycles. We build foundational infrastructure." },
    { title: "Privacy by design.", desc: "Anonymity is a mathematical requirement, not an afterthought." },
    { title: "Long-term thinking.", desc: "Cities evolve slowly. Our platform architecture is built for decades." },
    { title: "Interdisciplinary collaboration.", desc: "Code alone cannot solve spatial and social complexities." },
    { title: "Continuous experimentation.", desc: "We validate relentlessly in the physical world." },
    { title: "Engineering with purpose.", desc: "We write code to connect humans, not to capture attention." },
    { title: "Technology serving people.", desc: "The platform's goal is to become invisible, allowing reality to take focus." }
  ];

  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 lg:px-24 border-y border-neutral-900">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-24">
        
        <ScrollReveal>
          <div className="max-w-[600px] flex flex-col gap-6">
            <h2 className="text-[32px] md:text-[48px] text-neutral-200 font-serif-editorial tracking-tight leading-tight">
              Research Principles
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          {principles.map((p, i) => (
            <ScrollReveal key={i} delay={(i % 2) * 0.1}>
              <div className="flex flex-col gap-3">
                <h4 className="text-[18px] text-neutral-200 font-medium tracking-tight">{p.title}</h4>
                <p className="text-[15px] text-neutral-500 font-light leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <KnowledgeBlock category="AI Transparency" title="The Explainability Mandate">
          We mandate that every AI model deployed must have an auditable decision path. If the platform routes a user around a specific block, the system must be able to output exactly which signals (e.g., foot traffic variance, recent weather shifts) caused that decision.
        </KnowledgeBlock>

      </div>
    </section>
  );
}

function ConclusionSection() {
  return (
    <section className="relative w-full py-[200px] px-6 md:px-12 lg:px-24">
      <div className="max-w-[1000px] mx-auto flex flex-col items-center text-center gap-12">
        
        <ScrollReveal>
          <span className="text-[11px] uppercase tracking-[0.3em] text-neutral-500 font-medium">The Future of Ambient Spatial Intelligence</span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="text-[28px] md:text-[48px] lg:text-[64px] text-neutral-200 font-serif-editorial font-light leading-[1.1] tracking-tight">
            Computing will become increasingly aware of the physical world.
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="text-[20px] md:text-[28px] text-neutral-400 font-light leading-relaxed max-w-[800px] mt-8 space-y-6">
            <p>Cities will become intelligent ecosystems.</p>
            <p>Artificial Intelligence will become contextual rather than reactive.</p>
            <p>Technology will quietly understand rather than constantly interrupt.</p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <p className="text-[16px] md:text-[20px] text-neutral-500 font-sans font-light leading-relaxed max-w-[700px] mt-12 border-t border-neutral-800 pt-12">
            Ambient Spatial Intelligence will become a new discipline combining AI, urban systems, human behavior, and design. Rheole is building the foundation for this future.
          </p>
        </ScrollReveal>

        <div className="w-full text-left mt-16">
          <KnowledgeBlock category="Future Vision">
            The ultimate test of our research is not how often people use our software, but how effortlessly they move through the world while using it. Success is when the technology entirely disappears.
          </KnowledgeBlock>
        </div>

      </div>
    </section>
  );
}

// -----------------------------------------------------------------------------------
// MAIN PAGE EXPORT
// -----------------------------------------------------------------------------------

export default function ResearchPage() {
  return (
    <div className="relative w-full bg-[#030303] text-neutral-200 selection:bg-neutral-800 selection:text-white font-sans">
      <HeroSection />
      <PhilosophySection />
      <VisionSection />
      <DisciplinesSection />
      <ThemesSection />
      <ProductLifecycleSection />
      <ConceptsSection />
      <OpenQuestionsSection />
      <PrinciplesSection />
      <ConclusionSection />
    </div>
  );
}
