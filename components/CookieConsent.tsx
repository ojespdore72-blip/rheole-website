"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Check if consent has already been given
    const consent = localStorage.getItem("rheole_cookie_consent");
    if (!consent) {
      // Trigger entry animation after brief delay
      const timer = setTimeout(() => setVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("rheole_cookie_consent", "accepted");
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("rheole_cookie_consent", "declined");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          role="dialog"
          aria-labelledby="cookie-title"
          aria-describedby="cookie-desc"
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-md bg-luxury-white/95 dark:bg-luxury-black/95 backdrop-blur-md border border-brand-blue/15 dark:border-luxury-white/10 p-6 rounded-lg shadow-xl z-50 flex flex-col gap-4 font-sans text-left"
        >
          <div className="flex flex-col gap-1">
            <h4 id="cookie-title" className="text-xs uppercase tracking-widest text-brand-gold font-semibold">
              Privacy Preference
            </h4>
            <p id="cookie-desc" className="text-[11px] leading-relaxed text-brand-blue/70 dark:text-luxury-white/70">
              We respect your right to privacy. Rheole uses minimal cookies to optimize routing efficiency and evaluate platform performance. No tracking signals are shared with third parties.
            </p>
          </div>

          <div className="flex gap-4 items-center justify-end mt-1 text-[10px] uppercase tracking-widest font-medium">
            <button
              onClick={handleDecline}
              aria-label="Decline performance cookies"
              className="text-brand-blue/70 dark:text-luxury-white/40 hover:text-brand-blue dark:hover:text-luxury-white transition-colors duration-300 py-2 px-3 focus:outline-none"
            >
              Decline
            </button>
            <button
              onClick={handleAccept}
              aria-label="Accept performance cookies"
              className="bg-brand-blue dark:bg-luxury-white text-luxury-white dark:text-luxury-black hover:bg-brand-gold dark:hover:bg-brand-gold hover:text-luxury-white dark:hover:text-luxury-white px-5 py-2.5 rounded-full transition-all duration-300 focus:outline-none"
            >
              Accept
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
