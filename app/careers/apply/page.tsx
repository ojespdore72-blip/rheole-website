"use client";

import React, { useState, useEffect, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";

// Floating Label Input Component
const FloatingInput = ({ label, type = "text", value, onChange, required = false, autoFocus = false }: any) => {
  const [isFocused, setIsFocused] = useState(false);
  const isActive = isFocused || value !== "";

  return (
    <div className="relative w-full mt-6">
      <motion.label
        initial={false}
        animate={{
          y: isActive ? -24 : 12,
          scale: isActive ? 0.8 : 1,
          color: isActive ? "#C5A880" : "rgba(156, 163, 175, 0.6)"
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="absolute left-0 top-0 origin-left pointer-events-none font-mono tracking-widest uppercase text-xs"
      >
        {label} {required && "*"}
      </motion.label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        required={required}
        autoFocus={autoFocus}
        className="w-full bg-transparent border-b border-brand-blue/20 dark:border-white/20 py-3 text-lg font-light text-brand-blue dark:text-white focus:outline-none focus:border-brand-gold transition-colors"
      />
    </div>
  );
};

const FloatingTextarea = ({ label, value, onChange, required = false }: any) => {
  const [isFocused, setIsFocused] = useState(false);
  const isActive = isFocused || value !== "";

  return (
    <div className="relative w-full mt-6">
      <motion.label
        initial={false}
        animate={{
          y: isActive ? -24 : 12,
          scale: isActive ? 0.8 : 1,
          color: isActive ? "#C5A880" : "rgba(156, 163, 175, 0.6)"
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="absolute left-0 top-0 origin-left pointer-events-none font-mono tracking-widest uppercase text-xs"
      >
        {label} {required && "*"}
      </motion.label>
      <textarea
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        required={required}
        rows={6}
        className="w-full bg-transparent border-b border-brand-blue/20 dark:border-white/20 py-3 text-lg font-light text-brand-blue dark:text-white focus:outline-none focus:border-brand-gold transition-colors resize-none"
      />
    </div>
  );
};

const FormFlow = () => {
  const searchParams = useSearchParams();
  const role = searchParams.get("role") || "General Application";
  const router = useRouter();

  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    location: "",
    linkedin: "",
    github: "",
    why: ""
  });

  const nextStep = () => setStep((s) => Math.min(s + 1, 3));
  const prevStep = () => setStep((s) => Math.max(s - 1, 0));

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && step < 2) {
      e.preventDefault();
      nextStep();
    }
  };

  const submitApplication = () => {
    // Simulate API call
    setTimeout(() => {
      setStep(3); // Success step
    }, 1000);
  };

  return (
    <div className="min-h-screen w-full bg-luxury-white dark:bg-[#020205] text-brand-blue dark:text-white flex flex-col selection:bg-brand-gold/20 font-sans relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute inset-0 opacity-20 pointer-events-none z-0">
        <motion.div 
          animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-brand-indigo/10 rounded-full blur-[100px]" 
        />
        <motion.div 
          animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-[50vw] h-[50vw] bg-brand-gold/5 rounded-full blur-[120px]" 
        />
      </div>

      {/* Top Navigation */}
      <header className="relative z-10 w-full p-6 md:p-12 flex justify-between items-center">
        <button onClick={() => router.back()} className="text-xs font-mono uppercase tracking-widest text-brand-blue/60 dark:text-white/60 hover:text-brand-gold transition-colors">
          ← Back
        </button>
        <span className="text-xs font-mono uppercase tracking-[0.3em] text-brand-gold text-center hidden md:block">
          {role}
        </span>
        <div className="w-16" /> {/* Spacer for flex balance */}
      </header>

      {/* Main Form Area */}
      <main className="flex-1 relative z-10 flex flex-col items-center justify-center px-6" onKeyDown={handleKeyDown}>
        <div className="w-full max-w-2xl mx-auto relative h-[500px]">
          
          <AnimatePresence mode="wait">
            
            {/* STEP 0: Identity */}
            {step === 0 && (
              <motion.div
                key="step0"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 flex flex-col gap-8 justify-center"
              >
                <div>
                  <h1 className="text-4xl md:text-5xl font-light font-serif-editorial mb-4">Let's start with the basics.</h1>
                  <p className="text-sm font-light text-brand-blue/60 dark:text-white/60 tracking-wide uppercase">Step 1 of 3</p>
                </div>

                <div className="flex flex-col gap-6">
                  <FloatingInput 
                    label="Full Name" 
                    value={formData.name} 
                    onChange={(e: any) => setFormData({...formData, name: e.target.value})} 
                    autoFocus 
                  />
                  <FloatingInput 
                    label="Email Address" 
                    type="email"
                    value={formData.email} 
                    onChange={(e: any) => setFormData({...formData, email: e.target.value})} 
                  />
                  <FloatingInput 
                    label="Current City" 
                    value={formData.location} 
                    onChange={(e: any) => setFormData({...formData, location: e.target.value})} 
                  />
                </div>

                <div className="mt-8 flex justify-end">
                  <button 
                    onClick={nextStep}
                    disabled={!formData.name || !formData.email}
                    className="px-8 py-4 bg-brand-blue dark:bg-white text-white dark:text-black rounded-full text-xs font-semibold uppercase tracking-widest disabled:opacity-30 disabled:cursor-not-allowed hover:scale-105 transition-all"
                  >
                    Continue
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 1: Footprint */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 flex flex-col gap-8 justify-center"
              >
                <div>
                  <h1 className="text-4xl md:text-5xl font-light font-serif-editorial mb-4">Your digital footprint.</h1>
                  <p className="text-sm font-light text-brand-blue/60 dark:text-white/60 tracking-wide uppercase">Step 2 of 3</p>
                </div>

                <div className="flex flex-col gap-6">
                  <FloatingInput 
                    label="LinkedIn Profile URL" 
                    type="url"
                    value={formData.linkedin} 
                    onChange={(e: any) => setFormData({...formData, linkedin: e.target.value})} 
                    autoFocus 
                  />
                  <FloatingInput 
                    label="GitHub / Portfolio URL" 
                    type="url"
                    value={formData.github} 
                    onChange={(e: any) => setFormData({...formData, github: e.target.value})} 
                  />
                </div>

                <div className="mt-8 flex justify-between items-center">
                  <button onClick={prevStep} className="text-xs uppercase tracking-widest text-brand-blue/60 dark:text-white/60 hover:text-brand-gold transition-colors">
                    Back
                  </button>
                  <button 
                    onClick={nextStep}
                    className="px-8 py-4 bg-brand-blue dark:bg-white text-white dark:text-black rounded-full text-xs font-semibold uppercase tracking-widest hover:scale-105 transition-all"
                  >
                    Continue
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 2: The Why */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 flex flex-col gap-8 justify-center"
              >
                <div>
                  <h1 className="text-4xl md:text-5xl font-light font-serif-editorial mb-4">Why Rheole?</h1>
                  <p className="text-sm font-light text-brand-blue/60 dark:text-white/60 tracking-wide uppercase">Final Step</p>
                </div>

                <div className="flex flex-col gap-6">
                  <FloatingTextarea 
                    label="What draws you to building an intelligence layer for the physical world?" 
                    value={formData.why} 
                    onChange={(e: any) => setFormData({...formData, why: e.target.value})} 
                  />
                </div>

                <div className="mt-8 flex justify-between items-center">
                  <button onClick={prevStep} className="text-xs uppercase tracking-widest text-brand-blue/60 dark:text-white/60 hover:text-brand-gold transition-colors">
                    Back
                  </button>
                  <button 
                    onClick={submitApplication}
                    disabled={!formData.why || formData.why.length < 10}
                    className="px-8 py-4 bg-brand-gold text-white rounded-full text-xs font-semibold uppercase tracking-widest disabled:opacity-30 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(197,168,128,0.4)] hover:scale-105 transition-all"
                  >
                    Submit Application
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 3: Success */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 flex flex-col gap-8 items-center justify-center text-center"
              >
                <div className="w-24 h-24 rounded-full border border-brand-gold flex items-center justify-center bg-brand-gold/10 text-brand-gold shadow-[0_0_40px_rgba(197,168,128,0.3)]">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-light font-serif-editorial mb-4">Application Received.</h1>
                  <p className="text-lg font-light text-brand-blue/60 dark:text-white/60 max-w-md mx-auto">
                    Thank you, {formData.name.split(' ')[0]}. We appreciate your interest in building the future of physical intelligence with us. We will be in touch shortly.
                  </p>
                </div>
                <Link 
                  href="/careers"
                  className="mt-8 text-xs uppercase tracking-widest border border-brand-blue/20 dark:border-white/20 px-8 py-4 rounded-full hover:border-brand-gold hover:text-brand-gold transition-colors"
                >
                  Return to Careers
                </Link>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </main>

      {/* Bottom Progress Bar */}
      {step < 3 && (
        <div className="h-1 w-full bg-brand-blue/5 dark:bg-white/5 relative z-10">
          <motion.div 
            className="h-full bg-brand-gold"
            animate={{ width: `${((step + 1) / 3) * 100}%` }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
        </div>
      )}
    </div>
  );
};

export default function ApplyPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-luxury-black flex items-center justify-center"><div className="w-8 h-8 border border-brand-gold rounded-full animate-spin border-t-transparent" /></div>}>
      <FormFlow />
    </Suspense>
  );
}
