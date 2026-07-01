"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import { 
  Network, 
  Braces, 
  ServerCog, 
  ArrowRight,
  Database,
  Cloud,
  Workflow,
  KeySquare,
  Compass,
  MapPin,
  Calendar,
  Users,
  Settings2,
  Cpu,
  Layers
} from "lucide-react";
import Link from "next/link";

// -----------------------------------------------------------------------------------
// REUSABLE COMPONENTS
// -----------------------------------------------------------------------------------

function ApiNote({ title, category, children }: { title: string; category: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-4 p-8 bg-[#000000] border border-white/[0.1] hover:border-white/[0.3] transition-colors rounded-none relative">
      <div className="absolute top-0 left-0 w-1 h-full bg-[#4F6EF7]/20" />
      <div className="flex items-center gap-3">
        <Braces size={14} className="text-[#6A6A6A]" />
        <span className="text-[10px] uppercase tracking-[0.2em] text-[#6A6A6A] font-medium font-mono">{category}</span>
      </div>
      <h4 className="text-[18px] text-[#F2F2F0] font-medium tracking-tight mt-2">{title}</h4>
      <div className="text-[14px] text-[#8A8A8A] leading-relaxed font-light">
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
    <section className="relative w-full min-h-[95vh] flex flex-col items-start justify-center px-6 md:px-12 pt-20 bg-[#000000] overflow-hidden">
      {/* Blueprint Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none" />
      
      <div className="max-w-[1200px] mx-auto z-10 flex flex-col items-start gap-12 w-full mt-12">
        <ScrollReveal>
          <div className="flex items-center gap-4">
            <div className="w-12 h-[1px] bg-white/[0.3]" />
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#A0A0A0] font-mono">Developer Platform / REST APIs</span>
          </div>
        </ScrollReveal>
        
        <ScrollReveal delay={0.2}>
          <h1 className="text-[56px] md:text-[88px] lg:text-[104px] text-[#F2F2F0] font-serif-editorial font-light leading-[0.95] tracking-tight max-w-[900px]">
            Every intelligent platform should be open.
          </h1>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
          <ScrollReveal delay={0.4}>
            <p className="text-[20px] md:text-[24px] text-[#A0A0A0] font-light leading-relaxed max-w-[500px]">
              Rheole's REST APIs enable applications, businesses, and services to interact with places, people, movement, and intelligence through consistent, predictable interfaces.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.5}>
            <p className="text-[16px] text-[#6A6A6A] font-light leading-relaxed max-w-[450px]">
              Developers build experiences. APIs connect ecosystems. This is the universal language that bridges Ambient Spatial Intelligence with the rest of the software world.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function OpenPlatformSection() {
  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#050505]">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        <div className="lg:col-span-5 flex flex-col gap-8">
          <ScrollReveal>
            <h2 className="text-[40px] md:text-[56px] text-[#F2F2F0] font-serif-editorial font-light leading-[1.1] tracking-tight">
              The Open Platform.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-[20px] text-[#8A8A8A] font-light leading-relaxed">
              REST APIs are the universal language of distributed software. They allow platforms to transcend their own boundaries.
            </p>
          </ScrollReveal>
        </div>

        <div className="lg:col-span-7 flex flex-col gap-10">
          <ScrollReveal delay={0.2}>
            <div className="text-[16px] text-[#A0A0A0] font-light leading-relaxed flex flex-col gap-6">
              <p>
                Applications should not merely consume information; they should participate in intelligent ecosystems. Every application, every backend, every cloud service, and every device can communicate with Rheole.
              </p>
              <p>
                This openness is governed by rigid consistency, reliability, and interoperability. We view our API architecture not as a collection of endpoints, but as a meticulously designed protocol for spatial understanding.
              </p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.3}>
            <div className="grid grid-cols-2 gap-4">
              <ApiNote title="Unified Resource Model™" category="Rheole Concept">
                Every API resource follows the exact same architectural language, eliminating guesswork when traversing different domains.
              </ApiNote>
              <ApiNote title="Adaptive Platform™" category="Rheole Concept">
                The platform evolves continuously and safely, preserving absolute compatibility for developers already in production.
              </ApiNote>
            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}

function PhilosophySection() {
  const principles = [
    { title: "Consistency", desc: "Uniform request structures and response schemas across every domain." },
    { title: "Predictability", desc: "No surprises. Standard HTTP methods always behave exactly as expected." },
    { title: "Human-Readable", desc: "Designed for engineers to understand without excessive documentation." },
    { title: "Stable Versioning", desc: "Evolving the platform without breaking existing integrations." },
    { title: "Meaningful Errors", desc: "Actionable responses that tell you exactly what went wrong and why." },
    { title: "Developer Trust", desc: "Uptime, transparency, and deprecation policies that respect your business." }
  ];

  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#000000] border-y border-white/[0.05]">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-20">
        
        <div className="text-center flex flex-col items-center gap-6">
          <ScrollReveal>
            <h2 className="text-[40px] md:text-[56px] text-[#F2F2F0] font-serif-editorial font-light leading-[1.1] tracking-tight">
              API Philosophy.
            </h2>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {principles.map((p, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <div className="flex flex-col gap-4 border-t border-white/[0.2] pt-6 group hover:border-[#4F6EF7] transition-colors">
                <h3 className="text-[20px] text-[#F2F2F0] font-medium">{p.title}</h3>
                <p className="text-[15px] text-[#8A8A8A] font-light leading-relaxed">{p.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}

function ResourceModelSection() {
  const resources = [
    { name: "Places", icon: <MapPin size={18} /> },
    { name: "Businesses", icon: <MapPin size={18} /> },
    { name: "Events", icon: <Calendar size={18} /> },
    { name: "Communities", icon: <Users size={18} /> },
    { name: "Navigation", icon: <Compass size={18} /> },
    { name: "Routes", icon: <Network size={18} /> },
    { name: "Users", icon: <Users size={18} /> },
    { name: "Presence", icon: <Cloud size={18} /> },
    { name: "Context", icon: <Layers size={18} /> },
    { name: "Intent", icon: <Workflow size={18} /> },
    { name: "Recommendations", icon: <ServerCog size={18} /> },
    { name: "Analytics", icon: <Settings2 size={18} /> },
  ];

  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#050505]">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-24">
        
        <div className="flex flex-col gap-6 max-w-[700px]">
          <ScrollReveal>
            <h2 className="text-[40px] md:text-[56px] text-[#F2F2F0] font-serif-editorial font-light leading-[1.1] tracking-tight">
              The Resource Model.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-[18px] text-[#8A8A8A] font-light leading-relaxed">
              We expose the physical world through conceptual, highly relational resources. All resources relate to one coherent platform, allowing you to traverse seamlessly from a user's intent to a physical place.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.05] border border-white/[0.05]">
          {resources.map((res, i) => (
            <ScrollReveal key={i} delay={i * 0.05} className="bg-[#050505]">
              <div className="flex items-center gap-4 p-8 hover:bg-white/[0.02] transition-colors cursor-default">
                <div className="text-[#4A4A4A]">{res.icon}</div>
                <span className="text-[14px] text-[#F2F2F0] font-medium tracking-wide">{res.name}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="mt-8 border-t border-white/[0.05] pt-12">
            <ApiNote title="Living Resources™" category="Platform Insight">
              Our resources evolve alongside the physical world. A "Place" is not just static data; its payload conceptually reflects its current living state, all while maintaining stable structural interfaces.
            </ApiNote>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}

function LifecycleSection() {
  const steps = [
    "Application",
    "Authentication",
    "Request",
    "Validation",
    "Spatial Understanding",
    "Reasoning",
    "Response",
    "Client Experience"
  ];

  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#000000]">
      <div className="max-w-[1000px] mx-auto flex flex-col gap-24">
        
        <div className="text-center">
          <ScrollReveal>
            <h2 className="text-[32px] md:text-[48px] text-[#F2F2F0] font-serif-editorial font-light tracking-tight">
              The Request Lifecycle.
            </h2>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.2}>
          <div className="flex flex-col items-center">
            {steps.map((step, i) => (
              <React.Fragment key={i}>
                <div className="flex items-center justify-center px-8 py-4 border border-white/[0.1] bg-[#020202] text-[#F2F2F0] text-[14px] font-mono tracking-widest uppercase w-full md:w-[400px]">
                  {step}
                </div>
                {i < steps.length - 1 && (
                  <div className="w-[1px] h-10 bg-gradient-to-b from-white/[0.2] to-transparent" />
                )}
              </React.Fragment>
            ))}
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}

function IntegrationsSection() {
  const scenarios = [
    { title: "Smart City Portal", desc: "Integrates the Communities and Events resources to provide citizens with a real-time, context-aware dashboard of urban life." },
    { title: "Logistics Dashboard", desc: "Uses Navigation and Routes to overlay live spatial intelligence onto fleet management, instantly adapting to environmental friction." },
    { title: "Hospital Navigation", desc: "Consumes Places and Context resources to guide patients efficiently through complex indoor/outdoor environments based on intent." },
    { title: "Hotel Platform", desc: "Leverages Recommendations to provide guests with deeply contextualized, hyper-local itineraries the moment they check in." }
  ];

  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#050505] border-y border-white/[0.05]">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-20">
        
        <ScrollReveal>
          <h2 className="text-[40px] md:text-[56px] text-[#F2F2F0] font-serif-editorial font-light leading-[1.1] tracking-tight">
            Real-World Integrations.
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {scenarios.map((scen, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="flex flex-col gap-4 p-10 border border-white/[0.05] bg-[#000000]">
                <h3 className="text-[20px] text-[#F2F2F0] font-medium">{scen.title}</h3>
                <p className="text-[15px] text-[#8A8A8A] font-light leading-relaxed">{scen.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}

function DesignPrinciplesSection() {
  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#000000]">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        
        <div className="flex flex-col gap-10">
          <ScrollReveal>
            <h2 className="text-[40px] md:text-[56px] text-[#F2F2F0] font-serif-editorial font-light leading-[1.1] tracking-tight">
              API Design Principles.
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={0.1}>
            <div className="text-[18px] text-[#A0A0A0] font-light leading-relaxed flex flex-col gap-6">
              <p>
                We build upon a resource-first architecture, ensuring that every entity in the physical world is represented logically.
              </p>
              <p>
                Stateless communication guarantees performance and scalability. Version stability ensures that once you integrate, your application will not break. We employ idempotent operations where appropriate to ensure reliability even on flaky networks.
              </p>
              <p>
                Consistent naming, clear pagination, intuitive filtering, searching, and sorting are foundational. We optimize strictly for performance, observability, and graceful failures. 
              </p>
              <p>
                Above all, we prioritize developer ergonomics. The architecture speaks clearly.
              </p>
            </div>
          </ScrollReveal>
        </div>

        <div className="flex flex-col gap-6">
          <ScrollReveal delay={0.2}>
            <ApiNote title="Context-Aware APIs™" category="Platform Architecture">
              Responses are naturally enriched through contextual understanding where appropriate and authorized. A query for a location isn't just a coordinate; it is heavily laden with situational relevance.
            </ApiNote>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <ApiNote title="Transparent Responses™" category="Platform Architecture">
              Every response remains profoundly understandable, predictable, and structurally consistent, eliminating the need to decipher arbitrary data shapes.
            </ApiNote>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}

function FromIdeaSection() {
  const flow = [
    "Create Project",
    "Authenticate",
    "Explore Resources",
    "Build",
    "Test",
    "Deploy",
    "Monitor",
    "Scale"
  ];

  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#050505]">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-20">
        
        <div className="text-center">
          <ScrollReveal>
            <h2 className="text-[32px] md:text-[48px] text-[#F2F2F0] font-serif-editorial font-light tracking-tight">
              From Idea to Production.
            </h2>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.2}>
          <div className="flex flex-wrap justify-center items-center gap-4">
            {flow.map((step, i) => (
              <React.Fragment key={i}>
                <div className="px-6 py-3 border border-white/[0.1] rounded-full text-[#A0A0A0] text-[13px] font-medium tracking-wide">
                  {step}
                </div>
                {i < flow.length - 1 && (
                  <ArrowRight size={16} className="text-[#4A4A4A]" />
                )}
              </React.Fragment>
            ))}
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}

function ComparisonSection() {
  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#000000]">
      <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.1] rounded-none border border-white/[0.1]">
        <div className="bg-[#020202] p-12 flex flex-col gap-8">
          <h3 className="text-[12px] uppercase tracking-[0.2em] text-[#6A6A6A] font-medium font-mono">Traditional REST APIs</h3>
          <ul className="flex flex-col gap-6 text-[15px] text-[#8A8A8A] font-light">
            <li className="flex items-center gap-4"><span className="text-[#4A4A4A]">-</span> Endpoint collections.</li>
            <li className="flex items-center gap-4"><span className="text-[#4A4A4A]">-</span> Service-specific.</li>
            <li className="flex items-center gap-4"><span className="text-[#4A4A4A]">-</span> Inconsistent design.</li>
            <li className="flex items-center gap-4"><span className="text-[#4A4A4A]">-</span> Integration focused.</li>
            <li className="flex items-center gap-4"><span className="text-[#4A4A4A]">-</span> Infrastructure oriented.</li>
          </ul>
        </div>
        <div className="bg-[#080808] p-12 flex flex-col gap-8">
          <h3 className="text-[12px] uppercase tracking-[0.2em] text-[#F2F2F0] font-medium font-mono">Rheole REST APIs</h3>
          <ul className="flex flex-col gap-6 text-[15px] text-[#F2F2F0] font-light">
            <li className="flex items-center gap-4"><span className="text-[#4F6EF7]">+</span> Platform-wide consistency.</li>
            <li className="flex items-center gap-4"><span className="text-[#4F6EF7]">+</span> Resource-oriented.</li>
            <li className="flex items-center gap-4"><span className="text-[#4F6EF7]">+</span> Context-aware architecture.</li>
            <li className="flex items-center gap-4"><span className="text-[#4F6EF7]">+</span> Intelligence-ready.</li>
            <li className="flex items-center gap-4"><span className="text-[#4F6EF7]">+</span> Developer-first experience.</li>
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
            The Future of Open Platforms.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="text-[18px] md:text-[22px] text-[#A0A0A0] font-light leading-relaxed flex flex-col gap-8">
            <p>
              The future belongs to platforms that expose intelligence rather than isolated services.
            </p>
            <p>
              REST APIs become far more than communication interfaces. They become gateways into contextual understanding of the physical world.
            </p>
            <p className="text-[#F2F2F0] font-medium font-serif-editorial italic mt-4 text-[24px]">
              Developers should spend less time integrating infrastructure and more time creating meaningful experiences.
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

export default function RestAPIsPage() {
  return (
    <div className="relative w-full bg-[#000000] text-[#F2F2F0] selection:bg-white/20 selection:text-[#F2F2F0]">
      <HeroSection />
      <OpenPlatformSection />
      <PhilosophySection />
      <ResourceModelSection />
      <LifecycleSection />
      <IntegrationsSection />
      <DesignPrinciplesSection />
      <FromIdeaSection />
      <ComparisonSection />
      <FutureSection />
    </div>
  );
}
