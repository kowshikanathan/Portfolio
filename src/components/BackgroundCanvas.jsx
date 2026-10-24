import React, { useEffect, useState, useRef } from 'react';
import * as THREE from 'three';

/**
 * BackgroundCanvas
 * Delivers an immersive, state-of-the-art 3D animated environment:
 * - Real-time Three.js 3D WebGL ambient particle constellation with 3D scroll travel
 * - Fluid floating ambient glowing mesh orbs (orange, apricot, subtle cyan twilight)
 * - Subtle blueprint dot-matrix & crosshair design grid with radial vignette
 * - Mild floating design tokens with parallax drift
 */
export default function BackgroundCanvas() {
  const canvasRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  // 1. Scroll listener for CSS parallax layers
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 2. Three.js Ambient 3D Particle Universe
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    // Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.z = 25;

    // WebGL Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: false, // keep light on GPU
      powerPreference: 'low-power',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setClearColor(0x000000, 0);

    // Particle Cloud
    const particleCount = 400;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const orangeColor = new THREE.Color(0xff7a00);
    const cyanColor = new THREE.Color(0x38bdf8);
    const whiteColor = new THREE.Color(0xffffff);

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 60;
      positions[i3 + 1] = (Math.random() - 0.5) * 80;
      positions[i3 + 2] = (Math.random() - 0.5) * 40;

      const rand = Math.random();
      const chosenColor = rand > 0.6 ? orangeColor : rand > 0.3 ? cyanColor : whiteColor;
      colors[i3] = chosenColor.r;
      colors[i3 + 1] = chosenColor.g;
      colors[i3 + 2] = chosenColor.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.15,
      vertexColors: true,
      transparent: true,
      opacity: 0.55,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Mouse & Scroll coordinates for 3D camera parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;
    let targetScrollY = 0;
    let currentScrollY = 0;

    const handleMouseMove = (e) => {
      targetMouseX = (e.clientX / window.innerWidth) * 2 - 1;
      targetMouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    const handleScrollPos = () => {
      targetScrollY = window.scrollY;
    };

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScrollPos, { passive: true });
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animId = null;
    let clock = new THREE.Clock();

    const animate = () => {
      const delta = clock.getDelta();
      const elapsedTime = clock.getElapsedTime();

      // Lerp mouse
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      // Lerp scroll
      currentScrollY += (targetScrollY - currentScrollY) * 0.08;

      // Parallax camera adjustments
      camera.position.x = mouseX * 2.5;
      camera.position.y = mouseY * 2.0 - (currentScrollY * 0.012);

      // Rotate particle cloud gently
      particles.rotation.y = elapsedTime * 0.02;
      particles.rotation.x = Math.sin(elapsedTime * 0.015) * 0.08;

      renderer.render(scene, camera);
      animId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animId) cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScrollPos);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
    };
  }, []);

  // Parallax factors for CSS layers
  const p1 = scrollY * 0.12;
  const p2 = scrollY * -0.08;
  const p3 = scrollY * 0.15;
  const p4 = scrollY * -0.05;

  return (
    <div className="bg-canvas-container" aria-hidden="true">
      {/* 1. Real-time Three.js 3D Ambient WebGL Canvas */}
      <canvas ref={canvasRef} className="bg-three-webgl-canvas" />

      {/* 2. Subtle Design & Tech Grid Pattern */}
      <div className="bg-grid-layer" />

      {/* 3. Fluid Ambient Glowing Gradient Orbs */}
      <div
        className="bg-orb bg-orb-hero"
        style={{ transform: `translate3d(0, ${p1}px, 0)` }}
      />
      <div
        className="bg-orb bg-orb-apricot"
        style={{ transform: `translate3d(0, ${p2}px, 0)` }}
      />
      <div
        className="bg-orb bg-orb-cyan"
        style={{ transform: `translate3d(0, ${p3}px, 0)` }}
      />
      <div
        className="bg-orb bg-orb-bottom"
        style={{ transform: `translate3d(0, ${p4}px, 0)` }}
      />

      {/* 4. Mild Floating Design & Code Symbols */}
      <div className="bg-floating-elements" style={{ transform: `translate3d(0, ${p2 * 0.7}px, 0)` }}>
        <span className="bg-particle p-cross p-1">+</span>
        <span className="bg-particle p-circle p-2" />
        <span className="bg-particle p-bracket p-3">&#123;&nbsp;&#125;</span>
        <span className="bg-particle p-cross p-4">+</span>
        <span className="bg-particle p-pill p-5" />
        <span className="bg-particle p-bracket p-6">&lt;/&gt;</span>
        <span className="bg-particle p-circle p-7" />
        <span className="bg-particle p-cross p-8">+</span>
      </div>

      {/* 5. Soft Vignette Overlay */}
      <div className="bg-vignette-overlay" />
    </div>
  );
}
