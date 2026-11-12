"use client";

import React, { useEffect, useRef } from "react";
import { useSeason, Season } from "@/context/SeasonContext";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  angle: number;
  angularSpeed: number;
  opacity: number;
  color: string;
  swayRadius: number;
  swaySpeed: number;
}

const AUTUMN_COLORS = ["#C88A42", "#6E7F66", "#B87333", "#7A8450"];

export function SeasonalCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { season } = useSeason();
  const seasonRef = useRef<Season>(season);
  seasonRef.current = season;

  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({
    x: -1000,
    y: -1000,
    active: false,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY, active: true };
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    // Particle count: 18 on desktop, 10 on mobile
    const particleCount = width < 768 ? 10 : 18;

    const createParticle = (randomY = true): Particle => {
      const isAutumn = seasonRef.current === "autumn";
      return {
        x: Math.random() * width,
        y: randomY ? Math.random() * height : -20,
        size: isAutumn ? Math.random() * 8 + 10 : Math.random() * 2.5 + 1.5,
        speedY: isAutumn ? Math.random() * 0.6 + 0.4 : Math.random() * 0.8 + 0.5,
        speedX: (Math.random() - 0.5) * 0.3,
        angle: Math.random() * Math.PI * 2,
        angularSpeed: (Math.random() - 0.5) * 0.015,
        opacity: isAutumn ? Math.random() * 0.25 + 0.35 : Math.random() * 0.3 + 0.4,
        color: isAutumn
          ? AUTUMN_COLORS[Math.floor(Math.random() * AUTUMN_COLORS.length)]
          : "#FFFFFF",
        swayRadius: Math.random() * 1.5 + 0.5,
        swaySpeed: Math.random() * 0.02 + 0.01,
      };
    };

    const particles: Particle[] = Array.from({ length: particleCount }, () =>
      createParticle(true)
    );

    // Helper: draw an organic watercolor leaf silhouette
    const drawLeaf = (
      context: CanvasRenderingContext2D,
      p: Particle
    ) => {
      context.save();
      context.translate(p.x, p.y);
      context.rotate(p.angle);
      context.globalAlpha = p.opacity;
      context.fillStyle = p.color;

      const s = p.size;
      context.beginPath();
      context.moveTo(0, -s);
      // Right curve
      context.bezierCurveTo(s * 0.55, -s * 0.45, s * 0.65, s * 0.3, 0, s);
      // Left curve
      context.bezierCurveTo(-s * 0.65, s * 0.3, -s * 0.55, -s * 0.45, 0, -s);
      context.closePath();
      context.fill();

      // Subtle center vein
      context.strokeStyle = "rgba(0, 0, 0, 0.12)";
      context.lineWidth = 0.8;
      context.beginPath();
      context.moveTo(0, -s * 0.7);
      context.lineTo(0, s * 0.65);
      context.stroke();

      context.restore();
    };

    // Helper: draw a soft snowflake / frost particle
    const drawSnow = (
      context: CanvasRenderingContext2D,
      p: Particle
    ) => {
      context.save();
      context.globalAlpha = p.opacity;
      context.fillStyle = p.color;
      context.beginPath();
      context.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      context.fill();
      context.restore();
    };

    let tick = 0;
    const render = () => {
      ctx.clearRect(0, 0, width, height);
      tick++;

      const isAutumn = seasonRef.current === "autumn";

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Horizontal sinusoidal sway
        p.x += Math.sin(tick * p.swaySpeed + i) * p.swayRadius + p.speedX;
        p.y += p.speedY;
        p.angle += p.angularSpeed;

        // Subtle mouse breeze deflection
        if (mouseRef.current.active) {
          const dx = p.x - mouseRef.current.x;
          const dy = p.y - mouseRef.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            const force = (120 - dist) / 120;
            p.x += (dx / dist) * force * 1.5;
            p.y += (dy / dist) * force * 0.8;
          }
        }

        // Draw particle
        if (isAutumn) {
          drawLeaf(ctx, p);
        } else {
          drawSnow(ctx, p);
        }

        // Reset if moved out of bounds
        if (p.y > height + 30) {
          particles[i] = createParticle(false);
        }
        if (p.x < -30) p.x = width + 20;
        if (p.x > width + 30) p.x = -20;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 opacity-80"
      aria-hidden="true"
    />
  );
}
