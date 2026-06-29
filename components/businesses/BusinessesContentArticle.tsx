'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'

// --- REUSABLE COMPONENTS ---

function ChapterSection({ number, title, children, isLast = false, useOrange = false }: { number: string, title: string, children: React.ReactNode, isLast?: boolean, useOrange?: boolean }) {
  return (
    <section className={`w-full relative pt-16 md:pt-20 ${useOrange ? 'bg-orange-950/10' : ''}`}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-start gap-12 md:gap-24 relative">
        <ScrollReveal className="w-full md:w-[120px] shrink-0 sticky top-32 z-10 hidden md:block pb-4">
          <div className="flex flex-col gap-4">
            <span className="text-[32px] md:text-[48px] font-light text-[#f97316]/80 leading-none">
              {number}
            </span>
            <h2 className="text-[14px] md:text-[16px] text-[#F2F2F0] font-medium tracking-wide">
              {title}
            </h2>
          </div>
        </ScrollReveal>

        <div className="flex-1 w-full pb-20 md:pb-24">
          <ScrollReveal delay={0.1}>
            {children}
          </ScrollReveal>
        </div>
      </div>
      
      {!isLast && (
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#f97316]/20 to-transparent" />
        </div>
      )}
    </section>
  )
}

function ScrollReveal({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

function GridCard({ title, desc }: { title: string, desc: string }) {
  return (
    <div className="flex flex-col p-6 md:p-8 rounded-2xl bg-[#080808] border border-white/5 hover:border-[#f97316]/30 transition-colors duration-500 group">
      <h3 className="text-[18px] md:text-[20px] text-[#F2F2F0] font-medium mb-3 group-hover:text-[#f97316] transition-colors">{title}</h3>
      <p className="text-[14px] md:text-[15px] text-[#A0A0A0] leading-relaxed">
        {desc}
      </p>
    </div>
  )
}

// --- INTERACTIVE COMPONENTS ---

function ScenarioAccordion() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const items = [
    {
      title: "I'm launching a startup.",
      reason: "Rheole maps local co-working spaces, legal consultants specializing in incorporation, seed-stage accelerator programs nearby, and networking events for early-stage founders."
    },
    {
      title: "I need a patent attorney.",
      reason: "Rheole filters legal firms by IP specialization, surfacing those with proven track records in your specific technology domain, cross-referencing industry cluster proximity."
    },
    {
      title: "I'm searching for AI companies.",
      reason: "Rheole reveals the localized AI ecosystem: emerging stealth startups, university research labs collaborating on ML, and enterprise AI incubators active in your city."
    },
    {
      title: "I need local manufacturers.",
      reason: "Rheole identifies industrial zones, evaluates production capacities based on commercial data, and surfaces niche fabrication workshops equipped for your prototyping needs."
    },
    {
      title: "I'm opening a restaurant.",
      reason: "Rheole analyzes neighborhood foot traffic, surfaces local commercial real estate agents, identifies nearby wholesale food suppliers, and maps out competing culinary concepts."
    },
    {
      title: "I want ethical local brands.",
      reason: "Rheole highlights businesses with certified sustainable supply chains, B-Corp statuses, and local community reinvestment initiatives, avoiding generic greenwashing."
    }
  ];

  return (
    <div className="flex flex-col gap-3 mt-6 w-full max-w-[900px] relative">
      {items.map((item, idx) => {
        const isActive = activeIndex === idx;
        return (
          <div 
            key={idx} 
            className={`w-full overflow-hidden transition-all duration-500 rounded-xl border ${isActive ? 'bg-[#f97316]/10 border-[#f97316]/30' : 'bg-[#080808] border-white/5 hover:border-white/10'}`}
          >
            <button 
              onClick={() => setActiveIndex(isActive ? null : idx)}
              className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none group"
            >
              <h3 className={`text-[16px] md:text-[20px] font-medium transition-colors duration-300 ${isActive ? 'text-[#f97316]' : 'text-[#F2F2F0] group-hover:text-[#f97316]/70'}`}>
                {item.title}
              </h3>
              <div className={`w-8 h-8 rounded-full bg-[#f97316]/10 flex items-center justify-center transition-transform duration-500 ${isActive ? 'rotate-180 bg-[#f97316]/20' : ''}`}>
                <ChevronDown className={`w-4 h-4 ${isActive ? 'text-[#f97316]' : 'text-[#f97316]/50'}`} />
              </div>
            </button>
            <AnimatePresence>
              {isActive && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="px-6 md:px-8 pb-8 pt-2">
                    <div className="h-[1px] w-full bg-[#f97316]/20 mb-6" />
                    <p className="text-[15px] md:text-[16px] text-[#A0A0A0] leading-relaxed">
                      <strong className="text-[#F2F2F0] font-medium">Why Rheole Recommends: </strong> 
                      {item.reason}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

function NetworkEcosystemFlow() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const nodes = [
    { title: "Startup", desc: "The central node of innovation." },
    { title: "Coworking Space", desc: "Provides infrastructure and a localized hub for early operations." },
    { title: "Law Firm", desc: "Specializes in IP protection and corporate incorporation." },
    { title: "Chartered Accountant", desc: "Manages early financial compliance and seed capital tracking." },
    { title: "Recruitment Agency", desc: "Sources specialized early-stage engineering and growth talent." },
    { title: "Investors", desc: "Provides necessary capital for scaling operations." },
    { title: "Accelerators", desc: "Offers mentorship, strategy refining, and network expansion." },
    { title: "Universities", desc: "Acts as a pipeline for fresh talent and academic R&D collaboration." },
    { title: "Technology Partners", desc: "Provides B2B cloud, API, and hardware infrastructure." },
    { title: "Customers", desc: "The ultimate ecosystem output." }
  ];

  return (
    <div className="mt-12 w-full flex flex-col gap-8 max-w-[900px] mx-auto">
      
      {/* Snake Flow Container */}
      <div className="flex flex-wrap items-center gap-4">
        {nodes.map((item, idx) => {
          const isActive = activeIndex === idx;
          const isLast = idx === nodes.length - 1;
          
          return (
            <React.Fragment key={idx}>
              <button
                onClick={() => setActiveIndex(isActive ? null : idx)}
                className={`px-5 py-2.5 rounded-full border transition-colors duration-300 ${
                  isActive 
                    ? 'bg-[#f97316] border-[#f97316] text-[#080808]' 
                    : 'bg-[#080808] border-white/10 text-[#A0A0A0] hover:border-[#f97316]/50 hover:text-[#F2F2F0]'
                }`}
              >
                <span className="text-[14px] md:text-[15px] font-medium">{item.title}</span>
              </button>
              
              {!isLast && (
                <div className="text-white/20 text-[18px] font-light px-2 hidden sm:block">
                  →
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Explanation Box */}
      <AnimatePresence mode="wait">
        {activeIndex !== null && (
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="w-full p-6 md:p-8 rounded-2xl bg-[#0a0a0a] border border-white/5"
          >
            <h4 className="text-[18px] text-[#f97316] font-medium mb-3">
              {nodes[activeIndex].title}
            </h4>
            <p className="text-[15px] md:text-[16px] text-[#A0A0A0] leading-relaxed">
              {nodes[activeIndex].desc}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  )
}

// --- MAIN ARTICLE ---

export default function BusinessesContentArticle() {
  return (
    <article className="w-full flex flex-col items-center">
      
      {/* Chapter 1: The Living Economy */}
      <ChapterSection number="01" title="The Living Economy">
        <div className="flex flex-col gap-8 max-w-[900px]">
          <p className="text-[20px] md:text-[24px] text-[#F2F2F0] font-light leading-relaxed">
            Cities are constantly creating value.
          </p>
          <div className="h-[1px] w-12 bg-[#f97316]/30" />
          <p className="text-[16px] md:text-[18px] text-[#A0A0A0] font-light leading-relaxed">
            Every café roasting beans at dawn. Every stealth startup compiling code at midnight. Every local repair shop restoring hardware. Every heavy manufacturer forging steel. Every hospital saving lives. Every design studio pushing boundaries. Every freelancer closing deals. Every enterprise structuring the skyline.
          </p>
          <p className="text-[16px] md:text-[18px] text-[#A0A0A0] font-light leading-relaxed">
            They all contribute to a living, breathing economy. Traditional platforms simply list these businesses as static points on a map. Rheole, however, helps users understand the profound ecosystem humming behind them.
          </p>
        </div>
      </ChapterSection>

      {/* Chapter 2: Discovering the Right Business */}
      <ChapterSection number="02" title="Discovering the Right Business">
        <div className="flex flex-col gap-8 max-w-[900px]">
          <p className="text-[20px] md:text-[24px] text-[#F2F2F0] font-light leading-relaxed">
            Finding a business is not simply about searching.
          </p>
          <p className="text-[16px] md:text-[18px] text-[#A0A0A0] font-light leading-relaxed">
            The "best" choice is entirely contextual. It depends intimately on your Purpose, Timing, Budget, Urgency, Expertise, Availability, Reputation, Environment, Specialisation, and Accessibility.
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <GridCard 
              title="Contextual Accuracy" 
              desc="Why one business may be absolutely ideal for a corporate executive closing a deal, but entirely unsuitable for a college student needing a quiet place to study." 
            />
            <GridCard 
              title="Dynamic Relevance" 
              desc="How a business's utility changes depending on whether it's a bustling Friday night or a quiet Tuesday morning." 
            />
          </div>
        </div>
      </ChapterSection>

      {/* Chapter 3: Startups as Living Ecosystems */}
      <ChapterSection number="03" title="Startups as Ecosystems" useOrange={true}>
        <div className="flex flex-col gap-8 max-w-[900px]">
          <p className="text-[20px] md:text-[24px] text-[#F2F2F0] font-light leading-relaxed">
            A startup is not just a registered company.
          </p>
          <div className="h-[1px] w-12 bg-white/10" />
          <p className="text-[16px] md:text-[18px] text-[#A0A0A0] font-light leading-relaxed">
            It is a dense node of Innovation, Talent, Research, Collaboration, Mentorship, Funding, Experimentation, and Problem-solving.
          </p>
          <p className="text-[16px] md:text-[18px] text-[#A0A0A0] font-light leading-relaxed">
            Rheole helps founders, investors, students, researchers, and professionals look past the corporate registration and actually discover the living startup ecosystems accelerating around them.
          </p>
        </div>
      </ChapterSection>

      {/* Chapter 4: Local Commerce Intelligence */}
      <ChapterSection number="04" title="Local Commerce Intelligence">
        <div className="flex flex-col gap-8 max-w-[900px]">
          <p className="text-[20px] md:text-[24px] text-[#F2F2F0] font-light leading-relaxed">
            Data transformed into actionable commercial intelligence.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {["Peak operating hours", "Service quality patterns", "Customer flow", "Business specialisations", "Neighbourhood demand", "Industry clusters", "Emerging businesses", "Long-established businesses", "Seasonal activity", "Commercial trends"].map(tag => (
              <span key={tag} className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-[14px] text-[#F2F2F0] font-light">
                {tag}
              </span>
            ))}
          </div>
          <p className="text-[16px] md:text-[18px] text-[#A0A0A0] font-light leading-relaxed mt-4">
            These insights don't just tell you a business is open; they help you make highly informed, strategic decisions about where to spend your time, capital, and effort.
          </p>
        </div>
      </ChapterSection>

      {/* Chapter 5: Business Categories */}
      <ChapterSection number="05" title="Business Categories">
        <div className="flex flex-col gap-8 max-w-[1200px]">
          <p className="text-[20px] md:text-[24px] text-[#F2F2F0] font-light leading-relaxed max-w-[900px]">
            Every category possesses a unique structural footprint.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            <GridCard title="Restaurants & Hospitality" desc="Surfaced by ambiance, culinary specialization, and current table availability." />
            <GridCard title="Healthcare & Wellness" desc="Prioritized by expertise, patient reputation, and immediate urgent care capacity." />
            <GridCard title="Technology & Startups" desc="Indexed by innovation sector, talent density, and investment stage." />
            <GridCard title="Manufacturing & Logistics" desc="Mapped by production capabilities, scale, and supply chain proximity." />
            <GridCard title="Creative Studios" desc="Discovered through portfolio aesthetics, medium specialization, and agency culture." />
            <GridCard title="Professional Services" desc="Vetted by professional credentials, corporate track record, and localized domain authority." />
          </div>
          
          <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-[#080808] to-[#f97316]/5 border border-[#f97316]/20 mt-4">
            <h4 className="text-[14px] text-[#f97316] uppercase tracking-widest font-medium mb-3">Knowledge Block</h4>
            <p className="text-[15px] md:text-[16px] text-[#A0A0A0] leading-relaxed">
              <strong className="text-[#F2F2F0]">Industry Notes:</strong> When users typically need a specific category, Rheole alters its recommendation heuristics. A search for "Emergency Plumber" prioritizes sheer proximity and immediate availability, while a search for "Corporate Architecture Firm" prioritizes deep portfolios and long-term prestige over physical distance.
            </p>
          </div>
        </div>
      </ChapterSection>

      {/* Chapter 6: Business Networks */}
      <ChapterSection number="06" title="Business Networks" useOrange={true}>
        <div className="flex flex-col gap-8 max-w-[900px]">
          <p className="text-[20px] md:text-[24px] text-[#F2F2F0] font-light leading-relaxed">
            Businesses rarely operate in isolation.
          </p>
          <p className="text-[16px] md:text-[18px] text-[#A0A0A0] font-light leading-relaxed">
            They are tightly woven nodes in a vast commercial web. Rheole helps users navigate these interconnected business ecosystems.
          </p>
          
          <NetworkEcosystemFlow />
        </div>
      </ChapterSection>

      {/* Chapter 7: Opportunity Discovery */}
      <ChapterSection number="07" title="Opportunity Discovery">
        <div className="flex flex-col gap-8 max-w-[900px]">
          <p className="text-[20px] md:text-[24px] text-[#F2F2F0] font-light leading-relaxed">
            Users don't always know exactly what they are searching for.
          </p>
          <div className="h-[1px] w-12 bg-white/10" />
          <p className="text-[16px] md:text-[18px] text-[#A0A0A0] font-light leading-relaxed">
            Sometimes they are looking for suppliers, finding internships, discovering local manufacturers, or meeting startup founders. They might be exploring franchise opportunities, actively supporting women-led businesses, or hiring local talent.
          </p>
          <p className="text-[16px] md:text-[18px] text-[#A0A0A0] font-light leading-relaxed">
            Rheole reveals these serendipitous opportunities that traditional search platforms—which require exact string matching—simply cannot.
          </p>
        </div>
      </ChapterSection>

      {/* Chapter 8: Real-Life Scenarios */}
      <ChapterSection number="08" title="Real-Life Scenarios">
        <div className="flex flex-col gap-8 max-w-[900px]">
          <p className="text-[20px] md:text-[24px] text-[#F2F2F0] font-light leading-relaxed">
            Intelligence applied to complex human needs.
          </p>
          <p className="text-[16px] md:text-[18px] text-[#A0A0A0] font-light leading-relaxed">
            Explore how Rheole's AI reasons through intricate, multi-variable commercial requirements.
          </p>
          
          <ScenarioAccordion />
        </div>
      </ChapterSection>

      {/* Chapter 9: The Future of Business Discovery */}
      <ChapterSection number="09" title="The Future of Business Discovery" useOrange={true}>
        <div className="flex flex-col gap-8 max-w-[900px]">
          <p className="text-[20px] md:text-[24px] text-[#F2F2F0] font-light leading-relaxed">
            Moving beyond rudimentary search towards intelligent commercial ecosystems.
          </p>
          <p className="text-[16px] md:text-[18px] text-[#A0A0A0] font-light leading-relaxed">
            In the future, businesses become discoverable not based on who optimized their keywords best, but based on true Context, Need, Capability, Relationships, Trust, Relevance, Timing, and Purpose.
          </p>
          <p className="text-[16px] md:text-[18px] text-[#A0A0A0] font-light leading-relaxed">
            Rheole transforms commercial discovery into an intelligent experience where the best business for the job is surfaced effortlessly.
          </p>
        </div>
      </ChapterSection>

      {/* Chapter 10: Building Stronger Economies */}
      <ChapterSection number="10" title="Building Stronger Local Economies" isLast={true}>
        <div className="flex flex-col gap-8 max-w-[900px]">
          <p className="text-[20px] md:text-[24px] text-[#F2F2F0] font-light leading-relaxed">
            Healthy cities depend on unequivocally strong local businesses.
          </p>
          <div className="h-[1px] w-12 bg-white/10" />
          <p className="text-[16px] md:text-[18px] text-[#A0A0A0] font-light leading-relaxed">
            When people discover businesses more effectively, a chain reaction occurs: entrepreneurs grow faster, innovation accelerates, high-quality jobs increase, communities become financially stronger, and local economies flourish.
          </p>
          <p className="text-[16px] md:text-[18px] text-[#A0A0A0] font-light leading-relaxed">
            Rheole exists not only to help individuals find what they need, but to fundamentally strengthen the local economic ecosystems of the world.
          </p>
          
          {/* Comparison Section */}
          <div className="mt-16 w-full rounded-2xl border border-white/10 bg-[#0A0A0A] overflow-hidden">
            <div className="flex flex-col md:flex-row w-full">
              {/* Traditional */}
              <div className="w-full md:w-1/2 p-8 md:p-12 border-b md:border-b-0 md:border-r border-white/5">
                <h3 className="text-[18px] text-[#A0A0A0] font-medium mb-8">Traditional Business Platforms</h3>
                <ul className="flex flex-col gap-4">
                  {[
                    "Static listings",
                    "Category browsing",
                    "Keyword search",
                    "Ratings first",
                    "Generic results",
                    "No ecosystem understanding"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-[15px] text-[#A0A0A0]">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Rheole */}
              <div className="w-full md:w-1/2 p-8 md:p-12 bg-gradient-to-br from-[#080808] to-[#f97316]/5 relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#f97316]/10 blur-[60px] pointer-events-none" />
                <h3 className="text-[18px] text-[#F2F2F0] font-medium mb-8">Rheole</h3>
                <ul className="flex flex-col gap-4 relative z-10">
                  {[
                    "Context-aware discovery",
                    "Economic intelligence",
                    "Startup ecosystem mapping",
                    "Opportunity discovery",
                    "Relationship understanding",
                    "AI-assisted business recommendations",
                    "Dynamic local insights"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-[15px] text-[#F2F2F0]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#f97316] shadow-[0_0_10px_rgba(249,115,22,0.6)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

        </div>
      </ChapterSection>
    </article>
  )
}
