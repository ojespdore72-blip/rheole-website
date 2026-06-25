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
      id: "acceptance",
      title: "1. Acceptance of Terms",
      desc: (
        <div className="flex flex-col gap-3 font-sans">
          <p>
            These Terms of Service ("Terms") constitute a legally binding agreement between you and Ikhaga Private Limited ("Ikhaga", "we", "us", or "our"). These Terms govern your access to and use of the Rheole application, our website, associated APIs, and all related spatial intelligence services (collectively, the "Platform"). By creating an account, accessing, or using the Platform, you expressly acknowledge that you have read, completely understood, and agree to be bound by these Terms in their entirety. Furthermore, these Terms incorporate by reference our Privacy Policy and Community Guidelines, which establish the foundational rules for operating within our ecosystem. 
          </p>
          <p>
            If you are accepting these Terms on behalf of a company, organization, or other legal entity, you represent and warrant that you possess the full legal authority to bind such entity to these Terms. We view the integrity of our platform as paramount. Therefore, if you do not agree to every single provision outlined in these Terms, you may not use the Platform and must immediately cease access. We recommend reviewing these terms closely, as they significantly affect your legal rights and obligations.
          </p>
        </div>
      )
    },
    {
      id: "eligibility",
      title: "2. Eligibility",
      desc: (
        <div className="flex flex-col gap-3 font-sans">
          <p>
            To utilize Rheole and participate in our spatial intelligence network, you must meet specific eligibility requirements to ensure the safety and legal compliance of our ecosystem. First and foremost, you must be at least 13 years of age. However, if the laws of your country of residence dictate a higher minimum age for digital consent, you must meet that higher age threshold. If you are under the age of 18, or the age of legal majority in your jurisdiction, you must have the explicit permission and supervision of your parent or legal guardian to use the Platform. 
          </p>
          <p>
            Additionally, you must not be barred from receiving digital services under the laws of the applicable jurisdiction, such as being located in a comprehensively embargoed country. You must not have been previously suspended, banned, or removed from Rheole for violating our policies. Finally, to protect the physical safety of our community members during real-world interactions, individuals who are registered sex offenders or who have been convicted of violent crimes are strictly prohibited from using the Platform. We reserve the absolute right to refuse access to the Platform to anyone, at any time, for any reason, within the bounds of applicable law.
          </p>
        </div>
      )
    },
    {
      id: "accounts",
      title: "3. Accounts & Security",
      desc: (
        <div className="flex flex-col gap-8 font-sans">
          <div>
            <h4 className="font-semibold text-brand-blue dark:text-luxury-white mb-2 text-base">Account Creation</h4>
            <p>
              To access the full spectrum of spatial intelligence, community networking, and intelligent navigation features offered by Rheole, you must register for a dedicated user account. During the registration process, you agree to provide accurate, current, complete, and truthful information about your identity. You are under a continuing obligation to promptly update such information to ensure it remains accurate at all times. You are entirely and solely responsible for safeguarding the password and advanced authentication mechanisms (such as hardware Passkeys, biometric data, or Two-Factor Authentication codes) that you utilize to access the Platform. You explicitly agree not to disclose your password or authentication credentials to any third party under any circumstances. You must notify our security team immediately of any unauthorized use or suspected breach of your account. You remain fully legally and financially responsible for all activities, actions, and consequences that occur under your account, regardless of whether or not you had actual knowledge of those activities.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-brand-blue dark:text-luxury-white mb-2 text-base">Username Rules</h4>
            <p>
              Usernames on the Rheole platform are strictly provided on a first-come, first-served basis. Your chosen username represents your digital identity within our physical-world network, and therefore must adhere to strict guidelines. Your username must not impersonate another person, public figure, corporate entity, or recognized brand. It must not contain profanity, hate speech, explicit language, or terminology that is offensive to marginalized groups. Furthermore, it must not infringe on the intellectual property rights, such as registered trademarks or copyrighted names, of any third party. Usernames may not be used for the primary purpose of domain squatting, extortion, or unauthorized resale on secondary markets. We reserve the unequivocal right to unilaterally reclaim, modify, forcefully change, or permanently terminate usernames that violate these rules or our broader Community Guidelines, without providing any prior notice or compensation to the account holder.
            </p>
          </div>
        </div>
      )
    },
    {
      id: "using-rheole",
      title: "4. Using Rheole",
      desc: (
        <div className="flex flex-col gap-8 font-sans">
          <div>
            <h4 className="font-semibold text-brand-blue dark:text-luxury-white mb-2 text-base">Community Rules</h4>
            <p>
              Rheole is fundamentally designed to connect people with the physical world and foster authentic interactions between individuals. Because our platform bridges the digital and physical divide, we expect and demand all users to interact with the utmost respect and integrity. You agree to strictly abide by our comprehensive Community Guidelines, which operate as an extension of these Terms. These guidelines explicitly prohibit harassment of any kind, cyberbullying, physical threats, impersonation, fraudulent schemes, spamming, the intentional spread of malicious misinformation, and the promotion or coordination of violence or illegal activities. Our Trust and Safety team employs both automated systems and human moderators to monitor community interactions. Violations of these community rules are treated with extreme severity and may result in the immediate, permanent suspension of your account, as well as potential reporting to relevant law enforcement authorities if physical harm is threatened.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-brand-blue dark:text-luxury-white mb-2 text-base">Acceptable Use</h4>
            <p>
              To maintain the integrity, speed, and reliability of our spatial intelligence network, you agree not to engage in any prohibited technical activities. Most importantly, you are forbidden from engaging in Location Manipulation—this includes spoofing, falsifying, or utilizing VPNs to manipulate GPS data to misrepresent your actual physical location to our servers or other users. You must not engage in Platform Abuse, which encompasses overburdening, attacking via Distributed Denial of Service (DDoS), or otherwise disrupting the Platform’s infrastructure. Unauthorized Scraping and Automation is strictly prohibited; you may not use bots, scrapers, spiders, or other automated means to access, extract, harvest, or index proprietary spatial data from Rheole without our explicit written permission. Furthermore, you are barred from Reverse Engineering, decompiling, or attempting to extract the source code or proprietary routing algorithms of the Platform, as well as attempting to bypass or evade rate limits or established API usage restrictions.
            </p>
          </div>
        </div>
      )
    },
    {
      id: "ai-features",
      title: "5. AI Features & Usage",
      desc: (
        <div className="flex flex-col gap-3 font-sans">
          <p>
            Rheole leverages state-of-the-art Artificial Intelligence to provide you with deeply personalized spatial intelligence, dynamic intelligent navigation, and predictive real-world insights. While we strive for technological excellence and rigorous model training, you must understand that AI-generated outputs, predictive recommendations, and spatial insights are provided strictly for informational and entertainment purposes. These systems process vast amounts of complex data and may occasionally produce results that are inaccurate, incomplete, historically biased, or contextually inappropriate. 
          </p>
          <p>
            Crucially, you should absolutely never rely solely on AI-generated navigation routing, event recommendations, or spatial insights in life-threatening, critical, or emergency situations where human safety is at risk. You agree to exercise human common sense and situational awareness at all times. In terms of acceptable AI usage, you agree not to use our AI features to attempt to generate harmful, illegal, defamatory, or abusive content. You may not attempt to "jailbreak," maliciously manipulate, or extract the underlying model weights, system prompts, or operational parameters of our proprietary AI systems. Your interactions with our AI may be logged and used to further personalize your individual experience, as comprehensively detailed in our Privacy Policy and AI Transparency Policy.
          </p>
        </div>
      )
    },
    {
      id: "subscriptions",
      title: "6. Subscriptions, Payments & Refunds",
      desc: (
        <div className="flex flex-col gap-3 font-sans">
          <p>
            While the core Rheole experience remains accessible, certain advanced functionalities—including Premium AI Features, unlimited intelligent routing, historical spatial insights, and commercial API access—require a paid subscription or a one-time payment. By selecting and utilizing a premium feature, you enter into a commercial agreement to pay Ikhaga Private Limited the exact fees indicated at the point of sale, inclusive of all applicable taxes. All financial transactions and payments are processed securely through our heavily audited, authorized third-party payment processors (such as Stripe, Apple App Store, or Google Play). 
          </p>
          <p>
            You must provide valid, active, and legally authorized payment information. By providing this information, you grant us the irrevocable authorization to charge your payment method on a recurring billing cycle (for subscriptions) or immediately (for one-time purchases). Unless strictly required by the consumer protection laws of your specific jurisdiction, or explicitly stated otherwise by us in writing, all fees, charges, and subscription payments are strictly non-refundable. If you genuinely believe you have been billed in error due to a technical glitch, you must contact our billing support team within 30 days of the disputed billing date. Subscription cancellations will take effect precisely at the end of your current paid billing cycle, ensuring you retain access to all premium features until that specific cycle concludes.
          </p>
        </div>
      )
    },
    {
      id: "content-ip",
      title: "7. Content & Intellectual Property",
      desc: (
        <div className="flex flex-col gap-8 font-sans">
          <div>
            <h4 className="font-semibold text-brand-blue dark:text-luxury-white mb-2 text-base">User Generated Content</h4>
            <p>
              We firmly believe that your content belongs to you. You retain all inherent ownership rights, copyrights, and intellectual property claims to the photos, text, spatial reviews, event descriptions, audio, and other media you actively upload, post, or transmit through Rheole (collectively referred to as "User Content"). However, to legally operate the platform and distribute your content to other users, we require a license. By submitting User Content to the Platform, you grant Ikhaga Private Limited a worldwide, non-exclusive, royalty-free, fully paid, sublicensable, and transferable license to use, reproduce, distribute, prepare derivative works of, display, and perform that content specifically in connection with providing, promoting, and improving the Platform. You represent and warrant that you have all the necessary legal rights, licenses, and permissions to grant this license and that your User Content does not infringe upon the intellectual property, privacy, or publicity rights of any third party.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-brand-blue dark:text-luxury-white mb-2 text-base">Rheole's Intellectual Property</h4>
            <p>
              Except for the User Content that you specifically provide, the entire Rheole Platform and all of its constituent components are the sole, exclusive property of Ikhaga Private Limited. This includes, but is not limited to, the underlying software code, proprietary spatial algorithms, AI models, user interface designs (UI/UX), text, graphics, logos, trademarks, service marks, and trade secrets. Our intellectual property is aggressively protected by international copyright, trademark, patent, and other intellectual property laws. By accepting these Terms, you are granted a limited, revocable, non-exclusive, non-transferable license to simply access and use the Platform for your own personal, non-commercial use. You may not copy, modify, distribute, sell, or lease any part of our services or included software, nor may you reverse engineer or attempt to extract the source code of that software, unless laws explicitly prohibit those restrictions or you have our written permission.
            </p>
          </div>
        </div>
      )
    },
    {
      id: "termination",
      title: "8. Termination & Suspension",
      desc: (
        <div className="flex flex-col gap-3 font-sans">
          <p>
            To maintain a safe, functional, and premium environment for all users, Ikhaga Private Limited reserves the absolute right, exercised at our sole and unreviewable discretion and without any liability to you, to suspend, restrict, or permanently terminate your account and your access to the Platform. We may take this action at any time, with or without cause, and with or without prior notice. Common reasons for termination include, but are not limited to, explicit violations of these Terms of Service, severe breaches of our Community Guidelines, confirmed reports of fraudulent activity, extended periods of account inactivity, or necessary compliance with binding legal requests from law enforcement agencies.
          </p>
          <p>
            Upon the termination or suspension of your account, your right to access and use the Platform will immediately and permanently cease. In the event of termination, we reserve the right to systematically delete your User Content, profile information, and associated spatial data from our active servers in accordance with our Data Retention Policy, though certain data may be retained for legal compliance or security auditing purposes. Please note that critical sections of these Terms—specifically those regarding Intellectual Property, Indemnification, Disclaimers, and Limitation of Liability—are designed to survive the termination of your account and remain legally binding indefinitely.
          </p>
        </div>
      )
    },
    {
      id: "disclaimers-liability",
      title: "9. Disclaimers & Limitation of Liability",
      desc: (
        <div className="flex flex-col gap-3 font-sans">
          <p className="uppercase text-xs font-semibold text-brand-blue/60 dark:text-luxury-white/60 tracking-widest mb-1">Please read carefully</p>
          <p>
            THE PLATFORM, INCLUDING ALL SPATIAL DATA, AI INSIGHTS, AND COMMUNITY FEATURES, IS PROVIDED TO YOU STRICTLY ON AN "AS IS" AND "AS AVAILABLE" BASIS. IKHAGA PRIVATE LIMITED EXPRESSLY DISCLAIMS ALL WARRANTIES AND CONDITIONS OF ANY KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE PLATFORM WILL BE UNINTERRUPTED, TIMELY, 100% SECURE, OR COMPLETELY ERROR-FREE, NOR DO WE GUARANTEE THE ABSOLUTE ACCURACY, COMPLETENESS, OR RELIABILITY OF ANY SPATIAL DATA, ROUTING INFORMATION, OR AI RECOMMENDATIONS PROVIDED. YOU USE RHEOLE ENTIRELY AT YOUR OWN DISCRETION AND PHYSICAL RISK.
          </p>
          <p>
            TO THE FULLEST EXTENT PERMITTED BY APPLICABLE JURISPRUDENCE, IN NO EVENT SHALL IKHAGA PRIVATE LIMITED, ITS AFFILIATES, DIRECTORS, EMPLOYEES, OR AGENTS BE HELD LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES. THIS INCLUDES ANY LOSS OF PROFITS, REVENUES, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES RESULTING FROM: (A) YOUR ACCESS TO, USE OF, OR INABILITY TO ACCESS THE PLATFORM; (B) ANY HARMFUL CONDUCT OR CONTENT OF ANY THIRD PARTY ENCOUNTERED ON THE PLATFORM; (C) ANY AI-GENERATED INSIGHTS OR ROUTING ERRORS THAT INDIRECTLY OR DIRECTLY RESULT IN PHYSICAL INJURY, PROPERTY DAMAGE, OR FINANCIAL HARM; OR (D) UNAUTHORIZED ACCESS, USE, OR ALTERATION OF YOUR TRANSMISSIONS. IN NO EVENT SHALL OUR TOTAL AGGREGATE LIABILITY FOR ALL CLAIMS RELATING TO THE PLATFORM EXCEED THE GREATER OF ONE HUNDRED U.S. DOLLARS ($100 USD) OR THE EXACT AMOUNT YOU PAID US IN THE PAST TWELVE MONTHS FOR PREMIUM SERVICES.
          </p>
        </div>
      )
    },
    {
      id: "governing-law",
      title: "10. Governing Law & Dispute Resolution",
      desc: (
        <div className="flex flex-col gap-3 font-sans">
          <p>
            These Terms, and any action, dispute, or claim related thereto, will be governed by and interpreted in accordance with the laws of the jurisdiction in which Ikhaga Private Limited is legally incorporated, without regard to its conflict of laws provisions that would result in the application of the laws of another jurisdiction. You agree that any legal nuances or interpretations of these Terms will be viewed through the lens of this specific governing law.
          </p>
          <p>
            <strong>Binding Arbitration:</strong> To ensure swift and private resolution of conflicts, any dispute, claim, or controversy arising out of or relating to these Terms or the breach, termination, enforcement, interpretation, or validity thereof, shall be determined by binding arbitration before a single arbitrator. The arbitration shall be administered according to standard commercial arbitration rules in the primary jurisdiction of Ikhaga Private Limited. Judgment on the Award may be entered in any court having competent jurisdiction. 
          </p>
          <p>
            <strong>Class Action Waiver:</strong> YOU AND IKHAGA PRIVATE LIMITED EXPLICITLY AGREE THAT EACH PARTY MAY BRING CLAIMS AGAINST THE OTHER ONLY IN YOUR OR ITS INDIVIDUAL CAPACITY. YOU WAIVE THE RIGHT TO BRING OR PARTICIPATE IN ANY CLAIM AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS ACTION, CONSOLIDATED, OR REPRESENTATIVE PROCEEDING. This waiver is central to the agreement to arbitrate disputes.
          </p>
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
