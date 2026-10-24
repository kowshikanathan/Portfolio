import React, { useState } from 'react';
import ThreeCanvas3D from './ThreeCanvas3D';
import TiltCard3D from './TiltCard3D';
import { Sparkles, Box, UserCheck } from 'lucide-react';

export default function Hero() {
  const [heroView, setHeroView] = useState('3d'); // '3d' | 'illustration'

  return (
    <div className="wrap hero hero-3d-layout">
      <div className="hero-content-col">
        {/* Availability Status Badge with 3D Pulse */}
        <div className="hero-status-pill">
          <span className="hero-status-dot" />
          <span className="hero-status-text">Available for UX/UI &amp; Frontend Roles</span>
          <span className="hero-status-tag">2026</span>
        </div>

        <div className="soc">
          <a
            href="https://www.linkedin.com/in/kowshika-s-5b744a214/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
            className="soc-3d-btn"
          >
            in
          </a>
          <a
            href="https://www.behance.net/sweetyak"
            aria-label="Behance"
            target="_blank"
            rel="noopener noreferrer"
            className="soc-3d-btn"
          >
            Bē
          </a>
        </div>

        <h1 className="hero-headline-3d">
          Hi, I’m <b>Kowshika</b>
        </h1>
        <div className="role">UX/UI Designer &amp; Frontend Developer</div>
        <p className="hero-description">
          Designing digital products where visual craft meets functional usability. Specializing in interactive interfaces, component systems, and modern web experiences.
        </p>
        <p className="q">“Good design is invisible — great design feels effortless.”</p>

        <div className="cta">
          <a className="btn b1 btn-3d-glow" href="#projects">
            Explore my work
          </a>
          <a
            className="btn b2 btn-3d-glass"
            href="/Kowshika_S_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            My resume
          </a>
        </div>
      </div>

      <div className="hero-visual-col">
        {/* Switcher Tab between Interactive 3D WebGL and 3D Portrait */}
        <div className="hero-view-switcher" role="tablist" aria-label="Hero visual display mode">
          <button
            type="button"
            role="tab"
            aria-selected={heroView === '3d'}
            className={`view-switch-btn ${heroView === '3d' ? 'active' : ''}`}
            onClick={() => setHeroView('3d')}
          >
            <Box size={14} />
            ✦ Interactive 3D
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={heroView === 'illustration'}
            className={`view-switch-btn ${heroView === 'illustration' ? 'active' : ''}`}
            onClick={() => setHeroView('illustration')}
          >
            <UserCheck size={14} />
            ✦ 3D Portrait
          </button>
        </div>

        {/* View 1: Real-time Interactive WebGL 3D Canvas */}
        {heroView === '3d' ? (
          <div className="hero-3d-stage animate-fade-in">
            <ThreeCanvas3D />
          </div>
        ) : (
          /* View 2: 3D Perspective Tilt Card with Multi-layer Depth */
          <div className="hero-illustration-stage animate-fade-in">
            <TiltCard3D
              className="hero-tilt-card"
              maxTilt={16}
              scale={1.03}
              glare={true}
            >
              <div className="pic hero-pic-3d">
                <img
                  src="/images/hero-illustration.webp"
                  alt="Illustration of Kowshika with a laptop and design tool icons"
                  width="383"
                  height="463"
                  className="tilt-pop-md hero-avatar-img"
                />

                {/* Floating 3D Depth Chips */}
                <div className="hero-3d-chip chip-1 tilt-pop-lg">
                  <Sparkles size={13} className="chip-icon" />
                  <span>Interactive Systems</span>
                </div>
                <div className="hero-3d-chip chip-2 tilt-pop-lg">
                  <span className="chip-badge-code">&lt;/&gt;</span>
                  <span>React 19 &amp; Three.js</span>
                </div>
              </div>
            </TiltCard3D>
          </div>
        )}
      </div>
    </div>
  );
}
