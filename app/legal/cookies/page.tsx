"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import { ChevronDown, Cookie, Shield, Server, ArrowRight, Settings2, HelpCircle } from "lucide-react";
import { cookieReasonsData, cookieCategoriesData, similarTechnologiesData, thirdPartyData, faqsData } from "@/lib/data/cookies";

export default function CookiesPolicyPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#080808] text-[#F2F2F0] selection:bg-[#4F6EF7]/30 selection:text-[#F2F2F0] pb-32">
      
      {/* Introduction */}
      <section className="pt-32 px-6 md:px-12 max-w-[1000px] mx-auto flex flex-col gap-8">
        <ScrollReveal>
          <span className="text-[11px] uppercase tracking-[0.2em] text-[#6A6A6A] font-medium flex items-center gap-3">
            <Cookie className="w-4 h-4 text-[#4F6EF7]" /> Rheole Legal / Cookies
          </span>
        </ScrollReveal>
        
        <ScrollReveal delay={0.1}>
          <h1 className="text-[48px] md:text-[80px] lg:text-[100px] text-[#F2F2F0] font-serif-editorial font-light leading-[1.05] tracking-tight">
            Transparency begins<br />with understanding.
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="text-[20px] md:text-[28px] text-[#8A8A8A] font-light max-w-[700px] leading-relaxed flex flex-col gap-6">
            <p>
              Technology should explain itself. Cookies are small pieces of information that help websites remember preferences, maintain secure sessions, and improve the browsing experience. 
            </p>
            <p>
              They are not inherently good or bad. What matters is how they are used. Rheole believes users deserve complete transparency and meaningful control over these technologies.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* What Are Cookies */}
      <section className="pt-32 px-6 md:px-12 max-w-[1000px] mx-auto">
        <ScrollReveal>
          <h2 className="text-[32px] md:text-[48px] font-serif-editorial font-light mb-8 text-white">What Are Cookies?</h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <div className="prose prose-invert prose-lg max-w-none text-[#A0A0A0] font-light leading-relaxed">
            <p>
              A cookie is a small text file that a website saves on your computer or mobile device when you visit the site. It enables the website to remember your actions and preferences (such as login, language, font size, and other display preferences) over a period of time.
            </p>
            <p>
              <strong>First-party cookies</strong> are cookies set by the website you’re visiting. Only that website can read them. In addition, a website might potentially use external services, which also set their own cookies, known as <strong>third-party cookies</strong>.
            </p>
            <p>
              <strong>Persistent cookies</strong> are saved on your computer and are not deleted automatically when you quit your browser, unlike a <strong>session cookie</strong>, which is deleted when you quit your browser.
            </p>
          </div>
        </ScrollReveal>

        {/* Knowledge Block */}
        <ScrollReveal delay={0.2} className="mt-12">
          <div className="p-6 rounded-2xl bg-[#111] border border-white/[0.05] flex gap-6 items-start">
            <Shield className="w-6 h-6 text-[#4F6EF7] shrink-0 mt-1" />
            <div>
              <h4 className="text-white font-medium mb-2 tracking-tight">Privacy Fact</h4>
              <p className="text-[#8A8A8A] text-sm leading-relaxed">
                Cookies themselves are simply plain text files. They cannot execute code, deliver viruses, or independently search your device for personal information.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Why Rheole Uses Cookies */}
      <section className="pt-32 px-6 md:px-12 max-w-[1000px] mx-auto">
        <ScrollReveal>
          <h2 className="text-[32px] md:text-[48px] font-serif-editorial font-light mb-8 text-white">Why Rheole Uses Cookies</h2>
          <p className="text-[#A0A0A0] text-lg font-light leading-relaxed mb-12">
            We use strictly necessary technologies to make our site work. We do not use cookies for cross-site tracking or advertising profiling.
          </p>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          {cookieReasonsData.map((reason, i) => (
            <ScrollReveal key={i} delay={0.1 + (i * 0.05)} className="flex gap-4 items-start">
              <div className="w-1.5 h-1.5 rounded-full bg-[#4F6EF7] mt-2.5 shrink-0" />
              <p className="text-[#D0D0D0] font-light leading-relaxed">{reason}</p>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Cookie Categories */}
      <section className="pt-32 px-6 md:px-12 max-w-[1000px] mx-auto">
        <ScrollReveal>
          <h2 className="text-[32px] md:text-[48px] font-serif-editorial font-light mb-12 text-white">Cookie Categories</h2>
        </ScrollReveal>
        
        <div className="flex flex-col gap-8">
          {cookieCategoriesData.map((category, i) => (
            <ScrollReveal key={i} delay={0.1 + (i * 0.1)}>
              <div className="p-8 rounded-2xl bg-[#0A0A0A] border border-white/[0.05] hover:border-white/[0.15] transition-colors">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-[24px] font-medium text-white tracking-tight">{category.title}</h3>
                  <span className={`text-[11px] uppercase tracking-widest font-medium px-3 py-1 rounded-full ${category.canDisable === 'Yes' ? 'bg-[#4F6EF7]/10 text-[#4F6EF7] border border-[#4F6EF7]/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'}`}>
                    Can Disable: {category.canDisable}
                  </span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="md:col-span-2">
                    <h4 className="text-[12px] uppercase tracking-widest text-[#6A6A6A] font-medium mb-2">Purpose</h4>
                    <p className="text-[#A0A0A0] text-sm font-light leading-relaxed mb-6">{category.purpose}</p>
                    
                    <h4 className="text-[12px] uppercase tracking-widest text-[#6A6A6A] font-medium mb-2">Examples</h4>
                    <p className="text-[#A0A0A0] text-sm font-light leading-relaxed">{category.examples}</p>
                  </div>
                  <div>
                    <h4 className="text-[12px] uppercase tracking-widest text-[#6A6A6A] font-medium mb-2">Impact if Disabled</h4>
                    <p className="text-[#8A8A8A] text-sm font-light leading-relaxed p-4 bg-[#111] rounded-xl border border-white/[0.05]">
                      {category.impact}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Similar Technologies */}
      <section className="pt-32 px-6 md:px-12 max-w-[1000px] mx-auto">
        <ScrollReveal>
          <h2 className="text-[32px] md:text-[48px] font-serif-editorial font-light mb-8 text-white">Similar Technologies</h2>
          <p className="text-[#A0A0A0] text-lg font-light leading-relaxed mb-12">
            While &quot;cookies&quot; is the standard term, websites rely on several underlying storage mechanisms built into modern browsers.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {similarTechnologiesData.map((tech, i) => (
            <ScrollReveal key={i} delay={0.1 + (i * 0.1)} className="p-8 rounded-2xl bg-[#0A0A0A] border border-white/[0.05]">
              <Server className="w-6 h-6 text-[#6A6A6A] mb-6" />
              <h3 className="text-[20px] font-medium text-white tracking-tight mb-4">{tech.title}</h3>
              <p className="text-[#A0A0A0] text-sm font-light leading-relaxed">{tech.description}</p>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Cookie Lifecycle Diagram */}
      <section className="pt-32 px-6 md:px-12 max-w-[1000px] mx-auto">
        <ScrollReveal>
          <h2 className="text-[32px] md:text-[48px] font-serif-editorial font-light mb-12 text-white">Cookie Lifecycle</h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-12 rounded-3xl bg-[#0A0A0A] border border-white/[0.05]">
            <div className="flex flex-col items-center text-center max-w-[150px]">
              <div className="w-16 h-16 rounded-full bg-[#111] border border-white/[0.1] flex items-center justify-center mb-4 text-[#A0A0A0]">
                1
              </div>
              <h4 className="text-white font-medium text-sm">Visit Website</h4>
            </div>
            
            <ArrowRight className="w-6 h-6 text-[#333] hidden md:block" />
            <div className="w-[1px] h-6 bg-[#333] md:hidden" />

            <div className="flex flex-col items-center text-center max-w-[150px]">
              <div className="w-16 h-16 rounded-full bg-[#111] border border-[#4F6EF7]/30 flex items-center justify-center mb-4 text-[#4F6EF7]">
                2
              </div>
              <h4 className="text-white font-medium text-sm">Cookie Created</h4>
            </div>

            <ArrowRight className="w-6 h-6 text-[#333] hidden md:block" />
            <div className="w-[1px] h-6 bg-[#333] md:hidden" />

            <div className="flex flex-col items-center text-center max-w-[150px]">
              <div className="w-16 h-16 rounded-full bg-[#111] border border-white/[0.1] flex items-center justify-center mb-4 text-[#A0A0A0]">
                3
              </div>
              <h4 className="text-white font-medium text-sm">Purpose Fulfilled</h4>
            </div>

            <ArrowRight className="w-6 h-6 text-[#333] hidden md:block" />
            <div className="w-[1px] h-6 bg-[#333] md:hidden" />

            <div className="flex flex-col items-center text-center max-w-[150px]">
              <div className="w-16 h-16 rounded-full bg-[#111] border border-red-500/30 flex items-center justify-center mb-4 text-red-400">
                4
              </div>
              <h4 className="text-white font-medium text-sm">Expiration</h4>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Your Choices & Third Party Services */}
      <section className="pt-32 px-6 md:px-12 max-w-[1000px] mx-auto">
        <ScrollReveal>
          <h2 className="text-[32px] md:text-[48px] font-serif-editorial font-light mb-8 text-white">Third-Party Services</h2>
          <p className="text-[#A0A0A0] text-lg font-light leading-relaxed mb-12">
            We minimize external dependencies. Where third-party services are used, they are bound by strict contractual obligations aligned with our Privacy Architecture.
          </p>
        </ScrollReveal>

        <div className="flex flex-col gap-6">
          {thirdPartyData.map((tp, i) => (
            <ScrollReveal key={i} delay={0.1 + (i * 0.1)} className="p-8 rounded-2xl bg-[#0A0A0A] border border-white/[0.05] grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="md:col-span-1">
                <h3 className="text-[18px] font-medium text-white tracking-tight">{tp.name}</h3>
              </div>
              <div className="md:col-span-3 grid grid-cols-1 gap-6">
                <div>
                  <h4 className="text-[11px] uppercase tracking-widest text-[#6A6A6A] font-medium mb-2">Why it is used</h4>
                  <p className="text-[#A0A0A0] text-sm font-light">{tp.why}</p>
                </div>
                <div>
                  <h4 className="text-[11px] uppercase tracking-widest text-[#6A6A6A] font-medium mb-2">Information Processed</h4>
                  <p className="text-[#A0A0A0] text-sm font-light">{tp.processed}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
        
        {/* Knowledge Block */}
        <ScrollReveal delay={0.4} className="mt-12">
          <div className="p-6 rounded-2xl bg-[#111] border border-white/[0.05] flex gap-6 items-start">
            <Settings2 className="w-6 h-6 text-[#4F6EF7] shrink-0 mt-1" />
            <div>
              <h4 className="text-white font-medium mb-2 tracking-tight">Your Choices</h4>
              <p className="text-[#8A8A8A] text-sm leading-relaxed mb-4">
                You have absolute control over non-essential cookies. You can accept or decline optional cookies at any time by updating your preferences in the footer. Furthermore, you can clear all cookies and site data directly through your browser&apos;s security settings.
              </p>
              <Link href="/company/trust/privacy" className="text-sm font-medium text-white hover:text-[#4F6EF7] transition-colors underline underline-offset-4 decoration-white/20">
                Read our full Privacy Architecture →
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Frequently Asked Questions */}
      <section className="pt-32 px-6 md:px-12 max-w-[1000px] mx-auto">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-12">
            <HelpCircle className="w-8 h-8 text-[#4F6EF7]" />
            <h2 className="text-[32px] md:text-[48px] font-serif-editorial font-light text-white">Frequently Asked Questions</h2>
          </div>
        </ScrollReveal>

        <div className="flex flex-col gap-2">
          {faqsData.map((faq, i) => (
            <ScrollReveal key={i} delay={0.1 + (i * 0.02)}>
              <div 
                className="border-b border-white/[0.05] overflow-hidden"
              >
                <button 
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full py-6 flex items-center justify-between text-left group"
                >
                  <span className={`text-[18px] md:text-[22px] font-light transition-colors duration-300 ${activeFaq === i ? 'text-white' : 'text-[#A0A0A0] group-hover:text-[#D0D0D0]'}`}>
                    {faq.q}
                  </span>
                  <ChevronDown className={`w-5 h-5 text-[#6A6A6A] transition-transform duration-500 ${activeFaq === i ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {activeFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <p className="pb-8 text-[#8A8A8A] text-[16px] font-light leading-relaxed max-w-[800px]">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Updates and Contact */}
      <section className="pt-32 px-6 md:px-12 max-w-[1000px] mx-auto border-t border-white/[0.05] mt-32">
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-[20px] font-medium text-white tracking-tight mb-4">Updates to this Policy</h3>
              <p className="text-[#8A8A8A] text-sm font-light leading-relaxed">
                As our technology stack and regulatory environments evolve, we may update this policy. Significant changes will be accompanied by an update to the effective date. We encourage you to review this page periodically.
              </p>
            </div>
            <div>
              <h3 className="text-[20px] font-medium text-white tracking-tight mb-4">Contact our Privacy Team</h3>
              <p className="text-[#8A8A8A] text-sm font-light leading-relaxed mb-6">
                If you have questions about our use of cookies or other technologies, please consult our Trust Center or contact us directly.
              </p>
              <div className="flex gap-4">
                <Link href="/company/trust/trust-center" className="text-sm uppercase tracking-widest font-medium text-[#A0A0A0] hover:text-white transition-colors underline underline-offset-4 decoration-white/20">
                  Trust Center
                </Link>
                <Link href="/company/connect/contact" className="text-sm uppercase tracking-widest font-medium text-[#A0A0A0] hover:text-white transition-colors underline underline-offset-4 decoration-white/20">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

    </div>
  );
}
