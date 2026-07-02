"use client";

import React from "react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import { 
  Globe, 
  Map, 
  Navigation,
  Sparkles,
  Users, 
  Heart,
  ShieldCheck,
  Eye,
  Brain,
  Lock,
  Clock,
  MapPin,
  Target,
  Activity,
  PenTool,
  Milestone,
  Network,
  ChevronRight,
  Scale,
  BookOpen,
  Fingerprint,
  Layers,
  Compass,
  Link2,
  Rocket
} from "lucide-react";

// -----------------------------------------------------------------------------------
// REUSABLE COMPONENTS
// -----------------------------------------------------------------------------------

function SectionHeading({ title, subtitle, centered = false }: { title: string; subtitle?: string; centered?: boolean }) {
  return (
    <div className={`flex flex-col gap-4 mb-16 ${centered ? "items-center text-center mx-auto" : ""}`}>
      {subtitle && (
        <ScrollReveal>
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#6A6A6A] font-medium">{subtitle}</span>
        </ScrollReveal>
      )}
      <ScrollReveal delay={0.1}>
        <h2 className="text-[40px] md:text-[56px] text-[#F2F2F0] font-serif-editorial font-light leading-[1.1] tracking-tight max-w-[800px]">
          {title}
        </h2>
      </ScrollReveal>
    </div>
  );
}

// -----------------------------------------------------------------------------------
// SECTIONS
// -----------------------------------------------------------------------------------

function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center px-6 md:px-12 pt-32 pb-20 overflow-hidden bg-[#080808]">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02] mix-blend-overlay pointer-events-none" />
      
      <div className="max-w-[1000px] mx-auto z-10 flex flex-col items-start gap-12 w-full mt-12">
        <ScrollReveal>
          <div className="flex items-center gap-4">
            <div className="w-12 h-[1px] bg-white/[0.2]" />
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#A0A0A0] font-medium">Rheole • Company</span>
          </div>
        </ScrollReveal>
        
        <ScrollReveal delay={0.2}>
          <h1 className="text-[64px] md:text-[96px] lg:text-[110px] text-[#F2F2F0] font-serif-editorial font-light leading-[0.95] tracking-tight max-w-[1000px]">
            Mission
          </h1>
          <p className="text-[20px] md:text-[24px] text-[#8A8A8A] font-light mt-6 tracking-wide">
            The Future We Are Committed to Building.
          </p>
        </ScrollReveal>
        
        <div className="flex flex-col gap-8 mt-12 w-full max-w-[700px]">
          <ScrollReveal delay={0.4}>
            <p className="text-[22px] md:text-[28px] text-[#A0A0A0] font-light leading-relaxed">
              Rheole isn't chasing trends. It is pursuing a long-term mission.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.5}>
            <p className="text-[18px] text-[#6A6A6A] font-light leading-relaxed">
              Technology has transformed how we communicate, learn, and work. Yet understanding the physical world remains unnecessarily difficult. Rheole exists because we believe technology should help people better understand the world they live in.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function WhyWeExistSection() {
  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#050505]">
      <div className="max-w-[1000px] mx-auto flex flex-col gap-16 text-center items-center">
        <SectionHeading subtitle="Chapter 01" title="Why We Exist" centered={true} />
        
        <ScrollReveal delay={0.2}>
          <p className="text-[28px] md:text-[40px] text-[#F2F2F0] font-serif-editorial font-light leading-tight">
            The next generation deserves technology that understands reality, not just information.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <p className="text-[18px] text-[#8A8A8A] font-light leading-relaxed max-w-[700px] mt-6">
            Every generation inherits a different relationship with technology. We created Rheole not because the world needs another application, but because the physical world remains deeply fragmented, difficult to understand, and disconnected. The tools we rely on to navigate physical space are fundamentally blind to context, intention, and human nuance.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

function OurMissionSection() {
  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#080808]">
      <div className="max-w-[1000px] mx-auto flex flex-col gap-16">
        <SectionHeading subtitle="Chapter 02" title="Our Mission" centered={false} />
        
        <ScrollReveal delay={0.2}>
          <div className="p-12 border-l-4 border-[#4F6EF7] bg-white/[0.02]">
            <p className="text-[24px] md:text-[32px] text-[#F2F2F0] font-serif-editorial font-light leading-relaxed">
              "Our mission is to build the world's most trusted Spatial Intelligence platform, helping people understand, navigate, discover, and experience the physical world with greater clarity, confidence, and context."
            </p>
          </div>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
          <ScrollReveal delay={0.3}>
            <div className="flex flex-col gap-3">
              <h4 className="text-[18px] text-white font-medium flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-[#4F6EF7]" /> Why Trust Matters</h4>
              <p className="text-[16px] text-[#8A8A8A] font-light leading-relaxed">We refuse to rely on hidden algorithms or opaque data brokering. To navigate life, people must trust the intelligence guiding them as deeply as they trust their own senses.</p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.4}>
            <div className="flex flex-col gap-3">
              <h4 className="text-[18px] text-white font-medium flex items-center gap-2"><Brain className="w-5 h-5 text-[#4F6EF7]" /> Why Understanding Matters</h4>
              <p className="text-[16px] text-[#8A8A8A] font-light leading-relaxed">Information without understanding is merely noise. An address is information. Knowing that a park is safe and quiet on a Tuesday afternoon is understanding.</p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.5}>
            <div className="flex flex-col gap-3">
              <h4 className="text-[18px] text-white font-medium flex items-center gap-2"><Eye className="w-5 h-5 text-[#4F6EF7]" /> Why Clarity Matters</h4>
              <p className="text-[16px] text-[#8A8A8A] font-light leading-relaxed">The cognitive load of the modern digital experience is overwhelming. Clarity demands an interface that fades away, leaving only the essential answers you need to act.</p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.6}>
            <div className="flex flex-col gap-3">
              <h4 className="text-[18px] text-white font-medium flex items-center gap-2"><Network className="w-5 h-5 text-[#4F6EF7]" /> Why Context Matters</h4>
              <p className="text-[16px] text-[#8A8A8A] font-light leading-relaxed">A recommendation devoid of context is an assumption. By embracing environmental, temporal, and human signals, technology can finally perceive the world as humans do.</p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function TheWorldTodaySection() {
  const points = [
    { left: "Information is abundant.", right: "Understanding is scarce." },
    { left: "Search answers questions.", right: "It rarely understands situations." },
    { left: "Maps show locations.", right: "They rarely explain relationships." },
    { left: "Communities remain hidden.", right: "Local opportunities remain difficult to discover." }
  ];

  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#050505]">
      <div className="max-w-[1000px] mx-auto flex flex-col gap-16 text-center items-center">
        <SectionHeading subtitle="Chapter 03" title="The World Today" centered={true} />
        
        <ScrollReveal delay={0.2}>
          <p className="text-[18px] text-[#8A8A8A] font-light leading-relaxed max-w-[700px] mx-auto">
            Today, technology still expects people to adapt to software. Everyday decisions require unnecessary effort, bridging gaps between scattered tools that refuse to talk to one another.
          </p>
        </ScrollReveal>

        <div className="flex flex-col gap-6 mt-8 w-full max-w-[800px]">
          {points.map((pt, idx) => (
            <ScrollReveal key={idx} delay={0.1 * idx}>
              <div className="flex items-center justify-between p-6 border border-white/[0.05] rounded-2xl bg-[#0A0A0A]">
                <span className="text-[16px] text-[#A0A0A0] font-light w-1/2 text-right pr-6 border-r border-white/[0.1]">{pt.left}</span>
                <span className="text-[16px] text-[#F2F2F0] font-medium w-1/2 text-left pl-6">{pt.right}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function TheWorldWeEnvisionSection() {
  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#080808]">
      <div className="max-w-[1000px] mx-auto flex flex-col lg:flex-row gap-20 items-center">
        <div className="lg:w-1/2 flex flex-col gap-8">
          <SectionHeading subtitle="Chapter 04" title="The World We Envision" centered={false} />
          
          <ScrollReveal delay={0.2}>
            <p className="text-[20px] text-[#A0A0A0] font-light leading-relaxed">
              We imagine cities that quietly help people.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <p className="text-[18px] text-[#8A8A8A] font-light leading-relaxed">
              Imagine navigation that understands your purpose rather than just plotting a line on a map. Imagine communities that naturally surface when you need them, and local businesses that become seamlessly visible precisely when they are relevant. 
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.4}>
            <p className="text-[18px] text-[#8A8A8A] font-light leading-relaxed">
              We are building a future where technology fades entirely into the background. People will spend less time searching, less time staring at screens, and far more time experiencing the richness of physical reality.
            </p>
          </ScrollReveal>
        </div>
        
        <div className="lg:w-1/2 flex flex-col justify-center relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#4F6EF7]/10 to-transparent rounded-full blur-[100px]" />
          <div className="relative z-10 p-12 border border-white/[0.05] rounded-[40px] bg-[#050505] flex items-center justify-center">
             <Sparkles className="w-32 h-32 text-white/[0.1] shrink-0" />
          </div>
        </div>
      </div>
    </section>
  );
}

function CommitmentsSection() {
  const commitments = [
    { t: "We build for people before platforms.", d: "The human experience always supersedes the metric." },
    { t: "We protect privacy by design.", d: "We cannot compromise what we fundamentally refuse to harvest." },
    { t: "We explain intelligence instead of hiding it.", d: "Transparency is the only path to durable trust." },
    { t: "We optimise for trust rather than engagement.", d: "We want you to close the app because you found what you needed." },
    { t: "We believe calm technology is better technology.", d: "Interfaces should soothe, not scream for attention." },
    { t: "We design for accessibility from the beginning.", d: "Physical reality belongs to everyone." },
    { t: "We think in decades, not quarters.", d: "Enduring architecture over short-term hacks." },
    { t: "We welcome curiosity.", d: "We build systems that reward those who wish to explore." },
    { t: "We continuously question our own assumptions.", d: "Certainty is the enemy of intellectual honesty." },
    { t: "We believe technology should strengthen communities.", d: "The digital layer exists to bind the physical fabric together." }
  ];

  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#050505]">
      <div className="max-w-[1000px] mx-auto flex flex-col gap-16">
        <SectionHeading subtitle="Chapter 05" title="Our Commitments" centered={false} />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          {commitments.map((c, idx) => (
             <ScrollReveal key={idx} delay={0.05 * idx}>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <span className="text-[12px] text-[#4F6EF7] font-serif-editorial italic">{String(idx + 1).padStart(2, '0')}.</span>
                  <h4 className="text-[18px] text-[#F2F2F0] font-medium tracking-tight">{c.t}</h4>
                </div>
                <p className="text-[15px] text-[#8A8A8A] font-light leading-relaxed pl-7">{c.d}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowWeBuildSection() {
  const steps = [
    "Research first.",
    "Design second.",
    "Engineering third.",
    "Iteration always.",
    "Long-term thinking.",
    "Transparent decision making.",
    "Responsible AI.",
    "Continuous learning.",
    "Cross-disciplinary collaboration.",
    "Architecture before optimisation."
  ];

  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#080808]">
      <div className="max-w-[1000px] mx-auto flex flex-col lg:flex-row gap-20">
        <div className="lg:w-1/3">
          <SectionHeading subtitle="Chapter 06" title="How We Build" centered={false} />
        </div>
        <div className="lg:w-2/3">
          <div className="flex flex-wrap gap-4">
            {steps.map((step, idx) => (
              <ScrollReveal key={idx} delay={0.05 * idx}>
                <div className="px-6 py-4 border border-white/[0.08] bg-white/[0.02] rounded-full text-[16px] text-[#D1D5DB] font-light">
                  {step}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function MeasuringSuccessSection() {
  const questions = [
    { q: "Have we helped people discover opportunities?", d: "Or did we just route them to the loudest advertiser?" },
    { q: "Have we reduced everyday friction?", d: "Or did we invent new digital chores?" },
    { q: "Have we made communities more visible?", d: "Or did we isolate people further behind screens?" },
    { q: "Have we strengthened local businesses?", d: "Or did we extract their margin?" },
    { q: "Have we improved accessibility?", d: "Did we remember that physical navigation is not equal for everyone?" },
    { q: "Have we built trust?", d: "Is our reasoning explainable, or is it a hidden black box?" },
    { q: "Have we respected privacy?", d: "Can the user effortlessly sever our access to their context?" },
    { q: "Have we made technology feel calmer?", d: "Or did we contribute to the noise?" }
  ];

  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#050505]">
      <div className="max-w-[1000px] mx-auto flex flex-col gap-16 text-center items-center">
        <SectionHeading subtitle="Chapter 07" title="Measuring Success" centered={true} />
        
        <ScrollReveal delay={0.2}>
          <p className="text-[18px] text-[#8A8A8A] font-light leading-relaxed max-w-[700px]">
            Success is not defined solely by revenue or daily active users. Metrics are easily manipulated. Instead, we measure our integrity against a set of unyielding questions.
          </p>
        </ScrollReveal>

        <div className="flex flex-col gap-6 mt-8 max-w-[800px] w-full text-left">
          {questions.map((item, idx) => (
             <ScrollReveal key={idx} delay={0.1 * idx}>
              <div className="flex items-start gap-4 p-6 bg-[#0A0A0A] border border-white/[0.05] rounded-2xl hover:bg-white/[0.05] transition-colors">
                <Target className="w-5 h-5 text-[#4F6EF7] shrink-0 mt-1" />
                <div>
                  <p className="text-[18px] text-[#F2F2F0] font-light">{item.q}</p>
                  <p className="text-[14px] text-[#8A8A8A] mt-2 font-light italic">{item.d}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function TheNext30YearsSection() {
  return (
    <section className="relative w-full py-[200px] px-6 md:px-12 bg-[#080808] overflow-hidden border-t border-white/[0.05]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#4F6EF7]/[0.02] rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-[800px] mx-auto flex flex-col items-center text-center relative z-10">
        <ScrollReveal>
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#6A6A6A] font-medium mb-12 block">Chapter 08</span>
        </ScrollReveal>
        
        <ScrollReveal delay={0.2}>
          <h2 className="text-[40px] md:text-[64px] text-[#F2F2F0] font-serif-editorial font-light leading-[1.1] tracking-tight mb-16">
            The Next 30 Years
          </h2>
        </ScrollReveal>
        
        <div className="flex flex-col gap-8 text-[20px] text-[#8A8A8A] font-light leading-relaxed">
          <ScrollReveal delay={0.3}>
            <p>
              Rheole is not building for the next product launch. It is building for the next generation of computing.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.4}>
            <p>
              Technology will inevitably evolve. Cities will evolve. Communities will evolve. Artificial Intelligence will evolve. 
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.5}>
            <p>
              Yet our core mission will remain constant: Helping people better understand and experience the physical world. 
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={0.7}>
            <div className="mt-16 pt-16 border-t border-white/[0.1]">
              <p className="text-[24px] md:text-[32px] text-[#F2F2F0] font-serif-editorial font-light leading-relaxed">
                We do not believe this mission will ever truly be finished. As the world continues to change, understanding it will remain one of humanity's most meaningful challenges.<br/><br/>
                That is the journey we have chosen.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

// -----------------------------------------------------------------------------------
// MAIN EXPORT
// -----------------------------------------------------------------------------------

export default function MissionPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-[#F2F2F0] font-sans selection:bg-white/20 selection:text-white pt-16">
      <HeroSection />
      <WhyWeExistSection />
      <OurMissionSection />
      <TheWorldTodaySection />
      <TheWorldWeEnvisionSection />
      <CommitmentsSection />
      <HowWeBuildSection />
      <MeasuringSuccessSection />
      <TheNext30YearsSection />
    </main>
  );
}
