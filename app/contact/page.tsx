"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ContactChannel {
  label: string;
  desc: string;
  email: string;
}

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !subject || !message) {
      setStatus("error");
      setFeedback("Please fill out all fields.");
      return;
    }
    setStatus("loading");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message }),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Something went wrong.");
      setStatus("success");
      setFeedback("Message sent successfully. We will follow up shortly.");
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (err: any) {
      setStatus("error");
      setFeedback(err.message || "An unexpected error occurred.");
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as const },
  };

  const channels: ContactChannel[] = [
    {
      label: "GENERAL INQUIRIES",
      desc: "For general questions, product information, platform inquiries, and everything Rheole.",
      email: "hello@rheole.com"
    },
    {
      label: "COMMUNITIES & EVENTS",
      desc: "For community partnerships, local initiatives, event collaboration, and community-related questions.",
      email: "community@rheole.com"
    },
    {
      label: "PARTNERSHIPS",
      desc: "For strategic partnerships, business relationships, institutional collaborations, city initiatives, and opportunities to build together.",
      email: "partnerships@rheole.com"
    },
    {
      label: "MEDIA & PRESS",
      desc: "For journalists, media organizations, interviews, publications, podcasts, and public communications.",
      email: "press@rheole.com"
    },
    {
      label: "CAREERS",
      desc: "Interested in helping build the future of local intelligence?",
      email: "careers@rheole.com"
    },
    {
      label: "PRIVACY",
      desc: "For privacy requests, personal data inquiries, account information requests, and data-related concerns.",
      email: "privacy@rheole.com"
    },
    {
      label: "SECURITY",
      desc: "For responsible disclosure, vulnerability reports, security concerns, and platform safety matters.",
      email: "security@rheole.com"
    },
    {
      label: "MARKETING & BRAND",
      desc: "For campaigns, marketing collaborations, brand partnerships, content initiatives, and creative opportunities.",
      email: "marketing@rheole.com"
    },
    {
      label: "SOCIAL & COMMUNITY PRESENCE",
      desc: "For social media inquiries, creator collaborations, online communities, and public engagement.",
      email: "social@rheole.com"
    },
    {
      label: "FOUNDER'S OFFICE",
      desc: "For executive correspondence, strategic discussions, investment inquiries, and matters requiring direct founder attention.",
      email: "ceo@rheole.com"
    }
  ];

  return (
    <div className="w-full min-h-screen py-32 px-6 md:px-12 max-w-4xl mx-auto flex flex-col gap-16 md:gap-24">
      {/* Title */}
      <motion.div {...fadeInUp} className="flex flex-col gap-4 border-b border-brand-blue/15 dark:border-luxury-white/10 pb-8">
        <h1 className="text-4xl md:text-6xl font-light tracking-wide uppercase text-brand-blue dark:text-luxury-white font-serif-editorial">
          CONTACT
        </h1>
        <p className="text-xs uppercase tracking-widest text-brand-gold font-semibold">
          Every meaningful connection begins with a conversation.
        </p>
      </motion.div>

      {/* Narrative Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.2 }}
        className="flex flex-col gap-10 text-brand-blue/80 dark:text-luxury-white/80 font-light text-md md:text-lg leading-relaxed"
      >
        <p className="font-serif-editorial italic text-xl md:text-2xl text-brand-blue dark:text-luxury-white leading-relaxed">
          &ldquo;Whether you are a user, creator, community leader, journalist, researcher, partner, or future teammate, we would love to hear from you.&rdquo;
        </p>

        <p className="text-sm tracking-wide uppercase text-brand-blue/60 dark:text-luxury-white/60">
          Rheole is built around people, places, communities, and meaningful interactions.
        </p>
        <p>
          This page exists to help you reach the right team.
        </p>
      </motion.div>

      {/* Response Commitment/Principle Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="flex flex-col gap-4 border-t border-brand-blue/15 dark:border-luxury-white/10 pt-12"
      >
        <h3 className="text-lg font-medium text-brand-blue dark:text-luxury-white uppercase tracking-wider">
          RESPONSE PRINCIPLE
        </h3>
        <p className="text-sm text-brand-blue/70 dark:text-luxury-white/70">
          We value thoughtful communication. Every legitimate inquiry is reviewed and directed to the appropriate team. For urgent security concerns, please use the Security contact channel.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2">
          {["Thoughtful", "Direct", "Secure", "Responsive"].map((val, i) => (
            <div key={i} className="border border-brand-blue/5 dark:border-luxury-white/5 rounded-lg p-3 bg-brand-blue/[0.01] dark:bg-luxury-white/[0.01] text-xs uppercase tracking-widest text-center text-brand-gold font-medium">
              {val}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Channels List */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.4 }}
        className="flex flex-col gap-12 mt-8 border-t border-brand-blue/15 dark:border-luxury-white/10 pt-12"
      >
        <div className="flex flex-col gap-12">
          {channels.map((channel, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 border-b border-brand-blue/5 dark:border-luxury-white/5 pb-8"
            >
              <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg md:text-xl font-medium text-brand-blue dark:text-luxury-white uppercase tracking-wider">
                    {channel.label}
                  </h3>
                  <span className="text-[10px] uppercase tracking-widest text-brand-blue/40 dark:text-luxury-white/40">
                    Contact Channel
                  </span>
                </div>

                <a
                  href={`mailto:${channel.email}`}
                  className="text-[10px] tracking-widest uppercase border border-brand-blue/20 dark:border-luxury-white/20 hover:border-brand-gold hover:text-brand-gold px-5 py-2 rounded-full transition-all duration-300 self-start md:self-center font-medium"
                >
                  Email
                </a>
              </div>

              <p className="text-sm text-brand-blue/70 dark:text-luxury-white/70 leading-relaxed">
                {channel.desc}
              </p>
              <div className="text-xs">
                <a
                  href={`mailto:${channel.email}`}
                  className="text-brand-gold hover:underline"
                >
                  {channel.email}
                </a>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Contact Form Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="w-full border-t border-brand-blue/15 dark:border-luxury-white/10 pt-16 mt-8 max-w-xl mx-auto flex flex-col gap-8"
      >
        <div className="flex flex-col gap-2 text-center">
          <span className="text-[10px] tracking-widest uppercase text-brand-gold font-semibold">Inquiries</span>
          <h3 className="text-xl font-medium text-brand-blue dark:text-luxury-white uppercase tracking-wider">
            Send a Message
          </h3>
        </div>

        <form onSubmit={handleFormSubmit} className="flex flex-col gap-6 text-left font-sans text-xs">
          <div className="flex flex-col gap-1">
            <label className="text-[9px] uppercase tracking-widest text-brand-blue/50 dark:text-luxury-white/40">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-transparent border-b border-brand-blue/10 dark:border-luxury-white/10 py-2 focus:outline-none focus:border-brand-gold text-sm text-brand-blue dark:text-luxury-white uppercase tracking-wider"
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-[9px] uppercase tracking-widest text-brand-blue/50 dark:text-luxury-white/40">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-transparent border-b border-brand-blue/10 dark:border-luxury-white/10 py-2 focus:outline-none focus:border-brand-gold text-sm text-brand-blue dark:text-luxury-white uppercase tracking-wider"
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-[9px] uppercase tracking-widest text-brand-blue/50 dark:text-luxury-white/40">Subject</label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full bg-transparent border-b border-brand-blue/10 dark:border-luxury-white/10 py-2 focus:outline-none focus:border-brand-gold text-sm text-brand-blue dark:text-luxury-white uppercase tracking-wider"
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-[9px] uppercase tracking-widest text-brand-blue/50 dark:text-luxury-white/40">Message</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              className="w-full bg-transparent border-b border-brand-blue/10 dark:border-luxury-white/10 py-2 focus:outline-none focus:border-brand-gold text-sm text-brand-blue dark:text-luxury-white"
              required
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="text-[10px] tracking-widest uppercase border border-brand-blue/20 dark:border-luxury-white/20 hover:border-brand-gold hover:text-brand-gold py-3 px-6 rounded-full transition-all duration-300 font-medium self-center mt-4"
          >
            {status === "loading" ? "SENDING..." : "SUBMIT"}
          </button>

          <AnimatePresence>
            {feedback && (
              <motion.p
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className={`text-center text-[10px] uppercase tracking-widest mt-2 ${status === "error" ? "text-red-500" : "text-brand-gold"}`}
              >
                {feedback}
              </motion.p>
            )}
          </AnimatePresence>
        </form>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="flex flex-col gap-8 text-center border-t border-brand-blue/15 dark:border-luxury-white/10 pt-16 mt-8"
      >
        <h2 className="text-xl md:text-3xl font-light uppercase tracking-widest text-brand-blue dark:text-luxury-white leading-relaxed">
          We're always open to meaningful conversations.
        </h2>
        <a
          href="mailto:hello@rheole.com"
          className="inline-block mx-auto text-xs uppercase tracking-[0.25em] font-medium border border-brand-blue/30 dark:border-luxury-white/20 hover:border-brand-gold hover:text-brand-gold rounded-full px-8 py-4 transition-all duration-300 text-brand-blue dark:text-luxury-white"
        >
          hello@rheole.com
        </a>

        {/* Footer Note */}
        <p className="text-xs text-brand-blue/45 dark:text-luxury-white/45 italic leading-relaxed max-w-xl mx-auto mt-4">
          The world becomes more meaningful when people better understand the places, communities, and moments around them.
        </p>

        {/* Brand Block */}
        <div className="flex flex-col gap-1 mt-6 text-[10px] uppercase tracking-widest text-brand-blue/35 dark:text-luxury-white/35">
          <span>RHEOLE TECHNOLOGIES PRIVATE LIMITED</span>
          <span className="text-brand-gold font-medium">The Pulse of Your World.</span>
        </div>
      </motion.div>
    </div>
  );
}
