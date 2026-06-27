"use client";

import React, { useEffect, useState, Suspense } from "react";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Loader2 } from "lucide-react";

function DashboardContent() {
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!email) {
      setError("No email provided.");
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      try {
        const res = await fetch(`/api/founding-dashboard?email=${encodeURIComponent(email)}`);
        const json = await res.json();
        if (!res.ok) {
          const detailStr = json.details ? ` - ${json.details.message || JSON.stringify(json.details)}` : "";
          throw new Error((json.error || "Unknown error") + detailStr);
        }
        setData(json.data);
      } catch (err: any) {
        setError(err.message || "Failed to load dashboard.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [email]);

  if (loading) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-brand-gold" />
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="w-full min-h-screen flex flex-col items-center justify-center gap-6">
        <p className="text-red-500 uppercase tracking-widest text-xs">{error}</p>
        <Link href="/founding-access" className="border border-brand-blue/30 dark:border-luxury-white/20 rounded-full px-6 py-3 text-xs uppercase tracking-widest text-brand-blue dark:text-luxury-white hover:text-brand-gold hover:border-brand-gold transition-colors">
          Return to Application
        </Link>
      </div>
    );
  }

  const { referralCode, referralCount, fullName, status } = data;

  const tiers = [
    { threshold: 1, name: "Priority Access" },
    { threshold: 3, name: "Extended Intelligence Access" },
    { threshold: 5, name: "Founding Community Access" },
    { threshold: 10, name: "Exclusive Founder Events" },
  ];

  let currentTier = "Base Founding Access";
  for (let i = tiers.length - 1; i >= 0; i--) {
    if (referralCount >= tiers[i].threshold) {
      currentTier = tiers[i].name;
      break;
    }
  }

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
  };

  return (
    <div className="w-full min-h-screen py-32 px-6 md:px-12 flex flex-col items-center">
      <motion.div {...fadeInUp} className="w-full max-w-3xl flex flex-col gap-16">
        <div className="text-center flex flex-col gap-4">
          <h1 className="text-3xl md:text-5xl font-light tracking-wide uppercase text-brand-blue dark:text-luxury-white font-serif-editorial">
            Founding Dashboard
          </h1>
          <p className="text-sm uppercase tracking-widest text-brand-blue/70 dark:text-luxury-white/60 font-medium">
            Welcome back, {fullName}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Status Card */}
          <div className="border border-brand-blue/10 dark:border-luxury-white/10 rounded-2xl p-8 flex flex-col gap-6 backdrop-blur-sm bg-brand-blue/[0.02] dark:bg-luxury-white/[0.02]">
            <p className="text-xs uppercase tracking-widest text-brand-blue/70 dark:text-luxury-white/50 border-b border-brand-blue/5 dark:border-luxury-white/5 pb-4">
              Application Status
            </p>
            <div className="flex flex-col gap-2">
              <span className="text-2xl font-serif-editorial italic text-brand-blue dark:text-luxury-white capitalize">
                {status}
              </span>
              <span className="text-xs text-brand-blue/70 dark:text-luxury-white/60">
                You will receive an email when your access is ready.
              </span>
            </div>
          </div>

          {/* Referral Card */}
          <div className="border border-brand-gold/30 rounded-2xl p-8 flex flex-col gap-6 bg-brand-gold/[0.02]">
            <p className="text-xs uppercase tracking-widest text-brand-gold/70 border-b border-brand-gold/10 pb-4">
              Your Referral Code
            </p>
            <div className="flex flex-col gap-2">
              <span className="text-3xl tracking-widest font-medium text-brand-gold">
                {referralCode}
              </span>
              <span className="text-xs text-brand-blue/70 dark:text-luxury-white/60">
                Current Referrals: <strong className="text-brand-blue dark:text-luxury-white">{referralCount}</strong>
              </span>
            </div>
          </div>
        </div>

        {/* Rewards Section */}
        <div className="flex flex-col gap-8">
          <p className="text-sm uppercase tracking-widest text-brand-blue dark:text-luxury-white border-b border-brand-blue/10 dark:border-luxury-white/10 pb-4">
            Founding Rewards Tier
          </p>
          <div className="flex flex-col gap-4">
            <div className="p-6 border border-brand-gold/50 bg-brand-gold/5 rounded-xl">
              <p className="text-xs uppercase tracking-widest text-brand-gold mb-2">Current Status</p>
              <p className="text-lg text-brand-blue dark:text-luxury-white">{currentTier}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {tiers.map((tier, index) => {
                const isUnlocked = referralCount >= tier.threshold;
                return (
                  <div key={index} className={`p-4 rounded-xl border ${isUnlocked ? 'border-brand-gold/30 bg-brand-gold/5' : 'border-brand-blue/10 dark:border-luxury-white/10 opacity-50'}`}>
                    <p className="text-[10px] uppercase tracking-widest mb-2 text-brand-blue/70 dark:text-luxury-white/60">
                      {tier.threshold} Referral{tier.threshold > 1 ? 's' : ''}
                    </p>
                    <p className={`text-xs ${isUnlocked ? 'text-brand-gold' : 'text-brand-blue dark:text-luxury-white'}`}>
                      {tier.name}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Dashboard() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><Loader2 className="animate-spin text-brand-gold" /></div>}>
      <DashboardContent />
    </Suspense>
  );
}
