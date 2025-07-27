"use client";
import { useEffect, useRef } from "react";

export default function GalaxyBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const starsRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const starsCanvas = starsRef.current;
    if (!canvas || !starsCanvas) return;

    const ctx = canvas.getContext("2d");
    const starCtx = starsCanvas.getContext("2d");
    if (!ctx || !starCtx) return;

    const pastelColors = ["#00d9ff", "#5befff", "#ccf2ff", "#a0faff"];
    const starColors = ["#ffffff", "#aad8ff", "#cceeff"];

    type Particle = {
      x: number;
      y: number;
      radius: number;
      alpha: number;
      fade: number;
      color: string;
    };

    type Star = {
      x: number;
      y: number;
      radius: number;
      opacity: number;
      fadingIn: boolean;
      speed: number;
      color: string;
    };

    let particles: Particle[] = [];
    let stars: Star[] = [];

    const numStars = 70; // Reduced from 150

    const resizeCanvas = () => {
      canvas.width = starsCanvas.width = window.innerWidth;
      canvas.height = starsCanvas.height = window.innerHeight;

      stars = Array.from({ length: numStars }).map(() => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        radius: Math.random() * 0.6 + 0.1, // finer stars
        opacity: Math.random(),
        fadingIn: Math.random() > 0.5,
        speed: Math.random() * 0.005 + 0.002,
        color: starColors[Math.floor(Math.random() * starColors.length)],
      }));
    };

    const drawStars = () => {
      starCtx.clearRect(0, 0, starsCanvas.width, starsCanvas.height);
      stars.forEach((s) => {
        if (s.fadingIn) {
          s.opacity += s.speed;
          if (s.opacity >= 1.5) s.fadingIn = false;
        } else {
          s.opacity -= s.speed;
          if (s.opacity <= 0.4) s.fadingIn = true;
        }

        starCtx.beginPath();
        starCtx.globalAlpha = s.opacity;
        starCtx.fillStyle = s.color;
        starCtx.shadowColor = s.color;
        starCtx.shadowBlur = 4; // subtle glow
        starCtx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        starCtx.fill();
      });
      starCtx.globalAlpha = 1;
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const p of particles) {
        ctx.beginPath();
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 6;
        ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI);
        ctx.fill();
        p.alpha -= p.fade;
      }

      ctx.shadowBlur = 0;
      particles = particles.filter((p) => p.alpha > 0);
    };

    const render = () => {
      drawStars();
      drawParticles();
      requestAnimationFrame(render);
    };

    const handleMouseMove = (e: MouseEvent) => {
      for (let i = 0; i < 3; i++) {
        particles.push({
          x: e.clientX + Math.random() * 20 - 10,
          y: e.clientY + Math.random() * 20 - 10,
          radius: Math.random() * 1.2 + 0.4,
          alpha: 1,
          fade: 0.0075,
          color: pastelColors[Math.floor(Math.random() * pastelColors.length)],
        });
      }
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", handleMouseMove);
    render();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-screen h-screen -z-10 overflow-hidden">
      {/* 🔵 Darker background with glowier blue */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `
            radial-gradient(circle at 30% 40%, rgba(0, 195, 255, 0.2), transparent 60%),
            radial-gradient(circle at 70% 60%, rgba(0, 145, 255, 0.15), transparent 80%),
            linear-gradient(180deg, #050514 0%, #0b0d23 50%, #01010c 100%)
          `,
          backgroundBlendMode: "screen, screen, normal",
        }}
      />

      {/* ✨ Stars */}
      <canvas
        ref={starsRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* 🌠 Particle Trail */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />
    </div>
  );
}
