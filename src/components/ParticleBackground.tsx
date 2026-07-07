"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
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
    const pointer = { x: -9999, y: -9999 };
    let particles: Particle[] = [];
    let frameId = 0;
    let width = 0;
    let height = 0;
    let isVisible = !document.hidden;
    const particleColors = [
      "rgba(244, 240, 232, 0.55)",
      "rgba(157, 150, 137, 0.45)",
      "rgba(70, 66, 58, 0.5)",
    ];

    const createParticles = () => {
      const isMobile = window.innerWidth < 768;
      const count = prefersReducedMotion.matches ? 0 : isMobile ? 92 : 220;

      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.42,
        vy: (Math.random() - 0.5) * 0.36,
        size: Math.random() * 1.9 + 0.45,
        alpha: Math.random() * 0.56 + 0.22,
      }));
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
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);
      for (const particle of particles) {
        const dx = particle.x - pointer.x;
        const dy = particle.y - pointer.y;
        const distance = Math.hypot(dx, dy);

        if (distance < 155) {
          const force = (155 - distance) / 155;
          particle.vx += (dx / Math.max(distance, 1)) * force * 0.045;
          particle.vy += (dy / Math.max(distance, 1)) * force * 0.045;
        }

        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.vx *= 0.985;
        particle.vy *= 0.985;

        if (particle.x < -8) particle.x = width + 8;
        if (particle.x > width + 8) particle.x = -8;
        if (particle.y < -8) particle.y = height + 8;
        if (particle.y > height + 8) particle.y = -8;

        context.fillStyle =
          particleColors[Math.floor((particle.x + particle.y) % particleColors.length)];
        context.globalAlpha = particle.alpha * 0.78;
        context.beginPath();
        context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        context.fill();
      }

      context.globalAlpha = 1;

      if (isVisible) {
        frameId = window.requestAnimationFrame(draw);
      }
    };

    const handlePointerMove = (event: PointerEvent) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
    };

    const handlePointerLeave = () => {
      pointer.x = -9999;
      pointer.y = -9999;
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
      className="pointer-events-none fixed inset-0 z-0 opacity-75"
    />
  );
}
