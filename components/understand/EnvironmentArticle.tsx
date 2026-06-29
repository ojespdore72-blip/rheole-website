"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CloudRain, Sun, Moon, Wind, Thermometer, Droplets, EyeOff, Volume2, Sunrise, Sunset, Leaf, Zap, Cloud, CloudFog, Navigation, Car, Activity, Map, ArrowRight, CornerDownRight, CheckCircle2, ShieldCheck, Camera, Coffee, Compass } from "lucide-react";

// --- REUSABLE EDITORIAL COMPONENTS ---

function ScrollReveal({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function EditorialSection({ id, title, subtitle, children, alternateBg = false }: { id: string, title: string, subtitle?: string, children: React.ReactNode, alternateBg?: boolean }) {
  return (
    <section id={id} className={`w-full relative py-24 md:py-32 border-b border-white/[0.04] ${alternateBg ? 'bg-[#000000]' : 'bg-transparent'}`}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-start gap-16 md:gap-24 relative">
        <ScrollReveal className="w-full md:w-[320px] shrink-0 sticky top-32 z-10">
          <div className="flex flex-col gap-4">
            <h2 className="text-[12px] text-[#06B6D4] font-medium tracking-[0.2em] uppercase">
              {title}
            </h2>
            {subtitle && (
              <h3 className="text-[28px] md:text-[36px] font-serif-editorial text-[#F2F2F0] leading-tight">
                {subtitle}
              </h3>
            )}
            <div className="w-12 h-[1px] bg-white/[0.1] mt-4" />
          </div>
        </ScrollReveal>

        <div className="flex-1 w-full flex flex-col gap-12">
          <ScrollReveal delay={0.1}>
            {children}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function KnowledgeBlock({ type, title, children }: { type: "EnvironmentalInsight" | "ComfortFact" | "HumanBehaviour" | "SeasonalIntelligence", title: string, children: React.ReactNode }) {
  return (
    <div className="my-12 w-full p-8 rounded-2xl bg-[#030712] border border-white/[0.05] relative overflow-hidden group">
      <div className="absolute top-0 left-0 w-1 h-full bg-[#06B6D4]/40" />
      <div className="flex items-center gap-3 mb-4">
        <Compass size={16} className="text-[#06B6D4]" />
        <h4 className="font-mono text-[11px] text-[#94A3B8] uppercase tracking-[0.2em]">
          {type.replace(/([A-Z])/g, ' $1').trim()} <span className="text-[#06B6D4]/50 px-2">/</span> {title}
        </h4>
      </div>
      <div className="text-[16px] md:text-[18px] text-[#F2F2F0] leading-relaxed font-light italic">
        "{children}"
      </div>
    </div>
  );
}

function Pill({ icon: Icon, text }: { icon: any, text: string }) {
  return (
    <div className="px-4 py-2 rounded-lg border border-white/[0.06] bg-[#0A0A0A] text-[14px] text-[#94A3B8] font-light flex items-center gap-3 hover:border-[#06B6D4]/40 hover:text-[#F2F2F0] transition-colors cursor-default">
      <Icon size={16} className="text-[#06B6D4]/70" />
      {text}
    </div>
  );
}

// --- COMPLEX INTERACTIVE COMPONENTS ---

function EnvironmentalVisualizer() {
  const steps = [
    { label: "Environmental Factor", value: "Light Rain, 14°C, 90% Humidity", icon: CloudRain },
    { label: "Detected Condition", value: "Wet surfaces, moderate chill", icon: Droplets },
    { label: "Potential Impact", value: "Walking discomfort, slippery cycling routes", icon: ShieldCheck },
    { label: "Adaptation", value: "Prioritize indoor venues & covered transit", icon: Navigation },
    { label: "Recommendation", value: "An indoor café directly connected to the metro station.", icon: Coffee }
  ];

  return (
    <div className="w-full flex flex-col mt-12 gap-0 relative">
      <div className="absolute top-6 bottom-6 left-[23px] w-[2px] bg-gradient-to-b from-[#06B6D4]/50 via-white/[0.05] to-transparent" />
      {steps.map((step, idx) => (
        <div key={idx} className="flex gap-8 relative z-10 group py-5">
          <div className="w-12 h-12 rounded-full border border-[#06B6D4]/30 bg-[#0F172A] flex items-center justify-center shrink-0">
            <step.icon size={18} className={`${idx === steps.length - 1 ? 'text-[#F2F2F0]' : 'text-[#06B6D4]/70 group-hover:text-[#06B6D4]'} transition-colors`} />
          </div>
          <div className="flex flex-col justify-center gap-1">
            <span className="text-[12px] font-mono text-[#64748B] uppercase tracking-[0.1em]">{step.label}</span>
            <span className={`text-[16px] md:text-[18px] ${idx === steps.length - 1 ? 'text-[#F2F2F0] font-serif-editorial' : 'text-[#94A3B8] font-light'}`}>
              {step.value}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

function ComparisonTable() {
  const comparisons = [
    { left: "Forecasts", right: "Environmental Intelligence" },
    { left: "Temperature", right: "Living Conditions" },
    { left: "Rain probability", right: "Behaviour-aware adaptation" },
    { left: "Static information", right: "Context-driven recommendations" },
    { left: "User interpretation", right: "Explainable environmental reasoning" },
    { left: "Weather-first", right: "Human-centred decisions" }
  ];

  return (
    <div className="w-full border border-white/[0.06] rounded-2xl overflow-hidden bg-[#0A0A0A] mt-12">
      <div className="grid grid-cols-2 bg-[#030712] border-b border-white/[0.06] p-6">
        <div className="font-mono text-[12px] text-[#64748B] tracking-[0.1em] uppercase">Traditional Weather Apps</div>
        <div className="font-mono text-[12px] text-[#06B6D4] tracking-[0.1em] uppercase">Rheole Living Conditions</div>
      </div>
      {comparisons.map((comp, idx) => (
        <div key={idx} className="grid grid-cols-2 p-6 border-b border-white/[0.04] last:border-0 items-center gap-6 hover:bg-white/[0.01] transition-colors">
          <div className="text-[15px] text-[#64748B] line-through decoration-white/20">{comp.left}</div>
          <div className="text-[15px] text-[#F2F2F0] font-medium">{comp.right}</div>
        </div>
      ))}
    </div>
  );
}

// --- MAIN ARTICLE COMPONENT ---

export default function EnvironmentArticle() {
  return (
    <article className="w-full flex flex-col items-center">
      
      {/* 1. LIVING CONDITIONS */}
      <EditorialSection id="living-conditions" title="Living Conditions" subtitle="The elemental layers of life.">
        <p className="text-[18px] md:text-[22px] text-[#94A3B8] font-light leading-relaxed mb-12">
          The same city becomes a completely different experience every hour. Intelligence begins by understanding these atmospheric and environmental layers in real-time.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          <Pill icon={Sun} text="Time of day" />
          <Pill icon={Thermometer} text="Temperature" />
          <Pill icon={Droplets} text="Humidity" />
          <Pill icon={CloudRain} text="Rain" />
          <Pill icon={Wind} text="Wind" />
          <Pill icon={Sun} text="UV Index" />
          <Pill icon={Wind} text="Air Quality" />
          <Pill icon={Volume2} text="Noise" />
          <Pill icon={EyeOff} text="Visibility" />
          <Pill icon={Sunrise} text="Sunrise" />
          <Pill icon={Sunset} text="Sunset" />
          <Pill icon={Moon} text="Moonlight" />
          <Pill icon={Leaf} text="Season" />
          <Pill icon={Thermometer} text="Heat Index" />
          <Pill icon={Cloud} text="Cloud Cover" />
          <Pill icon={Leaf} text="Pollen" />
          <Pill icon={Zap} text="Storms" />
          <Pill icon={CloudFog} text="Fog" />
          <Pill icon={Car} text="Road Conditions" />
          <Pill icon={Activity} text="Environmental Comfort" />
        </div>

        <KnowledgeBlock type="EnvironmentalInsight" title="Beyond Temperature">
          Humans do not experience "24°C" in a vacuum. We experience 24°C with 80% humidity, low cloud cover, and high pollen levels. A true AI models physical comfort, not just meteorological data.
        </KnowledgeBlock>
      </EditorialSection>

      {/* 2. ADAPTIVE EXPERIENCES */}
      <EditorialSection id="adaptive-experiences" title="Adaptive Experiences" subtitle="Responding to reality." alternateBg>
        <p className="text-[18px] md:text-[22px] text-[#94A3B8] font-light leading-relaxed">
          Morning commutes. Afternoon heat. Heavy rainfall. Weekend sunshine. Every environmental change influences our recommendations. Nothing remains static.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {[
            { start: "\"It's raining.\"", evolved: "Indoor cafés and covered transit routes are heavily preferred over walking directions." },
            { start: "\"Extreme heat.\"", evolved: "Tree-lined walking routes and air-conditioned venues become the default." },
            { start: "\"Poor air quality.\"", evolved: "Intense cycling suggestions are reduced; enclosed transport is prioritized." },
            { start: "\"Golden hour.\"", evolved: "Scenic viewpoints and photography locations are naturally surfaced." }
          ].map((ex, i) => (
            <div key={i} className="p-8 border border-white/[0.04] bg-[#0A0A0A] rounded-2xl flex flex-col gap-6 group hover:border-[#06B6D4]/20 transition-colors">
              <div className="text-[20px] font-serif-editorial text-[#64748B] italic">
                {ex.start}
              </div>
              <div className="flex items-start gap-4">
                <CornerDownRight size={20} className="text-[#06B6D4] mt-1 shrink-0 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
                <div className="text-[16px] text-[#F2F2F0] font-light leading-relaxed">
                  {ex.evolved}
                </div>
              </div>
            </div>
          ))}
        </div>
      </EditorialSection>

      {/* 3. EXPLAINABLE ENVIRONMENT */}
      <EditorialSection id="explainable" title="Explainable Environment" subtitle="Understanding adaptation.">
        <p className="text-[18px] md:text-[22px] text-[#94A3B8] font-light leading-relaxed mb-8">
          Every recommendation transparently explains how current environmental conditions influenced it. You always understand why Rheole made a specific choice.
        </p>
        
        <EnvironmentalVisualizer />

      </EditorialSection>

      {/* 4. UNIQUE RHEOLE FEATURES */}
      <EditorialSection id="features" title="Proprietary Concepts" subtitle="Architecting environmental AI." alternateBg>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          <div className="flex flex-col gap-4 p-8 rounded-2xl bg-[#030712] border border-[#06B6D4]/30 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#06B6D4]/5 rounded-full blur-[60px]" />
            <h4 className="text-[24px] font-serif-editorial text-[#F2F2F0]">Living Conditions™</h4>
            <div className="w-8 h-[1px] bg-[#06B6D4]/50" />
            <p className="text-[15px] text-[#94A3B8] font-light leading-relaxed">
              A continuously updated environmental profile explaining how current surroundings physically influence your immediate experiences.
            </p>
          </div>

          <div className="flex flex-col gap-4 p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
            <h4 className="text-[24px] font-serif-editorial text-[#F2F2F0]">Comfort Index™</h4>
            <div className="w-8 h-[1px] bg-white/20" />
            <p className="text-[15px] text-[#94A3B8] font-light leading-relaxed">
              Instead of simply displaying temperature, it estimates how comfortable current outdoor conditions are for specific activities like walking or cycling.
            </p>
          </div>

          <div className="flex flex-col gap-4 p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05] lg:col-span-2 relative overflow-hidden">
            {/* Atmospheric fluid gradient for Golden Moments */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#F59E0B]/5 via-transparent to-[#3B82F6]/5 pointer-events-none" />
            
            <h4 className="text-[24px] font-serif-editorial text-[#F2F2F0] relative z-10">Golden Moments™</h4>
            <div className="w-8 h-[1px] bg-white/20 relative z-10" />
            <p className="text-[15px] text-[#94A3B8] font-light leading-relaxed mb-4 relative z-10">
              Highlighting naturally occurring opportunities created by environmental conditions. These become moments worth experiencing.
            </p>
            <div className="flex flex-wrap gap-3 relative z-10">
              <span className="px-4 py-1.5 rounded-full bg-[#F59E0B]/10 text-[#F59E0B] text-[13px] border border-[#F59E0B]/20">Golden hour</span>
              <span className="px-4 py-1.5 rounded-full bg-[#3B82F6]/10 text-[#3B82F6] text-[13px] border border-[#3B82F6]/20">Cool evening</span>
              <span className="px-4 py-1.5 rounded-full bg-[#06B6D4]/10 text-[#06B6D4] text-[13px] border border-[#06B6D4]/20">Clear skies</span>
              <span className="px-4 py-1.5 rounded-full bg-[#10B981]/10 text-[#10B981] text-[13px] border border-[#10B981]/20">Fresh air</span>
            </div>
          </div>

        </div>

        <KnowledgeBlock type="HumanBehaviour" title="The Impact on Decisions">
          Environmental intelligence improves comfort, safety, and health. Technology should adapt to reality instead of expecting people to endure friction.
        </KnowledgeBlock>
      </EditorialSection>

      {/* 5. WITHOUT CONTEXT / COMPARISON */}
      <EditorialSection id="without-context" title="The Difference" subtitle="Beyond forecasts.">
        <p className="text-[18px] md:text-[22px] text-[#94A3B8] font-light leading-relaxed">
          Traditional apps tell you it might rain. Rheole understands that rain changes where you should eat, how you should travel, and how you feel.
        </p>
        
        <ComparisonTable />
      </EditorialSection>

      {/* 6. FUTURE OF ENVIRONMENTAL AI */}
      <EditorialSection id="vision" title="The Future" subtitle="Quietly adapting to the living world." alternateBg>
        <p className="text-[24px] md:text-[32px] text-[#F2F2F0] font-serif-editorial font-light leading-tight max-w-[800px]">
          Future intelligence will not simply know the weather. It will understand how the environment changes human behaviour.
        </p>
        <p className="text-[18px] md:text-[22px] text-[#94A3B8] font-light leading-relaxed mt-8 max-w-[800px]">
          Technology should quietly adapt to the living world. The best recommendations are always aware of the elemental conditions around us.
        </p>

        <div className="mt-16 p-8 md:p-12 border border-[#06B6D4]/30 bg-[#06B6D4]/5 rounded-3xl flex flex-col items-center text-center max-w-[800px] relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10 pointer-events-none" />
          <h3 className="text-[28px] md:text-[40px] font-serif-editorial text-[#F2F2F0] leading-tight relative z-10">
            "Rheole doesn't tell me today's weather. It understands how today's world changes the way I should experience it."
          </h3>
          <span className="text-[12px] font-mono text-[#06B6D4] uppercase tracking-[0.2em] mt-8 relative z-10">
            Environmental Intelligence
          </span>
        </div>
      </EditorialSection>

    </article>
  );
}
