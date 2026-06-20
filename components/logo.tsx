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
  const src = variant === "icon" ? "/rheole-brand-logo.jpeg?v=4" : "/rheole-actual-logo.png?v=4";

  return (
    <img
      src={src}
      alt={alt}
      className={`${className} object-contain`}
      {...props}
    />
  );
}

