"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import { 
  Activity, 
  Server, 
  Globe2, 
  Database, 
  Network, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  Cpu, 
  ShieldCheck, 
  Workflow, 
  MapPin, 
  BarChart3,
  Calendar,
  Layers,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

// -----------------------------------------------------------------------------------
// DATA CONSTANTS (For high density)
// -----------------------------------------------------------------------------------

const services = [
  { name: "AI Platform", status: "Operational", uptime: "99.99%", latency: "42ms", desc: "Core reasoning and inference engines.", icon: <Cpu size={14} /> },
  { name: "Spatial Computing", status: "Operational", uptime: "99.99%", latency: "28ms", desc: "Real-time world geometry and physics mapping.", icon: <Globe2 size={14} /> },
  { name: "Authentication", status: "Operational", uptime: "99.999%", latency: "12ms", desc: "Identity graph, token exchange, and Zero Trust.", icon: <ShieldCheck size={14} /> },
  { name: "REST APIs", status: "Operational", uptime: "99.99%", latency: "35ms", desc: "Standard synchronous JSON protocols.", icon: <Server size={14} /> },
  { name: "Realtime APIs", status: "Operational", uptime: "99.98%", latency: "18ms", desc: "Asynchronous event streams and socket meshes.", icon: <Activity size={14} /> },
  { name: "Places Engine", status: "Operational", uptime: "99.99%", latency: "45ms", desc: "Global points of interest and topology.", icon: <MapPin size={14} /> },
  { name: "Navigation Engine", status: "Operational", uptime: "99.98%", latency: "55ms", desc: "Intent-aware routing and pathfinding.", icon: <Network size={14} /> },
  { name: "Intent Intelligence", status: "Operational", uptime: "99.95%", latency: "65ms", desc: "Predictive user objective modeling.", icon: <Workflow size={14} /> },
  { name: "Notification Platform", status: "Operational", uptime: "99.99%", latency: "22ms", desc: "Global push notification delivery.", icon: <AlertCircle size={14} /> },
  { name: "Storage & Media", status: "Operational", uptime: "99.999%", latency: "10ms", desc: "Blob storage and Edge CDN caching.", icon: <Database size={14} /> },
];

const regions = [
  { name: "North America (US East)", latency: "12ms", health: "100%", failover: "Active" },
  { name: "North America (US West)", latency: "14ms", health: "100%", failover: "Active" },
  { name: "Europe (Frankfurt)", latency: "18ms", health: "100%", failover: "Active" },
  { name: "Europe (London)", latency: "15ms", health: "100%", failover: "Active" },
  { name: "Asia Pacific (Singapore)", latency: "22ms", health: "100%", failover: "Active" },
  { name: "Asia Pacific (Mumbai)", latency: "28ms", health: "100%", failover: "Active" },
  { name: "Asia Pacific (Tokyo)", latency: "20ms", health: "100%", failover: "Active" },
];

const metrics = [
  { label: "Avg API Response", value: "32ms", trend: "-2ms" },
  { label: "Realtime Event Delivery", value: "18ms", trend: "0ms" },
  { label: "Auth Success Rate", value: "99.999%", trend: "+0.001%" },
  { label: "Search Latency", value: "45ms", trend: "-5ms" },
  { label: "Concurrent Connections", value: "1.2M", trend: "+50k" },
  { label: "Daily API Requests", value: "8.5B", trend: "+12%" },
];

const incidents = [
  { date: "June 12, 2026", summary: "Elevated latency in Europe region.", services: ["REST APIs", "Places Engine"], impact: "API requests in Frankfurt took 150ms longer.", resolution: "45 minutes", cause: "BGP route leak at Tier-1 ISP.", prevention: "Implemented stricter RPKI validation at Edge." },
  { date: "May 28, 2026", summary: "Realtime socket disconnects.", services: ["Realtime APIs"], impact: "1.5% of connections dropped and reconnected.", resolution: "12 minutes", cause: "Load balancer capacity limit reached during peak spike.", prevention: "Automated pre-warming protocols adjusted." },
  { date: "April 15, 2026", summary: "Authentication degradation.", services: ["Authentication"], impact: "Token refresh failures for 0.05% of users.", resolution: "8 minutes", cause: "Database lock contention during schema migration.", prevention: "Migration scripts now require strict lock timeouts." },
];

const faqs = [
  { q: "How often is status updated?", a: "The Operational Dashboard updates globally every 30 seconds. Historical incidents are logged within 5 minutes of detection." },
  { q: "How is uptime calculated?", a: "Uptime is calculated on a trailing 30-day window based on synthetic health checks and actual user traffic success rates across all edge nodes." },
  { q: "What defines an incident?", a: "An incident is defined as any operational anomaly that degrades user experience, breaches SLAs, or causes a regional availability drop below 99.9%." },
  { q: "How are maintenance windows planned?", a: "Maintenance is scheduled 14 days in advance, performed strictly during regional low-traffic windows, and executed with zero-downtime rolling deployments." },
  { q: "Why may one region experience different latency?", a: "Latency fluctuates based on geographic distance, submarine cable routes, and localized ISP peering agreements. Our edge automatically routes you to the lowest-latency node available." },
  { q: "How do realtime services recover?", a: "Realtime sockets employ exponential backoff reconnect logic. If a regional ingress fails, connections automatically failover to the next nearest geographic edge." },
];

const knowledgeCards = [
  { title: "Living Status™", category: "Proprietary Concept", desc: "Platform health continuously reflects the true state of every major service rather than static, manual updates." },
  { title: "Reliability Graph™", category: "Proprietary Concept", desc: "Visualizes relationships between platform services so cascading dependencies are instantly transparent." },
  { title: "Transparency Timeline™", category: "Proprietary Concept", desc: "An immutable historical record of incidents, maintenance, and structural platform improvements." },
  { title: "Operational Intelligence™", category: "Proprietary Concept", desc: "Continuous ML analysis of system behavior to predict and mitigate resilience failures before they impact users." },
  { title: "Adaptive Reliability™", category: "Proprietary Concept", desc: "Infrastructure that autonomously adjusts compute and memory allocations to changing global demand." },
  { title: "Graceful Degradation", category: "Architecture Principle", desc: "If a non-critical microservice fails, the UI removes that specific feature rather than bringing down the entire application." },
  { title: "Zero Downtime Deployments", category: "Engineering Standard", desc: "Updates are rolled out gradually across the cluster, ensuring that traffic is never routed to a restarting node." },
  { title: "Chaos Engineering", category: "Testing Philosophy", desc: "We intentionally inject failures into production to ensure our automated recovery systems function flawlessly." }
];

// -----------------------------------------------------------------------------------
// REUSABLE COMPONENTS
// -----------------------------------------------------------------------------------

function DashboardCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col p-6 bg-[#030303] border border-white/[0.08] hover:border-white/[0.2] transition-colors rounded-[8px] h-full">
      {children}
    </div>
  );
}

// -----------------------------------------------------------------------------------
// SECTIONS
// -----------------------------------------------------------------------------------

function HeroSection() {
  return (
    <section className="relative w-full min-h-[85vh] flex flex-col items-center justify-center px-6 md:px-12 pt-20 bg-[#000000] overflow-hidden">
      {/* Precision Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />
      
      <div className="max-w-[1200px] mx-auto z-10 flex flex-col gap-12 w-full mt-12">
        <ScrollReveal>
          <div className="flex flex-col gap-4 max-w-[800px]">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#10B981] font-mono flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
              All Systems Operational
            </span>
            <h1 className="text-[56px] md:text-[88px] text-[#F2F2F0] font-serif-editorial font-light leading-[0.95] tracking-tight">
              The platform is always evolving.
            </h1>
          </div>
        </ScrollReveal>
        
        <ScrollReveal delay={0.2}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.1] border border-white/[0.1] rounded-[8px] overflow-hidden w-full">
            {[
              { label: "Overall Platform Status", value: "Operational", color: "text-[#10B981]" },
              { label: "Current Uptime", value: "99.998%", color: "text-[#F2F2F0]" },
              { label: "Global Availability", value: "100%", color: "text-[#F2F2F0]" },
              { label: "Last Updated", value: "Just now", color: "text-[#A0A0A0]" }
            ].map((stat, i) => (
              <div key={i} className="bg-[#050505] p-6 flex flex-col gap-2">
                <span className="text-[11px] uppercase tracking-widest text-[#6A6A6A] font-mono">{stat.label}</span>
                <span className={`text-[24px] font-medium font-serif-editorial ${stat.color}`}>{stat.value}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <p className="text-[16px] text-[#8A8A8A] font-light leading-relaxed max-w-[600px]">
            Every request, route, realtime update, and authentication contributes to a continuously monitored platform. "Operational" means every global node is serving traffic within standard latency tolerances with zero elevated error rates.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

function PlatformHealthSection() {
  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#020202] border-t border-white/[0.05]">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-16">
        
        <ScrollReveal>
          <div className="flex items-center justify-between">
            <h2 className="text-[32px] md:text-[48px] text-[#F2F2F0] font-serif-editorial font-light tracking-tight">
              Platform Health
            </h2>
            <div className="flex items-center gap-2 px-4 py-2 bg-[#10B981]/10 text-[#10B981] rounded-full text-[13px] font-mono">
              <CheckCircle2 size={14} /> Systems Normal
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((svc, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <DashboardCard>
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/[0.05]">
                  <div className="flex items-center gap-2 text-[#F2F2F0] font-medium text-[15px]">
                    <span className="text-[#6A6A6A]">{svc.icon}</span>
                    {svc.name}
                  </div>
                  <span className="text-[12px] text-[#10B981] font-mono">Operational</span>
                </div>
                <p className="text-[13px] text-[#8A8A8A] font-light mb-6">{svc.desc}</p>
                <div className="flex items-center justify-between text-[11px] font-mono text-[#6A6A6A]">
                  <span>Uptime: <span className="text-[#A0A0A0]">{svc.uptime}</span></span>
                  <span>Latency: <span className="text-[#A0A0A0]">{svc.latency}</span></span>
                </div>
              </DashboardCard>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}

function GlobalInfrastructureSection() {
  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#000000]">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-16">
        
        <div className="flex flex-col gap-6 max-w-[800px]">
          <ScrollReveal>
            <h2 className="text-[32px] md:text-[48px] text-[#F2F2F0] font-serif-editorial font-light tracking-tight">
              Global Infrastructure
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-[18px] text-[#8A8A8A] font-light leading-relaxed">
              Distributed infrastructure improves absolute resilience. By running isolated compute clusters across multiple global regions, we ensure automatic failover and minimal latency for users worldwide.
            </p>
          </ScrollReveal>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/[0.1] text-[11px] uppercase tracking-widest text-[#6A6A6A] font-mono">
                <th className="py-4 font-normal">Region</th>
                <th className="py-4 font-normal">Edge Status</th>
                <th className="py-4 font-normal">Latency</th>
                <th className="py-4 font-normal">Health</th>
                <th className="py-4 font-normal">Failover</th>
              </tr>
            </thead>
            <tbody>
              {regions.map((reg, i) => (
                <tr key={i} className="border-b border-white/[0.05] text-[14px] text-[#F2F2F0] font-light hover:bg-white/[0.02] transition-colors">
                  <td className="py-5 font-medium">{reg.name}</td>
                  <td className="py-5 text-[#10B981] flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#10B981]" /> Online</td>
                  <td className="py-5 font-mono text-[#A0A0A0]">{reg.latency}</td>
                  <td className="py-5 font-mono text-[#A0A0A0]">{reg.health}</td>
                  <td className="py-5 text-[#8A8A8A]">{reg.failover}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
}

function LiveMetricsSection() {
  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#020202] border-y border-white/[0.05]">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-16">
        
        <ScrollReveal>
          <h2 className="text-[32px] md:text-[48px] text-[#F2F2F0] font-serif-editorial font-light tracking-tight">
            Live Service Metrics
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.05] border border-white/[0.05] rounded-[8px] overflow-hidden">
          {metrics.map((m, i) => (
            <ScrollReveal key={i} delay={i * 0.05} className="bg-[#050505]">
              <div className="p-8 flex flex-col gap-4 hover:bg-white/[0.02] transition-colors cursor-default h-full">
                <span className="text-[12px] uppercase tracking-widest text-[#6A6A6A] font-mono">{m.label}</span>
                <div className="flex items-end gap-3">
                  <span className="text-[32px] text-[#F2F2F0] font-serif-editorial leading-none">{m.value}</span>
                  <span className={`text-[12px] font-mono mb-1 ${m.trend.startsWith('+') ? 'text-[#10B981]' : 'text-[#4F6EF7]'}`}>{m.trend}</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}

function DependenciesSection() {
  const steps = [
    "User Request", "Authentication", "Context Engine", 
    "Spatial Computing", "Reasoning", "Recommendation", "Response", "Monitoring"
  ];

  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#000000]">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        
        <div className="flex flex-col gap-8">
          <ScrollReveal>
            <h2 className="text-[32px] md:text-[48px] text-[#F2F2F0] font-serif-editorial font-light tracking-tight">
              Service Dependencies
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="text-[18px] text-[#A0A0A0] font-light leading-relaxed flex flex-col gap-6">
              <p>
                Every service cooperates seamlessly, but is architected to remain structurally isolated. 
              </p>
              <p>
                If the Context Engine experiences degraded performance, the Spatial Computing layer continues to function, providing base geometry while gracefully omitting personalized context.
              </p>
              <p>
                This ensures that cascading failures are mathematically contained.
              </p>
            </div>
          </ScrollReveal>
        </div>

        <div className="flex flex-col items-start lg:items-center">
          <ScrollReveal delay={0.2}>
            <div className="flex flex-col gap-2">
              {steps.map((step, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="px-6 py-3 border border-white/[0.1] bg-[#030303] text-[#F2F2F0] text-[13px] font-mono tracking-wide w-full md:w-[300px] text-center rounded">
                    {step}
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-[1px] h-4 bg-[#4A4A4A]" />
                  )}
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}

function IncidentHistorySection() {
  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#020202]">
      <div className="max-w-[1000px] mx-auto flex flex-col gap-16">
        
        <ScrollReveal>
          <div className="flex flex-col gap-4">
            <h2 className="text-[32px] md:text-[48px] text-[#F2F2F0] font-serif-editorial font-light tracking-tight">
              Incident History
            </h2>
            <p className="text-[16px] text-[#8A8A8A] font-light">We do not hide historical issues. Accountability builds trust.</p>
          </div>
        </ScrollReveal>

        <div className="flex flex-col gap-8 border-l border-white/[0.1] ml-4 md:ml-0 pl-6 md:pl-10">
          {incidents.map((inc, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="relative flex flex-col gap-6 p-8 bg-[#050505] border border-white/[0.05] rounded-[8px]">
                <div className="absolute -left-[30px] md:-left-[46px] top-8 w-3 h-3 rounded-full bg-[#050505] border-2 border-[#4A4A4A]" />
                
                <div className="flex justify-between items-start flex-wrap gap-4">
                  <h3 className="text-[20px] text-[#F2F2F0] font-medium">{inc.summary}</h3>
                  <span className="text-[12px] font-mono text-[#A0A0A0] px-3 py-1 bg-white/[0.05] rounded">{inc.date}</span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-[14px]">
                  <div className="flex flex-col gap-1"><span className="text-[#6A6A6A] font-mono text-[10px] uppercase">Services Affected</span><span className="text-[#F2F2F0]">{inc.services.join(", ")}</span></div>
                  <div className="flex flex-col gap-1"><span className="text-[#6A6A6A] font-mono text-[10px] uppercase">Resolution Time</span><span className="text-[#F2F2F0]">{inc.resolution}</span></div>
                  <div className="flex flex-col gap-1 md:col-span-2"><span className="text-[#6A6A6A] font-mono text-[10px] uppercase">Impact</span><span className="text-[#A0A0A0] font-light">{inc.impact}</span></div>
                  <div className="flex flex-col gap-1 md:col-span-2"><span className="text-[#6A6A6A] font-mono text-[10px] uppercase">Root Cause</span><span className="text-[#A0A0A0] font-light">{inc.cause}</span></div>
                  <div className="flex flex-col gap-1 md:col-span-2"><span className="text-[#6A6A6A] font-mono text-[10px] uppercase">Preventive Action</span><span className="text-[#A0A0A0] font-light">{inc.prevention}</span></div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}

function OperationalPrinciplesSection() {
  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#000000] border-y border-white/[0.05]">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        
        <div className="flex flex-col gap-8">
          <ScrollReveal>
            <h2 className="text-[32px] md:text-[48px] text-[#F2F2F0] font-serif-editorial font-light tracking-tight">
              Transparency Commitments
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="text-[18px] text-[#A0A0A0] font-light leading-relaxed flex flex-col gap-6">
              <p>Reliability is invisible when everything works. Transparency matters most when something changes.</p>
              <p>What users can always expect:</p>
              <ul className="flex flex-col gap-4 text-[16px]">
                <li className="flex gap-4 items-start"><ArrowRight size={16} className="mt-1 text-[#4A4A4A]" /> Immediate incident communication via SMS, email, and API webhooks.</li>
                <li className="flex gap-4 items-start"><ArrowRight size={16} className="mt-1 text-[#4A4A4A]" /> Public maintenance schedules with at least 14 days notice.</li>
                <li className="flex gap-4 items-start"><ArrowRight size={16} className="mt-1 text-[#4A4A4A]" /> Honest, blameless post-mortem summaries detailing root causes.</li>
                <li className="flex gap-4 items-start"><ArrowRight size={16} className="mt-1 text-[#4A4A4A]" /> Immutable historical availability metrics.</li>
              </ul>
            </div>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {knowledgeCards.slice(0, 4).map((card, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <DashboardCard>
                <div className="flex flex-col gap-2">
                  <span className="text-[9px] uppercase tracking-[0.2em] text-[#6A6A6A] font-medium font-mono">{card.category}</span>
                  <h4 className="text-[15px] text-[#F2F2F0] font-medium">{card.title}</h4>
                  <p className="text-[13px] text-[#8A8A8A] font-light mt-2">{card.desc}</p>
                </div>
              </DashboardCard>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#020202]">
      <div className="max-w-[1000px] mx-auto flex flex-col gap-16">
        <ScrollReveal>
          <h2 className="text-[32px] md:text-[48px] text-[#F2F2F0] font-serif-editorial font-light tracking-tight text-center">
            Status FAQ
          </h2>
        </ScrollReveal>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <div className="flex flex-col gap-4 p-8 bg-[#050505] border border-white/[0.05] rounded-[8px]">
                <h4 className="text-[18px] text-[#F2F2F0] font-medium">{faq.q}</h4>
                <p className="text-[15px] text-[#8A8A8A] font-light leading-relaxed">{faq.a}</p>
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
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#000000]">
      <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.1] border border-white/[0.1] rounded-[8px] overflow-hidden">
        <div className="bg-[#030303] p-12 flex flex-col gap-8">
          <h3 className="text-[12px] uppercase tracking-[0.2em] text-[#6A6A6A] font-medium font-mono">Traditional Status Pages</h3>
          <ul className="flex flex-col gap-6 text-[15px] text-[#8A8A8A] font-light">
            <li className="flex items-center gap-4"><span className="text-[#4A4A4A]">-</span> Current status only.</li>
            <li className="flex items-center gap-4"><span className="text-[#4A4A4A]">-</span> Basic green indicators.</li>
            <li className="flex items-center gap-4"><span className="text-[#4A4A4A]">-</span> Minimal explanation.</li>
            <li className="flex items-center gap-4"><span className="text-[#4A4A4A]">-</span> Opaque incident logs.</li>
            <li className="flex items-center gap-4"><span className="text-[#4A4A4A]">-</span> Limited transparency.</li>
          </ul>
        </div>
        <div className="bg-[#080808] p-12 flex flex-col gap-8">
          <h3 className="text-[12px] uppercase tracking-[0.2em] text-[#F2F2F0] font-medium font-mono">Rheole Status</h3>
          <ul className="flex flex-col gap-6 text-[15px] text-[#F2F2F0] font-light">
            <li className="flex items-center gap-4"><span className="text-[#10B981]">+</span> Rich platform health.</li>
            <li className="flex items-center gap-4"><span className="text-[#10B981]">+</span> Transparent reliability.</li>
            <li className="flex items-center gap-4"><span className="text-[#10B981]">+</span> Live metrics telemetry.</li>
            <li className="flex items-center gap-4"><span className="text-[#10B981]">+</span> Infrastructure insights.</li>
            <li className="flex items-center gap-4"><span className="text-[#10B981]">+</span> Engineering philosophy.</li>
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
            The Future of Platform Reliability.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="text-[18px] md:text-[22px] text-[#A0A0A0] font-light leading-relaxed flex flex-col gap-8">
            <p>
              Future platforms should not merely recover quickly. They should anticipate issues. Self-heal. Continuously optimize. Communicate transparently.
            </p>
            <p className="text-[#F2F2F0] font-medium font-serif-editorial italic mt-4 text-[24px]">
              Reliability should become an intelligent capability rather than a reactive process. Ambient Spatial Intelligence deserves infrastructure that is equally intelligent.
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

export default function StatusPage() {
  return (
    <div className="relative w-full bg-[#000000] text-[#F2F2F0] selection:bg-[#10B981]/20 selection:text-[#F2F2F0]">
      <HeroSection />
      <PlatformHealthSection />
      <GlobalInfrastructureSection />
      <LiveMetricsSection />
      <DependenciesSection />
      <IncidentHistorySection />
      <OperationalPrinciplesSection />
      <FaqSection />
      <ComparisonSection />
      <FutureSection />
    </div>
  );
}
