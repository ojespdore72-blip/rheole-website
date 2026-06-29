"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MapPin, Search, Home, Building2, Trees, ShieldAlert, Coffee, Activity, Heart, Calendar, Users2, Shield, SearchCheck, Zap, Library, CheckCircle2, Archive, MessageSquare, Plus } from "lucide-react";

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
            <h2 className="text-[12px] text-[#eab308] font-medium tracking-[0.2em] uppercase">
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

function NeighbourhoodInsight({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <div className="my-12 w-full p-8 rounded-2xl bg-[#080808] border border-white/[0.05] relative overflow-hidden group">
      <div className="absolute top-0 left-0 w-1 h-full bg-[#eab308]/50" />
      <div className="flex items-center gap-3 mb-4">
        <Home size={16} className="text-[#eab308]" />
        <h4 className="font-mono text-[11px] text-[#A0A0A0] uppercase tracking-[0.2em]">
          Insight <span className="text-[#eab308]/50 px-2">/</span> {title}
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
    <div className="px-5 py-2.5 rounded-full border border-white/[0.08] bg-[#0A0A0A] text-[14px] text-[#A0A0A0] font-light hover:border-[#eab308]/40 hover:text-[#F2F2F0] transition-colors cursor-default whitespace-nowrap flex items-center gap-2">
      {Icon && <Icon size={14} className="text-[#eab308]/70" />}
      {text}
    </div>
  );
}

// --- COMPLEX INTERACTIVE COMPONENTS ---

function GroupLifecycleTimeline() {
  const stages = [
    { label: "Need Identified", icon: Search, desc: "A resident realises a problem or opportunity." },
    { label: "Group Created", icon: Plus, desc: "A temporary space is instantly spun up." },
    { label: "Members Join", icon: Users2, desc: "Nearby relevance brings in the right people." },
    { label: "Activity Happens", icon: Activity, desc: "Purpose-driven coordination occurs safely." },
    { label: "Goal Completed", icon: CheckCircle2, desc: "The blood is donated, the pet is found." },
    { label: "Knowledge Preserved", icon: Library, desc: "Valuable context is saved for the future." },
    { label: "Group Archived", icon: Archive, desc: "The space disappears. No endless chat." }
  ];

  return (
    <div className="w-full flex flex-col gap-6 mt-12 p-8 border border-white/[0.06] bg-[#080808] rounded-3xl relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#eab308]/[0.03] rounded-full blur-[100px] pointer-events-none" />
      
      {stages.map((stage, idx) => (
        <div key={idx} className="flex gap-6 relative group">
          {/* Vertical line connecting nodes */}
          {idx !== stages.length - 1 && (
            <div className="absolute left-[19px] top-10 bottom-[-24px] w-[2px] bg-gradient-to-b from-white/10 to-transparent group-hover:from-[#eab308]/30 transition-colors duration-500" />
          )}
          
          <div className="relative z-10 w-10 h-10 rounded-full border border-white/20 bg-[#050505] flex items-center justify-center shrink-0 group-hover:border-[#eab308] group-hover:bg-[#eab308]/5 transition-colors duration-300">
            <stage.icon size={16} className="text-[#A0A0A0] group-hover:text-[#eab308] transition-colors duration-300" />
          </div>
          
          <div className="flex flex-col pt-2 pb-4">
            <h4 className="text-[18px] text-[#F2F2F0] font-serif-editorial mb-1">{stage.label}</h4>
            <p className="text-[14px] text-[#A0A0A0] font-light">{stage.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function LocalStoriesAccordion() {
  const [active, setActive] = useState<number | null>(0);
  
  const scenarios = [
    { q: "Our apartment lost water supply.", a: "Residents instantly coordinated a temporary group to request a municipal water tanker, split the cost, and share status updates, archiving the group once the supply was restored." },
    { q: "A pet went missing.", a: "A 'Lost Pet' alert created a hyper-local coordination space within a 1km radius. Neighbours shared sightings until the dog was found 4 hours later. The space was closed, saving everyone from ongoing notifications." },
    { q: "A weekend cycling route was planned.", a: "Enthusiasts gathered for a 50km ride. Rheole suggested a meeting point based on everyone's starting location and provided weather context. Post-ride, the group gracefully paused." },
    { q: "A blood donor was urgently needed.", a: "Instead of spamming 50 random WhatsApp groups, an urgent purpose-group reached local verified users with matching blood types, fulfilling the need securely and quietly." },
    { q: "A neighbourhood organised a tree plantation.", a: "Volunteers coordinated saplings, digging equipment, and timing. The group documented the planted locations in the Archive for future watering schedules." },
    { q: "Residents coordinated flood relief.", a: "During heavy rains, high-ground residents offered parking spaces to low-ground residents. The group matched needs with resources dynamically, preventing vehicle damage." }
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
              <span className={`text-[#6A6A6A] transition-transform duration-300 shrink-0 ${isActive ? 'rotate-180 text-[#eab308]' : ''}`}>
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
                    <p className="text-[16px] md:text-[18px] text-[#A0A0A0] font-light leading-relaxed pl-6 border-l border-[#eab308]/30">
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
    { left: "Endless chat threads", right: "Purpose-driven coordination" },
    { left: "Notifications overload", right: "Hyperlocal relevance" },
    { left: "Permanent groups", right: "Temporary or recurring groups" },
    { left: "Poor discoverability", right: "Intelligent discovery" },
    { left: "Weak moderation", right: "Calm collaboration & Trust" },
    { left: "Conversation-focused", right: "Knowledge preservation" }
  ];

  return (
    <div className="w-full border border-white/[0.06] rounded-2xl overflow-hidden bg-[#0A0A0A] mt-12">
      <div className="grid grid-cols-2 bg-[#050505] border-b border-white/[0.06] p-6">
        <div className="font-mono text-[12px] text-[#6A6A6A] tracking-[0.1em] uppercase">Traditional Platforms</div>
        <div className="font-mono text-[12px] text-[#eab308] tracking-[0.1em] uppercase">Rheole Local Groups</div>
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

export default function LocalGroupsArticle() {
  return (
    <article className="w-full flex flex-col items-center">
      
      {/* 2. LIVING GROUPS */}
      <EditorialSection id="living-groups" title="Living Groups" subtitle="Temporary spaces built around purpose.">
        <p className="text-[18px] md:text-[22px] text-[#A0A0A0] font-light leading-relaxed">
          Local Groups are not permanent chat rooms that slowly die into silence. They are temporary or recurring spaces built strictly around a clear, actionable purpose.
        </p>

        <div className="flex flex-wrap gap-4 mt-12">
          <Pill icon={Activity} text="Morning runners" />
          <Pill icon={Building2} text="Apartment residents" />
          <Pill icon={Activity} text="Weekend football" />
          <Pill icon={Coffee} text="Street food explorers" />
          <Pill icon={Activity} text="Photography walk" />
          <Pill icon={Heart} text="Local volunteers" />
          <Pill icon={Library} text="Book exchange" />
          <Pill icon={MapPin} text="Carpool group" />
          <Pill icon={Search} text="Lost and found" />
          <Pill icon={Heart} text="Pet owners nearby" />
          <Pill icon={Building2} text="Apartment marketplace" />
          <Pill icon={Trees} text="Farmers market volunteers" />
          <Pill icon={ShieldAlert} text="Road safety volunteers" />
          <Pill icon={Shield} text="Neighbourhood watch" />
          <Pill icon={Library} text="Exam preparation circle" />
          <Pill icon={MessageSquare} text="Language exchange" />
          <Pill icon={Heart} text="Senior citizen support" />
          <Pill icon={Calendar} text="Festival organisers" />
          <Pill icon={ShieldAlert} text="Disaster response" />
          <Pill icon={Trees} text="Weekend trekking" />
        </div>

        <NeighbourhoodInsight title="Purpose Over Size">
          Every group exists for a reason. Once the lost pet is found, the festival is over, or the trek is finished, the group gracefully concludes. The purpose is always more important than the member count.
        </NeighbourhoodInsight>
      </EditorialSection>

      {/* 3. PURPOSE ENGINE */}
      <EditorialSection id="purpose-engine" title="Purpose Engine" subtitle="Understanding why people gather." alternateBg>
        <p className="text-[18px] md:text-[22px] text-[#A0A0A0] font-light leading-relaxed">
          How do we ensure a group is relevant? Traditional platforms rely on invite links. Rheole's Purpose Engine analyses the complex variables of city life to seamlessly connect the right neighbours.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12">
          {[
            "Location", "Time", "Activity", 
            "Urgency", "Frequency", "Shared interests", 
            "Neighbourhood relevance", "Participation history", "Availability", 
            "Trust level", "Seasonality", "Community need"
          ].map((signal, idx) => (
            <div key={idx} className="flex flex-col gap-2 p-4 border border-white/[0.04] bg-[#0A0A0A] rounded-xl">
              <span className="text-[15px] text-[#F2F2F0] font-light">{signal}</span>
            </div>
          ))}
        </div>
      </EditorialSection>

      {/* 4. GROUP LIFECYCLE */}
      <EditorialSection id="lifecycle" title="Group Lifecycle" subtitle="Groups don't need to exist forever.">
        <p className="text-[18px] md:text-[22px] text-[#A0A0A0] font-light leading-relaxed">
          The defining feature of a Rheole Local Group is its mortality. They exist as long as they create value, and not a moment longer.
        </p>
        
        <GroupLifecycleTimeline />
      </EditorialSection>

      {/* 5. REAL LOCAL STORIES */}
      <EditorialSection id="stories" title="Real Local Stories" subtitle="Quietly enabling coordination." alternateBg>
        <p className="text-[18px] md:text-[22px] text-[#A0A0A0] font-light leading-relaxed">
          From mundane weekend plans to critical emergency responses, everyday life is filled with coordination problems waiting to be solved.
        </p>

        <LocalStoriesAccordion />
      </EditorialSection>

      {/* 6. TRUST & MODERATION */}
      <EditorialSection id="trust" title="Trust & Moderation" subtitle="Keeping neighbourhoods useful, not noisy.">
        <p className="text-[18px] md:text-[22px] text-[#A0A0A0] font-light leading-relaxed">
          A local platform without trust immediately becomes a billboard for spam. We enforce strict boundaries to ensure interactions remain healthy and hyper-relevant.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {[
            { title: "Verified Neighbourhoods", desc: "Proof of residency ensures you are speaking with actual locals." },
            { title: "Local Moderators", desc: "Empowered community members manage disputes gently and fairly." },
            { title: "Temporary Groups", desc: "By deleting groups post-purpose, we naturally limit long-term toxicity." },
            { title: "Identity Controls", desc: "Balance privacy with accountability based on the group's sensitivity." },
            { title: "Spam Protection", desc: "Algorithmic screening prevents aggressive selling and promotions." },
            { title: "Neighbourhood Reputation", desc: "Helpful contributors gain quiet, dignified trust signals over time." }
          ].map((feature, i) => (
            <div key={i} className="flex gap-4">
              <ShieldCheck size={20} className="text-[#eab308] shrink-0 mt-1" />
              <div className="flex flex-col">
                <h5 className="text-[16px] text-[#F2F2F0] font-medium mb-1">{feature.title}</h5>
                <p className="text-[14px] text-[#A0A0A0] font-light leading-relaxed">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </EditorialSection>

      {/* UNIQUE RHEOLE FEATURES */}
      <EditorialSection id="features" title="Proprietary Concepts" subtitle="Features defining the category." alternateBg>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          <div className="flex flex-col gap-4 p-8 rounded-2xl bg-[#080808] border border-[#eab308]/20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#eab308]/10 rounded-full blur-[40px]" />
            <h4 className="text-[24px] font-serif-editorial text-[#F2F2F0]">Living Group™</h4>
            <div className="w-8 h-[1px] bg-[#eab308]/50" />
            <p className="text-[15px] text-[#A0A0A0] font-light leading-relaxed">
              Groups automatically adapt as activity changes. When a group's purpose is fulfilled, it stops cluttering your interface. No unnecessary noise.
            </p>
          </div>

          <div className="flex flex-col gap-4 p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
            <h4 className="text-[24px] font-serif-editorial text-[#F2F2F0]">Purpose Score™</h4>
            <div className="w-8 h-[1px] bg-white/20" />
            <p className="text-[15px] text-[#A0A0A0] font-light leading-relaxed">
              Measures how clearly a group's objective is defined and how effectively it is progressing. We rank by purpose, not popularity.
            </p>
          </div>

          <div className="flex flex-col gap-4 p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
            <h4 className="text-[24px] font-serif-editorial text-[#F2F2F0]">Smart Coordination™</h4>
            <div className="w-8 h-[1px] bg-white/20" />
            <p className="text-[15px] text-[#A0A0A0] font-light leading-relaxed">
              AI automatically suggests meeting times, nearby venues, shared resources, transport routes, weather considerations, and reminders.
            </p>
          </div>

          <div className="flex flex-col gap-4 p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
            <h4 className="text-[24px] font-serif-editorial text-[#F2F2F0]">Group Archive™</h4>
            <div className="w-8 h-[1px] bg-white/20" />
            <p className="text-[15px] text-[#A0A0A0] font-light leading-relaxed">
              Completed groups become searchable knowledge. Future organisers can learn from previous local activities without starting from scratch.
            </p>
          </div>

          <div className="flex flex-col gap-4 p-8 rounded-2xl bg-[#080808] border border-[#10b981]/20 lg:col-span-2 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#10b981]/10 rounded-full blur-[40px]" />
            <h4 className="text-[24px] font-serif-editorial text-[#F2F2F0]">Local Pulse™</h4>
            <div className="w-8 h-[1px] bg-[#10b981]/50" />
            <p className="text-[15px] text-[#A0A0A0] font-light leading-relaxed mb-4">
              Highlights important activities happening within the neighbourhood contextually.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4">
              <Pill text="Volunteer drive" />
              <Pill text="Road closure" />
              <Pill text="Weekend market" />
              <Pill text="Festival planning" />
              <Pill text="Emergency alert" />
              <Pill text="Blood donation request" />
            </div>
          </div>

        </div>
      </EditorialSection>

      {/* 7. EVERYDAY IMPACT */}
      <EditorialSection id="impact" title="Everyday Impact" subtitle="Stronger cities through local cooperation.">
        <p className="text-[18px] md:text-[22px] text-[#A0A0A0] font-light leading-relaxed">
          Local Groups vastly improve neighbourhood resilience. Safety, environmental initiatives, small businesses, volunteerism, and daily convenience all thrive when the friction of coordination is removed.
        </p>
        
        <ComparisonTable />
      </EditorialSection>

      {/* 8. FUTURE OF LOCAL COORDINATION */}
      <EditorialSection id="vision" title="The Vision" subtitle="Effortless collaboration." alternateBg>
        <p className="text-[24px] md:text-[32px] text-[#F2F2F0] font-serif-editorial font-light leading-tight max-w-[800px]">
          The future is not thousands of disconnected chat groups.
          <br/><span className="text-[#A0A0A0]">It is intelligent local coordination.</span>
        </p>
        <p className="text-[18px] md:text-[22px] text-[#A0A0A0] font-light leading-relaxed mt-8 max-w-[800px]">
          Groups appear when needed. Disappear when finished. Knowledge remains. People collaborate effortlessly. Technology quietly strengthens neighbourhood life.
        </p>

        <div className="mt-16 p-8 md:p-12 border border-[#eab308]/30 bg-[#eab308]/5 rounded-3xl flex flex-col items-center text-center max-w-[800px] relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10 pointer-events-none" />
          <h3 className="text-[28px] md:text-[40px] font-serif-editorial text-[#F2F2F0] leading-tight relative z-10">
            "Rheole doesn't give me another group to join. It creates the right local group at the right moment, helps people achieve a shared goal, then gracefully gets out of the way."
          </h3>
          <span className="text-[12px] font-mono text-[#eab308] uppercase tracking-[0.2em] mt-8 relative z-10">
            Local Coordination Intelligence
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
