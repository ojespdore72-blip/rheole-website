"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import { 
  ChevronDown, Shield, Lock, Activity, Eye, Network, FileText, 
  CheckCircle2, AlertCircle, ArrowRight, Lightbulb, Scale
} from "lucide-react";
import { 
  ourCommitmentData, fivePillarsData, privacyData, securityData, 
  responsibleAiData, dataGovernanceData, platformReliabilityData, 
  transparencyData, complianceData, responsibleDisclosureData, 
  uniqueConceptsData, trustResourcesData, comparisonData, faqsData 
} from "@/lib/data/trust-center";

export default function TrustCenterPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#080808] text-[#F2F2F0] selection:bg-[#4F6EF7]/30 selection:text-[#F2F2F0] pb-32">
      
      {/* Hero Section */}
      <section className="pt-32 px-6 md:px-12 max-w-[1200px] mx-auto flex flex-col gap-8">
        <ScrollReveal>
          <span className="text-[11px] uppercase tracking-[0.2em] text-[#6A6A6A] font-medium flex items-center gap-3">
            <Shield className="w-4 h-4 text-[#4F6EF7]" /> Rheole Trust Center
          </span>
        </ScrollReveal>
        
        <ScrollReveal delay={0.1}>
          <h1 className="text-[48px] md:text-[80px] lg:text-[100px] text-[#F2F2F0] font-serif-editorial font-light leading-[1.05] tracking-tight">
            Trust is earned<br />through openness.
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="text-[20px] md:text-[28px] text-[#8A8A8A] font-light max-w-[800px] leading-relaxed flex flex-col gap-6">
            <p>
              Technology should make people feel confident, informed, and in control.
            </p>
            <p>
              Trust is not one department. It is reflected in every engineering decision, every privacy protocol, and every algorithm Rheole deploys.
            </p>
          </div>
        </ScrollReveal>

        {/* Live Metrics / Status Grid */}
        <ScrollReveal delay={0.3} className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { label: "Security Status", val: "Secure", color: "text-emerald-400" },
            { label: "Platform Avail", val: "99.99%" },
            { label: "Responsible AI", val: "Enforced" },
            { label: "Research", val: "Open" },
            { label: "Policy Updates", val: "Transparent" },
            { label: "Last Reviewed", val: "Today" }
          ].map((metric, i) => (
            <div key={i} className="p-5 rounded-2xl bg-[#0A0A0A] border border-white/[0.05]">
              <h4 className="text-[10px] uppercase tracking-widest text-[#6A6A6A] font-medium mb-2">{metric.label}</h4>
              <p className={`text-[16px] font-medium ${metric.color || 'text-white'}`}>{metric.val}</p>
            </div>
          ))}
        </ScrollReveal>
      </section>

      {/* Our Commitment */}
      <section className="pt-32 px-6 md:px-12 max-w-[1200px] mx-auto">
        <ScrollReveal>
          <h2 className="text-[32px] md:text-[48px] font-serif-editorial font-light mb-12 text-white">Our Commitment</h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ourCommitmentData.map((commit, i) => (
            <ScrollReveal key={i} delay={0.1 + (i * 0.05)} className="p-8 rounded-2xl bg-[#0A0A0A] border border-white/[0.05] hover:border-white/[0.15] transition-colors">
              <h3 className="text-[20px] font-medium text-white tracking-tight mb-4">{commit.title}</h3>
              <p className="text-[#A0A0A0] text-sm font-light leading-relaxed">{commit.desc}</p>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* The Five Pillars of Trust */}
      <section className="pt-32 px-6 md:px-12 max-w-[1200px] mx-auto">
        <ScrollReveal>
          <h2 className="text-[32px] md:text-[48px] font-serif-editorial font-light mb-8 text-white">The Five Pillars of Trust</h2>
          <p className="text-[#A0A0A0] text-lg font-light leading-relaxed mb-12 max-w-[700px]">
            Every product decision is evaluated through this framework to ensure absolute transparency, protection, and ethical deployment.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {fivePillarsData.map((pillar, i) => (
            <ScrollReveal key={i} delay={0.1 + (i * 0.05)} className="flex flex-col p-8 rounded-2xl bg-[#0A0A0A] border border-[#4F6EF7]/10 hover:border-[#4F6EF7]/30 transition-colors">
              <div className="w-10 h-10 rounded-full bg-[#111] border border-white/[0.1] text-white font-medium flex items-center justify-center mb-6">
                {i + 1}
              </div>
              <h3 className="text-[24px] font-medium text-white tracking-tight mb-2">{pillar.title}</h3>
              <p className="text-[#A0A0A0] text-sm font-light leading-relaxed mb-8 flex-1">{pillar.desc}</p>
              <ul className="flex flex-col gap-3">
                {pillar.points.map((point, idx) => (
                  <li key={idx} className="text-[#8A8A8A] text-[13px] font-light flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#4F6EF7] shrink-0 mt-0.5" />
                    {point}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Privacy & Security */}
      <section className="pt-32 px-6 md:px-12 max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Privacy */}
        <div>
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-8">
              <Eye className="w-8 h-8 text-white" />
              <h2 className="text-[32px] md:text-[48px] font-serif-editorial font-light text-white">Privacy</h2>
            </div>
            <p className="text-[#A0A0A0] text-lg font-light leading-relaxed mb-12">
              Privacy by Design. Engineered into the very foundation of our data pipelines and SDK architectures.
            </p>
          </ScrollReveal>
          <div className="flex flex-col gap-6">
            {privacyData.map((item, i) => (
              <ScrollReveal key={i} delay={0.1 + (i * 0.05)} className="p-6 rounded-2xl bg-[#0A0A0A] border border-white/[0.05]">
                <h3 className="text-[18px] font-medium text-white tracking-tight mb-2">{item.title}</h3>
                <p className="text-[#8A8A8A] text-sm font-light leading-relaxed">{item.desc}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Security */}
        <div>
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-8">
              <Lock className="w-8 h-8 text-white" />
              <h2 className="text-[32px] md:text-[48px] font-serif-editorial font-light text-white">Security</h2>
            </div>
            <p className="text-[#A0A0A0] text-lg font-light leading-relaxed mb-12">
              End-to-end mathematical protection, continuous monitoring, and strict Zero-Trust authentication.
            </p>
          </ScrollReveal>
          <div className="flex flex-col gap-6">
            {securityData.map((item, i) => (
              <ScrollReveal key={i} delay={0.1 + (i * 0.05)} className="p-6 rounded-2xl bg-[#0A0A0A] border border-white/[0.05]">
                <h3 className="text-[18px] font-medium text-white tracking-tight mb-2">{item.title}</h3>
                <p className="text-[#8A8A8A] text-sm font-light leading-relaxed">{item.desc}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Responsible AI & Data Governance */}
      <section className="pt-32 px-6 md:px-12 max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Responsible AI */}
        <div>
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-8">
              <Scale className="w-8 h-8 text-white" />
              <h2 className="text-[32px] md:text-[48px] font-serif-editorial font-light text-white">Responsible AI</h2>
            </div>
            <p className="text-[#A0A0A0] text-lg font-light leading-relaxed mb-12">
              Intelligent systems built on ethics, fairness, explainability, and strict human oversight.
            </p>
          </ScrollReveal>
          <div className="flex flex-col gap-6">
            {responsibleAiData.map((item, i) => (
              <ScrollReveal key={i} delay={0.1 + (i * 0.05)} className="p-6 rounded-2xl bg-[#0A0A0A] border border-white/[0.05]">
                <h3 className="text-[18px] font-medium text-white tracking-tight mb-2">{item.title}</h3>
                <p className="text-[#8A8A8A] text-sm font-light leading-relaxed">{item.desc}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Data Governance Lifecycle */}
        <div>
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-8">
              <FileText className="w-8 h-8 text-white" />
              <h2 className="text-[32px] md:text-[48px] font-serif-editorial font-light text-white">Data Governance</h2>
            </div>
            <p className="text-[#A0A0A0] text-lg font-light leading-relaxed mb-12">
              The complete lifecycle of how spatial data is handled, stored, accessed, and destroyed.
            </p>
          </ScrollReveal>
          <div className="flex flex-col gap-4">
            {dataGovernanceData.map((item, i) => (
              <ScrollReveal key={i} delay={0.1 + (i * 0.05)} className="flex items-start gap-4 p-6 rounded-2xl bg-[#0A0A0A] border border-white/[0.05]">
                <div className="w-1.5 h-1.5 rounded-full bg-[#4F6EF7] shrink-0 mt-2" />
                <div>
                  <h4 className="text-[11px] uppercase tracking-widest text-[#6A6A6A] font-medium mb-1">{item.phase}</h4>
                  <p className="text-[#A0A0A0] text-sm font-light leading-relaxed">{item.action}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Reliability & Transparency */}
      <section className="pt-32 px-6 md:px-12 max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Reliability */}
        <div>
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-8">
              <Activity className="w-8 h-8 text-white" />
              <h2 className="text-[32px] md:text-[48px] font-serif-editorial font-light text-white">Reliability</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {platformReliabilityData.map((item, i) => (
              <ScrollReveal key={i} delay={0.1 + (i * 0.05)} className="p-6 rounded-2xl bg-[#0A0A0A] border border-white/[0.05]">
                <h4 className="text-[11px] uppercase tracking-widest text-[#6A6A6A] font-medium mb-2">{item.stat}</h4>
                <p className="text-[28px] font-light text-white tracking-tight mb-2">{item.value}</p>
                <p className="text-[#8A8A8A] text-[13px] font-light leading-relaxed">{item.desc}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Transparency */}
        <div>
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-8">
              <Network className="w-8 h-8 text-white" />
              <h2 className="text-[32px] md:text-[48px] font-serif-editorial font-light text-white">Transparency</h2>
            </div>
          </ScrollReveal>
          <div className="flex flex-col gap-4">
            {transparencyData.map((item, i) => (
              <ScrollReveal key={i} delay={0.1 + (i * 0.05)} className="p-6 rounded-2xl bg-[#0A0A0A] border border-white/[0.05] flex items-center justify-between">
                <div>
                  <h3 className="text-[18px] font-medium text-white tracking-tight mb-1">{item.title}</h3>
                  <p className="text-[#8A8A8A] text-sm font-light">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance & Responsible Disclosure Flowchart */}
      <section className="pt-32 px-6 md:px-12 max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
        
        {/* Compliance */}
        <div className="lg:col-span-1">
          <ScrollReveal>
            <h2 className="text-[32px] md:text-[48px] font-serif-editorial font-light mb-8 text-white">Compliance</h2>
            <p className="text-[#A0A0A0] text-sm font-light leading-relaxed mb-8">
              We adhere strictly to global standards, ensuring our legal framework evolves alongside technological advancement.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="p-8 rounded-2xl bg-[#0A0A0A] border border-white/[0.05] mb-6">
              <h4 className="text-[11px] uppercase tracking-widest text-white font-medium mb-4">Current</h4>
              <ul className="flex flex-col gap-3">
                {complianceData.current.map((item, i) => (
                  <li key={i} className="text-[#8A8A8A] text-sm font-light flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#4F6EF7]" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="p-8 rounded-2xl bg-[#111] border border-white/[0.05]">
              <h4 className="text-[11px] uppercase tracking-widest text-[#6A6A6A] font-medium mb-4">Future / In Progress</h4>
              <ul className="flex flex-col gap-3">
                {complianceData.future.map((item, i) => (
                  <li key={i} className="text-[#6A6A6A] text-sm font-light flex items-center gap-3">
                    <AlertCircle className="w-4 h-4 text-[#333]" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>

        {/* Responsible Disclosure */}
        <div className="lg:col-span-2">
          <ScrollReveal>
            <h2 className="text-[32px] md:text-[48px] font-serif-editorial font-light mb-8 text-white">Responsible Disclosure</h2>
            <p className="text-[#A0A0A0] text-lg font-light leading-relaxed mb-12">
              We actively collaborate with security researchers globally to identify and remediate vulnerabilities securely and efficiently.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="flex flex-col gap-4 relative">
              <div className="absolute left-6 top-10 bottom-10 w-[1px] bg-[#333] hidden md:block" />
              {responsibleDisclosureData.map((step, i) => (
                <div key={i} className="flex gap-6 relative items-start">
                  <div className="w-12 h-12 rounded-full bg-[#111] border border-white/[0.1] text-white flex items-center justify-center shrink-0 z-10 hidden md:flex">
                    {step.step}
                  </div>
                  <div className="p-6 md:p-8 rounded-2xl bg-[#0A0A0A] border border-white/[0.05] flex-1">
                    <h3 className="text-[18px] font-medium text-white tracking-tight mb-2">
                      <span className="md:hidden mr-2 text-[#4F6EF7]">{step.step}.</span>
                      {step.title}
                    </h3>
                    <p className="text-[#8A8A8A] text-sm font-light leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Comparison & Unique Concepts */}
      <section className="pt-32 px-6 md:px-12 max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <ScrollReveal>
            <h2 className="text-[32px] md:text-[48px] font-serif-editorial font-light mb-12 text-white">Traditional vs Rheole</h2>
          </ScrollReveal>
          
          <div className="flex flex-col gap-4">
            <ScrollReveal delay={0.1}>
              <div className="p-8 rounded-2xl bg-[#111] border border-red-500/10 opacity-70">
                <h3 className="text-[18px] font-medium text-white tracking-tight mb-6 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500" /> Traditional Trust Centers
                </h3>
                <ul className="flex flex-col gap-3">
                  {comparisonData.traditional.map((item, i) => (
                    <li key={i} className="text-[#8A8A8A] text-sm font-light flex items-center gap-3">
                      <span className="w-1 h-1 rounded-full bg-[#333]" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="p-8 rounded-2xl bg-[#0A0A0A] border border-[#4F6EF7]/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#4F6EF7]/5 rounded-bl-full" />
                <h3 className="text-[18px] font-medium text-white tracking-tight mb-6 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#4F6EF7]" /> Rheole Trust Center
                </h3>
                <ul className="flex flex-col gap-3">
                  {comparisonData.rheole.map((item, i) => (
                    <li key={i} className="text-[#D0D0D0] text-sm font-light flex items-center gap-3">
                      <span className="w-1 h-1 rounded-full bg-[#4F6EF7]/50" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>

        <div>
          <ScrollReveal>
            <h2 className="text-[32px] md:text-[48px] font-serif-editorial font-light mb-12 text-white">Unique Concepts</h2>
          </ScrollReveal>
          
          <div className="flex flex-col gap-6">
            {uniqueConceptsData.map((concept, i) => (
              <ScrollReveal key={i} delay={0.1 + (i * 0.1)}>
                <div className="p-6 rounded-2xl bg-[#0A0A0A] border border-white/[0.05] hover:border-[#4F6EF7]/30 transition-colors">
                  <h3 className="text-[18px] font-medium text-white tracking-tight mb-2">{concept.title}</h3>
                  <p className="text-[#8A8A8A] text-sm font-light leading-relaxed">{concept.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Resources */}
      <section className="pt-32 px-6 md:px-12 max-w-[1200px] mx-auto">
        <ScrollReveal>
          <h2 className="text-[32px] md:text-[48px] font-serif-editorial font-light mb-12 text-white">Trust Resources</h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustResourcesData.map((resource, i) => (
            <ScrollReveal key={i} delay={0.1 + (i * 0.05)}>
              <Link href={resource.link} className="block p-8 rounded-2xl bg-[#0A0A0A] border border-white/[0.05] hover:border-white/[0.2] transition-colors group">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-[20px] font-medium text-white tracking-tight">{resource.title}</h3>
                  <ArrowRight className="w-5 h-5 text-[#333] group-hover:text-white transition-colors" />
                </div>
                <p className="text-[#8A8A8A] text-sm font-light leading-relaxed">{resource.desc}</p>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        {/* Knowledge Block */}
        <ScrollReveal delay={0.4} className="mt-12">
          <div className="p-6 rounded-2xl bg-[#111] border border-white/[0.05] flex gap-6 items-start max-w-[800px]">
            <Lightbulb className="w-6 h-6 text-[#4F6EF7] shrink-0 mt-1" />
            <div>
              <h4 className="text-white font-medium mb-2 tracking-tight">Trust Architecture™</h4>
              <p className="text-[#8A8A8A] text-sm leading-relaxed">
                Notice how every resource is interconnected. Security informs Privacy. Privacy dictates Architecture. Architecture enforces Responsible AI. Trust cannot exist in isolation—it must be architected as a singular, unified platform.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Frequently Asked Questions */}
      <section className="pt-32 px-6 md:px-12 max-w-[1000px] mx-auto">
        <ScrollReveal>
          <h2 className="text-[32px] md:text-[48px] font-serif-editorial font-light mb-12 text-white">Frequently Asked Questions</h2>
        </ScrollReveal>

        <div className="flex flex-col gap-2">
          {faqsData.map((faq, i) => (
            <ScrollReveal key={i} delay={0.1 + (i * 0.02)}>
              <div className="border-b border-white/[0.05] overflow-hidden">
                <button 
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full py-6 flex items-center justify-between text-left group"
                >
                  <span className={`text-[18px] md:text-[22px] font-light transition-colors duration-300 ${activeFaq === i ? 'text-white' : 'text-[#A0A0A0] group-hover:text-[#D0D0D0]'}`}>
                    {faq.q}
                  </span>
                  <ChevronDown className={`w-5 h-5 text-[#6A6A6A] transition-transform duration-500 ${activeFaq === i ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {activeFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <p className="pb-8 text-[#8A8A8A] text-[16px] font-light leading-relaxed max-w-[800px]">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Building The Future */}
      <section className="pt-32 px-6 md:px-12 max-w-[1000px] mx-auto text-center mb-16">
        <ScrollReveal>
          <Shield className="w-12 h-12 text-[#4F6EF7] mx-auto mb-8 opacity-50" />
          <h2 className="text-[32px] md:text-[48px] font-serif-editorial font-light mb-8 text-white">Building the Future</h2>
          <p className="text-[#8A8A8A] text-xl font-light leading-relaxed max-w-[800px] mx-auto mb-8">
            Trust should become stronger as technology becomes more intelligent. The future of Ambient Spatial Intelligence depends not only on innovation, but also on transparency, responsibility, and absolute accountability.
          </p>
          <p className="text-[#D0D0D0] text-xl font-medium tracking-tight">
            Rheole is committed to building technology that earns confidence every day.
          </p>
        </ScrollReveal>
      </section>

    </div>
  );
}
