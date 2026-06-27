"use client";

import React from "react";
import Link from "next/link";

export default function WaitlistForm() {
  return (
    <div className="w-full max-w-md mx-auto flex flex-col gap-4">
      <Link
        href="/founding-access"
        className="w-full flex items-center justify-between text-xs uppercase tracking-widest bg-transparent py-4 px-6 border border-brand-blue/30 hover:border-brand-gold dark:border-luxury-white/20 dark:hover:border-brand-gold focus:outline-none text-brand-blue dark:text-luxury-white transition-colors duration-500 rounded-full group"
      >
        <span>Apply for Founding Access</span>
        <span className="text-brand-blue/70 dark:text-luxury-white/50 group-hover:text-brand-gold transition-colors duration-300 font-medium">
          →
        </span>
      </Link>
    </div>
  );
}
