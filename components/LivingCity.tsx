"use client";

import React, { useEffect, useRef, useState } from "react";

interface Building {
  gridX: number;
  gridY: number;
  w: number;
  d: number;
  maxHeight: number;
  currentHeight: number;
  district: "residential" | "commercial" | "waterfront" | "tech";
  glowIntensity: number;
}

interface Hotspot {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  opacity: number;
  speed: number;
}

interface PathFlow {
  points: { x: number; y: number }[];
  progress: number;
  speed: number;
  color: string;
}

export default function LivingCity() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [scrollPercent, setScrollPercent] = useState(0);

  // Monitor scroll progress of the container relative to the screen
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate how far the container is scrolled through the viewport
      // 0 = just entered bottom, 1 = scrolled out top
      const totalDist = windowHeight + rect.height;
      const currentPos = windowHeight - rect.top;
      const progress = Math.min(Math.max(currentPos / totalDist, 0), 1);
      
      setScrollPercent(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    // Isometric Projection parameters
    const isoAngle = Math.PI / 6; // 30 degrees
    const cosIso = Math.cos(isoAngle);
    const sinIso = Math.sin(isoAngle);

    // Grid details
    const cols = 8;
    const rows = 8;
    const blockSize = 32; // size of each building block in grid space
    const gap = 12; // street width
    
    let buildings: Building[] = [];
    let hotspots: Hotspot[] = [];
    let flows: PathFlow[] = [];

    // Initialize City Buildings
    const initBuildings = () => {
      buildings = [];
      const districts: ("residential" | "commercial" | "waterfront" | "tech")[] = [
        "waterfront",
        "commercial",
        "residential",
        "tech",
      ];

      for (let x = 0; x < cols; x++) {
        for (let y = 0; y < rows; y++) {
          // Leave some grids empty for plazas and main streets
          if ((x === 3 && y !== 3) || (y === 4 && x !== 4) || (x === 0 && y === 0) || (x === 7 && y === 7)) {
            continue;
          }

          // Determine district based on coordinates
          let district: "residential" | "commercial" | "waterfront" | "tech" = "residential";
          if (x < 3 && y < 3) district = "waterfront";
          else if (x >= 4 && y < 4) district = "commercial";
          else if (x < 4 && y >= 4) district = "residential";
          else district = "tech";

          // Set max heights
          let maxHeight = 20 + Math.random() * 40;
          if (district === "commercial") maxHeight = 80 + Math.random() * 70;
          if (district === "tech") maxHeight = 50 + Math.random() * 50;
          if (district === "waterfront") maxHeight = 15 + Math.random() * 25;

          buildings.push({
            gridX: x,
            gridY: y,
            w: blockSize,
            d: blockSize,
            maxHeight,
            currentHeight: 0,
            district,
            glowIntensity: 0,
          });
        }
      }
    };

    // Initialize hotspots (plazas)
    const initHotspots = () => {
      hotspots = [
        { x: 3.5, y: 3.5, radius: 0, maxRadius: 120, opacity: 1, speed: 0.8 },
        { x: 1.5, y: 5.5, radius: 0, maxRadius: 80, opacity: 1, speed: 0.6 },
        { x: 6.0, y: 2.0, radius: 0, maxRadius: 90, opacity: 1, speed: 0.5 },
      ];
    };

    // Initialize flows on streets
    const initFlows = () => {
      flows = [
        // Horizontal main street flow
        {
          points: [
            { x: -0.5, y: 4.5 },
            { x: 3.5, y: 4.5 },
            { x: 3.5, y: 8.5 },
          ],
          progress: 0,
          speed: 0.003,
          color: "#4F46E5",
        },
        // Vertical main street flow
        {
          points: [
            { x: 3.5, y: -0.5 },
            { x: 3.5, y: 4.5 },
            { x: 8.5, y: 4.5 },
          ],
          progress: 0,
          speed: 0.002,
          color: "#C5A880",
        },
        // Outer loop waterfront path
        {
          points: [
            { x: 0.5, y: 0.5 },
            { x: 0.5, y: 7.5 },
            { x: 7.5, y: 7.5 },
          ],
          progress: 0.2,
          speed: 0.0025,
          color: "#C5A880",
        },
      ];
    };

    // Resize handler
    const handleResize = () => {
      canvas.width = canvas.parentElement?.clientWidth || 800;
      canvas.height = canvas.parentElement?.clientHeight || 550;
    };

    // Project grid coordinates to isometric canvas space
    const project = (gx: number, gy: number, gz: number) => {
      // Offset grid to center it on canvas
      const gridWidth = cols * (blockSize + gap);
      const gridHeight = rows * (blockSize + gap);
      
      const cx = canvas.width / 2;
      const cy = canvas.height / 2 + 50; // shift down slightly for aesthetic weight

      // Scale coordinates
      const sx = (gx * (blockSize + gap)) - gridWidth / 2;
      const sy = (gy * (blockSize + gap)) - gridHeight / 2;

      // Isometric projection
      const px = cx + (sx - sy) * cosIso;
      const py = cy + (sx + sy) * sinIso - gz;

      return { x: px, y: py };
    };

    // Main Draw loop
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const isDark = document.documentElement.classList.contains("dark");

      // Draw background grid lines for structure (Notion/Linear style)
      ctx.strokeStyle = isDark ? "rgba(255,255,255,0.02)" : "rgba(10,37,64,0.02)";
      ctx.lineWidth = 0.5;
      const step = 40;
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

      // Update values based on scroll percent
      // Scroll segments:
      // 0.0 - 0.3: Waterfront district rises & glows
      // 0.2 - 0.5: Commercial district rises & glows
      // 0.4 - 0.7: Residential district rises & glows
      // 0.6 - 0.9: Tech district rises & glows
      // 0.5 - 1.0: Event hotspots radiate and path flows emerge

      buildings.forEach((b) => {
        let triggerStart = 0;
        let triggerEnd = 0.4;

        if (b.district === "commercial") {
          triggerStart = 0.2;
          triggerEnd = 0.6;
        } else if (b.district === "residential") {
          triggerStart = 0.4;
          triggerEnd = 0.75;
        } else if (b.district === "tech") {
          triggerStart = 0.6;
          triggerEnd = 0.95;
        }

        const factor = Math.min(Math.max((scrollPercent - triggerStart) / (triggerEnd - triggerStart), 0), 1);
        b.currentHeight = b.maxHeight * factor;
        b.glowIntensity = factor;
      });

      // 1. Draw street outlines/lanes
      ctx.strokeStyle = isDark ? "rgba(255, 255, 255, 0.05)" : "rgba(10, 37, 64, 0.05)";
      ctx.lineWidth = 1;
      for (let i = 0; i <= cols; i++) {
        const p1 = project(i, 0, 0);
        const p2 = project(i, rows, 0);
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
      }
      for (let j = 0; j <= rows; j++) {
        const p1 = project(0, j, 0);
        const p2 = project(cols, j, 0);
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
      }

      // 2. Draw Event Hotspots (expanding rings centered on plazas)
      if (scrollPercent > 0.4) {
        hotspots.forEach((hs) => {
          hs.radius += hs.speed;
          if (hs.radius > hs.maxRadius) {
            hs.radius = 0;
            hs.opacity = 1;
          } else {
            hs.opacity = 1 - (hs.radius / hs.maxRadius);
          }

          const center = project(hs.x, hs.y, 0);
          ctx.strokeStyle = `rgba(197, 168, 128, ${hs.opacity * 0.4 * (scrollPercent - 0.4) * 2})`;
          ctx.lineWidth = 1.5;

          // Draw projected isometric ellipse
          ctx.beginPath();
          ctx.ellipse(center.x, center.y, hs.radius, hs.radius * sinIso, 0, 0, Math.PI * 2);
          ctx.stroke();
        });
      }

      // 3. Draw Path Flows (dynamic lines on streets)
      if (scrollPercent > 0.3) {
        const pathProgressFactor = Math.min((scrollPercent - 0.3) * 2.5, 1);
        flows.forEach((flow) => {
          flow.progress += flow.speed;
          if (flow.progress >= 1) flow.progress = 0;

          // Project points
          const pCoords = flow.points.map((pt) => project(pt.x, pt.y, 0));
          
          // Draw whole path
          ctx.strokeStyle = isDark ? "rgba(255,255,255,0.06)" : "rgba(10,37,64,0.06)";
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.moveTo(pCoords[0].x, pCoords[0].y);
          for (let i = 1; i < pCoords.length; i++) {
            ctx.lineTo(pCoords[i].x, pCoords[i].y);
          }
          ctx.stroke();

          // Draw flowing energy dash
          const dashCount = pCoords.length - 1;
          const currentSeg = Math.floor(flow.progress * dashCount);
          const segProgress = (flow.progress * dashCount) % 1;

          if (currentSeg < dashCount) {
            const startPt = pCoords[currentSeg];
            const endPt = pCoords[currentSeg + 1];

            const dx = endPt.x - startPt.x;
            const dy = endPt.y - startPt.y;

            const flowX = startPt.x + dx * segProgress;
            const flowY = startPt.y + dy * segProgress;

            // Draw glowing flow point
            ctx.fillStyle = flow.color;
            ctx.beginPath();
            ctx.arc(flowX, flowY, 2.5, 0, Math.PI * 2);
            ctx.fill();

            // Glow aura
            const grad = ctx.createRadialGradient(flowX, flowY, 0, flowX, flowY, 8);
            grad.addColorStop(0, flow.color === "#C5A880" ? `rgba(197,168,128,${0.3 * pathProgressFactor})` : `rgba(79,70,229,${0.3 * pathProgressFactor})`);
            grad.addColorStop(1, "rgba(0,0,0,0)");
            ctx.fillStyle = grad;
            ctx.beginPath();
            ctx.arc(flowX, flowY, 8, 0, Math.PI * 2);
            ctx.fill();
          }
        });
      }

      // 4. Draw Buildings (ordered back-to-front by painter's algorithm)
      // Sort buildings based on gridX + gridY so back is drawn first
      buildings.sort((a, b) => (a.gridX + a.gridY) - (b.gridX + b.gridY));

      buildings.forEach((b) => {
        // Skip drawing flat blocks if scroll is at 0
        if (b.currentHeight < 1) return;

        // Base coordinate points
        const baseTopLeft = project(b.gridX, b.gridY, 0);
        const baseTopRight = project(b.gridX + 1, b.gridY, 0);
        const baseBotRight = project(b.gridX + 1, b.gridY + 1, 0);
        const baseBotLeft = project(b.gridX, b.gridY + 1, 0);

        // Projected coordinate points (building top)
        const topLeft = project(b.gridX, b.gridY, b.currentHeight);
        const topRight = project(b.gridX + 1, b.gridY, b.currentHeight);
        const botRight = project(b.gridX + 1, b.gridY + 1, b.currentHeight);
        const botLeft = project(b.gridX, b.gridY + 1, b.currentHeight);

        // Determine colors based on theme, district and glow state
        let topColor = isDark ? "rgba(15, 18, 42, 0.85)" : "rgba(240, 240, 245, 0.85)";
        let leftColor = isDark ? "rgba(10, 12, 30, 0.9)" : "rgba(225, 225, 230, 0.9)";
        let rightColor = isDark ? "rgba(8, 10, 24, 0.95)" : "rgba(215, 215, 220, 0.95)";
        
        let strokeColor = isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(10, 37, 64, 0.08)";

        if (b.glowIntensity > 0.05) {
          const intensity = b.glowIntensity * 0.45;
          // Apply district gold or blue glows
          if (b.district === "tech" || b.district === "commercial") {
            topColor = isDark 
              ? `rgba(28, 30, 75, ${0.85 + intensity * 0.15})`
              : `rgba(230, 235, 255, 0.95)`;
            strokeColor = `rgba(79, 70, 229, ${intensity * 1.5})`; // Indigo
          } else {
            topColor = isDark
              ? `rgba(38, 32, 24, ${0.85 + intensity * 0.15})`
              : `rgba(255, 248, 235, 0.95)`;
            strokeColor = `rgba(197, 168, 128, ${intensity * 1.5})`; // Gold
          }
        }

        // Draw Left Face (projected x,y to x+1,y with height)
        ctx.fillStyle = leftColor;
        ctx.strokeStyle = strokeColor;
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.moveTo(baseBotLeft.x, baseBotLeft.y);
        ctx.lineTo(baseBotRight.x, baseBotRight.y);
        ctx.lineTo(botRight.x, botRight.y);
        ctx.lineTo(botLeft.x, botLeft.y);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        // Draw Right Face (projected x+1,y to x+1,y+1 with height)
        ctx.fillStyle = rightColor;
        ctx.beginPath();
        ctx.moveTo(baseBotRight.x, baseBotRight.y);
        ctx.lineTo(baseTopRight.x, baseTopRight.y);
        ctx.lineTo(topRight.x, topRight.y);
        ctx.lineTo(botRight.x, botRight.y);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        // Draw Top Face (roof polygon)
        ctx.fillStyle = topColor;
        ctx.beginPath();
        ctx.moveTo(topLeft.x, topLeft.y);
        ctx.lineTo(topRight.x, topRight.y);
        ctx.lineTo(botRight.x, botRight.y);
        ctx.lineTo(botLeft.x, botLeft.y);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        // If highly illuminated, add a premium subtle gold roof cross/grid detail
        if (b.glowIntensity > 0.6 && b.district === "tech") {
          ctx.strokeStyle = "rgba(197, 168, 128, 0.4)";
          ctx.lineWidth = 0.75;
          ctx.beginPath();
          // Cross lines on roof
          ctx.moveTo(topLeft.x, topLeft.y);
          ctx.lineTo(botRight.x, botRight.y);
          ctx.moveTo(topRight.x, topRight.y);
          ctx.lineTo(botLeft.x, botLeft.y);
          ctx.stroke();
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    initBuildings();
    initHotspots();
    initFlows();
    draw();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [scrollPercent]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[580px] rounded-2xl border border-brand-blue/10 dark:border-luxury-white/5 bg-brand-blue/[0.01] dark:bg-luxury-white/[0.01] overflow-hidden backdrop-blur-md flex items-center justify-center"
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" />

      {/* Control overlay metadata in Nothing style */}
      <div className="absolute bottom-6 right-6 flex items-center gap-4 text-[9px] uppercase tracking-widest text-brand-blue/45 dark:text-luxury-white/45 font-medium z-10 bg-white/40 dark:bg-luxury-black/40 px-4 py-2 rounded-full border border-brand-blue/5 dark:border-luxury-white/5 backdrop-blur-md">
        <span>GRID RENDER: ACTIVE</span>
        <span>•</span>
        <span>ENERGY INDEX: {Math.round(scrollPercent * 100)}%</span>
      </div>

      <div className="absolute top-6 left-6 flex flex-col gap-1 z-10 text-left">
        <span className="text-[10px] tracking-widest uppercase font-semibold text-brand-gold">
          Spatial Cityscape Engine
        </span>
        <span className="text-[9px] tracking-wider text-brand-blue/40 dark:text-luxury-white/40">
          Scroll to modulate structural activity
        </span>
      </div>
    </div>
  );
}
