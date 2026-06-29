'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Code, Users, Eye, EyeOff, Clock, Shield, MapPin, Coffee, Lock, CheckCircle2, UserCircle2, GraduationCap, Briefcase, Radio, BellOff } from 'lucide-react'

// --- REUSABLE ENGINEERING COMPONENTS ---

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

function NavSection({ id, title, children, isLast = false, useBlue = false }: { id: string, title: string, children: React.ReactNode, isLast?: boolean, useBlue?: boolean }) {
  return (
    <section className={`w-full relative pt-16 md:pt-24 pb-8 ${useBlue ? 'bg-[#4F6EF7]/5' : ''}`}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-start gap-12 relative">
        <ScrollReveal className="w-full md:w-[280px] shrink-0 sticky top-32 z-10 hidden md:block">
          <div className="flex flex-col gap-3">
            <h2 className="text-[18px] md:text-[20px] text-[#F2F2F0] font-medium tracking-wide">
              {title}
            </h2>
            <div className="w-8 h-[1px] bg-[#4F6EF7]/50 mt-2" />
          </div>
        </ScrollReveal>

        <div className="flex-1 w-full flex flex-col gap-8 pb-12">
          {/* Mobile Title */}
          <ScrollReveal className="md:hidden flex flex-col gap-2 mb-4">
            <h2 className="text-[24px] text-[#F2F2F0] font-medium tracking-wide">
              {title}
            </h2>
            <div className="w-8 h-[1px] bg-[#4F6EF7]/50 mt-2" />
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            {children}
          </ScrollReveal>
        </div>
      </div>
      
      {!isLast && (
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="w-full h-[1px] bg-gradient-to-r from-[#4F6EF7]/20 to-transparent" />
        </div>
      )}
    </section>
  )
}

function EngineeringNote({ type = "Insight", title, children }: { type?: string, title: string, children: React.ReactNode }) {
  return (
    <div className="my-8 w-full p-6 rounded-xl bg-[#080808] border-l-2 border-[#4F6EF7] relative overflow-hidden group">
      <div className="absolute inset-0 bg-[#4F6EF7]/[0.02] pointer-events-none" />
      <div className="flex items-center gap-3 mb-3">
        <Code size={14} className="text-[#4F6EF7]" />
        <h4 className="font-mono text-[11px] text-[#4F6EF7] uppercase tracking-[0.2em]">
          {type} // {title}
        </h4>
      </div>
      <div className="text-[14px] md:text-[15px] text-[#A0A0A0] leading-relaxed">
        {children}
      </div>
    </div>
  )
}

function GridVariable({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <div className="flex flex-col p-5 border border-white/5 bg-[#0a0a0a] rounded-lg hover:border-[#4F6EF7]/30 transition-colors h-full">
      <div className="flex items-center gap-3 mb-3">
        <Icon size={16} className="text-[#4F6EF7]" />
        <h3 className="text-[14px] text-[#F2F2F0] font-medium">{title}</h3>
      </div>
      <p className="text-[13px] text-[#A0A0A0] leading-relaxed flex-1">{desc}</p>
    </div>
  )
}

function ComparisonTable({ comparisons }: { comparisons: { left: string, right: string }[] }) {
  return (
    <div className="w-full border border-white/10 rounded-xl overflow-hidden bg-[#0a0a0a] mt-8">
      <div className="grid grid-cols-2 bg-[#050505] border-b border-white/10 p-4">
        <div className="font-mono text-[11px] text-[#6A6A6A] tracking-[0.1em] uppercase">Traditional Social Platforms</div>
        <div className="font-mono text-[11px] text-[#4F6EF7] tracking-[0.1em] uppercase">Rheole Human Presence Intelligence</div>
      </div>
      {comparisons.map((comp, idx) => (
        <div key={idx} className="grid grid-cols-2 p-4 border-b border-white/5 last:border-0 items-center gap-4">
          <div className="text-[14px] text-[#A0A0A0]">{comp.left}</div>
          <div className="text-[14px] text-[#F2F2F0] font-medium">{comp.right}</div>
        </div>
      ))}
    </div>
  )
}

// --- MAIN ARTICLE ---

export default function PresenceIntelligenceArticle() {
  const [activeScenario, setActiveScenario] = useState<number | null>(null);

  const scenarios = [
    { q: "I'm new in Bengaluru.", a: "Rheole gently surfaces alumni from your university or members of your professional groups who are nearby, creating low-friction opportunities to build a local support network without awkward cold outreach." },
    { q: "I'm travelling with friends.", a: "Temporary private circles allow your group to see each other's approximate presence during the trip. The moment the trip concludes, visibility automatically expires, requiring zero manual privacy management." },
    { q: "My parents are visiting.", a: "You grant them precise, temporary visibility of your presence so they feel comfortable exploring the neighbourhood while you finish a meeting, knowing exactly when you are available." },
    { q: "I'm attending a conference.", a: "Rheole identifies colleagues or industry peers in the same venue. Instead of messaging ten people to see if they are around, you instantly understand who is present and available to connect." },
    { q: "I'm studying in a library.", a: "Your status automatically shifts to 'Focused'. Classmates can see you are nearby but understand you should not be interrupted, preserving your concentration while maintaining ambient presence." },
    { q: "I'm working remotely.", a: "You set a custom presence radius for professional contacts. If a colleague happens to be working from a café two streets over, Rheole suggests a shared coffee break." },
    { q: "I'm exploring the city.", a: "You notice that a friend you haven't seen in months is at an art gallery just a five-minute walk away. A spontaneous, meaningful reunion occurs entirely by chance, facilitated by calm awareness." },
    { q: "I'm shopping.", a: "You see that a family member is in the same retail district. You can coordinate to grab lunch together without the back-and-forth of 'Where are you right now?' texts." },
    { q: "I'm travelling late at night.", a: "Emergency visibility is activated. Selected trusted contacts are granted precise, real-time presence awareness until you safely reach your destination, at which point normal privacy boundaries resume." },
    { q: "I'm waiting for someone.", a: "Instead of staring at a map watching a dot move, you receive a gentle, contextual signal when they enter a five-minute radius, allowing you to relax and enjoy your current surroundings." },
    { q: "I'm on campus.", a: "Rheole highlights shared moments, such as three friends currently studying in the student union, allowing you to organically join a group without needing an explicit invitation." },
    { q: "I'm attending a concert.", a: "In crowded environments, Rheole uses local presence intelligence to assure you that your friends are still within the same section, even if you lose physical sight of them." }
  ];

  return (
    <article className="w-full flex flex-col items-center">
      
      {/* SECTION 01: PRESENCE */}
      <NavSection id="PRES_01" title="Presence">
        <p className="text-[20px] md:text-[24px] text-[#F2F2F0] font-light leading-relaxed max-w-[800px]">
          People are not pins. People are not coordinates. They are living parts of the places around us.
        </p>
        <p className="text-[15px] md:text-[16px] text-[#A0A0A0] leading-relaxed max-w-[800px] mt-6">
          Human relationships have become deeply fragmented across dozens of digital platforms. Despite this constant stream of communication, people often remain completely unaware that close friends, university classmates, colleagues, or family members are already nearby in the physical world. 
        </p>
        <p className="text-[15px] md:text-[16px] text-[#A0A0A0] leading-relaxed max-w-[800px] mt-4">
          Rheole helps users understand presence rather than location. We quietly restore awareness without creating noise, bridging the gap between digital networks and physical reality.
        </p>

        <EngineeringNote type="Presence Philosophy" title="Awareness Over Tracking">
          Tracking implies surveillance. Awareness implies trust. We do not want you to monitor your friends; we want you to feel connected to the people around you.
        </EngineeringNote>
      </NavSection>

      {/* SECTION 02: LOCAL PEOPLE */}
      <NavSection id="PRES_02" title="Local People" useBlue={true}>
        <p className="text-[16px] md:text-[18px] text-[#F2F2F0] font-light leading-relaxed max-w-[800px] mb-8">
          The concept of Nearby Presence transforms the city from an anonymous grid into a familiar neighbourhood.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[800px]">
          <div className="flex flex-col p-4 bg-[#0a0a0a] border border-[#4F6EF7]/20 rounded-lg">
            <Coffee size={16} className="text-[#4F6EF7] mb-2" />
            <span className="text-[14px] text-[#F2F2F0]">A classmate working in a nearby café.</span>
          </div>
          <div className="flex flex-col p-4 bg-[#0a0a0a] border border-[#4F6EF7]/20 rounded-lg">
            <Briefcase size={16} className="text-[#4F6EF7] mb-2" />
            <span className="text-[14px] text-[#F2F2F0]">A colleague attending the same conference.</span>
          </div>
          <div className="flex flex-col p-4 bg-[#0a0a0a] border border-[#4F6EF7]/20 rounded-lg">
            <MapPin size={16} className="text-[#4F6EF7] mb-2" />
            <span className="text-[14px] text-[#F2F2F0]">A sibling shopping in the same district.</span>
          </div>
          <div className="flex flex-col p-4 bg-[#0a0a0a] border border-[#4F6EF7]/20 rounded-lg">
            <UserCircle2 size={16} className="text-[#4F6EF7] mb-2" />
            <span className="text-[14px] text-[#F2F2F0]">A friend walking on the next street.</span>
          </div>
          <div className="flex flex-col p-4 bg-[#0a0a0a] border border-[#4F6EF7]/20 rounded-lg">
            <GraduationCap size={16} className="text-[#4F6EF7] mb-2" />
            <span className="text-[14px] text-[#F2F2F0]">A teammate studying in the same library.</span>
          </div>
        </div>

        <p className="text-[15px] text-[#A0A0A0] leading-relaxed max-w-[800px] mt-8">
          Rheole never encourages interruption. It simply increases awareness. Knowing a trusted friend is nearby provides a psychological sense of safety and belonging, even if you never physically cross paths.
        </p>
      </NavSection>

      {/* SECTION 03: RELATIONSHIP INTELLIGENCE */}
      <NavSection id="PRES_03" title="Relationship Intelligence">
        <p className="text-[16px] md:text-[18px] text-[#F2F2F0] font-light leading-relaxed max-w-[800px] mb-8">
          Not all relationships are identical. Presence requires nuance.
        </p>
        
        <p className="text-[15px] text-[#A0A0A0] leading-relaxed max-w-[800px] mb-6">
          Rheole understands that your relationship with a sibling is different from your relationship with a professional contact. Recommendations and visibility depend on relationship strength, mutual preferences, and explicit consent—not simply physical proximity.
        </p>

        <div className="flex flex-wrap gap-3 max-w-[800px]">
          {['Family', 'Close Friends', 'Classmates', 'Colleagues', 'Neighbours', 'Mentors', 'Alumni', 'Sports Partners', 'Study Groups'].map(tag => (
            <div key={tag} className="px-4 py-2 border border-white/10 rounded-full text-[13px] text-[#F2F2F0] bg-[#050505]">
              {tag}
            </div>
          ))}
        </div>

        <EngineeringNote type="Relationship Notes" title="Contextual Relevance">
          Seeing a colleague nearby during a weekend at the park might not be useful. Seeing them nearby during a Tuesday lunch hour is highly relevant. Intelligence requires context.
        </EngineeringNote>
      </NavSection>

      {/* SECTION 04: TRUST MODEL */}
      <NavSection id="PRES_04" title="Trust Model" useBlue={true}>
        <p className="text-[16px] md:text-[18px] text-[#F2F2F0] font-light leading-relaxed max-w-[800px] mb-6">
          Trust is the foundation of human presence. Every interaction is permission-based.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-[800px]">
          <GridVariable icon={Eye} title="Granular Visibility" desc="Define exactly who can see your presence. Separate your close friends from your broader professional network." />
          <GridVariable icon={Clock} title="Temporary Sharing" desc="Grant time-limited access. Visibility automatically expires when the meeting, trip, or event concludes." />
          <GridVariable icon={Radio} title="Approximate Location" desc="Share the general neighbourhood rather than exact GPS coordinates. Maintain privacy while signalling availability." />
          <GridVariable icon={EyeOff} title="Invisible Mode" desc="Instantly vanish from the network with a single tap. No explanations required. Total autonomy over your presence." />
          <GridVariable icon={Shield} title="Emergency Visibility" desc="Instantly grant precise, real-time access to trusted contacts during moments where physical safety is paramount." />
          <GridVariable icon={Lock} title="Private Circles" desc="Create enclosed groups for specific events or relationships where presence data never leaks to broader audiences." />
        </div>

        <EngineeringNote type="Privacy Principles" title="Default to Private">
          In Rheole, you are invisible by default. You actively choose to project your presence to the people you trust. We do not harvest location data to sell advertising.
        </EngineeringNote>
      </NavSection>

      {/* SECTION: PROPRIETARY FEATURES */}
      <NavSection id="PRES_FEATURES" title="Rheole Exclusives">
        <p className="text-[16px] md:text-[18px] text-[#F2F2F0] font-light leading-relaxed max-w-[800px] mb-8">
          Proprietary concepts defining the next generation of social technology.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[800px]">
          <div className="p-6 border border-[#4F6EF7]/20 bg-[#4F6EF7]/5 rounded-xl">
            <h4 className="text-[18px] text-[#F2F2F0] font-medium mb-2 flex items-center gap-2">
              <Radio size={18} className="text-[#4F6EF7]" /> Presence Pulse™
            </h4>
            <p className="text-[14px] text-[#A0A0A0] leading-relaxed">
              Shows the general presence of trusted people around you without revealing unnecessary details. E.g., "Two close friends are spending time nearby." Only meaningful awareness, never exact coordinates.
            </p>
          </div>

          <div className="p-6 border border-white/10 bg-[#0a0a0a] rounded-xl">
            <h4 className="text-[18px] text-[#F2F2F0] font-medium mb-2 flex items-center gap-2">
              <Users size={18} className="text-[#10b981]" /> Shared Moment™
            </h4>
            <p className="text-[14px] text-[#A0A0A0] leading-relaxed">
              Highlights situations where multiple trusted people naturally overlap in a common café, event, park, or university. Focuses on the moment, not the monitoring.
            </p>
          </div>

          <div className="p-6 border border-white/10 bg-[#0a0a0a] rounded-xl">
            <h4 className="text-[18px] text-[#F2F2F0] font-medium mb-2 flex items-center gap-2">
              <CheckCircle2 size={18} className="text-[#8b5cf6]" /> Availability Signals™
            </h4>
            <p className="text-[14px] text-[#A0A0A0] leading-relaxed">
              Replacing the binary 'online' status. Signal whether you are Available to meet, Focused, Travelling, Studying, or enjoying Family time. Contextualizes your presence.
            </p>
          </div>

          <div className="p-6 border border-white/10 bg-[#0a0a0a] rounded-xl">
            <h4 className="text-[18px] text-[#F2F2F0] font-medium mb-2 flex items-center gap-2">
              <BellOff size={18} className="text-[#f43f5e]" /> Calm Presence™
            </h4>
            <p className="text-[14px] text-[#A0A0A0] leading-relaxed">
              No continuous feeds. No constant notifications. No infinite scrolling. Only meaningful, contextual moments appear when they are actually relevant to your physical reality.
            </p>
          </div>
        </div>
      </NavSection>

      {/* SECTION 05: SHARED MOMENTS */}
      <NavSection id="PRES_05" title="Shared Moments" useBlue={true}>
        <p className="text-[16px] md:text-[18px] text-[#F2F2F0] font-light leading-relaxed max-w-[800px] mb-6">
          Instead of showing "Friend is here", we highlight shared opportunities.
        </p>
        
        <div className="flex flex-col gap-6 max-w-[800px]">
          {[
            { context: "Proximity", message: "You and Aisha are both within a five-minute walk of Cubbon Park." },
            { context: "Academic", message: "Three classmates are studying nearby." },
            { context: "Professional", message: "Two teammates are attending today's AI meetup." },
            { context: "Hobbies", message: "Your photography group is exploring Church Street." },
            { context: "Atmosphere", message: "The café you both like is unusually quiet right now." }
          ].map((item, i) => (
            <div key={i} className="flex gap-6 items-center p-4 bg-[#050505] border border-white/5 rounded-lg">
              <div className="font-mono text-[11px] text-[#6A6A6A] shrink-0 w-24 uppercase">{item.context}</div>
              <div className="w-4 h-[1px] bg-[#4F6EF7]/30" />
              <div className="text-[14px] text-[#F2F2F0] leading-relaxed font-medium">"{item.message}"</div>
            </div>
          ))}
        </div>

        <EngineeringNote type="Human Insights" title="Designing for Serendipity">
          Real life is unpredictable. By focusing on shared moments rather than exact tracking, we leave room for spontaneity, surprise, and natural human connection.
        </EngineeringNote>
      </NavSection>

      {/* SECTION 06: REAL SCENARIOS */}
      <NavSection id="PRES_06" title="Real-Life Scenarios">
        <p className="text-[16px] md:text-[18px] text-[#F2F2F0] font-light leading-relaxed max-w-[800px] mb-8">
          How Rheole helps without becoming intrusive.
        </p>

        <div className="flex flex-col gap-2 max-w-[800px]">
          {scenarios.map((item, idx) => {
            const isActive = activeScenario === idx;
            return (
              <div key={idx} className={`border ${isActive ? 'border-[#4F6EF7]/30 bg-[#4F6EF7]/5' : 'border-white/5 bg-[#080808]'} rounded-lg overflow-hidden transition-colors`}>
                <button 
                  onClick={() => setActiveScenario(isActive ? null : idx)}
                  className="w-full flex justify-between items-center p-5 text-left"
                >
                  <span className={`text-[15px] font-medium ${isActive ? 'text-[#4F6EF7]' : 'text-[#F2F2F0]'}`}>
                    "{item.q}"
                  </span>
                  <ChevronDown size={16} className={`text-[#6A6A6A] transition-transform ${isActive ? 'rotate-180 text-[#4F6EF7]' : ''}`} />
                </button>
                <AnimatePresence>
                  {isActive && (
                    <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden">
                      <div className="p-5 pt-0 text-[14px] text-[#A0A0A0] leading-relaxed border-t border-[#4F6EF7]/10 mt-2">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </NavSection>

      {/* SECTION 07: HUMAN BENEFITS */}
      <NavSection id="PRES_07" title="Human Benefits" useBlue={true}>
        <p className="text-[20px] md:text-[24px] text-[#F2F2F0] font-light leading-relaxed max-w-[800px]">
          Awareness improves every facet of daily life.
        </p>
        <p className="text-[15px] text-[#A0A0A0] leading-relaxed max-w-[800px] mt-6">
          Focusing on meaningful outcomes rather than raw technology, Human Presence Intelligence strengthens the fabric of society. It deepens friendships by creating spontaneous, low-pressure meetups. It eases family coordination, replacing anxious texts with calm, passive assurance. 
        </p>
        <p className="text-[15px] text-[#A0A0A0] leading-relaxed max-w-[800px] mt-4">
          For students, it transforms a massive, lonely campus into a vibrant network of study groups and social overlaps. For professionals, it turns anonymous conferences into targeted networking opportunities. It adds layers of safety for late-night travellers and fosters genuine community participation by making the people around you visible and approachable.
        </p>
        
        <ComparisonTable comparisons={[
          { left: "Continuous feeds", right: "Human Presence Intelligence" },
          { left: "Constant notifications", right: "Permission-first" },
          { left: "Public visibility", right: "Calm awareness" },
          { left: "Engagement-driven", right: "Contextual relevance" },
          { left: "Location sharing", right: "Shared real-world moments" },
          { left: "Attention economy", right: "Privacy by design" }
        ]} />
      </NavSection>

      {/* SECTION 08: FUTURE OF PRESENCE */}
      <NavSection id="PRES_08" title="Future of Presence" isLast={true}>
        <p className="text-[20px] md:text-[24px] text-[#F2F2F0] font-light leading-relaxed max-w-[800px]">
          The best social technology disappears into everyday life.
        </p>
        <p className="text-[15px] text-[#A0A0A0] leading-relaxed max-w-[800px] mt-6">
          Technology should help people feel closer without demanding their constant attention. The future of presence is calm. It is private, respectful, and highly contextual. It remains invisible until it is genuinely useful.
        </p>
        <p className="text-[15px] text-[#A0A0A0] leading-relaxed max-w-[800px] mt-4">
          Rheole quietly helps you notice the people who matter, exactly when it matters, while always respecting their privacy.
        </p>

        <EngineeringNote type="Digital Wellbeing" title="Human-Centred Connection">
          We are moving away from an era where technology extracts our attention, towards an era where technology quietly facilitates our real-world happiness.
        </EngineeringNote>
      </NavSection>

    </article>
  )
}
