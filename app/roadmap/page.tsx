"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import { 
  Map, 
  Compass, 
  Workflow, 
  Layers, 
  Search, 
  Lightbulb, 
  Users, 
  CalendarDays, 
  Activity,
  ArrowRight,
  ChevronDown,
  CheckCircle2,
  ChevronRight,
  FlaskConical,
  BarChart3,
  Network
} from "lucide-react";
import Link from "next/link";

// -----------------------------------------------------------------------------------
// DATA CONSTANTS (For extreme high density)
// -----------------------------------------------------------------------------------

const currentFocus = [
  { title: "Platform Refinement", purpose: "Enhancing core stability.", impact: "Zero-latency interactions across global nodes.", progress: "85%", why: "Stability is a prerequisite for intelligence." },
  { title: "Developer Platform", purpose: "Expanding SDK surface area.", impact: "Simplifying third-party spatial integrations.", progress: "92%", why: "Empowering developers scales the ecosystem exponentially." },
  { title: "Spatial Intelligence", purpose: "Deepening indoor geometry mapping.", impact: "Sub-meter accuracy in dense urban structures.", progress: "70%", why: "True spatial awareness requires structural nuance." },
  { title: "Security Architecture", purpose: "Next-gen zero-trust tokens.", impact: "Absolute cryptographic session integrity.", progress: "88%", why: "Trust cannot be compromised as AI capabilities expand." },
  { title: "Performance Engine", purpose: "Optimizing ML inference at the edge.", impact: "Reducing battery consumption on mobile devices.", progress: "65%", why: "Intelligence must be invisible and lightweight." },
  { title: "Realtime Platform", purpose: "Scaling socket mesh to 10M concurrents.", impact: "Global synchronized state awareness.", progress: "75%", why: "The world changes instantly; applications must follow." }
];

const comingNext = [
  { title: "Advanced Spatial Intelligence", why: "To understand temporal changes in physical structures.", solves: "Prevents routing users through temporary construction zones.", fits: "Closes the gap between map data and reality." },
  { title: "Enterprise Platform", why: "To federate trust across massive organizations.", solves: "Allows universities to manage 50,000 spatial identities securely.", fits: "Extends Ambient Intelligence into institutional workflows." },
  { title: "Maps Evolution", why: "To transition from flat vectors to living 3D environments.", solves: "Provides intuitive context rather than abstract lines.", fits: "Forms the visual foundation of the spatial graph." },
  { title: "Context Engine Expansion", why: "To correlate weather, traffic, and intent simultaneously.", solves: "Prevents recommending outdoor venues during sudden rain.", fits: "Makes intelligence genuinely predictive." },
  { title: "Offline Intelligence", why: "To maintain capability in dead zones.", solves: "Ensures critical navigation works in subway systems.", fits: "Intelligence should not depend solely on the cloud." }
];

const futureExplorations = [
  "Spatial AR integration for persistent digital overlays.",
  "Ambient Wearables that interpret physical environments through haptics.",
  "Smart Cities API for municipal infrastructure synchronization.",
  "Urban Digital Twins to simulate crowd dynamics.",
  "Autonomous Mobility routing protocols.",
  "Environmental Intelligence predicting hyper-local climate shifts.",
  "Personal Knowledge Spaces bound to physical locations.",
  "Local Digital Identity verifiable without internet access.",
  "Predictive Urban Systems anticipating transit congestion.",
  "Future Human Interfaces moving entirely beyond screens."
];

const timeline = [
  { year: "2026", phase: "Platform Foundation", desc: "Establishing the core spatial graph, real-time engines, and strict privacy architecture." },
  { year: "2027", phase: "Platform Expansion", desc: "Broadening geographic coverage, enhancing edge inference, and introducing structural context." },
  { year: "2028", phase: "Developer Ecosystem", desc: "Empowering third-party creators to weave Ambient Spatial Intelligence into their own apps." },
  { year: "2029", phase: "Enterprise Intelligence", desc: "Scaling trust, federated identity, and organizational mapping for institutions." },
  { year: "2030", phase: "Global Spatial Intelligence", desc: "A fully realized, living digital twin of human movement, intention, and physical reality." },
  { year: "Beyond", phase: "Ambient Computing", desc: "Technology dissolves entirely into the environment. Interfaces disappear. Understanding remains." }
];

const faqs = [
  { q: "Why do roadmap dates change?", a: "We prioritize getting it right over getting it done by an arbitrary date. Research often reveals superior architectural paths that require pivoting." },
  { q: "How do you decide priorities?", a: "We evaluate based on a matrix of User Value, Long-term Vision alignment, Research Evidence, and Security implications." },
  { q: "Can users request features?", a: "Yes. Our Community Compass framework aggregates qualitative feedback from developers and users to inform our research pipeline." },
  { q: "What happens if research changes direction?", a: "We communicate transparently via the Changelog. If an exploratory idea proves unviable, we explain exactly why it was deprecated." },
  { q: "How often is the roadmap updated?", a: "The roadmap is treated as a living document and is updated continuously as milestones are reached or research phases conclude." },
  { q: "How can developers contribute?", a: "Developers can shape the roadmap by participating in early SDK previews and providing architectural feedback on our community forums." },
  { q: "Why are some ideas exploratory?", a: "Ambient Spatial Intelligence requires solving problems that have never been solved. Exploratory ideas represent fundamental research, not guaranteed engineering." },
  { q: "Do you compromise on privacy for speed?", a: "Never. Privacy is a foundational architectural constraint. No feature ships if it cannot mathematically guarantee user sovereignty." },
  { q: "How are enterprise needs balanced with consumer features?", a: "The underlying spatial and intelligence engines are identical. Enterprise features simply expand the trust federation capabilities of the core platform." },
  { q: "Will older SDKs be deprecated?", a: "We maintain absolute backward compatibility for as long as structurally possible. Deprecations follow a strict, multi-year communication pipeline." },
  { q: "What is a 'Living Roadmap'?", a: "It is a philosophical commitment to evolving through continuous learning rather than marching blindly toward rigid, outdated feature lists." },
  { q: "How does the research pipeline work?", a: "Observation leads to Research, which becomes an Experiment, then a Prototype, Internal Testing, Developer Preview, and finally a Public Release." },
  { q: "How is performance prioritized?", a: "Performance is treated as a core feature. An intelligent capability is discarded if it introduces unacceptable latency or battery drain." },
  { q: "Do you publish your academic research?", a: "We periodically release whitepapers on our spatial algorithms and privacy-preserving machine learning techniques in our Research portal." },
  { q: "How do I know what shipped recently?", a: "The Changelog section of this roadmap tracks all deployed capabilities, categorized strictly by their technological impact." }
];

const knowledgeCards = [
  { title: "Living Roadmap™", category: "Rheole Concept", desc: "A roadmap that evolves through research, engineering, and community learning rather than rigid deadlines." },
  { title: "Vision Pipeline™", category: "Rheole Concept", desc: "The complete, transparent journey from an abstract idea to a rigorously tested, shipped capability." },
  { title: "Research-Driven Development™", category: "Rheole Concept", desc: "Every major feature begins as a fundamental research question before it ever becomes an engineering ticket." },
  { title: "Platform Evolution™", category: "Rheole Concept", desc: "We focus on continuous, holistic structural refinement rather than isolated, flashy product releases." },
  { title: "Community Compass™", category: "Rheole Concept", desc: "A transparent framework showing exactly how developer and user feedback influences our internal priorities." }
];

// -----------------------------------------------------------------------------------
// REUSABLE COMPONENTS
// -----------------------------------------------------------------------------------

function SectionHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="flex flex-col gap-6 max-w-[800px]">
      <ScrollReveal>
        <h2 className="text-[40px] md:text-[56px] text-[#F2F2F0] font-serif-editorial font-light leading-[1.1] tracking-tight">
          {title}
        </h2>
      </ScrollReveal>
      {subtitle && (
        <ScrollReveal delay={0.1}>
          <p className="text-[18px] text-[#A0A0A0] font-light leading-relaxed">
            {subtitle}
          </p>
        </ScrollReveal>
      )}
    </div>
  );
}

function InsightNote({ title, category, desc }: { title: string; category: string; desc: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-3 p-6 bg-[#030303] border border-white/[0.08] hover:border-white/[0.2] transition-colors rounded-[8px] h-full group">
      <div className="flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-[#C5A880]/50 group-hover:bg-[#C5A880] transition-colors" />
        <span className="text-[9px] uppercase tracking-[0.2em] text-[#6A6A6A] font-medium font-mono">{category}</span>
      </div>
      <h4 className="text-[16px] text-[#F2F2F0] font-medium tracking-wide">{title}</h4>
      <p className="text-[13px] text-[#8A8A8A] font-light leading-relaxed">{desc}</p>
    </div>
  );
}

// -----------------------------------------------------------------------------------
// SECTIONS
// -----------------------------------------------------------------------------------

function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-6 md:px-12 pt-20 bg-[#000000] overflow-hidden">
      {/* Subtle topographic map background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      
      <div className="max-w-[1200px] mx-auto z-10 flex flex-col gap-16 w-full mt-12">
        
        <div className="flex flex-col gap-8">
          <ScrollReveal>
            <div className="flex items-center gap-4">
              <Compass size={14} className="text-[#A0A0A0]" />
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#A0A0A0] font-medium font-mono">Resources / Roadmap</span>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <h1 className="text-[56px] md:text-[88px] text-[#F2F2F0] font-serif-editorial font-light leading-[0.95] tracking-tight max-w-[900px]">
              The future is built one thoughtful decision at a time.
            </h1>
          </ScrollReveal>
          
          <ScrollReveal delay={0.4}>
            <p className="text-[20px] md:text-[24px] text-[#A0A0A0] font-light leading-relaxed max-w-[700px]">
              We develop Rheole through rigorous continuous research, careful engineering, and community feedback rather than chasing industry trends.
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.5}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.1] border border-white/[0.1] rounded-[8px] overflow-hidden w-full">
            {[
              { label: "Platform Version", value: "v2.1.0 Architecture" },
              { label: "Development Phase", value: "Platform Expansion" },
              { label: "Current Focus", value: "Spatial Intelligence" },
              { label: "Last Updated", value: "October 2026" }
            ].map((stat, i) => (
              <div key={i} className="bg-[#050505] p-6 flex flex-col gap-3">
                <span className="text-[11px] uppercase tracking-widest text-[#6A6A6A] font-mono">{stat.label}</span>
                <span className="text-[18px] text-[#F2F2F0] font-medium font-serif-editorial">{stat.value}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function RoadmapPhilosophySection() {
  const principles = [
    { title: "Long-term thinking.", desc: "We optimize for decades, not quarters." },
    { title: "Research before implementation.", desc: "Proving the mathematics before writing the code." },
    { title: "Quality over quantity.", desc: "Fewer features executed with absolute precision." },
    { title: "Human-centred development.", desc: "Technology should serve human interaction, not replace it." },
    { title: "Privacy-first decisions.", desc: "Trust cannot be retrofitted. It must be foundational." },
    { title: "Platform consistency.", desc: "Every API and SDK shares one coherent design language." },
    { title: "Engineering excellence.", desc: "Zero tolerance for technical debt in critical paths." },
    { title: "Accessibility.", desc: "Intelligence must be usable by everyone, regardless of ability." }
  ];

  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#030303] border-y border-white/[0.05]">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-24">
        
        <SectionHeader 
          title="Roadmap Philosophy." 
          subtitle="Roadmaps should explain direction, not promises. Technology evolves. Research evolves. User needs evolve. The roadmap represents our current understanding of where Ambient Spatial Intelligence is heading." 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {principles.map((p, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <div className="flex flex-col gap-4 border-t border-white/[0.2] pt-6 group hover:border-[#C5A880] transition-colors">
                <h3 className="text-[18px] text-[#F2F2F0] font-medium">{p.title}</h3>
                <p className="text-[14px] text-[#8A8A8A] font-light leading-relaxed">{p.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}

function CurrentFocusSection() {
  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#000000]">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-20">
        
        <SectionHeader 
          title="Current Focus." 
          subtitle="The major initiatives currently under active, rigorous development across our engineering and research teams." 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {currentFocus.map((focus, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="flex flex-col gap-6 p-8 bg-[#050505] border border-white/[0.08] rounded-[12px] h-full">
                <div className="flex justify-between items-center border-b border-white/[0.1] pb-4">
                  <h3 className="text-[20px] text-[#F2F2F0] font-serif-editorial">{focus.title}</h3>
                  <span className="text-[12px] font-mono text-[#10B981] px-3 py-1 bg-[#10B981]/10 rounded-full">In Progress</span>
                </div>
                
                <div className="flex flex-col gap-4 text-[14px]">
                  <div><span className="text-[#6A6A6A] font-mono text-[10px] uppercase block mb-1">Purpose</span><span className="text-[#F2F2F0]">{focus.purpose}</span></div>
                  <div><span className="text-[#6A6A6A] font-mono text-[10px] uppercase block mb-1">Expected Impact</span><span className="text-[#A0A0A0] font-light">{focus.impact}</span></div>
                  <div><span className="text-[#6A6A6A] font-mono text-[10px] uppercase block mb-1">Why It Matters</span><span className="text-[#A0A0A0] font-light italic">{focus.why}</span></div>
                </div>
                
                <div className="mt-auto pt-6">
                  <div className="flex justify-between text-[10px] font-mono text-[#6A6A6A] mb-2">
                    <span>Progress</span>
                    <span>{focus.progress}</span>
                  </div>
                  <div className="w-full h-[2px] bg-white/[0.1] rounded-full overflow-hidden">
                    <div className="h-full bg-[#F2F2F0]" style={{ width: focus.progress }} />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}

function ComingNextSection() {
  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#030303] border-y border-white/[0.05]">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-20">
        
        <SectionHeader 
          title="Coming Next." 
          subtitle="The next wave of capabilities transitioning from the research pipeline into active engineering. We don't just say 'coming soon'; we explain exactly why these capabilities must exist." 
        />

        <div className="flex flex-col gap-8">
          {comingNext.map((next, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 p-8 md:p-12 bg-[#000000] border-l-2 border-white/[0.2] hover:border-[#C5A880] transition-colors">
                <div className="md:col-span-1">
                  <h3 className="text-[24px] text-[#F2F2F0] font-serif-editorial">{next.title}</h3>
                </div>
                <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-6 text-[14px]">
                  <div className="flex flex-col gap-2"><span className="text-[#6A6A6A] font-mono text-[10px] uppercase">Why it exists</span><span className="text-[#A0A0A0] font-light leading-relaxed">{next.why}</span></div>
                  <div className="flex flex-col gap-2"><span className="text-[#6A6A6A] font-mono text-[10px] uppercase">User problem solved</span><span className="text-[#A0A0A0] font-light leading-relaxed">{next.solves}</span></div>
                  <div className="flex flex-col gap-2"><span className="text-[#6A6A6A] font-mono text-[10px] uppercase">Strategic fit</span><span className="text-[#A0A0A0] font-light leading-relaxed">{next.fits}</span></div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}

function FutureExplorationSection() {
  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#000000]">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        <div className="lg:col-span-5 flex flex-col gap-8">
          <SectionHeader title="Future Exploration." />
          <ScrollReveal delay={0.1}>
            <p className="text-[18px] text-[#A0A0A0] font-light leading-relaxed">
              These represent fundamental research directions, not engineering commitments. These are the ambitious, unsolved problems we are actively exploring to push the boundaries of Ambient Computing.
            </p>
          </ScrollReveal>
        </div>

        <div className="lg:col-span-7">
          <ScrollReveal delay={0.2}>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
              {futureExplorations.map((exp, i) => (
                <li key={i} className="flex items-start gap-4 text-[15px] text-[#F2F2F0] font-light leading-relaxed">
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-[#C5A880] shrink-0" />
                  {exp}
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}

function LongTermVisionSection() {
  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#030303] border-y border-white/[0.05]">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-24">
        
        <div className="text-center">
          <SectionHeader title="The Long-Term Vision." />
        </div>

        <div className="relative flex flex-col md:flex-row justify-between items-start md:items-center gap-12 md:gap-0">
          <div className="hidden md:block absolute top-8 left-0 right-0 h-[1px] bg-white/[0.1] -z-10" />
          
          {timeline.map((stage, i) => (
            <ScrollReveal key={i} delay={i * 0.1} className="relative z-10 flex flex-col md:items-center gap-6 group w-full md:w-1/6">
              <div className="w-16 h-16 rounded-full bg-[#000000] border border-white/[0.2] flex items-center justify-center text-[#F2F2F0] group-hover:border-[#C5A880] transition-colors font-serif-editorial text-[18px]">
                {stage.year}
              </div>
              <div className="md:text-center flex flex-col gap-2">
                <span className="text-[14px] text-[#F2F2F0] font-medium">{stage.phase}</span>
                <span className="text-[12px] text-[#8A8A8A] font-light leading-relaxed">{stage.desc}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}

function ResearchPipelineSection() {
  const steps = [
    "Observation", "Research", "Experiment", "Prototype", 
    "Internal Testing", "Developer Preview", "Public Release", "Continuous Improvement"
  ];

  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#000000]">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        
        <div className="grid grid-cols-1 gap-4">
          {knowledgeCards.slice(0, 3).map((card, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <InsightNote {...card} />
            </ScrollReveal>
          ))}
        </div>

        <div className="flex flex-col gap-10">
          <SectionHeader 
            title="The Research Pipeline." 
            subtitle="Shipping is only one stage. We believe in showing exactly how an abstract idea moves through rigorous scientific evaluation before it ever reaches your application." 
          />
          
          <ScrollReveal delay={0.2}>
            <div className="flex flex-col gap-2 pl-4 border-l border-white/[0.2]">
              {steps.map((step, i) => (
                <div key={i} className="flex items-center gap-4 py-3 group">
                  <div className="w-2 h-2 rounded-full bg-[#4A4A4A] group-hover:bg-[#F2F2F0] transition-colors -ml-[21px]" />
                  <span className="text-[15px] text-[#A0A0A0] group-hover:text-[#F2F2F0] transition-colors font-mono tracking-wide">{step}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}

function HowWePrioritiseSection() {
  const criteria = [
    "User Value.", "Long-term Vision.", "Research Evidence.", "Engineering Complexity.",
    "Security.", "Privacy.", "Performance.", "Accessibility.", "Reliability.",
    "Developer Experience.", "Consistency."
  ];

  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#030303] border-y border-white/[0.05]">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-20">
        
        <SectionHeader 
          title="How We Prioritise." 
          subtitle="Every potential roadmap item is passed through a dense matrix of evaluation criteria. A feature may be highly requested, but if it compromises privacy or structural performance, it will not be built." 
        />

        <div className="flex flex-wrap gap-4">
          {criteria.map((crit, i) => (
            <ScrollReveal key={i} delay={i * 0.02}>
              <div className="px-6 py-4 border border-white/[0.1] bg-[#000000] text-[#F2F2F0] text-[15px] font-medium tracking-wide flex items-center gap-3">
                <CheckCircle2 size={14} className="text-[#6A6A6A]" />
                {crit}
              </div>
            </ScrollReveal>
          ))}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {knowledgeCards.slice(3, 5).map((card, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <InsightNote {...card} />
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#000000]">
      <div className="max-w-[1000px] mx-auto flex flex-col gap-16">
        <ScrollReveal>
          <h2 className="text-[32px] md:text-[48px] text-[#F2F2F0] font-serif-editorial font-light tracking-tight text-center">
            Roadmap FAQ
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <div className="flex flex-col gap-4 p-8 bg-[#030303] border border-white/[0.05] h-full hover:bg-white/[0.02] transition-colors">
                <h4 className="text-[16px] text-[#F2F2F0] font-medium leading-snug">{faq.q}</h4>
                <p className="text-[14px] text-[#8A8A8A] font-light leading-relaxed mt-auto">{faq.a}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ComparisonSection() {
  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#030303] border-y border-white/[0.05]">
      <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.1] border border-white/[0.1] rounded-[8px] overflow-hidden">
        <div className="bg-[#000000] p-12 flex flex-col gap-8">
          <h3 className="text-[12px] uppercase tracking-[0.2em] text-[#6A6A6A] font-medium font-mono">Traditional Roadmaps</h3>
          <ul className="flex flex-col gap-6 text-[15px] text-[#8A8A8A] font-light">
            <li className="flex items-center gap-4"><span className="text-[#4A4A4A]">-</span> Endless feature lists.</li>
            <li className="flex items-center gap-4"><span className="text-[#4A4A4A]">-</span> Rigid, fixed dates.</li>
            <li className="flex items-center gap-4"><span className="text-[#4A4A4A]">-</span> Limited strategic context.</li>
            <li className="flex items-center gap-4"><span className="text-[#4A4A4A]">-</span> Purely product-centric.</li>
            <li className="flex items-center gap-4"><span className="text-[#4A4A4A]">-</span> Little explanation of 'Why'.</li>
          </ul>
        </div>
        <div className="bg-[#050505] p-12 flex flex-col gap-8">
          <h3 className="text-[12px] uppercase tracking-[0.2em] text-[#F2F2F0] font-medium font-mono">Rheole Roadmap</h3>
          <ul className="flex flex-col gap-6 text-[15px] text-[#F2F2F0] font-light">
            <li className="flex items-center gap-4"><span className="text-white">+</span> Vision-first architecture.</li>
            <li className="flex items-center gap-4"><span className="text-white">+</span> Research-driven evolution.</li>
            <li className="flex items-center gap-4"><span className="text-white">+</span> Context-rich explanations.</li>
            <li className="flex items-center gap-4"><span className="text-white">+</span> Long-term generational thinking.</li>
            <li className="flex items-center gap-4"><span className="text-white">+</span> Transparent community evolution.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function FutureSection() {
  return (
    <section className="relative w-full py-[200px] px-6 md:px-12 bg-[#000000] overflow-hidden">
      <div className="max-w-[800px] mx-auto text-center flex flex-col gap-12 relative z-10">
        <ScrollReveal>
          <h2 className="text-[40px] md:text-[64px] lg:text-[80px] text-[#F2F2F0] font-serif-editorial font-light leading-[1.05] tracking-tight">
            The Future of Rheole.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="text-[18px] md:text-[22px] text-[#A0A0A0] font-light leading-relaxed flex flex-col gap-8">
            <p>
              Rheole is not simply building software. We are building an entirely new relationship between people, physical places, and continuous intelligence.
            </p>
            <p>
              Every release, every research paper, and every API is one step toward that future. The roadmap is a shared journey between our engineering teams, developers, and the community.
            </p>
            <p className="text-[#F2F2F0] font-medium font-serif-editorial italic mt-4 text-[24px]">
              This isn't a feature checklist. It is the evolution of Ambient Spatial Intelligence.
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

export default function RoadmapPage() {
  return (
    <div className="relative w-full bg-[#000000] text-[#F2F2F0] selection:bg-white/20 selection:text-[#F2F2F0]">
      <HeroSection />
      <RoadmapPhilosophySection />
      <CurrentFocusSection />
      <ComingNextSection />
      <FutureExplorationSection />
      <LongTermVisionSection />
      <ResearchPipelineSection />
      <HowWePrioritiseSection />
      <FaqSection />
      <ComparisonSection />
      <FutureSection />
    </div>
  );
}
