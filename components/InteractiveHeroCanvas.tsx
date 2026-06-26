"use client";

import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  type: "community" | "event" | "place";
  alpha: number;
  targetAlpha: number;
}

export default function InteractiveHeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let particles: Particle[] = [];
    let mouse = { x: -1000, y: -1000 };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const numParticles = Math.floor((canvas.width * canvas.height) / 15000); // Density
      
      for (let i = 0; i < numParticles; i++) {
        const types: ("community" | "event" | "place")[] = ["community", "event", "place"];
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          radius: Math.random() * 2 + 1,
          type: types[Math.floor(Math.random() * types.length)],
          alpha: Math.random() * 0.3 + 0.1,
          targetAlpha: 0,
        });
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const isDark = document.documentElement.classList.contains("dark");
      
      // Breathing idle effect (sine wave based on time)
      const time = Date.now() / 2000;
      const breathe = Math.sin(time) * 0.5 + 0.5;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        // Bounce
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        // Distance to mouse
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxDist = 250;

        // Mouse interaction logic
        if (dist < maxDist) {
          p.targetAlpha = 1 - (dist / maxDist);
          // Subtle magnetic pull
          p.x += dx * 0.005;
          p.y += dy * 0.005;
        } else {
          p.targetAlpha = 0.2 + (breathe * 0.1);
        }

        // Ease alpha
        p.alpha += (p.targetAlpha - p.alpha) * 0.05;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        
        let color = isDark ? `255, 255, 255` : `10, 37, 64`;
        if (p.type === "community") color = `197, 168, 128`; // Gold
        
        ctx.fillStyle = `rgba(${color}, ${p.alpha})`;
        ctx.fill();

        // Draw connections
        if (dist < maxDist) {
          for (let j = i + 1; j < particles.length; j++) {
            const p2 = particles[j];
            const dx2 = p.x - p2.x;
            const dy2 = p.y - p2.y;
            const dist2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);
            
            if (dist2 < 80) {
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(p2.x, p2.y);
              // Connection line opacity based on distance from mouse AND distance between particles
              const lineAlpha = (1 - (dist / maxDist)) * (1 - (dist2 / 80)) * 0.5;
              ctx.strokeStyle = `rgba(${color}, ${lineAlpha})`;
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          }
        }
      }

      animationId = requestAnimationFrame(draw);
    };

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    
    resize();
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full pointer-events-none z-0" 
    />
  );
}
