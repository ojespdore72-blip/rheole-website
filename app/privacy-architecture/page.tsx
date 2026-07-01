"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import { 
  ShieldCheck, 
  Eye, 
  Lock, 
  SlidersHorizontal, 
  ArrowRight,
  Database,
  History,
  ToggleLeft,
  Map,
  Users,
  Bell,
  Camera,
  Calendar
} from "lucide-react";
import Link from "next/link";

// -----------------------------------------------------------------------------------
// REUSABLE COMPONENTS
// -----------------------------------------------------------------------------------

function PrivacyNote({ title, category, children }: { title: string; category: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-4 p-8 bg-[#080808] border border-white/[0.05] rounded-2xl group hover:border-white/[0.1] transition-colors relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/[0.03] to-transparent rounded-full blur-2xl pointer-events-none group-hover:from-white/[0.06] transition-all" />
      <span className="text-[10px] uppercase tracking-[0.2em] text-[#6A6A6A] font-medium">{category}</span>
      <h4 className="text-[20px] text-[#F2F2F0] font-serif-editorial font-medium tracking-tight">{title}</h4>
      <div className="text-[14px] text-[#8A8A8A] leading-relaxed font-light">
        {children}
      </div>
    </div>
  );
}

// -----------------------------------------------------------------------------------
// SECTIONS
// -----------------------------------------------------------------------------------

function HeroSection() {
  return (
    <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center px-6 md:px-12 pt-20 bg-[#000000]">
      {/* Absolute minimalist glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white opacity-[0.015] blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-[1000px] mx-auto z-10 flex flex-col items-center text-center gap-12 w-full mt-12">
        <ScrollReveal>
          <div className="flex items-center justify-center gap-4 border border-white/[0.08] rounded-full px-5 py-2 bg-white/[0.02]">
            <ShieldCheck size={14} className="text-[#A0A0A0]" />
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#A0A0A0] font-medium">Privacy Architecture</span>
          </div>
        </ScrollReveal>
        
        <ScrollReveal delay={0.2}>
          <h1 className="text-[56px] md:text-[88px] lg:text-[112px] text-[#F2F2F0] font-serif-editorial font-light leading-[0.95] tracking-tight">
            Intelligence begins<br />with trust.
          </h1>
        </ScrollReveal>
        
        <ScrollReveal delay={0.4}>
          <p className="text-[20px] md:text-[24px] text-[#A0A0A0] font-light leading-relaxed max-w-[700px] mt-4">
            Technology should understand people only with their explicit permission. The more intelligent a system becomes, the more responsibility it carries.
          </p>
        </ScrollReveal>
        
        <ScrollReveal delay={0.5}>
          <p className="text-[16px] text-[#6A6A6A] font-light leading-relaxed max-w-[500px]">
            Rheole believes trust is earned continuously—not assumed. Privacy is not a feature added after a product is built. It is the foundation upon which every intelligent decision is made.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

function PhilosophySection() {
  const principles = [
    { title: "Privacy is proactive.", desc: "We do not wait for privacy breaches to react. Systems are engineered to protect anonymity by default.", ex: "Location coordinates are fuzzed before reaching the cloud unless precise routing is explicitly active." },
    { title: "Transparency is essential.", desc: "Intelligence must never operate in the shadows. Users deserve to know why a recommendation was made.", ex: "Every suggestion includes an 'Explain My Data' breakdown." },
    { title: "People remain in control.", desc: "Consent is an ongoing conversation, not a one-time checkbox hidden in terms and conditions.", ex: "Permissions automatically expire after a period of inactivity." },
    { title: "Data should have purpose.", desc: "We collect only what is strictly necessary to provide the immediate service requested.", ex: "If you ask for weather, we don't save your calendar events." },
  ];

  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#050505]">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-24">
        
        <div className="flex flex-col gap-6 max-w-[700px]">
          <ScrollReveal>
            <h2 className="text-[40px] md:text-[56px] text-[#F2F2F0] font-serif-editorial font-light leading-[1.1] tracking-tight">
              Our Privacy Philosophy.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-[20px] text-[#A0A0A0] font-light leading-relaxed">
              Intelligence requires understanding. Understanding requires trust. Trust requires privacy.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {principles.map((p, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="flex flex-col gap-4 p-8 border-l border-white/[0.1] hover:border-white/[0.3] transition-colors">
                <h3 className="text-[24px] text-[#F2F2F0] font-serif-editorial font-medium">{p.title}</h3>
                <p className="text-[16px] text-[#8A8A8A] font-light">{p.desc}</p>
                <div className="mt-4 pt-4 border-t border-white/[0.05]">
                  <span className="text-[10px] uppercase tracking-widest text-[#4F6EF7] font-medium block mb-1">Real-World Application</span>
                  <p className="text-[14px] text-[#A0A0A0] italic">"{p.ex}"</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}

function DesignSection() {
  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#080808]">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-24">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-8">
            <ScrollReveal>
              <h2 className="text-[40px] md:text-[56px] text-[#F2F2F0] font-serif-editorial font-light leading-[1.1] tracking-tight">
                Privacy by Design.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="text-[18px] text-[#8A8A8A] font-light leading-relaxed flex flex-col gap-6">
                <p>
                  Privacy is not a compliance checklist executed at the end of a development cycle. It is the architectural blueprint.
                </p>
                <p>
                  We rely on <strong className="font-medium text-[#F2F2F0]">Minimal Data Collection</strong> and <strong className="font-medium text-[#F2F2F0]">Purpose Limitation</strong>. Our intelligence engines run on the principle of least privilege, processing sensitive contextual signals locally on your device whenever appropriate. 
                </p>
                <p>
                  When cloud reasoning is required, data separation ensures that your identity is cryptographically decoupled from your queries. Secure defaults mean you never have to navigate complex settings just to protect yourself.
                </p>
              </div>
            </ScrollReveal>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <ScrollReveal delay={0.2} className="w-full max-w-[500px]">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Local Processing", icon: <Database size={20} /> },
                  { label: "Data Separation", icon: <SlidersHorizontal size={20} /> },
                  { label: "Secure Defaults", icon: <Lock size={20} /> },
                  { label: "Least Privilege", icon: <ShieldCheck size={20} /> }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center text-center gap-4 p-8 bg-[#030303] border border-white/[0.05] rounded-2xl">
                    <span className="text-[#A0A0A0]">{item.icon}</span>
                    <span className="text-[14px] text-[#F2F2F0] font-medium">{item.label}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>

      </div>
    </section>
  );
}

function PermissionEngineSection() {
  const permissions = [
    { name: "Location", icon: <Map size={16} />, why: "To understand surrounding context.", value: "Enables nearby recommendations.", revoke: "Can be limited to approximate or 'Only while using'." },
    { name: "Calendar", icon: <Calendar size={16} />, why: "To understand your schedule constraints.", value: "Prevents routing you into traffic when you have a meeting.", revoke: "Can be revoked instantly via the Privacy Dashboard." },
    { name: "Camera", icon: <Camera size={16} />, why: "To interpret physical surroundings visually.", value: "Translates signs or identifies architectural landmarks.", revoke: "Operates strictly on a per-session basis." }
  ];

  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#000000] border-y border-white/[0.05]">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-20">
        
        <div className="text-center flex flex-col items-center gap-6">
          <ScrollReveal>
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#6A6A6A] font-medium">Signature Concept</span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-[40px] md:text-[56px] text-[#F2F2F0] font-serif-editorial font-light leading-[1.1] tracking-tight">
              The Permission Engine
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-[18px] text-[#8A8A8A] font-light max-w-[600px]">
              Permissions should be meaningful conversations, not binary pop-ups. Every capability requested by Rheole is contextual, transparent, and completely reversible.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {permissions.map((perm, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="flex flex-col p-8 bg-[#050505] border border-white/[0.08] rounded-2xl gap-6 h-full">
                <div className="flex items-center gap-3 border-b border-white/[0.05] pb-4">
                  <div className="p-2 bg-white/[0.05] rounded-lg text-[#F2F2F0]">
                    {perm.icon}
                  </div>
                  <h3 className="text-[18px] text-[#F2F2F0] font-medium">{perm.name}</h3>
                </div>
                
                <div className="flex flex-col gap-4 text-[14px]">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#6A6A6A] font-medium block mb-1">Why requested</span>
                    <p className="text-[#A0A0A0] font-light">{perm.why}</p>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#6A6A6A] font-medium block mb-1">Value created</span>
                    <p className="text-[#A0A0A0] font-light">{perm.value}</p>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#6A6A6A] font-medium block mb-1">Revocation</span>
                    <p className="text-[#A0A0A0] font-light">{perm.revoke}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="mt-8">
            <PrivacyNote title="Permission Intelligence™" category="Proprietary Concept">
              Permissions are treated as ongoing agreements. If you grant location access for a weekend trip, Rheole can automatically revert the permission when you return home, ensuring intelligence never outlives its necessity.
            </PrivacyNote>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}

function LifecycleSection() {
  const steps = [
    "User Permission",
    "Minimal Collection",
    "Local Understanding",
    "Cloud Reasoning",
    "Private Recommendation",
    "Ephemeral Retention",
    "Secure Deletion",
    "Continuous Control"
  ];

  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#050505]">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-24">
        
        <div className="flex flex-col gap-6 max-w-[700px]">
          <ScrollReveal>
            <h2 className="text-[40px] md:text-[56px] text-[#F2F2F0] font-serif-editorial font-light leading-[1.1] tracking-tight">
              The Data Lifecycle.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-[18px] text-[#8A8A8A] font-light leading-relaxed">
              Data follows a strict, transparent lifecycle rather than disappearing into unknown algorithmic systems. You can trace its journey from conception to deletion.
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.2}>
          <div className="relative border-l border-white/[0.1] ml-4 md:ml-12 pl-8 md:pl-16 flex flex-col gap-12">
            {steps.map((step, i) => (
              <div key={i} className="relative flex items-center group">
                {/* Node indicator */}
                <div className="absolute -left-[41px] md:-left-[73px] w-4 h-4 rounded-full bg-[#050505] border-[2px] border-[#4A4A4A] group-hover:border-[#F2F2F0] transition-colors" />
                <h3 className="text-[20px] md:text-[28px] text-[#A0A0A0] font-light group-hover:text-[#F2F2F0] transition-colors tracking-tight">
                  {step}
                </h3>
              </div>
            ))}
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}

function TransparentIntelligenceSection() {
  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#080808]">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        
        <div className="flex flex-col gap-10">
          <ScrollReveal>
            <h2 className="text-[40px] md:text-[56px] text-[#F2F2F0] font-serif-editorial font-light leading-[1.1] tracking-tight">
              Transparent Intelligence.
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={0.1}>
            <div className="text-[18px] text-[#A0A0A0] font-light leading-relaxed flex flex-col gap-6">
              <p>
                Trust increases when intelligence explains itself.
              </p>
              <p>
                A recommendation is useless if it feels like magic. When Rheole suggests a detour, it explicitly tells you <span className="text-[#F2F2F0] italic">why</span>.
              </p>
              <p>
                You can instantly view which permissions contributed to the decision, which contextual signals (like weather or crowd density) were factored in, and alternative interpretations the engine considered.
              </p>
              <p>
                If the intelligence assumes incorrectly, you can correct it. The system maintains full auditability and explainability, ensuring you are always a participant, never a subject.
              </p>
            </div>
          </ScrollReveal>
        </div>

        <div className="flex flex-col gap-6">
          <ScrollReveal delay={0.2}>
            <PrivacyNote title="Explain My Data™" category="Proprietary Concept">
              Every important recommendation includes an explanation of the information that influenced it. No hidden reasoning. No black-box algorithms. You see what the AI sees.
            </PrivacyNote>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <PrivacyNote title="Trust Graph™" category="Proprietary Concept">
              A transparent visual representation of exactly which permissions, past interactions, and real-time contextual signals contributed to a specific output. 
            </PrivacyNote>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}

function ControlSection() {
  const controls = [
    "Permission Dashboard",
    "Data Export",
    "Temporary Permissions",
    "Approximate Location",
    "AI Memory Controls",
    "Connected Devices",
    "Privacy Dashboard",
    "Delete Data",
    "Incognito Sessions",
    "Activity History",
    "Context Controls",
    "Consent History"
  ];

  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#000000] overflow-hidden">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-20">
        
        <div className="text-center flex flex-col items-center gap-6">
          <ScrollReveal>
            <h2 className="text-[40px] md:text-[56px] text-[#F2F2F0] font-serif-editorial font-light leading-[1.1] tracking-tight">
              Your Control.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-[18px] text-[#8A8A8A] font-light max-w-[600px]">
              You remain in complete charge of your digital footprint. Privacy settings intelligently adapt to context while always remaining under your authority.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {controls.map((control, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <div className="flex items-center justify-between p-4 bg-[#050505] border border-white/[0.05] rounded-xl hover:bg-white/[0.02] transition-colors group cursor-default">
                <span className="text-[13px] text-[#A0A0A0] font-medium group-hover:text-[#F2F2F0] transition-colors">{control}</span>
                <ToggleLeft size={16} className="text-[#4A4A4A] group-hover:text-[#F2F2F0] transition-colors" />
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="mt-8 border-t border-white/[0.05] pt-16">
            <PrivacyNote title="Adaptive Privacy™" category="Rheole Concept">
              Privacy settings intelligently adapt to your context. The permissions you grant while travelling through a foreign city automatically tighten when you return to your home or office, ensuring maximum utility when needed, and maximum privacy when not.
            </PrivacyNote>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}

function ComparisonSection() {
  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#050505]">
      <div className="max-w-[1000px] mx-auto flex flex-col gap-16">
        <ScrollReveal>
          <h2 className="text-[32px] md:text-[40px] text-[#F2F2F0] font-serif-editorial font-light tracking-tight text-center">
            A New Standard for Trust
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.05] rounded-3xl overflow-hidden border border-white/[0.05]">
          <div className="bg-[#080808] p-10 md:p-16 flex flex-col gap-8">
            <h3 className="text-[12px] uppercase tracking-[0.2em] text-[#6A6A6A] font-medium">Traditional Digital Services</h3>
            <ul className="flex flex-col gap-6 text-[15px] text-[#8A8A8A] font-light">
              <li className="flex items-start gap-4"><span className="text-[#4A4A4A] mt-1">•</span> Broad permissions.</li>
              <li className="flex items-start gap-4"><span className="text-[#4A4A4A] mt-1">•</span> Static settings.</li>
              <li className="flex items-start gap-4"><span className="text-[#4A4A4A] mt-1">•</span> Limited transparency.</li>
              <li className="flex items-start gap-4"><span className="text-[#4A4A4A] mt-1">•</span> Hidden reasoning.</li>
              <li className="flex items-start gap-4"><span className="text-[#4A4A4A] mt-1">•</span> One-time consent.</li>
              <li className="flex items-start gap-4"><span className="text-[#4A4A4A] mt-1">•</span> Generic privacy controls.</li>
            </ul>
          </div>
          <div className="bg-[#0A0A0A] p-10 md:p-16 flex flex-col gap-8">
            <h3 className="text-[12px] uppercase tracking-[0.2em] text-[#F2F2F0] font-medium">Rheole Privacy Architecture</h3>
            <ul className="flex flex-col gap-6 text-[15px] text-[#F2F2F0] font-light">
              <li className="flex items-start gap-4"><span className="text-[#4F6EF7] mt-1">•</span> Context-aware permissions.</li>
              <li className="flex items-start gap-4"><span className="text-[#4F6EF7] mt-1">•</span> Transparent reasoning.</li>
              <li className="flex items-start gap-4"><span className="text-[#4F6EF7] mt-1">•</span> Granular control.</li>
              <li className="flex items-start gap-4"><span className="text-[#4F6EF7] mt-1">•</span> Explainable intelligence.</li>
              <li className="flex items-start gap-4"><span className="text-[#4F6EF7] mt-1">•</span> Continuous consent.</li>
              <li className="flex items-start gap-4"><span className="text-[#4F6EF7] mt-1">•</span> Human-centred trust.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function FutureSection() {
  return (
    <section className="relative w-full py-[200px] px-6 md:px-12 bg-[#020202] overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-32 bg-gradient-to-b from-transparent to-white/[0.1]" />
      
      <div className="max-w-[800px] mx-auto text-center flex flex-col gap-12 relative z-10">
        <ScrollReveal>
          <h2 className="text-[40px] md:text-[64px] lg:text-[80px] text-[#F2F2F0] font-serif-editorial font-light leading-[1.05] tracking-tight">
            The Future of Private AI.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="text-[18px] md:text-[22px] text-[#A0A0A0] font-light leading-relaxed flex flex-col gap-8">
            <p>
              Future intelligence should become exponentially more capable without ever becoming more intrusive.
            </p>
            <p>
              People should never have to choose between deeply useful technology and fundamental personal privacy. They are not opposing forces. 
            </p>
            <p className="text-[#F2F2F0] text-[22px] md:text-[28px] font-medium font-serif-editorial italic mt-4">
              The most trusted systems are those that quietly respect boundaries while remaining genuinely helpful.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

// -----------------------------------------------------------------------------------
// PAGE EXPORT
// -----------------------------------------------------------------------------------

export default function PrivacyArchitecturePage() {
  return (
    <div className="relative w-full bg-[#000000] text-[#F2F2F0] selection:bg-white/20 selection:text-[#F2F2F0]">
      <HeroSection />
      <PhilosophySection />
      <DesignSection />
      <PermissionEngineSection />
      <LifecycleSection />
      <TransparentIntelligenceSection />
      <ControlSection />
      <ComparisonSection />
      <FutureSection />
    </div>
  );
}
