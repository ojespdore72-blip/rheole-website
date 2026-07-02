"use client";

import React from "react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import { 
  BookOpen,
  Code2,
  Workflow,
  Cpu,
  Server,
  Scale,
  FlaskConical,
  Lightbulb,
  HelpCircle,
  Rocket,
  ShieldCheck,
  Lock,
  Activity,
  Layers,
  Database,
  Network,
  Eye,
  GitBranch,
  Timer,
  TerminalSquare,
  Brain
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
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#A0A0A0] font-medium">Rheole Research • Publications</span>
          </div>
        </ScrollReveal>
        
        <ScrollReveal delay={0.2}>
          <h1 className="text-[64px] md:text-[96px] lg:text-[110px] text-[#F2F2F0] font-serif-editorial font-light leading-[0.95] tracking-tight max-w-[1000px]">
            Engineering Notes
          </h1>
          <p className="text-[20px] md:text-[24px] text-[#8A8A8A] font-light mt-6 tracking-wide">
            The Thinking Behind Every System.
          </p>
        </ScrollReveal>
        
        <div className="flex flex-col gap-8 mt-12 w-full max-w-[700px]">
          <ScrollReveal delay={0.4}>
            <p className="text-[22px] md:text-[28px] text-[#A0A0A0] font-light leading-relaxed">
              Every architecture reflects a philosophy. Every API reflects a decision.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.5}>
            <p className="text-[18px] text-[#6A6A6A] font-light leading-relaxed">
              Engineering is not only writing code. Engineering is continuously balancing simplicity, performance, privacy, reliability, scalability, and user experience. Great products are built through thoughtful engineering decisions, not accidental implementation.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function NotebookSection() {
  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#050505]">
      <div className="max-w-[1000px] mx-auto flex flex-col gap-16 text-center items-center">
        <SectionHeading subtitle="Editorial" title="The Notebook" centered={true} />
        
        <ScrollReveal delay={0.2}>
          <p className="text-[28px] md:text-[40px] text-[#F2F2F0] font-serif-editorial font-light leading-tight">
            Every line of code begins with a question.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <p className="text-[18px] text-[#8A8A8A] font-light leading-relaxed max-w-[700px] mt-6">
            Rheole documents engineering thinking rather than simply publishing finished systems. The decisions that shape Spatial Intelligence are continuously debated, tested, and refined. This is a living journal of how we think, design, and evolve.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

function EngineeringPhilosophySection() {
  const principles = [
    { t: "Build for decades, not demos.", d: "Systems must outlive the trends they are born into." },
    { t: "Architecture before optimisation.", d: "Make it right, then make it fast." },
    { t: "Performance is a feature.", d: "Latency destroys immersion. Speed is UX." },
    { t: "Security is an architectural decision.", d: "It cannot be bolted on later." },
    { t: "Privacy by design.", d: "We cannot lose what we never collected." },
    { t: "Systems over features.", d: "Features break. Systems scale." },
    { t: "Interfaces should disappear.", d: "Technology should feel natural, not demanding." },
    { t: "Reliability over cleverness.", d: "Smart code is unmaintainable code." },
    { t: "Scalability through simplicity.", d: "Complexity is the enemy of scale." }
  ];

  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#080808]">
      <div className="max-w-[1000px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="flex flex-col gap-8">
          <SectionHeading subtitle="Foundational Tenets" title="Engineering Philosophy" centered={false} />
          
          <ScrollReveal delay={0.2}>
            <p className="text-[20px] text-[#A0A0A0] font-light leading-relaxed">
              We design software for humans, powered by an uncompromising technical foundation.
            </p>
          </ScrollReveal>
        </div>
        
        <div className="flex flex-col gap-4">
          {principles.map((principle, idx) => (
            <ScrollReveal key={idx} delay={0.05 * idx}>
              <div className="flex flex-col gap-1 p-4 border-l-2 border-white/[0.1] hover:border-[#4F6EF7]/50 transition-colors bg-white/[0.01]">
                <span className="text-[16px] text-[#F2F2F0] font-medium">{principle.t}</span>
                <span className="text-[14px] text-[#8A8A8A] font-light">{principle.d}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function SystemThinkingSection() {
  const relationships = [
    { left: "Discovery", right: "Context" },
    { left: "Context", right: "Environment" },
    { left: "Navigation", right: "Spatial Intelligence" },
    { left: "Connect", right: "Presence" },
    { left: "Ambient AI", right: "Every System" }
  ];

  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#050505]">
      <div className="max-w-[1000px] mx-auto flex flex-col gap-16 text-center items-center">
        <SectionHeading subtitle="Architectural Mindset" title="System Thinking" centered={true} />

        <ScrollReveal delay={0.2}>
          <p className="text-[18px] text-[#8A8A8A] font-light leading-relaxed max-w-[700px] mx-auto">
            Rheole is built as interconnected systems instead of isolated features. Features solve a single problem; systems adapt to countless problems dynamically.
          </p>
        </ScrollReveal>

        <div className="flex flex-col gap-6 mt-8 w-full max-w-[600px]">
          {relationships.map((rel, idx) => (
            <ScrollReveal key={idx} delay={0.1 * idx}>
              <div className="flex items-center justify-between p-6 border border-white/[0.05] rounded-2xl bg-[#0A0A0A]">
                <span className="text-[16px] text-[#F2F2F0] font-medium w-1/3 text-right">{rel.left}</span>
                <div className="flex-1 flex justify-center px-4">
                  <div className="h-[1px] w-full bg-white/[0.1] relative">
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0A0A0A] px-2 text-[10px] text-[#6A6A6A] uppercase tracking-widest">Depends Upon</div>
                  </div>
                </div>
                <span className="text-[16px] text-[#4F6EF7] font-medium w-1/3 text-left">{rel.right}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function DesignDecisionsSection() {
  const decisions = [
    {
      q: "Why Supabase & PostgreSQL?",
      a: "PostgreSQL provides uncompromising relational integrity and spatial extensions (PostGIS). Supabase wraps this in a developer-friendly ecosystem, allowing us to maintain architectural purity while accelerating delivery."
    },
    {
      q: "Why Next.js & React?",
      a: "The App Router fundamentally shifts the boundaries of client and server. By pushing heavy lifting to the server, we can deliver rich, interactive UI components with minimal client-side JS overhead."
    },
    {
      q: "Why Edge Functions?",
      a: "Spatial intelligence requires ultra-low latency. Reasoning must happen geographically close to the user to make real-time environmental context feel instantaneous."
    },
    {
      q: "Why Row Level Security (RLS)?",
      a: "Privacy must be enforced at the database level. RLS ensures that even if application logic fails, data cannot be accessed by unauthorized entities."
    }
  ];

  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#080808]">
      <div className="max-w-[1000px] mx-auto flex flex-col gap-16">
        <SectionHeading subtitle="Technical Choices" title="Design Decisions" centered={false} />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {decisions.map((dec, idx) => (
             <ScrollReveal key={idx} delay={0.05 * idx}>
              <div className="p-8 h-full bg-[#050505] border border-white/[0.05] rounded-xl hover:border-white/[0.1] transition-all flex flex-col gap-4">
                <h4 className="text-[18px] text-white font-medium">{dec.q}</h4>
                <p className="text-[14px] text-[#8A8A8A] font-light leading-relaxed">{dec.a}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ArchitectureSection() {
  const layers = [
    { t: "Presentation Layer", d: "Next.js React Client, Framer Motion, Tailwind", icon: <TerminalSquare className="w-5 h-5"/> },
    { t: "Experience Layer", d: "Next.js Server Components, Edge Routing", icon: <Layers className="w-5 h-5"/> },
    { t: "Intelligence Layer", d: "Reasoning Models, Context Engine", icon: <Brain className="w-5 h-5"/> },
    { t: "Spatial Layer", d: "Relationship Engine, Environmental Graphs", icon: <Network className="w-5 h-5"/> },
    { t: "Data Layer", d: "PostgreSQL, PostGIS, Realtime Subscriptions", icon: <Database className="w-5 h-5"/> },
    { t: "Security Layer", d: "Row Level Security, Supabase Auth", icon: <Lock className="w-5 h-5"/> },
    { t: "Infrastructure Layer", d: "Vercel Edge Network, Distributed Databases", icon: <Server className="w-5 h-5"/> }
  ];

  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#050505]">
      <div className="max-w-[1000px] mx-auto flex flex-col gap-16">
        <div className="text-center">
          <SectionHeading subtitle="System Architecture" title="Architecture Explained" centered={true} />
        </div>

        <div className="flex flex-col gap-4 max-w-[700px] mx-auto w-full">
          {layers.map((layer, idx) => (
            <ScrollReveal key={idx} delay={0.1 * idx}>
              <div className="flex items-center gap-6 p-6 bg-white/[0.02] border border-white/[0.05] rounded-2xl">
                <div className="p-3 bg-white/[0.05] rounded-full text-[#4F6EF7]">
                  {layer.icon}
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[16px] text-[#F2F2F0] font-medium">{layer.t}</span>
                  <span className="text-[14px] text-[#8A8A8A] font-light">{layer.d}</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function TradeOffsSection() {
  const tradeoffs = [
    { left: "Performance", right: "Flexibility" },
    { left: "Caching", right: "Freshness" },
    { left: "Privacy", right: "Personalisation" },
    { left: "Realtime", right: "Battery" },
    { left: "Latency", right: "Accuracy" },
    { left: "Complexity", right: "Maintainability" },
    { left: "Automation", right: "User Control" }
  ];

  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#080808]">
      <div className="max-w-[1000px] mx-auto flex flex-col gap-16 text-center items-center">
        <SectionHeading subtitle="Balancing Act" title="Engineering Trade-offs" centered={true} />
        
        <ScrollReveal delay={0.2}>
          <p className="text-[18px] text-[#8A8A8A] font-light leading-relaxed max-w-[700px]">
            Engineering involves choices. A perfect system in one dimension is catastrophically broken in another. We document these trade-offs to remain intellectually honest about our constraints.
          </p>
        </ScrollReveal>

        <div className="flex flex-wrap justify-center gap-6 mt-8 max-w-[800px]">
          {tradeoffs.map((t, idx) => (
             <ScrollReveal key={idx} delay={0.05 * idx}>
              <div className="flex items-center gap-4 px-6 py-3 border border-white/[0.08] rounded-full bg-white/[0.02]">
                <span className="text-[15px] text-[#E0E0E0]">{t.left}</span>
                <Scale className="w-4 h-4 text-[#4F6EF7]/60" />
                <span className="text-[15px] text-[#E0E0E0]">{t.right}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperimentsSection() {
  const experiments = [
    "New routing algorithms.",
    "Context modelling.",
    "Environmental sensing.",
    "Realtime collaboration.",
    "Distributed reasoning.",
    "Offline intelligence."
  ];

  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#050505]">
      <div className="max-w-[1000px] mx-auto flex flex-col lg:flex-row gap-20">
        <div className="lg:w-1/2 flex flex-col justify-center gap-8">
          <SectionHeading subtitle="Active Research" title="Experiments" centered={false} />
          <ScrollReveal delay={0.2}>
            <p className="text-[18px] text-[#8A8A8A] font-light leading-relaxed">
              Experimentation is essential to innovation. We clearly distinguish shipped ideas from active research to maintain trust in our production systems.
            </p>
          </ScrollReveal>
        </div>
        
        <div className="lg:w-1/2">
          <div className="p-8 border border-white/[0.05] rounded-[24px] bg-[#0A0A0A] flex flex-col gap-4 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <FlaskConical className="w-32 h-32" />
            </div>
            <h4 className="text-[13px] text-[#6A6A6A] font-medium uppercase tracking-widest mb-2 relative z-10">Currently Testing</h4>
            <div className="flex flex-col gap-3 relative z-10">
              {experiments.map((exp, idx) => (
                <div key={idx} className="flex items-center gap-4 border-b border-white/[0.05] pb-3">
                  <Activity className="w-4 h-4 text-[#4F6EF7]" />
                  <span className="text-[15px] text-[#A0A0A0] font-light">{exp}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LearnedSection() {
  const lessons = [
    { t: "Simple systems scale better.", d: "Over-engineered abstractions crumble under real-world load." },
    { t: "Observability matters.", d: "You cannot fix what you cannot see happening in production." },
    { t: "Clarity over complexity.", d: "Users value an understandable system more than a hyper-optimised opaque one." },
    { t: "Latency is UX.", d: "Small latency improvements have outsized psychological effects on perceived quality." }
  ];

  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#080808]">
      <div className="max-w-[1000px] mx-auto flex flex-col gap-16">
        <div className="text-center">
          <SectionHeading subtitle="Retrospective" title="What We Learned" centered={true} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
          {lessons.map((lesson, idx) => (
             <ScrollReveal key={idx} delay={0.1 * idx}>
              <div className="p-8 h-full bg-[#050505] border border-white/[0.05] rounded-xl flex flex-col gap-3">
                <h4 className="text-[18px] text-white font-medium">{lesson.t}</h4>
                <p className="text-[14px] text-[#8A8A8A] font-light leading-relaxed">{lesson.d}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function OpenQuestionsSection() {
  const questions = [
    "How should Ambient AI behave completely offline?",
    "How can explanations remain simple while reasoning graphs grow exponentially more complex?",
    "How should highly interconnected systems gracefully degrade during partial outages?",
    "How can privacy continuously improve while contextual intelligence requires richer data?"
  ];

  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#050505]">
      <div className="max-w-[1000px] mx-auto flex flex-col gap-16 text-center items-center">
        <SectionHeading subtitle="Intellectual Honesty" title="Open Questions" centered={true} />
        
        <ScrollReveal delay={0.2}>
          <p className="text-[18px] text-[#8A8A8A] font-light leading-relaxed max-w-[700px]">
            We encourage curiosity rather than claiming certainty. These are the unanswered engineering challenges we are actively discussing.
          </p>
        </ScrollReveal>

        <div className="flex flex-col gap-6 mt-8 max-w-[800px] w-full text-left">
          {questions.map((q, idx) => (
             <ScrollReveal key={idx} delay={0.1 * idx}>
              <div className="flex items-start gap-4 p-6 bg-white/[0.02] border border-white/[0.05] rounded-2xl">
                <HelpCircle className="w-6 h-6 text-[#4F6EF7] shrink-0 mt-0.5" />
                <p className="text-[18px] text-[#F2F2F0] font-light leading-relaxed">{q}</p>
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
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-white/[0.02] rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-[800px] mx-auto flex flex-col items-center text-center relative z-10">
        <ScrollReveal>
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#6A6A6A] font-medium mb-12 block">Engineering Roadmap</span>
        </ScrollReveal>
        
        <ScrollReveal delay={0.2}>
          <h2 className="text-[40px] md:text-[64px] text-[#F2F2F0] font-serif-editorial font-light leading-[1.1] tracking-tight mb-16">
            Future Work
          </h2>
        </ScrollReveal>
        
        <div className="flex flex-col gap-8">
          <ScrollReveal delay={0.4}>
            <p className="text-[20px] md:text-[24px] text-[#A0A0A0] font-light leading-relaxed">
              Engineering is continuous evolution. We are actively charting paths toward distributed intelligence, offline-first architectures, and extreme edge computing.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.6}>
            <div className="mt-12 p-8 border border-white/[0.05] rounded-[24px] bg-white/[0.02]">
              <p className="text-[20px] md:text-[28px] text-white font-serif-editorial font-light leading-relaxed">
                Engineering is not just about writing code. It is about making thoughtful decisions that users may never notice, but benefit from every day.
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

export default function EngineeringNotesPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-[#F2F2F0] font-sans selection:bg-white/20 selection:text-white pt-16">
      <HeroSection />
      <NotebookSection />
      <EngineeringPhilosophySection />
      <SystemThinkingSection />
      <DesignDecisionsSection />
      <ArchitectureSection />
      <TradeOffsSection />
      <ExperimentsSection />
      <LearnedSection />
      <OpenQuestionsSection />
      <FutureSection />
    </main>
  );
}
