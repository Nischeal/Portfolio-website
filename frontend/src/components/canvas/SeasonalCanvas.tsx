"use client";

import { useEffect, useRef } from "react";
import { useSeason, Season } from "@/context/SeasonContext";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

interface Particle {
  /** The season it was made for; a season switch replaces it with the other kind. */
  season: Season;
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
// Frost blue-grey (the canvas's existing winter tone, a step deeper so thin flake lines read on linen)
const SNOW_COLOR = "#97A7B3";

export function SeasonalCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { season } = useSeason();
  const seasonRef = useRef<Season>(season);
  const reducedMotion = usePrefersReducedMotion();
  // In reduced-motion mode the single static frame must be redrawn when the season changes;
  // when animating, the loop picks the new season up from seasonRef instead.
  const staticSeason = reducedMotion ? season : null;

  // Keep the animation loop's view of the season current without restarting it.
  useEffect(() => {
    seasonRef.current = season;
  }, [season]);

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

    let animationFrameId = 0;
    let width = 0;
    let height = 0;

    // Size the backing store in device pixels so leaves stay sharp on retina screens,
    // then draw in CSS pixels via the transform.
    const sizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    sizeCanvas();

    const handleResize = () => {
      sizeCanvas();
      if (reducedMotion) drawFrame();
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
        season: seasonRef.current,
        x: Math.random() * width,
        y: randomY ? Math.random() * height : -20,
        size: isAutumn ? Math.random() * 8 + 10 : Math.random() * 5 + 6,
        speedY: isAutumn ? Math.random() * 0.6 + 0.4 : Math.random() * 0.8 + 0.5,
        speedX: (Math.random() - 0.5) * 0.3,
        angle: Math.random() * Math.PI * 2,
        angularSpeed: (Math.random() - 0.5) * (isAutumn ? 0.015 : 0.008),
        opacity: isAutumn ? Math.random() * 0.25 + 0.35 : Math.random() * 0.3 + 0.4,
        color: isAutumn ? AUTUMN_COLORS[Math.floor(Math.random() * AUTUMN_COLORS.length)] : SNOW_COLOR,
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

    // Helper: draw a six-armed snowflake crystal (each arm with a pair of small side branches)
    const drawSnow = (
      context: CanvasRenderingContext2D,
      p: Particle
    ) => {
      const s = p.size;
      context.save();
      context.translate(p.x, p.y);
      context.rotate(p.angle);
      context.globalAlpha = p.opacity;
      context.strokeStyle = p.color;
      context.lineWidth = Math.max(0.9, s / 6);
      context.lineCap = "round";
      context.beginPath();
      for (let arm = 0; arm < 6; arm++) {
        context.rotate(Math.PI / 3);
        context.moveTo(0, 0);
        context.lineTo(0, -s);
        // Side branches at 55% of the arm, angled outwards
        const by = -s * 0.55;
        const bl = s * 0.32;
        context.moveTo(0, by);
        context.lineTo(-bl * 0.7, by - bl * 0.7);
        context.moveTo(0, by);
        context.lineTo(bl * 0.7, by - bl * 0.7);
      }
      context.stroke();
      context.restore();
    };

    // A season switch replaces every particle with the other kind at once (spread over the screen)
    const matchSeason = () => {
      for (let i = 0; i < particles.length; i++) {
        if (particles[i].season !== seasonRef.current) particles[i] = createParticle(true);
      }
    };

    // Reduced motion: one still frame of the current season, no loop.
    const drawFrame = () => {
      matchSeason();
      ctx.clearRect(0, 0, width, height);
      const isAutumn = seasonRef.current === "autumn";
      for (const p of particles) {
        if (isAutumn) drawLeaf(ctx, p);
        else drawSnow(ctx, p);
      }
    };

    let tick = 0;
    const render = () => {
      ctx.clearRect(0, 0, width, height);
      tick++;

      matchSeason();
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
          if (dist > 0 && dist < 120) {
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

    // Pause the loop while the tab is hidden; resume when it's visible again.
    const handleVisibility = () => {
      cancelAnimationFrame(animationFrameId);
      if (!document.hidden) render();
    };

    if (reducedMotion) {
      drawFrame();
    } else {
      document.addEventListener("visibilitychange", handleVisibility);
      if (!document.hidden) render();
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("visibilitychange", handleVisibility);
      cancelAnimationFrame(animationFrameId);
    };
  }, [reducedMotion, staticSeason]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 opacity-80"
      aria-hidden="true"
    />
  );
}
