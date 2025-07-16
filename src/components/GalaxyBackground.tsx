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

    const pastelColors = ["#fbc4ff", "#c0f0ff", "#fbe4c8", "#e0d1ff", "#ffd6e0"];
    let particles: any[] = [];
    let stars: any[] = [];
    const numStars = 150;

    const resizeCanvas = () => {
      canvas.width = starsCanvas.width = window.innerWidth;
      canvas.height = starsCanvas.height = window.innerHeight;

      stars = Array.from({ length: numStars }).map(() => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        radius: Math.random() * 1.5 + 0.5,
        opacity: Math.random(),
        fadingIn: Math.random() > 0.5,
        speed: Math.random() * 0.005 + 0.002
      }));
    };

    const drawStars = () => {
      starCtx.clearRect(0, 0, starsCanvas.width, starsCanvas.height);
      stars.forEach((s) => {
        if (s.fadingIn) {
          s.opacity += s.speed;
          if (s.opacity >= 1) s.fadingIn = false;
        } else {
          s.opacity -= s.speed;
          if (s.opacity <= 0.3) s.fadingIn = true;
        }

        starCtx.beginPath();
        starCtx.globalAlpha = s.opacity;
        starCtx.fillStyle = "#ffffff";
        starCtx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        starCtx.fill();
      });
      starCtx.globalAlpha = 1;
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let p of particles) {
        ctx.beginPath();
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI);
        ctx.fill();
        p.alpha -= p.fade;
      }

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
          radius: Math.random() * 2 + 1,
          alpha: 1,
          fade: 0.01,
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
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
      {/* 🌌 Dreamy gradient background */}
      <div
  className="absolute inset-0 z-0"
  style={{
    background: `
      radial-gradient(circle at top left, #3b0a64, transparent 70%),
      radial-gradient(circle at bottom right, #f875aa, transparent 75%),
      linear-gradient(135deg, #0f172a 0%, #3f2d86 40%, #f78da7 60%, #fb6a2f 90%)
    `,
    backgroundSize: "100% 100%",
    backgroundBlendMode: "screen",
  }}
/>



      {/* ✨ Twinkling Stars */}
      <canvas
        ref={starsRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* 🎨 Particle Trail */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />
    </div>
  );
}
