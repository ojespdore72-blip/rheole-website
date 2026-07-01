"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { ArrowLeft } from "lucide-react";

export default function DiscoverPage() {
  const subFeatures = [
    { title: "Places", desc: "Understanding the true context of physical locations.", link: "/platform/discover/places" },
    { title: "Events", desc: "Temporal occurrences happening right now around you.", link: "/platform/discover/events" },
    { title: "Communities", desc: "Shared interests mapped geographically.", link: "/platform/discover/communities" },
    { title: "Businesses", desc: "Commercial density and live economic context.", link: "/platform/discover/businesses" },
    { title: "New exploration", desc: "Serendipitous discovery driven by ambient computing.", link: "/platform/discover/exploration" }
  ];

  return (
    <div className="min-h-screen bg-[#080808] text-[#F2F2F0] selection:bg-[#4F6EF7]/30 selection:text-[#F2F2F0] pb-32">
      
      {/* Navigation */}
      <div className="pt-32 px-6 md:px-12 max-w-[1200px] mx-auto">
        <Link href="/platform" className="inline-flex items-center gap-2 text-[#8A8A8A] hover:text-white transition-colors text-sm font-medium uppercase tracking-widest">
          <ArrowLeft className="w-4 h-4" /> Back to Platform
        </Link>
      </div>

      {/* Header */}
      <section className="pt-24 px-6 md:px-12 max-w-[1200px] mx-auto flex flex-col gap-8">
        <ScrollReveal>
          <span className="text-[11px] uppercase tracking-[0.2em] text-[#6A6A6A] font-medium">Platform Pillar</span>
        </ScrollReveal>
        
        <ScrollReveal delay={0.1}>
          <h1 className="text-[48px] md:text-[80px] lg:text-[100px] text-[#F2F2F0] font-serif-editorial font-light leading-[1.05] tracking-tight">
            Discover
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-[20px] md:text-[28px] text-[#8A8A8A] font-light max-w-[700px] leading-relaxed">
            Helping people understand what exists around them. Not just places, but the context of those places. Real-time atmosphere, crowdedness, and relevance to your current intent.
          </p>
        </ScrollReveal>
      </section>

      {/* Sub-features Grid */}
      <section className="pt-32 px-6 md:px-12 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subFeatures.map((feature, i) => (
            <ScrollReveal key={i} delay={0.3 + (i * 0.1)} className="h-full">
              <Link href={feature.link} className="block h-full cursor-pointer hover:scale-[1.02] transition-transform duration-500">
                <div className="h-full flex flex-col gap-6 p-8 border border-white/[0.05] bg-[#0A0A0A] rounded-2xl hover:bg-white/[0.02] hover:border-white/[0.15] transition-all duration-500">
                  <h3 className="text-[24px] font-medium text-white tracking-tight">{feature.title}</h3>
                  <p className="text-[15px] text-[#A0A0A0] leading-relaxed font-light flex-1">
                    {feature.desc}
                  </p>
                  <div className="w-full h-[1px] bg-white/[0.05]" />
                  <span className="text-[12px] uppercase tracking-widest text-[#6A6A6A] font-medium group-hover:text-white transition-colors">Explore →</span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  );
}
