"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import { 
  ChevronDown, HelpCircle, ArrowRight, LifeBuoy, BookOpen, 
  MessageSquare, Network, ShieldCheck, Activity, Terminal
} from "lucide-react";
import { 
  supportPhilosophyData, supportPathwaysData, supportChannelsData, 
  technicalAssistanceData, uniqueConceptsData, bestPracticesData, 
  comparisonData 
} from "@/lib/data/developer-support";

export default function DeveloperSupportPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#080808] text-[#F2F2F0] selection:bg-[#4F6EF7]/30 selection:text-[#F2F2F0] pb-32">
      
      {/* Hero / Introduction */}
      <section className="pt-32 px-6 md:px-12 max-w-[1200px] mx-auto flex flex-col gap-8">
        <ScrollReveal>
          <span className="text-[11px] uppercase tracking-[0.2em] text-[#6A6A6A] font-medium flex items-center gap-3">
            <LifeBuoy className="w-4 h-4 text-[#4F6EF7]" /> Developer Success
          </span>
        </ScrollReveal>
        
        <ScrollReveal delay={0.1}>
          <h1 className="text-[48px] md:text-[80px] lg:text-[100px] text-[#F2F2F0] font-serif-editorial font-light leading-[1.05] tracking-tight">
            You&apos;re building.<br />We&apos;re here to help.
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="text-[20px] md:text-[28px] text-[#8A8A8A] font-light max-w-[800px] leading-relaxed flex flex-col gap-6">
            <p>
              Great platforms don&apos;t simply provide APIs. They help developers succeed. Support begins long before a problem occurs.
            </p>
            <p>
              Whether you&apos;re building your first prototype or operating applications at scale, Rheole provides multiple ways to learn, troubleshoot, and receive expert assistance.
            </p>
          </div>
        </ScrollReveal>

        {/* Live Metrics */}
        <ScrollReveal delay={0.3} className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Avg Response", val: "< 15 min" },
            { label: "Docs Coverage", val: "100%" },
            { label: "Dev Satisfaction", val: "99.8%" },
            { label: "Platform Status", val: "All Systems Go", color: "text-emerald-400" }
          ].map((metric, i) => (
            <div key={i} className="p-6 rounded-2xl bg-[#0A0A0A] border border-white/[0.05]">
              <h4 className="text-[11px] uppercase tracking-widest text-[#6A6A6A] font-medium mb-2">{metric.label}</h4>
              <p className={`text-[20px] font-medium ${metric.color || 'text-white'}`}>{metric.val}</p>
            </div>
          ))}
        </ScrollReveal>
      </section>

      {/* Our Support Philosophy */}
      <section className="pt-32 px-6 md:px-12 max-w-[1200px] mx-auto">
        <ScrollReveal>
          <h2 className="text-[32px] md:text-[48px] font-serif-editorial font-light mb-12 text-white">Our Support Philosophy</h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {supportPhilosophyData.map((phil, i) => (
            <ScrollReveal key={i} delay={0.1 + (i * 0.05)} className="p-8 rounded-2xl bg-[#0A0A0A] border border-white/[0.05] hover:border-white/[0.15] transition-colors">
              <h3 className="text-[20px] font-medium text-white tracking-tight mb-4">{phil.title}</h3>
              <p className="text-[#A0A0A0] text-sm font-light leading-relaxed">{phil.desc}</p>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Get Help Your Way (Pathways) */}
      <section className="pt-32 px-6 md:px-12 max-w-[1200px] mx-auto">
        <ScrollReveal>
          <h2 className="text-[32px] md:text-[48px] font-serif-editorial font-light mb-8 text-white">Get Help Your Way</h2>
          <p className="text-[#A0A0A0] text-lg font-light leading-relaxed mb-12 max-w-[700px]">
            We provide multiple pathways designed for different stages of your development lifecycle. Choose the channel that best fits your immediate need.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {supportPathwaysData.map((path, i) => (
            <ScrollReveal key={i} delay={0.1 + (i * 0.05)} className="flex flex-col p-6 rounded-2xl bg-[#0A0A0A] border border-white/[0.05]">
              <h3 className="text-[18px] font-medium text-white tracking-tight mb-2">{path.name}</h3>
              <p className="text-[#A0A0A0] text-sm font-light leading-relaxed mb-6 flex-1">{path.desc}</p>
              <div className="pt-4 border-t border-white/[0.05]">
                <h4 className="text-[11px] uppercase tracking-widest text-[#6A6A6A] font-medium mb-1">Ideal For</h4>
                <p className="text-[#8A8A8A] text-[13px] font-light leading-relaxed">{path.idealFor}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Support Channels & Technical Assistance */}
      <section className="pt-32 px-6 md:px-12 max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <ScrollReveal>
            <h2 className="text-[32px] md:text-[48px] font-serif-editorial font-light mb-12 text-white">Support Channels</h2>
          </ScrollReveal>
          <div className="flex flex-col gap-4">
            {supportChannelsData.map((channel, i) => (
              <ScrollReveal key={i} delay={0.1 + (i * 0.05)} className="p-6 rounded-2xl bg-[#0A0A0A] border border-white/[0.05] flex items-center justify-between">
                <div>
                  <h3 className="text-[18px] font-medium text-white tracking-tight mb-1">{channel.name}</h3>
                  <p className="text-[#8A8A8A] text-sm font-light">{channel.useCase}</p>
                </div>
                <span className="text-[11px] uppercase tracking-widest font-medium px-3 py-1 rounded-full bg-[#111] text-[#6A6A6A] border border-white/[0.05] shrink-0">
                  {channel.time}
                </span>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <div>
          <ScrollReveal>
            <h2 className="text-[32px] md:text-[48px] font-serif-editorial font-light mb-12 text-white">Technical Assistance</h2>
          </ScrollReveal>
          <div className="flex flex-col gap-6">
            {technicalAssistanceData.map((assist, i) => (
              <ScrollReveal key={i} delay={0.1 + (i * 0.05)} className="flex gap-4 items-start">
                <Terminal className="w-5 h-5 text-[#4F6EF7] shrink-0 mt-1" />
                <div>
                  <h3 className="text-[18px] font-medium text-white tracking-tight mb-2">{assist.title}</h3>
                  <p className="text-[#8A8A8A] text-sm font-light leading-relaxed">{assist.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Escalation Journey Flowchart */}
      <section className="pt-32 px-6 md:px-12 max-w-[1200px] mx-auto">
        <ScrollReveal>
          <h2 className="text-[32px] md:text-[48px] font-serif-editorial font-light mb-12 text-white text-center">The Escalation Journey</h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 p-8 md:p-12 rounded-3xl bg-[#0A0A0A] border border-white/[0.05] overflow-x-auto">
            {["Documentation", "AI Assistant", "Community", "Developer Support", "Engineering Review"].map((step, i) => (
              <React.Fragment key={i}>
                <div className="flex flex-col items-center text-center min-w-[140px]">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${i === 4 ? 'bg-[#4F6EF7]/10 border border-[#4F6EF7]/30 text-[#4F6EF7]' : 'bg-[#111] border border-white/[0.1] text-[#A0A0A0]'}`}>
                    {i + 1}
                  </div>
                  <h4 className="text-white font-medium text-sm">{step}</h4>
                </div>
                {i < 4 && (
                  <>
                    <ArrowRight className="w-6 h-6 text-[#333] hidden lg:block shrink-0" />
                    <div className="w-[1px] h-6 bg-[#333] lg:hidden" />
                  </>
                )}
              </React.Fragment>
            ))}
          </div>
          <p className="text-center text-[#8A8A8A] text-sm mt-6 font-light">Every resolved issue circles back to step 1, improving documentation for everyone.</p>
        </ScrollReveal>
      </section>

      {/* Comparison & Unique Concepts */}
      <section className="pt-32 px-6 md:px-12 max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <ScrollReveal>
            <h2 className="text-[32px] md:text-[48px] font-serif-editorial font-light mb-12 text-white">Rheole vs Traditional</h2>
          </ScrollReveal>
          
          <div className="flex flex-col gap-4">
            <ScrollReveal delay={0.1}>
              <div className="p-8 rounded-2xl bg-[#111] border border-red-500/10 opacity-70">
                <h3 className="text-[18px] font-medium text-white tracking-tight mb-6 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500" /> Traditional Support
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
                  <div className="w-2 h-2 rounded-full bg-[#4F6EF7]" /> Rheole Developer Support
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

      {/* Best Practices */}
      <section className="pt-32 px-6 md:px-12 max-w-[1200px] mx-auto">
        <ScrollReveal>
          <h2 className="text-[32px] md:text-[48px] font-serif-editorial font-light mb-12 text-white">Best Practices</h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bestPracticesData.map((practice, i) => (
            <ScrollReveal key={i} delay={0.1 + (i * 0.05)} className="p-8 rounded-2xl bg-[#0A0A0A] border border-white/[0.05]">
              <h3 className="text-[18px] font-medium text-white tracking-tight mb-4">{practice.title}</h3>
              <p className="text-[#A0A0A0] text-sm font-light leading-relaxed">{practice.desc}</p>
            </ScrollReveal>
          ))}
        </div>

        {/* Knowledge Block */}
        <ScrollReveal delay={0.4} className="mt-12">
          <div className="p-6 rounded-2xl bg-[#111] border border-white/[0.05] flex gap-6 items-start max-w-[800px]">
            <ShieldCheck className="w-6 h-6 text-[#4F6EF7] shrink-0 mt-1" />
            <div>
              <h4 className="text-white font-medium mb-2 tracking-tight">Enterprise Success</h4>
              <p className="text-[#8A8A8A] text-sm leading-relaxed mb-4">
                For larger organizations, we provide dedicated onboarding, Technical Account Management, migration planning, and SLA-backed priority routing. Enterprise support isn&apos;t just faster—it&apos;s a strategic partnership designed to ensure your spatial architecture scales flawlessly.
              </p>
              <Link href="/company/connect/contact" className="text-sm font-medium text-white hover:text-[#4F6EF7] transition-colors underline underline-offset-4 decoration-white/20">
                Contact Enterprise Sales →
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Continue to FAQs */}
      <section className="pt-32 px-6 md:px-12 max-w-[1000px] mx-auto mb-32">
        <ScrollReveal>
          <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-b from-[#111] to-[#0A0A0A] border border-white/[0.05] flex flex-col items-center text-center">
            <h2 className="text-[32px] md:text-[48px] font-serif-editorial font-light mb-6 text-white">Have more questions?</h2>
            <p className="text-[#8A8A8A] text-lg font-light leading-relaxed mb-8 max-w-[600px]">
              Explore our centralized knowledge base for detailed answers regarding Developer Support.
            </p>
            <Link 
              href="/resources/faq#section-5"
              className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full text-sm font-medium hover:bg-[#F2F2F0] transition-colors"
            >
              Read Developer Support FAQs
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>
      </section>

      {/* Continuous Improvement Conclusion */}
      <section className="pt-32 px-6 md:px-12 max-w-[1000px] mx-auto text-center mb-16">
        <ScrollReveal>
          <Activity className="w-12 h-12 text-[#4F6EF7] mx-auto mb-8 opacity-50" />
          <h2 className="text-[32px] md:text-[48px] font-serif-editorial font-light mb-8 text-white">Continuous Improvement</h2>
          <p className="text-[#8A8A8A] text-xl font-light leading-relaxed max-w-[800px] mx-auto">
            Every question improves documentation. Every bug strengthens the platform. Every conversation teaches us something. Developer support is not a department. It is a continuous collaboration between Rheole and its developer community.
          </p>
        </ScrollReveal>
      </section>

    </div>
  );
}
