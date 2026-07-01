"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import { HelpCircle, ChevronDown, ArrowRight } from "lucide-react";
import { allFaqsData } from "@/lib/data/faq";

export default function FaqPage() {
  const [activeFaq, setActiveFaq] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    if (activeFaq === id) {
      setActiveFaq(null);
    } else {
      setActiveFaq(id);
    }
  };

  return (
    <div className="min-h-screen bg-[#080808] text-[#F2F2F0] selection:bg-[#4F6EF7]/30 selection:text-[#F2F2F0] pb-32">
      
      {/* Hero Section */}
      <section className="pt-32 px-6 md:px-12 max-w-[1200px] mx-auto flex flex-col gap-8 mb-24">
        <ScrollReveal>
          <span className="text-[11px] uppercase tracking-[0.2em] text-[#6A6A6A] font-medium flex items-center gap-3">
            <HelpCircle className="w-4 h-4 text-[#4F6EF7]" /> Centralized Knowledge Base
          </span>
        </ScrollReveal>
        
        <ScrollReveal delay={0.1}>
          <h1 className="text-[48px] md:text-[80px] lg:text-[100px] text-[#F2F2F0] font-serif-editorial font-light leading-[1.05] tracking-tight">
            Frequently Asked<br />Questions.
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="text-[20px] md:text-[28px] text-[#8A8A8A] font-light max-w-[800px] leading-relaxed">
            <p>
              A consolidated repository of all questions across the Rheole ecosystem. From API references and AI architecture to privacy policies and urban computing.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* FAQ Sections */}
      <div className="px-6 md:px-12 max-w-[1000px] mx-auto flex flex-col gap-32">
        {allFaqsData.map((section, sectionIdx) => (
          <section key={section.id} id={section.id} className="scroll-mt-32">
            <ScrollReveal>
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/[0.1]">
                <h2 className="text-[32px] md:text-[40px] font-serif-editorial font-light text-white flex items-center gap-4">
                  <span className="text-[#4F6EF7] opacity-50 font-sans text-xl">{sectionIdx + 1}</span>
                  {section.title}
                </h2>
              </div>
            </ScrollReveal>

            <div className="flex flex-col gap-2">
              {section.questions.map((faq, faqIdx) => {
                const uniqueId = `${section.id}-q${faqIdx}`;
                const isActive = activeFaq === uniqueId;
                
                return (
                  <ScrollReveal key={uniqueId} delay={0.05 + (faqIdx * 0.02)}>
                    <div className="border-b border-white/[0.05] overflow-hidden">
                      <button 
                        onClick={() => toggleFaq(uniqueId)}
                        className="w-full py-6 flex items-center justify-between text-left group"
                      >
                        <span className={`text-[18px] md:text-[22px] font-light transition-colors duration-300 ${isActive ? 'text-white' : 'text-[#A0A0A0] group-hover:text-[#D0D0D0]'}`}>
                          {faq.q}
                        </span>
                        <ChevronDown className={`w-5 h-5 text-[#6A6A6A] shrink-0 ml-4 transition-transform duration-500 ${isActive ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {isActive && (
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
                );
              })}
            </div>
          </section>
        ))}
      </div>

    </div>
  );
}
