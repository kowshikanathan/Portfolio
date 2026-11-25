import React, { useRef } from 'react';
import './TiltCard3D.css';

/**
 * TiltCard3D — Subtle, zero-rerender 3D perspective tilt for project mockups.
 * Automatically disabled on touch devices and prefers-reduced-motion.
 */
export default function TiltCard3D({
  children,
  className = '',
  maxTilt = 6,
  perspective = 1100,
  scale = 1.015,
  glare = true,
  onClick,
  ...rest
}) {
  const cardRef = useRef(null);
  const glareRef = useRef(null);

  const isEnabled = () =>
    typeof window !== 'undefined' &&
    window.innerWidth >= 768 &&
    window.matchMedia?.('(pointer: fine) and (prefers-reduced-motion: no-preference)').matches;

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card || !isEnabled()) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = ((y - rect.height / 2) / (rect.height / 2)) * -maxTilt;
    const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * maxTilt;

    card.style.transform = `perspective(${perspective}px) rotateX(${rotateX.toFixed(
      2
    )}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(${scale}, ${scale}, ${scale})`;
    card.style.transition = 'transform 0.14s cubic-bezier(0.2, 0, 0.2, 1)';

    if (glare && glareRef.current) {
      const glareX = (x / rect.width) * 100;
      const glareY = (y / rect.height) * 100;
      glareRef.current.style.opacity = '0.22';
      glareRef.current.style.background = `radial-gradient(circle at ${glareX.toFixed(
        1
      )}% ${glareY.toFixed(
        1
      )}%, rgba(255, 180, 91, 0.28) 0%, rgba(255, 121, 0, 0.1) 35%, transparent 68%)`;
    }
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    card.style.transition = 'transform 0.55s cubic-bezier(0.22, 1, 0.36, 1)';

    if (glareRef.current) {
      glareRef.current.style.opacity = '0';
    }
  };

  return (
    <div
      ref={cardRef}
      className={`tilt-card-3d-root ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      {...rest}
    >
      <div className="tilt-card-content">{children}</div>
      {glare && <div ref={glareRef} className="tilt-card-glare" aria-hidden="true" />}
    </div>
  );
}
