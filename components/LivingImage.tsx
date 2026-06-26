"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function LivingImage({ src, alt, className = "" }: { src: string, alt: string, className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 200 };
  const mouseX = useSpring(x, springConfig);
  const mouseY = useSpring(y, springConfig);

  // Subtle parallax mapping
  const bgX = useTransform(mouseX, [-0.5, 0.5], ["-5%", "5%"]);
  const bgY = useTransform(mouseY, [-0.5, 0.5], ["-5%", "5%"]);
  const lightX = useTransform(mouseX, [-0.5, 0.5], ["-100%", "100%"]);
  const lightY = useTransform(mouseY, [-0.5, 0.5], ["-100%", "100%"]);

  useEffect(() => {
    // Micro particles
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: { x: number; y: number; s: number; a: number; }[] = [];
    let animationId: number;

    const resize = () => {
      if (containerRef.current) {
        canvas.width = containerRef.current.clientWidth;
        canvas.height = containerRef.current.clientHeight;
        initParticles();
      }
    };

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < 30; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          s: Math.random() * 1.5 + 0.5,
          a: Math.random() * 0.5,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.y -= p.s * 0.2;
        if (p.y < -10) {
          p.y = canvas.height + 10;
          p.x = Math.random() * canvas.width;
        }
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.s, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${p.a})`;
        ctx.fill();
      });
      animationId = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const pctX = (e.clientX - rect.left) / rect.width - 0.5;
    const pctY = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(pctX);
    y.set(pctY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden ${className}`}
    >
      {/* Background Image with slight scale to prevent edge clipping during parallax */}
      <motion.img
        src={src}
        alt={alt}
        style={{ x: bgX, y: bgY, scale: 1.1 }}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out"
      />
      
      {/* Dynamic light tracking cursor */}
      <motion.div
        style={{ x: lightX, y: lightY }}
        className="absolute inset-0 z-10 w-[200%] h-[200%] -top-1/2 -left-1/2 pointer-events-none opacity-40 mix-blend-overlay bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.8)_0%,transparent_50%)]"
      />

      {/* Floating particles */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-20 mix-blend-screen opacity-50"
      />
      
      {/* Static gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-30" />
    </div>
  );
}
