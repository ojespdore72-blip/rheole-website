const fs = require('fs');
const path = require('path');

const generatePillarPage = (sectionTitle, pillarTitle, description, subFeatures, backLink) => {
  return `"use client";

import React from "react";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { ArrowLeft } from "lucide-react";

export default function PillarPage() {
  const subFeatures = ${JSON.stringify(subFeatures, null, 4)};

  return (
    <div className="min-h-screen bg-[#080808] text-[#F2F2F0] selection:bg-[#4F6EF7]/30 selection:text-[#F2F2F0] pb-32">
      
      {/* Navigation */}
      <div className="pt-32 px-6 md:px-12 max-w-[1200px] mx-auto">
        <Link href="${backLink}" className="inline-flex items-center gap-2 text-[#8A8A8A] hover:text-white transition-colors text-sm font-medium uppercase tracking-widest">
          <ArrowLeft className="w-4 h-4" /> Back to ${sectionTitle}
        </Link>
      </div>

      {/* Header */}
      <section className="pt-24 px-6 md:px-12 max-w-[1200px] mx-auto flex flex-col gap-8">
        <ScrollReveal>
          <span className="text-[11px] uppercase tracking-[0.2em] text-[#6A6A6A] font-medium">${sectionTitle} Pillar</span>
        </ScrollReveal>
        
        <ScrollReveal delay={0.1}>
          <h1 className="text-[48px] md:text-[80px] lg:text-[100px] text-[#F2F2F0] font-serif-editorial font-light leading-[1.05] tracking-tight">
            ${pillarTitle}
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-[20px] md:text-[28px] text-[#8A8A8A] font-light max-w-[700px] leading-relaxed">
            ${description}
          </p>
        </ScrollReveal>
      </section>

      {/* Sub-features Grid */}
      <section className="pt-32 px-6 md:px-12 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subFeatures.map((feature, i) => (
            <ScrollReveal key={i} delay={0.3 + (i * 0.1)} className="h-full">
              <Link href={feature.link} className="block h-full cursor-pointer hover:scale-[1.02] transition-transform duration-500">
                <div className="h-full flex flex-col gap-6 p-8 border border-white/[0.05] bg-[#0A0A0A] rounded-2xl hover:bg-white/[0.02] hover:border-white/[0.15] transition-all duration-500">
                  <h3 className="text-[24px] font-medium text-white tracking-tight">{feature.title}</h3>
                  <p className="text-[15px] text-[#A0A0A0] leading-relaxed font-light flex-1">
                    {feature.desc}
                  </p>
                  <div className="w-full h-[1px] bg-white/[0.05]" />
                  <span className="text-[12px] uppercase tracking-widest text-[#6A6A6A] font-medium group-hover:text-white transition-colors">Explore →</span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  );
}
`;
};

const generateLeafPage = (title, backLink) => {
  return `"use client";

import React from "react";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { ArrowLeft, Clock } from "lucide-react";

export default function LeafPage() {
  return (
    <div className="min-h-screen bg-[#080808] text-[#F2F2F0] flex flex-col items-center justify-center p-6 text-center">
      <ScrollReveal>
        <Clock className="w-16 h-16 text-[#4F6EF7] mx-auto mb-8 opacity-50" />
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <h1 className="text-[40px] md:text-[64px] font-serif-editorial font-light mb-6 tracking-tight">${title}</h1>
      </ScrollReveal>
      <ScrollReveal delay={0.2}>
        <p className="text-[#A0A0A0] text-[18px] md:text-[22px] font-light max-w-[600px] mb-12">
          This deeply nested page is currently under active development. The URL structure is firmly in place.
        </p>
      </ScrollReveal>
      <ScrollReveal delay={0.3}>
        <Link href="${backLink}" className="inline-flex items-center gap-2 text-[13px] uppercase tracking-widest font-medium text-white hover:text-[#4F6EF7] transition-colors border border-white/[0.1] px-6 py-3 rounded-full hover:bg-white/[0.02]">
          <ArrowLeft className="w-4 h-4" /> Go Back
        </Link>
      </ScrollReveal>
    </div>
  );
}
`;
};

const routes = [
  // TECHNOLOGY
  {
    path: 'app/technology/engineering',
    type: 'pillar',
    section: 'Technology',
    title: 'Engineering',
    desc: 'The backbone of spatial AI. Discover how we build systems that understand the physical world.',
    backLink: '/technology',
    features: [
      { title: 'AI Architecture', desc: 'The ambient models powering Rheole.', link: '/technology/engineering/ai-architecture' },
      { title: 'Spatial Computing', desc: 'How we map intent to the physical world.', link: '/technology/engineering/spatial-computing' },
      { title: 'Privacy Architecture', desc: 'On-device processing and ephemeral contexts.', link: '/technology/engineering/privacy-architecture' }
    ]
  },
  {
    path: 'app/technology/developer-platform',
    type: 'pillar',
    section: 'Technology',
    title: 'Developer Platform',
    desc: 'Build on Rheole. The definitive APIs and SDKs to integrate ambient intelligence.',
    backLink: '/technology',
    features: [
      { title: 'SDKs', desc: 'Native wrappers for iOS, Android and Web.', link: '/technology/developer-platform/sdks' },
      { title: 'REST APIs', desc: 'The complete Reference Catalogue.', link: '/platform/api-references' },
      { title: 'Realtime APIs', desc: 'WebSockets for movement and live events.', link: '/technology/developer-platform/realtime-apis' },
      { title: 'Authentication', desc: 'Secure OAuth and Developer Keys.', link: '/technology/developer-platform/authentication' }
    ]
  },
  {
    path: 'app/technology/resources',
    type: 'pillar',
    section: 'Technology',
    title: 'Resources',
    desc: 'Tools & Documentation to help you navigate our ecosystem.',
    backLink: '/technology',
    features: [
      { title: 'Status', desc: 'Live platform uptime and incident reports.', link: '/technology/resources/status' },
      { title: 'Roadmap', desc: 'What we are building next.', link: '/technology/resources/roadmap' },
      { title: 'Documentation', desc: 'In-depth guides and tutorials.', link: '/technology/resources/documentation' },
      { title: 'Playground', desc: 'Test API requests in your browser.', link: '/technology/resources/interactive-playground' }
    ]
  },

  // RESEARCH
  {
    path: 'app/research/core-research',
    type: 'pillar',
    section: 'Research',
    title: 'Core Research',
    desc: 'Pioneering spatial intelligence algorithms that translate the physical world into computable vectors.',
    backLink: '/research',
    features: [
      { title: 'Intent Intelligence', desc: 'Understanding what users want.', link: '/research/core-research/intent-intelligence' },
      { title: 'Context Intelligence', desc: 'Parsing environmental states.', link: '/research/core-research/context-intelligence' },
      { title: 'Spatial Intelligence', desc: 'Geometric reasoning systems.', link: '/research/core-research/spatial-intelligence' },
      { title: 'Urban Computing', desc: 'City-scale behavioral analytics.', link: '/research/urban-computing' }
    ]
  },
  {
    path: 'app/research/applied-ai',
    type: 'pillar',
    section: 'Research',
    title: 'Applied AI',
    desc: 'Bringing AI to the physical world through highly optimized, production-ready systems.',
    backLink: '/research',
    features: [
      { title: 'Ambient AI', desc: 'Invisible intelligence in everyday objects.', link: '/research/applied-ai/ambient-ai' },
      { title: 'Human Mobility', desc: 'Predicting macro movement patterns.', link: '/research/applied-ai/human-mobility' },
      { title: 'Environmental', desc: 'Reacting to weather and atmosphere.', link: '/research/applied-ai/environmental-intelligence' },
      { title: 'AI Transparency', desc: 'Explainable AI for physical outcomes.', link: '/research/applied-ai/ai-transparency' }
    ]
  },
  {
    path: 'app/research/publications',
    type: 'pillar',
    section: 'Research',
    title: 'Publications',
    desc: 'Read our latest findings, published papers, and extensive case studies.',
    backLink: '/research',
    features: [
      { title: 'Whitepapers', desc: 'Deep technical explorations.', link: '/research/publications/whitepapers' },
      { title: 'Case Studies', desc: 'Real world implementations.', link: '/research/case-studies' },
      { title: 'Engineering Notes', desc: 'Behind the scenes at Rheole.', link: '/research/publications/engineering-notes' },
      { title: 'Research Blog', desc: 'Weekly thoughts on intelligence.', link: '/research/publications/research-blog' }
    ]
  },

  // COMPANY
  {
    path: 'app/company/about',
    type: 'pillar',
    section: 'Company',
    title: 'About',
    desc: 'Who we are and why we exist. The team behind the spatial intelligence revolution.',
    backLink: '/company',
    features: [
      { title: 'About Us', desc: 'Our story and founding vision.', link: '/company/about/about-us' },
      { title: 'Manifesto', desc: 'Our fundamental beliefs.', link: '/company/about/manifesto' },
      { title: 'Mission', desc: 'What we are working towards.', link: '/company/about/mission' },
      { title: 'Careers', desc: 'Join the team.', link: '/company/about/careers' }
    ]
  },
  {
    path: 'app/company/trust',
    type: 'pillar',
    section: 'Company',
    title: 'Trust',
    desc: 'Your privacy is paramount. How we secure the worlds most sensitive spatial data.',
    backLink: '/company',
    features: [
      { title: 'Security', desc: 'Infrastructure and encryption.', link: '/company/trust/security' },
      { title: 'Trust Center', desc: 'Compliance and audits.', link: '/company/trust/trust-center' },
      { title: 'Privacy', desc: 'How we handle your data.', link: '/company/trust/privacy' }
    ]
  },
  {
    path: 'app/company/connect',
    type: 'pillar',
    section: 'Company',
    title: 'Connect',
    desc: 'Get in touch with Rheole for press, partnerships, and brand inquiries.',
    backLink: '/company',
    features: [
      { title: 'Contact', desc: 'Reach our team directly.', link: '/company/connect/contact' },
      { title: 'Newsroom', desc: 'Latest announcements.', link: '/company/connect/newsroom' },
      { title: 'Brand Assets', desc: 'Logos and media kits.', link: '/company/connect/brand-assets' },
      { title: 'Press', desc: 'Media coverage.', link: '/company/connect/press' }
    ]
  }
];

function ensureDirSync(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

routes.forEach(route => {
  const dirPath = path.join(__dirname, route.path);
  ensureDirSync(dirPath);
  
  // Create Pillar Page
  const pillarContent = generatePillarPage(route.section, route.title, route.desc, route.features, route.backLink);
  fs.writeFileSync(path.join(dirPath, 'page.tsx'), pillarContent);
  console.log('Created pillar page at:', path.join(dirPath, 'page.tsx'));
  
  // Create Leaf Pages if they don't exist
  route.features.forEach(feature => {
    // If it links to a different section (like /research/urban-computing or /platform/api-references), skip generating a leaf here
    if (!feature.link.startsWith('/' + route.path.replace('app/', ''))) {
      return;
    }
    
    // Construct local path based on link
    const leafLocalPath = path.join(__dirname, 'app', feature.link);
    ensureDirSync(leafLocalPath);
    
    const leafFilePath = path.join(leafLocalPath, 'page.tsx');
    if (!fs.existsSync(leafFilePath)) {
      const leafContent = generateLeafPage(feature.title, '/' + route.path.replace('app/', ''));
      fs.writeFileSync(leafFilePath, leafContent);
      console.log('Created leaf page at:', leafFilePath);
    }
  });
});
