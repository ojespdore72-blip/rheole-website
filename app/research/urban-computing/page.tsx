"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronDown, CheckCircle2, Map, Navigation, Heart, Box, Clock, Building2, Quote, Activity } from "lucide-react";
import { urbanLayersData, cityLabData, scenariosData, openQuestionsData, comparisonData } from "@/lib/data/urban-computing";
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

const ConceptCard = ({ title, description, icon: Icon }: { title: string, description: string, icon?: React.ElementType }) => (
  <div className="border border-white/[0.05] p-8 rounded-2xl bg-[#0A0A0A] hover:border-white/[0.15] transition-colors h-full flex flex-col">
    {Icon && <Icon className="text-[#4F6EF7] mb-6 opacity-70" size={24} />}
    <h3 className="text-[20px] text-white font-medium mb-4 font-serif-editorial">{title}</h3>
    <p className="text-[15px] text-[#8A8A8A] font-light leading-relaxed flex-grow">{description}</p>
  </div>
);

export default function UrbanComputingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#080808] text-[#F2F2F0] selection:bg-[#4F6EF7]/30 selection:text-[#F2F2F0] font-sans pb-32">
      
      {/* 1. HERO (THE LIVING CITY) */}
      <section className="pt-40 px-6 md:px-12 max-w-[1200px] mx-auto flex flex-col gap-12">
        <ScrollReveal>
          <span className="text-[11px] uppercase tracking-[0.2em] text-[#6A6A6A] font-medium">Rheole Research</span>
        </ScrollReveal>
        
        <ScrollReveal delay={0.1}>
          <h1 className="text-[48px] md:text-[80px] lg:text-[100px] text-[#F2F2F0] font-serif-editorial font-light leading-[1.05] tracking-tight max-w-[1000px]">
            A city is more than its <span className="text-[#8A8A8A]">streets.</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.2} className="flex flex-col gap-6 max-w-[800px]">
          <p className="text-[20px] md:text-[24px] text-[#A0A0A0] font-light leading-relaxed">
            Bengaluru is not simply roads and buildings. It is millions of interconnected activities happening simultaneously. Urban Computing attempts to understand these relationships.
          </p>
          <KnowledgeBlock label="Core Philosophy">
            &quot;Cities are living systems. They wake. They move. They slow down. They celebrate. They adapt. They recover. Every street, every neighbourhood, every business, every park, every community changes continuously. Urban Computing studies these changes to help people understand their surroundings more naturally.&quot;
          </KnowledgeBlock>
        </ScrollReveal>
      </section>

      <div className="w-full h-[1px] bg-white/[0.05] max-w-[1200px] mx-auto my-32" />

      {/* 2. WHY CITIES ARE HARD TO UNDERSTAND */}
      <section className="px-6 md:px-12 max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-16">
        <div className="lg:w-1/3">
          <SectionTitle title="Why Cities Are Hard to Understand" subtitle="Chapter I" />
        </div>
        <div className="lg:w-2/3">
          <ScrollReveal delay={0.1}>
            <p className="text-[18px] text-[#A0A0A0] font-light leading-relaxed mb-8">
              Modern cities produce enormous amounts of fragmented information. Traffic exists separately. Weather exists separately. Businesses exist separately. Events exist separately. Communities exist separately. Public transport exists separately.
            </p>
            <p className="text-[18px] text-[#A0A0A0] font-light leading-relaxed">
              People constantly switch between applications to build a mental model of their environment. Urban Computing attempts to create a unified understanding by weaving these fragmented data streams into a cohesive, living map of reality.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <div className="w-full h-[1px] bg-white/[0.05] max-w-[1200px] mx-auto my-32" />

      {/* 3. THE DIGITAL PULSE OF BENGALURU */}
      <section className="px-6 md:px-12 max-w-[1200px] mx-auto">
        <SectionTitle title="The Digital Pulse of Bengaluru" subtitle="Chapter II" />
        <ScrollReveal delay={0.1}>
          <p className="text-[18px] text-[#A0A0A0] font-light max-w-[800px] leading-relaxed mb-12">
            Without identifying individuals, Rheole studies the high-level patterns that define Bengaluru&apos;s daily rhythm. We focus explicitly on aggregated urban patterns and public context, not personal surveillance.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {["Neighbourhood activity", "Business hours", "Traffic flow", "Metro operations", "Bus movement", "Weather patterns", "Walking activity", "Cycling activity", "Community gatherings", "Public events", "Technology districts", "Educational campuses", "Parks", "Tourism", "Markets", "Construction", "Emergency alerts", "Public holidays", "Weekend behaviour", "Festival seasons", "Morning commute", "Nightlife", "Startup ecosystem", "Cultural districts", "Environmental conditions"].map((item, idx) => (
              <div key={idx} className="bg-white/[0.02] border border-white/[0.05] h-[64px] px-4 rounded-full flex items-center justify-center text-center text-[13px] text-[#8A8A8A] font-light">
                {item}
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      <div className="w-full h-[1px] bg-white/[0.05] max-w-[1200px] mx-auto my-32" />

      {/* 4. HOW RHEOLE UNDERSTANDS THE CITY */}
      <section className="px-6 md:px-12 max-w-[1200px] mx-auto text-center">
        <SectionTitle title="How Rheole Understands the City" subtitle="Chapter III" />
        <div className="flex flex-col items-center gap-4 mt-12 max-w-[400px] mx-auto">
          {["Public Information", "Environmental Signals", "Mobility Networks", "Community Activity", "Business Ecosystem", "Temporal Context", "Urban Relationships", "Ambient Spatial Intelligence"].map((step, idx, arr) => (
            <React.Fragment key={idx}>
              <ScrollReveal delay={idx * 0.1} className="w-full">
                <div className="px-8 py-4 border border-[#4F6EF7]/20 rounded-xl bg-[#0A0A0A] text-[#F2F2F0] text-[16px] font-medium shadow-[0_0_15px_rgba(79,110,247,0.05)] w-full">
                  {step}
                </div>
              </ScrollReveal>
              {idx < arr.length - 1 && (
                <ScrollReveal delay={idx * 0.1 + 0.05}>
                  <div className="w-[1px] h-[24px] bg-gradient-to-b from-[#4F6EF7]/50 to-transparent" />
                </ScrollReveal>
              )}
            </React.Fragment>
          ))}
        </div>
      </section>

      <div className="w-full h-[1px] bg-white/[0.05] max-w-[1200px] mx-auto my-32" />

      {/* 5. THE URBAN LAYERS */}
      <section className="px-6 md:px-12 max-w-[1200px] mx-auto">
        <SectionTitle title="The Urban Layers" subtitle="Chapter IV" />
        <ScrollReveal delay={0.1}>
          <p className="text-[18px] text-[#A0A0A0] font-light max-w-[800px] leading-relaxed mb-16">
            A city is not a single map; it is a stack of interconnected layers. Understanding the city means understanding how these layers interact in real-time.
          </p>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {urbanLayersData.map((layer, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.05}>
              <ConceptCard title={layer.title} description={layer.description} />
            </ScrollReveal>
          ))}
        </div>
      </section>

      <div className="w-full h-[1px] bg-white/[0.05] max-w-[1200px] mx-auto my-32" />

      {/* 6. UNDERSTANDING CHANGE */}
      <section className="px-6 md:px-12 max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-16">
        <div className="lg:w-1/3">
          <SectionTitle title="Understanding Change" subtitle="Chapter V" />
        </div>
        <div className="lg:w-2/3">
          <ScrollReveal delay={0.1}>
            <p className="text-[18px] text-[#A0A0A0] font-light leading-relaxed mb-8">
              Cities evolve constantly. Morning versus night. Weekdays versus weekends. Festivals. Rain. Construction. Traffic diversions. New businesses. Public events. Transit disruptions. Seasonal tourism.
            </p>
            <p className="text-[18px] text-[#A0A0A0] font-light leading-relaxed mb-8">
              Intelligence must adapt continuously. A static map is obsolete the moment it is printed. Rheole&apos;s Urban Computing engines constantly digest these temporal and environmental changes to provide a view of the city as it is right now.
            </p>
            <KnowledgeBlock label="City Insights">
              &quot;The map is not the territory. The map is a snapshot of the territory. Urban Computing is the real-time, continuous observation of the territory&apos;s evolution.&quot;
            </KnowledgeBlock>
          </ScrollReveal>
        </div>
      </section>

      <div className="w-full h-[1px] bg-white/[0.05] max-w-[1200px] mx-auto my-32" />

      {/* UNIQUE RHEOLE CONCEPTS */}
      <section className="px-6 md:px-12 max-w-[1200px] mx-auto">
        <SectionTitle title="Proprietary Research Concepts" subtitle="Rheole Terminology" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <ConceptCard title="Urban Pulse™" icon={Activity} description="A conceptual representation of the city's changing rhythms across neighbourhoods, transport, culture and public activity." />
          <ConceptCard title="Living City Graph™" icon={Navigation} description="A continuously evolving network of relationships between places, communities, mobility and public context." />
          <ConceptCard title="Neighbourhood Intelligence™" icon={Map} description="Understanding the unique character, opportunities and rhythms of each locality rather than treating all locations equally." />
          <ConceptCard title="Urban Context Engine™" icon={Box} description="A research framework that combines public information, environmental conditions and spatial relationships into meaningful situational understanding." />
          <ConceptCard title="City Memory™" icon={Clock} description="A long-term understanding of how urban environments evolve over time through seasons, infrastructure changes, public spaces and cultural activity." />
        </div>
      </section>

      <div className="w-full h-[1px] bg-white/[0.05] max-w-[1200px] mx-auto my-32" />

      {/* 7. CITY INTELLIGENCE LAB */}
      <section className="px-6 md:px-12 max-w-[1200px] mx-auto">
        <SectionTitle title="City Intelligence Lab" subtitle="Chapter VI" />
        <ScrollReveal delay={0.1}>
          <p className="text-[18px] text-[#A0A0A0] font-light max-w-[800px] leading-relaxed mb-16">
            Conceptual investigations into the future of urban life. These are the active research directions our teams are exploring today.
          </p>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-16">
          {cityLabData.map((lab, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.05}>
              <h4 className="text-[20px] text-white font-serif-editorial mb-3">{lab.title}</h4>
              <p className="text-[15px] text-[#8A8A8A] font-light leading-relaxed">{lab.description}</p>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <div className="w-full h-[1px] bg-white/[0.05] max-w-[1200px] mx-auto my-32" />

      {/* 8. REAL-WORLD SCENARIOS */}
      <section className="px-6 md:px-12 max-w-[1200px] mx-auto">
        <SectionTitle title="Real-World Scenarios" subtitle="Chapter VII" />
        <ScrollReveal delay={0.1}>
          <p className="text-[18px] text-[#A0A0A0] font-light max-w-[800px] leading-relaxed mb-16">
            How Urban Computing improves understanding without exposing private information, contextualizing the city for individual needs.
          </p>
        </ScrollReveal>
        <div className="flex flex-col gap-8">
          {scenariosData.map((scenario, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.05}>
              <div className="bg-white/[0.02] border border-white/[0.05] p-8 rounded-2xl flex flex-col md:flex-row gap-8 items-start">
                <div className="w-12 h-12 rounded-full bg-[#0A0A0A] border border-white/[0.1] flex items-center justify-center shrink-0">
                  <span className="text-[#4F6EF7] font-medium text-[14px]">0{idx + 1}</span>
                </div>
                <div>
                  <h4 className="text-[20px] text-white font-serif-editorial mb-3">{scenario.title}</h4>
                  <p className="text-[16px] text-[#A0A0A0] font-light leading-relaxed">{scenario.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <div className="w-full h-[1px] bg-white/[0.05] max-w-[1200px] mx-auto my-32" />

      {/* COMPARISON TABLE */}
      <section className="px-6 md:px-12 max-w-[1200px] mx-auto">
        <SectionTitle title="Research Paradigms" subtitle="Comparison" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          
          <div className="bg-transparent border border-[#3A3A3A] rounded-3xl p-8 md:p-12">
            <h3 className="text-[24px] text-white font-serif-editorial mb-8">Traditional Urban Computing</h3>
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
            <h3 className="text-[24px] text-white font-serif-editorial mb-8 relative z-10">Rheole Urban Computing</h3>
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

      {/* 9. OPEN RESEARCH QUESTIONS */}
      <section className="px-6 md:px-12 max-w-[1200px] mx-auto bg-white/[0.02] border border-white/[0.05] p-12 md:p-24 rounded-3xl text-center flex flex-col items-center">
        <SectionTitle title="Open Research Questions" subtitle="Chapter VIII" />
        <ScrollReveal delay={0.1}>
          <p className="text-[18px] text-[#A0A0A0] font-light leading-relaxed mb-12 max-w-[800px] mx-auto">
            These are ongoing research topics, not solved problems. We actively seek collaboration to understand the deep friction of urban environments.
          </p>
        </ScrollReveal>
        
        <div className="flex flex-col gap-6 w-full max-w-[800px] text-left">
          {openQuestionsData.map((q, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.05}>
              <div className="flex items-start gap-4 p-6 bg-[#0A0A0A] border border-white/[0.05] rounded-xl hover:border-white/[0.2] transition-colors group">
                <Building2 className="text-[#4F6EF7] mt-1 shrink-0 opacity-70 group-hover:opacity-100 transition-opacity" size={20} />
                <span className="text-[16px] md:text-[18px] text-[#A0A0A0] group-hover:text-white transition-colors leading-relaxed font-serif-editorial">{q}</span>
              </div>
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
              Explore our centralized knowledge base for detailed answers regarding Urban Computing.
            </p>
            <Link 
              href="/resources/faq#section-8"
              className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full text-sm font-medium hover:bg-[#F2F2F0] transition-colors"
            >
              Read Urban Computing FAQs
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>
      </section>

      <div className="w-full h-[1px] bg-white/[0.05] max-w-[1200px] mx-auto my-32" />

      {/* 10. THE FUTURE OF URBAN COMPUTING */}
      <section className="px-6 md:px-12 max-w-[800px] mx-auto text-center flex flex-col items-center">
        <ScrollReveal>
          <Quote className="text-[#4F6EF7] mx-auto mb-8 opacity-50" size={32} />
          <h2 className="text-[28px] md:text-[40px] text-white font-serif-editorial font-light leading-tight mb-8">
            This isn&apos;t software analysing a city. It&apos;s research into helping people understand and navigate the living character of a city like Bengaluru in a way that is useful, transparent and respectful.
          </h2>
          <p className="text-[18px] text-[#8A8A8A] font-light leading-relaxed">
            Urban Computing is not about monitoring cities. It is about understanding them. The future city will not simply be connected. It will be understandable. Ambient Spatial Intelligence will help people experience cities with greater confidence, curiosity and awareness while respecting privacy and individual choice.
          </p>
          <Link href="/research/ai-research" className="inline-flex items-center gap-3 h-[48px] px-8 rounded-full bg-white text-black font-medium text-[14px] hover:bg-[#F2F2F0] transition-colors mt-12">
            Explore AI Research <ArrowRight size={16} />
          </Link>
        </ScrollReveal>
      </section>

    </div>
  );
}
