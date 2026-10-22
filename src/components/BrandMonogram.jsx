import React from 'react';

export default function BrandMonogram({ size = 38, className = '' }) {
  return (
    <div
      className={`brand-monogram-wrapper ${className}`}
      style={{ width: size, height: size, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ overflow: 'visible' }}
      >
        <rect width="44" height="44" rx="12" fill="#192750" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1" />
        
        {/* Subtle inner grid highlight */}
        <circle cx="22" cy="22" r="16" stroke="rgba(186, 230, 253, 0.25)" strokeWidth="1" strokeDasharray="2 2" />

        {/* 'K' glyph - Architectural & Crisp */}
        <path
          d="M13 11V33"
          stroke="#FFFFFF"
          strokeWidth="2.8"
          strokeLinecap="round"
        />
        <path
          d="M13.5 22L24.5 11"
          stroke="#BAE6FD"
          strokeWidth="2.8"
          strokeLinecap="round"
        />
        <path
          d="M16 19.5L25 33"
          stroke="#BAE6FD"
          strokeWidth="2.8"
          strokeLinecap="round"
        />

        {/* 'S' glyph - Flowing UX curve */}
        <path
          d="M33 13.5C31.2 11.5 28.5 11.8 27.2 13.2C25.4 15.2 26.2 18.2 29.2 19.8C32.4 21.4 33.6 23.8 32.8 27C32 30.5 28.6 32.5 25.4 31.2"
          stroke="#FFFFFF"
          strokeWidth="2.6"
          strokeLinecap="round"
        />
        
        {/* Focal point */}
        <circle cx="28.5" cy="19.5" r="1.5" fill="#BAE6FD" />
      </svg>
    </div>
  );
}
