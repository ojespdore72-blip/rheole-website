"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Compass, BookOpen, GraduationCap, Map, Coffee, Users, History, TreePine, MapPin, Camera, Building2, Building, Train, Bike, Footprints, Rocket, Palette, Globe, ArrowRight, CornerDownRight, Network, Sparkles, BrainCircuit } from "lucide-react";

// --- REUSABLE EDITORIAL COMPONENTS ---

function ScrollReveal({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function EditorialSection({ id, title, subtitle, children, alternateBg = false }: { id: string, title: string, subtitle?: string, children: React.ReactNode, alternateBg?: boolean }) {
  return (
    <section id={id} className={`w-full relative py-24 md:py-32 border-b border-white/[0.04] ${alternateBg ? 'bg-[#000000]' : 'bg-transparent'}`}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-start gap-16 md:gap-24 relative">
        <ScrollReveal className="w-full md:w-[320px] shrink-0 sticky top-32 z-10">
          <div className="flex flex-col gap-4">
            <h2 className="text-[12px] text-[#8B5CF6] font-medium tracking-[0.2em] uppercase">
              {title}
            </h2>
            {subtitle && (
              <h3 className="text-[28px] md:text-[36px] font-serif-editorial text-[#F2F2F0] leading-tight">
                {subtitle}
              </h3>
            )}
            <div className="w-12 h-[1px] bg-white/[0.1] mt-4" />
          </div>
        </ScrollReveal>

        <div className="flex-1 w-full flex flex-col gap-12">
          <ScrollReveal delay={0.1}>
            {children}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function KnowledgeBlock({ type, title, children }: { type: "BehaviourScience" | "LearningInsight" | "HumanGrowth" | "CuriosityNote", title: string, children: React.ReactNode }) {
  return (
    <div className="my-12 w-full p-8 rounded-2xl bg-[#03010A] border border-white/[0.05] relative overflow-hidden group">
      <div className="absolute top-0 left-0 w-1 h-full bg-[#8B5CF6]/40" />
      <div className="flex items-center gap-3 mb-4">
        <Sparkles size={16} className="text-[#8B5CF6]" />
        <h4 className="font-mono text-[11px] text-[#A78BFA] uppercase tracking-[0.2em]">
          {type.replace(/([A-Z])/g, ' $1').trim()} <span className="text-[#8B5CF6]/50 px-2">/</span> {title}
        </h4>
      </div>
      <div className="text-[16px] md:text-[18px] text-[#F2F2F0] leading-relaxed font-light italic">
        "{children}"
      </div>
    </div>
  );
}

// --- COMPLEX INTERACTIVE COMPONENTS ---

function GrowthGraphVisualizer() {
  const [activePath, setActivePath] = useState<"ai" | "photo" | "coffee">("ai");

  const paths = {
    ai: {
      label: "Artificial Intelligence",
      icon: BrainCircuit,
      nodes: [
        { title: "Artificial Intelligence", desc: "Initial interest" },
        { title: "Computer Vision", desc: "Learning pattern recognition" },
        { title: "Autonomous Vehicles", desc: "Real-world application" },
        { title: "Smart Cities", desc: "Urban integration" },
        { title: "Public Infrastructure", desc: "Policy & society" }
      ]
    },
    photo: {
      label: "Photography",
      icon: Camera,
      nodes: [
        { title: "Street Photography", desc: "Initial interest" },
        { title: "Architecture", desc: "Appreciating structure" },
        { title: "Urban Design", desc: "How spaces work" },
        { title: "History", desc: "The evolution of the city" },
        { title: "Preservation", desc: "Active community involvement" }
      ]
    },
    coffee: {
      label: "Coffee",
      icon: Coffee,
      nodes: [
        { title: "Specialty Coffee", desc: "Initial interest" },
        { title: "Coffee Roasting", desc: "The science of flavour" },
        { title: "Independent Cafés", desc: "Exploring local scenes" },
        { title: "Local Entrepreneurs", desc: "Meeting the founders" },
        { title: "Business Ownership", desc: "Starting a venture" }
      ]
    }
  };

  const active = paths[activePath];

  return (
    <div className="w-full mt-12 p-8 md:p-12 border border-white/[0.06] bg-[#03010A] rounded-3xl relative overflow-hidden flex flex-col gap-12">
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#8B5CF6]/[0.03] rounded-full blur-[80px] pointer-events-none" />
      
      {/* Path Selector */}
      <div className="flex flex-wrap gap-2 p-1 border border-white/[0.06] bg-[#000000] rounded-xl self-start z-10">
        {(["ai", "photo", "coffee"] as const).map(key => (
          <button
            key={key}
            onClick={() => setActivePath(key)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-[14px] font-medium transition-all ${
              activePath === key 
                ? 'bg-[#8B5CF6]/10 text-[#8B5CF6] border border-[#8B5CF6]/30' 
                : 'text-[#6B7280] hover:text-[#A78BFA] border border-transparent'
            }`}
          >
            {React.createElement(paths[key].icon, { size: 14 })}
            <span className="capitalize">{paths[key].label}</span>
          </button>
        ))}
      </div>

      {/* The Branching Visualization */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activePath}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col relative z-10"
        >
          <div className="absolute top-8 bottom-8 left-[23px] w-[2px] bg-gradient-to-b from-[#8B5CF6]/50 via-[#8B5CF6]/10 to-transparent" />
          
          {active.nodes.map((node, idx) => (
            <div key={idx} className="flex gap-8 relative z-10 group py-6">
              <div className={`w-12 h-12 rounded-full border ${idx === 0 ? 'border-[#8B5CF6] bg-[#8B5CF6]/20' : 'border-[#8B5CF6]/30 bg-[#0A0A0A]'} flex items-center justify-center shrink-0 transition-colors group-hover:border-[#8B5CF6] group-hover:bg-[#8B5CF6]/10`}>
                <div className={`w-2 h-2 rounded-full ${idx === 0 ? 'bg-[#F2F2F0]' : 'bg-[#8B5CF6]'} shadow-[0_0_10px_rgba(139,92,246,0.5)]`} />
              </div>
              <div className="flex flex-col justify-center gap-1">
                <span className="text-[12px] font-mono text-[#6B7280] uppercase tracking-[0.1em]">{node.desc}</span>
                <span className={`text-[18px] md:text-[22px] ${idx === 0 ? 'text-[#8B5CF6] font-medium' : 'text-[#F2F2F0] font-light'} transition-colors group-hover:text-[#F2F2F0]`}>
                  {node.title}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function ComparisonTable() {
  const comparisons = [
    { left: "Based on clicks", right: "Curiosity-first" },
    { left: "Based on watch history", right: "Growth-oriented" },
    { left: "Reinforce existing preferences", right: "Interest evolution" },
    { left: "Static personalisation", right: "Discovery balance" },
    { left: "Engagement optimisation", right: "Knowledge expansion" },
    { left: "Echo chambers", right: "Human development" }
  ];

  return (
    <div className="w-full border border-white/[0.06] rounded-2xl overflow-hidden bg-[#0A0A0A] mt-12">
      <div className="grid grid-cols-2 bg-[#000000] border-b border-white/[0.06] p-6">
        <div className="font-mono text-[12px] text-[#6B7280] tracking-[0.1em] uppercase">Traditional Recommendation</div>
        <div className="font-mono text-[12px] text-[#8B5CF6] tracking-[0.1em] uppercase">Rheole Curiosity Intelligence</div>
      </div>
      {comparisons.map((comp, idx) => (
        <div key={idx} className="grid grid-cols-2 p-6 border-b border-white/[0.04] last:border-0 items-center gap-6 hover:bg-white/[0.01] transition-colors">
          <div className="text-[15px] text-[#6B7280] line-through decoration-white/20">{comp.left}</div>
          <div className="text-[15px] text-[#F2F2F0] font-medium">{comp.right}</div>
        </div>
      ))}
    </div>
  );
}

// --- MAIN ARTICLE COMPONENT ---

export default function CuriosityArticle() {
  return (
    <article className="w-full flex flex-col items-center">
      
      {/* 1. INTEREST EVOLUTION */}
      <EditorialSection id="evolution" title="Interest Evolution" subtitle="Expanding outward like branches.">
        <p className="text-[18px] md:text-[22px] text-[#A78BFA] font-light leading-relaxed mb-12">
          People are constantly evolving. Our interests are never fixed. A student becomes a founder. A traveller becomes a photographer. Curiosity shapes every transformation, and Rheole understands curiosity before it becomes routine behaviour.
        </p>

        <KnowledgeBlock type="BehaviourScience" title="The Trap of the Echo Chamber">
          Most recommendation engines assume that what you clicked yesterday is what you want forever. This creates a behavioral loop that stifles human growth. Rheole is designed to actively break that loop by introducing adjacent knowledge.
        </KnowledgeBlock>
      </EditorialSection>

      {/* 2. THE DISCOVERY ENGINE & LEARNING PATTERNS */}
      <EditorialSection id="discovery" title="The Discovery Engine" subtitle="Recognising emerging passions." alternateBg>
        <p className="text-[18px] md:text-[22px] text-[#A78BFA] font-light leading-relaxed mb-12">
          Rheole recognises curiosity by observing exploration, not just repetition. We look at places explored, communities joined, books discovered, and routes travelled.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {[
            { icon: Compass, title: "Places Explored", desc: "Stepping outside routine paths into unknown districts." },
            { icon: Users, title: "Communities Joined", desc: "Engaging in new social or professional circles." },
            { icon: BookOpen, title: "Learning Behaviour", desc: "Topics revisited, questions asked, and knowledge sought." },
            { icon: Globe, title: "Travel Destinations", desc: "Cultural exposure and seasonal patterns of exploration." }
          ].map((item, idx) => (
            <div key={idx} className="flex gap-4 p-6 border border-white/[0.04] bg-[#03010A] rounded-xl hover:border-[#8B5CF6]/30 transition-colors">
              <item.icon size={20} className="text-[#8B5CF6] shrink-0 mt-1" />
              <div className="flex flex-col gap-2">
                <h5 className="text-[16px] text-[#F2F2F0] font-medium">{item.title}</h5>
                <p className="text-[14px] text-[#94A3B8] font-light leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <h4 className="text-[24px] font-serif-editorial text-[#F2F2F0] mb-6">Learning Patterns</h4>
        <p className="text-[18px] text-[#A78BFA] font-light leading-relaxed mb-8">
          Curiosity develops through repetition and diversity. Rheole maps this journey:
        </p>
        <div className="flex flex-wrap gap-4">
          {["Occasional interest", "Growing curiosity", "Regular exploration", "Deep engagement", "Long-term passion"].map((stage, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="text-[14px] text-[#8B5CF6] font-mono">0{i+1}</span>
              <span className="text-[16px] text-[#F2F2F0] font-light">{stage}</span>
              {i < 4 && <ArrowRight size={14} className="text-[#333] ml-2" />}
            </div>
          ))}
        </div>
      </EditorialSection>

      {/* 3. GROWTH GRAPH */}
      <EditorialSection id="growth" title="Growth Graph" subtitle="Knowledge becomes interconnected.">
        <p className="text-[18px] md:text-[22px] text-[#A78BFA] font-light leading-relaxed mb-8">
          Instead of locking you into static categories, Rheole visualises curiosity expanding over time. We map how one interest naturally bleeds into another.
        </p>
        
        <GrowthGraphVisualizer />
      </EditorialSection>

      {/* 4. REAL-WORLD EXAMPLES */}
      <EditorialSection id="real-world" title="Real-World Examples" subtitle="Noticing gradual curiosity." alternateBg>
        <p className="text-[18px] md:text-[22px] text-[#A78BFA] font-light leading-relaxed mb-12">
          Rheole notices gradual curiosity rather than isolated actions. It doesn't bombard you; it gently nurtures your expanding horizons.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { start: "\"I've recently started hiking.\"", evolved: "Rheole begins introducing local conservation groups and nearby topography maps, nurturing an interest in the environment." },
            { start: "\"I'm learning Kannada.\"", evolved: "Surfaces authentic local cultural events and language-exchange meetups in your neighbourhood." },
            { start: "\"I'm exploring cafés.\"", evolved: "Gradually introduces coffee roasting workshops and spaces hosted by local entrepreneurs." },
            { start: "\"I'm reading about astronomy.\"", evolved: "Highlights stargazing events during clear skies and local observatory open nights." }
          ].map((ex, i) => (
            <div key={i} className="p-8 border border-white/[0.04] bg-[#0A0A0A] rounded-2xl flex flex-col gap-6 group hover:border-[#8B5CF6]/20 transition-colors">
              <div className="text-[20px] font-serif-editorial text-[#6B7280] italic">
                {ex.start}
              </div>
              <div className="flex items-start gap-4">
                <CornerDownRight size={20} className="text-[#8B5CF6] mt-1 shrink-0 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
                <div className="text-[16px] text-[#F2F2F0] font-light leading-relaxed">
                  {ex.evolved}
                </div>
              </div>
            </div>
          ))}
        </div>
      </EditorialSection>

      {/* 5. UNIQUE RHEOLE FEATURES */}
      <EditorialSection id="features" title="Proprietary Concepts" subtitle="Architecting human growth.">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          <div className="flex flex-col gap-4 p-8 rounded-2xl bg-[#03010A] border border-[#8B5CF6]/30 relative overflow-hidden group lg:col-span-2">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#8B5CF6]/5 rounded-full blur-[60px]" />
            <Network size={24} className="text-[#8B5CF6] mb-2" />
            <h4 className="text-[24px] font-serif-editorial text-[#F2F2F0]">Curiosity Graph™</h4>
            <div className="w-12 h-[1px] bg-[#8B5CF6]/50" />
            <p className="text-[16px] text-[#94A3B8] font-light leading-relaxed max-w-[800px]">
              Maps how one interest naturally expands into related domains over time. It is the engine that prevents you from getting stuck in an echo chamber, ensuring that your digital experience grows as you do.
            </p>
          </div>

          <div className="flex flex-col gap-4 p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
            <h4 className="text-[24px] font-serif-editorial text-[#F2F2F0]">Emerging Interests™</h4>
            <div className="w-8 h-[1px] bg-white/20" />
            <p className="text-[15px] text-[#94A3B8] font-light leading-relaxed">
              Highlights subjects that are just beginning to develop in your life, rather than only serving you content from long-established preferences.
            </p>
          </div>

          <div className="flex flex-col gap-4 p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
            <h4 className="text-[24px] font-serif-editorial text-[#F2F2F0]">Discovery Balance™</h4>
            <div className="w-8 h-[1px] bg-white/20" />
            <p className="text-[15px] text-[#94A3B8] font-light leading-relaxed">
              Encourages healthy exploration by algorithmically balancing familiar recommendations with entirely new, unexpected experiences.
            </p>
          </div>

          <div className="flex flex-col gap-4 p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05] lg:col-span-2">
            <h4 className="text-[24px] font-serif-editorial text-[#F2F2F0]">Horizon Suggestions™</h4>
            <div className="w-8 h-[1px] bg-white/20" />
            <p className="text-[15px] text-[#94A3B8] font-light leading-relaxed mb-4">
              Instead of recommending only similar topics, Rheole introduces adjacent areas that naturally broaden your understanding of the world.
            </p>
          </div>

        </div>

        <KnowledgeBlock type="HumanGrowth" title="Why Curiosity Matters">
          Curiosity improves learning, creativity, innovation, and career growth. Technology should actively encourage exploration instead of building walls around what you already know.
        </KnowledgeBlock>
      </EditorialSection>

      {/* 6. COMPARISON */}
      <EditorialSection id="comparison" title="The Difference" subtitle="Growth vs Engagement." alternateBg>
        <p className="text-[18px] md:text-[22px] text-[#A78BFA] font-light leading-relaxed">
          The future is not recommendation engines. It is curiosity engines.
        </p>
        
        <ComparisonTable />
      </EditorialSection>

      {/* 7. FUTURE OF PERSONAL INTELLIGENCE */}
      <EditorialSection id="vision" title="The Future" subtitle="Expanding horizons.">
        <p className="text-[24px] md:text-[32px] text-[#F2F2F0] font-serif-editorial font-light leading-tight max-w-[800px]">
          The best AI doesn't only know what you like. It understands who you are becoming.
        </p>
        <p className="text-[18px] md:text-[22px] text-[#A78BFA] font-light leading-relaxed mt-8 max-w-[800px]">
          Technology should help people become more knowledgeable, more creative, and more connected to the world around them. AI should expand horizons, not narrow them.
        </p>

        <div className="mt-16 p-8 md:p-12 border border-[#8B5CF6]/30 bg-[#8B5CF6]/5 rounded-3xl flex flex-col items-center text-center max-w-[800px] relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10 pointer-events-none" />
          <h3 className="text-[28px] md:text-[40px] font-serif-editorial text-[#F2F2F0] leading-tight relative z-10">
            "Rheole doesn't simply recommend what I already enjoy. It helps me discover what I might grow to love."
          </h3>
          <span className="text-[12px] font-mono text-[#8B5CF6] uppercase tracking-[0.2em] mt-8 relative z-10">
            Curiosity Intelligence
          </span>
        </div>
      </EditorialSection>

    </article>
  );
}
