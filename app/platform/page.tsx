"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

// -----------------------------------------------------------------------------------
// KNOWLEDGE BLOCK COMPONENT
// -----------------------------------------------------------------------------------
function KnowledgeBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-4 p-8 border border-white/[0.05] bg-white/[0.01] rounded-2xl md:w-1/3 shrink-0 self-start sticky top-32">
      <h4 className="text-[11px] uppercase tracking-[0.15em] text-[#6A6A6A] font-medium">{title}</h4>
      <div className="text-[13px] text-[#A0A0A0] leading-relaxed font-light">
        {children}
      </div>
    </div>
  );
}

// -----------------------------------------------------------------------------------
// SECTION COMPONENTS
// -----------------------------------------------------------------------------------

function IntroSection() {
  return (
    <section className="relative w-full min-h-[100vh] flex flex-col items-center justify-center px-6 md:px-12">
      <div className="absolute inset-0 bg-gradient-to-b from-[#080808] via-transparent to-[#080808] pointer-events-none z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#4F6EF7] rounded-full blur-[200px] opacity-[0.03] pointer-events-none" />
      
      <div className="max-w-[1200px] mx-auto z-20 flex flex-col items-center text-center gap-12 pt-32">
        <ScrollReveal>
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#6A6A6A] font-medium">Rheole Platform</span>
        </ScrollReveal>
        
        <ScrollReveal delay={0.2}>
          <h1 className="text-[40px] md:text-[72px] lg:text-[96px] text-[#F2F2F0] font-serif-editorial font-light leading-[1.05] tracking-tight max-w-[1000px]">
            The world already knows everything.<br />
            <span className="text-[#8A8A8A]">It simply doesn't understand it together.</span>
          </h1>
        </ScrollReveal>
        
        <ScrollReveal delay={0.4}>
          <p className="text-[16px] md:text-[22px] text-[#8A8A8A] font-light max-w-[650px] leading-relaxed">
            Modern cities contain millions of disconnected pieces of information. Rheole brings them into one intelligent, continuously adapting experience—so you can focus on moving, connecting, and living.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

function WhatIsRheoleSection() {
  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 border-t border-white/[0.03]">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row gap-24">
        
        <div className="flex-1 flex flex-col gap-12">
          <ScrollReveal>
            <h2 className="text-[32px] md:text-[56px] text-[#F2F2F0] font-serif-editorial font-light leading-[1.1] tracking-tight">
              What exactly is Rheole?
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="text-[18px] md:text-[24px] text-[#A0A0A0] font-light leading-relaxed flex flex-col gap-8">
              <p>
                Rheole is <span className="text-white">not</span> a map.<br />
                Rheole is <span className="text-white">not</span> a social network.<br />
                Rheole is <span className="text-white">not</span> a navigation app.<br />
                Rheole is <span className="text-white">not</span> an event app.<br />
                Rheole is <span className="text-white">not</span> an AI chatbot.<br />
                Rheole is <span className="text-white">not</span> a recommendation engine.
              </p>
              <p className="text-[#F2F2F0] text-[24px] md:text-[32px] leading-snug">
                It is a Spatial Intelligence Platform.
              </p>
              <p>
                It is one intelligent layer sitting quietly between people and the real world. By understanding your context, intent, and environment simultaneously, it eliminates the need to constantly switch between single-purpose applications.
              </p>
            </div>
          </ScrollReveal>
        </div>

        <KnowledgeBlock title="Unified Spatial Layer™">
          <p className="mb-4">
            The foundation of the Rheole architecture. Rather than treating maps, social graphs, and business directories as isolated databases, the Unified Spatial Layer™ connects them.
          </p>
          <p>
            When an event occurs, it instantly affects routing, community discovery, and business foot traffic. Everything is connected.
          </p>
        </KnowledgeBlock>

      </div>
    </section>
  );
}

function FourPillarsSection() {
  const pillars = [
    {
      title: "Discover",
      desc: "Helping people understand what exists around them.",
      detail: "Not just places, but the context of those places. Real-time atmosphere, crowdedness, and relevance to your current intent."
    },
    {
      title: "Navigation",
      desc: "Helping people move intelligently through the world.",
      detail: "Beyond shortest-path logic. Routing that considers safety, weather, live events, and the exact nature of your journey."
    },
    {
      title: "Connect",
      desc: "Helping people discover meaningful human relationships.",
      detail: "Surfacing serendipitous encounters, local communities, and founders nearby without the noise of traditional social media."
    },
    {
      title: "Intelligence",
      desc: "Helping technology understand people before responding.",
      detail: "The invisible engine. It learns your rhythms and preferences, ensuring the platform anticipates needs rather than waiting for commands."
    }
  ];

  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#050505] border-y border-white/[0.03]">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-32">
        <ScrollReveal>
          <div className="flex flex-col items-center text-center gap-6">
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#6A6A6A] font-medium">The Four Pillars</span>
            <h2 className="text-[40px] md:text-[64px] text-[#F2F2F0] font-serif-editorial font-light leading-[1.1] tracking-tight max-w-[800px]">
              Four capabilities.<br />
              One continuous system.
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, i) => (
            <ScrollReveal key={i} delay={i * 0.1} className="relative group">
              <div className="h-full flex flex-col gap-8 p-10 border border-white/[0.05] bg-[#080808] rounded-2xl hover:bg-white/[0.02] transition-colors duration-500">
                <h3 className="text-[20px] font-medium text-white tracking-tight">{pillar.title}</h3>
                <p className="text-[15px] text-[#A0A0A0] leading-relaxed font-light flex-1">
                  {pillar.desc}
                </p>
                <div className="w-full h-[1px] bg-white/[0.05] group-hover:bg-white/[0.1] transition-colors" />
                <p className="text-[13px] text-[#6A6A6A] leading-relaxed font-light">
                  {pillar.detail}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowTheyWorkSection() {
  return (
    <section className="relative w-full py-[200px] px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row gap-24">
        
        <KnowledgeBlock title="Platform Intelligence™">
          <p className="mb-4">
            A radical departure from isolated features. Discover, Navigation, Connect, and Intelligence do not exist as separate tabs—they are deeply intertwined services.
          </p>
          <p>
            When one pillar receives an input, it instantly informs the other three, creating a cascading effect of spatial awareness that feels like magic.
          </p>
        </KnowledgeBlock>

        <div className="flex-1 flex flex-col gap-16">
          <ScrollReveal>
            <h2 className="text-[32px] md:text-[56px] text-[#F2F2F0] font-serif-editorial font-light leading-[1.1] tracking-tight">
              Nothing inside Rheole works independently.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="flex flex-col gap-12 border-l border-white/[0.1] pl-8 md:pl-16 relative">
              
              <div className="absolute top-0 left-[-1.5px] w-[3px] h-32 bg-gradient-to-b from-white to-transparent" />

              <div className="flex flex-col gap-2">
                <span className="text-[12px] uppercase tracking-widest text-white font-medium">The User Request</span>
                <p className="text-[24px] md:text-[32px] text-[#8A8A8A] font-serif-editorial font-light italic">"I'm hungry."</p>
              </div>

              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-2 relative">
                  <div className="absolute top-3 left-[-37px] md:left-[-69px] w-2 h-2 rounded-full bg-white/[0.2]" />
                  <span className="text-[11px] uppercase tracking-[0.15em] text-[#6A6A6A] font-medium">1. Discover</span>
                  <p className="text-[16px] md:text-[20px] text-[#F2F2F0] font-light">Finds nearby places that match exact dietary preferences and current atmosphere.</p>
                </div>
                
                <div className="flex flex-col gap-2 relative">
                  <div className="absolute top-3 left-[-37px] md:left-[-69px] w-2 h-2 rounded-full bg-white/[0.2]" />
                  <span className="text-[11px] uppercase tracking-[0.15em] text-[#6A6A6A] font-medium">2. Intelligence</span>
                  <p className="text-[16px] md:text-[20px] text-[#F2F2F0] font-light">Understands you only have 45 minutes before your next meeting based on calendar context.</p>
                </div>

                <div className="flex flex-col gap-2 relative">
                  <div className="absolute top-3 left-[-37px] md:left-[-69px] w-2 h-2 rounded-full bg-white/[0.2]" />
                  <span className="text-[11px] uppercase tracking-[0.15em] text-[#6A6A6A] font-medium">3. Navigation</span>
                  <p className="text-[16px] md:text-[20px] text-[#F2F2F0] font-light">Calculates a walking route that avoids the current heavy rain on 4th street.</p>
                </div>

                <div className="flex flex-col gap-2 relative">
                  <div className="absolute top-3 left-[-37px] md:left-[-69px] w-2 h-2 rounded-full bg-white/[0.2]" />
                  <span className="text-[11px] uppercase tracking-[0.15em] text-[#6A6A6A] font-medium">4. Connect</span>
                  <p className="text-[16px] md:text-[20px] text-[#F2F2F0] font-light">Notices a close colleague is already seated at the destination and suggests joining them.</p>
                </div>
              </div>

              <div className="flex flex-col gap-2 mt-8">
                <p className="text-[18px] md:text-[24px] text-white font-light">One simple request activates the entire platform.</p>
              </div>

            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}

function ADayWithRheoleSection() {
  const events = [
    { time: "08:30 AM", title: "Morning Commute", desc: "Navigation detects an unmapped road closure via community signals and reroutes your drive smoothly without you needing to check." },
    { time: "11:00 AM", title: "Coffee & Context", desc: "Intelligence notices you have a 30-minute gap. Discover surfaces a highly-rated hidden cafe just 2 minutes away that perfectly matches your taste profile." },
    { time: "01:15 PM", title: "Lunch & Connect", desc: "You arrive at a crowded food hall. Connect quietly highlights that two industry peers from your network are sitting nearby." },
    { time: "06:00 PM", title: "Evening Fitness", desc: "Unexpected rain starts. Intelligence shifts your outdoor run recommendation to a nearby indoor climbing gym, complete with walking directions that keep you under cover." },
    { time: "10:30 PM", title: "Late-Night Travel", desc: "Navigation selects the safest, most well-lit walking route back to your apartment, avoiding isolated alleys." }
  ];

  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#050505] border-y border-white/[0.03]">
      <div className="max-w-[1000px] mx-auto flex flex-col gap-24 items-center">
        
        <ScrollReveal>
          <div className="text-center flex flex-col gap-6 items-center">
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#6A6A6A] font-medium">Narrative</span>
            <h2 className="text-[40px] md:text-[56px] text-[#F2F2F0] font-serif-editorial font-light leading-[1.1] tracking-tight">
              A day with Rheole.
            </h2>
            <p className="text-[18px] text-[#8A8A8A] font-light max-w-[600px]">
              How the platform invisibly orchestrates your day, requiring zero active management.
            </p>
          </div>
        </ScrollReveal>

        <div className="w-full flex flex-col gap-12 relative border-l border-white/[0.05] ml-4 md:ml-0 md:pl-12">
          {events.map((event, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="relative pl-8 md:pl-0">
                <div className="absolute top-1.5 left-[-37px] md:left-[-53px] w-2 h-2 rounded-full bg-white/[0.15]" />
                <div className="flex flex-col gap-2">
                  <span className="text-[12px] uppercase tracking-widest text-[#6A6A6A] font-medium">{event.time}</span>
                  <h4 className="text-[20px] md:text-[24px] text-white font-medium tracking-tight">{event.title}</h4>
                  <p className="text-[16px] md:text-[18px] text-[#A0A0A0] font-light leading-relaxed max-w-[700px]">
                    {event.desc}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}

function WhyThisExistsSection() {
  return (
    <section className="relative w-full py-[200px] px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row gap-24 items-center">
        
        <div className="flex-1 flex flex-col gap-12">
          <ScrollReveal>
            <h2 className="text-[40px] md:text-[64px] text-[#F2F2F0] font-serif-editorial font-light leading-[1.1] tracking-tight">
              Why this platform exists.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="text-[18px] md:text-[22px] text-[#A0A0A0] font-light leading-relaxed flex flex-col gap-8">
              <p>
                Today’s digital experience is severely fragmented. To navigate a single evening, a person must switch between a map for directions, a messaging app for coordination, a search engine for reviews, a calendar for timing, and a transit app for travel.
              </p>
              <p>
                Humans were not built to act as the integration layer between a dozen disconnected APIs. The cognitive load of modern technology has eclipsed its utility.
              </p>
              <p className="text-white text-[24px] leading-snug">
                Rheole exists to reduce this fragmentation by understanding user intent and spatial surroundings in one unified place.
              </p>
              <p>
                We are not trying to build another app you check obsessively. We are building a platform that checks the world for you, so you can put your phone away and focus on reality.
              </p>
            </div>
          </ScrollReveal>
        </div>

        <KnowledgeBlock title="Ambient Computing™">
          <p className="mb-4">
            The philosophy that technology should disappear into everyday life. It should be omnipresent but entirely unobtrusive.
          </p>
          <p>
            Rheole is designed to be an ambient platform. It works quietly in the background, analyzing the spatial world, and only steps forward when it can offer a highly contextual, meaningful intervention.
          </p>
        </KnowledgeBlock>

      </div>
    </section>
  );
}

function PlatformArchitectureSection() {
  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#050505] border-y border-white/[0.03]">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-24">
        
        <div className="flex flex-col md:flex-row justify-between items-end gap-12">
          <ScrollReveal>
            <div className="flex flex-col gap-6 max-w-[600px]">
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#6A6A6A] font-medium">System Architecture</span>
              <h2 className="text-[40px] md:text-[56px] text-[#F2F2F0] font-serif-editorial font-light leading-[1.1] tracking-tight">
                A conceptual view of the platform.
              </h2>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.1}>
            <p className="text-[16px] text-[#8A8A8A] font-light max-w-[400px]">
              Rather than isolated datasets, Rheole stacks intelligence layers on top of the physical world, distilling infinite complexity into a single experience.
            </p>
          </ScrollReveal>
        </div>

        {/* Visual CSS Diagram */}
        <ScrollReveal delay={0.2}>
          <div className="w-full flex flex-col items-center gap-6 py-16 px-4 md:px-24 border border-white/[0.05] bg-[#080808] rounded-3xl relative overflow-hidden">
            
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-white/[0.02] rounded-full blur-[100px] pointer-events-none" />

            <div className="flex flex-col items-center gap-3 w-full max-w-[800px] z-10">
              <div className="w-full text-center py-6 border border-white/[0.08] bg-white/[0.02] rounded-xl backdrop-blur-sm text-[16px] font-medium text-white tracking-widest uppercase">
                The Real World
              </div>
              <div className="flex gap-4 text-[12px] text-[#6A6A6A] font-light">
                <span>Places</span> • <span>People</span> • <span>Events</span> • <span>Businesses</span> • <span>Movement</span> • <span>Environment</span>
              </div>
            </div>

            <div className="h-12 w-[1px] bg-gradient-to-b from-white/[0.2] to-transparent z-10" />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-[800px] z-10">
              {['Discover', 'Navigation', 'Connect', 'Intelligence'].map((item) => (
                <div key={item} className="text-center py-4 border border-white/[0.05] bg-[#0A0A0A] rounded-lg text-[13px] text-[#A0A0A0] font-medium">
                  {item}
                </div>
              ))}
            </div>

            <div className="h-12 w-[1px] bg-gradient-to-b from-white/[0.2] to-transparent z-10" />

            <div className="w-full max-w-[400px] text-center py-6 border border-[#F2F2F0]/20 bg-[#F2F2F0] rounded-xl text-[16px] font-bold text-[#080808] tracking-widest uppercase z-10 shadow-[0_0_40px_rgba(255,255,255,0.1)]">
              One Unified Experience
            </div>

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}

function FutureSection() {
  return (
    <section className="relative w-full py-[200px] px-6 md:px-12">
      <div className="max-w-[1000px] mx-auto text-center flex flex-col items-center gap-16">
        
        <ScrollReveal>
          <span className="text-[11px] uppercase tracking-[0.2em] text-[#6A6A6A] font-medium">The Vision</span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="text-[48px] md:text-[80px] lg:text-[100px] text-[#F2F2F0] font-serif-editorial font-light leading-[1.05] tracking-tight">
            The future of computing is not more applications.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-[20px] md:text-[28px] text-[#A0A0A0] font-light max-w-[800px] leading-relaxed">
            It is one intelligent layer that quietly understands the world and helps people interact with it naturally. Technology should disappear into everyday life.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <p className="text-[20px] md:text-[28px] text-white font-light max-w-[800px] leading-relaxed mt-4">
            People should focus on living, not managing apps.
          </p>
        </ScrollReveal>

      </div>
    </section>
  );
}

// -----------------------------------------------------------------------------------
// MAIN PAGE EXPORT
// -----------------------------------------------------------------------------------

export default function PlatformPage() {
  return (
    <div className="relative w-full bg-[#080808] text-[#F2F2F0] selection:bg-[#4F6EF7]/30 selection:text-[#F2F2F0]">
      <IntroSection />
      <WhatIsRheoleSection />
      <FourPillarsSection />
      <HowTheyWorkSection />
      <ADayWithRheoleSection />
      <WhyThisExistsSection />
      <PlatformArchitectureSection />
      <FutureSection />
    </div>
  );
}
