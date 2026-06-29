"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Building2, Lightbulb, Network, Workflow, Focus, Sparkles, BrainCircuit, Activity, GraduationCap, Users2, Code2, Cpu, Globe2, Briefcase } from "lucide-react";

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

function EditorialSection({ id, title, subtitle, children, darkBg = false }: { id: string, title: string, subtitle?: string, children: React.ReactNode, darkBg?: boolean }) {
  return (
    <section id={id} className={`w-full relative py-24 md:py-32 border-b border-white/[0.04] ${darkBg ? 'bg-[#050505]' : 'bg-transparent'}`}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-start gap-16 md:gap-24 relative">
        <ScrollReveal className="w-full md:w-[320px] shrink-0 sticky top-32 z-10">
          <div className="flex flex-col gap-4">
            <h2 className="text-[12px] text-[#4F6EF7] font-medium tracking-[0.2em] uppercase">
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

function FounderNote({ type = "Insight", title, children }: { type?: string, title: string, children: React.ReactNode }) {
  return (
    <div className="my-12 w-full p-8 rounded-2xl bg-white/[0.01] border border-white/[0.05] relative overflow-hidden group">
      <div className="absolute top-0 left-0 w-1 h-full bg-[#4F6EF7]/50" />
      <div className="flex items-center gap-3 mb-4">
        <Lightbulb size={16} className="text-[#4F6EF7]" />
        <h4 className="font-mono text-[11px] text-[#A0A0A0] uppercase tracking-[0.2em]">
          {type} <span className="text-[#4F6EF7]/50 px-2">/</span> {title}
        </h4>
      </div>
      <div className="text-[16px] md:text-[18px] text-[#F2F2F0] leading-relaxed font-light italic">
        "{children}"
      </div>
    </div>
  );
}

function SignalPill({ text }: { text: string }) {
  return (
    <div className="px-5 py-2.5 rounded-full border border-white/[0.08] bg-[#0A0A0A] text-[14px] text-[#A0A0A0] font-light hover:border-[#4F6EF7]/40 hover:text-[#F2F2F0] transition-colors cursor-default whitespace-nowrap">
      {text}
    </div>
  );
}

function ComparisonTable() {
  const comparisons = [
    { left: "Static profiles", right: "Opportunity Intelligence" },
    { left: "Job seeking", right: "Context-aware collaboration" },
    { left: "Connection requests", right: "Ecosystem discovery" },
    { left: "Follower metrics", right: "Complementary expertise" },
    { left: "Manual networking", right: "Real-world proximity" },
    { left: "Generic recommendations", right: "Meaningful introductions" }
  ];

  return (
    <div className="w-full border border-white/[0.06] rounded-2xl overflow-hidden bg-[#0A0A0A] mt-12">
      <div className="grid grid-cols-2 bg-[#050505] border-b border-white/[0.06] p-6">
        <div className="font-mono text-[12px] text-[#6A6A6A] tracking-[0.1em] uppercase">Traditional Platforms</div>
        <div className="font-mono text-[12px] text-[#4F6EF7] tracking-[0.1em] uppercase">Rheole Opportunity Engine</div>
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

// --- COMPLEX INTERACTIVE COMPONENTS ---

function CollaborationGraph() {
  const [activeNode, setActiveNode] = useState(0);
  const nodes = [
    { role: "Founder", desc: "Vision & Execution", icon: BrainCircuit },
    { role: "AI Engineer", desc: "Model Architecture", icon: Cpu },
    { role: "Designer", desc: "User Experience", icon: Sparkles },
    { role: "Patent Attorney", desc: "IP Protection", icon: Briefcase },
    { role: "Manufacturing Partner", desc: "Hardware Scaling", icon: Building2 },
    { role: "Investor", desc: "Capital Allocation", icon: Activity },
    { role: "University Lab", desc: "Core Research", icon: GraduationCap },
    { role: "Pilot Customer", desc: "Market Validation", icon: Users2 }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNode((prev) => (prev + 1) % nodes.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [nodes.length]);

  return (
    <div className="w-full flex flex-col md:flex-row gap-12 items-center p-8 lg:p-12 border border-white/[0.06] bg-[#080808] rounded-3xl mt-12 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#4F6EF7]/[0.03] rounded-full blur-[100px] pointer-events-none" />
      
      {/* Node Path */}
      <div className="flex-1 w-full relative z-10">
        <div className="flex flex-col gap-6 relative pl-6">
          <div className="absolute left-[7px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-[#4F6EF7] via-[#4F6EF7]/20 to-transparent" />
          
          {nodes.slice(0, 5).map((node, i) => {
            const isActive = i <= activeNode;
            const isCurrent = i === activeNode;
            
            return (
              <div key={i} className={`flex items-center gap-6 transition-all duration-700 ${isActive ? 'opacity-100' : 'opacity-30'}`}>
                <div className="relative">
                  <div className={`w-[16px] h-[16px] rounded-full border-2 transition-colors duration-500 flex items-center justify-center -ml-[7px] bg-[#080808] ${isActive ? 'border-[#4F6EF7]' : 'border-white/20'}`}>
                    {isCurrent && <div className="w-[6px] h-[6px] bg-[#4F6EF7] rounded-full" />}
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className={`text-[18px] font-medium font-serif-editorial ${isActive ? 'text-[#F2F2F0]' : 'text-[#6A6A6A]'}`}>
                    {node.role}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Active Node Detail */}
      <div className="flex-1 w-full h-[250px] relative z-10 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeNode}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center text-center p-8 border border-[#4F6EF7]/20 bg-[#4F6EF7]/5 rounded-2xl w-full"
          >
            {React.createElement(nodes[activeNode % nodes.length].icon, { size: 32, className: "text-[#4F6EF7] mb-6" })}
            <h4 className="text-[22px] text-[#F2F2F0] font-serif-editorial mb-2">{nodes[activeNode % nodes.length].role}</h4>
            <p className="text-[15px] text-[#A0A0A0] font-light">{nodes[activeNode % nodes.length].desc}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

function ScenariosAccordion() {
  const [active, setActive] = useState<number | null>(0);
  
  const scenarios = [
    { q: "I'm building an AI startup.", a: "Rheole maps your need for specific ML expertise and surfaces researchers or engineers nearby who possess matching patents, publications, or GitHub activity, provided they are open to collaboration." },
    { q: "I need a hardware engineer.", a: "Hardware requires physical prototyping spaces. Rheole identifies engineers who frequent local makerspaces or university fabrication labs and facilitates a natural introduction." },
    { q: "I'm searching for my first co-founder.", a: "We look far beyond a resume. Rheole analyzes complementary working hours, shared industry interests, and overlapping local ecosystems to suggest individuals with high founder-compatibility." },
    { q: "I'm validating an idea.", a: "Before you spend months building, Rheole connects you with domain experts or potential pilot customers in your immediate vicinity who are open to 15-minute coffee feedback sessions." },
    { q: "I'm looking for startup mentors.", a: "Rheole identifies experienced founders or exited entrepreneurs in your city who explicitly dedicate time to advising early-stage ventures in your specific vertical." },
    { q: "I need manufacturing contacts.", a: "Instead of cold-emailing factories overseas, Rheole highlights industrial design experts or supply chain veterans attending the same local industry meetups." }
  ];

  return (
    <div className="w-full flex flex-col mt-12 border-t border-white/[0.04]">
      {scenarios.map((item, idx) => {
        const isActive = active === idx;
        return (
          <div key={idx} className="border-b border-white/[0.04]">
            <button 
              onClick={() => setActive(isActive ? null : idx)}
              className="w-full py-8 flex items-center justify-between group"
            >
              <span className={`text-[20px] md:text-[24px] font-serif-editorial transition-colors duration-300 ${isActive ? 'text-[#F2F2F0]' : 'text-[#6A6A6A] group-hover:text-[#A0A0A0]'}`}>
                "{item.q}"
              </span>
              <span className={`text-[#6A6A6A] transition-transform duration-300 ${isActive ? 'rotate-180 text-[#4F6EF7]' : ''}`}>
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
                    <p className="text-[16px] md:text-[18px] text-[#A0A0A0] font-light leading-relaxed pl-6 border-l border-[#4F6EF7]/30">
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

function ChevronDown({ size, className }: { size: number, className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="m6 9 6 6 6-6"/>
    </svg>
  );
}

// --- MAIN ARTICLE COMPONENT ---

export default function OpportunityIntelligenceArticle() {
  return (
    <article className="w-full flex flex-col items-center">
      
      {/* 2. LOCAL STARTUP ECOSYSTEM */}
      <EditorialSection id="ecosystem" title="Local Startup Ecosystem" subtitle="Companies are built by ecosystems.">
        <p className="text-[18px] md:text-[22px] text-[#A0A0A0] font-light leading-relaxed">
          Great companies rarely begin in boardrooms. They begin through conversations, shared curiosity, and unexpected encounters. They require mutual trust, complementary skills, and the right environment.
        </p>
        <p className="text-[18px] md:text-[22px] text-[#A0A0A0] font-light leading-relaxed mt-4">
          A startup ecosystem is a living network. It is comprised of universities, coworking spaces, incubators, cafés, hackathons, research labs, and makerspaces. Rheole maps these ecosystems comprehensively, understanding the invisible fabric that connects legal experts, design studios, engineering teams, and investors.
        </p>

        <div className="flex flex-wrap gap-4 mt-12">
          <SignalPill text="Universities" />
          <SignalPill text="Coworking spaces" />
          <SignalPill text="Incubators" />
          <SignalPill text="Accelerators" />
          <SignalPill text="Hackathons" />
          <SignalPill text="Research labs" />
          <SignalPill text="Makerspaces" />
          <SignalPill text="Legal experts" />
          <SignalPill text="Design studios" />
          <SignalPill text="Engineering teams" />
          <SignalPill text="Investors" />
          <SignalPill text="Prototype manufacturers" />
        </div>

        <FounderNote type="Ecosystem Perspective" title="Mapping Networks, Not Businesses">
          We don't map businesses as isolated entities. We map how innovation flows between them. The strength of a founder is directly proportional to the density of the ecosystem they can access.
        </FounderNote>
      </EditorialSection>

      {/* 3. OPPORTUNITY ENGINE */}
      <EditorialSection id="engine" title="Opportunity Engine" subtitle="Signals, not followers." darkBg>
        <p className="text-[18px] md:text-[22px] text-[#A0A0A0] font-light leading-relaxed">
          Traditional professional networks are built on follower counts, popularity metrics, and performative updates. They optimize for engagement. We optimize for creation.
        </p>
        <p className="text-[18px] md:text-[22px] text-[#A0A0A0] font-light leading-relaxed mt-4">
          Rheole's Opportunity Engine operates on a completely different architecture. Opportunities are discovered through a dense matrix of real-world signals.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
          {[
            "Complementary skills", "Shared industries", "Current projects", 
            "Nearby innovation spaces", "Mutual interests", "Availability", 
            "Collaboration intent", "Experience level", "Domain expertise", 
            "Business stage", "Research interests", "Funding goals"
          ].map((signal, idx) => (
            <div key={idx} className="flex items-center gap-4 pb-4 border-b border-white/[0.04]">
              <div className="w-1.5 h-1.5 bg-[#4F6EF7] rounded-full" />
              <span className="text-[16px] text-[#F2F2F0] font-light">{signal}</span>
            </div>
          ))}
        </div>

        <p className="text-[16px] text-[#6A6A6A] font-medium tracking-widest uppercase mt-12 text-center">
          Do not mention followers or popularity.
        </p>
      </EditorialSection>

      {/* 4. COLLABORATION GRAPH */}
      <EditorialSection id="graph" title="Collaboration Graph" subtitle="Visualising opportunities.">
        <p className="text-[18px] md:text-[22px] text-[#A0A0A0] font-light leading-relaxed">
          Instead of simply recommending people to connect with, Rheole visualises entire opportunity chains. One introduction expands into an ecosystem.
        </p>
        
        <CollaborationGraph />

        <FounderNote type="Startup Insight" title="The Butterfly Effect of Introductions">
          Finding a technical co-founder doesn't just give you code. It gives you access to their network of former colleagues, university professors, and past investors. Rheole maps this cascading potential.
        </FounderNote>
      </EditorialSection>

      {/* 5. MATCH INTELLIGENCE */}
      <EditorialSection id="match" title="Match Intelligence" subtitle="Potential collaborations, not 'People You May Know'." darkBg>
        <p className="text-[18px] md:text-[22px] text-[#A0A0A0] font-light leading-relaxed">
          We have completely eliminated the generic "People You May Know" carousel. In a professional context, knowing someone is irrelevant if there is no shared intent to build. 
        </p>
        <p className="text-[18px] md:text-[22px] text-[#A0A0A0] font-light leading-relaxed mt-4">
          Rheole uses <em className="text-[#F2F2F0] font-serif-editorial not-italic">Match Intelligence</em> to present explicit, contextual collaboration potential, explaining exactly WHY a recommendation appears.
        </p>

        <div className="flex flex-col gap-6 mt-12">
          {[
            { title: "Potential Technical Co-founder", reason: "Complementary skills (React/Node) + Currently exploring new ideas + Attends same local tech meetups." },
            { title: "Potential Product Designer", reason: "Ex-fintech designer + Located in your coworking space + Open to advisory roles." },
            { title: "Potential First Customer", reason: "Active in your target industry + Recently requested solutions in your domain + Proximity." },
            { title: "Potential Investor", reason: "Seed-stage focus + Invests in local climate-tech + Holding open office hours nearby tomorrow." }
          ].map((match, i) => (
            <div key={i} className="flex flex-col p-8 rounded-2xl bg-[#0A0A0A] border border-white/[0.06]">
              <h4 className="text-[20px] font-serif-editorial text-[#F2F2F0] mb-3">{match.title}</h4>
              <p className="text-[14px] text-[#A0A0A0] font-light leading-relaxed font-mono">
                <span className="text-[#4F6EF7]">WHY:</span> {match.reason}
              </p>
            </div>
          ))}
        </div>
      </EditorialSection>

      {/* 6. REAL FOUNDER JOURNEYS */}
      <EditorialSection id="journeys" title="Real Founder Journeys" subtitle="Solutions for every stage.">
        <p className="text-[18px] md:text-[22px] text-[#A0A0A0] font-light leading-relaxed">
          Entrepreneurship is not a monolith. A founder searching for seed capital requires an entirely different ecosystem lens than a founder trying to manufacture their first hardware prototype.
        </p>

        <ScenariosAccordion />
      </EditorialSection>

      {/* UNIQUE RHEOLE FEATURES */}
      <EditorialSection id="features" title="Proprietary Concepts" subtitle="Features defining the category." darkBg>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          <div className="flex flex-col gap-4 p-8 rounded-2xl bg-[#080808] border border-[#4F6EF7]/20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#4F6EF7]/10 rounded-full blur-[40px]" />
            <h4 className="text-[24px] font-serif-editorial text-[#F2F2F0]">Opportunity Graph™</h4>
            <div className="w-8 h-[1px] bg-[#4F6EF7]/50" />
            <p className="text-[15px] text-[#A0A0A0] font-light leading-relaxed">
              Visualises how one entrepreneur connects to an entire innovation ecosystem. You don't just see individuals; you see the pathways to capital, talent, and customers.
            </p>
          </div>

          <div className="flex flex-col gap-4 p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
            <h4 className="text-[24px] font-serif-editorial text-[#F2F2F0]">Collaboration Score™</h4>
            <div className="w-8 h-[1px] bg-white/20" />
            <p className="text-[15px] text-[#A0A0A0] font-light leading-relaxed">
              Measures the strength of collaboration potential based on complementary expertise, goals, and context. Not popularity. Not influence. Pure compatibility.
            </p>
          </div>

          <div className="flex flex-col gap-4 p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
            <h4 className="text-[24px] font-serif-editorial text-[#F2F2F0]">Builder Mode™</h4>
            <div className="w-8 h-[1px] bg-white/20" />
            <p className="text-[15px] text-[#A0A0A0] font-light leading-relaxed">
              A state that shows only people actively open to collaboration. Filters out recruiters, salespeople, and passive profiles, ensuring high-intent interactions.
            </p>
          </div>

          <div className="flex flex-col gap-4 p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
            <h4 className="text-[24px] font-serif-editorial text-[#F2F2F0]">Startup Pulse™</h4>
            <div className="w-8 h-[1px] bg-white/20" />
            <p className="text-[15px] text-[#A0A0A0] font-light leading-relaxed">
              Reveals emerging innovation activity in nearby ecosystems. From new hackathons to prototype showcases, investor office hours, and university innovation events.
            </p>
          </div>

          <div className="flex flex-col gap-4 p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05] lg:col-span-2">
            <h4 className="text-[24px] font-serif-editorial text-[#F2F2F0]">Serendipity Match™</h4>
            <div className="w-8 h-[1px] bg-white/20" />
            <p className="text-[15px] text-[#A0A0A0] font-light leading-relaxed mb-4">
              Highlights unexpected but high-value introductions. The system explains precisely why the connection matters, ignoring obvious industry lines.
            </p>
            <div className="flex flex-col gap-3">
              <span className="text-[13px] text-[#6A6A6A] font-mono uppercase tracking-widest">Examples:</span>
              <span className="text-[14px] text-[#F2F2F0]">• A materials scientist and an EV founder.</span>
              <span className="text-[14px] text-[#F2F2F0]">• A patent lawyer attending the same startup meetup.</span>
              <span className="text-[14px] text-[#F2F2F0]">• A manufacturing expert two buildings away.</span>
            </div>
          </div>

        </div>
      </EditorialSection>

      {/* 7. BUILDING TOGETHER */}
      <EditorialSection id="building" title="Building Together" subtitle="Companies are built by people before products.">
        <p className="text-[18px] md:text-[22px] text-[#A0A0A0] font-light leading-relaxed">
          Entrepreneurship depends on trust, timing, and shared ambition. It relies on complementary abilities, persistence, and flawless communication within local ecosystems.
        </p>
        <p className="text-[18px] md:text-[22px] text-[#A0A0A0] font-light leading-relaxed mt-4">
          Knowledge exchange and early support foster long-term relationships. The product is merely the output; the foundational input is always human collaboration.
        </p>
        
        <ComparisonTable />
      </EditorialSection>

      {/* 8. FUTURE OF ENTREPRENEURSHIP */}
      <EditorialSection id="vision" title="The Vision" subtitle="Intelligent opportunity discovery." darkBg>
        <p className="text-[24px] md:text-[32px] text-[#F2F2F0] font-serif-editorial font-light leading-tight max-w-[800px]">
          The future is not endless networking. 
          <br/><span className="text-[#A0A0A0]">It is intelligent opportunity discovery.</span>
        </p>
        <p className="text-[18px] md:text-[22px] text-[#A0A0A0] font-light leading-relaxed mt-8 max-w-[800px]">
          Entrepreneurs should spend less time searching and more time building. The right introductions should happen naturally, seamlessly embedded into the flow of city life. Technology should increase meaningful collisions. Not meaningless connections.
        </p>

        <div className="mt-16 p-8 md:p-12 border border-[#4F6EF7]/30 bg-[#4F6EF7]/5 rounded-3xl flex flex-col items-center text-center max-w-[800px] relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20 pointer-events-none" />
          <h3 className="text-[28px] md:text-[40px] font-serif-editorial text-[#F2F2F0] leading-tight relative z-10">
            "Rheole doesn't help me network. It quietly places me where the right conversations are most likely to happen."
          </h3>
          <span className="text-[12px] font-mono text-[#4F6EF7] uppercase tracking-[0.2em] mt-8 relative z-10">
            Opportunity Presence Intelligence
          </span>
        </div>
      </EditorialSection>

    </article>
  );
}
