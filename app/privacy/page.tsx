"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PrivacySection {
  id: string;
  title: string;
  desc: React.ReactNode;
}

interface GlossaryItem {
  term: string;
  definition: string;
}

export default function Privacy() {
  const [activeSection, setActiveSection] = useState("introduction");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeGlossaryTerm, setActiveGlossaryTerm] = useState<string | null>(null);

  const sections: PrivacySection[] = [
    {
      id: "introduction",
      title: "Introduction",
      desc: (
        <div className="flex flex-col gap-3 font-sans">
        <p>At Rheole, built by <strong>Ikhaga Private Limited</strong>, our mission is to become the intelligence layer between people and the physical world. Achieving this requires a profound level of trust. Spatial intelligence, personalized recommendations, and dynamic communities depend on data—but that data belongs to you. </p>
        <p>This Privacy Policy explains how we collect, use, protect, and minimize exposure of your personal information. We operate on the principles of <strong>Privacy First, Security by Design, User Control, Minimal Data Exposure, and Transparency</strong>. We do not sell your personal data. We do not use your private communications to build targeted advertising profiles.</p>
        <p>This policy applies to all users of the Rheole platform, including our mobile applications, APIs, websites, and associated services (collectively, the "Services").</p>
        </div>
      )
    },
    {
      id: "1-information-we-collect",
      title: "1. Information We Collect",
      desc: (
        <div className="flex flex-col gap-8 font-sans">
        <p>To provide a seamless, hyper-local spatial intelligence experience, we collect information in three ways: information you provide, information collected automatically, and information from third parties.</p>
        <div>
        <h4 className="font-semibold text-brand-blue dark:text-luxury-white mb-2 text-base">1.1. Information You Provide to Us</h4>
        <ul className="list-disc pl-5"><li>  **Identity Information:** When you create an account, join our Waitlist, or participate in our Founding Access Program, we collect your name, email address, phone number, and a secure authentication credential (such as a Passkey or hashed password).</li><li>  **Profile Information:** This includes your username, profile picture, bio, and any links you choose to share on your Rheole profile.</li><li>  **Community & Event Data:** When you join Communities, RSVP to Events, or create them, we store this information to build your personalized social graph.</li><li>  **Messages:** We facilitate private and group messaging. While messages are stored securely, they are processed solely to deliver the service and are not scanned for advertising purposes.</li><li>  **Uploaded Media:** Photos, videos, and audio you upload to Events, Communities, or your Profile.</li><li>  **Saved Places:** Locations, businesses, or coordinates you explicitly save to your private or public lists.</li><li>  **Feedback & Support:** Content of your communications with our Trust & Safety or Support teams.</li></ul>
        </div>
        <div>
        <h4 className="font-semibold text-brand-blue dark:text-luxury-white mb-2 text-base">1.2. Information We Collect Automatically</h4>
        <ul className="list-disc pl-5"><li>  **Location Information:** Because Rheole is a spatial intelligence platform, location is a core component. We distinguish between:</li><li>      **Precise Location:** Collected only with your explicit operating system-level permission. We use this for Intelligent Navigation, real-time hyper-local discovery, and precise event check-ins.</li><li>      **Approximate Location:** Derived from your IP address or network data, used to provide generalized local content and enforce regional compliance.</li><li>  **AI Interaction Data:** When you use our AI-powered Insights and premium AI features, we process your queries, contextual interactions, and the resulting recommendations to improve the AI's contextual accuracy.</li><li>  **Search & Navigation History:** Your search queries for places, communities, and events, as well as your Intelligent Navigation routing history, are stored to refine your future personalized recommendations.</li><li>  **Device & Usage Information:** We collect data about your device type, operating system version, app version, unique device identifiers, and how you interact with the Rheole app (e.g., taps, time spent on screens) to improve performance and user experience.</li><li>  **Security Logs & Diagnostics:** To maintain security and stability, we collect crash reports, performance metrics, and security-related event logs.</li></ul>
        </div>
        <div>
        <h4 className="font-semibold text-brand-blue dark:text-luxury-white mb-2 text-base">1.3. Information from Third Parties</h4>
        <ul className="list-disc pl-5"><li>  **Referral System:** If you join via a referral link, we link your account creation to the referrer to administer the Founding Access Program and Waitlist benefits.</li><li>  **Integrations:** In the future, if you connect Rheole to third-party services via our Developer APIs, we will receive data according to the permissions you grant those services.</li></ul>
        </div>
        </div>
      )
    },
    {
      id: "2-how-we-use-your-information",
      title: "2. How We Use Your Information",
      desc: (
        <div className="flex flex-col gap-8 font-sans">
        <p>We process your data strictly to operate, secure, and improve Rheole. </p>
        <div>
        <h4 className="font-semibold text-brand-blue dark:text-luxury-white mb-2 text-base">2.1. Providing and Improving the Services</h4>
        <ul className="list-disc pl-5"><li>  **Spatial Intelligence:** To render real-time, context-aware maps and Intelligent Navigation.</li><li>  **Personalization:** To power our AI Intelligence engine, suggesting Communities, Events, and Local Discovery opportunities tailored to your tastes.</li><li>  **Communication:** To facilitate messaging between users and send you service-related Notifications.</li><li>  **Account Management:** To administer your account, process premium subscriptions, and manage Waitlist/Founding Access status.</li></ul>
        </div>
        <div>
        <h4 className="font-semibold text-brand-blue dark:text-luxury-white mb-2 text-base">2.2. Safety, Security, and Integrity</h4>
        <ul className="list-disc pl-5"><li>  **Trust & Safety:** To detect and prevent spam, fraud, abuse, and violations of our Community Guidelines and Acceptable Use Policy.</li><li>  **Security Engineering:** To monitor infrastructure for malicious activity, unauthorized access, and reverse engineering attempts.</li></ul>
        </div>
        <div>
        <h4 className="font-semibold text-brand-blue dark:text-luxury-white mb-2 text-base">2.3. Research and Development</h4>
        <ul className="list-disc pl-5"><li>  **Human-Centered AI:** We use aggregated, de-identified interaction data to train and refine our AI models, ensuring they remain helpful, unbiased, and aligned with our AI Transparency Policy.</li><li>  **Future Commerce & APIs:** We analyze usage patterns to structure future marketplace features and Developer APIs safely.</li></ul>
        </div>
        </div>
      )
    },
    {
      id: "3-how-we-share-your-information",
      title: "3. How We Share Your Information",
      desc: (
        <div className="flex flex-col gap-8 font-sans">
        <p>Rheole enforces a strict policy of <strong>Minimal Data Exposure</strong>. We share your data only in the following limited circumstances:</p>
        <div>
        <h4 className="font-semibold text-brand-blue dark:text-luxury-white mb-2 text-base">3.1. With Other Users</h4>
        <ul className="list-disc pl-5"><li>  **Public Profile:** Your username, profile picture, and any information you explicitly set to "Public" are visible to others.</li><li>  **Communities and Events:** When you join a public community or attend a public event, your presence may be visible to other members or attendees.</li><li>  **Messages:** Content you send in direct messages or group chats is shared with the recipients.</li></ul>
        </div>
        <div>
        <h4 className="font-semibold text-brand-blue dark:text-luxury-white mb-2 text-base">3.2. With Service Providers</h4>
        <p>We share data with trusted infrastructure and service providers (e.g., cloud hosting, payment processors) who process it solely on our behalf, under strict confidentiality agreements.</p>
        </div>
        <div>
        <h4 className="font-semibold text-brand-blue dark:text-luxury-white mb-2 text-base">3.3. Legal and Law Enforcement Requests</h4>
        <p>We will disclose your data if we believe in good faith that it is reasonably necessary to:
        1. Comply with a valid legal process, search warrant, court order, or subpoena.
        2. Protect the safety of any person from death or serious bodily injury.
        3. Investigate and prevent fraud or security breaches.
        4. Protect the rights and property of Ikhaga Private Limited.</p>
        </div>
        <div>
        <h4 className="font-semibold text-brand-blue dark:text-luxury-white mb-2 text-base">3.4. Business Transfers</h4>
        <p>In the event that Ikhaga Private Limited is involved in a merger, acquisition, bankruptcy, or sale of assets, your information may be transferred as part of that transaction, subject to the promises made in this Privacy Policy.</p>
        </div>
        </div>
      )
    },
    {
      id: "4-your-rights-and-controls",
      title: "4. Your Rights and Controls",
      desc: (
        <div className="flex flex-col gap-3 font-sans">
        <p>You own your data. We provide granular controls directly within the Rheole application settings.</p>
        <ul className="list-disc pl-5"><li>  **Location Controls:** You can toggle between precise and approximate location tracking at any time via your device settings.</li><li>  **Account Deletion:** You can permanently delete your account directly from the app. Upon deletion, we remove your profile, messages, and location history from our active systems in accordance with our Data Retention Policy.</li><li>  **Data Export:** You can request a downloadable archive of your account data at any time.</li><li>  **Opt-Outs:** You may opt out of non-essential analytical tracking and promotional notifications.</li></ul>
        </div>
      )
    },
    {
      id: "5-data-retention",
      title: "5. Data Retention",
      desc: (
        <div className="flex flex-col gap-3 font-sans">
        <p>We retain your personal information only for as long as necessary to provide the Services and fulfill the purposes outlined in this policy. 
        *   <strong>Active Accounts:</strong> We retain your data while your account is active.
        *   <strong>Deleted Accounts:</strong> When you initiate an account deletion, your data is scheduled for permanent erasure within 30 days, except where we are required to retain specific data for legal, tax, or regulatory compliance.
        *   For detailed timelines, please refer to our full <strong>Data Retention Policy</strong>.</p>
        </div>
      )
    },
    {
      id: "6-international-data-transfers",
      title: "6. International Data Transfers",
      desc: (
        <div className="flex flex-col gap-3 font-sans">
        <p>Rheole operates globally. Your information may be transferred to, stored, and processed in countries other than your own. When we transfer data across borders, we utilize recognized legal frameworks (such as Standard Contractual Clauses) to ensure your data receives adequate protection.</p>
        </div>
      )
    },
    {
      id: "7-children-s-privacy",
      title: "7. Children's Privacy",
      desc: (
        <div className="flex flex-col gap-3 font-sans">
        <p>Rheole is not directed at children under the age of 13 (or higher, depending on local law). We do not knowingly collect personal information from children. If we become aware that a child has provided us with personal information, we will immediately take steps to delete that account and data.</p>
        </div>
      )
    },
    {
      id: "8-cookies-and-tracking-technologies",
      title: "8. Cookies and Tracking Technologies",
      desc: (
        <div className="flex flex-col gap-3 font-sans">
        <p>We use cookies and similar technologies (like local storage and SDKs) to authenticate you, remember your preferences, and analyze platform performance. Detailed information on our usage and your choices can be found in our <strong>Cookie Policy</strong>.</p>
        </div>
      )
    },
    {
      id: "9-policy-updates",
      title: "9. Policy Updates",
      desc: (
        <div className="flex flex-col gap-3 font-sans">
        <p>We may update this Privacy Policy from time to time to reflect changes in technology, law, or our operations. If we make material changes, we will provide you with advance notice via an in-app notification or email. Your continued use of Rheole after the effective date of the updated policy constitutes your acceptance of the changes.</p>
        </div>
      )
    },
    {
      id: "10-contact-information",
      title: "10. Contact Information",
      desc: (
        <div className="flex flex-col gap-3 font-sans">
        <p>If you have questions, concerns, or feedback regarding this Privacy Policy, please contact our Chief Privacy Officer and the Privacy Team:</p>
        <p><strong>Email:</strong> privacy@rheole.com  
        <strong>Mailing Address:</strong>  
        Ikhaga Private Limited  
        Attn: Privacy Team / General Counsel  
        [Address Placeholder - Update Before Launch]</p>
        </div>
      )
    }
  ];

  const glossary: GlossaryItem[] = [
    {
      term: "Client-Side Geohashing",
      definition: "Converting precise GPS coordinates into broader alphanumeric grid areas locally on your physical device before any transmission occurs."
    },
    {
      term: "Ephemeral Decay",
      definition: "The automatic, permanent, and unrecoverable deletion of temporary messaging payloads and active node records within 24 hours of total inactivity."
    },
    {
      term: "Approximate Location",
      definition: "Location data derived non-specifically from IP addresses and network data, mathematically precise enough for local discovery but incapable of exact coordinate tracking."
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
          Privacy Policy
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
