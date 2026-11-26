import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  ArrowDown,
  ArrowUpRight,
  FileText,
  Layers,
  LayoutGrid,
  MonitorSmartphone,
} from 'lucide-react';
import ScrollVideo from './ScrollVideo';
import './Hero.css';

const EXPERTISE_CARDS = [
  {
    id: 'product-design',
    icon: Layers,
    title: 'Product Design',
    description: 'Research to experience',
    offsetClass: 'is-offset-top',
  },
  {
    id: 'design-systems',
    icon: LayoutGrid,
    title: 'Design Systems',
    description: 'Scalable interfaces',
    offsetClass: 'is-offset-mid',
  },
  {
    id: 'web-mobile-ux',
    icon: MonitorSmartphone,
    title: 'Web & Mobile UX',
    description: 'Human-centered design',
    offsetClass: 'is-offset-low',
  },
];

export default function Hero() {
  const [revealed, setRevealed] = useState(false);
  const heroRef = useRef(null);
  const bgTextRef = useRef(null);
  const cardsColRef = useRef(null);

  const handleTurnReveal = useCallback(() => {
    setRevealed(true);
  }, []);

  // Subtle GPU-composited mouse parallax for DESIGNER backdrop & expertise cards (desktop fine pointers only)
  useEffect(() => {
    const heroEl = heroRef.current;
    const bgTextEl = bgTextRef.current;
    const cardsEl = cardsColRef.current;
    if (!heroEl) return undefined;

    const mq = window.matchMedia?.('(pointer: fine) and (prefers-reduced-motion: no-preference)');
    if (!mq?.matches || window.innerWidth < 768) return undefined;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let rafId = null;

    const animate = () => {
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;

      if (bgTextEl) {
        bgTextEl.style.transform = `translate3d(${(-currentX * 18).toFixed(2)}px, ${(-currentY * 12).toFixed(2)}px, 0)`;
      }
      if (cardsEl) {
        cardsEl.style.transform = `translate3d(${(currentX * 11).toFixed(2)}px, ${(currentY * 9).toFixed(2)}px, 0)`;
      }

      if (Math.abs(targetX - currentX) > 0.002 || Math.abs(targetY - currentY) > 0.002) {
        rafId = window.requestAnimationFrame(animate);
      } else {
        rafId = null;
      }
    };

    const schedule = () => {
      if (!rafId) {
        rafId = window.requestAnimationFrame(animate);
      }
    };

    const onMouseMove = (e) => {
      const rect = heroEl.getBoundingClientRect();
      targetX = (e.clientX - rect.left) / rect.width - 0.5;
      targetY = (e.clientY - rect.top) / rect.height - 0.5;
      schedule();
    };

    const onMouseLeave = () => {
      targetX = 0;
      targetY = 0;
      schedule();
    };

    heroEl.addEventListener('mousemove', onMouseMove, { passive: true });
    heroEl.addEventListener('mouseleave', onMouseLeave);

    return () => {
      heroEl.removeEventListener('mousemove', onMouseMove);
      heroEl.removeEventListener('mouseleave', onMouseLeave);
      if (rafId) window.cancelAnimationFrame(rafId);
      if (bgTextEl) bgTextEl.style.transform = '';
      if (cardsEl) cardsEl.style.transform = '';
    };
  }, []);

  return (
    <section
      id="top"
      ref={heroRef}
      className={`hero-section ${revealed ? 'is-revealed' : ''}`}
    >
      {/* Background Depth Layer: Soft Amber Studio Glow + Oversized Outlined Typography */}
      <div className="hero-backdrop-layer" aria-hidden="true">
        <div className="hero-avatar-glow" />
        <div ref={bgTextRef} className="hero-bg-wordmark">
          DESIGNER
        </div>
      </div>

      {/* Centered Animated Avatar Studio Column — Tightly masked around body so side grid & typography show cleanly */}
      <div className="hero-stage-wrap">
        <ScrollVideo
          src="/videos/intro.mp4"
          poster="/videos/posters/intro.jpg"
          fallbackPoster="/videos/posters/intro-end.jpg"
          mode="hero"
          aspectRatio="52 / 100"
          fit="cover"
          objectPosition="50% 50%"
          seamless={true}
          revealThresholdTime={1.25}
          onRevealTrigger={handleTurnReveal}
          showPlayFallback={true}
          ariaLabel="3D animated character of Kowshika turning toward the viewer in a dark studio with warm orange lighting"
          className="hero-video-stage"
        />
        <div className="hero-floor-scrim" aria-hidden="true" />
      </div>

      {/* Foreground Content Architecture */}
      <div className="container hero-foreground-grid">
        {/* Upper-Left Availability Status */}
        <div className="hero-status-area">
          <div className="hero-availability-pill">
            <span className="hero-availability-dot" aria-hidden="true" />
            <span>Open to opportunities</span>
          </div>
        </div>

        {/* Bottom-Left Primary Introduction & Actions */}
        <div className="hero-text-stack">
          <div className="hero-role-kicker">
            <span className="hero-kicker-line" aria-hidden="true" />
            <span>UX/UI DESIGNER</span>
          </div>

          <h1 className="hero-name">KOWSHIKA S</h1>

          <p className="hero-tagline">
            Turning complex problems into simple, meaningful digital experiences.
          </p>

          <div className="hero-cta-row">
            <a href="#projects" className="btn-primary">
              <span>Explore My Work</span>
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
            <a
              href="/Kowshika_S_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <FileText size={16} aria-hidden="true" />
              <span>View Resume</span>
            </a>
          </div>
        </div>

        {/* Right Column: Asymmetric Floating Expertise Cards */}
        <div ref={cardsColRef} className="hero-cards-column" aria-label="Core design expertise">
          {EXPERTISE_CARDS.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className={`hero-expertise-float ${card.offsetClass}`}
                style={{ '--float-delay': `${index * 0.14}s` }}
              >
                <div className="hero-expertise-card">
                  <div className="hero-expertise-icon" aria-hidden="true">
                    <Icon size={18} strokeWidth={1.8} />
                  </div>
                  <div className="hero-expertise-copy">
                    <h2>{card.title}</h2>
                    <p>{card.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom-Right Subtle Location Block + Scroll Indicator */}
        <div className="hero-bottom-right">
          <div className="hero-location-block">
            <span className="hero-location-title">BASED IN INDIA</span>
            <span className="hero-location-sub">SaaS · EdTech · Mobile</span>
          </div>

          <a href="#about" className="hero-scroll-cue" aria-label="Scroll to About section">
            <span className="hero-scroll-label">Scroll</span>
            <span className="hero-scroll-track" aria-hidden="true">
              <ArrowDown size={14} className="hero-scroll-arrow" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
