"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import { 
  Code2, 
  TerminalSquare, 
  Box, 
  Layers, 
  ArrowRight,
  MonitorSmartphone,
  Smartphone,
  Server,
  Workflow,
  Cpu,
  Fingerprint,
  MapPin,
  CalendarDays,
  Compass,
  Users,
  Lightbulb,
  Radio
} from "lucide-react";
import Link from "next/link";

// -----------------------------------------------------------------------------------
// REUSABLE COMPONENTS
// -----------------------------------------------------------------------------------

function DeveloperNote({ title, category, children }: { title: string; category: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-4 p-8 bg-[#030303] border border-white/[0.08] hover:border-[#4F6EF7]/40 transition-colors rounded-xl relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-gradient-to-bl from-[#4F6EF7]/[0.03] to-transparent rounded-full blur-3xl group-hover:from-[#4F6EF7]/[0.08] transition-all duration-700 pointer-events-none" />
      <div className="flex items-center gap-3">
        <TerminalSquare size={14} className="text-[#6A6A6A] group-hover:text-[#4F6EF7] transition-colors" />
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
    <section className="relative w-full min-h-[95vh] flex flex-col items-start justify-center px-6 md:px-12 pt-20 bg-[#020202]">
      <div className="absolute inset-0 border-x border-white/[0.02] max-w-[1200px] mx-auto pointer-events-none" />
      
      <div className="max-w-[1200px] mx-auto z-10 flex flex-col items-start gap-12 w-full">
        <ScrollReveal>
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center w-8 h-8 rounded bg-white/[0.03] border border-white/[0.1]">
              <Code2 size={14} className="text-[#A0A0A0]" />
            </div>
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#A0A0A0] font-mono">Developer Platform / SDKs</span>
          </div>
        </ScrollReveal>
        
        <ScrollReveal delay={0.2}>
          <h1 className="text-[56px] md:text-[88px] lg:text-[104px] text-[#F2F2F0] font-serif-editorial font-light leading-[0.95] tracking-tight max-w-[900px]">
            Build experiences<br />that understand the world.
          </h1>
        </ScrollReveal>
        
        <ScrollReveal delay={0.4}>
          <p className="text-[20px] md:text-[24px] text-[#A0A0A0] font-light leading-relaxed max-w-[700px] mt-4">
            Developers should spend less time solving infrastructure problems and more time creating meaningful experiences.
          </p>
        </ScrollReveal>
        
        <ScrollReveal delay={0.5}>
          <p className="text-[16px] text-[#6A6A6A] font-light leading-relaxed max-w-[500px]">
            The Rheole SDKs expose Ambient Spatial Intelligence through elegant, consistent developer tools designed for human-centric applications.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

function WhyExistSection() {
  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#050505]">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-24">
        
        <div className="flex flex-col lg:flex-row gap-16 justify-between items-start">
          <div className="flex flex-col gap-8 flex-1">
            <ScrollReveal>
              <h2 className="text-[40px] md:text-[56px] text-[#F2F2F0] font-serif-editorial font-light leading-[1.1] tracking-tight">
                Why SDKs Matter.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="text-[18px] text-[#8A8A8A] font-light leading-relaxed flex flex-col gap-6">
                <p>
                  Every platform becomes meaningful when others build upon it. Rheole is not simply an application; it is a fundamental platform that enables creators to weave Ambient Spatial Intelligence into their own products.
                </p>
                <p>
                  SDKs are the architectural bridge between our intelligence and your imagination.
                </p>
                <p className="text-[#F2F2F0] font-medium">
                  Without SDKs, developers build isolated features. With Rheole SDKs, developers build connected, context-aware experiences.
                </p>
                <p>
                  Every SDK is designed around simplicity, consistency, and composability, focusing strictly on developer productivity rather than technical complexity.
                </p>
              </div>
            </ScrollReveal>
          </div>

          <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
            <ScrollReveal delay={0.2}>
              <DeveloperNote title="Ambient SDK™" category="Rheole Concept">
                SDKs that expose holistic intelligence and relationships rather than isolated REST endpoints or standalone services.
              </DeveloperNote>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <DeveloperNote title="Living APIs™" category="Rheole Concept">
                Interfaces that adapt and expand alongside the evolving physical world while maintaining absolute backward compatibility.
              </DeveloperNote>
            </ScrollReveal>
          </div>
        </div>

      </div>
    </section>
  );
}

function OnePlatformSection() {
  const capabilities = ["Authentication", "Places", "Navigation", "Communities", "Businesses", "Events", "Context", "Intent", "Intelligence", "Realtime updates"];

  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#020202]">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-20">
        
        <div className="text-center flex flex-col items-center gap-6 max-w-[800px]">
          <ScrollReveal>
            <h2 className="text-[40px] md:text-[56px] text-[#F2F2F0] font-serif-editorial font-light leading-[1.1] tracking-tight">
              One Unified Platform.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-[18px] text-[#8A8A8A] font-light">
              Every SDK shares the exact same design philosophy. Developers learn one cohesive platform, not dozens of disconnected products.
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.2} className="w-full">
          <div className="p-8 md:p-16 border border-white/[0.05] rounded-[32px] bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:32px_32px]">
            <div className="flex flex-wrap justify-center gap-4 max-w-[900px] mx-auto">
              {capabilities.map((cap, i) => (
                <div key={i} className="px-6 py-3 border border-white/[0.1] bg-[#050505] rounded-full text-[#F2F2F0] text-[14px] font-medium tracking-wide shadow-lg flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#4F6EF7]" />
                  {cap}
                </div>
              ))}
            </div>
            
            <div className="w-[1px] h-20 bg-gradient-to-b from-[#4F6EF7]/50 to-transparent mx-auto my-8" />
            
            <div className="text-center">
              <span className="text-[12px] uppercase tracking-widest text-[#6A6A6A] font-mono">Unified Platform API™</span>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}

function EcosystemSection() {
  const sdks = [
    { name: "Web SDK", icon: <MonitorSmartphone size={24} /> },
    { name: "iOS SDK", icon: <Smartphone size={24} /> },
    { name: "Android SDK", icon: <Smartphone size={24} /> },
    { name: "React Native SDK", icon: <MonitorSmartphone size={24} /> },
    { name: "Flutter SDK", icon: <Smartphone size={24} /> },
    { name: "Backend SDK", icon: <Server size={24} /> },
    { name: "Node.js SDK", icon: <Cpu size={24} /> },
    { name: "Python SDK", icon: <Cpu size={24} /> },
  ];

  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#050505]">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-16">
        
        <ScrollReveal>
          <div className="flex flex-col gap-4">
            <h2 className="text-[32px] md:text-[48px] text-[#F2F2F0] font-serif-editorial font-light tracking-tight">
              The SDK Ecosystem.
            </h2>
            <p className="text-[16px] text-[#8A8A8A] font-light max-w-[500px]">
              Native performance and seamless integration, wherever your users are.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {sdks.map((sdk, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <div className="flex flex-col gap-6 p-8 border border-white/[0.05] bg-[#080808] rounded-2xl hover:bg-white/[0.02] transition-colors group cursor-default h-full">
                <div className="text-[#A0A0A0] group-hover:text-[#F2F2F0] transition-colors">
                  {sdk.icon}
                </div>
                <h3 className="text-[16px] text-[#F2F2F0] font-medium">{sdk.name}</h3>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}

function DeveloperExperienceSection() {
  const principles = [
    "Predictable APIs",
    "Excellent documentation",
    "Type safety by default",
    "Composable architecture",
    "Minimal boilerplate",
    "Realtime support built-in",
    "Offline-first capabilities",
    "Semantic version stability",
    "Clear, actionable error messages",
    "Cross-platform consistency"
  ];

  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#020202]">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-24">
        
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-1/2 flex flex-col gap-8">
            <ScrollReveal>
              <h2 className="text-[40px] md:text-[56px] text-[#F2F2F0] font-serif-editorial font-light leading-[1.1] tracking-tight">
                Developer Experience.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-[18px] text-[#A0A0A0] font-light leading-relaxed">
                We believe that integrating intelligence should feel invisible, powerful, and reliable. The principles behind every SDK prioritize the human building the software.
              </p>
            </ScrollReveal>
          </div>

          <div className="lg:w-1/2">
            <ScrollReveal delay={0.2}>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8">
                {principles.map((p, i) => (
                  <li key={i} className="flex items-center gap-4 text-[15px] text-[#F2F2F0] font-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4F6EF7]" />
                    {p}
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

function BuildingBlocksSection() {
  const blocks = [
    { title: "Authentication", icon: <Fingerprint size={20} />, desc: "Secure, privacy-first identity management." },
    { title: "Places & Businesses", icon: <MapPin size={20} />, desc: "Deep contextual data on physical locations." },
    { title: "Events", icon: <CalendarDays size={20} />, desc: "Temporal anomalies and gatherings." },
    { title: "Navigation", icon: <Compass size={20} />, desc: "Intent-aware routing and movement logic." },
    { title: "Communities", icon: <Users size={20} />, desc: "Social topology and demographic insights." },
    { title: "Context & Intent", icon: <Lightbulb size={20} />, desc: "Understanding the 'why' behind user actions." },
    { title: "Realtime Intelligence", icon: <Radio size={20} />, desc: "Live streams of environmental shifts." }
  ];

  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#050505]">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-16">
        
        <div className="text-center">
          <ScrollReveal>
            <h2 className="text-[32px] md:text-[48px] text-[#F2F2F0] font-serif-editorial font-light tracking-tight">
              Building Blocks.
            </h2>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blocks.map((block, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <div className="flex flex-col gap-4 p-8 bg-[#080808] border border-white/[0.05] rounded-2xl h-full hover:border-white/[0.1] transition-colors">
                <div className="p-3 bg-white/[0.03] rounded-lg w-fit text-[#F2F2F0]">
                  {block.icon}
                </div>
                <h3 className="text-[18px] text-[#F2F2F0] font-medium mt-2">{block.title}</h3>
                <p className="text-[14px] text-[#8A8A8A] font-light leading-relaxed">{block.desc}</p>
              </div>
            </ScrollReveal>
          ))}
          
          <ScrollReveal delay={blocks.length * 0.05}>
            <div className="flex flex-col justify-center gap-4 p-8 border border-white/[0.05] border-dashed rounded-2xl h-full bg-[#020202]">
              <span className="text-[12px] uppercase tracking-widest text-[#4F6EF7] font-mono">Context Modules™</span>
              <p className="text-[14px] text-[#8A8A8A] font-light leading-relaxed">
                Reusable intelligence components that understand situations rather than simply returning raw data.
              </p>
            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}

function ScenariosSection() {
  const scenarios = [
    { title: "A logistics dashboard.", desc: "Uses the Navigation and Realtime Intelligence modules to orchestrate fleet movement dynamically based on live traffic, weather disruptions, and local street events." },
    { title: "A university platform.", desc: "Integrates Communities, Events, and Places to help students navigate campus, find quiet study zones, and spontaneously connect with overlapping social circles." },
    { title: "A travel application.", desc: "Leverages Context and Intent modules to suggest itineraries that adapt instantly if it starts raining or if the user shows preference for architectural landmarks." },
  ];

  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#020202]">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-20">
        
        <ScrollReveal>
          <h2 className="text-[32px] md:text-[48px] text-[#F2F2F0] font-serif-editorial font-light tracking-tight">
            Example Applications.
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {scenarios.map((scen, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="flex flex-col gap-6 p-8 bg-[#050505] border-l-2 border-[#4F6EF7]/50 h-full">
                <h3 className="text-[20px] text-[#F2F2F0] font-medium">{scen.title}</h3>
                <p className="text-[15px] text-[#A0A0A0] font-light leading-relaxed">{scen.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}

function GetStartedSection() {
  const flow = [
    "Choose Platform",
    "Create Project",
    "Authenticate",
    "Connect SDK",
    "Explore Examples",
    "Launch"
  ];

  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#050505]">
      <div className="max-w-[1000px] mx-auto flex flex-col gap-20">
        
        <div className="text-center">
          <ScrollReveal>
            <h2 className="text-[32px] md:text-[48px] text-[#F2F2F0] font-serif-editorial font-light tracking-tight">
              The Developer Journey™
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-[16px] text-[#8A8A8A] font-light mt-4">
              An onboarding philosophy that takes you from idea to production with zero friction.
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.2}>
          <div className="flex flex-col md:flex-row justify-between items-center relative gap-8 md:gap-0">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[1px] bg-white/[0.05] -translate-y-1/2" />
            
            {flow.map((step, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-[#080808] border border-white/[0.1] flex items-center justify-center text-[#6A6A6A] group-hover:border-[#4F6EF7] group-hover:text-[#F2F2F0] transition-colors">
                  <span className="font-mono text-[12px]">{i + 1}</span>
                </div>
                <span className="text-[12px] uppercase tracking-widest text-[#A0A0A0] font-medium hidden md:block group-hover:text-[#F2F2F0] transition-colors">{step}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}

function ComparisonSection() {
  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#020202]">
      <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.05] rounded-3xl overflow-hidden border border-white/[0.05]">
        <div className="bg-[#050505] p-12 flex flex-col gap-8">
          <h3 className="text-[12px] uppercase tracking-[0.2em] text-[#6A6A6A] font-medium font-mono">Traditional SDKs</h3>
          <ul className="flex flex-col gap-6 text-[15px] text-[#8A8A8A] font-light">
            <li className="flex items-center gap-4"><span className="text-[#4A4A4A]">-</span> Platform-specific.</li>
            <li className="flex items-center gap-4"><span className="text-[#4A4A4A]">-</span> Inconsistent APIs.</li>
            <li className="flex items-center gap-4"><span className="text-[#4A4A4A]">-</span> Boilerplate-heavy.</li>
            <li className="flex items-center gap-4"><span className="text-[#4A4A4A]">-</span> Service-oriented.</li>
            <li className="flex items-center gap-4"><span className="text-[#4A4A4A]">-</span> Documentation-driven.</li>
          </ul>
        </div>
        <div className="bg-[#0A0A0A] p-12 flex flex-col gap-8">
          <h3 className="text-[12px] uppercase tracking-[0.2em] text-[#F2F2F0] font-medium font-mono">Rheole SDKs</h3>
          <ul className="flex flex-col gap-6 text-[15px] text-[#F2F2F0] font-light">
            <li className="flex items-center gap-4"><span className="text-[#4F6EF7]">+</span> Platform-consistent.</li>
            <li className="flex items-center gap-4"><span className="text-[#4F6EF7]">+</span> Intelligence-first.</li>
            <li className="flex items-center gap-4"><span className="text-[#4F6EF7]">+</span> Composable architecture.</li>
            <li className="flex items-center gap-4"><span className="text-[#4F6EF7]">+</span> Context-aware modules.</li>
            <li className="flex items-center gap-4"><span className="text-[#4F6EF7]">+</span> Experience-oriented.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function FutureSection() {
  return (
    <section className="relative w-full py-[200px] px-6 md:px-12 bg-[#000000] overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-[300px] bg-gradient-to-t from-[#4F6EF7]/5 to-transparent pointer-events-none" />
      
      <div className="max-w-[800px] mx-auto text-center flex flex-col gap-12 relative z-10">
        <ScrollReveal>
          <h2 className="text-[40px] md:text-[64px] lg:text-[80px] text-[#F2F2F0] font-serif-editorial font-light leading-[1.05] tracking-tight">
            The Future of Development.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="text-[18px] md:text-[22px] text-[#A0A0A0] font-light leading-relaxed flex flex-col gap-8">
            <p>
              The future belongs to platforms that provide intelligence rather than isolated APIs. 
            </p>
            <p>
              Developers should focus entirely on solving human problems and designing interfaces, while Rheole quietly provides the underlying spatial understanding, context, and reasoning.
            </p>
            <p className="text-[#F2F2F0] font-medium font-serif-editorial italic mt-4 text-[24px]">
              SDKs should feel invisible. Powerful. Reliable. Beautiful.
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

export default function SDKsPage() {
  return (
    <div className="relative w-full bg-[#020202] text-[#F2F2F0] selection:bg-[#4F6EF7]/20 selection:text-[#F2F2F0]">
      <HeroSection />
      <WhyExistSection />
      <OnePlatformSection />
      <EcosystemSection />
      <DeveloperExperienceSection />
      <BuildingBlocksSection />
      <ScenariosSection />
      <GetStartedSection />
      <ComparisonSection />
      <FutureSection />
    </div>
  );
}
