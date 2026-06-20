import React from "react";

interface RheoleLogoProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  variant?: "icon" | "wordmark";
}

export default function RheoleLogo({
  className = "h-8 w-auto",
  variant = "icon",
  alt = "Rheole Logo",
  ...props
}: RheoleLogoProps) {
  // variant "icon" refers to rheole-brand-logo.png (the wave icon)
  // variant "wordmark" refers to rheole-actual-logo.png (the "Rheole" text logo)
  const src = variant === "icon" ? "/rheole-brand-logo.png?v=5" : "/rheole-web-text-final-logo.png?v=5";

  return (
    <img
      src={src}
      alt={alt}
      className={`${className} object-contain dark:invert`}
      {...props}
    />
  );
}

