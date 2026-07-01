"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import { 
  BookOpen, 
  Map, 
  Layers, 
  Code2, 
  Network, 
  ShieldCheck, 
  Lightbulb, 
  Compass, 
  Search, 
  ArrowRight,
  ChevronRight,
  BookMarked,
  CheckCircle2,
  Workflow,
  GraduationCap
} from "lucide-react";
import Link from "next/link";

// -----------------------------------------------------------------------------------
// DATA CONSTANTS (For extreme high density)
// -----------------------------------------------------------------------------------

const learningPaths = [
  { step: "Getting Started", time: "15 min", difficulty: "Beginner", desc: "Setting up your environment, API keys, and making your first spatial request." },
  { step: "Platform Fundamentals", time: "45 min", difficulty: "Beginner", desc: "Understanding the Living World graph, resources, and event paradigms." },
  { step: "Authentication", time: "60 min", difficulty: "Intermediate", desc: "Implementing Zero Trust, passkeys, and the Identity Graph." },
  { step: "SDKs", time: "30 min", difficulty: "Beginner", desc: "Integrating native modules into iOS, Android, and Web clients." },
  { step: "REST APIs", time: "45 min", difficulty: "Intermediate", desc: "Mastering resource-oriented endpoints and pagination." },
  { step: "Realtime APIs", time: "90 min", difficulty: "Advanced", desc: "Handling ambient socket meshes and state synchronization." },
  { step: "Spatial Computing", time: "120 min", difficulty: "Advanced", desc: "Mapping indoor geometry, POIs, and spatial physics." },
  { step: "Context Intelligence", time: "60 min", difficulty: "Intermediate", desc: "Weaving weather, intent, and crowd density into UI." },
  { step: "Deployment", time: "30 min", difficulty: "Intermediate", desc: "Securing keys, setting up webhooks, and pre-flight checks." },
  { step: "Production", time: "45 min", difficulty: "Advanced", desc: "Observability, graceful degradation, and error handling." },
  { step: "Scaling", time: "120 min", difficulty: "Expert", desc: "Managing millions of concurrent realtime connections globally." }
];

const guideCategories = [
  { name: "Quick Starts", desc: "Get to 'Hello World' in under 5 minutes." },
  { name: "Tutorials", desc: "Step-by-step builds of full applications." },
  { name: "Migration Guides", desc: "Moving from legacy spatial providers to Rheole." },
  { name: "Production Guides", desc: "Pre-launch checklists and architecture reviews." },
  { name: "Deployment Guides", desc: "CI/CD integration and environment management." },
  { name: "Troubleshooting", desc: "Resolving common friction points and anomalies." },
  { name: "Integration Guides", desc: "Connecting Rheole with Stripe, Vercel, or AWS." },
  { name: "Security Guides", desc: "Implementing cryptographic best practices." },
  { name: "Architecture Guides", desc: "Deep dives into system topology and data flow." },
  { name: "Performance Guides", desc: "Optimizing bundle sizes and network latency." },
  { name: "Accessibility Guides", desc: "Making spatial apps usable for everyone." }
];

const bestPractices = [
  { title: "API Design", desc: "Always request the minimum required payload using sparse fieldsets." },
  { title: "Error Handling", desc: "Surface actionable, human-readable errors rather than raw HTTP codes." },
  { title: "Authentication", desc: "Use short-lived JWTs and rotate refresh tokens continuously." },
  { title: "Permissions", desc: "Request location access contextually, not immediately on app launch." },
  { title: "Performance", desc: "Batch telemetry events to reduce battery drain on mobile clients." },
  { title: "Accessibility", desc: "Ensure all spatial maps have screen-reader compatible text fallbacks." },
  { title: "Realtime Architecture", desc: "Implement exponential backoff for websocket reconnections." },
  { title: "Caching", desc: "Aggressively cache static Place geometry at the edge." },
  { title: "Offline Support", desc: "Store the last known spatial graph locally for subway navigation." },
  { title: "Scalability", desc: "Decouple read-heavy UI from write-heavy telemetry pipelines." },
  { title: "Observability", desc: "Inject trace IDs across all microservices for distributed debugging." },
  { title: "Privacy", desc: "Fuzz precise coordinates when storing historical telemetry data." },
  { title: "Context-aware UX", desc: "Suppress non-critical notifications when the user is driving." },
  { title: "Developer Experience", desc: "Mirror staging exactly to production to prevent launch surprises." }
];

const examplesList = [
  "Travel Application", "University Platform", "Smart City", "Healthcare",
  "Retail", "Mobility", "Tourism", "Education", "Hospitality", 
  "Logistics", "Navigation", "Community Apps", "Business Discovery"
];

const knowledgeCards = [
  { title: "Knowledge Graph™", category: "Proprietary Concept", desc: "Every guide, API, and concept is interconnected, helping developers discover related topics naturally rather than through rigid menus." },
  { title: "Guided Learning™", category: "Proprietary Concept", desc: "Documentation organized as structured learning journeys. We take you from day one to senior architect." },
  { title: "Contextual Docs™", category: "Proprietary Concept", desc: "Relevant documentation surfaces automatically based on the SDK you are currently building with." },
  { title: "Living Documentation™", category: "Proprietary Concept", desc: "Our docs evolve with the platform in real-time, maintaining strict version histories and backward compatibility." },
  { title: "Developer Compass™", category: "Proprietary Concept", desc: "A personalized guide that recommends your next concepts, guides, and examples based on your learning progress." }
];

const faqs = [
  { q: "Do I need to read the architecture guides to build an app?", a: "No, you can start building immediately with Quick Starts. Architecture guides exist for when you are ready to scale or optimize." },
  { q: "Is the documentation versioned?", a: "Yes. Every API reference and guide is tied to a specific semantic version of the platform. You can toggle between versions globally." },
  { q: "How do I request a new example?", a: "You can submit an example request via the Community Knowledge repository on GitHub, or vote on existing requests." },
  { q: "Are the tutorials available in multiple languages?", a: "Yes, our core tutorials automatically toggle code snippets between TypeScript, Python, Swift, and Kotlin based on your preference." },
  { q: "What is the Developer Compass?", a: "If you log in, the documentation tracks your progress and intelligently recommends the next logical concept to learn." }
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

function InsightNote({ title, category, children }: { title: string; category: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-3 p-6 bg-[#030303] border border-white/[0.08] hover:border-[#4F6EF7]/40 transition-colors rounded-[8px] h-full group relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[100px] h-[100px] bg-gradient-to-bl from-[#4F6EF7]/10 to-transparent rounded-full blur-2xl pointer-events-none group-hover:from-[#4F6EF7]/20 transition-all duration-700" />
      <div className="flex items-center gap-2">
        <BookOpen size={12} className="text-[#6A6A6A] group-hover:text-[#4F6EF7] transition-colors" />
        <span className="text-[9px] uppercase tracking-[0.2em] text-[#6A6A6A] font-medium font-mono">{category}</span>
      </div>
      <h4 className="text-[16px] text-[#F2F2F0] font-medium tracking-wide">{title}</h4>
      <p className="text-[13px] text-[#8A8A8A] font-light leading-relaxed z-10">{children}</p>
    </div>
  );
}

// -----------------------------------------------------------------------------------
// SECTIONS
// -----------------------------------------------------------------------------------

function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-6 md:px-12 pt-20 bg-[#000000] overflow-hidden">
      {/* Subtle library/grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:30px_30px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_20%,transparent_100%)] pointer-events-none" />
      
      <div className="max-w-[1200px] mx-auto z-10 flex flex-col gap-16 w-full mt-12">
        
        <div className="flex flex-col gap-8">
          <ScrollReveal>
            <div className="flex items-center gap-4">
              <BookMarked size={14} className="text-[#A0A0A0]" />
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#A0A0A0] font-medium font-mono">Resources / Documentation</span>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <h1 className="text-[56px] md:text-[88px] text-[#F2F2F0] font-serif-editorial font-light leading-[0.95] tracking-tight max-w-[900px]">
              Great software begins with understanding.
            </h1>
          </ScrollReveal>
          
          <ScrollReveal delay={0.4}>
            <p className="text-[20px] md:text-[24px] text-[#A0A0A0] font-light leading-relaxed max-w-[700px]">
              Documentation is not merely technical reference. It is a learning experience, a design philosophy, and the foundation for building intelligent applications.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.5}>
            <p className="text-[16px] text-[#6A6A6A] font-light leading-relaxed max-w-[600px]">
              The Rheole Documentation platform is designed to help developers move from curiosity to absolute engineering confidence through beautifully structured learning.
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.6}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.1] border border-white/[0.1] rounded-[8px] overflow-hidden w-full">
            {[
              { label: "Documentation Version", value: "v2.0" },
              { label: "Platform Version", value: "v2.1.0" },
              { label: "Published Guides", value: "350+" },
              { label: "Code Examples", value: "120+" },
              { label: "SDK Coverage", value: "100%" },
              { label: "API Coverage", value: "100%" },
              { label: "Search", value: "Global Semantic" },
              { label: "Last Updated", value: "Today" }
            ].map((stat, i) => (
              <div key={i} className="bg-[#030303] p-6 flex flex-col gap-3">
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

function PhilosophySection() {
  const principles = [
    { title: "Clarity over complexity.", desc: "We abstract infrastructure so you can focus on experience." },
    { title: "Examples before theory.", desc: "Show exactly how it works, then explain why." },
    { title: "Consistency over shortcuts.", desc: "No hacks. Every guide teaches scalable architecture." },
    { title: "Learning by building.", desc: "Tutorials end with functional, production-ready applications." },
    { title: "Progressive disclosure.", desc: "Start simple. Expose complexity only when requested." },
    { title: "Human-centred.", desc: "Written for exhausted developers, not robots." },
    { title: "Accessibility.", desc: "Keyboard navigable, screen-reader optimized reading." },
    { title: "Search-first learning.", desc: "Answers should be 50 milliseconds away." }
  ];

  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#020202] border-y border-white/[0.05]">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-24">
        
        <SectionHeader 
          title="Documentation Philosophy." 
          subtitle="Documentation should teach, not overwhelm. Knowledge should be logically organized, not buried. Every single page should make developers measurably more capable, not simply more informed." 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {principles.map((p, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <div className="flex flex-col gap-4 border-t border-white/[0.2] pt-6 group hover:border-[#4F6EF7] transition-colors">
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

function LearningPathsSection() {
  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#000000]">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-20">
        
        <SectionHeader 
          title="Learning Paths." 
          subtitle="Structured journeys designed to take you from your first API request to scaling a global spatial application." 
        />

        <div className="flex flex-col gap-4 pl-4 md:pl-8 border-l border-white/[0.1]">
          {learningPaths.map((path, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <div className="relative flex flex-col md:flex-row justify-between items-start md:items-center p-6 bg-[#050505] border border-white/[0.05] rounded-[8px] group hover:border-[#4F6EF7]/50 transition-colors">
                <div className="absolute -left-[29px] md:-left-[45px] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#000000] border-2 border-[#4A4A4A] group-hover:border-[#4F6EF7] transition-colors" />
                
                <div className="flex flex-col gap-2 mb-4 md:mb-0">
                  <div className="flex items-center gap-4">
                    <span className="text-[12px] font-mono text-[#6A6A6A]">Step {i + 1}</span>
                    <h3 className="text-[20px] text-[#F2F2F0] font-serif-editorial">{path.step}</h3>
                  </div>
                  <p className="text-[14px] text-[#8A8A8A] font-light">{path.desc}</p>
                </div>
                
                <div className="flex items-center gap-4">
                  <span className="text-[11px] uppercase tracking-widest text-[#A0A0A0] font-mono px-3 py-1 bg-white/[0.05] rounded">{path.difficulty}</span>
                  <span className="text-[12px] font-mono text-[#4A4A4A] flex items-center gap-2"><Clock size={12}/> {path.time}</span>
                  <ArrowRight size={16} className="text-[#4A4A4A] group-hover:text-[#4F6EF7] transition-colors ml-4 hidden md:block" />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}

function PlatformKnowledgeSection() {
  const categories = [
    "Platform", "Technology", "Research", "Developer Platform", "Resources",
    "Security", "AI", "Spatial Computing", "Context", "Navigation",
    "Places", "Communities", "Businesses", "Events", "Permissions", "Architecture"
  ];

  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#020202] border-y border-white/[0.05]">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        
        <div className="flex flex-col gap-8">
          <SectionHeader 
            title="Platform Knowledge." 
            subtitle="Every piece of documentation is highly interconnected. The Knowledge Graph links conceptual architecture directly to API implementation, allowing you to traverse seamlessly from high-level philosophy to code." 
          />
        </div>

        <div className="flex flex-wrap items-center justify-start lg:justify-end gap-3">
          <ScrollReveal delay={0.2} className="w-full flex flex-wrap gap-3">
            {categories.map((cat, i) => (
              <div key={i} className="px-5 py-2 border border-white/[0.1] bg-[#050505] text-[#A0A0A0] text-[13px] font-medium tracking-wide hover:bg-white/[0.05] transition-colors cursor-pointer rounded-full">
                {cat}
              </div>
            ))}
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}

function GuidesAndLibrarySection() {
  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#000000]">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        
        <div className="flex flex-col gap-12">
          <ScrollReveal>
            <h2 className="text-[32px] md:text-[48px] text-[#F2F2F0] font-serif-editorial font-light tracking-tight border-b border-white/[0.1] pb-6">
              Guides
            </h2>
          </ScrollReveal>
          
          <div className="flex flex-col gap-6">
            {guideCategories.map((guide, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="flex flex-col gap-1 group">
                  <h4 className="text-[16px] text-[#F2F2F0] font-medium flex items-center gap-2 group-hover:text-[#4F6EF7] transition-colors">
                    {guide.name}
                  </h4>
                  <p className="text-[14px] text-[#8A8A8A] font-light">{guide.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-12">
          <ScrollReveal>
            <h2 className="text-[32px] md:text-[48px] text-[#F2F2F0] font-serif-editorial font-light tracking-tight border-b border-white/[0.1] pb-6">
              Architecture Library
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={0.1}>
            <p className="text-[16px] text-[#A0A0A0] font-light leading-relaxed mb-6">
              Architecture matters. Before you write a single line of code, these premium educational chapters explain the systemic design philosophies behind Rheole. Understanding the 'why' makes the 'how' infinitely easier.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-2 gap-4">
            {knowledgeCards.slice(0, 4).map((card, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <InsightNote {...card} />
              </ScrollReveal>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

function BestPracticesSection() {
  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#020202] border-y border-white/[0.05]">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-16">
        
        <SectionHeader 
          title="Best Practices." 
          subtitle="A dense repository of actionable engineering standards curated directly by the team that built the platform." 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bestPractices.map((bp, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <div className="flex flex-col gap-3 p-6 bg-[#050505] border border-white/[0.05] h-full">
                <div className="flex items-center gap-3 mb-2">
                  <CheckCircle2 size={16} className="text-[#6A6A6A]" />
                  <h4 className="text-[16px] text-[#F2F2F0] font-medium">{bp.title}</h4>
                </div>
                <p className="text-[14px] text-[#8A8A8A] font-light leading-relaxed pl-7">{bp.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}

function ExamplesSection() {
  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#000000]">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-16">
        
        <SectionHeader 
          title="Examples & Open Source." 
          subtitle="Explore dozens of production-ready reference applications covering everything from Smart Cities to Retail logic. Every example teaches a distinct architectural pattern." 
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {examplesList.map((ex, i) => (
            <ScrollReveal key={i} delay={i * 0.02}>
              <div className="px-6 py-4 bg-[#030303] border border-white/[0.08] hover:bg-white/[0.05] transition-colors rounded-[8px] text-[14px] text-[#F2F2F0] font-medium flex items-center justify-between group cursor-pointer">
                {ex}
                <ArrowRight size={14} className="text-[#4A4A4A] group-hover:text-[#F2F2F0] transition-colors" />
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}

function CommunityAndSearchSection() {
  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#020202] border-y border-white/[0.05]">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
        
        <div className="flex flex-col gap-8">
          <ScrollReveal>
            <h2 className="text-[32px] md:text-[48px] text-[#F2F2F0] font-serif-editorial font-light tracking-tight">
              Community Knowledge
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-[16px] text-[#A0A0A0] font-light leading-relaxed">
              Our documentation continuously evolves through direct developer contributions, issue reporting, and shared knowledge. The community provides feedback, and the documentation adapts. 
            </p>
          </ScrollReveal>
        </div>

        <div className="flex flex-col gap-8">
          <ScrollReveal>
            <h2 className="text-[32px] md:text-[48px] text-[#F2F2F0] font-serif-editorial font-light tracking-tight">
              Search & Discovery
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-[16px] text-[#A0A0A0] font-light leading-relaxed mb-4">
              Discovering knowledge should feel effortless. Our Global Semantic Search anticipates your intent, surfacing not just exact matches, but contextually relevant architectural guides and learning recommendations based on your current project context.
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <div className="relative w-full">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6A6A6A]" />
              <div className="w-full h-12 bg-[#050505] border border-white/[0.1] rounded-full flex items-center px-12 text-[#6A6A6A] font-mono text-[13px]">
                Search documentation, API references, guides...
              </div>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-1">
                <kbd className="px-2 py-1 bg-white/[0.05] border border-white/[0.1] rounded text-[10px] font-mono text-[#A0A0A0]">⌘</kbd>
                <kbd className="px-2 py-1 bg-white/[0.05] border border-white/[0.1] rounded text-[10px] font-mono text-[#A0A0A0]">K</kbd>
              </div>
            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}

function ComparisonSection() {
  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#000000]">
      <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.1] border border-white/[0.1] rounded-[8px] overflow-hidden">
        <div className="bg-[#030303] p-12 flex flex-col gap-8">
          <h3 className="text-[12px] uppercase tracking-[0.2em] text-[#6A6A6A] font-medium font-mono">Traditional Documentation</h3>
          <ul className="flex flex-col gap-6 text-[15px] text-[#8A8A8A] font-light">
            <li className="flex items-center gap-4"><span className="text-[#4A4A4A]">-</span> Reference-first.</li>
            <li className="flex items-center gap-4"><span className="text-[#4A4A4A]">-</span> Static and isolated.</li>
            <li className="flex items-center gap-4"><span className="text-[#4A4A4A]">-</span> Entirely search dependent.</li>
            <li className="flex items-center gap-4"><span className="text-[#4A4A4A]">-</span> API-centric endpoints.</li>
            <li className="flex items-center gap-4"><span className="text-[#4A4A4A]">-</span> Fragmented knowledge.</li>
            <li className="flex items-center gap-4"><span className="text-[#4A4A4A]">-</span> Learning is optional.</li>
          </ul>
        </div>
        <div className="bg-[#0A0A0A] p-12 flex flex-col gap-8">
          <h3 className="text-[12px] uppercase tracking-[0.2em] text-[#F2F2F0] font-medium font-mono">Rheole Documentation</h3>
          <ul className="flex flex-col gap-6 text-[15px] text-[#F2F2F0] font-light">
            <li className="flex items-center gap-4"><span className="text-[#4F6EF7]">+</span> Learning-first.</li>
            <li className="flex items-center gap-4"><span className="text-[#4F6EF7]">+</span> Connected knowledge graph.</li>
            <li className="flex items-center gap-4"><span className="text-[#4F6EF7]">+</span> Guided, structured journeys.</li>
            <li className="flex items-center gap-4"><span className="text-[#4F6EF7]">+</span> Context-aware surfacing.</li>
            <li className="flex items-center gap-4"><span className="text-[#4F6EF7]">+</span> Architecture driven.</li>
            <li className="flex items-center gap-4"><span className="text-[#4F6EF7]">+</span> Continuously evolving.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function FutureSection() {
  return (
    <section className="relative w-full py-[200px] px-6 md:px-12 bg-[#020202] overflow-hidden">
      <div className="max-w-[800px] mx-auto text-center flex flex-col gap-12 relative z-10">
        <ScrollReveal>
          <h2 className="text-[40px] md:text-[64px] lg:text-[80px] text-[#F2F2F0] font-serif-editorial font-light leading-[1.05] tracking-tight">
            Continuous Learning.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="text-[18px] md:text-[22px] text-[#A0A0A0] font-light leading-relaxed flex flex-col gap-8">
            <p>
              Technology evolves. Documentation evolves. Developers evolve. Learning never ends.
            </p>
            <p className="text-[#F2F2F0] font-medium font-serif-editorial italic mt-4 text-[24px]">
              The best documentation grows perfectly alongside the platform—and the community that builds with it.
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

export default function DocumentationPage() {
  return (
    <div className="relative w-full bg-[#000000] text-[#F2F2F0] selection:bg-white/20 selection:text-[#F2F2F0]">
      <HeroSection />
      <PhilosophySection />
      <LearningPathsSection />
      <PlatformKnowledgeSection />
      <GuidesAndLibrarySection />
      <BestPracticesSection />
      <ExamplesSection />
      <CommunityAndSearchSection />
      <ComparisonSection />
      <FutureSection />
    </div>
  );
}
