"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import { 
  Fingerprint, 
  Key, 
  ShieldCheck, 
  Lock, 
  Users, 
  Network, 
  Shield, 
  Server, 
  Smartphone, 
  Building2, 
  ArrowRight,
  ChevronDown,
  Layers,
  Activity,
  CheckCircle2,
  Workflow
} from "lucide-react";
import Link from "next/link";

// -----------------------------------------------------------------------------------
// DATA CONSTANTS (For high density)
// -----------------------------------------------------------------------------------

const knowledgeCards = [
  { title: "Zero Trust Architecture", category: "Security Principle", desc: "No entity is trusted by default from inside or outside the perimeter. Trust is continuously verified." },
  { title: "Cryptographic Anonymity", category: "Privacy Principle", desc: "Identities can be mathematically proven without revealing underlying sensitive demographic data." },
  { title: "Ephemeral Sessions", category: "Architecture Concept", desc: "Access grants that exist only for the exact duration of a contextual necessity, leaving no persistent attack vector." },
  { title: "Contextual Step-Up", category: "Adaptive Security", desc: "When anomalous behavior is detected, the system gracefully requests a stronger factor of authentication." },
  { title: "Device Fingerprinting", category: "Trust Principle", desc: "Recognizing the physical hardware of a trusted user without relying solely on intercepted credentials." },
  { title: "Federated Trust", category: "Enterprise Identity", desc: "Allowing distinct organizations to collaborate while maintaining strict, isolated cryptographic boundaries." },
  { title: "Passkeys", category: "Future Authentication", desc: "Replacing shared secrets (passwords) with public key cryptography bound to secure hardware enclaves." },
  { title: "Graceful Degradation", category: "Developer Experience", desc: "When trust is lowered, access is restricted proportionally rather than terminating the session abruptly." },
  { title: "Consent Portability", category: "Privacy Insight", desc: "Users carry their privacy preferences across applications through a unified, authenticated identity graph." },
  { title: "Hardware Enclaves", category: "Security Concept", desc: "Sensitive cryptographic operations occur strictly within isolated chips on the user's local device." },
  { title: "Anomaly Detection", category: "Ambient Security", desc: "Machine learning models evaluating session risk based on velocity, location, and historical patterns." },
  { title: "Single Sign-On (SSO)", category: "Enterprise Pattern", desc: "A centralized trust authority allowing seamless, monitored access to a vast ecosystem of disparate tools." },
  { title: "Role-Based Access", category: "Permission Architecture", desc: "Assigning access rights based on organizational function rather than individual, ad-hoc grants." },
  { title: "Delegated Administration", category: "Enterprise Identity", desc: "Empowering department heads to manage local trust without compromising global security policies." },
  { title: "Identity Proofing", category: "Trust Principle", desc: "The rigorous initial process of binding a digital identity to a verified real-world human being." },
  { title: "OAuth 2.1 Protocol", category: "Developer Note", desc: "The underlying delegation framework, stripped of legacy vulnerabilities and optimized for modern security." },
  { title: "JSON Web Tokens (JWT)", category: "Architecture Insight", desc: "Stateless, cryptographically signed assertions of identity and permission passed between services." },
  { title: "Revocation Trees", category: "Security Principle", desc: "The ability to instantly invalidate a compromised identity across every connected device and session globally." },
  { title: "Biometric Binding", category: "Authentication Concept", desc: "Tying session initiation to physical presence (FaceID/TouchID) rather than solely relying on knowledge factors." },
  { title: "Silent Authentication", category: "Developer Experience", desc: "Refreshing trust tokens in the background without interrupting the user's continuous application experience." }
];

const scenarios = [
  { context: "A University", flow: ["Students access library resources.", "Teachers manage course materials.", "Visitors gain temporary Wi-Fi access.", "Administration audits facility entry logs."] },
  { context: "A Logistics Company", flow: ["Drivers authenticate via biometrics.", "Managers view fleet telematics.", "Warehouses automate secure loading docks.", "Customers track parcels anonymously."] },
  { context: "A Smart Hospital", flow: ["Doctors view encrypted patient records.", "Patients access personalized discharge plans.", "Visitors navigate restricted wings dynamically.", "Emergency staff bypass routine checks safely."] },
  { context: "A Smart City", flow: ["Citizens access municipal services.", "Officials manage infrastructure grids.", "Businesses pay automated taxes.", "Visitors access tourist infrastructure."] },
  { context: "A Retail Chain", flow: ["Store managers adjust inventory.", "Cashiers process secure transactions.", "Customers redeem loyalty points.", "Suppliers access loading bay APIs."] },
  { context: "An Airport", flow: ["Passengers access digital boarding passes.", "Pilots authenticate flight plans.", "Security staff monitor restricted zones.", "Retailers manage duty-free transactions."] },
];

const faqs = [
  { q: "Is Rheole Authentication a replacement for OAuth?", a: "No. Rheole Authentication builds upon industry-standard protocols like OAuth and OIDC, elevating them with contextual, spatial intelligence and continuous trust evaluation." },
  { q: "How is Ambient Authentication different from a session?", a: "Traditional sessions are static; once granted, they remain valid until expiry. Ambient Authentication continuously evaluates risk factors (location, device, behavior) to adjust trust in real-time." },
  { q: "Can we use our existing enterprise identity provider?", a: "Yes. Rheole federates seamlessly with existing SAML and OIDC providers, allowing you to project your existing trust directory into the spatial ecosystem." },
  { q: "Does Continuous Trust compromise user privacy?", a: "No. Continuous evaluation happens on the edge or through cryptographic proofs, ensuring that behavioral anomalies are detected without exposing raw surveillance data." },
  { q: "What happens when a device is lost?", a: "Through the Identity Graph, a compromised node (device) can be instantly revoked, terminating its specific session tokens globally without affecting the user's other active devices." },
];

const bestPractices = [
  "Never hardcode long-lived credentials.",
  "Always prefer short-lived, rotation-capable tokens.",
  "Enforce multi-factor authentication for administrative operations.",
  "Utilize passkeys as the primary factor wherever hardware supports it.",
  "Implement graceful degradation for medium-risk anomalies.",
  "Log authentication events transparently for user auditing.",
  "Separate staging and production identity environments strictly.",
  "Regularly purge stale sessions and unused API keys.",
  "Rely on platform SDKs for cryptographic implementations.",
  "Treat permissions as scoped grants, never global authority."
];

// -----------------------------------------------------------------------------------
// REUSABLE COMPONENTS
// -----------------------------------------------------------------------------------

function InfoNote({ title, category, desc }: { title: string; category: string; desc: string }) {
  return (
    <div className="flex flex-col gap-3 p-6 bg-[#030303] border border-white/[0.08] hover:border-white/[0.2] transition-colors h-full">
      <div className="flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-white/[0.4]" />
        <span className="text-[9px] uppercase tracking-[0.2em] text-[#6A6A6A] font-medium font-mono">{category}</span>
      </div>
      <h4 className="text-[16px] text-[#F2F2F0] font-medium">{title}</h4>
      <p className="text-[13px] text-[#8A8A8A] font-light leading-relaxed">{desc}</p>
    </div>
  );
}

// -----------------------------------------------------------------------------------
// SECTIONS
// -----------------------------------------------------------------------------------

function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-6 md:px-12 pt-20 bg-[#000000] overflow-hidden">
      {/* Cryptographic aesthetic background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none">
        <div className="w-[800px] h-[800px] border-[0.5px] border-white rounded-full flex items-center justify-center animate-[spin_120s_linear_infinite]">
          <div className="w-[600px] h-[600px] border-[0.5px] border-white rounded-full flex items-center justify-center animate-[spin_80s_linear_infinite_reverse]">
            <div className="w-[400px] h-[400px] border-[0.5px] border-white rounded-full" />
          </div>
        </div>
      </div>
      
      <div className="max-w-[1000px] mx-auto z-10 flex flex-col items-center text-center gap-12 w-full mt-12">
        <ScrollReveal>
          <div className="flex items-center gap-4 border border-white/[0.1] rounded-full px-5 py-2 bg-white/[0.02]">
            <Fingerprint size={14} className="text-[#A0A0A0]" />
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#A0A0A0] font-medium">Developer Platform / Authentication</span>
          </div>
        </ScrollReveal>
        
        <ScrollReveal delay={0.2}>
          <h1 className="text-[56px] md:text-[88px] lg:text-[104px] text-[#F2F2F0] font-serif-editorial font-light leading-[0.95] tracking-tight">
            Every interaction begins with knowing who you're helping.
          </h1>
        </ScrollReveal>
        
        <ScrollReveal delay={0.4}>
          <p className="text-[20px] md:text-[24px] text-[#A0A0A0] font-light leading-relaxed max-w-[700px] mt-4">
            Authentication is not simply verifying credentials. It establishes absolute confidence that people, devices, and applications are interacting safely and transparently.
          </p>
        </ScrollReveal>
        
        <ScrollReveal delay={0.5}>
          <p className="text-[16px] text-[#6A6A6A] font-light leading-relaxed max-w-[500px]">
            Identity is a living relationship, not a one-time login. It is the foundation of trust, accountability, and continuity across the entire Ambient Spatial Intelligence ecosystem.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

function WhyTrustMattersSection() {
  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#030303] border-y border-white/[0.05]">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        
        <div className="flex flex-col gap-8">
          <ScrollReveal>
            <h2 className="text-[40px] md:text-[56px] text-[#F2F2F0] font-serif-editorial font-light leading-[1.1] tracking-tight">
              Why Trust Matters.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="text-[18px] text-[#A0A0A0] font-light leading-relaxed flex flex-col gap-6">
              <p>
                Authentication is fundamentally not about passwords. It is about establishing digital trust. 
              </p>
              <p>
                As AI systems become exponentially more capable, the consequences of misidentification become severe. If an intelligent agent is empowered to reroute your navigation, access your calendar, or adjust your physical environment, it must possess absolute cryptographic certainty of your identity, your privacy boundaries, and your security posture.
              </p>
              <p>
                Trust enables personalization. Trust guarantees security. Trust ensures consistency across every interaction. Without it, intelligence is merely a risk.
              </p>
            </div>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {knowledgeCards.slice(0, 4).map((card, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <InfoNote {...card} />
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}

function PhilosophySection() {
  const principles = [
    { title: "Simple Identity", desc: "Identity should be profoundly simple to establish and effortless to maintain." },
    { title: "Ambient Authentication", desc: "Authentication should disappear entirely into the user experience until friction is strictly necessary." },
    { title: "Visible Security", desc: "When high-risk actions are taken, security mechanisms should become transparently visible to reassure the user." },
    { title: "User Control", desc: "People remain in absolute sovereign control of their sessions, devices, and delegated permissions." },
    { title: "Session Continuity", desc: "Moving between a phone, a browser, and a spatial device should feel like one continuous, unbroken thought." },
    { title: "Understandable Permissions", desc: "Permissions are presented as human-readable conversations, never cryptographic jargon." },
    { title: "Continuous Trust", desc: "Trust is not assumed because a login occurred an hour ago. It is earned and evaluated continuously." }
  ];

  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#000000]">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-20">
        
        <div className="text-center flex flex-col items-center gap-6">
          <ScrollReveal>
            <h2 className="text-[40px] md:text-[56px] text-[#F2F2F0] font-serif-editorial font-light leading-[1.1] tracking-tight">
              The Authentication Philosophy.
            </h2>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {principles.map((p, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <div className="flex flex-col gap-4 p-8 border-t border-white/[0.1] hover:border-white/[0.4] transition-colors group h-full">
                <h3 className="text-[20px] text-[#F2F2F0] font-medium">{p.title}</h3>
                <p className="text-[15px] text-[#8A8A8A] font-light leading-relaxed">{p.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}

function IdentityGraphSection() {
  const flow = [
    "Person",
    "Devices",
    "Applications",
    "Permissions",
    "Sessions",
    "Projects",
    "Teams",
    "Communities",
    "Businesses",
    "Developer Platform",
    "Spatial Intelligence"
  ];

  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#050505]">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-20">
        
        <div className="flex flex-col gap-6 max-w-[700px]">
          <ScrollReveal>
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#6A6A6A] font-medium font-mono">Proprietary Concept</span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-[40px] md:text-[56px] text-[#F2F2F0] font-serif-editorial font-light leading-[1.1] tracking-tight">
              The Identity Graph™
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-[18px] text-[#8A8A8A] font-light leading-relaxed">
              Instead of treating identity as a rigid row in a database (a username), Rheole understands relationships. Every authenticated interaction becomes a cryptographically secure node within a living network.
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.3}>
          <div className="flex flex-wrap items-center gap-4 p-8 md:p-12 border border-white/[0.05] bg-[#020202] rounded-none">
            {flow.map((step, i) => (
              <React.Fragment key={i}>
                <div className="px-5 py-2 border border-white/[0.1] bg-[#080808] text-[#A0A0A0] text-[13px] font-mono tracking-wide flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-white/[0.5]" />
                  {step}
                </div>
                {i < flow.length - 1 && (
                  <ArrowRight size={14} className="text-[#4A4A4A]" />
                )}
              </React.Fragment>
            ))}
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}

function LifecycleSection() {
  const lifecycle = [
    "Registration", "Verification", "Authentication", "Permission Grant", 
    "Session Creation", "Secure Activity", "Device Synchronisation", 
    "Continuous Verification", "Logout", "Session Expiry", 
    "Account Recovery", "Identity Evolution"
  ];

  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#000000] border-t border-white/[0.05]">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-24">
        
        <div className="text-center">
          <ScrollReveal>
            <h2 className="text-[40px] md:text-[56px] text-[#F2F2F0] font-serif-editorial font-light leading-[1.1] tracking-tight">
              The Identity Lifecycle.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-[18px] text-[#8A8A8A] font-light mt-4 max-w-[600px] mx-auto">
              Every phase exists to progressively build, maintain, and eventually deprecate trust in a secure, mathematically sound sequence.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {lifecycle.map((step, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <div className="flex flex-col items-center justify-center text-center p-6 border border-white/[0.1] bg-[#030303] hover:bg-white/[0.05] transition-colors h-full">
                <span className="text-[13px] text-[#F2F2F0] font-medium uppercase tracking-widest">{step}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}

function PermissionArchitectureSection() {
  const perms = [
    "Role-based permissions.", "Context-aware permissions.", "Temporary permissions.", 
    "Project permissions.", "Organisation permissions.", "Developer permissions.", 
    "API permissions.", "Application permissions.", "Location permissions.", "AI permissions."
  ];

  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#020202]">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        
        <div className="flex flex-col gap-8">
          <ScrollReveal>
            <h2 className="text-[40px] md:text-[56px] text-[#F2F2F0] font-serif-editorial font-light leading-[1.1] tracking-tight">
              Permission Architecture.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="text-[18px] text-[#A0A0A0] font-light leading-relaxed flex flex-col gap-6">
              <p>
                Authentication verifies who you are. The Permission Architecture dictates what you are allowed to do.
              </p>
              <p>
                Rheole moves beyond static scopes. Our architecture supports highly granular, context-aware delegations. A user can grant an application temporary location access that automatically expires when they leave a specific venue, or grant an AI agent permission to read their calendar strictly during working hours.
              </p>
            </div>
          </ScrollReveal>
        </div>

        <div className="flex flex-col justify-center">
          <ScrollReveal delay={0.2}>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
              {perms.map((p, i) => (
                <li key={i} className="flex items-center gap-4 text-[15px] text-[#F2F2F0] font-light">
                  <Lock size={14} className="text-[#6A6A6A]" />
                  {p}
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}

function MultiDeviceSection() {
  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#000000] border-y border-white/[0.05]">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-20">
        
        <div className="text-center flex flex-col items-center gap-6 max-w-[800px] mx-auto">
          <ScrollReveal>
            <h2 className="text-[40px] md:text-[56px] text-[#F2F2F0] font-serif-editorial font-light leading-[1.1] tracking-tight">
              Multi-Device Experiences.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-[18px] text-[#8A8A8A] font-light leading-relaxed">
              Phone. Tablet. Desktop. Browser. Wearables. Future AR devices. 
              <br /><br />
              Identity remains perfectly consistent across every platform. We handle secure cryptographic handoffs, session continuity, strict device recognition, and context preservation so developers can build fluid cross-platform intelligence.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {knowledgeCards.slice(4, 8).map((card, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <InfoNote {...card} />
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}

function EnterpriseSection() {
  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#050505]">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {knowledgeCards.slice(11, 15).map((card, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <InfoNote {...card} />
            </ScrollReveal>
          ))}
        </div>

        <div className="flex flex-col gap-8">
          <ScrollReveal>
            <h2 className="text-[40px] md:text-[56px] text-[#F2F2F0] font-serif-editorial font-light leading-[1.1] tracking-tight">
              Enterprise Identity.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="text-[18px] text-[#A0A0A0] font-light leading-relaxed flex flex-col gap-6">
              <p>Teams. Companies. Universities. Government organisations. Hospitals. Retail chains. Smart campuses.</p>
              <p>
                Enterprise requirements extend far beyond consumer logins. Rheole provides sophisticated organization management, delegated administration hierarchies, team workspaces, identity federation, strict access management, and immutable auditability.
              </p>
              <p>
                Our Single Sign-On (SSO) philosophy seamlessly bridges legacy enterprise directories with modern spatial intelligence.
              </p>
            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}

function DeveloperExperienceSection() {
  const tools = [
    "Developer Dashboard", "Projects", "API Keys", "Environment separation",
    "Testing", "Production", "Permission management", "Session inspection",
    "Monitoring", "Identity analytics", "SDK consistency", "Developer productivity"
  ];

  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#000000]">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-20">
        
        <div className="text-center">
          <ScrollReveal>
            <h2 className="text-[40px] md:text-[56px] text-[#F2F2F0] font-serif-editorial font-light leading-[1.1] tracking-tight">
              Developer Experience.
            </h2>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap justify-center gap-4 max-w-[900px] mx-auto">
            {tools.map((tool, i) => (
              <div key={i} className="px-6 py-3 border border-white/[0.1] bg-[#050505] text-[#F2F2F0] text-[14px] font-medium tracking-wide flex items-center gap-2">
                {tool}
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-center text-[18px] text-[#8A8A8A] font-light max-w-[600px] mx-auto">
            We focus strictly on the experience of integration. You shouldn't need a cryptography PhD to implement enterprise-grade security. Our SDKs abstract the complex protocols while exposing absolute control over the identity lifecycle.
          </p>
        </ScrollReveal>

      </div>
    </section>
  );
}

function SecurityPrinciplesSection() {
  const principles = [
    "Multi-factor authentication.", "Passkeys.", "Device verification.",
    "Biometric authentication.", "Session integrity.", "Encryption.",
    "Rate limiting.", "Suspicious activity detection.", "Adaptive authentication.",
    "Risk evaluation.", "Recovery."
  ];

  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#020202] border-y border-white/[0.05]">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        
        <div className="flex flex-col gap-10">
          <ScrollReveal>
            <h2 className="text-[40px] md:text-[56px] text-[#F2F2F0] font-serif-editorial font-light leading-[1.1] tracking-tight">
              Security Principles.
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={0.1}>
            <ul className="flex flex-col gap-6 text-[16px] text-[#A0A0A0] font-light">
              {principles.map((p, i) => (
                <li key={i} className="flex items-center gap-4">
                  <ShieldCheck size={16} className="text-[#6A6A6A]" />
                  {p}
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {knowledgeCards.slice(8, 11).concat(knowledgeCards.slice(15, 16)).map((card, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <InfoNote {...card} />
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}

function ScenariosSection() {
  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#000000]">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-20">
        
        <div className="text-center">
          <ScrollReveal>
            <h2 className="text-[40px] md:text-[56px] text-[#F2F2F0] font-serif-editorial font-light leading-[1.1] tracking-tight">
              Real-World Scenarios.
            </h2>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {scenarios.map((scen, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="flex flex-col gap-6 p-8 bg-[#050505] border border-white/[0.05] h-full">
                <h3 className="text-[20px] text-[#F2F2F0] font-medium font-serif-editorial border-b border-white/[0.1] pb-4">{scen.context}</h3>
                <div className="flex flex-col gap-4">
                  {scen.flow.map((step, j) => (
                    <div key={j} className="flex items-start gap-3">
                      <div className="mt-1.5 w-1 h-1 bg-[#6A6A6A] rounded-full" />
                      <p className="text-[14px] text-[#8A8A8A] font-light">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#020202] border-t border-white/[0.05]">
      <div className="max-w-[1000px] mx-auto flex flex-col gap-16">
        
        <ScrollReveal>
          <h2 className="text-[32px] md:text-[48px] text-[#F2F2F0] font-serif-editorial font-light tracking-tight text-center">
            Frequently Asked Questions
          </h2>
        </ScrollReveal>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <div className="flex flex-col gap-4 p-8 bg-[#050505] border border-white/[0.05]">
                <h4 className="text-[18px] text-[#F2F2F0] font-medium">{faq.q}</h4>
                <p className="text-[15px] text-[#8A8A8A] font-light leading-relaxed">{faq.a}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}

function BestPracticesSection() {
  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#050505]">
      <div className="max-w-[1000px] mx-auto flex flex-col gap-16">
        <ScrollReveal>
          <h2 className="text-[32px] md:text-[48px] text-[#F2F2F0] font-serif-editorial font-light tracking-tight text-center">
            Best Practices
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {bestPractices.map((practice, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <div className="flex items-center gap-4 p-6 bg-[#000000] border border-white/[0.05]">
                <CheckCircle2 size={16} className="text-[#6A6A6A] shrink-0" />
                <span className="text-[14px] text-[#A0A0A0] font-light">{practice}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ComparisonSection() {
  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-[#000000]">
      <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.1] border border-white/[0.1]">
        <div className="bg-[#030303] p-12 flex flex-col gap-8">
          <h3 className="text-[12px] uppercase tracking-[0.2em] text-[#6A6A6A] font-medium font-mono">Traditional Authentication</h3>
          <ul className="flex flex-col gap-6 text-[15px] text-[#8A8A8A] font-light">
            <li className="flex items-center gap-4"><span className="text-[#4A4A4A]">-</span> Username and password.</li>
            <li className="flex items-center gap-4"><span className="text-[#4A4A4A]">-</span> Static permissions.</li>
            <li className="flex items-center gap-4"><span className="text-[#4A4A4A]">-</span> Device-independent.</li>
            <li className="flex items-center gap-4"><span className="text-[#4A4A4A]">-</span> One-time verification.</li>
            <li className="flex items-center gap-4"><span className="text-[#4A4A4A]">-</span> Basic sessions.</li>
            <li className="flex items-center gap-4"><span className="text-[#4A4A4A]">-</span> Security-focused.</li>
          </ul>
        </div>
        <div className="bg-[#0A0A0A] p-12 flex flex-col gap-8">
          <h3 className="text-[12px] uppercase tracking-[0.2em] text-[#F2F2F0] font-medium font-mono">Rheole Authentication</h3>
          <ul className="flex flex-col gap-6 text-[15px] text-[#F2F2F0] font-light">
            <li className="flex items-center gap-4"><span className="text-white">+</span> Identity-first.</li>
            <li className="flex items-center gap-4"><span className="text-white">+</span> Context-aware trust.</li>
            <li className="flex items-center gap-4"><span className="text-white">+</span> Continuous verification.</li>
            <li className="flex items-center gap-4"><span className="text-white">+</span> Adaptive permissions.</li>
            <li className="flex items-center gap-4"><span className="text-white">+</span> Multi-device continuity.</li>
            <li className="flex items-center gap-4"><span className="text-white">+</span> Human-centred security.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function FutureSection() {
  return (
    <section className="relative w-full py-[200px] px-6 md:px-12 bg-[#020202] overflow-hidden">
      <div className="max-w-[800px] mx-auto text-center flex flex-col gap-12 relative z-10">
        <ScrollReveal>
          <h2 className="text-[40px] md:text-[64px] lg:text-[80px] text-[#F2F2F0] font-serif-editorial font-light leading-[1.05] tracking-tight">
            The Future of Digital Identity.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="text-[18px] md:text-[22px] text-[#A0A0A0] font-light leading-relaxed flex flex-col gap-8">
            <p>
              Passwords will become less important. Identity will become continuous. Authentication will become ambient. Trust will become transparent.
            </p>
            <p>
              Technology should seamlessly recognize people responsibly while mathematically preserving their privacy and absolute sovereign control.
            </p>
            <p className="text-[#F2F2F0] font-medium font-serif-editorial italic mt-4 text-[24px]">
              Ambient Spatial Intelligence entirely depends upon trusted identity.
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

export default function AuthenticationPage() {
  return (
    <div className="relative w-full bg-[#000000] text-[#F2F2F0] selection:bg-white/20 selection:text-[#F2F2F0]">
      <HeroSection />
      <WhyTrustMattersSection />
      <PhilosophySection />
      <IdentityGraphSection />
      <LifecycleSection />
      <PermissionArchitectureSection />
      <MultiDeviceSection />
      <EnterpriseSection />
      <DeveloperExperienceSection />
      <SecurityPrinciplesSection />
      <ScenariosSection />
      <FaqSection />
      <BestPracticesSection />
      <ComparisonSection />
      <FutureSection />
    </div>
  );
}
