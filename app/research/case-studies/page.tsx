"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronDown, CheckCircle2, ChevronRight, BookOpen, Quote } from "lucide-react";
import { caseStudiesData, observationsData, principlesData } from "@/lib/data/case-studies";
import ScrollReveal from "@/components/ScrollReveal";

const KnowledgeBlock = ({ label, children }: { label: string, children: React.ReactNode }) => (
  <div className="border-l-2 border-[#4F6EF7]/50 pl-6 py-2 my-8 bg-white/[0.02] p-6 rounded-r-xl">
    <span className="text-[11px] uppercase tracking-widest text-[#4F6EF7] font-medium block mb-2">{label}</span>
    <div className="text-[15px] text-[#A0A0A0] leading-relaxed font-light italic">
      {children}
    </div>
  </div>
);

export default function CaseStudiesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#080808] text-[#F2F2F0] selection:bg-[#4F6EF7]/30 selection:text-[#F2F2F0] font-sans pb-32">
      
      {/* 1. HERO & QUESTION */}
      <section className="pt-40 px-6 md:px-12 max-w-[1200px] mx-auto flex flex-col gap-12">
        <ScrollReveal>
          <span className="text-[11px] uppercase tracking-[0.2em] text-[#6A6A6A] font-medium">Rheole Research</span>
        </ScrollReveal>
        
        <ScrollReveal delay={0.1}>
          <h1 className="text-[48px] md:text-[80px] lg:text-[100px] text-[#F2F2F0] font-serif-editorial font-light leading-[1.05] tracking-tight max-w-[1000px]">
            Every meaningful innovation begins with a <span className="text-[#8A8A8A]">real-world question.</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.2} className="flex flex-col gap-6 max-w-[700px]">
          <p className="text-[20px] md:text-[24px] text-[#A0A0A0] font-light leading-relaxed">
            Rather than beginning with technology, Rheole begins with observation. The goal of every case study is to understand people, places, and environments before proposing solutions.
          </p>
          <p className="text-[16px] text-[#6A6A6A] font-light leading-relaxed">
            Research becomes meaningful only when it improves the real world. Every city, every community, every journey, every decision, and every interaction contains opportunities to better understand how people experience their surroundings. Case studies transform ideas into practical understanding.
          </p>
        </ScrollReveal>

        <KnowledgeBlock label="Research Philosophy">
          &quot;These are not customer stories. They are thoughtful explorations of how the future of Ambient Spatial Intelligence can improve the way people understand and interact with the world around them.&quot;
        </KnowledgeBlock>
      </section>

      <div className="w-full h-[1px] bg-white/[0.05] max-w-[1200px] mx-auto my-32" />

      {/* 2. THE RESEARCH APPROACH */}
      <section className="px-6 md:px-12 max-w-[1200px] mx-auto">
        <ScrollReveal>
          <h2 className="text-[32px] md:text-[48px] text-white font-serif-editorial font-light mb-12">The Research Approach</h2>
          <p className="text-[18px] text-[#A0A0A0] font-light max-w-[800px] leading-relaxed mb-16">
            The Rheole methodology is cyclical and deeply human-centric. This process ensures that we are building for actual human friction, rather than inventing problems to solve with AI.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-12">
          {["Observe", "Understand", "Research", "Hypothesise", "Prototype", "Evaluate", "Learn", "Refine"].map((step, idx) => (
            <ScrollReveal key={step} delay={idx * 0.1}>
              <div className="flex flex-col items-center justify-center gap-4 p-4 border border-white/[0.05] rounded-xl bg-white/[0.01]">
                <span className="text-[12px] text-[#6A6A6A] font-medium">0{idx + 1}</span>
                <span className="text-[14px] text-white">{step}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <div className="w-full h-[1px] bg-white/[0.05] max-w-[1200px] mx-auto my-32" />

      {/* 3. CASE STUDY LIBRARY */}
      <section className="px-6 md:px-12 max-w-[1200px] mx-auto">
        <ScrollReveal>
          <h2 className="text-[32px] md:text-[48px] text-white font-serif-editorial font-light mb-12">Case Study Library</h2>
          <p className="text-[18px] text-[#A0A0A0] font-light max-w-[800px] leading-relaxed mb-16">
            A collection of long-form conceptual case studies exploring the practical application of Ambient Spatial Intelligence.
          </p>
        </ScrollReveal>

        <div className="flex flex-col gap-12">
          {caseStudiesData.map((cs, idx) => (
            <ScrollReveal key={cs.id} delay={0.1}>
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 p-8 md:p-12 border border-white/[0.05] rounded-3xl bg-[#0A0A0A] group hover:border-white/[0.1] transition-all duration-500">
                
                {/* Left Column: Core Info */}
                <div className="lg:w-1/3 flex flex-col gap-6">
                  <h3 className="text-[24px] md:text-[32px] font-serif-editorial font-light text-white leading-tight">
                    {cs.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {cs.context.split(", ").map(tag => (
                      <span key={tag} className="text-[11px] px-3 py-1 rounded-full border border-white/[0.1] text-[#8A8A8A]">{tag}</span>
                    ))}
                  </div>
                </div>

                {/* Right Column: Deep Dive */}
                <div className="lg:w-2/3 flex flex-col gap-8">
                  <div>
                    <h4 className="text-[12px] uppercase tracking-widest text-[#6A6A6A] font-medium mb-3">The Observed Challenge</h4>
                    <p className="text-[16px] text-[#A0A0A0] font-light leading-relaxed">{cs.observedChallenge}</p>
                  </div>
                  <div>
                    <h4 className="text-[12px] uppercase tracking-widest text-[#6A6A6A] font-medium mb-3">Spatial Interpretation</h4>
                    <p className="text-[16px] text-[#A0A0A0] font-light leading-relaxed">{cs.spatialInterpretation}</p>
                  </div>
                  <div className="bg-white/[0.02] p-6 rounded-2xl border border-white/[0.02]">
                    <h4 className="text-[12px] uppercase tracking-widest text-[#6A6A6A] font-medium mb-3">Hypothesis</h4>
                    <p className="text-[16px] text-white font-light leading-relaxed">{cs.hypothesis}</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-[12px] uppercase tracking-widest text-[#6A6A6A] font-medium mb-3">User Experience</h4>
                      <p className="text-[14px] text-[#8A8A8A] font-light leading-relaxed">{cs.userExperience}</p>
                    </div>
                    <div>
                      <h4 className="text-[12px] uppercase tracking-widest text-[#6A6A6A] font-medium mb-3">Lessons Learned</h4>
                      <p className="text-[14px] text-[#8A8A8A] font-light leading-relaxed">{cs.lessonsLearned}</p>
                    </div>
                  </div>
                </div>

              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <div className="w-full h-[1px] bg-white/[0.05] max-w-[1200px] mx-auto my-32" />

      {/* 4. OBSERVATIONS */}
      <section className="px-6 md:px-12 max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-16">
        <div className="lg:w-1/3">
          <ScrollReveal>
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#6A6A6A] font-medium mb-4 block">Chapter IV</span>
            <h2 className="text-[32px] md:text-[48px] text-white font-serif-editorial font-light mb-6">Observations</h2>
            <p className="text-[16px] text-[#8A8A8A] font-light leading-relaxed">
              Recurring patterns discovered across our physical and digital field studies. These truths form the baseline of our spatial logic.
            </p>
          </ScrollReveal>
        </div>
        <div className="lg:w-2/3 flex flex-col gap-12">
          {observationsData.map((obs, idx) => (
            <ScrollReveal key={idx} delay={0.1 * idx}>
              <h3 className="text-[20px] text-white font-medium mb-4">{obs.title}</h3>
              <p className="text-[16px] text-[#A0A0A0] font-light leading-relaxed">{obs.description}</p>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <div className="w-full h-[1px] bg-white/[0.05] max-w-[1200px] mx-auto my-32" />

      {/* 5. SPATIAL INTERPRETATION */}
      <section className="px-6 md:px-12 max-w-[1200px] mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16 flex flex-col items-center">
            <h2 className="text-[32px] md:text-[48px] text-white font-serif-editorial font-light mb-6">Spatial Interpretation</h2>
            <p className="text-[18px] text-[#A0A0A0] font-light max-w-[600px] leading-relaxed">
              How Rheole reframes traditional digital mapping into living spatial dynamics.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { a: "Location", b: "Context" },
            { a: "Movement", b: "Behaviour" },
            { a: "Neighbourhoods", b: "Living Systems" },
            { a: "Events", b: "Opportunities" },
            { a: "Communities", b: "Networks" }
          ].map((item, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.1}>
              <div className="bg-[#0A0A0A] border border-white/[0.05] p-8 rounded-2xl flex flex-col items-center justify-center text-center gap-4">
                <span className="text-[18px] text-[#6A6A6A] line-through decoration-1">{item.a}</span>
                <ArrowRight className="text-[#4F6EF7]" size={20} />
                <span className="text-[24px] text-white font-medium">{item.b}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <div className="w-full h-[1px] bg-white/[0.05] max-w-[1200px] mx-auto my-32" />

      {/* 6. KEY INSIGHTS */}
      <section className="px-6 md:px-12 max-w-[1200px] mx-auto">
        <ScrollReveal>
          <h2 className="text-[32px] md:text-[48px] text-white font-serif-editorial font-light mb-16">Key Insights</h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {[
            "Ambient intelligence should reduce cognitive load.",
            "Recommendations should explain themselves.",
            "Local knowledge creates stronger communities.",
            "Time changes the meaning of place.",
            "Context influences every decision.",
            "Design should encourage curiosity.",
            "People trust transparent systems."
          ].map((insight, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.05}>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="text-[#4F6EF7] shrink-0 mt-1" size={18} />
                <p className="text-[16px] text-[#F2F2F0] font-light leading-relaxed">{insight}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <div className="w-full h-[1px] bg-white/[0.05] max-w-[1200px] mx-auto my-32" />

      {/* 8. FUTURE RESEARCH */}
      <section className="px-6 md:px-12 max-w-[1200px] mx-auto bg-white/[0.02] border border-white/[0.05] p-12 md:p-24 rounded-3xl text-center flex flex-col items-center">
        <ScrollReveal>
          <span className="text-[11px] uppercase tracking-[0.2em] text-[#4F6EF7] font-medium mb-6 block">Open Questions™</span>
          <h2 className="text-[32px] md:text-[48px] text-white font-serif-editorial font-light mb-8 max-w-[800px]">
            The questions driving our future research agenda.
          </h2>
        </ScrollReveal>
        
        <div className="flex flex-col gap-6 w-full max-w-[600px] mt-8 text-left">
          {[
            "How can cities become easier to understand?",
            "How can recommendations remain transparent?",
            "How can exploration become more inclusive?",
            "How can digital systems strengthen local communities?",
            "How can AI encourage curiosity instead of dependency?"
          ].map((q, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.1}>
              <div className="flex items-center justify-between p-6 bg-[#0A0A0A] border border-white/[0.05] rounded-xl hover:border-white/[0.2] transition-colors cursor-pointer group">
                <span className="text-[16px] text-[#A0A0A0] group-hover:text-white transition-colors">{q}</span>
                <ChevronRight className="text-[#4A4A4A] group-hover:text-white transition-colors" size={18} />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <div className="w-full h-[1px] bg-white/[0.05] max-w-[1200px] mx-auto my-32" />

      {/* 9. RESEARCH PRINCIPLES */}
      <section className="px-6 md:px-12 max-w-[1200px] mx-auto">
        <ScrollReveal>
          <h2 className="text-[32px] md:text-[48px] text-white font-serif-editorial font-light mb-12">Research Principles</h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {principlesData.map((principle, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.1}>
              <h3 className="text-[20px] text-white font-medium mb-3">{principle.title}</h3>
              <p className="text-[16px] text-[#A0A0A0] font-light leading-relaxed">{principle.description}</p>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <div className="w-full h-[1px] bg-white/[0.05] max-w-[1200px] mx-auto my-32" />

      {/* Continue to FAQs */}
      <section className="pt-32 px-6 md:px-12 max-w-[1000px] mx-auto mb-32">
        <ScrollReveal>
          <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-b from-[#111] to-[#0A0A0A] border border-white/[0.05] flex flex-col items-center text-center">
            <h2 className="text-[32px] md:text-[48px] font-serif-editorial font-light mb-6 text-white">Have more questions?</h2>
            <p className="text-[#8A8A8A] text-lg font-light leading-relaxed mb-8 max-w-[600px]">
              Explore our centralized knowledge base for detailed answers regarding Case Studies.
            </p>
            <Link 
              href="/resources/faq#section-3"
              className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full text-sm font-medium hover:bg-[#F2F2F0] transition-colors"
            >
              Read Case Studies FAQs
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>
      </section>

      <div className="w-full h-[1px] bg-white/[0.05] max-w-[1200px] mx-auto my-32" />

      {/* 11. CONTINUING THE JOURNEY */}
      <section className="px-6 md:px-12 max-w-[800px] mx-auto text-center flex flex-col items-center">
        <ScrollReveal>
          <Quote className="text-[#4F6EF7] mx-auto mb-8 opacity-50" size={32} />
          <h2 className="text-[28px] md:text-[40px] text-white font-serif-editorial font-light leading-tight mb-8">
            Every case study is one step toward understanding how technology can better support human life.
          </h2>
          <Link href="/research" className="inline-flex items-center gap-3 h-[48px] px-8 rounded-full bg-white text-black font-medium text-[14px] hover:bg-[#F2F2F0] transition-colors mt-8">
            Explore broader research <ArrowRight size={16} />
          </Link>
        </ScrollReveal>
      </section>

    </div>
  );
}
