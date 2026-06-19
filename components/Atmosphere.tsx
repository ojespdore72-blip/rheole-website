"use client";

import React, { useEffect, useRef } from "react";

interface LightField {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  targetOpacity: number;
  currentOpacity: number;
}

export default function Atmosphere() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let fields: LightField[] = [];

    const colors = [
      "197, 168, 128",  // Warm Gold
      "220, 205, 185",  // Cream
      "180, 160, 135",  // Muted Bronze
      "240, 230, 210"   // Soft Ivory
    ];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initFields();
    };

    const initFields = () => {
      fields = [];
      const count = 5;
      for (let i = 0; i < count; i++) {
        const radius = Math.random() * (canvas.width * 0.4) + canvas.width * 0.3;
        fields.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.25,
          vy: (Math.random() - 0.5) * 0.25,
          radius,
          color: colors[i % colors.length],
          targetOpacity: Math.random() * 0.15 + 0.05,
          currentOpacity: 0
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const isDark = document.documentElement.classList.contains("dark");
      
      // Base atmospheric color fill to prevent flat white
      ctx.fillStyle = isDark ? "rgba(10, 10, 12, 1)" : "rgba(250, 250, 252, 1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.globalCompositeOperation = isDark ? "screen" : "multiply";

      fields.forEach((f) => {
        // Drift position
        f.x += f.vx;
        f.y += f.vy;

        // Boundaries bounce
        if (f.x < -f.radius || f.x > canvas.width + f.radius) f.vx *= -1;
        if (f.y < -f.radius || f.y > canvas.height + f.radius) f.vy *= -1;

        // Smooth opacity transition
        f.currentOpacity += (f.targetOpacity - f.currentOpacity) * 0.01;
        if (Math.abs(f.currentOpacity - f.targetOpacity) < 0.01) {
          f.targetOpacity = Math.random() * 0.15 + 0.05;
        }

        // Draw soft radial light field
        const grad = ctx.createRadialGradient(f.x, f.y, 0, f.x, f.y, f.radius);
        const opacityFactor = isDark ? f.currentOpacity : f.currentOpacity * 0.4;
        grad.addColorStop(0, `rgba(${f.color}, ${opacityFactor})`);
        grad.addColorStop(0.5, `rgba(${f.color}, ${opacityFactor * 0.3})`);
        grad.addColorStop(1, "rgba(0,0,0,0)");

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(f.x, f.y, f.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // Restore composite operation
      ctx.globalCompositeOperation = "source-over";

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    draw();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}
