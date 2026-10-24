import React, { useRef, useState } from 'react';
import './TiltCard3D.css';

/**
 * TiltCard3D
 * Provides high-performance 3D perspective tilt physics with:
 * - Dynamic 3D rotation based on mouse coordinates
 * - Multi-layer 3D depth (elements with data-depth or translateZ pop forward)
 * - Dynamic specular reflection / holographic glare gradient tracking cursor
 * - Silky smooth spring return on mouse leave
 */
export default function TiltCard3D({
  children,
  className = '',
  maxTilt = 12,
  perspective = 1000,
  scale = 1.025,
  glare = true,
  onClick,
  ...rest
}) {
  const cardRef = useRef(null);
  const [style, setStyle] = useState({});
  const [glareStyle, setGlareStyle] = useState({ opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within card
    const y = e.clientY - rect.top;  // y position within card

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;

    setStyle({
      transform: `perspective(${perspective}px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(${scale}, ${scale}, ${scale})`,
      transition: 'transform 0.1s cubic-bezier(0.2, 0, 0.2, 1)',
    });

    if (glare) {
      const glareX = (x / rect.width) * 100;
      const glareY = (y / rect.height) * 100;
      setGlareStyle({
        opacity: 0.28,
        background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255, 255, 255, 0.65) 0%, rgba(255, 122, 0, 0.15) 30%, transparent 65%)`,
        transition: 'opacity 0.15s ease',
      });
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setStyle({
      transform: `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
      transition: 'transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)',
    });
    setGlareStyle({
      opacity: 0,
      transition: 'opacity 0.4s ease',
    });
  };

  return (
    <div
      ref={cardRef}
      className={`tilt-card-3d-root ${className} ${isHovered ? 'is-tilting' : ''}`}
      style={style}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      {...rest}
    >
      <div className="tilt-card-content">
        {children}
      </div>

      {glare && (
        <div
          className="tilt-card-glare"
          style={glareStyle}
          aria-hidden="true"
        />
      )}
    </div>
  );
}
