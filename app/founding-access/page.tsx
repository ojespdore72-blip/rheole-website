"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Loader2 } from "lucide-react";

const InputField = ({ label, name, type = "text", required = true, value, onChange }: any) => (
  <div className="flex flex-col gap-2">
    <label className="text-[10px] md:text-xs uppercase tracking-widest text-brand-blue/60 dark:text-luxury-white/60 font-medium">
      {label} {required && <span className="text-brand-gold">*</span>}
    </label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className="w-full bg-brand-blue/[0.02] dark:bg-luxury-white/[0.02] border border-brand-blue/10 dark:border-luxury-white/10 rounded-lg px-4 py-3 text-sm md:text-base text-brand-blue dark:text-luxury-white focus:!outline-none focus-visible:!outline-none focus:!ring-0 focus:border-brand-gold transition-all"
    />
  </div>
);

export default function FoundingAccessPage() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Form Data
  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    email: "",
    mobile: "",
    country: "India",
    city: "Bengaluru",
    discovery: "",
    excitement: "",
    otp: "",
  });

  const [referralCode, setReferralCode] = useState("");
  const [resendTimer, setResendTimer] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (resendTimer > 0) {
      interval = setInterval(() => setResendTimer((prev) => prev - 1), 1000);
    }
    return () => clearInterval(interval);
  }, [resendTimer]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError("");
  };

  const nextStep = () => setStep((s) => s + 1);
  const prevStep = () => setStep((s) => s - 1);

  // Step 1 -> Send OTP
  const handleSendOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.dob || !formData.mobile || !formData.country || !formData.city) {
      setError("Please fill in all personal details.");
      return;
    }

    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/founding-access/otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: formData.email }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      
      setResendTimer(30);
      nextStep(); // Go to OTP verification step
    } catch (err: any) {
      setError(err.message || "Failed to send verification email.");
    } finally {
      setLoading(false);
    }
  };

  // Step 2 -> Verify OTP
  const handleVerifyOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.otp || formData.otp.length !== 6) {
      setError("Please enter the 6-digit code.");
      return;
    }

    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/founding-access/otp", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: formData.email, otp: formData.otp }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      
      nextStep(); // Go to Your Story step
    } catch (err: any) {
      setError(err.message || "Invalid verification code.");
    } finally {
      setLoading(false);
    }
  };

  // Step 3 -> Go to Review
  const handleStorySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.excitement) {
      setError("Please tell us what excites you about Rheole.");
      return;
    }
    nextStep();
  };

  // Step 4 -> Final Submit
  const handleFinalSubmit = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/founding-access/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      
      setReferralCode(data.referralCode);
      nextStep(); // Go to Success
    } catch (err: any) {
      setError(err.message || "Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const slideUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }
  };

  return (
    <div className="w-full min-h-screen py-32 px-6 md:px-12 flex flex-col items-center justify-center">
      <div className="w-full max-w-xl">
        {step < 5 && (
          <div className="flex flex-col gap-4 text-center mb-16">
            <h1 className="text-3xl md:text-5xl font-light tracking-wide uppercase text-brand-blue dark:text-luxury-white font-serif-editorial">
              Founding Access
            </h1>
            <p className="text-sm md:text-md uppercase tracking-widest text-brand-blue/60 dark:text-luxury-white/60 font-medium">
              Join the first generation of people helping shape Rheole.
            </p>
          </div>
        )}

        <div className="relative w-full overflow-hidden min-h-[400px]">
          <AnimatePresence mode="wait">
            {/* STEP 1: PERSONAL DETAILS */}
            {step === 1 && (
              <motion.form key="step1" {...slideUp} onSubmit={handleSendOTP} className="flex flex-col gap-8">
                <div className="text-center mb-4">
                  <p className="text-xs uppercase tracking-widest text-brand-gold">Step 1 of 3: Personal Details</p>
                  <p className="text-sm text-brand-blue/70 dark:text-luxury-white/70 mt-4 leading-relaxed max-w-md mx-auto">
                    Before Rheole becomes publicly available, a limited number of early members will receive Founding Access.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <InputField label="Full Name" name="fullName" value={formData.fullName} onChange={handleChange} />
                  <InputField label="Date of Birth" name="dob" type="date" value={formData.dob} onChange={handleChange} />
                  <InputField label="Email Address" name="email" type="email" value={formData.email} onChange={handleChange} />
                  <InputField label="Mobile Number" name="mobile" type="tel" value={formData.mobile} onChange={handleChange} />
                  <InputField label="Country" name="country" value={formData.country} onChange={handleChange} />
                  <InputField label="City" name="city" value={formData.city} onChange={handleChange} />
                </div>

                {error && <p className="text-xs text-red-500 tracking-widest uppercase text-center mt-4">{error}</p>}

                <button
                  type="submit"
                  disabled={loading}
                  className="mt-8 w-full border border-brand-blue/30 dark:border-luxury-white/20 hover:border-brand-gold hover:text-brand-gold text-brand-blue dark:text-luxury-white rounded-full py-4 text-xs uppercase tracking-widest font-medium transition-all flex justify-center items-center gap-2"
                >
                  {loading && <Loader2 className="w-4 h-4 animate-spin" />}
                  Continue to Verification
                </button>
              </motion.form>
            )}

            {/* STEP 2: OTP VERIFICATION */}
            {step === 2 && (
              <motion.form key="step2" {...slideUp} onSubmit={handleVerifyOTP} className="flex flex-col gap-8">
                <div className="text-center mb-4">
                  <p className="text-xs uppercase tracking-widest text-brand-gold">Email Verification</p>
                  <p className="text-sm text-brand-blue/70 dark:text-luxury-white/70 mt-4 leading-relaxed max-w-md mx-auto">
                    We sent a 6-digit code to <strong>{formData.email}</strong>. This code expires in 10 minutes.
                  </p>
                </div>

                <InputField label="Verification Code" name="otp" type="text" value={formData.otp} onChange={handleChange} />

                {error && <p className="text-xs text-red-500 tracking-widest uppercase text-center mt-4">{error}</p>}

                <div className="flex flex-col gap-4 mt-8">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full border border-brand-gold bg-brand-gold/5 hover:bg-brand-gold/10 text-brand-gold rounded-full py-4 text-xs uppercase tracking-widest font-medium transition-all flex justify-center items-center gap-2"
                  >
                    {loading && <Loader2 className="w-4 h-4 animate-spin" />}
                    Verify Email
                  </button>

                  <button
                    type="button"
                    onClick={(e) => { e.preventDefault(); handleSendOTP(e as any); }}
                    disabled={loading || resendTimer > 0}
                    className="text-xs uppercase tracking-widest text-brand-blue/50 dark:text-luxury-white/50 hover:text-brand-blue dark:hover:text-luxury-white transition-colors py-2"
                  >
                    {resendTimer > 0 ? `Resend Code in ${resendTimer}s` : "Resend Code"}
                  </button>
                  <button
                    type="button"
                    onClick={prevStep}
                    className="text-xs uppercase tracking-widest text-brand-blue/40 dark:text-luxury-white/40 hover:text-brand-blue dark:hover:text-luxury-white transition-colors"
                  >
                    Change Email
                  </button>
                </div>
              </motion.form>
            )}

            {/* STEP 3: YOUR STORY */}
            {step === 3 && (
              <motion.form key="step3" {...slideUp} onSubmit={handleStorySubmit} className="flex flex-col gap-8">
                <div className="text-center mb-4">
                  <p className="text-xs uppercase tracking-widest text-brand-gold">Step 2 of 3: Your Story</p>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-widest text-brand-blue/60 dark:text-luxury-white/60">
                    How did you discover Rheole? (Optional)
                  </label>
                  <input
                    type="text"
                    name="discovery"
                    value={formData.discovery}
                    onChange={handleChange}
                    className="w-full bg-brand-blue/[0.02] dark:bg-luxury-white/[0.02] border border-brand-blue/10 dark:border-luxury-white/10 rounded-lg px-4 py-3 text-sm md:text-base text-brand-blue dark:text-luxury-white focus:!outline-none focus-visible:!outline-none focus:!ring-0 focus:border-brand-gold transition-all"
                  />
                </div>

                <div className="flex flex-col gap-2 mt-4">
                  <label className="text-xs uppercase tracking-widest text-brand-blue/60 dark:text-luxury-white/60">
                    What excites you most about Rheole? <span className="text-brand-gold">*</span>
                  </label>
                  <textarea
                    name="excitement"
                    rows={4}
                    value={formData.excitement}
                    onChange={handleChange}
                    className="w-full bg-brand-blue/[0.02] dark:bg-luxury-white/[0.02] border border-brand-blue/10 dark:border-luxury-white/10 rounded-lg px-4 py-3 text-sm md:text-base text-brand-blue dark:text-luxury-white focus:!outline-none focus-visible:!outline-none focus:!ring-0 focus:border-brand-gold transition-all resize-none"
                  />
                </div>

                {error && <p className="text-xs text-red-500 tracking-widest uppercase text-center mt-4">{error}</p>}

                <div className="flex gap-4 mt-8">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="w-1/3 border border-brand-blue/10 dark:border-luxury-white/10 hover:border-brand-blue/30 dark:hover:border-luxury-white/30 text-brand-blue/60 dark:text-luxury-white/60 rounded-full py-4 text-xs uppercase tracking-widest font-medium transition-all"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="w-2/3 border border-brand-blue/30 dark:border-luxury-white/20 hover:border-brand-gold hover:text-brand-gold text-brand-blue dark:text-luxury-white rounded-full py-4 text-xs uppercase tracking-widest font-medium transition-all"
                  >
                    Review Application
                  </button>
                </div>
              </motion.form>
            )}

            {/* STEP 4: REVIEW */}
            {step === 4 && (
              <motion.div key="step4" {...slideUp} className="flex flex-col gap-8">
                <div className="text-center mb-4">
                  <p className="text-xs uppercase tracking-widest text-brand-gold">Step 3 of 3: Review</p>
                </div>

                <div className="border border-brand-blue/10 dark:border-luxury-white/10 rounded-xl p-8 flex flex-col gap-6 backdrop-blur-sm bg-brand-blue/[0.02] dark:bg-luxury-white/[0.02]">
                  <div className="flex justify-between border-b border-brand-blue/5 dark:border-luxury-white/5 pb-4">
                    <span className="text-xs uppercase tracking-widest text-brand-blue/50 dark:text-luxury-white/50">Name</span>
                    <span className="text-sm">{formData.fullName}</span>
                  </div>
                  <div className="flex justify-between border-b border-brand-blue/5 dark:border-luxury-white/5 pb-4">
                    <span className="text-xs uppercase tracking-widest text-brand-blue/50 dark:text-luxury-white/50">Email</span>
                    <span className="text-sm">{formData.email}</span>
                  </div>
                  <div className="flex justify-between border-b border-brand-blue/5 dark:border-luxury-white/5 pb-4">
                    <span className="text-xs uppercase tracking-widest text-brand-blue/50 dark:text-luxury-white/50">Location</span>
                    <span className="text-sm">{formData.city}, {formData.country}</span>
                  </div>
                </div>

                {error && <p className="text-xs text-red-500 tracking-widest uppercase text-center mt-4">{error}</p>}

                <div className="flex gap-4 mt-8">
                  <button
                    type="button"
                    onClick={prevStep}
                    disabled={loading}
                    className="w-1/3 border border-brand-blue/10 dark:border-luxury-white/10 hover:border-brand-blue/30 dark:hover:border-luxury-white/30 text-brand-blue/60 dark:text-luxury-white/60 rounded-full py-4 text-xs uppercase tracking-widest font-medium transition-all"
                  >
                    Edit
                  </button>
                  <button
                    onClick={handleFinalSubmit}
                    disabled={loading}
                    className="w-2/3 border border-brand-gold bg-brand-gold/5 hover:bg-brand-gold/10 text-brand-gold rounded-full py-4 text-xs uppercase tracking-widest font-medium transition-all flex justify-center items-center gap-2"
                  >
                    {loading && <Loader2 className="w-4 h-4 animate-spin" />}
                    Submit Application
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 5: SUCCESS */}
            {step === 5 && (
              <motion.div key="step5" {...slideUp} className="flex flex-col items-center text-center gap-10 py-12">
                <div className="w-24 h-24 rounded-full border-2 border-brand-gold/20 flex items-center justify-center bg-brand-gold/5">
                  <span className="text-brand-gold text-2xl">✓</span>
                </div>
                
                <div className="flex flex-col gap-4">
                  <h2 className="text-3xl md:text-4xl font-light font-serif-editorial text-brand-blue dark:text-luxury-white">
                    Welcome to Founding Access.
                  </h2>
                  <p className="text-sm text-brand-blue/70 dark:text-luxury-white/70 max-w-md mx-auto leading-relaxed">
                    Thank you for joining the first generation of Rheole members. Your Founding Access profile has been created.
                  </p>
                </div>

                <div className="w-full border border-brand-gold/30 rounded-xl p-8 flex flex-col items-center gap-4 bg-brand-gold/[0.02]">
                  <p className="text-xs uppercase tracking-widest text-brand-gold/70">Your Referral Code</p>
                  <p className="text-2xl md:text-3xl font-medium tracking-widest text-brand-gold">{referralCode}</p>
                  <p className="text-[10px] uppercase tracking-widest text-brand-blue/50 dark:text-luxury-white/50 mt-2">
                    Share this code to unlock priority access tiers.
                  </p>
                </div>

                <Link
                  href={`/founding-dashboard?email=${encodeURIComponent(formData.email)}`}
                  className="mt-4 border border-brand-blue/30 dark:border-luxury-white/20 hover:border-brand-gold hover:text-brand-gold rounded-full px-8 py-4 text-xs uppercase tracking-widest font-medium transition-all text-brand-blue dark:text-luxury-white"
                >
                  View Your Dashboard
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
