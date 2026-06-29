"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import { Plus, Minus, ArrowRight } from "lucide-react";

// --- REUSABLE COMPONENTS ---

function ChapterSection({ number, title, children, isLast = false, useCyan = false }: { number: string, title: string, children: React.ReactNode, isLast?: boolean, useCyan?: boolean }) {
  return (
    <section className={`w-full relative pt-16 md:pt-20 ${useCyan ? 'bg-cyan-950/10' : ''}`}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-start gap-12 md:gap-24 relative">
        <ScrollReveal className="w-full md:w-[120px] shrink-0 sticky top-32 z-10 hidden md:block pb-4">
          <div className="flex flex-col gap-4">
            <span className="text-[32px] md:text-[48px] font-light text-[#06b6d4]/80 leading-none">
              {number}
            </span>
            <h2 className="text-[14px] md:text-[16px] text-[#F2F2F0] font-medium tracking-wide">
              {title}
            </h2>
          </div>
        </ScrollReveal>

        <div className="w-full md:hidden flex items-baseline gap-4 mb-8">
          <span className="text-[32px] font-light text-[#06b6d4]/80 leading-none">
            {number}
          </span>
          <h2 className="text-[20px] text-[#F2F2F0] font-medium tracking-wide">
            {title}
          </h2>
        </div>

        <div className="flex-1 w-full pb-16 md:pb-20">
          {children}
        </div>
      </div>
      {!isLast && (
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.05)] to-transparent absolute bottom-0 left-0" />
      )}
    </section>
  );
}

function ScenarioCard({ intent, reason }: { intent: string, reason: string }) {
  return (
    <div className="p-8 rounded-2xl border border-white/[0.04] bg-white/[0.01] flex flex-col gap-6">
      <span className="text-[20px] font-serif-editorial text-[#F2F2F0]">{intent}</span>
      <div className="h-[1px] w-full bg-white/[0.05]" />
      <p className="text-[14px] md:text-[15px] text-[#A0A0A0] leading-relaxed font-light">
        {reason}
      </p>
    </div>
  );
}

function PullQuote({ quote, author }: { quote: string, author?: string }) {
  return (
    <div className="my-16 pl-8 border-l-2 border-[#06b6d4]/50 max-w-[800px]">
      <p className="text-[24px] md:text-[32px] font-serif-editorial text-[#F2F2F0] leading-snug">
        {quote}
      </p>
      {author && (
        <span className="block mt-6 text-[13px] text-[#A0A0A0] uppercase tracking-widest">
          — {author}
        </span>
      )}
    </div>
  );
}

function GridCard({ title, desc }: { title: string, desc: string }) {
  return (
    <div className="p-6 rounded-xl border border-white/[0.04] bg-white/[0.01] flex flex-col gap-3 hover:border-white/[0.1] transition-colors">
      <h4 className="text-[16px] text-[#F2F2F0] font-medium">{title}</h4>
      <p className="text-[13px] text-[#A0A0A0] font-light leading-relaxed">{desc}</p>
    </div>
  );
}

function KnowledgeBlock({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <div className="my-12 p-8 rounded-xl border border-cyan-500/20 bg-cyan-950/20 max-w-[900px] flex flex-col gap-4">
      <span className="text-[11px] uppercase tracking-widest text-cyan-400 font-medium">
        {title}
      </span>
      <div className="text-[14px] md:text-[15px] text-[#E0E0E0] leading-relaxed font-light">
        {children}
      </div>
    </div>
  );
}

function CommunityIntelligenceDropdowns() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const items = [
    {
      title: "Location",
      descTechnical: "Proximity clustering algorithms group users within a dynamic spatial radius, prioritizing overlapping physical trajectories over static home addresses.",
      descEndUser: "We connect you with people who are physically near you right now, or who frequently spend time in the exact same neighborhoods you do."
    },
    {
      title: "Shared Interests",
      descTechnical: "Semantic entity extraction builds a high-dimensional vector space representing latent user affinities, allowing for non-obvious cross-domain matching.",
      descEndUser: "Rather than asking you to check boxes of things you like, Rheole naturally learns your genuine interests and connects you with others who share that exact wavelength."
    },
    {
      title: "Activity Patterns",
      descTechnical: "Temporal rhythm analysis identifies synchronization in routine behaviors, such as circadian activity spikes or weekly localized recurrences.",
      descEndUser: "If you are a 6 AM runner or a late-night cafe worker, the system connects you with the community operating on your specific daily rhythm."
    },
    {
      title: "Events Attended",
      descTechnical: "Historical event attendance nodes are used to construct bipartite graphs, generating strong community edge weights between users sharing experiential overlap.",
      descEndUser: "The people you keep seeing at local indie concerts or tech meetups are surfaced as part of a tangible community you already implicitly belong to."
    },
    {
      title: "Mutual Connections",
      descTechnical: "Triadic closure models probabilistically surface clusters of second-degree connections, prioritizing tight-knit network topologies over sparse, disconnected graphs.",
      descEndUser: "Rheole helps you discover the groups where your existing friends are already hanging out, making introductions feel entirely organic and trusted."
    },
    {
      title: "Purpose & Availability",
      descTechnical: "Intent classification layers intersect with temporal availability heuristics to match high-motivation users during synchronized windows of free time.",
      descEndUser: "If you want to start a side-project this weekend, the app introduces you to a community of builders who are also completely free and looking to collaborate right now."
    }
  ];

  return (
    <div className="flex flex-col gap-3 mt-8 w-full max-w-[900px] relative">
      {items.map((item, idx) => {
        const isActive = activeIndex === idx;
        return (
          <div 
            key={idx} 
            className={`flex flex-col rounded-xl border transition-all overflow-hidden ${
              isActive 
                ? 'border-[#06b6d4]/40 bg-[#0A0A0A]' 
                : 'border-[#06b6d4]/10 bg-[#06b6d4]/[0.02] hover:border-[#06b6d4]/30 hover:bg-[#06b6d4]/5'
            }`}
          >
            <div 
              className="flex items-center justify-between p-5 md:px-6 cursor-pointer"
              onClick={() => setActiveIndex(isActive ? null : idx)}
            >
              <span className="text-[15px] md:text-[16px] text-[#F2F2F0] font-medium">{item.title}</span>
              {isActive ? (
                <Minus className="w-5 h-5 text-[#06b6d4] shrink-0" />
              ) : (
                <Plus className="w-5 h-5 text-[#A0A0A0] shrink-0" />
              )}
            </div>
            
            <AnimatePresence>
              {isActive && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="p-6 md:p-8 pt-2 md:pt-4 border-t border-white/[0.05] relative">
                    <div className="absolute top-0 left-0 w-1 h-full bg-[#06b6d4]/50" />
                    <div className="flex flex-col gap-6 pl-4 md:pl-6">
                      <p className="text-[14px] md:text-[15px] leading-relaxed text-[#A0A0A0]">
                        <span className="block text-[#F2F2F0] font-medium mb-2 opacity-80">Technical Observation</span>
                        {item.descTechnical}
                      </p>
                      <p className="text-[14px] md:text-[15px] leading-relaxed text-[#A0A0A0]">
                        <span className="block text-[#F2F2F0] font-medium mb-2 opacity-80">End-User Experience</span>
                        {item.descEndUser}
                      </p>
                    </div>
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

function ComparisonBlock({ leftTitle, leftItems, rightTitle, rightItems }: any) {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.05] border border-white/[0.05] rounded-2xl overflow-hidden mt-12">
      <div className="bg-[#0A0A0A] p-8 md:p-12 flex flex-col gap-8">
        <h4 className="text-[20px] text-[#F2F2F0] font-medium">{leftTitle}</h4>
        <ul className="flex flex-col gap-4">
          {leftItems.map((item: string, i: number) => (
            <li key={i} className="flex items-start gap-4 text-[#A0A0A0] text-[15px]">
              <span className="text-white/20 mt-1">•</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-[#0c0f16] p-8 md:p-12 flex flex-col gap-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-[#06b6d4]" />
        <h4 className="text-[20px] text-[#F2F2F0] font-medium">{rightTitle}</h4>
        <ul className="flex flex-col gap-4 relative z-10">
          {rightItems.map((item: string, i: number) => (
            <li key={i} className="flex items-start gap-4 text-[#F2F2F0] text-[15px]">
              <span className="text-[#06b6d4] mt-1">•</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function CinematicFlowSimulation() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nodes = [
    { title: "Photography Community", desc: "You join a local group of photography enthusiasts on Rheole. The AI recommended it because you recently started following camera gear topics and live near their usual meetup spots." },
    { title: "Weekend photo walk", desc: "Your first interaction is attending a heritage architecture photo walk on a Saturday morning. You finally take your camera out of the box and practice shooting alongside experienced locals." },
    { title: "Nearby cafés", desc: "The official walk ends, but the group organically decides to head to a nearby independent coffee shop. You join them to review the morning's raw shots over espresso." },
    { title: "Editing workshop", desc: "During coffee, a senior member mentions they are hosting a Lightroom masterclass next week. Since you are struggling with color grading, you immediately RSVP." },
    { title: "Art exhibition", desc: "You attend the editing masterclass. Impressed by your rapid progress, the instructor invites you to a private indie gallery showing happening that weekend." },
    { title: "Camera marketplace", desc: "At the gallery, you network with other creatives and meet a documentary filmmaker who happens to be selling the exact vintage 50mm lens you've been searching for." },
    { title: "Volunteer event", desc: "The filmmaker invites you to join them the next day to shoot pro-bono promotional photos for a local animal shelter's adoption drive." },
    { title: "New friendships", desc: "Working side-by-side in high-energy, physical environments forge genuine, lasting personal bonds. These people are no longer just internet avatars; they are real friends." },
    { title: "Creative collaborations", desc: "Your friends start recommending you for gigs. You eventually begin partnering with the filmmaker on paid commercial projects for local businesses." },
    { title: "Career Opportunities", desc: "What started as joining a simple community on a weekend has organically snowballed into a sustainable freelance career, a deep local network, and profound belonging." }
  ];

  // Auto-progress simulation
  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % nodes.length);
    }, 4500); // Progress every 4.5 seconds
    return () => clearInterval(timer);
  }, [nodes.length]);

  return (
    <div className="w-full flex flex-col lg:flex-row gap-12 mt-12 mb-8 bg-[#080808] border border-[#06b6d4]/20 rounded-2xl p-6 md:p-12 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#06b6d4] to-transparent opacity-50" />
      <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-[#06b6d4]/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Left Side: The Flowchart Simulation */}
      <div className="w-full lg:w-[45%] relative flex flex-col py-4">
        <div className="absolute left-[15px] top-[24px] bottom-[24px] w-[2px] bg-white/5" />
        
        {/* Animated Progress Line */}
        <div 
          className="absolute left-[15px] top-[24px] w-[2px] bg-[#06b6d4] transition-all duration-1000 ease-in-out shadow-[0_0_15px_rgba(6,182,212,0.8)]" 
          style={{ height: `${(activeIndex / (nodes.length - 1)) * 100}%` }}
        />

        {nodes.map((node, idx) => {
          const isActive = idx === activeIndex;
          const isPast = idx < activeIndex;
          
          return (
            <div 
              key={idx} 
              className={`flex items-center gap-6 relative z-10 cursor-pointer py-3 transition-all duration-500 ${isActive ? 'scale-105 origin-left' : 'opacity-60 hover:opacity-100'}`}
              onClick={() => setActiveIndex(idx)}
            >
              <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 bg-transparent relative z-10">
                <div className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${isActive ? 'bg-[#06b6d4] shadow-[0_0_12px_rgba(6,182,212,1)]' : isPast ? 'bg-[#06b6d4]' : 'bg-[#080808] border border-white/40'}`} />
              </div>
              <span className={`text-[15px] md:text-[16px] font-medium transition-colors duration-500 ${isActive ? 'text-[#F2F2F0]' : 'text-[#A0A0A0]'}`}>
                {node.title}
              </span>
            </div>
          );
        })}
      </div>

      {/* Right Side: Detailed Explanation Panel */}
      <div className="w-full lg:w-[55%] flex items-center justify-center relative min-h-[300px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            className="w-full h-full flex flex-col justify-center bg-[#06b6d4]/[0.02] border border-[#06b6d4]/10 rounded-2xl p-8 md:p-10 relative"
          >
            {/* Simulation UI Elements */}
            <div className="absolute top-4 right-4 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#06b6d4] animate-pulse" />
              <span className="text-[11px] text-[#06b6d4] uppercase tracking-widest font-medium">Simulation Active</span>
            </div>
            
            <span className="text-[12px] text-[#A0A0A0] uppercase tracking-widest mb-4">Step 0{activeIndex + 1}</span>
            <h3 className="text-[24px] md:text-[28px] text-[#F2F2F0] font-light mb-6">
              {nodes[activeIndex].title}
            </h3>
            <p className="text-[15px] md:text-[16px] text-[#A0A0A0] leading-relaxed font-light">
              {nodes[activeIndex].desc}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

// --- MAIN ARTICLE ---

export default function CommunitiesContentArticle() {
  return (
    <article className="w-full flex flex-col items-center bg-[#080808]">
      
      {/* Chapter 1: What is a Community? */}
      <ChapterSection number="01" title="What is a Community?">
        <div className="flex flex-col gap-8 max-w-[900px]">
          <p className="text-[20px] md:text-[24px] text-[#F2F2F0] font-light leading-relaxed">
            Communities are much more than chat groups. They are living ecosystems that continuously evolve.
          </p>
          <div className="h-[1px] w-12 bg-white/10" />
          <p className="text-[16px] md:text-[18px] text-[#A0A0A0] font-light leading-relaxed">
            Digital platforms today have reduced the concept of community to infinite feeds of content disconnected from geography. We are asked to search for groups based on narrow keyword matches, resulting in digital silos that completely ignore the physical world we actually inhabit.
          </p>
          <p className="text-[16px] md:text-[18px] text-[#A0A0A0] font-light leading-relaxed">
            Rheole believes a true community is built around an intersection of people, purpose, place, time, interests, knowledge, support, and shared experiences. Local communities remain one of the strongest forms of human connection because they exist in reality, not just in servers.
          </p>

          <KnowledgeBlock title="Definition">
            <p><strong>Com·mu·ni·ty (noun):</strong> A living network of people connected by proximity, interests, timing, purpose, and shared physical experiences. Not a follower count.</p>
          </KnowledgeBlock>
        </div>
      </ChapterSection>

      {/* Chapter 2: The Communities Already Around You */}
      <ChapterSection number="02" title="The Communities Already Around You">
        <div className="flex flex-col gap-8 max-w-[900px]">
          <p className="text-[20px] md:text-[24px] text-[#F2F2F0] font-light leading-relaxed">
            Every neighbourhood already contains invisible communities.
          </p>
          <p className="text-[16px] md:text-[18px] text-[#A0A0A0] font-light leading-relaxed">
            Most people never discover these communities because they remain heavily fragmented across dozens of different apps, noticeboards, and private chats. Rheole makes the invisible structures of the city visible and discoverable.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
            {[
              "Startup founders", "Cyclists", "Photographers", "Chess players",
              "Dog owners", "Morning runners", "Artists", "Volunteers",
              "Book readers", "Music enthusiasts", "Language learners", "Parents",
              "Students", "Gamers", "Fitness groups", "Trekkers",
              "Food explorers", "Coffee lovers", "Tech enthusiasts"
            ].map((type, i) => (
              <div key={i} className="flex items-center justify-center p-3 rounded-lg border border-white/[0.04] bg-white/[0.01] text-center">
                <span className="text-[13px] text-[#A0A0A0]">{type}</span>
              </div>
            ))}
          </div>
        </div>
      </ChapterSection>

      {/* Chapter 3: Why Communities Matter */}
      <ChapterSection number="03" title="Why Communities Matter">
        <div className="flex flex-col gap-8 max-w-[900px]">
          <p className="text-[20px] md:text-[24px] text-[#F2F2F0] font-light leading-relaxed">
            One community can completely transform someone's experience in a city.
          </p>
          <p className="text-[16px] md:text-[18px] text-[#A0A0A0] font-light leading-relaxed">
            Communities do not just offer a place to talk; they offer a foundation to live. They help people learn, belong, build deep friendships, grow their careers, start companies, discover hidden opportunities, improve their mental wellbeing, support one another, share vital knowledge, and create lasting memories.
          </p>

          <PullQuote 
            quote="When you find your people, the city stops being a geography of buildings and becomes a geography of relationships."
          />

          <KnowledgeBlock title="Community Insights">
            <p>Studies consistently show that deep, localized community integration is the primary driver of urban satisfaction, mental health resilience, and serendipitous career advancement. Connection is infrastructure.</p>
          </KnowledgeBlock>
        </div>
      </ChapterSection>

      {/* Chapter 4: Community Intelligence */}
      <ChapterSection number="04" title="Community Intelligence">
        <div className="flex flex-col gap-8 max-w-[900px]">
          <p className="text-[20px] md:text-[24px] text-[#F2F2F0] font-light leading-relaxed">
            How AI understands communities.
          </p>
          <div className="h-[1px] w-12 bg-white/10" />
          <p className="text-[16px] md:text-[18px] text-[#A0A0A0] font-light leading-relaxed">
            Our recommendations are entirely based on meaningful relationships rather than follower counts or popularity metrics. Communities are recommended to you simply because they are highly relevant to your life right now, not because they are large.
          </p>

          <CommunityIntelligenceDropdowns />
        </div>
      </ChapterSection>

      {/* Chapter 5: Community Types */}
      <ChapterSection number="05" title="Community Types">
        <div className="flex flex-col gap-12 max-w-[1200px]">
          <p className="text-[20px] md:text-[24px] text-[#F2F2F0] font-light leading-relaxed max-w-[900px]">
            Rheole maps hundreds of different community typologies, understanding exactly who benefits from them, why they join, and how to discover them natively.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <GridCard 
              title="Entrepreneurship" 
              desc="Who benefits: Founders and operators. Why join: To share resources, find co-founders, and navigate startup challenges. Discovery: Mapped through coworking spaces and pitch events."
            />
            <GridCard 
              title="Photography" 
              desc="Who benefits: Creators and hobbyists. Why join: To learn techniques, borrow gear, and find beautiful locations. Discovery: Identified by clusters of weekend photo walks."
            />
            <GridCard 
              title="Language Learning" 
              desc="Who benefits: Expats and students. Why join: To practice conversational fluency and share cultural context. Discovery: Sourced from language exchange cafes."
            />
            <GridCard 
              title="Artificial Intelligence" 
              desc="Who benefits: Engineers and researchers. Why join: To stay on the bleeding edge of models and architectures. Discovery: Found at hackathons and academic meetups."
            />
            <GridCard 
              title="Local Volunteering" 
              desc="Who benefits: Civic-minded residents. Why join: To directly improve their immediate neighbourhood. Discovery: Mapped via weekend cleanup drives and food banks."
            />
            <GridCard 
              title="Cycling & Fitness" 
              desc="Who benefits: Athletes and commuters. Why join: For safety in numbers, motivation, and discovering new routes. Discovery: Tracked via early morning route densities."
            />
          </div>
        </div>
      </ChapterSection>

      {/* Chapter 6: Communities Evolve */}
      <ChapterSection number="06" title="Communities Evolve">
        <div className="flex flex-col gap-8 max-w-[900px]">
          <p className="text-[20px] md:text-[24px] text-[#F2F2F0] font-light leading-relaxed">
            Communities are dynamic, living systems.
          </p>
          <div className="h-[1px] w-12 bg-white/10" />
          <p className="text-[16px] md:text-[18px] text-[#A0A0A0] font-light leading-relaxed">
            Traditional platforms treat groups as static objects. You join them, and they sit in a sidebar forever. In reality, a community may be meeting today, completely inactive tomorrow, growing next month, hosting a massive event this weekend, welcoming new members on a Tuesday, or collaborating with another entirely different community on a Friday.
          </p>
          <p className="text-[16px] md:text-[18px] text-[#A0A0A0] font-light leading-relaxed">
            Rheole continuously understands these rapidly changing relationships in real-time, surfacing communities exactly when their momentum matches your intent.
          </p>
        </div>
      </ChapterSection>

      {/* Chapter 7: From Community to Opportunity */}
      <ChapterSection number="07" title="From Community to Opportunity" useCyan={true}>
        <div className="flex flex-col gap-8 max-w-[900px]">
          <p className="text-[20px] md:text-[24px] text-[#F2F2F0] font-light leading-relaxed">
            Joining one community naturally unlocks a cascade of local experiences.
          </p>
          
          <CinematicFlowSimulation />
          
          <p className="text-[16px] md:text-[18px] text-[#A0A0A0] font-light leading-relaxed mt-4">
            Communities become the definitive gateways into local life.
          </p>
        </div>
      </ChapterSection>

      {/* Chapter 8: Discovering Belonging */}
      <ChapterSection number="08" title="Discovering Belonging">
        <div className="flex flex-col gap-8 max-w-[900px]">
          <p className="text-[20px] md:text-[24px] text-[#F2F2F0] font-light leading-relaxed">
            Belonging cannot be searched.
          </p>
          <div className="h-[1px] w-12 bg-white/10" />
          <p className="text-[16px] md:text-[18px] text-[#A0A0A0] font-light leading-relaxed">
            Most people do not know what community they are looking for until they find it. When you are moving to a new city, starting college, changing careers, learning a new hobby, recovering from loneliness, travelling, or starting a business, you rarely have the exact keyword to search for.
          </p>
          <p className="text-[16px] md:text-[18px] text-[#A0A0A0] font-light leading-relaxed">
            Rheole masters serendipitous discovery. It introduces you to communities you never knew existed, exactly when you need them most, entirely organically.
          </p>
        </div>
      </ChapterSection>

      {/* Chapter 9: Real Life Scenarios */}
      <ChapterSection number="09" title="Real Life Scenarios">
        <div className="flex flex-col gap-8 max-w-[1400px]">
          <p className="text-[20px] md:text-[24px] text-[#F2F2F0] font-light leading-relaxed max-w-[900px]">
            Why Rheole recommends specific communities based on profound, real-life context.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            <ScenarioCard 
              intent="I'm new in Bengaluru." 
              reason="Rheole immediately connects you with neighbourhood-specific introductory groups, expat or out-of-towner meetups, and local cultural orientation walks to rapidly build your foundational safety and social network."
            />
            <ScenarioCard 
              intent="I'm a first-year engineering student." 
              reason="The system surfaces university-adjacent study groups, open-source coding hackathons, and local student-discount hubs, ensuring you integrate academically and socially outside the immediate campus."
            />
            <ScenarioCard 
              intent="I'm building an AI startup." 
              reason="You are routed to deep-tech founder circles, early-stage pitch communities, and specialized hardware enthusiast groups meeting in nearby co-working spaces to accelerate your resourcing."
            />
            <ScenarioCard 
              intent="I love wildlife photography." 
              reason="Rheole bypasses generic photography groups and directly recommends communities planning weekend excursions to nearby sanctuaries, complete with gear-sharing sub-groups."
            />
            <ScenarioCard 
              intent="I recently bought a bicycle." 
              reason="The AI detects your new mobility capability and introduces you to early-morning amateur cycling clubs, maintenance workshops, and safe-routing advocacy groups."
            />
            <ScenarioCard 
              intent="I'm looking for badminton partners." 
              reason="Instead of just showing courts, Rheole connects you with active, skill-matched amateur leagues playing within a 3km radius during your exact free evening hours."
            />
            <ScenarioCard 
              intent="I want to volunteer on weekends." 
              reason="You are matched with high-impact, locally driven initiatives—like lake cleanups or animal shelters—that require your specific skill set precisely when you are available."
            />
            <ScenarioCard 
              intent="I moved here with my family." 
              reason="The system prioritizes parent-support networks, child-friendly weekend activity groups, and neighbourhood safety associations to integrate your entire household safely."
            />
            <ScenarioCard 
              intent="I want to improve my public speaking." 
              reason="Rheole recommends local Toastmasters chapters, indie theatre improv groups, and founder pitch practice sessions that align with your professional intent and location."
            />
            <ScenarioCard 
              intent="I'm learning Carnatic music." 
              reason="You are introduced to local acoustic listening sessions, classical music appreciation circles, and available instructors hosting intimate community recitals."
            />
            <ScenarioCard 
              intent="I enjoy astronomy." 
              reason="The platform connects you with stargazing communities that actively track clear weather patterns and organize late-night drives to low-light-pollution zones."
            />
            <ScenarioCard 
              intent="I'm preparing for UPSC." 
              reason="Rheole surfaces quiet study circles, library groups, and current-affairs discussion forums to provide mutual accountability and resource sharing during intense preparation."
            />
            <ScenarioCard 
              intent="I'm a designer." 
              reason="You are routed to local Figma meetups, architectural critique groups, and creative mixers happening in high-aesthetics cafes to foster cross-disciplinary inspiration."
            />
            <ScenarioCard 
              intent="I'm a freelancer." 
              reason="The AI introduces you to co-working accountability groups, tax-planning workshops, and mid-day coffee communities to combat the isolation of independent work."
            />
            <ScenarioCard 
              intent="I work remotely." 
              reason="Rheole ensures you don't stay trapped at home by connecting you with digital nomad communities, afternoon fitness classes, and local weekday exploration groups."
            />
          </div>
        </div>
      </ChapterSection>

      {/* Chapter 10: The Future of Events (Actually Future of Human Connection) */}
      <ChapterSection number="10" title="The Future of Human Connection" isLast={true}>
        <div className="flex flex-col gap-12 max-w-[1200px]">
          <div className="max-w-[900px]">
            <p className="text-[20px] md:text-[24px] text-[#F2F2F0] font-light leading-relaxed mb-6">
              People should no longer need to manually search through dozens of disconnected platforms.
            </p>
            <p className="text-[16px] md:text-[18px] text-[#A0A0A0] font-light leading-relaxed mb-6">
              Instead, their surroundings should intelligently reveal the people, ideas, and opportunities already existing around them. Rheole enables ambient community discovery without overwhelming users. Communities appear naturally, gracefully, and exactly as your life changes.
            </p>
          </div>

          <ComparisonBlock 
            leftTitle="Traditional Community Platforms"
            leftItems={[
              "Manual keyword searching",
              "Closed, siloed groups",
              "Popularity driven algorithms",
              "Global-first network architecture",
              "Platform-centric engagement loops",
              "Static, permanent memberships",
              "Fragmented, digital-only experiences"
            ]}
            rightTitle="Rheole"
            rightItems={[
              "Context-aware, ambient discovery",
              "Local-first spatial intelligence",
              "AI reasoning and relationship mapping",
              "Living, dynamically evolving communities",
              "Deep event and physical place integration",
              "Fluid, timing-based recommendations",
              "Real-world, physical experiences"
            ]}
          />
        </div>
      </ChapterSection>
    </article>
  );
}
