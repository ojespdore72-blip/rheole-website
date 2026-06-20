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

        {/* Official Social Presence */}
        <div className="flex flex-col gap-6 mt-16 pt-8 border-t border-brand-blue/10 dark:border-luxury-white/10 w-full max-w-2xl mx-auto">
          <p className="text-[10px] uppercase tracking-widest text-brand-gold font-semibold">Official Social Channels</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <a href="https://www.instagram.com/rheole_?igsh=MTV5dnF2ODU0ODVjMg==" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 p-6 border border-brand-blue/5 dark:border-luxury-white/5 bg-brand-blue/[0.01] dark:bg-luxury-white/[0.01] rounded-xl hover:border-brand-gold/50 transition-colors group">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-brand-blue dark:text-luxury-white group-hover:text-brand-gold transition-colors"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              <span className="text-[10px] uppercase tracking-widest text-brand-blue/70 dark:text-luxury-white/70 group-hover:text-brand-gold transition-colors">Instagram</span>
            </a>
            <a href="https://x.com/rheole_" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 p-6 border border-brand-blue/5 dark:border-luxury-white/5 bg-brand-blue/[0.01] dark:bg-luxury-white/[0.01] rounded-xl hover:border-brand-gold/50 transition-colors group">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-brand-blue dark:text-luxury-white group-hover:text-brand-gold transition-colors"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              <span className="text-[10px] uppercase tracking-widest text-brand-blue/70 dark:text-luxury-white/70 group-hover:text-brand-gold transition-colors">Twitter</span>
            </a>
            <a href="https://www.facebook.com/share/15yPEhhbaGx/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 p-6 border border-brand-blue/5 dark:border-luxury-white/5 bg-brand-blue/[0.01] dark:bg-luxury-white/[0.01] rounded-xl hover:border-brand-gold/50 transition-colors group">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-brand-blue dark:text-luxury-white group-hover:text-brand-gold transition-colors"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              <span className="text-[10px] uppercase tracking-widest text-brand-blue/70 dark:text-luxury-white/70 group-hover:text-brand-gold transition-colors">Facebook</span>
            </a>
            <a href="https://www.reddit.com/u/Rheole_/s/f2JFUndaOE" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 p-6 border border-brand-blue/5 dark:border-luxury-white/5 bg-brand-blue/[0.01] dark:bg-luxury-white/[0.01] rounded-xl hover:border-brand-gold/50 transition-colors group">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-brand-blue dark:text-luxury-white group-hover:text-brand-gold transition-colors"><path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.688-.561-1.249-1.249-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/></svg>
              <span className="text-[10px] uppercase tracking-widest text-brand-blue/70 dark:text-luxury-white/70 group-hover:text-brand-gold transition-colors">Reddit</span>
            </a>
          </div>
        </div>

        {/* Footer Note */}
        <p className="text-xs text-brand-blue/45 dark:text-luxury-white/45 italic leading-relaxed max-w-xl mx-auto mt-4">
          The world becomes more meaningful when people better understand the places, communities, and moments around them.
        </p>

        {/* Brand Block */}
        <div className="flex flex-col gap-1 mt-6 text-[10px] uppercase tracking-widest text-brand-blue/35 dark:text-luxury-white/35">
          <span>RHEOLE TECHNOLOGIES PRIVATE LIMITED</span>
          <span className="text-luxury-black dark:text-luxury-white font-medium">The Pulse of Your World.</span>
        </div>
      </motion.div>
    </div>
  );
}
