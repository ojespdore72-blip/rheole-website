"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MapPin, Search, GraduationCap, Briefcase, Camera, Music, BookOpen, Laptop, Coffee, Heart, Users2, Shield, Eye, EyeOff, Lock, UserCircle2, Radar, Target, Library } from "lucide-react";

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
    <section id={id} className={`w-full relative py-24 md:py-32 border-b border-white/[0.04] ${alternateBg ? 'bg-[#050505]' : 'bg-transparent'}`}>
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

function HumanInsight({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <div className="my-12 w-full p-8 rounded-2xl bg-[#080808] border border-white/[0.05] relative overflow-hidden group">
      <div className="absolute top-0 left-0 w-1 h-full bg-[#8B5CF6]/50" />
      <div className="flex items-center gap-3 mb-4">
        <UserCircle2 size={16} className="text-[#8B5CF6]" />
        <h4 className="font-mono text-[11px] text-[#A0A0A0] uppercase tracking-[0.2em]">
          Insight <span className="text-[#8B5CF6]/50 px-2">/</span> {title}
        </h4>
      </div>
      <div className="text-[16px] md:text-[18px] text-[#F2F2F0] leading-relaxed font-light italic">
        "{children}"
      </div>
    </div>
  );
}

function Pill({ text, icon: Icon }: { text: string, icon?: any }) {
  return (
    <div className="px-5 py-2.5 rounded-full border border-white/[0.08] bg-[#0A0A0A] text-[14px] text-[#A0A0A0] font-light hover:border-[#8B5CF6]/40 hover:text-[#F2F2F0] transition-colors cursor-default whitespace-nowrap flex items-center gap-2">
      {Icon && <Icon size={14} className="text-[#8B5CF6]/70" />}
      {text}
    </div>
  );
}

// --- COMPLEX INTERACTIVE COMPONENTS ---

function ContextEngineVisualizer() {
  const contexts = [
    { label: "Same AI conference", icon: Laptop },
    { label: "Coworking space", icon: Coffee },
    { label: "Photography exhibition", icon: Camera },
    { label: "Similar cycling routes", icon: MapPin },
    { label: "Same university", icon: GraduationCap },
    { label: "Local library", icon: BookOpen }
  ];

  return (
    <div className="w-full mt-12 p-8 md:p-12 border border-white/[0.06] bg-[#080808] rounded-3xl relative overflow-hidden flex flex-col md:flex-row items-center gap-12">
      <div className="absolute top-[-50%] left-[-20%] w-[300px] h-[300px] bg-[#8B5CF6]/[0.04] rounded-full blur-[80px] pointer-events-none" />
      
      <div className="flex flex-col gap-6 w-full md:w-1/2 relative z-10">
        {contexts.map((ctx, idx) => (
          <div key={idx} className="flex items-center gap-4 group">
            <div className="w-10 h-10 rounded-full border border-white/10 bg-[#050505] flex items-center justify-center shrink-0 group-hover:border-[#8B5CF6]/50 group-hover:bg-[#8B5CF6]/10 transition-colors">
              <ctx.icon size={16} className="text-[#A0A0A0] group-hover:text-[#8B5CF6] transition-colors" />
            </div>
            <div className="text-[16px] text-[#F2F2F0] font-light">{ctx.label}</div>
          </div>
        ))}
      </div>
      
      <div className="w-full md:w-1/2 flex items-center justify-center relative z-10 border-l border-white/[0.04] pl-0 md:pl-12 pt-8 md:pt-0 border-t md:border-t-0 mt-8 md:mt-0">
        <div className="text-center flex flex-col items-center">
          <div className="w-24 h-24 rounded-full border border-[#8B5CF6]/30 bg-[#8B5CF6]/10 flex items-center justify-center mb-6 relative">
            <div className="absolute inset-0 rounded-full border border-[#8B5CF6]/20 animate-ping opacity-20" />
            <Users2 size={32} className="text-[#8B5CF6]" />
          </div>
          <h4 className="text-[20px] font-serif-editorial text-[#F2F2F0] mb-2">Meaningful Introduction</h4>
          <p className="text-[14px] text-[#A0A0A0] font-light max-w-[200px]">Context is established before you even say hello.</p>
        </div>
      </div>
    </div>
  );
}

function RealStoriesAccordion() {
  const [active, setActive] = useState<number | null>(0);
  
  const scenarios = [
    { q: "I moved to Bengaluru.", a: "Rheole quietly noticed your daily route to the tech park and surfaced a fellow designer working in the same building who shared your interest in minimal architecture. A natural coffee chat followed." },
    { q: "I'm attending my first hackathon.", a: "Before arriving, you discovered three other solo developers looking for teammates. Rheole highlighted that you all shared an interest in open-source AI, removing the friction of awkward introductions." },
    { q: "I'm travelling alone.", a: "While exploring Kyoto, Rheole surfaced a photographer from your home city who was visiting the exact same temple. You shared a localized context far stronger than random chance." },
    { q: "I'm working remotely.", a: "Working from a local café, you were introduced to a freelance writer sitting two tables away. Your shared intent for 'Professional Collaboration' made the introduction seamless and welcome." },
    { q: "I'm exploring local cafés.", a: "You found someone who loves specialty coffee as much as you do. You didn't swipe on a dating app; you matched through a shared frequency of visiting independent roasteries." },
    { q: "I'm volunteering this weekend.", a: "Rheole connected you with three other locals who regularly participate in neighbourhood clean-ups, forging a bond over shared civic responsibility rather than algorithmic popularity." }
  ];

  return (
    <div className="w-full flex flex-col mt-12 border-t border-white/[0.04]">
      {scenarios.map((item, idx) => {
        const isActive = active === idx;
        return (
          <div key={idx} className="border-b border-white/[0.04]">
            <button 
              onClick={() => setActive(isActive ? null : idx)}
              className="w-full py-8 flex items-center justify-between group text-left"
            >
              <span className={`text-[20px] md:text-[24px] font-serif-editorial transition-colors duration-300 pr-4 ${isActive ? 'text-[#F2F2F0]' : 'text-[#6A6A6A] group-hover:text-[#A0A0A0]'}`}>
                "{item.q}"
              </span>
              <span className={`text-[#6A6A6A] transition-transform duration-300 shrink-0 ${isActive ? 'rotate-180 text-[#8B5CF6]' : ''}`}>
                <ChevronDown size={20} />
              </span>
            </button>
            <AnimatePresence>
              {isActive && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="pb-8">
                    <p className="text-[16px] md:text-[18px] text-[#A0A0A0] font-light leading-relaxed pl-6 border-l border-[#8B5CF6]/30">
                      {item.a}
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

function ComparisonTable() {
  const comparisons = [
    { left: "Swiping", right: "Context-first introductions" },
    { left: "Infinite profiles", right: "Human compatibility" },
    { left: "Popularity metrics", right: "Shared experiences" },
    { left: "Algorithmic engagement", right: "Permission-based discovery" },
    { left: "Follower culture", right: "Transparent reasoning" },
    { left: "Endless notifications", right: "Calm interactions" },
    { left: "Random proximity", right: "Quality over quantity" }
  ];

  return (
    <div className="w-full border border-white/[0.06] rounded-2xl overflow-hidden bg-[#0A0A0A] mt-12">
      <div className="grid grid-cols-2 bg-[#050505] border-b border-white/[0.06] p-6">
        <div className="font-mono text-[12px] text-[#6A6A6A] tracking-[0.1em] uppercase">Traditional Social Apps</div>
        <div className="font-mono text-[12px] text-[#8B5CF6] tracking-[0.1em] uppercase">Rheole Nearby Presence</div>
      </div>
      {comparisons.map((comp, idx) => (
        <div key={idx} className="grid grid-cols-2 p-6 border-b border-white/[0.04] last:border-0 items-center gap-6 hover:bg-white/[0.01] transition-colors">
          <div className="text-[15px] text-[#6A6A6A] line-through decoration-white/20">{comp.left}</div>
          <div className="text-[15px] text-[#F2F2F0] font-medium">{comp.right}</div>
        </div>
      ))}
    </div>
  );
}

// --- MAIN ARTICLE COMPONENT ---

export default function PresenceIntelligenceArticle() {
  return (
    <article className="w-full flex flex-col items-center">
      
      {/* 2. HUMAN COMPATIBILITY */}
      <EditorialSection id="compatibility" title="Human Compatibility" subtitle="Compatibility is multidimensional.">
        <p className="text-[18px] md:text-[22px] text-[#A0A0A0] font-light leading-relaxed">
          No single factor determines relevance. Compatibility emerges from the intersection of context, not a shallow profile bio.
        </p>

        <div className="flex flex-wrap gap-4 mt-12">
          <Pill icon={Heart} text="Shared interests" />
          <Pill icon={Briefcase} text="Professional fields" />
          <Pill icon={MapPin} text="Current activity" />
          <Pill icon={Search} text="Common destinations" />
          <Pill icon={Library} text="Languages" />
          <Pill icon={GraduationCap} text="Education" />
          <Pill icon={Camera} text="Creative interests" />
          <Pill icon={BookOpen} text="Learning goals" />
          <Pill icon={Shield} text="Volunteer interests" />
          <Pill icon={Target} text="Entrepreneurship" />
          <Pill icon={Coffee} text="Books & Coffee" />
          <Pill icon={Laptop} text="Technology" />
        </div>

        <HumanInsight title="Context Over Attributes">
          Meeting someone who is simply "nearby" is random chance. Meeting someone nearby who is also reading the same niche design book in the same library is an opportunity.
        </HumanInsight>
      </EditorialSection>

      {/* 3. CONTEXT ENGINE */}
      <EditorialSection id="context-engine" title="Context Engine" subtitle="Introductions with reason." alternateBg>
        <p className="text-[18px] md:text-[22px] text-[#A0A0A0] font-light leading-relaxed">
          Rheole never simply says "People nearby". An introduction is always prefaced with the shared context connecting you.
        </p>
        
        <ContextEngineVisualizer />
      </EditorialSection>

      {/* 4. SAFE INTRODUCTIONS */}
      <EditorialSection id="safe-introductions" title="Safe Introductions" subtitle="Permission-based discovery.">
        <p className="text-[18px] md:text-[22px] text-[#A0A0A0] font-light leading-relaxed mb-12">
          People never appear unexpectedly. Introductions only happen when strict trust and alignment requirements are satisfied.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { title: "Mutual Discovery", desc: "Both users must have Discovery Mode enabled." },
            { title: "Visibility Match", desc: "Your visibility preferences (e.g., Professional Only) must align." },
            { title: "Shared Context", desc: "A strong contextual bond must be present." },
            { title: "Trust Satisfied", desc: "Safety thresholds and verification levels must be met." }
          ].map((feature, i) => (
            <div key={i} className="flex gap-4">
              <ShieldCheck size={20} className="text-[#8B5CF6] shrink-0 mt-1" />
              <div className="flex flex-col">
                <h5 className="text-[16px] text-[#F2F2F0] font-medium mb-1">{feature.title}</h5>
                <p className="text-[14px] text-[#A0A0A0] font-light leading-relaxed">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </EditorialSection>

      {/* 5. REAL STORIES */}
      <EditorialSection id="stories" title="Real Stories" subtitle="Strangers become connections." alternateBg>
        <p className="text-[18px] md:text-[22px] text-[#A0A0A0] font-light leading-relaxed">
          Cities already contain the people who can inspire, teach, collaborate, and support us. Rheole simply turns the invisible connections visible.
        </p>

        <RealStoriesAccordion />
      </EditorialSection>

      {/* 6. PRIVACY & CONSENT */}
      <EditorialSection id="privacy" title="Privacy & Consent" subtitle="You remain fully in control.">
        <p className="text-[18px] md:text-[22px] text-[#A0A0A0] font-light leading-relaxed">
          Meaningful discovery requires absolute trust. We built an architecture where you decide exactly when, where, and why you are discoverable.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12">
          {[
            "Discovery Mode", "Invisible Mode", "Private Profile", 
            "Temporary Visibility", "Context-only introductions", "Approximate location", 
            "Mutual consent", "Professional-only", "Interest-based", 
            "Time-limited discoverability", "Reporting & Blocking", "Audit history"
          ].map((signal, idx) => (
            <div key={idx} className="flex flex-col gap-2 p-4 border border-white/[0.04] bg-[#0A0A0A] rounded-xl">
              <span className="text-[15px] text-[#F2F2F0] font-light">{signal}</span>
            </div>
          ))}
        </div>
      </EditorialSection>

      {/* UNIQUE RHEOLE FEATURES */}
      <EditorialSection id="features" title="Proprietary Concepts" subtitle="Features defining the category." alternateBg>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          <div className="flex flex-col gap-4 p-8 rounded-2xl bg-[#080808] border border-[#8B5CF6]/20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#8B5CF6]/10 rounded-full blur-[40px]" />
            <h4 className="text-[24px] font-serif-editorial text-[#F2F2F0]">Compatibility Graph™</h4>
            <div className="w-8 h-[1px] bg-[#8B5CF6]/50" />
            <p className="text-[15px] text-[#A0A0A0] font-light leading-relaxed">
              Explains why another person is relevant using transparent compatibility factors rather than opaque, engagement-driven algorithms.
            </p>
          </div>

          <div className="flex flex-col gap-4 p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
            <h4 className="text-[24px] font-serif-editorial text-[#F2F2F0]">Shared Context™</h4>
            <div className="w-8 h-[1px] bg-white/20" />
            <p className="text-[15px] text-[#A0A0A0] font-light leading-relaxed">
              Shows the experiences already connecting two people: Same event, same neighbourhood, same profession, same community.
            </p>
          </div>

          <div className="flex flex-col gap-4 p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
            <h4 className="text-[24px] font-serif-editorial text-[#F2F2F0]">Discovery Radius™</h4>
            <div className="w-8 h-[1px] bg-white/20" />
            <p className="text-[15px] text-[#A0A0A0] font-light leading-relaxed">
              Define precisely where and when you want to discover new people (e.g., Campus only, Coworking spaces only, Travel mode).
            </p>
          </div>

          <div className="flex flex-col gap-4 p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
            <h4 className="text-[24px] font-serif-editorial text-[#F2F2F0]">Calm Introductions™</h4>
            <div className="w-8 h-[1px] bg-white/20" />
            <p className="text-[15px] text-[#A0A0A0] font-light leading-relaxed">
              Instead of endless notifications, Rheole quietly surfaces one or two highly relevant introductions when context naturally aligns.
            </p>
          </div>

          <div className="flex flex-col gap-4 p-8 rounded-2xl bg-[#080808] border border-[#6366F1]/20 lg:col-span-2 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#6366F1]/10 rounded-full blur-[40px]" />
            <h4 className="text-[24px] font-serif-editorial text-[#F2F2F0]">Intent Mode™</h4>
            <div className="w-8 h-[1px] bg-[#6366F1]/50" />
            <p className="text-[15px] text-[#A0A0A0] font-light leading-relaxed mb-4">
              Choose exactly why you're open to meeting people. No assumptions are made.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4">
              <Pill text="Learning" />
              <Pill text="Friendship" />
              <Pill text="Collaboration" />
              <Pill text="Mentorship" />
              <Pill text="Travel" />
              <Pill text="Creative projects" />
            </div>
          </div>

        </div>
      </EditorialSection>

      {/* 7. WHY IT MATTERS */}
      <EditorialSection id="impact" title="Why It Matters" subtitle="Better connections, not more.">
        <p className="text-[18px] md:text-[22px] text-[#A0A0A0] font-light leading-relaxed">
          Meaningful human discovery leads to friendships, mentorships, professional growth, creative collaborations, and a profound sense of urban belonging.
        </p>
        
        <ComparisonTable />
      </EditorialSection>

      {/* 8. FUTURE OF HUMAN DISCOVERY */}
      <EditorialSection id="vision" title="The Vision" subtitle="Calm, transparent introduction." alternateBg>
        <p className="text-[24px] md:text-[32px] text-[#F2F2F0] font-serif-editorial font-light leading-tight max-w-[800px]">
          Technology should not maximise interactions.
          <br/><span className="text-[#A0A0A0]">It should maximise meaningful encounters.</span>
        </p>
        <p className="text-[18px] md:text-[22px] text-[#A0A0A0] font-light leading-relaxed mt-8 max-w-[800px]">
          The future belongs to calm, context-aware introductions rather than endless social feeds. Cities already contain the people who can inspire us.
        </p>

        <div className="mt-16 p-8 md:p-12 border border-[#8B5CF6]/30 bg-[#8B5CF6]/5 rounded-3xl flex flex-col items-center text-center max-w-[800px] relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10 pointer-events-none" />
          <h3 className="text-[28px] md:text-[40px] font-serif-editorial text-[#F2F2F0] leading-tight relative z-10">
            "Rheole doesn't help me meet more people. It helps me discover the right people, at the right moment, for the right reason—always with transparency, consent and respect."
          </h3>
          <span className="text-[12px] font-mono text-[#8B5CF6] uppercase tracking-[0.2em] mt-8 relative z-10">
            Human Discovery Intelligence
          </span>
        </div>
      </EditorialSection>

    </article>
  );
}

function ShieldCheck({ size, className }: { size: number, className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/>
      <path d="m9 12 2 2 4-4"/>
    </svg>
  );
}

// Temporary icon placeholders if missing from lucide-react (like Library, etc) - though they are imported
