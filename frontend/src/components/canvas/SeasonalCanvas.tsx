"use client";

import { useEffect, useRef } from "react";
import { useSeason, Season } from "@/context/SeasonContext";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { useMonarch } from "@/hooks/useMonarch";

/** What the canvas draws: the season, or shadow motes while Monarch mode is on (Phase 6). */
type Kind = Season | "shadow";

interface Particle {
  /** The kind it was made for; a season or Monarch switch replaces it with the current kind. */
  season: Kind;
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
// In Monarch the canvas draws rising violet motes over the CSS vignette (MonarchAura, ADR 039/040)
// Frost blue-grey (the canvas's existing winter tone, a step deeper so thin flake lines read on linen)
const SNOW_COLOR = "#97A7B3";

export function SeasonalCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { season } = useSeason();
  const monarch = useMonarch();
  const kind: Kind = monarch ? "shadow" : season;
  const seasonRef = useRef<Kind>(kind);
  const reducedMotion = usePrefersReducedMotion();
  // In reduced-motion mode the single static frame must be redrawn when the season changes;
  // when animating, the loop picks the new season up from seasonRef instead.
  const staticSeason = reducedMotion ? kind : null;

  // Keep the animation loop's view of the season current without restarting it.
  useEffect(() => {
    seasonRef.current = kind;
  }, [kind]);

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

    // Leaves/snow: 18 on desktop, 10 on mobile. In Monarch the canvas draws rising motes instead
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

    // ---- Monarch motes (ADR 040): tiny violet specks rising from the bottom over the vignette ----
    interface Mote {
      x: number;
      y: number;
      r: number;
      vy: number;
      sway: number;
      phase: number;
      light: boolean;
    }
    const moteCount = width < 768 ? 28 : 56;
    const spawnMote = (anywhere: boolean): Mote => ({
      x: Math.random() * width,
      y: anywhere ? Math.random() * height : height + 10 + Math.random() * 40,
      r: Math.random() * 1.4 + 0.7, // 0.7–2.1px: specks, never blobs
      vy: Math.random() * 0.55 + 0.25,
      sway: Math.random() * 0.6 + 0.2,
      phase: Math.random() * Math.PI * 2,
      light: Math.random() < 0.35,
    });
    const motes: Mote[] = Array.from({ length: moteCount }, () => spawnMote(true));

    const drawMotes = (t: number, move: boolean) => {
      ctx.save();
      for (const m of motes) {
        if (move) {
          m.y -= m.vy;
          m.x += Math.sin(t * 0.012 + m.phase) * m.sway * 0.35;
          if (mouseRef.current.active) {
            const dx = m.x - mouseRef.current.x;
            const dy = m.y - mouseRef.current.y;
            const dist = Math.hypot(dx, dy);
            if (dist > 0 && dist < 110) {
              const f = ((110 - dist) / 110) * 1.2;
              m.x += (dx / dist) * f;
              m.y += (dy / dist) * f;
            }
          }
          if (m.y < -10) Object.assign(m, spawnMote(false));
        }
        // fade in near the bottom, out near the top; a slow twinkle
        const rise = 1 - m.y / height;
        const fade = Math.min(1, Math.max(0, rise * 4)) * Math.min(1, Math.max(0, (1 - rise) * 2.2));
        const twinkle = 0.65 + 0.35 * Math.sin(t * 0.05 + m.phase * 3);
        ctx.globalAlpha = fade * twinkle * (m.light ? 0.9 : 0.7);
        ctx.fillStyle = m.light ? "#D9CBFF" : "#9B78F2";
        ctx.shadowColor = "rgba(124, 77, 237, 0.9)";
        ctx.shadowBlur = m.r * 6;
        ctx.beginPath();
        ctx.arc(m.x, m.y, m.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
    };

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

    const drawParticle = (context: CanvasRenderingContext2D, p: Particle) => {
      if (p.season === "autumn") drawLeaf(context, p);
      else drawSnow(context, p);
    };

    // A season switch replaces every particle with the other kind at once (spread over the screen)
    const matchSeason = () => {
      if (seasonRef.current === "shadow") return; // Monarch draws motes instead
      for (let i = 0; i < particles.length; i++) {
        if (particles[i].season !== seasonRef.current) particles[i] = createParticle(true);
      }
    };

    let tick = 0;

    // Reduced motion: one still frame of the current season, no loop.
    const drawFrame = () => {
      ctx.clearRect(0, 0, width, height);
      if (seasonRef.current === "shadow") {
        drawMotes(0, false); // reduced motion: one still scatter of motes
        return;
      }
      matchSeason();
      for (const p of particles) drawParticle(ctx, p);
    };

    const render = () => {
      tick++;

      ctx.clearRect(0, 0, width, height);
      if (seasonRef.current === "shadow") {
        drawMotes(tick, true);
        animationFrameId = requestAnimationFrame(render);
        return;
      }
      matchSeason();

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

        drawParticle(ctx, p);

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
