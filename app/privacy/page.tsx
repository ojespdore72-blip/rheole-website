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
      title: "1. Introduction",
      desc: (
        <div className="flex flex-col gap-3 font-sans">
          <p>
            Welcome to Rheole, the intelligence layer between people and the physical world. Rheole is a Spatial Intelligence Platform meticulously developed, wholly owned, and operated by Ikhaga Private Limited ("Ikhaga," "we," "us," or "our"). At Ikhaga, we fundamentally believe that true technological advancement must be built upon a foundation of absolute user trust. Therefore, we are deeply committed to protecting your privacy and ensuring that you retain ultimate sovereign control over your personal data at all times. 
          </p>
          <p>
            Our core mission is to empower human-centered AI while adhering strictly to the non-negotiable principles of privacy-first design, security by default, and minimal data exposure. This comprehensive Privacy Policy has been carefully crafted to explain in precise detail exactly how we collect, intelligently use, securely process, and rigorously safeguard your personal data when you interact with the Rheole application, our website, and all associated services (collectively, the "Platform"). By accessing or using Rheole, you acknowledge that you have read, completely understood, and agree to the data practices described herein.
          </p>
        </div>
      )
    },
    {
      id: "information-we-collect",
      title: "2. Information We Collect",
      desc: (
        <div className="flex flex-col gap-8 font-sans">
          <div>
            <h4 className="font-semibold text-brand-blue dark:text-luxury-white mb-2 text-base">Identity & Profile Information</h4>
            <p>
              To establish your digital presence within our physical-world network, we must collect essential identity information. When you create an account or join our exclusive Founding Access Program, we require your full legal name, an active email address, a verified phone number, and your exact date of birth. Your date of birth is utilized exclusively to strictly verify that you meet our minimum age requirements and to ensure compliance with global child protection laws. To facilitate meaningful connections within localized Communities, you may also optionally provide rich profile information. This encompasses your chosen username, a profile picture, a personalized biography, preferred pronouns, and specific interests. We guarantee that your profile information is visible to other Rheole users strictly based on the granular visibility settings that you alone configure and control.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-brand-blue dark:text-luxury-white mb-2 text-base">Location Information</h4>
            <p>
              As a premier Spatial Intelligence Platform, location data serves as the lifeblood of the Rheole experience. However, we employ mathematically rigorous boundaries to govern how this sensitive data is both gathered and utilized. By default, Rheole only collects your Approximate Location (e.g., at the city or general neighborhood level) using IP addresses and broad network routing data. This allows us to provide localized discovery and trending events without tracking your exact physical coordinates. 
            </p>
            <p>
              Conversely, to unlock the full power of our platform, including Intelligent Navigation and exact proximity-based recommendations, we require your Precise Location. This is strictly collected via explicit, opt-in consent through your device's operating system to access GPS coordinates. You maintain the absolute right to revoke this GPS permission at any given moment directly through your device settings. When this permission is revoked, Rheole gracefully degrades its functionality to rely solely on Approximate Location.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-brand-blue dark:text-luxury-white mb-2 text-base">Community & Messages</h4>
            <p>
              Rheole actively fosters human interaction through dynamic Communities and private Messaging. Consequently, we collect data regarding your platform participation, including the specific communities you join, your designated roles (e.g., moderator), and your direct interactions with community posts. For private communication, we process the encrypted content of your messages, associated timestamps, read receipts, and participant network lists. Our advanced backend systems analyze purely the metadata of these messages for proactive spam prevention and the strict enforcement of our Trust & Safety guidelines. We prioritize your conversational privacy above all else and employ industry-leading encryption protocols to secure your communications against interception, both while in transit across our networks and while at rest on our secure database clusters.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-brand-blue dark:text-luxury-white mb-2 text-base">AI Interaction Data & Search</h4>
            <p>
              Our Premium AI Features and core AI Intelligence engines rely heavily on your direct interactions to function effectively. We systematically collect your text prompts, spatial queries, explicit feedback on AI-generated responses, and broad interaction patterns with our intelligent agents. This rich data stream is securely isolated and processed exclusively to personalize and refine your individual intelligence layer. We maintain a strict policy against utilizing your deeply personal AI Interaction Data to arbitrarily train our foundational models across the broader, public user base without first obtaining your explicit, separate, and informed consent. Furthermore, we log your search queries and Intelligent Navigation routes (including origins and destinations), which are systematically aggregated and stripped of personally identifiable markers after a short retention period to continuously improve our global routing algorithms.
            </p>
          </div>
        </div>
      )
    },
    {
      id: "technical-diagnostic",
      title: "3. Technical & Diagnostic Data",
      desc: (
        <div className="flex flex-col gap-3 font-sans">
          <p>
            To maintain the absolute security, peak performance, and uncompromising reliability of the Rheole infrastructure, our backend systems automatically generate and log specific technical and diagnostic data. We utilize privacy-preserving analytics methodologies to comprehensively understand how our users navigate the Platform. This includes measuring critical metrics such as average session duration, specific feature usage frequency, and identifying user flow bottlenecks. 
          </p>
          <p>
            Additionally, we actively deploy strictly necessary cookies required for secure user authentication and session management, alongside performance cookies that actively enhance your browsing experience. In the unfortunate event of an application failure or crash, Rheole immediately generates detailed diagnostic reports. These crash reports capture the precise state of the application at the exact moment of failure, including stack traces and memory allocation data, allowing our engineers to rapidly patch vulnerabilities. We also continuously monitor our network for anomalous behavior, logging IP addresses and authentication attempts to proactively detect and mitigate unauthorized access, fraud, and coordinated cyberattacks.
          </p>
        </div>
      )
    },
    {
      id: "how-we-use",
      title: "4. How We Use Your Information",
      desc: (
        <div className="flex flex-col gap-3 font-sans">
          <p>
            Rheole utilizes your collected information under strict internal access controls and exclusively for a defined set of operational purposes. Primarily, we use your data to reliably provide and maintain the Platform, which includes delivering complex spatial intelligence, calculating intelligent navigation routes, and hosting community forums. We also heavily utilize your data to deeply personalize your individual experience; this means tailoring real-world recommendations, surfacing localized discovery options, and generating bespoke AI insights that align with your historical preferences and current spatial context.
          </p>
          <p>
            Furthermore, your information is critical for enhancing platform security, allowing us to proactively protect our user base against malicious actors, financial fraud, and systemic abuse. We relentlessly analyze usage trends and diagnostic data to improve our underlying technology, refine our predictive algorithms, squash bugs, and architect future features such as our highly anticipated Commerce platform and Developer APIs. Finally, we use your contact information to communicate essential service updates, critical security alerts, and, strictly with your explicit consent, promotional materials regarding the Founding Access Program.
          </p>
        </div>
      )
    },
    {
      id: "legal-basis",
      title: "5. Legal Basis for Processing",
      desc: (
        <div className="flex flex-col gap-3 font-sans">
          <p>
            For users residing within jurisdictions that legally require a specifically defined legal basis for data processing (most notably the General Data Protection Regulation or GDPR within the European Economic Area), we process your data under several robust legal frameworks. Our primary basis is Contractual Necessity; meaning the processing of your identity and basic usage data is absolutely necessary for us to perform our binding obligations under the Terms of Service, such as provisioning your account and delivering core functionality.
          </p>
          <p>
            We also rely heavily on Legitimate Interests. This allows us to process data when necessary for our legitimate business operations—such as dramatically improving the Platform's speed, ensuring robust cybersecurity, and preventing localized fraud—provided that these interests are never overridden by your fundamental human rights and freedoms. Where strictly required by law, such as for tracking Precise Location or deploying non-essential tracking cookies, we rely exclusively on your explicit, informed Consent, which you may freely withdraw at any given time. Finally, we may process your data out of Legal Obligation to comply with binding laws, regulatory mandates, or enforceable court orders.
          </p>
        </div>
      )
    },
    {
      id: "data-sharing",
      title: "6. Data Sharing and Disclosure",
      desc: (
        <div className="flex flex-col gap-3 font-sans">
          <p>
            At Rheole, we operate under the fundamental belief that your data is inherently yours. We do not, and will never, sell your personal information to third-party data brokers or advertising networks. We only share your data under highly specific, tightly controlled circumstances. Information that you explicitly designate as public (such as your profile biography and open community posts) is visible to the broader Rheole community. We also share necessary data with trusted Service Providers—these are heavily vetted third-party vendors responsible for our cloud hosting infrastructure, database management, and customer support operations. These providers are bound by extremely strict, legally binding data processing agreements and are categorically prohibited from using your data for any independent, unauthorized purpose.
          </p>
          <p>
            In the event of a corporate restructuring, such as if Ikhaga Private Limited is involved in a merger, acquisition, bankruptcy, or the sale of all or a significant portion of our assets, your information may be legally transferred as part of that specific transaction; we will notify you prominently of any such change in ownership. Finally, we will disclose data in response to Law Enforcement Requests. We cooperate with government officials only when compelled by a valid subpoena, court order, or search warrant. Our legal team rigorously reviews all such requests for legal sufficiency and will aggressively push back against any demands that we deem overly broad, inappropriate, or legally flawed.
          </p>
        </div>
      )
    },
    {
      id: "data-retention",
      title: "7. Data Retention",
      desc: (
        <div className="flex flex-col gap-3 font-sans">
          <p>
            We strictly adhere to the privacy principle of storage limitation, ensuring we do not hoard data unnecessarily. Rheole systematically retains your personal information only for the absolute minimum duration strictly necessary to fulfill the specific operational purposes outlined in this policy, unless a longer retention period is explicitly required or legally permitted by applicable law. For active users, we securely retain your profile details, saved spatial coordinates, and active community participation data for the entire active lifespan of your account to ensure seamless service. 
          </p>
          <p>
            However, upon your initiation of account deletion, we immediately trigger an automated process to permanently erase or irreversibly cryptographically anonymize your core data from our production servers within exactly 30 days. Routine system logs, which include critical security logs, IP addresses, and diagnostic crash data, are completely segregated and typically automatically purged from our backend after 90 days. For a completely exhaustive schedule of how long specific data types are stored, please review our dedicated, standalone Data Retention Policy.
          </p>
        </div>
      )
    },
    {
      id: "your-privacy-rights",
      title: "8. Your Privacy Rights",
      desc: (
        <div className="flex flex-col gap-3 font-sans">
          <p>
            Depending on your specific global jurisdiction (including robust frameworks like the GDPR in Europe and the CCPA/CPRA in California), you are legally guaranteed profound and actionable rights regarding your personal data. You possess the definitive Right to Access, allowing you to request a comprehensive, human-readable report of the exact personal data we currently hold about you. You hold the Right to Rectification, enabling you to effortlessly correct any inaccurate or incomplete data directly through your in-app account settings. 
          </p>
          <p>
            Crucially, you possess the Right to Erasure (often referred to as the Right to be Forgotten), which empowers you to demand the permanent deletion of your account and all associated personal data from our systems. You may also exercise the Right to Restrict Processing, asking us to temporarily pause the processing of your data under certain disputed circumstances; the Right to Data Portability, receiving a complete copy of your data in a structured, machine-readable format; and the Right to Object to our processing of your data based on legitimate interests. We honor these rights globally. You can exercise them instantly via the Security Center within the app or by formally contacting privacy@rheole.com.
          </p>
        </div>
      )
    },
    {
      id: "account-deletion",
      title: "9. Account Deletion & Data Export",
      desc: (
        <div className="flex flex-col gap-3 font-sans">
          <p>
            We believe that joining Rheole is a choice, and leaving should be just as easy. You possess complete and total autonomy over your digital presence on our platform. At any time, without needing to contact support, you can initiate a Data Export directly from the Security Center situated in your account settings. This export function seamlessly and securely compiles your entire data archive—including all private messages, saved real-world places, and uploaded media—into universally accessible JSON and CSV formats for your personal records.
          </p>
          <p>
            Similarly, you hold the power to permanently delete your account at any time via that same Security Center. The moment you initiate deletion, your public profile and all associated data are immediately removed from the active Platform, rendering you invisible to other users. Following this immediate unpublishing, the complete and irreversible erasure of your underlying data from our deeply nested backup systems and server clusters will automatically conclude within exactly 30 days, barring any active, legally mandated data holds.
          </p>
        </div>
      )
    },
    {
      id: "children-international",
      title: "10. Children & International Transfers",
      desc: (
        <div className="flex flex-col gap-8 font-sans">
          <div>
            <h4 className="font-semibold text-brand-blue dark:text-luxury-white mb-2 text-base">Children's Privacy</h4>
            <p>
              Rheole is a sophisticated intelligence platform and is strictly not intended for use by individuals under the age of 13, or the applicable age of digital consent in your specific jurisdiction (such as 16 in certain European countries). We do not, under any circumstances, knowingly collect, solicit, or maintain personal information from children. If our trust and safety team becomes aware, or is reliably informed, that we have inadvertently collected data from a child without verifiable parental consent, we will take immediate, aggressive steps to permanently delete that data from our servers and permanently terminate the associated account.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-brand-blue dark:text-luxury-white mb-2 text-base">International Data Transfers</h4>
            <p>
              Ikhaga Private Limited operates as a truly global entity. Consequently, the information we collect from you may be transferred to, extensively processed in, and securely stored in the United States and various other countries where our trusted service providers maintain physical server facilities. We recognize that these international jurisdictions may have data protection laws that differ significantly from those in your home country. To mitigate this, we strictly utilize legally recognized transfer mechanisms, most notably the European Commission’s Standard Contractual Clauses, to guarantee that your data consistently receives an adequate, legally compliant level of protection regardless of exactly where on the globe it is physically processed or stored.
            </p>
          </div>
        </div>
      )
    },
    {
      id: "contact",
      title: "11. Contact Information",
      desc: (
        <div className="flex flex-col gap-4 font-sans">
          <p>
            Transparency and accountability are the bedrock of our privacy philosophy. If you have any questions, deep concerns, or formal legal requests regarding this Privacy Policy or our broader data handling practices, we encourage you to contact our dedicated privacy team immediately. Our Chief Privacy Officer reviews all inquiries.
          </p>
          <div className="p-4 border border-brand-blue/10 dark:border-luxury-white/10 rounded-xl bg-brand-blue/[0.02] dark:bg-luxury-white/[0.02]">
            <p className="font-semibold text-brand-blue dark:text-luxury-white mb-1">Ikhaga Private Limited</p>
            <p className="text-brand-blue/70 dark:text-luxury-white/70">Attn: Chief Privacy Officer</p>
            <p className="mt-2">
              <span className="font-medium">Privacy Inquiries: </span>
              <a href="mailto:privacy@rheole.com" className="text-brand-gold hover:underline">privacy@rheole.com</a>
            </p>
            <p>
              <span className="font-medium">Legal Department: </span>
              <a href="mailto:legal@rheole.com" className="text-brand-gold hover:underline">legal@rheole.com</a>
            </p>
          </div>
          <p className="text-xs text-brand-blue/50 dark:text-luxury-white/50 italic mt-2">
            For matters requiring physical correspondence or legal service, please request our current registered mailing address via the legal email provided above.
          </p>
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
