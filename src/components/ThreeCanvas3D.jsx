import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import './ThreeCanvas3D.css';

/**
 * ThreeCanvas3D
 * An interactive, state-of-the-art WebGL 3D canvas featuring:
 * - Holographic 3D Cyber Core (Icosahedron with inner gem & glowing vertices)
 * - Orbital Gyroscopic 3D Rings with orbiting satellite beacons
 * - Smooth physics-based mouse tracking and drag-to-spin interactivity
 * - Reactive lighting and particle dust in 3D perspective
 * - Optimized render loop with automatic pixel ratio clamping & requestAnimationFrame
 */
export default function ThreeCanvas3D() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [interactionHint, setInteractionHint] = useState(true);

  const sceneObjectsRef = useRef({
    scene: null,
    camera: null,
    renderer: null,
    coreGroup: null,
    icosahedronMesh: null,
    innerWireframe: null,
    particles: null,
    rings: [],
    mouse: { x: 0, y: 0, targetX: 0, targetY: 0 },
    drag: { isDown: false, startX: 0, startY: 0, rotX: 0, rotY: 0, targetRotX: 0, targetRotY: 0 },
    animFrameId: null,
  });

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const width = container.clientWidth || 440;
    const height = container.clientHeight || 460;

    // 1. Scene
    const scene = new THREE.Scene();
    sceneObjectsRef.current.scene = scene;

    // 2. Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 7.5);
    sceneObjectsRef.current.camera = camera;

    // 3. Renderer with antialiasing and transparent background
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    sceneObjectsRef.current.renderer = renderer;

    // 4. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
    scene.add(ambientLight);

    const pointLightOrange = new THREE.PointLight(0xff7a00, 3.5, 30);
    pointLightOrange.position.set(5, 5, 5);
    scene.add(pointLightOrange);

    const pointLightCyan = new THREE.PointLight(0x38bdf8, 3.0, 30);
    pointLightCyan.position.set(-5, -4, 3);
    scene.add(pointLightCyan);

    const pointLightGold = new THREE.PointLight(0xffb703, 2.0, 20);
    pointLightGold.position.set(0, 6, -3);
    scene.add(pointLightGold);

    // 5. Central 3D Group
    const coreGroup = new THREE.Group();
    scene.add(coreGroup);
    sceneObjectsRef.current.coreGroup = coreGroup;

    // --- Holographic Icosahedron Core ---
    const icoGeometry = new THREE.IcosahedronGeometry(1.6, 1);
    
    // Wireframe edges with warm gradient glow
    const icoWireMaterial = new THREE.MeshStandardMaterial({
      color: 0xff7a00,
      emissive: 0xff5500,
      emissiveIntensity: 0.35,
      wireframe: true,
      roughness: 0.2,
      metalness: 0.8,
    });
    const icosahedronMesh = new THREE.Mesh(icoGeometry, icoWireMaterial);
    coreGroup.add(icosahedronMesh);
    sceneObjectsRef.current.icosahedronMesh = icosahedronMesh;

    // Inner Solid Faceted Gem
    const innerGeo = new THREE.IcosahedronGeometry(1.2, 0);
    const innerMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x1d2433,
      emissive: 0x38bdf8,
      emissiveIntensity: 0.25,
      roughness: 0.1,
      metalness: 0.9,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      transparent: true,
      opacity: 0.85,
    });
    const innerWireframe = new THREE.Mesh(innerGeo, innerMaterial);
    coreGroup.add(innerWireframe);
    sceneObjectsRef.current.innerWireframe = innerWireframe;

    // Glowing vertex points
    const icoVertices = icoGeometry.attributes.position;
    const vertexPointsGeo = new THREE.BufferGeometry();
    vertexPointsGeo.setAttribute('position', icoVertices);
    const pointsMaterial = new THREE.PointsMaterial({
      color: 0xffd166,
      size: 0.12,
      transparent: true,
      opacity: 0.9,
    });
    const vertexPoints = new THREE.Points(vertexPointsGeo, pointsMaterial);
    icosahedronMesh.add(vertexPoints);

    // --- Gyroscopic Orbital Rings ---
    const rings = [];
    const ringConfigs = [
      { radius: 2.3, tube: 0.024, rot: [Math.PI / 4, 0, 0], speed: 0.008, color: 0xff7a00 },
      { radius: 2.7, tube: 0.02, rot: [-Math.PI / 3, Math.PI / 4, 0], speed: -0.011, color: 0x38bdf8 },
      { radius: 3.1, tube: 0.016, rot: [Math.PI / 6, -Math.PI / 3, Math.PI / 4], speed: 0.006, color: 0xffb703 },
    ];

    ringConfigs.forEach((cfg) => {
      const ringGeo = new THREE.TorusGeometry(cfg.radius, cfg.tube, 16, 100);
      const ringMat = new THREE.MeshStandardMaterial({
        color: cfg.color,
        emissive: cfg.color,
        emissiveIntensity: 0.4,
        roughness: 0.3,
        metalness: 0.7,
      });
      const ringMesh = new THREE.Mesh(ringGeo, ringMat);
      ringMesh.rotation.set(...cfg.rot);
      coreGroup.add(ringMesh);
      rings.push({ mesh: ringMesh, speed: cfg.speed });

      // Add orbiting satellite beacon
      const satelliteGeo = new THREE.SphereGeometry(0.08, 16, 16);
      const satelliteMat = new THREE.MeshBasicMaterial({ color: cfg.color });
      const satellite = new THREE.Mesh(satelliteGeo, satelliteMat);
      satellite.position.set(cfg.radius, 0, 0);
      ringMesh.add(satellite);
    });
    sceneObjectsRef.current.rings = rings;

    // --- Floating 3D Starfield / Dust Cloud ---
    const particleCount = 450;
    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    const color1 = new THREE.Color(0xff7a00);
    const color2 = new THREE.Color(0x38bdf8);
    const color3 = new THREE.Color(0xffffff);

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      const r = 2.5 + Math.random() * 4.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      particlePositions[i3] = r * Math.sin(phi) * Math.cos(theta);
      particlePositions[i3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      particlePositions[i3 + 2] = r * Math.cos(phi);

      const mixedColor = Math.random() > 0.5 ? (Math.random() > 0.5 ? color1 : color2) : color3;
      particleColors[i3] = mixedColor.r;
      particleColors[i3 + 1] = mixedColor.g;
      particleColors[i3 + 2] = mixedColor.b;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);
    sceneObjectsRef.current.particles = particles;

    // --- Interaction Listeners ---
    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      sceneObjectsRef.current.mouse.targetX = x * 0.8;
      sceneObjectsRef.current.mouse.targetY = y * 0.8;
    };

    const handleWindowMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      sceneObjectsRef.current.mouse.targetX = x * 0.45;
      sceneObjectsRef.current.mouse.targetY = y * 0.45;

      if (sceneObjectsRef.current.drag.isDown) {
        const deltaX = e.clientX - sceneObjectsRef.current.drag.startX;
        const deltaY = e.clientY - sceneObjectsRef.current.drag.startY;
        sceneObjectsRef.current.drag.targetRotY += deltaX * 0.008;
        sceneObjectsRef.current.drag.targetRotX += deltaY * 0.008;
        sceneObjectsRef.current.drag.startX = e.clientX;
        sceneObjectsRef.current.drag.startY = e.clientY;
      }
    };

    const handleMouseDown = (e) => {
      sceneObjectsRef.current.drag.isDown = true;
      sceneObjectsRef.current.drag.startX = e.clientX;
      sceneObjectsRef.current.drag.startY = e.clientY;
      setIsDragging(true);
      setInteractionHint(false);
    };

    const handleMouseUp = () => {
      sceneObjectsRef.current.drag.isDown = false;
      setIsDragging(false);
    };

    const handleTouchStart = (e) => {
      if (e.touches.length === 1) {
        sceneObjectsRef.current.drag.isDown = true;
        sceneObjectsRef.current.drag.startX = e.touches[0].clientX;
        sceneObjectsRef.current.drag.startY = e.touches[0].clientY;
        setIsDragging(true);
        setInteractionHint(false);
      }
    };

    const handleTouchMove = (e) => {
      if (sceneObjectsRef.current.drag.isDown && e.touches.length === 1) {
        const deltaX = e.touches[0].clientX - sceneObjectsRef.current.drag.startX;
        const deltaY = e.touches[0].clientY - sceneObjectsRef.current.drag.startY;
        sceneObjectsRef.current.drag.targetRotY += deltaX * 0.008;
        sceneObjectsRef.current.drag.targetRotX += deltaY * 0.008;
        sceneObjectsRef.current.drag.startX = e.touches[0].clientX;
        sceneObjectsRef.current.drag.startY = e.touches[0].clientY;
      }
    };

    const handleTouchEnd = () => {
      sceneObjectsRef.current.drag.isDown = false;
      setIsDragging(false);
    };

    const handleResize = () => {
      if (!container || !renderer || !camera) return;
      const w = container.clientWidth || 440;
      const h = container.clientHeight || 460;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    container.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousemove', handleWindowMouseMove);
    canvas.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    canvas.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd);
    window.addEventListener('resize', handleResize);

    // --- Animation Loop ---
    let clock = new THREE.Clock();

    const animate = () => {
      const delta = clock.getDelta();
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerp
      const { mouse, drag } = sceneObjectsRef.current;
      mouse.x += (mouse.targetX - mouse.x) * 0.06;
      mouse.y += (mouse.targetY - mouse.y) * 0.06;

      // Smooth drag rotation lerp
      drag.rotX += (drag.targetRotX - drag.rotX) * 0.08;
      drag.rotY += (drag.targetRotY - drag.rotY) * 0.08;

      // Rotate central group
      if (coreGroup) {
        coreGroup.rotation.y = elapsedTime * 0.35 + drag.rotY + mouse.x * 0.5;
        coreGroup.rotation.x = Math.sin(elapsedTime * 0.25) * 0.15 + drag.rotX - mouse.y * 0.5;
      }

      // Rotate individual elements
      if (icosahedronMesh) {
        icosahedronMesh.rotation.x += delta * 0.2;
        icosahedronMesh.rotation.y += delta * 0.3;
      }

      if (innerWireframe) {
        innerWireframe.rotation.x -= delta * 0.35;
        innerWireframe.rotation.y -= delta * 0.25;
        const scale = 1.0 + Math.sin(elapsedTime * 2.2) * 0.06;
        innerWireframe.scale.set(scale, scale, scale);
      }

      // Gyroscopic orbital rings
      rings.forEach((r, idx) => {
        r.mesh.rotation.z += r.speed;
        r.mesh.rotation.y += Math.sin(elapsedTime * 0.5 + idx) * 0.003;
      });

      // Drifting particles
      if (particles) {
        particles.rotation.y = -elapsedTime * 0.04;
        particles.rotation.x = Math.cos(elapsedTime * 0.03) * 0.05;
      }

      renderer.render(scene, camera);
      sceneObjectsRef.current.animFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (sceneObjectsRef.current.animFrameId) {
        cancelAnimationFrame(sceneObjectsRef.current.animFrameId);
      }
      container.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousemove', handleWindowMouseMove);
      canvas.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      canvas.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('resize', handleResize);

      renderer.dispose();
      icoGeometry.dispose();
      icoWireMaterial.dispose();
      innerGeo.dispose();
      innerMaterial.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
    };
  }, []);

  return (
    <div className="three-scene-wrapper" ref={containerRef}>
      {/* 3D Canvas */}
      <canvas
        ref={canvasRef}
        className={`three-canvas-element ${isDragging ? 'grabbing' : 'grab'}`}
        aria-label="Interactive 3D WebGL core animation"
      />

      {/* Interactive 3D Holographic Floating Badges */}
      <div className="three-floating-badge badge-ux" aria-hidden="true">
        <span className="badge-dot dot-orange" />
        <span className="badge-text">UX/UI Architecture</span>
      </div>

      <div className="three-floating-badge badge-code" aria-hidden="true">
        <span className="badge-dot dot-cyan" />
        <span className="badge-text">Interactive 3D WebGL</span>
      </div>

      <div className="three-floating-badge badge-react" aria-hidden="true">
        <span className="badge-dot dot-gold" />
        <span className="badge-text">Frontend &amp; React 19</span>
      </div>

      {/* Bottom Hint */}
      {interactionHint && (
        <div className="three-bottom-hint-wrap">
          <div className="three-interaction-hint">
            <span className="drag-icon">⇄</span> Click &amp; drag to rotate 3D model
          </div>
        </div>
      )}
    </div>
  );
}
