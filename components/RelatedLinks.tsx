import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface RelatedLink {
  title: string;
  href: string;
  description?: string;
}

interface RelatedLinksProps {
  title?: string;
  links: RelatedLink[];
}

export default function RelatedLinks({ title = "Explore Further", links }: RelatedLinksProps) {
  if (!links || links.length === 0) return null;

  return (
    <div className="mt-16 pt-16 border-t border-[rgba(255,255,255,0.05)] w-full">
      <h3 className="text-xl font-medium text-[#F2F2F0] mb-8">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {links.map((link, idx) => (
          <Link
            key={idx}
            href={link.href}
            className="group flex flex-col p-6 rounded-2xl bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] hover:border-[rgba(255,255,255,0.15)] hover:bg-[rgba(255,255,255,0.05)] transition-all duration-300 interactive"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[#F2F2F0] font-medium group-hover:text-white transition-colors">
                {link.title}
              </span>
              <ArrowRight className="text-[#6A6A6A] group-hover:text-[#F2F2F0] transition-colors h-4 w-4 transform group-hover:translate-x-1 duration-300" />
            </div>
            {link.description && (
              <span className="text-sm text-[#6A6A6A] leading-relaxed line-clamp-2">
                {link.description}
              </span>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
