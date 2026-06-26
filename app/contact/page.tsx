"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SocialChannels from "@/components/SocialChannels";

type Intention = "General" | "Partnerships" | "Press" | "Talent";

export default function Contact() {
  const [intention, setIntention] = useState<Intention | null>(null);
  const [step, setStep] = useState(0); // 0: intention, 1: details, 2: message, 3: sending, 4: done
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  const handleIntention = (intent: Intention) => {
    setIntention(intent);
    setStep(1);
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1 && name && email) setStep(2);
    else if (step === 2 && message) submitForm();
  };

  const submitForm = async () => {
    setStep(3);
    setStatus("loading");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          name, 
          email, 
          subject: `${intention} Inquiry`, 
          message 
        }),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Something went wrong.");
      setStatus("success");
      setStep(4);
    } catch (err: any) {
      setStatus("error");
      setFeedback(err.message || "An unexpected error occurred.");
      setStep(2); // Go back to message step on error
    }
  };

  const spring = { type: "spring", stiffness: 300, damping: 30 };

  return (
    <div className="w-full min-h-screen bg-luxury-white dark:bg-[#020205] text-brand-blue dark:text-white overflow-hidden selection:bg-brand-gold/20 font-sans flex flex-col relative">
      {/* Dynamic Backgrounds */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{
            background: intention === 'Press' ? 'radial-gradient(ellipse at 80% 20%, rgba(197,168,128,0.15), transparent 50%)' :
                        intention === 'Partnerships' ? 'radial-gradient(ellipse at 20% 80%, rgba(79,70,229,0.15), transparent 50%)' :
                        intention === 'Talent' ? 'radial-gradient(ellipse at 50% 50%, rgba(16,185,129,0.1), transparent 50%)' :
                        'radial-gradient(ellipse at 50% 50%, rgba(255,255,255,0.05), transparent 50%)'
          }}
          transition={{ duration: 2 }}
          className="absolute inset-0 w-full h-full" 
        />
      </div>

      <main className="flex-grow flex flex-col items-center justify-center p-6 pt-32 relative z-10 w-full max-w-7xl mx-auto gap-24">
        <div className="w-full max-w-2xl flex flex-col items-center">
          
          <AnimatePresence mode="wait">
            {step === 0 && (
              <motion.div 
                key="step-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                className="w-full text-center flex flex-col gap-12"
              >
                <div className="flex flex-col gap-6">
                  <span className="text-xs uppercase tracking-[0.4em] font-mono text-brand-gold">Concierge</span>
                  <h1 className="text-4xl md:text-6xl font-light font-serif-editorial leading-tight">
                    How can we direct your conversation?
                  </h1>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {["Partnerships", "Press", "Talent", "General"].map((intent) => (
                    <button
                      key={intent}
                      onClick={() => handleIntention(intent as Intention)}
                      className="group relative p-6 spatial-glass rounded-3xl border border-brand-blue/10 dark:border-white/10 hover:border-brand-gold/50 transition-colors duration-500 overflow-hidden text-left"
                    >
                      <div className="absolute inset-0 bg-brand-blue/5 dark:bg-white/5 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                      <span className="relative z-10 text-xl font-light">{intent}</span>
                      <svg className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-gold opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 1 && (
              <motion.form 
                key="step-1"
                onSubmit={handleNext}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={spring}
                className="w-full max-w-xl spatial-glass p-8 md:p-12 rounded-[40px] border border-brand-blue/10 dark:border-white/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] dark:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] flex flex-col gap-8"
              >
                <div className="flex justify-between items-center border-b border-brand-blue/10 dark:border-white/10 pb-6">
                  <span className="text-xs uppercase tracking-[0.4em] font-mono text-brand-gold">{intention}</span>
                  <button type="button" onClick={() => setStep(0)} className="text-xs text-brand-blue/50 dark:text-white/50 hover:text-brand-blue dark:hover:text-white uppercase tracking-widest transition-colors">Restart</button>
                </div>
                
                <h2 className="text-3xl font-light font-serif-editorial">Who are we speaking with?</h2>
                
                <div className="flex flex-col gap-8">
                  <div className="relative group">
                    <input 
                      type="text" 
                      value={name}
                      onChange={e => setName(e.target.value)}
                      placeholder="Your Name" 
                      required
                      className="w-full bg-transparent border-b border-brand-blue/20 dark:border-white/20 py-4 text-xl md:text-2xl font-light focus:outline-none focus:border-brand-gold placeholder:text-brand-blue/30 dark:placeholder:text-white/20 transition-colors"
                    />
                  </div>
                  <div className="relative group">
                    <input 
                      type="email" 
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder="Your Email" 
                      required
                      className="w-full bg-transparent border-b border-brand-blue/20 dark:border-white/20 py-4 text-xl md:text-2xl font-light focus:outline-none focus:border-brand-gold placeholder:text-brand-blue/30 dark:placeholder:text-white/20 transition-colors"
                    />
                  </div>
                </div>

                <div className="pt-4 flex justify-end">
                  <button type="submit" disabled={!name || !email} className="px-8 py-4 bg-brand-blue dark:bg-white text-white dark:text-black rounded-full text-xs uppercase tracking-widest font-semibold hover:scale-105 transition-transform disabled:opacity-50 disabled:hover:scale-100 flex items-center gap-3">
                    Continue
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </button>
                </div>
              </motion.form>
            )}

            {step === 2 && (
              <motion.form 
                key="step-2"
                onSubmit={handleNext}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={spring}
                className="w-full max-w-2xl spatial-glass p-8 md:p-12 rounded-[40px] border border-brand-blue/10 dark:border-white/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] dark:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] flex flex-col gap-8"
              >
                <div className="flex justify-between items-center border-b border-brand-blue/10 dark:border-white/10 pb-6">
                  <span className="text-xs uppercase tracking-[0.4em] font-mono text-brand-gold">Hello, {name.split(' ')[0]}</span>
                  <button type="button" onClick={() => setStep(1)} className="text-xs text-brand-blue/50 dark:text-white/50 hover:text-brand-blue dark:hover:text-white uppercase tracking-widest transition-colors">Back</button>
                </div>
                
                <h2 className="text-3xl font-light font-serif-editorial">What's on your mind?</h2>
                
                <div className="relative group flex-grow">
                  <textarea 
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    placeholder={`Write your message regarding ${intention?.toLowerCase()}...`} 
                    required
                    rows={5}
                    className="w-full bg-transparent border border-brand-blue/10 dark:border-white/10 rounded-2xl p-6 text-lg font-light focus:outline-none focus:border-brand-gold placeholder:text-brand-blue/30 dark:placeholder:text-white/20 transition-colors resize-none bg-brand-blue/5 dark:bg-black/20"
                  />
                </div>

                {status === "error" && (
                  <p className="text-red-400 text-xs tracking-widest uppercase text-center font-mono">{feedback}</p>
                )}

                <div className="pt-4 flex justify-end">
                  <button type="submit" disabled={!message} className="px-8 py-4 bg-brand-gold text-black rounded-full text-xs uppercase tracking-widest font-semibold hover:scale-105 transition-transform disabled:opacity-50 disabled:hover:scale-100 flex items-center gap-3">
                    Send Message
                  </button>
                </div>
              </motion.form>
            )}

            {step === 3 && (
               <motion.div 
                 key="step-3"
                 initial={{ opacity: 0, scale: 0.9 }}
                 animate={{ opacity: 1, scale: 1 }}
                 exit={{ opacity: 0, scale: 1.1 }}
                 className="flex flex-col items-center justify-center gap-8"
               >
                 <motion.div animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} className="w-16 h-16 rounded-full border-2 border-brand-blue/10 dark:border-white/10 border-t-brand-gold" />
                 <p className="text-xs uppercase tracking-[0.4em] font-mono text-brand-gold">Establishing Secure Connection</p>
               </motion.div>
            )}

            {step === 4 && (
              <motion.div 
                key="step-4"
                initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="w-full max-w-xl text-center flex flex-col items-center gap-8"
              >
                <div className="w-24 h-24 rounded-full bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#C5A880" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <h2 className="text-4xl md:text-6xl font-light font-serif-editorial">Received.</h2>
                <p className="text-lg font-light text-brand-blue/60 dark:text-white/60">
                  Thank you, {name.split(' ')[0]}. Your message has been routed to the appropriate team. We will respond thoughtfully.
                </p>
                <button onClick={() => { setStep(0); setName(''); setEmail(''); setMessage(''); setIntention(null); setFeedback(''); }} className="mt-8 text-xs text-brand-gold uppercase tracking-widest hover:underline">
                  Return to Start
                </button>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

        {/* Social Channels Footer */}
        <SocialChannels />
      </main>
    </div>
  );
}
