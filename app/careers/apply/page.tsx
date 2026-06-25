"use client";

import React, { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { UploadCloud, CheckCircle2, ArrowLeft, ArrowRight, FileText } from "lucide-react";
import Link from "next/link";

const steps = [
  "Contact Information",
  "Digital Footprint",
  "Experience & Documents",
  "Compliance & Review"
];

function FloatingInput({ 
  label, type, id, name, value, onChange, required = false, placeholder = " " 
}: { 
  label: string; type: string; id: string; name: string; value: string; onChange: any; required?: boolean; placeholder?: string;
}) {
  return (
    <div className="relative w-full">
      <input
        required={required}
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="block px-4 pb-3 pt-6 w-full text-sm text-brand-blue bg-transparent border-b border-brand-blue/20 appearance-none focus:!outline-none focus:!ring-0 focus:!border-green-600 peer transition-colors"
      />
      <label
        htmlFor={id}
        className="absolute text-[10px] uppercase tracking-widest text-brand-blue/50 font-semibold duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 peer-focus:text-green-600"
      >
        {label} {required && "*"}
      </label>
    </div>
  );
}

function ApplyForm() {
  const searchParams = useSearchParams();
  const role = searchParams.get("role") || "General Application";

  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "+91 ",
    linkedin: "",
    portfolio: "",
    github: "",
    skills: "",
    authWork: false,
    termsAgreed: false
  });
  
  const [resume, setResume] = useState<File | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const validateStep = () => {
    if (currentStep === 0) {
      if (!formData.name || !formData.email) return false;
    }
    if (currentStep === 2) {
      if (!formData.skills || !resume) return false;
    }
    if (currentStep === 3) {
      if (!formData.authWork || !formData.termsAgreed) return false;
    }
    return true;
  };

  const nextStep = () => {
    if (validateStep()) {
      setErrorMsg("");
      setCurrentStep(prev => Math.min(prev + 1, steps.length - 1));
    } else {
      setErrorMsg("Please complete all required fields before continuing.");
    }
  };

  const prevStep = () => {
    setErrorMsg("");
    setCurrentStep(prev => Math.max(prev - 1, 0));
  };

  const handleSubmit = async () => {
    if (!validateStep()) {
      setErrorMsg("Please agree to all terms and complete required fields.");
      return;
    }

    setErrorMsg("");
    setIsSubmitting(true);

    try {
      const data = new FormData();
      data.append("role", role);
      Object.entries(formData).forEach(([key, value]) => {
        data.append(key, value.toString());
      });
      
      if (resume) {
        if (resume.size > 5 * 1024 * 1024) throw new Error("Resume must be less than 5MB.");
        data.append("resume", resume);
      }

      const response = await fetch("/api/apply", {
        method: "POST",
        body: data,
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to submit application");
      }

      setIsSuccess(true);
    } catch (error: any) {
      console.error(error);
      setErrorMsg(error.message || "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 50 : -50,
      opacity: 0
    })
  };

  if (isSuccess) {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="w-full max-w-2xl mx-auto py-32 px-6 flex flex-col items-center text-center gap-8 min-h-[60vh] justify-center">
        <CheckCircle2 className="w-16 h-16 text-brand-gold" />
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl md:text-5xl font-light font-serif-editorial text-brand-blue">Application Submitted</h1>
          <p className="text-brand-blue/70">Thank you for your interest in the <strong>{role}</strong> position. Your profile has been securely routed to our hiring team.</p>
        </div>
        <Link href="/careers" className="text-xs uppercase tracking-widest font-medium border border-brand-blue/20 hover:border-brand-gold hover:text-brand-gold transition-colors duration-300 rounded-full px-8 py-3 text-brand-blue mt-4">
          Return to Careers
        </Link>
      </motion.div>
    );
  }

  return (
    <div className="w-full max-w-3xl mx-auto py-24 px-6 md:px-12 flex flex-col min-h-screen">
      <Link href="/careers" className="flex items-center gap-2 text-xs uppercase tracking-widest text-brand-blue/50 hover:text-brand-gold transition-colors w-fit mb-12">
        <ArrowLeft className="w-4 h-4" /> Exit Application
      </Link>

      {/* Progress Bar */}
      <div className="w-full flex items-center justify-between mb-16 relative">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[1px] bg-brand-blue/10 -z-10" />
        <div 
          className="absolute left-0 top-1/2 -translate-y-1/2 h-[1px] bg-brand-gold -z-10 transition-all duration-500 ease-out"
          style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
        />
        {steps.map((step, idx) => (
          <div key={idx} className="flex flex-col items-center gap-3">
            <div className={`w-3 h-3 rounded-full transition-colors duration-500 ${idx <= currentStep ? 'bg-brand-gold' : 'bg-brand-blue/10 border border-brand-blue/20'}`} />
            <span className={`hidden md:block absolute top-6 text-[9px] uppercase tracking-widest font-semibold transition-colors duration-500 ${idx <= currentStep ? 'text-brand-gold' : 'text-brand-blue/30'}`}>
              Step {idx + 1}
            </span>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-4 border-b border-brand-blue/10 pb-8 mb-8">
        <h1 className="text-3xl md:text-5xl font-light font-serif-editorial text-brand-blue">
          {role}
        </h1>
        <p className="text-sm tracking-wide text-brand-blue/60">{steps[currentStep]}</p>
      </div>

      <div className="relative min-h-[400px]">
        <AnimatePresence mode="wait" custom={1}>
          <motion.div
            key={currentStep}
            custom={1}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
            className="flex flex-col gap-8 absolute inset-0"
          >
            {/* STEP 1: CONTACT */}
            {currentStep === 0 && (
              <div className="flex flex-col gap-6">
                <FloatingInput label="Legal Full Name" type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required />
                <FloatingInput label="Primary Email ID" type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required />
                <FloatingInput label="Phone Number" type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} />
              </div>
            )}

            {/* STEP 2: DIGITAL FOOTPRINT */}
            {currentStep === 1 && (
              <div className="flex flex-col gap-6">
                <p className="text-xs text-brand-blue/50 italic mb-2">Providing links to your past work helps us understand your craftsmanship.</p>
                <FloatingInput label="LinkedIn Profile URL" type="url" id="linkedin" name="linkedin" value={formData.linkedin} onChange={handleInputChange} />
                <FloatingInput label="Personal Website / Portfolio URL" type="url" id="portfolio" name="portfolio" value={formData.portfolio} onChange={handleInputChange} />
                <FloatingInput label="GitHub / Engineering Profile URL" type="url" id="github" name="github" value={formData.github} onChange={handleInputChange} />
              </div>
            )}

            {/* STEP 3: EXPERIENCE & DOCUMENTS */}
            {currentStep === 2 && (
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-2">
                  <label htmlFor="skills" className="text-[10px] uppercase tracking-widest text-brand-blue/60 font-semibold">Brief note on your craftsmanship & experience *</label>
                  <textarea 
                    required 
                    id="skills" 
                    name="skills" 
                    value={formData.skills}
                    onChange={handleInputChange}
                    rows={4} 
                    className="w-full bg-transparent border-b border-brand-blue/20 px-4 py-3 text-sm focus:!outline-none focus:!ring-0 focus:!border-green-600 transition-colors text-brand-blue resize-y" 
                    placeholder="Tell us what you've built..." 
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase tracking-widest text-brand-blue/60 font-semibold">Resume / CV (PDF) *</label>
                  <div className="relative w-full border border-dashed border-brand-blue/20 hover:border-green-600 transition-colors rounded-xl p-8 flex flex-col items-center justify-center gap-4 bg-brand-blue/[0.01]">
                    <input 
                      type="file" 
                      accept=".pdf,.doc,.docx" 
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      onChange={(e) => setResume(e.target.files?.[0] || null)}
                      required
                    />
                    {resume ? <FileText className="w-8 h-8 text-green-600" /> : <UploadCloud className="w-8 h-8 text-brand-blue/40" />}
                    <div className="text-center">
                      <p className="text-sm font-medium text-brand-blue">{resume ? resume.name : "Click to upload or drag and drop"}</p>
                      <p className="text-xs text-brand-blue/50 mt-1">{resume ? `${(resume.size / 1024 / 1024).toFixed(2)} MB` : "PDF up to 5MB"}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 4: COMPLIANCE & REVIEW */}
            {currentStep === 3 && (
              <div className="flex flex-col gap-8">
                <div className="bg-brand-blue/[0.02] border border-brand-blue/10 p-6 rounded-xl flex flex-col gap-6">
                  <h3 className="text-xs uppercase tracking-widest font-semibold text-brand-blue">Compliance & Disclosures</h3>
                  
                  <label className="flex items-start gap-4 cursor-pointer group">
                    <input type="checkbox" name="authWork" checked={formData.authWork} onChange={handleInputChange} className="mt-1 accent-green-600 w-4 h-4 cursor-pointer" />
                    <span className="text-sm text-brand-blue/80 leading-relaxed">
                      I am legally authorized to work in the locations required for this role, and I will not now or in the future require sponsorship for employment visa status. *
                    </span>
                  </label>

                  <label className="flex items-start gap-4 cursor-pointer group">
                    <input type="checkbox" name="termsAgreed" checked={formData.termsAgreed} onChange={handleInputChange} className="mt-1 accent-green-600 w-4 h-4 cursor-pointer" />
                    <span className="text-sm text-brand-blue/80 leading-relaxed">
                      I acknowledge that the information I have provided is accurate. I agree to Rheole's <Link href="/terms" target="_blank" className="underline hover:text-brand-gold">Terms of Service</Link> and <Link href="/privacy" target="_blank" className="underline hover:text-brand-gold">Privacy Policy</Link> regarding applicant data processing. *
                    </span>
                  </label>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Error Message */}
      {errorMsg && (
        <div className="text-red-500 text-sm bg-red-50 p-4 rounded-lg border border-red-100 mb-8 mt-12">
          {errorMsg}
        </div>
      )}

      {/* Controls */}
      <div className="flex items-center justify-between border-t border-brand-blue/10 pt-8 mt-12 z-20">
        {currentStep > 0 ? (
          <button onClick={prevStep} className="text-xs uppercase tracking-widest font-medium text-brand-blue/50 hover:text-brand-blue transition-colors px-6 py-3">
            Previous
          </button>
        ) : <div />}

        {currentStep < steps.length - 1 ? (
          <button onClick={nextStep} className="bg-brand-blue text-white hover:bg-brand-gold transition-colors rounded-full px-8 py-3 text-xs font-semibold uppercase tracking-widest flex items-center gap-2">
            Continue <ArrowRight className="w-4 h-4" />
          </button>
        ) : (
          <button 
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="bg-brand-blue text-white hover:bg-green-600 transition-colors rounded-full px-10 py-4 text-xs font-semibold uppercase tracking-widest disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 shadow-lg"
          >
            {isSubmitting ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Submitting securely...
              </>
            ) : (
              "Submit Application"
            )}
          </button>
        )}
      </div>
    </div>
  );
}

export default function ApplyPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-brand-blue">Loading Application Engine...</div>}>
      <ApplyForm />
    </Suspense>
  );
}
