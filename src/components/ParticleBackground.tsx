"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  homeX: number;
  homeY: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  color: string;
  phase: number;
};

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }

    const context = canvas.getContext("2d");

    if (!context) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    const pointer = { x: -9999, y: -9999, active: false };
    let particles: Particle[] = [];
    let frameId = 0;
    let width = 0;
    let height = 0;
    let isVisible = !document.hidden;
    const particleColors = [
      "rgb(244, 240, 232)",
      "rgb(184, 178, 166)",
      "rgb(116, 111, 102)",
    ];

    const createParticles = () => {
      const isMobile = window.innerWidth < 768;
      const spacing = isMobile ? 25 : 19;
      const columns = Math.ceil(width / spacing) + 1;
      const rows = Math.ceil(height / spacing) + 1;
      const offsetX = (width - (columns - 1) * spacing) / 2;
      const offsetY = (height - (rows - 1) * spacing) / 2;

      particles = [];

      for (let row = 0; row < rows; row += 1) {
        for (let column = 0; column < columns; column += 1) {
          const homeX = offsetX + column * spacing;
          const homeY = offsetY + row * spacing;
          const variation = Math.random();

          particles.push({
            x: homeX,
            y: homeY,
            homeX,
            homeY,
            vx: 0,
            vy: 0,
            size: 0.72 + variation * 0.78,
            alpha: 0.32 + variation * 0.36,
            color:
              particleColors[
                Math.floor(Math.random() * particleColors.length)
              ],
            phase: Math.random() * Math.PI * 2,
          });
        }
      }
    };

    const resize = () => {
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * pixelRatio);
      canvas.height = Math.floor(height * pixelRatio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      createParticles();

      if (prefersReducedMotion.matches) {
        draw(performance.now(), false);
      }
    };

    const draw = (time: number, animate = true) => {
      context.clearRect(0, 0, width, height);

      for (const particle of particles) {
        const dx = particle.x - pointer.x;
        const dy = particle.y - pointer.y;
        const distance = Math.hypot(dx, dy);
        const influence =
          animate && pointer.active && distance < 175
            ? Math.pow((175 - distance) / 175, 1.5)
            : 0;

        if (influence > 0) {
          particle.vx +=
            (dx / Math.max(distance, 1)) * influence * 1.35;
          particle.vy +=
            (dy / Math.max(distance, 1)) * influence * 1.35;
        }

        if (animate) {
          particle.vx += (particle.homeX - particle.x) * 0.032;
          particle.vy += (particle.homeY - particle.y) * 0.032;
          particle.vx *= 0.84;
          particle.vy *= 0.84;
          particle.x += particle.vx;
          particle.y += particle.vy;
        }

        const shimmer = prefersReducedMotion.matches
          ? 1
          : 0.9 + Math.sin(time * 0.0007 + particle.phase) * 0.1;

        context.fillStyle = particle.color;
        context.globalAlpha = Math.min(
          0.92,
          particle.alpha * shimmer + influence * 0.28,
        );
        context.beginPath();
        context.arc(
          particle.x,
          particle.y,
          particle.size * (1 + influence * 0.9),
          0,
          Math.PI * 2,
        );
        context.fill();
      }

      context.globalAlpha = 1;

      if (animate && isVisible) {
        frameId = window.requestAnimationFrame(draw);
      }
    };

    const handlePointerMove = (event: PointerEvent) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
      pointer.active = true;
    };

    const handlePointerLeave = () => {
      pointer.x = -9999;
      pointer.y = -9999;
      pointer.active = false;
    };

    const handleVisibilityChange = () => {
      isVisible = !document.hidden;

      if (isVisible && !prefersReducedMotion.matches) {
        frameId = window.requestAnimationFrame(draw);
      } else {
        window.cancelAnimationFrame(frameId);
      }
    };

    resize();

    if (!prefersReducedMotion.matches) {
      frameId = window.requestAnimationFrame(draw);
    }

    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerleave", handlePointerLeave);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0"
    />
  );
}
