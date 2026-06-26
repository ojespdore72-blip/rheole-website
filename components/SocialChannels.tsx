import React from "react";
import Link from "next/link";

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
);

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M4 4l11.733 16h4.267l-11.733-16z"/><path d="M4 20l6.768-6.768m2.46-2.46l6.772-6.772"/></svg>
);

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);

const RedditIcon = ({ className }: { className?: string }) => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.688-.561-1.249-1.249-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
  </svg>
);

const socialLinks = [
  { name: "Instagram", icon: <InstagramIcon />, url: "https://instagram.com/rheole" },
  { name: "Twitter", icon: <TwitterIcon />, url: "https://x.com/rheole" },
  { name: "Facebook", icon: <FacebookIcon />, url: "https://facebook.com/rheole" },
  { name: "Reddit", icon: <RedditIcon />, url: "https://reddit.com/r/rheole" }
];

export default function SocialChannels() {
  return (
    <div className="w-full flex flex-col items-center gap-8 py-16 relative z-10">
      <h3 className="text-[10px] font-mono tracking-[0.2em] uppercase text-brand-gold text-center">
        Official Social Channels
      </h3>
      <div className="flex gap-4 md:gap-6 flex-wrap justify-center">
        {socialLinks.map((link) => (
          <Link
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center w-36 h-32 rounded-3xl border border-brand-blue/10 dark:border-white/10 bg-brand-blue/[0.02] dark:bg-white/[0.02] hover:bg-brand-blue/5 dark:hover:bg-white/5 hover:border-brand-gold/30 hover:-translate-y-1 transition-all duration-300 group shadow-sm"
          >
            <div className="text-brand-blue dark:text-white group-hover:text-brand-gold transition-colors duration-300 mb-4">
              {link.icon}
            </div>
            <span className="text-[10px] font-mono tracking-widest uppercase text-brand-blue/70 dark:text-white/70 group-hover:text-brand-gold transition-colors duration-300">
              {link.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
