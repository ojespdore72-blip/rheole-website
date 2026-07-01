"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowUp, Globe } from "lucide-react";
import RheoleLogo from "./logo";

const footerData = {
  Platform: ["Discover", "Navigation", "Connect", "Intelligence"],
  Technology: ["Developers", "APIs", "Documentation", "SDKs", "Status"],
  Research: ["Publications", "Case Studies", "AI", "Urban Computing", "Whitepapers"],
  Company: ["About", "Manifesto", "Careers", "Contact", "Newsroom", "Brand"],
  Trust: ["Security", "Privacy", "Trust Center", "Community Guidelines", "Terms"],
  Developers: ["GitHub", "API Reference", "SDK Downloads", "Examples", "Support"],
  Resources: ["Blog", "Help Center", "FAQ", "Roadmap", "Release Notes"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookies", "Licenses", "Open Source", "Accessibility"]
};

export default function Footer({ isGlobal = false }: { isGlobal?: boolean }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#020202] pt-32 pb-12 overflow-hidden z-10 relative font-sans">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col gap-24">
        
        {/* Top Editorial Section */}
        <div className="flex flex-col items-start gap-6 max-w-[800px]">
          <RheoleLogo className="h-[24px] w-auto opacity-90 self-start" />
          <h2 className="text-[24px] md:text-[36px] text-white font-serif-editorial font-light leading-[1.2] tracking-tight">
            Designed to understand the world around you.
          </h2>
          <p className="text-[16px] md:text-[18px] text-[#A0A0A0] font-light leading-relaxed max-w-[600px]">
            Rheole is a spatial intelligence platform bridging the gap between human intent and physical reality. We build tools that make the world more legible, navigable, and connected.
          </p>
        </div>

        {/* Massive 8-Column Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-x-6 gap-y-16 pt-16">
          {Object.entries(footerData).map(([title, links]) => (
            <div key={title} className="flex flex-col gap-6">
              <h4 className="text-[12px] font-semibold text-white tracking-wide">
                {title}
              </h4>
              <ul className="flex flex-col gap-4">
                {links.map((link) => {
                  const route = link === "Movement" ? "/movement-intelligence" : 
                                link === "Opportunities" ? "/opportunity-intelligence" : 
                                link === "Local groups" ? "/local-coordination" : 
                                link === "Nearby Presence" ? "/presence-intelligence" : 
                                link === "Neighbourhood" ? "/neighbourhood-intelligence" : 
                                link === "User intent" ? "/intent-intelligence" : 
                                link === "Contextual intelligence" ? "/context-intelligence" : 
                                link === "Environmental Intelligence" ? "/environmental-intelligence" : 
                                link === "Curiosity Intelligence" ? "/curiosity-intelligence" : 
                                link === "Personal rhythm" ? "/rhythm-intelligence" : 
                                link === "Privacy Policy" ? "/privacy" :
                                link === "Terms of Service" ? "/terms" :
                                link === "Terms" ? "/terms" :
                                link === "Case Studies" ? "/research/case-studies" :
                                link === "AI" ? "/research/ai-research" :
                                link === "Urban Computing" ? "/research/urban-computing" :
                                link === "API Reference" ? "/platform/api-references" :
                                link === "Discover" ? "/platform/discover" :
                                link === "Navigation" ? "/platform/navigation" :
                                link === "Connect" ? "/platform/connect" :
                                link === "Intelligence" ? "/platform/intelligence" :
                                `/${link.toLowerCase().replace(/\s+/g, '-')}`;
                  return (
                  <li key={link}>
                    <Link 
                      href={route}
                      prefetch={false}
                      className="group inline-flex items-center gap-1 text-[13px] text-[#8A8A8A] transition-colors duration-300 hover:text-[#F2F2F0] outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded-sm"
                    >
                      <span className="relative">
                        {link}
                        <span className="absolute left-0 -bottom-1 w-full h-[1px] bg-[#F2F2F0] scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100 opacity-50" />
                      </span>
                    </Link>
                  </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Footer Section */}
        <div className="flex flex-col gap-8 pt-12">
          {/* Top of Bottom Footer: Social & Tools */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div className="flex items-center gap-5 text-[#8A8A8A]">
              {/* Social icons removed per user request */}
            </div>
            
            <div className="flex items-center gap-6">
              <button className="flex items-center gap-2 text-[13px] text-[#8A8A8A] hover:text-white transition-colors">
                <Globe size={16} strokeWidth={1.5} />
                English (IN)
              </button>
              <button 
                onClick={scrollToTop}
                className="flex items-center gap-2 text-[13px] text-[#8A8A8A] hover:text-white transition-colors group"
              >
                Back to top
                <div className="w-6 h-6 rounded-full bg-white/[0.05] flex items-center justify-center group-hover:bg-white/[0.1] transition-colors">
                  <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </button>
            </div>
          </div>

          {/* Bottom of Bottom Footer: Legal & Copyright */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 text-[12px] text-[#6A6A6A]">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <p>Copyright © 2026 Rheole Technologies Inc. All rights reserved.</p>
            </div>
            
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <Link href="/privacy" prefetch={false} className="hover:text-white transition-colors">Privacy Policy</Link>
              <span className="hidden lg:block w-1 h-1 rounded-full bg-[#3A3A3A]" />
              <Link href="/terms" prefetch={false} className="hover:text-white transition-colors">Terms of Use</Link>
              <span className="hidden lg:block w-1 h-1 rounded-full bg-[#3A3A3A]" />
              <Link href="/terms" prefetch={false} className="hover:text-white transition-colors">Sales Policy</Link>
              <span className="hidden lg:block w-1 h-1 rounded-full bg-[#3A3A3A]" />
              <Link href="/terms" prefetch={false} className="hover:text-white transition-colors">Legal</Link>
              <span className="hidden lg:block w-1 h-1 rounded-full bg-[#3A3A3A]" />
              <Link href="/sitemap.xml" prefetch={false} className="hover:text-white transition-colors">Site Map</Link>
              <span className="w-1 h-1 rounded-full bg-[#3A3A3A] ml-2" />
              <span>Version 2.0.0</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
