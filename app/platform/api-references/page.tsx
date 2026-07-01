"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronDown, CheckCircle2, Box, Activity, Key, Search, Database, Settings2, FileJson, AlertCircle, Quote } from "lucide-react";
import { resourceCatalogData, errorModelData, authenticationData, bestPracticesData, comparisonData } from "@/lib/data/api-references";
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

export default function APIReferencesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#080808] text-[#F2F2F0] selection:bg-[#4F6EF7]/30 selection:text-[#F2F2F0] font-sans pb-32">
      
      {/* 1. HERO (REFERENCE) */}
      <section className="pt-40 px-6 md:px-12 max-w-[1200px] mx-auto flex flex-col gap-12">
        <ScrollReveal>
          <span className="text-[11px] uppercase tracking-[0.2em] text-[#6A6A6A] font-medium">Developer Platform</span>
        </ScrollReveal>
        
        <ScrollReveal delay={0.1}>
          <h1 className="text-[48px] md:text-[80px] lg:text-[100px] text-[#F2F2F0] font-serif-editorial font-light leading-[1.05] tracking-tight max-w-[1000px]">
            Every capability. <br/><span className="text-[#8A8A8A]">One consistent language.</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.2} className="flex flex-col gap-6 max-w-[800px]">
          <p className="text-[20px] md:text-[24px] text-[#A0A0A0] font-light leading-relaxed">
            The Rheole API Reference is the definitive technical catalogue of every platform capability, designed for precision, consistency and speed.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-6">
            {[
              { label: "API Version", value: "2025-10-15" },
              { label: "Latest Release", value: "v4.2.0" },
              { label: "Reference Coverage", value: "100%" },
              { label: "Resources", value: "25+" },
              { label: "SDK Support", value: "5 Languages" },
              { label: "Documentation Status", value: "Live" }
            ].map((stat, i) => (
              <div key={i} className="border border-white/[0.05] bg-[#0A0A0A] p-4 rounded-xl">
                <span className="text-[11px] uppercase tracking-widest text-[#6A6A6A] font-medium block mb-1">{stat.label}</span>
                <span className="text-[16px] text-white font-medium">{stat.value}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      <div className="w-full h-[1px] bg-white/[0.05] max-w-[1200px] mx-auto my-32" />

      {/* 2. WHY API REFERENCES EXIST */}
      <section className="px-6 md:px-12 max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-16">
        <div className="lg:w-1/3">
          <SectionTitle title="Why API References Exist" subtitle="Chapter I" />
        </div>
        <div className="lg:w-2/3">
          <ScrollReveal delay={0.1}>
            <p className="text-[18px] text-[#A0A0A0] font-light leading-relaxed mb-8">
              A robust Developer Platform requires distinct types of documentation. <strong className="text-white font-normal">Tutorials</strong> teach you how to build a specific app. <strong className="text-white font-normal">Quick Starts</strong> get you running in five minutes. <strong className="text-white font-normal">Migration Guides</strong> help you upgrade.
            </p>
            <p className="text-[18px] text-[#A0A0A0] font-light leading-relaxed mb-8">
              <strong className="text-[#4F6EF7] font-medium">API References</strong> serve a fundamentally different purpose. They are the exhaustive, objective encyclopaedia of the platform. They exist so that when you ask, &quot;What exact parameters does the Places endpoint accept?&quot; you receive an immediate, unambiguous answer.
            </p>
            <KnowledgeBlock label="Reference Philosophy">
              &quot;References should answer questions immediately. Developers should never wonder where something belongs. Consistency reduces complexity. Every resource should feel predictable.&quot;
            </KnowledgeBlock>
          </ScrollReveal>
        </div>
      </section>

      <div className="w-full h-[1px] bg-white/[0.05] max-w-[1200px] mx-auto my-32" />

      {/* 3. THE API ECOSYSTEM (Visual Map) */}
      <section className="px-6 md:px-12 max-w-[1200px] mx-auto text-center">
        <SectionTitle title="The API Ecosystem" subtitle="Chapter II" />
        <ScrollReveal delay={0.1}>
          <p className="text-[18px] text-[#A0A0A0] font-light max-w-[800px] mx-auto leading-relaxed mb-12">
            Every capability belongs to one unified platform architecture.
          </p>
        </ScrollReveal>
        
        <div className="flex flex-col items-center gap-4 max-w-[400px] mx-auto">
          {["Platform", "Authentication", "Places", "Navigation", "Communities", "Businesses", "Events", "Users", "Projects", "Realtime", "Notifications", "Analytics", "Developer Platform"].map((step, idx, arr) => (
            <React.Fragment key={idx}>
              <ScrollReveal delay={idx * 0.05} className="w-full">
                <div className={`px-8 py-3 border ${idx === 0 || idx === arr.length - 1 ? 'border-[#4F6EF7]/40 bg-[#4F6EF7]/10 text-white' : 'border-white/[0.1] bg-[#0A0A0A] text-[#A0A0A0]'} rounded-xl text-[15px] font-medium w-full transition-colors hover:border-white/[0.3]`}>
                  {step}
                </div>
              </ScrollReveal>
              {idx < arr.length - 1 && (
                <ScrollReveal delay={idx * 0.05 + 0.02}>
                  <div className="w-[1px] h-[20px] bg-gradient-to-b from-white/[0.2] to-transparent" />
                </ScrollReveal>
              )}
            </React.Fragment>
          ))}
        </div>
      </section>

      <div className="w-full h-[1px] bg-white/[0.05] max-w-[1200px] mx-auto my-32" />

      {/* 4. RESOURCE CATALOG */}
      <section className="px-6 md:px-12 max-w-[1200px] mx-auto">
        <SectionTitle title="Resource Catalog" subtitle="Chapter III" />
        <ScrollReveal delay={0.1}>
          <p className="text-[18px] text-[#A0A0A0] font-light max-w-[800px] leading-relaxed mb-16">
            The Rheole API is resource-oriented. Rather than a chaotic list of actions, the API is organized around logical entities. 
          </p>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resourceCatalogData.map((resource, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.02}>
              <div className="bg-[#0A0A0A] border border-white/[0.05] p-6 rounded-2xl hover:border-[#4F6EF7]/30 transition-colors h-full flex flex-col group">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-[18px] text-white font-medium font-serif-editorial">{resource.title}</h3>
                  <Database className="text-[#4F6EF7] opacity-0 group-hover:opacity-100 transition-opacity" size={16} />
                </div>
                <p className="text-[14px] text-[#8A8A8A] font-light leading-relaxed mb-6 flex-grow">{resource.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {resource.relations.map((rel, i) => (
                    <span key={i} className="text-[11px] px-2 py-1 bg-white/[0.03] rounded-md text-[#6A6A6A]">→ {rel}</span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <div className="w-full h-[1px] bg-white/[0.05] max-w-[1200px] mx-auto my-32" />

      {/* 5. REFERENCE STRUCTURE & 6. COMMON DESIGN PATTERNS */}
      <section className="px-6 md:px-12 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          
          {/* Structure */}
          <div>
            <SectionTitle title="Reference Structure" subtitle="Chapter IV" />
            <ScrollReveal delay={0.1}>
              <p className="text-[18px] text-[#A0A0A0] font-light leading-relaxed mb-6">
                Every endpoint page follows one identical, consistent format. Once you learn how to read one endpoint, you can read them all.
              </p>
              <ul className="flex flex-col gap-3 mt-8">
                {["Overview & Purpose", "Authentication Requirements", "Parameters (Path, Query, Body)", "Response Schemas", "Code Examples (cURL, SDKs)", "Possible Errors", "Rate Limits", "Related Resources", "Best Practices"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[#8A8A8A] font-light text-[15px]">
                    <CheckCircle2 size={14} className="text-[#4F6EF7]" /> {item}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>

          {/* Patterns */}
          <div>
            <SectionTitle title="Common Design Patterns" subtitle="Chapter V" />
            <ScrollReveal delay={0.1}>
              <p className="text-[18px] text-[#A0A0A0] font-light leading-relaxed mb-6">
                Platform-wide conventions ensure predictable developer experiences. We standardize filtering, sorting, pagination, relationship expansion, and idempotency across the entire ecosystem.
              </p>
              <KnowledgeBlock label="Developer Tips">
                &quot;Avoid learning per-endpoint quirks. If you know how to paginate the Users list, you already know exactly how to paginate the Places list. The design patterns are universal.&quot;
              </KnowledgeBlock>
            </ScrollReveal>
          </div>

        </div>
      </section>

      <div className="w-full h-[1px] bg-white/[0.05] max-w-[1200px] mx-auto my-32" />

      {/* 7. ERROR MODEL & 8. VERSIONING */}
      <section className="px-6 md:px-12 max-w-[1200px] mx-auto">
        <SectionTitle title="Error Model & Versioning" subtitle="Chapter VI & VII" />
        
        <div className="flex flex-col lg:flex-row gap-16 mt-12">
          <div className="lg:w-1/2">
            <ScrollReveal delay={0.1}>
              <h3 className="text-[24px] text-white font-serif-editorial mb-6 flex items-center gap-3"><AlertCircle className="text-[#4F6EF7]"/> Error Philosophy</h3>
              <p className="text-[16px] text-[#A0A0A0] font-light leading-relaxed mb-8">
                Errors should be actionable. Every error response includes a predictable code, a human-readable message, and specific validation details to help you recover immediately.
              </p>
              <div className="flex flex-col gap-4">
                {errorModelData.slice(0, 4).map((err, i) => (
                  <div key={i} className="border border-white/[0.05] p-4 rounded-xl bg-[#0A0A0A]">
                    <span className="text-[14px] text-white font-medium mb-1 block">{err.category}</span>
                    <span className="text-[14px] text-[#8A8A8A] font-light">{err.description}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
          
          <div className="lg:w-1/2">
            <ScrollReveal delay={0.2}>
              <h3 className="text-[24px] text-white font-serif-editorial mb-6 flex items-center gap-3"><Activity className="text-[#4F6EF7]"/> Version Lifecycle</h3>
              <p className="text-[16px] text-[#A0A0A0] font-light leading-relaxed mb-8">
                APIs evolve, but they should never break your code unexpectedly. We guarantee strict backward compatibility, clear deprecation policies, and minimum 24-month long-term support for superseded versions.
              </p>
              <KnowledgeBlock label="Version Notes">
                Always pass the `Rheole-Version` header in your requests. This ensures your application remains pinned to a known API contract, insulating you from future platform updates until you are ready to migrate.
              </KnowledgeBlock>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <div className="w-full h-[1px] bg-white/[0.05] max-w-[1200px] mx-auto my-32" />

      {/* 9. AUTHENTICATION MODEL */}
      <section className="px-6 md:px-12 max-w-[1200px] mx-auto">
        <SectionTitle title="Authentication Model" subtitle="Chapter VIII" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {authenticationData.map((auth, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.05}>
              <ConceptCard title={auth.title} description={auth.description} icon={Key} />
            </ScrollReveal>
          ))}
        </div>
      </section>

      <div className="w-full h-[1px] bg-white/[0.05] max-w-[1200px] mx-auto my-32" />

      {/* UNIQUE RHEOLE CONCEPTS */}
      <section className="px-6 md:px-12 max-w-[1200px] mx-auto">
        <SectionTitle title="Proprietary Reference Concepts" subtitle="Rheole Terminology" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <ConceptCard title="Unified Reference™" icon={Box} description="Every API follows one predictable structure regardless of product line." />
          <ConceptCard title="Living References™" icon={Activity} description="Reference documentation evolves with the platform while maintaining complete version history." />
          <ConceptCard title="Semantic API Discovery™" icon={Search} description="Developers search by intent, concept or use case rather than memorizing endpoint names." />
          <ConceptCard title="Reference Graph™" icon={Database} description="Every endpoint, resource and guide is interconnected, allowing natural navigation." />
          <ConceptCard title="Intelligent Cross-Links™" icon={Settings2} description="Documentation automatically surfaces related resources, guides and SDK equivalents." />
        </div>
      </section>

      <div className="w-full h-[1px] bg-white/[0.05] max-w-[1200px] mx-auto my-32" />

      {/* 11. BEST PRACTICES */}
      <section className="px-6 md:px-12 max-w-[1200px] mx-auto">
        <SectionTitle title="Best Practices" subtitle="Chapter X" />
        <ScrollReveal delay={0.1}>
          <p className="text-[18px] text-[#A0A0A0] font-light leading-relaxed mb-16 max-w-[800px]">
            Building robust integrations requires more than just correct syntax. These practices ensure performance, security, and maintainability across the platform.
          </p>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-16">
          {bestPracticesData.map((practice, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.05}>
              <h4 className="text-[20px] text-white font-serif-editorial mb-3 flex items-center gap-2">
                <FileJson size={18} className="text-[#4F6EF7]" /> {practice.title}
              </h4>
              <p className="text-[15px] text-[#8A8A8A] font-light leading-relaxed">{practice.description}</p>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <div className="w-full h-[1px] bg-white/[0.05] max-w-[1200px] mx-auto my-32" />

      {/* COMPARISON TABLE */}
      <section className="px-6 md:px-12 max-w-[1200px] mx-auto">
        <SectionTitle title="Reference Paradigms" subtitle="Comparison" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          
          <div className="bg-transparent border border-[#3A3A3A] rounded-3xl p-8 md:p-12">
            <h3 className="text-[24px] text-white font-serif-editorial mb-8">Traditional API References</h3>
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
            <h3 className="text-[24px] text-white font-serif-editorial mb-8 relative z-10">Rheole API References</h3>
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

      {/* Continue to FAQs */}
      <section className="pt-32 px-6 md:px-12 max-w-[1000px] mx-auto mb-32">
        <ScrollReveal>
          <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-b from-[#111] to-[#0A0A0A] border border-white/[0.05] flex flex-col items-center text-center">
            <h2 className="text-[32px] md:text-[48px] font-serif-editorial font-light mb-6 text-white">Have more questions?</h2>
            <p className="text-[#8A8A8A] text-lg font-light leading-relaxed mb-8 max-w-[600px]">
              Explore our centralized knowledge base for detailed answers regarding API References.
            </p>
            <Link 
              href="/resources/faq#section-2"
              className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full text-sm font-medium hover:bg-[#F2F2F0] transition-colors"
            >
              Read API References FAQs
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>
      </section>

      <div className="w-full h-[1px] bg-white/[0.05] max-w-[1200px] mx-auto my-32" />

      {/* 13. THE COMPLETE PLATFORM */}
      <section className="px-6 md:px-12 max-w-[800px] mx-auto text-center flex flex-col items-center">
        <ScrollReveal>
          <Quote className="text-[#4F6EF7] mx-auto mb-8 opacity-50" size={32} />
          <h2 className="text-[28px] md:text-[40px] text-white font-serif-editorial font-light leading-tight mb-8">
            API References are more than technical documentation. They are a shared language between developers and the platform.
          </h2>
          <p className="text-[18px] text-[#8A8A8A] font-light leading-relaxed">
            A well-designed reference reduces friction, encourages exploration and enables innovation. This isn&apos;t just an API reference. It&apos;s a beautifully organised technical atlas of Ambient Spatial Intelligence that makes every capability easy to discover, understand and use.
          </p>
          <Link href="/spatial-computing" className="inline-flex items-center gap-3 h-[48px] px-8 rounded-full bg-white text-black font-medium text-[14px] hover:bg-[#F2F2F0] transition-colors mt-12">
            Explore Spatial Computing <ArrowRight size={16} />
          </Link>
        </ScrollReveal>
      </section>

    </div>
  );
}
