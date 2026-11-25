import React, { useEffect, useRef } from 'react';
import './BackgroundCanvas.css';

/**
 * Global interactive background canvas:
 * - Pure black #000000 base with subtle blueprint grid & orange accent dots
 * - Mouse-following radial orange spotlight with smooth lerp & viewport-exit fade
 * - Reactive grid dots near cursor + low-density gently repelling ambient particles
 * - Zero React re-renders during mouse movement (rAF + Canvas 2D)
 * - Responsive particle density (desktop -> tablet -> static grid on mobile/touch)
 * - Pauses automatically when tab is hidden; respects prefers-reduced-motion
 */
export default function BackgroundCanvas() {
  const canvasRef = useRef(null);
  const spotlightRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const spotlightEl = spotlightRef.current;
    if (!canvas) return;

    const prefersReduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    const isCoarsePointer = window.matchMedia?.('(pointer: coarse)').matches;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let dpr = Math.min(window.devicePixelRatio || 1, 1.5);

    const gridSpacing = 38;
    const lineSpacing = 76;

    // Responsive particle density
    const getParticleCount = (w) => {
      if (prefersReduced || w < 768) return 0;
      if (w < 1024) return 18;
      return 38;
    };

    const particles = [];
    const buildParticles = () => {
      particles.length = 0;
      const count = getParticleCount(width);
      for (let i = 0; i < count; i++) {
        const homeX = Math.random() * width;
        const homeY = Math.random() * height;
        const isOrange = Math.random() > 0.35;
        particles.push({
          x: homeX,
          y: homeY,
          homeX,
          homeY,
          vx: (Math.random() - 0.5) * 0.22,
          vy: (Math.random() - 0.5) * 0.22,
          radius: isOrange ? 1.15 + Math.random() * 1.15 : 0.9 + Math.random() * 0.8,
          alpha: isOrange ? 0.22 + Math.random() * 0.24 : 0.12 + Math.random() * 0.14,
          isOrange,
          phase: Math.random() * Math.PI * 2,
        });
      }
    };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildParticles();
    };

    resize();

    // Cursor state (interpolated without React state updates)
    const mouse = {
      targetX: width * 0.5,
      targetY: height * 0.35,
      x: width * 0.5,
      y: height * 0.35,
      targetOpacity: 0,
      opacity: 0,
      active: false,
    };

    const onMouseMove = (e) => {
      if (isCoarsePointer || prefersReduced) return;
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.targetOpacity = 1;
      mouse.active = true;
    };

    const onMouseLeave = () => {
      mouse.targetOpacity = 0;
      mouse.active = false;
    };

    let animId = null;
    let isVisible = !document.hidden;
    let time = 0;

    const drawStaticGrid = () => {
      ctx.clearRect(0, 0, width, height);

      // Subtle major grid lines (76px)
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.028)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (let x = 0; x <= width; x += lineSpacing) {
        ctx.moveTo(x + 0.5, 0);
        ctx.lineTo(x + 0.5, height);
      }
      for (let y = 0; y <= height; y += lineSpacing) {
        ctx.moveTo(0, y + 0.5);
        ctx.lineTo(width, y + 0.5);
      }
      ctx.stroke();

      // Subtle orange accent dots (38px matrix)
      for (let x = 0; x <= width; x += gridSpacing) {
        for (let y = 0; y <= height; y += gridSpacing) {
          const isMajor = x % lineSpacing === 0 && y % lineSpacing === 0;
          ctx.fillStyle = isMajor
            ? 'rgba(255, 121, 0, 0.24)'
            : 'rgba(255, 180, 91, 0.10)';
          ctx.beginPath();
          ctx.arc(x, y, isMajor ? 1.2 : 0.85, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    };

    if (prefersReduced || isCoarsePointer || width < 768) {
      drawStaticGrid();
    }

    const renderFrame = () => {
      if (!isVisible) {
        animId = null;
        return;
      }

      if (prefersReduced || isCoarsePointer || width < 768) {
        drawStaticGrid();
        animId = null;
        return;
      }

      time += 0.016;

      // Smooth cursor interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.09;
      mouse.y += (mouse.targetY - mouse.y) * 0.09;
      mouse.opacity += (mouse.targetOpacity - mouse.opacity) * 0.07;

      if (spotlightEl) {
        spotlightEl.style.transform = `translate3d(${mouse.x}px, ${mouse.y}px, 0)`;
        spotlightEl.style.opacity = `${mouse.opacity.toFixed(3)}`;
      }

      ctx.clearRect(0, 0, width, height);

      // 1. Subtle 76px architectural grid lines
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.026)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (let x = 0; x <= width; x += lineSpacing) {
        ctx.moveTo(x + 0.5, 0);
        ctx.lineTo(x + 0.5, height);
      }
      for (let y = 0; y <= height; y += lineSpacing) {
        ctx.moveTo(0, y + 0.5);
        ctx.lineTo(width, y + 0.5);
      }
      ctx.stroke();

      // 2. Reactive orange grid dots (brighten smoothly near cursor)
      const gridGlowRadius = 210;
      const gridGlowRadiusSq = gridGlowRadius * gridGlowRadius;

      for (let x = 0; x <= width; x += gridSpacing) {
        for (let y = 0; y <= height; y += gridSpacing) {
          const isMajor = x % lineSpacing === 0 && y % lineSpacing === 0;
          let alpha = isMajor ? 0.22 : 0.085;
          let radius = isMajor ? 1.15 : 0.85;

          if (mouse.opacity > 0.02) {
            const dx = x - mouse.x;
            const dy = y - mouse.y;
            const distSq = dx * dx + dy * dy;
            if (distSq < gridGlowRadiusSq) {
              const proximity = 1 - Math.sqrt(distSq) / gridGlowRadius;
              const boost = proximity * proximity * mouse.opacity;
              alpha += boost * (isMajor ? 0.52 : 0.34);
              radius += boost * 0.75;
            }
          }

          ctx.fillStyle = isMajor
            ? `rgba(255, 121, 0, ${alpha.toFixed(3)})`
            : `rgba(255, 180, 91, ${alpha.toFixed(3)})`;
          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // 3. Low-density floating particles with gentle cursor repulsion & spring return
      const repelRadius = 135;
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.homeX += p.vx;
        p.homeY += p.vy;

        if (p.homeX < -20) p.homeX = width + 20;
        if (p.homeX > width + 20) p.homeX = -20;
        if (p.homeY < -20) p.homeY = height + 20;
        if (p.homeY > height + 20) p.homeY = -20;

        let targetX = p.homeX + Math.sin(time + p.phase) * 6;
        let targetY = p.homeY + Math.cos(time * 0.8 + p.phase) * 6;

        if (mouse.opacity > 0.05) {
          const dx = targetX - mouse.x;
          const dy = targetY - mouse.y;
          const dist = Math.hypot(dx, dy);
          if (dist > 0 && dist < repelRadius) {
            const push = ((repelRadius - dist) / repelRadius) * 24 * mouse.opacity;
            targetX += (dx / dist) * push;
            targetY += (dy / dist) * push;
          }
        }

        p.x += (targetX - p.x) * 0.08;
        p.y += (targetY - p.y) * 0.08;

        ctx.fillStyle = p.isOrange
          ? `rgba(255, 121, 0, ${p.alpha})`
          : `rgba(255, 255, 255, ${p.alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      animId = window.requestAnimationFrame(renderFrame);
    };

    const startLoop = () => {
      if (!animId && isVisible) {
        animId = window.requestAnimationFrame(renderFrame);
      }
    };

    const onVisibilityChange = () => {
      isVisible = !document.hidden;
      if (isVisible) {
        startLoop();
      } else if (animId) {
        window.cancelAnimationFrame(animId);
        animId = null;
      }
    };

    const onResize = () => {
      resize();
      if (prefersReduced || isCoarsePointer || width < 768) {
        drawStaticGrid();
      } else {
        startLoop();
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('visibilitychange', onVisibilityChange);
    window.addEventListener('resize', onResize, { passive: true });

    startLoop();

    return () => {
      if (animId) window.cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('visibilitychange', onVisibilityChange);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <div className="bg-canvas-container" aria-hidden="true">
      {/* Subtle Ambient Orange Orbs for Cross-Section Depth */}
      <div className="bg-ambient-orb bg-orb-top" />
      <div className="bg-ambient-orb bg-orb-bottom" />

      {/* Interactive Grid + Orange Dots + Particles */}
      <canvas ref={canvasRef} className="bg-interactive-canvas" />

      {/* Smooth Feathered Mouse-Following Orange Spotlight */}
      <div ref={spotlightRef} className="bg-mouse-spotlight" />

      {/* Soft Edge Vignette */}
      <div className="bg-vignette-overlay" />
    </div>
  );
}
