"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronDown, CheckCircle2, ChevronRight, BrainCircuit, Quote } from "lucide-react";
import { aiResearchInitiatives, aiFaqsData, comparisonData, openQuestionsData } from "@/lib/data/ai-research";
import ScrollReveal from "@/components/ScrollReveal";

const KnowledgeBlock = ({ label, children }: { label: string, children: React.ReactNode }) => (
  <div className="border-l-2 border-[#4F6EF7]/50 pl-6 py-2 my-8 bg-white/[0.02] p-6 rounded-r-xl">
    <span className="text-[11px] uppercase tracking-widest text-[#4F6EF7] font-medium block mb-2">{label}</span>
    <div className="text-[15px] text-[#A0A0A0] leading-relaxed font-light italic">
      {children}
    </div>
  </div>
);

const SectionTitle = ({ subtitle, title }: { subtitle?: string, title: string }) => (
  <ScrollReveal>
    {subtitle && <span className="text-[11px] uppercase tracking-[0.2em] text-[#6A6A6A] font-medium mb-4 block">{subtitle}</span>}
    <h2 className="text-[32px] md:text-[48px] text-white font-serif-editorial font-light mb-6">{title}</h2>
  </ScrollReveal>
);

const ConceptCard = ({ title, description }: { title: string, description: string }) => (
  <div className="border border-white/[0.05] p-8 rounded-2xl bg-[#0A0A0A] hover:border-white/[0.15] transition-colors h-full flex flex-col">
    <h3 className="text-[20px] text-white font-medium mb-4 font-serif-editorial">{title}</h3>
    <p className="text-[15px] text-[#8A8A8A] font-light leading-relaxed flex-grow">{description}</p>
  </div>
);

export default function AIResearchPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#080808] text-[#F2F2F0] selection:bg-[#4F6EF7]/30 selection:text-[#F2F2F0] font-sans pb-32">
      
      {/* 1. HERO (INTELLIGENCE) */}
      <section className="pt-40 px-6 md:px-12 max-w-[1200px] mx-auto flex flex-col gap-12">
        <ScrollReveal>
          <span className="text-[11px] uppercase tracking-[0.2em] text-[#6A6A6A] font-medium">Rheole Research</span>
        </ScrollReveal>
        
        <ScrollReveal delay={0.1}>
          <h1 className="text-[48px] md:text-[80px] lg:text-[100px] text-[#F2F2F0] font-serif-editorial font-light leading-[1.05] tracking-tight max-w-[1000px]">
            Intelligence begins with <span className="text-[#8A8A8A]">understanding, not prediction.</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.2} className="flex flex-col gap-6 max-w-[800px]">
          <p className="text-[20px] md:text-[24px] text-[#A0A0A0] font-light leading-relaxed">
            Artificial Intelligence has made remarkable progress in generating information. The next frontier is understanding the physical world in which that information exists.
          </p>
          <KnowledgeBlock label="Core Philosophy">
            &quot;Artificial Intelligence should not merely answer questions. It should understand situations. Understanding requires context. Context requires relationships. Relationships require spatial awareness. Spatial awareness requires continuous reasoning. Ambient Spatial Intelligence emerges when all these forms of intelligence work together.&quot;
          </KnowledgeBlock>
        </ScrollReveal>
      </section>

      <div className="w-full h-[1px] bg-white/[0.05] max-w-[1200px] mx-auto my-32" />

      {/* 2. THE RESEARCH MISSION */}
      <section className="px-6 md:px-12 max-w-[1200px] mx-auto">
        <SectionTitle title="The Research Mission" subtitle="Chapter I" />
        <ScrollReveal delay={0.1}>
          <p className="text-[18px] text-[#A0A0A0] font-light max-w-[800px] leading-relaxed mb-8">
            Rheole investigates how intelligent systems can better understand the nuances of reality. Our mission is not to replace human judgement, but to augment it responsibly. We research how computers can perceive:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {["People", "Places", "Time", "Movement", "Communities", "Environment", "Relationships", "Intent", "Context", "Decision-making", "Curiosity", "Trust"].map((item, idx) => (
              <div key={idx} className="bg-white/[0.02] border border-white/[0.05] h-[64px] px-6 rounded-full flex items-center justify-center text-center text-[15px] text-[#8A8A8A] font-light">
                {item}
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      <div className="w-full h-[1px] bg-white/[0.05] max-w-[1200px] mx-auto my-32" />

      {/* 3. UNDERSTANDING HUMAN INTELLIGENCE */}
      <section className="px-6 md:px-12 max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-16">
        <div className="lg:w-1/3">
          <SectionTitle title="Understanding Human Intelligence" subtitle="Chapter II" />
        </div>
        <div className="lg:w-2/3">
          <ScrollReveal delay={0.1}>
            <p className="text-[18px] text-[#A0A0A0] font-light leading-relaxed mb-8">
              To build better AI, we must study how humans naturally reason. Human cognition is not a simple input-output loop. It involves pattern recognition, memory, experience, emotion, curiosity, and deep social understanding. 
              We research what AI can learn from human cognition while deeply respecting its architectural differences.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ConceptCard title="Adaptability" description="How humans seamlessly shift their goals when the environment changes (e.g., it starts raining)." />
            <ConceptCard title="Spatial Awareness" description="The innate, intuitive understanding of geometry, distance, and safe navigation that humans take for granted." />
          </div>
        </div>
      </section>

      <div className="w-full h-[1px] bg-white/[0.05] max-w-[1200px] mx-auto my-32" />

      {/* 4. UNDERSTANDING SPATIAL INTELLIGENCE & 5. UNDERSTANDING CONTEXT */}
      <section className="px-6 md:px-12 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          
          {/* Spatial */}
          <div>
            <SectionTitle title="Understanding Spatial Intelligence" subtitle="Chapter III" />
            <ScrollReveal delay={0.1}>
              <p className="text-[18px] text-[#A0A0A0] font-light leading-relaxed mb-8">
                Location coordinates alone are insufficient for intelligence. An X/Y coordinate does not tell you if a street is safe, if a neighbourhood is vibrant, or if a park is accessible. 
                Our research topics include Neighbourhood behaviour, movement patterns, urban dynamics, local knowledge, and environmental awareness. These layers contribute to a richer understanding of the physical world.
              </p>
            </ScrollReveal>
          </div>

          {/* Context */}
          <div>
            <SectionTitle title="Understanding Context" subtitle="Chapter IV" />
            <ScrollReveal delay={0.1}>
              <p className="text-[18px] text-[#A0A0A0] font-light leading-relaxed mb-8">
                This is our densest research area. Context transforms identical information into entirely different decisions. 
                Variables include: Location, Time, Weather, Activity, Companions, Transportation, Personal preferences, Local events, and Accessibility needs. A system without context is blind to meaning.
              </p>
            </ScrollReveal>
          </div>

        </div>
      </section>

      <div className="w-full h-[1px] bg-white/[0.05] max-w-[1200px] mx-auto my-32" />

      {/* UNIQUE RHEOLE CONCEPTS */}
      <section className="px-6 md:px-12 max-w-[1200px] mx-auto">
        <SectionTitle title="Proprietary Research Concepts" subtitle="Rheole Terminology" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <ConceptCard title="Ambient Intelligence™" description="The study of intelligence that quietly understands the physical world and assists without demanding attention." />
          <ConceptCard title="Context Intelligence™" description="Research into how situational understanding influences reasoning and decision-making." />
          <ConceptCard title="Urban Cognition™" description="The exploration of how people perceive, navigate and emotionally interpret cities." />
          <ConceptCard title="Intent Dynamics™" description="A framework for understanding evolving human goals rather than isolated commands." />
          <ConceptCard title="Explainable Spatial Reasoning™" description="Research into making location-based AI understandable, transparent and accountable." />
        </div>
      </section>

      <div className="w-full h-[1px] bg-white/[0.05] max-w-[1200px] mx-auto my-32" />

      {/* 6. UNDERSTANDING INTENT & 7. EXPLAINABLE AI */}
      <section className="px-6 md:px-12 max-w-[1200px] mx-auto flex flex-col gap-32">
        
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/2">
            <SectionTitle title="Understanding Intent" subtitle="Chapter V" />
            <ScrollReveal delay={0.1}>
              <p className="text-[18px] text-[#A0A0A0] font-light leading-relaxed mb-6">
                Intent is often more important than literal queries. When someone says, &quot;I&quot;m hungry,&quot; or &quot;I&quot;m travelling with children,&quot; they are providing intent, not a search command.
                We research methods for interpreting these intents transparently and respectfully, bridging the gap between what is said and what is actually needed.
              </p>
            </ScrollReveal>
          </div>
          <div className="lg:w-1/2 bg-[#0A0A0A] p-8 rounded-3xl border border-white/[0.05]">
            <span className="text-[12px] uppercase tracking-widest text-[#6A6A6A] font-medium mb-6 block">Intent vs Command</span>
            <div className="flex flex-col gap-4">
              {["I'm bored.", "I have thirty minutes.", "I'm meeting investors.", "I'm exploring."].map((intent, i) => (
                <div key={i} className="flex items-center gap-4 text-[#8A8A8A] font-light italic">
                  <ArrowRight size={16} className="text-[#4F6EF7]" /> &quot;{intent}&quot;
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row-reverse gap-16">
          <div className="lg:w-1/2">
            <SectionTitle title="Explainable AI" subtitle="Chapter VI" />
            <ScrollReveal delay={0.1}>
              <p className="text-[18px] text-[#A0A0A0] font-light leading-relaxed mb-6">
                AI should reveal its reasoning. We research how to expose confidence levels, alternative suggestions, decision pathways, and transparent recommendations. Explainability is essential for trust. Without it, users cannot safely follow spatial advice.
              </p>
            </ScrollReveal>
          </div>
          <div className="lg:w-1/2">
            <KnowledgeBlock label="AI Insights">
              &quot;If an AI cannot explain why it chose a specific route over another, it has failed as an assistant. Transparency is not a feature; it is a fundamental architectural requirement.&quot;
            </KnowledgeBlock>
          </div>
        </div>

      </section>

      <div className="w-full h-[1px] bg-white/[0.05] max-w-[1200px] mx-auto my-32" />

      {/* 8. RESPONSIBLE AI */}
      <section className="px-6 md:px-12 max-w-[1200px] mx-auto text-center">
        <SectionTitle title="Responsible AI" subtitle="Chapter VII" />
        <ScrollReveal delay={0.1}>
          <p className="text-[18px] text-[#A0A0A0] font-light max-w-[800px] mx-auto leading-relaxed mb-12">
            Responsibility is embedded in the research phase, not added at the end. We rigorously investigate Privacy, Fairness, Bias mitigation, Inclusivity, Accessibility, Transparency, Consent, Human oversight, Long-term societal impact, and Environmental responsibility.
          </p>
          <div className="flex flex-wrap justify-center gap-4 max-w-[900px] mx-auto">
            {["Privacy by Design", "Bias Mitigation", "Accessibility", "Human Oversight", "Societal Impact"].map(tag => (
              <span key={tag} className="px-6 py-2 rounded-full bg-white/[0.02] border border-white/[0.05] text-[#8A8A8A] text-[14px]">
                {tag}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </section>

      <div className="w-full h-[1px] bg-white/[0.05] max-w-[1200px] mx-auto my-32" />

      {/* COMPARISON TABLE */}
      <section className="px-6 md:px-12 max-w-[1200px] mx-auto">
        <SectionTitle title="Research Paradigms" subtitle="Comparison" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          
          <div className="bg-transparent border border-[#3A3A3A] rounded-3xl p-8 md:p-12">
            <h3 className="text-[24px] text-white font-serif-editorial mb-8">Conventional AI Research</h3>
            <ul className="flex flex-col gap-6">
              {comparisonData.map((data, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6A6A6A] mt-2 shrink-0" />
                  <p className="text-[15px] text-[#8A8A8A] font-light">{data.conventional}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#0A0A0A] border border-[#4F6EF7]/30 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#4F6EF7]/5 rounded-full blur-[80px]" />
            <h3 className="text-[24px] text-white font-serif-editorial mb-8 relative z-10">Ambient Spatial Intelligence</h3>
            <ul className="flex flex-col gap-6 relative z-10">
              {comparisonData.map((data, i) => (
                <li key={i} className="flex items-start gap-4">
                  <CheckCircle2 className="text-[#4F6EF7] mt-0.5 shrink-0" size={16} />
                  <p className="text-[15px] text-[#F2F2F0] font-light">{data.ambient}</p>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      <div className="w-full h-[1px] bg-white/[0.05] max-w-[1200px] mx-auto my-32" />

      {/* 9. CURRENT RESEARCH INITIATIVES */}
      <section className="px-6 md:px-12 max-w-[1200px] mx-auto">
        <SectionTitle title="Current Research Initiatives" subtitle="Chapter VIII" />
        <ScrollReveal delay={0.1}>
          <p className="text-[18px] text-[#A0A0A0] font-light leading-relaxed mb-16">
            These are active conceptual investigations and research themes, not finished products. They represent the frontier of what we are currently exploring.
          </p>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-16">
          {aiResearchInitiatives.map((initiative, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.05}>
              <h4 className="text-[20px] text-white font-serif-editorial mb-3">{initiative.title}</h4>
              <p className="text-[15px] text-[#8A8A8A] font-light leading-relaxed">{initiative.description}</p>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <div className="w-full h-[1px] bg-white/[0.05] max-w-[1200px] mx-auto my-32" />

      {/* 10. RESEARCH METHODOLOGY */}
      <section className="px-6 md:px-12 max-w-[1200px] mx-auto text-center">
        <SectionTitle title="Research Methodology" subtitle="Chapter IX" />
        <ScrollReveal delay={0.1}>
          <p className="text-[18px] text-[#A0A0A0] font-light leading-relaxed mb-16 max-w-[800px] mx-auto">
            Rigorous methodology is the difference between a prototype and a dependable system. This is how we transition from abstract questions to platform capabilities.
          </p>
        </ScrollReveal>
        
        <div className="flex flex-wrap justify-center items-center gap-4">
          {["Observation", "Literature Review", "Hypothesis", "Experiment", "Prototype", "Evaluation", "Iteration", "Publication", "Platform Integration"].map((step, idx, arr) => (
            <React.Fragment key={idx}>
              <ScrollReveal delay={idx * 0.1}>
                <div className="px-6 py-3 border border-white/[0.1] rounded-full bg-[#0A0A0A] text-[#F2F2F0] text-[14px]">
                  {step}
                </div>
              </ScrollReveal>
              {idx < arr.length - 1 && (
                <ScrollReveal delay={idx * 0.1 + 0.05}>
                  <ArrowRight size={16} className="text-[#4A4A4A]" />
                </ScrollReveal>
              )}
            </React.Fragment>
          ))}
        </div>
      </section>

      <div className="w-full h-[1px] bg-white/[0.05] max-w-[1200px] mx-auto my-32" />

      {/* 11. OPEN QUESTIONS */}
      <section className="px-6 md:px-12 max-w-[1200px] mx-auto bg-white/[0.02] border border-white/[0.05] p-12 md:p-24 rounded-3xl text-center flex flex-col items-center">
        <SectionTitle title="Open Questions" subtitle="Chapter X" />
        <ScrollReveal delay={0.1}>
          <p className="text-[18px] text-[#A0A0A0] font-light leading-relaxed mb-12 max-w-[800px] mx-auto">
            The questions driving our future research agenda. We present these as ongoing investigations to the global scientific community.
          </p>
        </ScrollReveal>
        
        <div className="flex flex-col gap-6 w-full max-w-[800px] text-left">
          {openQuestionsData.map((q, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.05}>
              <div className="flex items-start gap-4 p-6 bg-[#0A0A0A] border border-white/[0.05] rounded-xl hover:border-white/[0.2] transition-colors group">
                <BrainCircuit className="text-[#4F6EF7] mt-1 shrink-0 opacity-70 group-hover:opacity-100 transition-opacity" size={20} />
                <span className="text-[16px] md:text-[18px] text-[#A0A0A0] group-hover:text-white transition-colors leading-relaxed font-serif-editorial">{q}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <div className="w-full h-[1px] bg-white/[0.05] max-w-[1200px] mx-auto my-32" />

      {/* FAQ SECTION */}
      <section className="px-6 md:px-12 max-w-[800px] mx-auto">
        <SectionTitle title="Frequently Asked Questions" />
        <div className="flex flex-col border-t border-white/[0.05] mt-12">
          {aiFaqsData.map((faq, idx) => (
            <div key={idx} className="border-b border-white/[0.05]">
              <button 
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
              >
                <span className="text-[16px] md:text-[18px] text-[#F2F2F0] font-medium group-hover:text-[#4F6EF7] transition-colors pr-8">
                  {faq.q}
                </span>
                <ChevronDown className={`shrink-0 text-[#6A6A6A] transition-transform duration-300 ${openFaq === idx ? 'rotate-180 text-white' : ''}`} size={20} />
              </button>
              <AnimatePresence>
                {openFaq === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="pb-8 text-[15px] md:text-[16px] text-[#A0A0A0] font-light leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      <div className="w-full h-[1px] bg-white/[0.05] max-w-[1200px] mx-auto my-32" />

      {/* 12. THE FUTURE OF AMBIENT INTELLIGENCE */}
      <section className="px-6 md:px-12 max-w-[800px] mx-auto text-center flex flex-col items-center">
        <ScrollReveal>
          <Quote className="text-[#4F6EF7] mx-auto mb-8 opacity-50" size={32} />
          <h2 className="text-[28px] md:text-[40px] text-white font-serif-editorial font-light leading-tight mb-8">
            This isn&apos;t a page about artificial intelligence. It&apos;s a research agenda for understanding how intelligent systems can responsibly perceive, reason about and assist people within the living world.
          </h2>
          <p className="text-[18px] text-[#8A8A8A] font-light leading-relaxed">
            Artificial Intelligence will evolve beyond prompts. It will become context-aware. Environment-aware. Human-centred. Transparent. Trustworthy. Ambient Spatial Intelligence represents one possible future of this evolution.
          </p>
          <Link href="/research/case-studies" className="inline-flex items-center gap-3 h-[48px] px-8 rounded-full bg-white text-black font-medium text-[14px] hover:bg-[#F2F2F0] transition-colors mt-12">
            Explore Case Studies <ArrowRight size={16} />
          </Link>
        </ScrollReveal>
      </section>

    </div>
  );
}
