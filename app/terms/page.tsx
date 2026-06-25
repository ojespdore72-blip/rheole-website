"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TermsSection {
  id: string;
  title: string;
  desc: React.ReactNode;
}

interface GlossaryItem {
  term: string;
  definition: string;
}

export default function Terms() {
  const [activeSection, setActiveSection] = useState("acceptance");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeGlossaryTerm, setActiveGlossaryTerm] = useState<string | null>(null);

  const sections: TermsSection[] = [
    {
      id: "1-introduction",
      title: "1. Introduction",
      desc: (
        <div className="flex flex-col gap-3 font-sans">
        <p>Welcome to Rheole, a platform developed and operated by <strong>Ikhaga Private Limited</strong> ("Ikhaga," "we," "us," or "our"). Our mission is to become the intelligence layer between people and the physical world. </p>
        <p>These Terms of Service ("Terms") are a legally binding contract between you and Ikhaga Private Limited. By downloading, accessing, or using the Rheole platform—including our mobile apps, websites, AI intelligence features, and future Developer APIs (collectively, the "Services")—you agree to be bound by these Terms. </p>
        <p><strong>If you do not agree to these Terms, you may not use Rheole.</strong></p>
        </div>
      )
    },
    {
      id: "2-eligibility-and-accounts",
      title: "2. Eligibility and Accounts",
      desc: (
        <div className="flex flex-col gap-8 font-sans">
        <div>
        <h4 className="font-semibold text-brand-blue dark:text-luxury-white mb-2 text-base">2.1. Eligibility</h4>
        <p>To use Rheole, you must:
        *   Be at least 13 years of age (or older if required by your country of residence).
        *   Not be prohibited from receiving the Services under the laws of your applicable jurisdiction.
        *   Not have been previously suspended or removed from Rheole.</p>
        </div>
        <div>
        <h4 className="font-semibold text-brand-blue dark:text-luxury-white mb-2 text-base">2.2. Account Creation and Security</h4>
        <p>To access most features, including our Waitlist & Referral System or Founding Access Program, you must create an account. You agree to provide accurate, current, and complete information. You are entirely responsible for maintaining the security of your authentication credentials (including passwords or Passkeys) and for all activities that occur under your account. You must immediately notify us of any unauthorized access.</p>
        </div>
        <div>
        <h4 className="font-semibold text-brand-blue dark:text-luxury-white mb-2 text-base">2.3. Username Rules</h4>
        <p>Usernames must comply with our <strong>Community Guidelines</strong>. We reserve the right to reclaim, reassign, or remove usernames that are inactive, violate intellectual property rights, or impersonate others. Selling, buying, or soliciting usernames is strictly prohibited.</p>
        </div>
        </div>
      )
    },
    {
      id: "3-your-use-of-the-services",
      title: "3. Your Use of the Services",
      desc: (
        <div className="flex flex-col gap-8 font-sans">
        <div>
        <h4 className="font-semibold text-brand-blue dark:text-luxury-white mb-2 text-base">3.1. Acceptable Use</h4>
        <p>You agree to use Rheole only for its intended purposes. You must comply with our <strong>Acceptable Use Policy</strong> and <strong>Community Guidelines</strong> at all times. You agree not to:
        *   Use the Services for any illegal or unauthorized purpose.
        *   Engage in harassment, bullying, impersonation, fraud, or spam.
        *   Upload viruses, malware, or malicious code.
        *   Attempt to reverse engineer, decompile, or hack the Services.
        *   Manipulate location data or abuse the spatial intelligence features.</p>
        </div>
        <div>
        <h4 className="font-semibold text-brand-blue dark:text-luxury-white mb-2 text-base">3.2. User-Generated Content (UGC)</h4>
        <p>You are solely responsible for any text, images, location data, event details, or other media you create, upload, or share on Rheole ("Your Content").</p>
        </div>
        <div>
        <h4 className="font-semibold text-brand-blue dark:text-luxury-white mb-2 text-base">3.3. Intellectual Property and Licensing</h4>
        <p>You retain all ownership rights to Your Content. However, by sharing Your Content on Rheole, you grant Ikhaga Private Limited a worldwide, royalty-free, sublicensable, and transferable license to host, store, use, display, reproduce, modify, and distribute Your Content solely for the purposes of operating, developing, and providing the Services. </p>
        <p>This license ends when you delete Your Content or your account, subject to technical limitations regarding backups and cache, or if the content has been shared with others who have not deleted it.</p>
        </div>
        </div>
      )
    },
    {
      id: "4-ai-usage-and-spatial-intelligence",
      title: "4. AI Usage and Spatial Intelligence",
      desc: (
        <div className="flex flex-col gap-8 font-sans">
        <p>Rheole employs advanced AI Intelligence and Spatial Intelligence features.</p>
        <div>
        <h4 className="font-semibold text-brand-blue dark:text-luxury-white mb-2 text-base">4.1. AI Interactions</h4>
        <p>When you interact with Rheole's AI features, you understand that the outputs generated are for informational and navigational purposes. While we strive for accuracy, AI systems may occasionally produce inaccurate, biased, or incomplete information. Please review our <strong>AI Transparency Policy</strong> for more details.</p>
        </div>
        <div>
        <h4 className="font-semibold text-brand-blue dark:text-luxury-white mb-2 text-base">4.2. Location Data</h4>
        <p>Our Intelligent Navigation and Local Discovery features rely on location data. You are responsible for paying attention to your physical surroundings and obeying all local traffic and safety laws. Do not rely solely on Rheole in emergency situations.</p>
        </div>
        </div>
      )
    },
    {
      id: "5-premium-features-and-subscriptions",
      title: "5. Premium Features and Subscriptions",
      desc: (
        <div className="flex flex-col gap-8 font-sans">
        <div>
        <h4 className="font-semibold text-brand-blue dark:text-luxury-white mb-2 text-base">5.1. Founding Access and Premium AI</h4>
        <p>Rheole may offer Founding Access Programs, Premium AI Features, or other subscriptions. By enrolling in a paid subscription, you agree to pay the fees specified at the time of purchase.</p>
        </div>
        <div>
        <h4 className="font-semibold text-brand-blue dark:text-luxury-white mb-2 text-base">5.2. Payments and Billing</h4>
        <p>All payments are processed securely through third-party payment processors. Your subscription will automatically renew unless canceled prior to the renewal date.</p>
        </div>
        <div>
        <h4 className="font-semibold text-brand-blue dark:text-luxury-white mb-2 text-base">5.3. Refunds</h4>
        <p>Unless required by law, all purchases are final and non-refundable.</p>
        </div>
        </div>
      )
    },
    {
      id: "6-termination-and-suspension",
      title: "6. Termination and Suspension",
      desc: (
        <div className="flex flex-col gap-8 font-sans">
        <div>
        <h4 className="font-semibold text-brand-blue dark:text-luxury-white mb-2 text-base">6.1. By You</h4>
        <p>You may terminate this agreement at any time by deleting your account and discontinuing use of the Services.</p>
        </div>
        <div>
        <h4 className="font-semibold text-brand-blue dark:text-luxury-white mb-2 text-base">6.2. By Us</h4>
        <p>We reserve the right to suspend or terminate your account, restrict your access, or remove Your Content at any time, with or without notice, if we determine you have violated these Terms, the Community Guidelines, or the Acceptable Use Policy, or if your actions pose a legal risk to Ikhaga Private Limited or other users.</p>
        </div>
        </div>
      )
    },
    {
      id: "7-disclaimers-and-limitations-of-liability",
      title: "7. Disclaimers and Limitations of Liability",
      desc: (
        <div className="flex flex-col gap-8 font-sans">
        <div>
        <h4 className="font-semibold text-brand-blue dark:text-luxury-white mb-2 text-base">7.1. Disclaimers</h4>
        <p><strong>RHEOLE IS PROVIDED "AS IS" AND "AS AVAILABLE."</strong> TO THE MAXIMUM EXTENT PERMITTED BY LAW, IKHAGA PRIVATE LIMITED DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT GUARANTEE THAT RHEOLE WILL BE ERROR-FREE, SECURE, OR UNINTERRUPTED.</p>
        </div>
        <div>
        <h4 className="font-semibold text-brand-blue dark:text-luxury-white mb-2 text-base">7.2. Limitation of Liability</h4>
        <p>TO THE MAXIMUM EXTENT PERMITTED BY LAW, IKHAGA PRIVATE LIMITED SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, REVENUES, DATA, USE, OR GOODWILL, ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF THE SERVICES. IN NO EVENT SHALL OUR AGGREGATE LIABILITY EXCEED THE GREATER OF ONE HUNDRED U.S. DOLLARS ($100) OR THE AMOUNT YOU PAID US IN THE PAST TWELVE MONTHS.</p>
        </div>
        </div>
      )
    },
    {
      id: "8-indemnification",
      title: "8. Indemnification",
      desc: (
        <div className="flex flex-col gap-3 font-sans">
        <p>You agree to indemnify, defend, and hold harmless Ikhaga Private Limited, its affiliates, directors, officers, and employees from any claims, damages, liabilities, costs, or expenses (including reasonable attorneys' fees) arising from:
        1. Your use of Rheole;
        2. Your violation of these Terms;
        3. Your Content;
        4. Your violation of any rights of another person or entity.</p>
        </div>
      )
    },
    {
      id: "9-governing-law-and-dispute-resolution",
      title: "9. Governing Law and Dispute Resolution",
      desc: (
        <div className="flex flex-col gap-8 font-sans">
        <div>
        <h4 className="font-semibold text-brand-blue dark:text-luxury-white mb-2 text-base">9.1. Governing Law</h4>
        <p>These Terms shall be governed by and construed in accordance with the laws of [Insert Jurisdiction, e.g., Delaware, USA / Singapore], without regard to its conflict of law principles.</p>
        </div>
        <div>
        <h4 className="font-semibold text-brand-blue dark:text-luxury-white mb-2 text-base">9.2. Arbitration Agreement</h4>
        <p>Any dispute arising out of or relating to these Terms or the Services shall be resolved through binding, individual arbitration, rather than in court. <strong>You and Ikhaga Private Limited waive the right to a trial by jury or to participate in a class action lawsuit.</strong></p>
        </div>
        </div>
      )
    },
    {
      id: "10-modifications",
      title: "10. Modifications",
      desc: (
        <div className="flex flex-col gap-3 font-sans">
        <p>We may modify these Terms periodically. If we make material changes, we will notify you via the app or email. Your continued use of Rheole after the effective date of the updated Terms constitutes your acceptance of the changes.</p>
        </div>
      )
    },
    {
      id: "11-contact-us",
      title: "11. Contact Us",
      desc: (
        <div className="flex flex-col gap-3 font-sans">
        <p>If you have questions about these Terms, contact us at <strong>legal@rheole.com</strong>.</p>
        </div>
      )
    }
  ];

  const glossary: GlossaryItem[] = [
    {
      term: "Intellectual Property",
      definition: "Legal rights over creations of the mind, such as trademarks (brand names) and copyrights (software code, designs)."
    },
    {
      term: "Binding Arbitration",
      definition: "A private, mandatory process where legal disputes are resolved by a neutral arbitrator instead of a judge or jury in a public court."
    },
    {
      term: "Location Manipulation",
      definition: "The act of falsifying GPS coordinates (spoofing) or using VPNs to pretend your device is physically located somewhere it is not."
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const container = document.documentElement || document.body;
      const scrolled = container.scrollTop;
      const total = container.scrollHeight - container.clientHeight;
      setScrollProgress(total > 0 ? (scrolled / total) * 100 : 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as const },
  };

  return (
    <div className="w-full min-h-screen py-32 px-6 md:px-12 max-w-5xl mx-auto flex flex-col gap-16 md:gap-24 font-sans selection:bg-brand-gold/20">
      
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-[2px] bg-brand-blue/5 dark:bg-luxury-white/5 z-50">
        <motion.div 
          className="h-full bg-brand-gold"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Title */}
      <motion.div {...fadeInUp} className="flex flex-col gap-4 border-b border-brand-blue/15 dark:border-luxury-white/10 pb-8">
        <h1 className="text-4xl md:text-6xl font-light tracking-wide uppercase text-brand-blue dark:text-luxury-white font-serif-editorial">
          Terms of Service
        </h1>
        <div className="flex items-center gap-4 text-[10px] tracking-widest uppercase text-brand-gold font-semibold">
          <span>Effective: July 1, 2026</span>
          <span className="w-1 h-1 rounded-full bg-brand-gold"></span>
          <span>Version 1.1.0</span>
        </div>
      </motion.div>

      {/* Main Grid: Sidebar + Content */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Sticky Sidebar */}
        <aside className="lg:col-span-4 sticky top-28 flex flex-col gap-8 hidden md:flex max-h-[calc(100vh-8rem)] overflow-y-auto pb-8">
          <nav className="flex flex-col gap-2.5">
            <span className="text-[9px] uppercase tracking-widest text-brand-blue/40 dark:text-luxury-white/40 font-semibold mb-1">
              Table of Contents
            </span>
            {sections.map((sec) => {
              const isActive = activeSection === sec.id;
              return (
                <button
                  key={sec.id}
                  onClick={() => scrollToSection(sec.id)}
                  className={`text-left text-xs uppercase tracking-wider py-1.5 transition-all duration-300 ${
                    isActive
                      ? "text-brand-gold font-semibold border-l-2 border-brand-gold pl-3"
                      : "text-brand-blue/60 dark:text-luxury-white/60 hover:text-brand-blue dark:hover:text-luxury-white border-l border-brand-blue/10 dark:border-luxury-white/10 pl-3"
                  }`}
                >
                  {sec.title}
                </button>
              );
            })}
          </nav>

          {/* Interactive Glossary */}
          <div className="border border-brand-blue/10 dark:border-luxury-white/10 rounded-xl p-4 bg-brand-blue/[0.01] dark:bg-luxury-white/[0.01] flex flex-col gap-3">
            <span className="text-[9px] uppercase tracking-widest text-brand-gold font-semibold">
              Glossary of Terms
            </span>
            <div className="flex flex-col gap-2">
              {glossary.map((item, idx) => (
                <div key={idx} className="flex flex-col gap-1 text-left">
                  <button
                    onClick={() => setActiveGlossaryTerm(activeGlossaryTerm === item.term ? null : item.term)}
                    className="text-xs font-semibold text-brand-blue dark:text-luxury-white hover:text-brand-gold text-left uppercase tracking-wider"
                  >
                    {item.term} {activeGlossaryTerm === item.term ? "−" : "+"}
                  </button>
                  <AnimatePresence>
                    {activeGlossaryTerm === item.term && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="text-[10px] text-brand-blue/60 dark:text-luxury-white/50 leading-relaxed font-light mt-1 font-sans pl-1"
                      >
                        {item.definition}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* Content Panel */}
        <div className="lg:col-span-8 flex flex-col gap-12 text-sm leading-relaxed text-brand-blue/70 dark:text-luxury-white/70 font-light">
          {sections.map((sec) => (
            <section
              key={sec.id}
              id={sec.id}
              className="flex flex-col gap-6 border-b border-brand-blue/5 dark:border-luxury-white/5 pb-10 scroll-mt-32"
            >
              <h2 className="text-lg font-medium text-brand-blue dark:text-luxury-white uppercase tracking-wider">
                {sec.title}
              </h2>
              <div className="font-sans leading-relaxed text-brand-blue/75 dark:text-luxury-white/75 text-[15px]">
                {sec.desc}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
