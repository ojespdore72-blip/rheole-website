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
  // variant "icon" refers to rheole-app-icon-transparent.png (the transparent app icon logo)
  // variant "wordmark" refers to rheole-web-text-final-logo.png (the "Rheole" text logo)
  const src = variant === "icon" ? "/rheole-app-icon-transparent.png?v=6" : "/rheole-web-text-final-logo.png?v=5";

  return (
    <img
      src={src}
      alt={alt}
      className={`${className} object-contain dark:invert dark:brightness-200`}
      {...props}
    />
  );
}

