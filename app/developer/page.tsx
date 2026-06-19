"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Atmosphere from "@/components/Atmosphere";
import Link from "next/link";

interface CodeSnippet {
  language: string;
  label: string;
  code: string;
}

const snippets: CodeSnippet[] = [
  {
    language: "javascript",
    label: "SDK (Node.js)",
    code: `import { RheoleClient } from "@rheole/sdk";

const client = new RheoleClient({ apiKey: "rh_live_..." });

// Retrieve active cohorts near SOMA geohash
const cohorts = await client.cohorts.list({
  geohash: "9q8yy",
  radius: 1200, // meters
  limit: 5
});

console.log(cohorts);`
  },
  {
    language: "python",
    label: "Python",
    code: `from rheole import Rheole

client = Rheole(api_key="rh_live_...")

# Query active event cohorts
cohorts = client.cohorts.list(
    geohash="9q8yy",
    radius=1200,
    limit=5
)

for cohort in cohorts:
    print(f"{cohort.name}: {cohort.density_index}")`
  },
  {
    language: "curl",
    label: "cURL",
    code: `curl -X GET "https://api.rheole.com/v1/cohorts?geohash=9q8yy&radius=1200" \\
  -H "Authorization: Bearer rh_live_..." \\
  -H "Content-Type: application/json"`
  }
];

const mockResponse = {
  status: "success",
  geohash: "9q8yy",
  radius_meters: 1200,
  cohorts: [
    {
      id: "coh_soma_sound",
      name: "SOMA Sound Lab",
      category: "Arts & Culture",
      density_index: 0.85,
      active_participants: 42,
      coordinates_hashed: "9q8yy-8f9a"
    },
    {
      id: "coh_soma_tech",
      name: "SOMA Builders",
      category: "Technology",
      density_index: 0.92,
      active_participants: 78,
      coordinates_hashed: "9q8yy-4b2c"
    }
  ]
};

export default function Developer() {
  const [activeLang, setActiveLang] = useState("javascript");
  const [copied, setCopied] = useState(false);

  const currentSnippet = snippets.find(s => s.language === activeLang) || snippets[0];

  const handleCopy = () => {
    navigator.clipboard.writeText(currentSnippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as const }
  };

  return (
    <div className="relative w-full min-h-screen bg-luxury-white dark:bg-luxury-black overflow-hidden selection:bg-brand-gold/20 text-brand-blue dark:text-luxury-white font-sans">
      <Atmosphere />

      <div className="relative w-full min-h-screen py-32 px-6 md:px-12 max-w-5xl mx-auto flex flex-col gap-16 md:gap-24 z-10">
        {/* Title Header */}
        <motion.div {...fadeInUp} className="flex flex-col gap-4 border-b border-brand-blue/15 dark:border-luxury-white/10 pb-8">
          <h1 className="text-4xl md:text-6xl font-light tracking-wide uppercase text-brand-blue dark:text-luxury-white font-serif-editorial">
            Developer Portal
          </h1>
          <p className="text-xs uppercase tracking-widest text-brand-gold font-semibold">
            Integrate spatial intelligence and local routing into your applications.
          </p>
        </motion.div>

        {/* Narrative Concept */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="flex flex-col gap-8 text-brand-blue/80 dark:text-luxury-white/80 font-light text-md md:text-lg leading-relaxed max-w-3xl"
        >
          <p className="font-serif-editorial italic text-xl md:text-3xl text-brand-blue dark:text-luxury-white leading-relaxed">
            &ldquo;Build with physical context. Access the real-time geohash network via clean, decentralized interfaces.&rdquo;
          </p>
          <p className="text-sm text-brand-blue/70 dark:text-luxury-white/70 font-sans">
            Our SDK lets you query spatial density indices, event hotspots, and community coordinates anonymously, matching OpenAI's developer clarity and architectural precision.
          </p>
        </motion.div>

        {/* Code Play block Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 border border-brand-blue/10 dark:border-luxury-white/10 rounded-2xl frosted-glass p-6 md:p-8 relative overflow-hidden shadow-xl"
        >
          {/* Left Side: Code Editor Mock (Cols 7) */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="flex items-center justify-between border-b border-brand-blue/10 dark:border-luxury-white/10 pb-3">
              <div className="flex gap-2">
                {snippets.map(s => (
                  <button
                    key={s.language}
                    onClick={() => setActiveLang(s.language)}
                    className={`text-[10px] tracking-widest uppercase font-mono px-3 py-1 rounded-full transition-all duration-300 border ${
                      activeLang === s.language
                        ? "bg-brand-gold text-brand-blue border-brand-gold font-bold"
                        : "bg-transparent border-brand-blue/10 dark:border-luxury-white/10 text-brand-blue/60 dark:text-luxury-white/50"
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
              <button
                onClick={handleCopy}
                className="text-[9px] tracking-widest uppercase font-mono text-brand-gold hover:text-brand-gold-glow transition-colors"
              >
                {copied ? "Copied" : "Copy Code"}
              </button>
            </div>

            <div className="w-full bg-brand-blue/5 dark:bg-luxury-black/40 rounded-xl p-4 overflow-x-auto border border-brand-blue/5 dark:border-luxury-white/5">
              <pre className="font-mono text-xs text-left leading-relaxed text-brand-blue/80 dark:text-luxury-white/80 whitespace-pre">
                <code>{currentSnippet.code}</code>
              </pre>
            </div>
          </div>

          {/* Right Side: Mock JSON Output Mock (Cols 5) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="flex items-center justify-between border-b border-brand-blue/10 dark:border-luxury-white/10 pb-3">
              <span className="text-[10px] tracking-widest uppercase font-mono text-brand-gold font-semibold">Response Payload</span>
              <span className="text-[8px] font-mono text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-sm">200 OK</span>
            </div>

            <div className="w-full bg-[#05050C] rounded-xl p-4 overflow-y-auto max-h-[220px] border border-luxury-white/5">
              <pre className="font-mono text-[10px] text-left leading-relaxed text-brand-gold/90 whitespace-pre">
                <code>{JSON.stringify(mockResponse, null, 2)}</code>
              </pre>
            </div>
          </div>
        </motion.div>

        {/* Footer Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="border-t border-brand-blue/15 dark:border-luxury-white/10 pt-12 text-center"
        >
          <Link
            href="/"
            className="text-xs uppercase tracking-widest text-brand-blue/50 dark:text-luxury-white/40 hover:text-brand-gold transition-colors duration-300"
          >
            Return to home
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
