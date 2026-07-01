"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import { 
  Radio, 
  Activity, 
  Zap, 
  Waves, 
  ArrowRight,
  MapPin,
  Clock,
  Compass,
  Users,
  AlertTriangle,
  Lightbulb,
  Building2,
  RefreshCw
} from "lucide-react";
import Link from "next/link";

// -----------------------------------------------------------------------------------
// REUSABLE COMPONENTS
// -----------------------------------------------------------------------------------

function StreamNote({ title, category, children }: { title: string; category: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-4 p-8 bg-[#030303] border border-[#4F6EF7]/20 rounded-[24px] relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-gradient-to-bl from-[#4F6EF7]/10 to-transparent rounded-full blur-2xl pointer-events-none group-hover:from-[#00E5FF]/20 transition-all duration-700" />
      <div className="flex items-center gap-3">
        <div className="w-2 h-2 rounded-full bg-[#00E5FF] shadow-[0_0_8px_#00E5FF] animate-pulse" />
        <span className="text-[10px] uppercase tracking-[0.2em] text-[#6A6A6A] font-medium">{category}</span>
      </div>
      <h4 className="text-[18px] text-[#F2F2F0] font-medium tracking-tight mt-2">{title}</h4>
      <div className="text-[14px] text-[#8A8A8A] leading-relaxed font-light z-10">
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
    <section className="relative w-full min-h-[95vh] flex flex-col items-center justify-center px-6 md:px-12 pt-20 bg-[#000000] overflow-hidden">
      {/* Pulse/Waveform Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[400px] flex items-center justify-center gap-4 opacity-[0.03] pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div 
            key={i}
            animate={{ height: ["20%", "100%", "20%"] }}
            transition={{ duration: 2 + (i % 3), repeat: Infinity, ease: "easeInOut", delay: i * 0.1 }}
            className="w-1 bg-[#F2F2F0] rounded-full"
          />
        ))}
      </div>
      
      <div className="max-w-[1000px] mx-auto z-10 flex flex-col items-center text-center gap-12 w-full mt-12">
        <ScrollReveal>
          <div className="flex items-center gap-4 border border-[#4F6EF7]/30 rounded-full px-5 py-2 bg-[#4F6EF7]/5 backdrop-blur-md">
            <Radio size={14} className="text-[#00E5FF] animate-pulse" />
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#A0A0A0] font-medium">Developer Platform / Realtime APIs</span>
          </div>
        </ScrollReveal>
        
        <ScrollReveal delay={0.2}>
          <h1 className="text-[56px] md:text-[88px] lg:text-[104px] text-[#F2F2F0] font-serif-editorial font-light leading-[0.95] tracking-tight">
            The world doesn't<br />refresh every minute.
          </h1>
        </ScrollReveal>
        
        <ScrollReveal delay={0.4}>
          <p className="text-[20px] md:text-[24px] text-[#A0A0A0] font-light leading-relaxed max-w-[700px] mt-4">
            Reality changes continuously. Software should observe these changes naturally instead of constantly asking whether something has happened.
          </p>
        </ScrollReveal>
        
        <ScrollReveal delay={0.5}>
          <p className="text-[16px] text-[#6A6A6A] font-light leading-relaxed max-w-[500px]">
            Ambient Spatial Intelligence is fundamentally event-driven. Realtime APIs transform applications from reactive software into continuously aware, living experiences.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

function TheLivingWorldSection() {
  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#020202]">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        <div className="flex flex-col gap-8">
          <ScrollReveal>
            <h2 className="text-[40px] md:text-[56px] text-[#F2F2F0] font-serif-editorial font-light leading-[1.1] tracking-tight">
              The Living World.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="text-[18px] text-[#A0A0A0] font-light leading-relaxed flex flex-col gap-6">
              <p>The world never stops changing.</p>
              <p>People move. Events begin. Businesses open. Traffic congestion algorithms recalibrate. Weather fronts shift. Communities gather and disperse.</p>
              <p className="text-[#F2F2F0] font-medium">Applications must evolve alongside this reality.</p>
              <p>By shifting to an event-driven paradigm, applications no longer simulate awareness—they actively possess it. They do not request state; they embody it.</p>
            </div>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <ScrollReveal delay={0.2}>
            <StreamNote title="Living Events™" category="Proprietary Concept">
              Every meaningful structural or temporal change in the physical world is translated into an event stream that developers can instantaneously understand and act upon.
            </StreamNote>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <StreamNote title="Ambient Streams™" category="Proprietary Concept">
              We do not broadcast raw data. We broadcast context-rich streams that describe situations rather than isolated updates, giving your application immediate comprehension.
            </StreamNote>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}

function EventsNotRequestsSection() {
  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#050505] border-y border-white/[0.05]">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-24">
        
        <div className="text-center flex flex-col items-center gap-6">
          <ScrollReveal>
            <h2 className="text-[40px] md:text-[56px] text-[#F2F2F0] font-serif-editorial font-light leading-[1.1] tracking-tight">
              Events, Not Requests.
            </h2>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.05] rounded-3xl overflow-hidden border border-white/[0.05]">
          <div className="bg-[#080808] p-12 flex flex-col gap-8 items-center text-center">
            <RefreshCw size={32} className="text-[#6A6A6A]" />
            <h3 className="text-[20px] text-[#A0A0A0] font-serif-editorial italic">"Has anything changed?"</h3>
            <p className="text-[15px] text-[#8A8A8A] font-light leading-relaxed">
              Traditional applications repeatedly ask servers for updates. This paradigm creates artificial latency, degrades user experiences, heavily burdens infrastructure, and forces the physical world into unnatural polling intervals.
            </p>
          </div>
          <div className="bg-[#0A0A0A] p-12 flex flex-col gap-8 items-center text-center">
            <Radio size={32} className="text-[#00E5FF] animate-pulse" />
            <h3 className="text-[20px] text-[#F2F2F0] font-serif-editorial italic">"I am listening."</h3>
            <p className="text-[15px] text-[#A0A0A0] font-light leading-relaxed">
              Realtime applications simply listen. When the world changes, the application knows instantly. This ensures zero-latency awareness, significantly reduced infrastructure load, and interactions that feel profoundly natural.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

function TheRealtimeEngineSection() {
  const events = [
    { text: "New place discovered." },
    { text: "Traffic update." },
    { text: "Weather change." },
    { text: "Community activity." },
    { text: "Business opening." },
    { text: "Transit delay." },
    { text: "Nearby friend arrives." },
    { text: "Event starts." },
    { text: "Emergency alert." },
    { text: "Parking availability changes." },
  ];

  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#000000]">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-20">
        
        <div className="flex flex-col gap-6 max-w-[700px]">
          <ScrollReveal>
            <h2 className="text-[40px] md:text-[56px] text-[#F2F2F0] font-serif-editorial font-light leading-[1.1] tracking-tight">
              The Realtime Engine.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-[18px] text-[#8A8A8A] font-light leading-relaxed">
              The Living World continuously produces events. Every micro-shift in environmental conditions or human movement becomes a meaningful intelligence signal.
            </p>
          </ScrollReveal>
        </div>

        <div className="flex flex-wrap gap-4 items-center justify-center py-12 border-y border-white/[0.05]">
          {events.map((ev, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <div className="px-5 py-3 rounded-full border border-[#4F6EF7]/20 bg-[#4F6EF7]/[0.02] text-[#A0A0A0] text-[13px] font-medium tracking-wide flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#00E5FF]" />
                {ev.text}
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="text-center">
            <span className="text-[20px] text-[#F2F2F0] font-serif-editorial italic">Every event becomes meaningful intelligence.</span>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}

function EventStreamsSection() {
  const streams = [
    { title: "Location Events", icon: <MapPin size={18} /> },
    { title: "Movement Events", icon: <Activity size={18} /> },
    { title: "Navigation Events", icon: <Compass size={18} /> },
    { title: "Business Events", icon: <Building2 size={18} /> },
    { title: "Community Events", icon: <Users size={18} /> },
    { title: "Safety Events", icon: <AlertTriangle size={18} /> },
    { title: "Environmental Events", icon: <Clock size={18} /> },
    { title: "Intent Updates", icon: <Lightbulb size={18} /> }
  ];

  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#020202]">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-24">
        
        <div className="flex flex-col gap-6 max-w-[700px]">
          <ScrollReveal>
            <h2 className="text-[40px] md:text-[56px] text-[#F2F2F0] font-serif-editorial font-light leading-[1.1] tracking-tight">
              Event Streams.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-[18px] text-[#8A8A8A] font-light leading-relaxed">
              Developers subscribe to meaningful changes across conceptual event categories, rather than constantly requesting data payloads.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {streams.map((stream, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <div className="flex flex-col items-center justify-center text-center gap-4 p-8 bg-[#050505] border border-white/[0.05] rounded-3xl h-full hover:border-[#4F6EF7]/40 transition-colors group">
                <div className="text-[#4A4A4A] group-hover:text-[#00E5FF] transition-colors">{stream.icon}</div>
                <h3 className="text-[14px] text-[#F2F2F0] font-medium tracking-wide">{stream.title}</h3>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="mt-4">
            <StreamNote title="Intelligent Subscriptions™" category="Platform Insight">
              Applications subscribe to high-level, meaningful experiences instead of low-level infrastructure events. You don't subscribe to coordinate changes; you subscribe to "User entered high-density crowd."
            </StreamNote>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}

function LiveApplicationsSection() {
  const apps = [
    { title: "A logistics dashboard.", step1: "Delivery vehicle changes location.", step2: "Customer receives fluid routing updates instantly." },
    { title: "A university app.", step1: "Student enters campus perimeter.", step2: "Attendance systems update and local social nodes activate." },
    { title: "A hospital.", step1: "Emergency entrance becomes crowded.", step2: "Inbound ambulance navigation adjusts automatically." },
    { title: "A retail chain.", step1: "Flagship store reaches capacity.", step2: "Digital foot-traffic directs incoming users to a nearby branch." },
    { title: "A tourism application.", step1: "Unplanned cultural festival begins nearby.", step2: "Visitors receive spontaneous itinerary recommendations." }
  ];

  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#050505] border-y border-white/[0.05]">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-20">
        
        <div className="text-center">
          <ScrollReveal>
            <h2 className="text-[40px] md:text-[56px] text-[#F2F2F0] font-serif-editorial font-light leading-[1.1] tracking-tight">
              Live Applications.
            </h2>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {apps.map((app, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="flex flex-col p-8 bg-[#000000] border border-[#4F6EF7]/20 rounded-2xl h-full relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-[100px] h-[100px] bg-[#00E5FF]/5 blur-3xl pointer-events-none group-hover:bg-[#00E5FF]/10 transition-colors" />
                
                <h3 className="text-[20px] text-[#F2F2F0] font-medium font-serif-editorial mb-8">{app.title}</h3>
                
                <div className="flex flex-col gap-6 relative z-10">
                  <div className="flex gap-4 items-start">
                    <div className="mt-1"><Waves size={16} className="text-[#4A4A4A]" /></div>
                    <p className="text-[14px] text-[#8A8A8A] font-light">{app.step1}</p>
                  </div>
                  
                  <div className="w-[1px] h-6 bg-[#4A4A4A] ml-2" />
                  
                  <div className="flex gap-4 items-start">
                    <div className="mt-1"><Zap size={16} className="text-[#00E5FF]" /></div>
                    <p className="text-[14px] text-[#F2F2F0] font-light">{app.step2}</p>
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

function ScalingRealtimeSection() {
  const principles = [
    "Efficient event delivery.",
    "Reliable subscriptions.",
    "Ordered, deterministic updates.",
    "Absolute fault tolerance.",
    "Automatic network recovery.",
    "Globally scalable architecture.",
    "Graceful client reconnection.",
    "Extreme developer simplicity."
  ];

  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#000000]">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        
        <div className="flex flex-col gap-10">
          <ScrollReveal>
            <h2 className="text-[40px] md:text-[56px] text-[#F2F2F0] font-serif-editorial font-light leading-[1.1] tracking-tight">
              Scaling Realtime.
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={0.1}>
            <div className="text-[18px] text-[#A0A0A0] font-light leading-relaxed flex flex-col gap-6">
              <p>
                Handling millions of concurrent connections globally requires an architecture that masks its own complexity.
              </p>
              <p>
                Our realtime engine ensures that whether an event is consumed by one device or one million, delivery remains instantaneous. 
              </p>
              <p>
                Developers do not need to manage backpressure, reconnect logic, state synchronization, or geographic routing. You subscribe to a stream, and Rheole ensures the pipeline remains pristine, ordered, and fault-tolerant.
              </p>
            </div>
          </ScrollReveal>
        </div>

        <div className="flex items-center justify-center lg:justify-end">
          <ScrollReveal delay={0.2} className="w-full">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
              {principles.map((p, i) => (
                <li key={i} className="flex items-center gap-4 text-[15px] text-[#F2F2F0] font-light">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] shadow-[0_0_8px_#00E5FF]" />
                  {p}
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}

function FutureSection() {
  return (
    <section className="relative w-full py-[200px] px-6 md:px-12 bg-[#020202] overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#4F6EF7]/5 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-[800px] mx-auto text-center flex flex-col gap-12 relative z-10">
        <ScrollReveal>
          <h2 className="text-[40px] md:text-[64px] lg:text-[80px] text-[#F2F2F0] font-serif-editorial font-light leading-[1.05] tracking-tight">
            Building the Future.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="text-[18px] md:text-[22px] text-[#A0A0A0] font-light leading-relaxed flex flex-col gap-8">
            <p>
              Future applications will no longer refresh. They will observe. Understand. Adapt. Respond.
            </p>
            <p>
              Realtime APIs are not simply communication channels. They are the nervous system connecting digital applications to the breathing, living physical world.
            </p>
            <p className="text-[#F2F2F0] font-medium font-serif-editorial italic mt-4 text-[24px]">
              Stop requesting reality. Start living it.
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

export default function RealtimeAPIsPage() {
  return (
    <div className="relative w-full bg-[#000000] text-[#F2F2F0] selection:bg-[#00E5FF]/20 selection:text-[#F2F2F0]">
      <HeroSection />
      <TheLivingWorldSection />
      <EventsNotRequestsSection />
      <TheRealtimeEngineSection />
      <EventStreamsSection />
      <LiveApplicationsSection />
      <ScalingRealtimeSection />
      <FutureSection />
    </div>
  );
}
