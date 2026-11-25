import React, { useCallback, useState } from 'react';
import { ArrowDown, ArrowUpRight, FileText } from 'lucide-react';
import ScrollVideo from './ScrollVideo';
import './Hero.css';

export default function Hero() {
  const [revealed, setRevealed] = useState(false);

  const handleTurnReveal = useCallback(() => {
    setRevealed(true);
  }, []);

  return (
    <section id="top" className={`hero-section ${revealed ? 'is-revealed' : ''}`}>
      {/* Centered Character Studio Stage */}
      <div className="hero-stage-wrap">
        <ScrollVideo
          src="/videos/intro.mp4"
          poster="/videos/posters/intro.jpg"
          fallbackPoster="/videos/posters/intro-end.jpg"
          mode="hero"
          fit="contain"
          objectPosition="50% 28%"
          seamless={true}
          revealThresholdTime={1.25}
          onRevealTrigger={handleTurnReveal}
          showPlayFallback={true}
          ariaLabel="3D animated character of Kowshika turning toward the viewer in a dark studio with warm orange lighting"
          className="hero-video-stage"
        />
        <div className="hero-floor-scrim" aria-hidden="true" />
      </div>

      {/* Editorial Content Overlay — Reveals as character turns forward */}
      <div className="container hero-content-layer">
        <div className="hero-text-stack">
          <div className="hero-role-kicker">
            <span className="hero-kicker-line" aria-hidden="true" />
            <span>UX/UI Designer</span>
          </div>

          <h1 className="hero-name">KOWSHIKA S</h1>

          <p className="hero-tagline">
            Designing intuitive experiences. Building meaningful digital products.
          </p>

          <div className="hero-cta-row">
            <a href="#projects" className="btn-primary">
              <span>Explore My Work</span>
              <ArrowUpRight size={17} />
            </a>
            <a
              href="/Kowshika_S_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <FileText size={16} />
              <span>View Resume</span>
            </a>
          </div>
        </div>

        <a href="#about" className="hero-scroll-cue" aria-label="Scroll to About section">
          <span className="hero-scroll-label">Scroll</span>
          <span className="hero-scroll-track" aria-hidden="true">
            <ArrowDown size={14} className="hero-scroll-arrow" />
          </span>
        </a>
      </div>
    </section>
  );
}
