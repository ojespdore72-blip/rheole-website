"use client";

import React from "react";
import Link from "next/link";
import RheoleLogo from "./logo";
import ScrollReveal from "./ScrollReveal";

export default function Footer({ isGlobal = false }: { isGlobal?: boolean }) {
  const footerCategories = [
    {
      title: "Platform",
      links: [
        { name: "Manifesto", path: "/manifesto" },
        { name: "About", path: "/about" },
        { name: "Intelligence", path: "/intelligence" },
        { name: "Company", path: "/about" },
        { name: "Founder Letter", path: "/founder-letter" },
        { name: "Careers", path: "/careers" },
        { name: "Contact", path: "/contact" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy", path: "/privacy" },
        { name: "Terms", path: "/terms" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Research", path: "/research" },
        { name: "Developers", path: "#", badge: "Coming Soon" },
        { name: "Status", path: "#", badge: "Coming Soon" },
        { name: "Roadmap", path: "#", badge: "Coming Soon" },
      ],
    },
    {
      title: "Social",
      links: [
        { name: "LinkedIn", path: "#" },
        { name: "X", path: "#" },
        { name: "GitHub", path: "#" },
        { name: "Instagram", path: "#" },
      ],
    },
  ];

  return (
    <footer className="w-full bg-[#030303] pt-32 pb-16 overflow-hidden z-10 relative font-sans">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col gap-32">
        
        {/* Large Editorial Statement */}
        <ScrollReveal>
          <div className="flex flex-col gap-8 md:gap-12 max-w-[800px]">
            <RheoleLogo className="h-[28px] w-auto opacity-90" />
            <h2 className="text-[32px] md:text-[56px] text-[#F2F2F0] font-serif-editorial font-light leading-[1.1] tracking-tight">
              The world is already moving.<br className="hidden md:block" />
              <span className="text-[#A0A0A0]">Rheole simply helps you understand it.</span>
            </h2>
          </div>
        </ScrollReveal>

        {/* Navigation Columns */}
        <ScrollReveal delay={0.1}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
            {footerCategories.map((category) => (
              <div key={category.title} className="flex flex-col gap-8">
                <h4 className="text-[12px] uppercase tracking-[0.2em] text-[#F2F2F0] font-medium">
                  {category.title}
                </h4>
                <ul className="flex flex-col gap-5">
                  {category.links.map((link) => (
                    <li key={link.name}>
                      <Link 
                        href={link.path}
                        className="group inline-flex items-center gap-3 text-[15px] text-[#6A6A6A] transition-colors duration-300 hover:text-[#F2F2F0]"
                      >
                        <span className="relative">
                          {link.name}
                          <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-[#F2F2F0] transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100" />
                        </span>
                        {link.badge && (
                          <span className="text-[10px] uppercase tracking-wider bg-white/[0.03] border border-white/[0.05] px-2 py-0.5 rounded-full text-[#4A4A4A]">
                            {link.badge}
                          </span>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Bottom Details */}
        <ScrollReveal delay={0.2}>
          <div className="flex flex-col gap-8">
            <div className="w-full h-[1px] bg-gradient-to-r from-white/[0.08] via-white/[0.02] to-transparent" />
            
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
              <div className="flex flex-col gap-2">
                <p className="text-[13px] text-[#8A8A8A] font-light max-w-[400px] leading-relaxed">
                  Rheole is an intelligence platform designed to bridge the gap between human intent and physical reality.
                </p>
                <div className="flex items-center gap-4 mt-2">
                  <p className="text-[12px] text-[#4A4A4A]">
                    © {new Date().getFullYear()} IKHAGA LTD. All rights reserved.
                  </p>
                  <span className="w-1 h-1 rounded-full bg-[#4A4A4A]" />
                  <p className="text-[12px] text-[#4A4A4A]">
                    Designed in London.
                  </p>
                </div>
              </div>

              <Link href="/" className="opacity-40 hover:opacity-100 transition-opacity duration-300">
                <RheoleLogo variant="icon" className="h-[24px] w-auto" />
              </Link>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </footer>
  );
}
