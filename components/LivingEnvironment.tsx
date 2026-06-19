"use client";

import React, { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  baseRadius: number;
  targetRadius: number;
  currentRadius: number;
  color: string;
  type: "community" | "event" | "hub";
  pulsePhase: number;
  active: boolean;
}

interface Connection {
  from: Node;
  to: Node;
  strength: number;
}

export default function LivingEnvironment() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mouseRef = useRef({ x: 0, y: 0, rx: 0, ry: 0, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let nodes: Node[] = [];
    let connections: Connection[] = [];

    const colors = {
      community: "197, 168, 128", // Gold
      event: "79, 70, 229",      // Indigo
      hub: "14, 165, 233"        // Sky Blue
    };

    const resizeCanvas = () => {
      canvas.width = canvas.parentElement?.clientWidth || 800;
      canvas.height = canvas.parentElement?.clientHeight || 600;
      initEnvironment();
    };

    const initEnvironment = () => {
      nodes = [];
      connections = [];
      const nodeCount = 35;

      // Generate nodes in an organic isometric distribution
      for (let i = 0; i < nodeCount; i++) {
        // Distribute in a diamond/oval shape to feel structured yet natural
        const angle = Math.random() * Math.PI * 2;
        const dist = Math.random() * (canvas.width * 0.35);
        const x = canvas.width / 2 + Math.cos(angle) * dist * 1.5;
        const y = canvas.height / 2 + Math.sin(angle) * dist * 0.75; // squash vertically for isometric depth

        const rand = Math.random();
        const type = rand < 0.4 ? "community" : rand < 0.85 ? "event" : "hub";

        nodes.push({
          x,
          y,
          baseRadius: type === "hub" ? 4 : type === "community" ? 3 : 2,
          targetRadius: type === "hub" ? 4 : type === "community" ? 3 : 2,
          currentRadius: 0,
          color: colors[type],
          type,
          pulsePhase: Math.random() * Math.PI * 2,
          active: false
        });
      }

      // Establish connections between nearby nodes
      for (let i = 0; i < nodes.length; i++) {
        const n1 = nodes[i];
        // Connect to nearest 2-3 neighbors
        const distances = nodes
          .map((n, idx) => ({ idx, dist: Math.hypot(n1.x - n.x, n1.y - n.y) }))
          .filter((d) => d.idx !== i)
          .sort((a, b) => a.dist - b.dist);

        const connectionsLimit = 2 + Math.floor(Math.random() * 2);
        for (let k = 0; k < Math.min(connectionsLimit, distances.length); k++) {
          const n2 = nodes[distances[k].idx];
          // Check if connection already exists
          const exists = connections.some(
            (c) => (c.from === n1 && c.to === n2) || (c.from === n2 && c.to === n1)
          );
          if (!exists && distances[k].dist < canvas.width * 0.25) {
            connections.push({
              from: n1,
              to: n2,
              strength: 0
            });
          }
        }
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const isDark = document.documentElement.classList.contains("dark");

      // Smooth mouse interpolation for tactile feel
      mouseRef.current.rx += (mouseRef.current.x - mouseRef.current.rx) * 0.08;
      mouseRef.current.ry += (mouseRef.current.y - mouseRef.current.ry) * 0.08;

      // Draw subtle grid lines (architectural structure)
      ctx.strokeStyle = isDark ? "rgba(255, 255, 255, 0.015)" : "rgba(10, 37, 64, 0.015)";
      ctx.lineWidth = 0.5;
      const step = 60;
      for (let i = 0; i < canvas.width; i += step) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, canvas.height);
        ctx.stroke();
      }
      for (let j = 0; j < canvas.height; j += step) {
        ctx.beginPath();
        ctx.moveTo(0, j);
        ctx.lineTo(canvas.width, j);
        ctx.stroke();
      }

      // Update Node States based on Mouse proximity
      nodes.forEach((node) => {
        const mouseDist = Math.hypot(mouseRef.current.rx - node.x, mouseRef.current.ry - node.y);
        const threshold = canvas.width * 0.18;

        if (mouseRef.current.active && mouseDist < threshold) {
          node.active = true;
          // React to mouse: expand radius and shift target
          const proximityFactor = 1 - mouseDist / threshold;
          node.targetRadius = node.baseRadius * (1 + proximityFactor * 2.2);
        } else {
          node.active = false;
          node.targetRadius = node.baseRadius;
        }

        // Interpolate radius
        node.currentRadius += (node.targetRadius - node.currentRadius) * 0.1;
        node.pulsePhase += 0.02;
      });

      // Draw connections
      connections.forEach((c) => {
        const isActive = c.from.active || c.to.active;
        const targetStrength = isActive ? 1 : 0;
        c.strength += (targetStrength - c.strength) * 0.08;

        if (c.strength > 0.01) {
          const isGold = c.from.type === "community" || c.to.type === "community";
          const colorStr = isGold ? "197, 168, 128" : "79, 70, 229";
          const baseAlpha = isDark ? 0.04 : 0.02;
          const alpha = baseAlpha + c.strength * (isDark ? 0.18 : 0.08);

          ctx.strokeStyle = `rgba(${colorStr}, ${alpha})`;
          ctx.lineWidth = 0.75 + c.strength * 0.75;
          ctx.beginPath();
          ctx.moveTo(c.from.x, c.from.y);
          ctx.lineTo(c.to.x, c.to.y);
          ctx.stroke();

          // Flowing signal animation along the line
          if (c.strength > 0.4) {
            const flowProgress = (Date.now() * 0.001 * (0.8 + c.strength * 0.4)) % 1;
            const fx = c.from.x + (c.to.x - c.from.x) * flowProgress;
            const fy = c.from.y + (c.to.y - c.from.y) * flowProgress;
            ctx.fillStyle = `rgba(${colorStr}, ${c.strength * 0.5})`;
            ctx.beginPath();
            ctx.arc(fx, fy, 1.5, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      });

      // Draw Nodes
      nodes.forEach((node) => {
        const pulse = Math.sin(node.pulsePhase) * 1.5;
        const currentR = Math.max(0.5, node.currentRadius + (node.active ? pulse : 0));

        // Draw ambient glow under active nodes
        if (node.active) {
          const glowGrad = ctx.createRadialGradient(
            node.x,
            node.y,
            0,
            node.x,
            node.y,
            currentR * 4
          );
          glowGrad.addColorStop(0, `rgba(${node.color}, 0.2)`);
          glowGrad.addColorStop(0.5, `rgba(${node.color}, 0.05)`);
          glowGrad.addColorStop(1, "rgba(0,0,0,0)");
          ctx.fillStyle = glowGrad;
          ctx.beginPath();
          ctx.arc(node.x, node.y, currentR * 4, 0, Math.PI * 2);
          ctx.fill();
        }

        // Node center
        ctx.fillStyle = node.active 
          ? `rgba(${node.color}, 1)` 
          : isDark 
          ? `rgba(${node.color}, 0.4)` 
          : `rgba(${node.color}, 0.3)`;
        
        ctx.beginPath();
        ctx.arc(node.x, node.y, currentR, 0, Math.PI * 2);
        ctx.fill();

        // Subtle thin outer ring for communities and hubs
        if (node.active && (node.type === "community" || node.type === "hub")) {
          ctx.strokeStyle = `rgba(${node.color}, 0.5)`;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.arc(node.x, node.y, currentR * 2, 0, Math.PI * 2);
          ctx.stroke();
        }
      });

      // Ambient mouse ring
      if (mouseRef.current.active) {
        const mouseGrad = ctx.createRadialGradient(
          mouseRef.current.rx,
          mouseRef.current.ry,
          0,
          mouseRef.current.rx,
          mouseRef.current.ry,
          canvas.width * 0.18
        );
        mouseGrad.addColorStop(0, isDark ? "rgba(255, 255, 255, 0.02)" : "rgba(10, 37, 64, 0.01)");
        mouseGrad.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = mouseGrad;
        ctx.beginPath();
        ctx.arc(mouseRef.current.rx, mouseRef.current.ry, canvas.width * 0.18, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
      mouseRef.current.active = true;
    };

    const handleMouseEnter = () => {
      mouseRef.current.active = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    window.addEventListener("resize", resizeCanvas);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseenter", handleMouseEnter);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    resizeCanvas();
    draw();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (canvas) {
        canvas.removeEventListener("mousemove", handleMouseMove);
        canvas.removeEventListener("mouseenter", handleMouseEnter);
        canvas.removeEventListener("mouseleave", handleMouseLeave);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[600px] border border-brand-blue/5 dark:border-luxury-white/5 bg-transparent overflow-hidden flex items-center justify-center cursor-none"
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" />
    </div>
  );
}
