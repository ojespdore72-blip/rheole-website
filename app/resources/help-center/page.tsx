"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import { 
  Search, BookOpen, Clock, Compass, Lightbulb, PlayCircle,
  HelpCircle, Settings, ShieldAlert, ArrowRight, ChevronDown,
  MessagesSquare, Layers, Code, Zap
} from "lucide-react";

import { 
  gettingStartedData, learningPathsData, featureGuidesData, 
  popularTasksData, troubleshootingData, videoLearningData, 
  uniqueConceptsData, comparisonData 
} from "@/lib/data/help-center";

export default function HelpCenterPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#080808] text-[#F2F2F0] selection:bg-[#4F6EF7]/30 selection:text-[#F2F2F0] pb-32">
      
      {/* Welcome / Hero */}
      <section className="pt-32 px-6 md:px-12 max-w-[1200px] mx-auto flex flex-col gap-8">
        <ScrollReveal>
          <span className="text-[11px] uppercase tracking-[0.2em] text-[#6A6A6A] font-medium flex items-center gap-3">
            <BookOpen className="w-4 h-4 text-[#4F6EF7]" /> Rheole Help Center
          </span>
        </ScrollReveal>
        
        <ScrollReveal delay={0.1}>
          <h1 className="text-[48px] md:text-[80px] lg:text-[100px] text-[#F2F2F0] font-serif-editorial font-light leading-[1.05] tracking-tight max-w-[1000px]">
            Everything you need to<br />use Rheole with confidence.
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="text-[20px] md:text-[28px] text-[#8A8A8A] font-light max-w-[800px] leading-relaxed">
            <p>
              Whether you&apos;re discovering your city, navigating your day, joining communities, or exploring nearby opportunities, the Help Center provides clear guidance for every experience.
            </p>
          </div>
        </ScrollReveal>

        {/* Live Metrics Grid */}
        <ScrollReveal delay={0.3} className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { label: "Knowledge Articles", val: "1,240+" },
            { label: "Guides Available", val: "85" },
            { label: "Interactive Tutorials", val: "12" },
            { label: "Video Walkthroughs", val: "45" },
            { label: "Search Coverage", val: "100%" },
            { label: "Last Updated", val: "Today", color: "text-[#4F6EF7]" }
          ].map((metric, i) => (
            <div key={i} className="p-5 rounded-2xl bg-[#0A0A0A] border border-white/[0.05]">
              <h4 className="text-[10px] uppercase tracking-widest text-[#6A6A6A] font-medium mb-2">{metric.label}</h4>
              <p className={`text-[16px] font-medium ${metric.color || 'text-white'}`}>{metric.val}</p>
            </div>
          ))}
        </ScrollReveal>
      </section>

      {/* How Can We Help? (Semantic Search Simulation) */}
      <section className="pt-32 px-6 md:px-12 max-w-[1200px] mx-auto">
        <ScrollReveal>
          <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-b from-[#111] to-[#0A0A0A] border border-white/[0.05] flex flex-col items-center text-center">
            <h2 className="text-[32px] md:text-[48px] font-serif-editorial font-light mb-6 text-white">How can we help?</h2>
            
            <div className="relative w-full max-w-[700px] mb-8">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-[#6A6A6A]" />
              <input 
                type="text"
                placeholder="Ask naturally (e.g. 'How do I join a community?')"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#1A1A1A] border border-white/[0.1] rounded-full py-5 pl-16 pr-6 text-white placeholder-[#6A6A6A] focus:outline-none focus:border-[#4F6EF7]/50 transition-colors text-lg"
              />
            </div>
            
            <div className="flex flex-wrap justify-center gap-3 max-w-[800px]">
              <span className="text-[13px] text-[#6A6A6A] mt-2 mr-2">Try searching:</span>
              {[
                "Discover nearby events", "Smart Routing", "Join a community", 
                "Find founders nearby", "Manage privacy settings"
              ].map((suggestion, i) => (
                <button key={i} onClick={() => setSearchQuery(suggestion)} className="text-[13px] text-[#A0A0A0] bg-[#111] border border-white/[0.05] hover:border-white/[0.2] px-4 py-2 rounded-full transition-colors">
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Getting Started */}
      <section className="pt-32 px-6 md:px-12 max-w-[1200px] mx-auto">
        <ScrollReveal>
          <h2 className="text-[32px] md:text-[48px] font-serif-editorial font-light mb-12 text-white">Getting Started</h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {gettingStartedData.map((guide, i) => (
            <ScrollReveal key={i} delay={0.1 + (i * 0.05)} className="flex flex-col p-6 rounded-2xl bg-[#0A0A0A] border border-white/[0.05] hover:border-white/[0.2] transition-colors group cursor-pointer">
              <h3 className="text-[18px] font-medium text-white tracking-tight mb-2 group-hover:text-[#4F6EF7] transition-colors">{guide.title}</h3>
              <p className="text-[#8A8A8A] text-sm font-light leading-relaxed mb-6 flex-1">{guide.desc}</p>
              <div className="flex items-center justify-between pt-4 border-t border-white/[0.05]">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#6A6A6A]" />
                  <span className="text-[12px] text-[#8A8A8A]">{guide.time}</span>
                </div>
                <span className="text-[12px] uppercase tracking-widest text-[#4F6EF7] font-medium">{guide.diff}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Learning Paths */}
      <section className="pt-32 px-6 md:px-12 max-w-[1200px] mx-auto">
        <ScrollReveal>
          <h2 className="text-[32px] md:text-[48px] font-serif-editorial font-light mb-12 text-white">Learning Paths</h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {learningPathsData.map((path, i) => (
            <ScrollReveal key={i} delay={0.1 + (i * 0.05)} className="p-8 rounded-2xl bg-[#0A0A0A] border border-white/[0.05]">
              <div className="flex items-center gap-4 mb-4">
                <Layers className="w-6 h-6 text-[#4F6EF7]" />
                <h3 className="text-[24px] font-medium text-white tracking-tight">{path.section}</h3>
              </div>
              <p className="text-[#A0A0A0] text-sm font-light leading-relaxed mb-6">{path.desc}</p>
              <div className="flex flex-wrap gap-2">
                {path.guides.map((guide, idx) => (
                  <span key={idx} className="text-[13px] bg-[#111] text-[#D0D0D0] border border-white/[0.05] px-3 py-1.5 rounded-lg">
                    {guide}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Feature Guides */}
      <section className="pt-32 px-6 md:px-12 max-w-[1200px] mx-auto">
        <ScrollReveal>
          <h2 className="text-[32px] md:text-[48px] font-serif-editorial font-light mb-12 text-white">Feature Guides</h2>
        </ScrollReveal>

        <div className="flex flex-col gap-8">
          {featureGuidesData.map((guide, i) => (
            <ScrollReveal key={i} delay={0.1 + (i * 0.1)}>
              <div className="p-8 md:p-10 rounded-3xl bg-[#0A0A0A] border border-white/[0.05] grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-1">
                  <h3 className="text-[28px] font-medium text-white tracking-tight mb-4">{guide.name}</h3>
                  <p className="text-[#A0A0A0] text-lg font-light leading-relaxed mb-6">{guide.what}</p>
                  <p className="text-[13px] text-[#4F6EF7] font-medium tracking-wide uppercase">Related: {guide.related}</p>
                </div>
                <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-[11px] uppercase tracking-widest text-[#6A6A6A] font-medium mb-2">Why it exists</h4>
                    <p className="text-[#8A8A8A] text-sm font-light leading-relaxed mb-6">{guide.why}</p>
                    <h4 className="text-[11px] uppercase tracking-widest text-[#6A6A6A] font-medium mb-2">Best Practice</h4>
                    <p className="text-[#8A8A8A] text-sm font-light leading-relaxed">{guide.practice}</p>
                  </div>
                  <div>
                    <h4 className="text-[11px] uppercase tracking-widest text-[#6A6A6A] font-medium mb-2">How it works</h4>
                    <p className="text-[#8A8A8A] text-sm font-light leading-relaxed mb-6">{guide.works}</p>
                    <h4 className="text-[11px] uppercase tracking-widest text-[#6A6A6A] font-medium mb-2">When to use it</h4>
                    <p className="text-[#8A8A8A] text-sm font-light leading-relaxed">{guide.when}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Popular Tasks & Troubleshooting */}
      <section className="pt-32 px-6 md:px-12 max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Popular Tasks */}
        <div>
          <ScrollReveal>
            <h2 className="text-[32px] md:text-[48px] font-serif-editorial font-light mb-12 text-white">Popular Tasks</h2>
          </ScrollReveal>
          <div className="flex flex-col gap-6">
            {popularTasksData.map((task, i) => (
              <ScrollReveal key={i} delay={0.1 + (i * 0.05)} className="p-6 rounded-2xl bg-[#0A0A0A] border border-white/[0.05]">
                <h3 className="text-[18px] font-medium text-white tracking-tight mb-4">{task.task}</h3>
                <ul className="flex flex-col gap-3 relative">
                  <div className="absolute left-[9px] top-2 bottom-2 w-[1px] bg-[#333]" />
                  {task.steps.map((step, idx) => (
                    <li key={idx} className="text-[#8A8A8A] text-sm font-light flex items-start gap-4 relative z-10">
                      <div className="w-[18px] h-[18px] rounded-full bg-[#111] border border-[#333] flex items-center justify-center shrink-0 mt-0.5 text-[9px] text-[#A0A0A0]">
                        {idx + 1}
                      </div>
                      {step}
                    </li>
                  ))}
                </ul>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Troubleshooting */}
        <div>
          <ScrollReveal>
            <h2 className="text-[32px] md:text-[48px] font-serif-editorial font-light mb-12 text-white">Troubleshooting</h2>
          </ScrollReveal>
          <div className="flex flex-col gap-6">
            {troubleshootingData.map((item, i) => (
              <ScrollReveal key={i} delay={0.1 + (i * 0.05)} className="p-6 rounded-2xl bg-[#111] border border-red-500/10">
                <h3 className="text-[18px] font-medium text-white tracking-tight mb-2 flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4 text-red-400" /> {item.issue}
                </h3>
                <p className="text-[#A0A0A0] text-sm font-light leading-relaxed">{item.solution}</p>
              </ScrollReveal>
            ))}
          </div>

          {/* Knowledge Block */}
          <ScrollReveal delay={0.3} className="mt-8">
            <div className="p-6 rounded-2xl bg-[#0A0A0A] border border-[#4F6EF7]/20 flex gap-4 items-start">
              <Settings className="w-6 h-6 text-[#4F6EF7] shrink-0 mt-1" />
              <div>
                <h4 className="text-white font-medium mb-2 tracking-tight">Account & Privacy</h4>
                <p className="text-[#8A8A8A] text-sm leading-relaxed mb-4">
                  Struggling to find where to manage your location access, theme, or connected accounts? All core preferences are managed securely under your Account Settings tab. You maintain absolute control over your abstractions.
                </p>
                <Link href="/company/trust/trust-center" className="text-sm font-medium text-white hover:text-[#4F6EF7] transition-colors underline underline-offset-4 decoration-white/20">
                  Read our Trust Center guidelines →
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Video Learning */}
      <section className="pt-32 px-6 md:px-12 max-w-[1200px] mx-auto">
        <ScrollReveal>
          <h2 className="text-[32px] md:text-[48px] font-serif-editorial font-light mb-12 text-white">Video Learning</h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {videoLearningData.map((video, i) => (
            <ScrollReveal key={i} delay={0.1 + (i * 0.05)} className="group cursor-pointer">
              <div className="aspect-video rounded-2xl bg-[#111] border border-white/[0.05] mb-4 flex items-center justify-center group-hover:border-white/[0.2] transition-colors relative overflow-hidden">
                <PlayCircle className="w-12 h-12 text-[#333] group-hover:text-white transition-colors" />
                <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-md px-2 py-1 rounded-md text-[11px] text-white font-medium">
                  {video.duration}
                </div>
              </div>
              <h3 className="text-[18px] font-medium text-white tracking-tight mb-2 group-hover:text-[#4F6EF7] transition-colors">{video.title}</h3>
              <p className="text-[#8A8A8A] text-sm font-light leading-relaxed">{video.outcome}</p>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Comparison & Unique Concepts */}
      <section className="pt-32 px-6 md:px-12 max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <ScrollReveal>
            <h2 className="text-[32px] md:text-[48px] font-serif-editorial font-light mb-12 text-white">Rheole vs Traditional</h2>
          </ScrollReveal>
          
          <div className="flex flex-col gap-4">
            <ScrollReveal delay={0.1}>
              <div className="p-8 rounded-2xl bg-[#111] border border-red-500/10 opacity-70">
                <h3 className="text-[18px] font-medium text-white tracking-tight mb-6 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500" /> Traditional Help Centers
                </h3>
                <ul className="flex flex-col gap-3">
                  {comparisonData.traditional.map((item, i) => (
                    <li key={i} className="text-[#8A8A8A] text-sm font-light flex items-center gap-3">
                      <span className="w-1 h-1 rounded-full bg-[#333]" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="p-8 rounded-2xl bg-[#0A0A0A] border border-[#4F6EF7]/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#4F6EF7]/5 rounded-bl-full" />
                <h3 className="text-[18px] font-medium text-white tracking-tight mb-6 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#4F6EF7]" /> Rheole Help Center
                </h3>
                <ul className="flex flex-col gap-3">
                  {comparisonData.rheole.map((item, i) => (
                    <li key={i} className="text-[#D0D0D0] text-sm font-light flex items-center gap-3">
                      <span className="w-1 h-1 rounded-full bg-[#4F6EF7]/50" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>

        <div>
          <ScrollReveal>
            <h2 className="text-[32px] md:text-[48px] font-serif-editorial font-light mb-12 text-white">Unique Concepts</h2>
          </ScrollReveal>
          
          <div className="flex flex-col gap-6">
            {uniqueConceptsData.map((concept, i) => (
              <ScrollReveal key={i} delay={0.1 + (i * 0.1)}>
                <div className="p-6 rounded-2xl bg-[#0A0A0A] border border-white/[0.05] hover:border-[#4F6EF7]/30 transition-colors">
                  <h3 className="text-[18px] font-medium text-white tracking-tight mb-2">{concept.title}</h3>
                  <p className="text-[#8A8A8A] text-sm font-light leading-relaxed">{concept.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Continue to FAQs */}
      <section className="pt-32 px-6 md:px-12 max-w-[1000px] mx-auto mb-32">
        <ScrollReveal>
          <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-b from-[#111] to-[#0A0A0A] border border-white/[0.05] flex flex-col items-center text-center">
            <h2 className="text-[32px] md:text-[48px] font-serif-editorial font-light mb-6 text-white">Have more questions?</h2>
            <p className="text-[#8A8A8A] text-lg font-light leading-relaxed mb-8 max-w-[600px]">
              Explore our centralized knowledge base for detailed answers regarding Help Center.
            </p>
            <Link 
              href="/resources/faq#section-6"
              className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full text-sm font-medium hover:bg-[#F2F2F0] transition-colors"
            >
              Read Help Center FAQs
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>
      </section>

      {/* Contact Support & Continue Exploring */}
      <section className="pt-32 px-6 md:px-12 max-w-[1200px] mx-auto border-t border-white/[0.05] mt-32 grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <ScrollReveal>
            <h2 className="text-[32px] font-serif-editorial font-light mb-8 text-white">Contact Support</h2>
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between p-4 bg-[#111] rounded-xl border border-white/[0.05]">
                <div className="flex items-center gap-3">
                  <Zap className="w-5 h-5 text-[#4F6EF7]" />
                  <span className="text-white text-sm font-medium">AI Assistant</span>
                </div>
                <span className="text-[#6A6A6A] text-[11px] uppercase tracking-widest">Instant</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-[#111] rounded-xl border border-white/[0.05]">
                <div className="flex items-center gap-3">
                  <MessagesSquare className="w-5 h-5 text-white" />
                  <span className="text-white text-sm font-medium">Community Forum</span>
                </div>
                <span className="text-[#6A6A6A] text-[11px] uppercase tracking-widest">Peer-to-Peer</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-[#111] rounded-xl border border-white/[0.05]">
                <div className="flex items-center gap-3">
                  <Code className="w-5 h-5 text-white" />
                  <span className="text-white text-sm font-medium">Developer Support</span>
                </div>
                <Link href="/platform/support" className="text-[#4F6EF7] text-[12px] hover:underline">Go to Dev Portal</Link>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <div>
          <ScrollReveal delay={0.2}>
            <Compass className="w-10 h-10 text-[#4F6EF7] mb-6 opacity-80" />
            <h2 className="text-[32px] font-serif-editorial font-light mb-6 text-white">Continue Exploring</h2>
            <p className="text-[#8A8A8A] text-lg font-light leading-relaxed mb-6">
              Learning should evolve alongside the platform. As Rheole grows, the Help Center grows with it.
            </p>
            <p className="text-[#D0D0D0] text-lg font-light leading-relaxed">
              Every new feature becomes another opportunity to help people better understand the world around them.
            </p>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}
