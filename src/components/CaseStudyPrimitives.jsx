import React, { useEffect, useState, useCallback } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Expand,
  X,
  ZoomIn,
  ZoomOut,
} from 'lucide-react';
import './CaseStudy.css';
import './CaseStudyPrimitives.css';

export function CaseStudyStickyHeader({
  navSections,
  onBack,
  ariaLabel = 'Case study sections',
}) {
  const [activeNavId, setActiveNavId] = useState(navSections?.[0]?.id || '');

  useEffect(() => {
    const els = navSections.map((item) => document.getElementById(item.id)).filter(Boolean);
    if (!els.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          setActiveNavId(visible[0].target.id);
        }
      },
      { rootMargin: '-18% 0px -65% 0px', threshold: 0.01 }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [navSections]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [navSections]);

  return (
    <header className="case-sticky-header cs2-sticky-header">
      <div className="container cs2-header-inner">
        <button type="button" onClick={onBack} className="case-back-button cs2-back-btn">
          <ArrowLeft size={16} aria-hidden="true" />
          <span>Back to Projects</span>
        </button>

        {navSections?.length > 0 && (
          <nav className="cs2-section-nav" aria-label={ariaLabel}>
            {navSections.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className={`cs2-nav-pill ${activeNavId === item.id ? 'is-active' : ''}`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        )}

        <div className="case-header-actions cs2-header-actions">
          <a
            href="/Kowshika_S_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-resume-btn"
          >
            <span>Resume</span>
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </div>
      </div>
    </header>
  );
}

/**
 * InteractiveViewportFrame renders mobile phone screens or web-app captures
 * cleanly without aspect distortion. Tall captures get a smooth internal scroll
 * viewport + one-click full-screen zoomable lightbox.
 */
export function InteractiveViewportFrame({
  src,
  alt,
  caption,
  variant = 'mobile', // 'mobile' | 'browser' | 'natural'
  urlLabel = 'app.learnex.edu',
  scrollable = true,
  eager = false,
  className = '',
  onOpenLightbox,
}) {
  const frameClass = [
    'cs2-frame',
    `is-${variant}`,
    scrollable ? 'is-scrollable' : 'is-natural',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <figure className={frameClass}>
      <div className="cs2-frame-chrome">
        {variant === 'browser' && (
          <div className="cs2-browser-bar" aria-hidden="true">
            <div className="cs2-browser-dots">
              <span />
              <span />
              <span />
            </div>
            <div className="cs2-browser-url">{urlLabel}</div>
          </div>
        )}

        <div className="cs2-viewport">
          <img
            src={src}
            alt={alt}
            loading={eager ? 'eager' : 'lazy'}
            decoding="async"
          />
        </div>

        {onOpenLightbox && (
          <button
            type="button"
            className="cs2-inspect-btn"
            onClick={() => onOpenLightbox({ src, alt, caption: caption || alt })}
            aria-label={`Expand ${alt}`}
          >
            <Expand size={14} aria-hidden="true" />
            <span>Expand</span>
          </button>
        )}
      </div>

      {caption && <figcaption className="cs2-frame-caption">{caption}</figcaption>}
    </figure>
  );
}

export function CaseStudyLightbox({ items, index, onClose, onStep }) {
  const [zoomed, setZoomed] = useState(false);

  const activeItem = index >= 0 ? items[index] : null;

  const handleStep = useCallback(
    (delta) => {
      setZoomed(false);
      onStep(delta);
    },
    [onStep]
  );

  useEffect(() => {
    if (!activeItem) return undefined;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleStep(1);
      if (e.key === 'ArrowLeft') handleStep(-1);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [activeItem, onClose, handleStep]);

  if (!activeItem) return null;

  return (
    <div
      className="cs2-lightbox-backdrop"
      role="dialog"
      aria-modal="true"
      aria-label={activeItem.alt}
      onClick={onClose}
    >
      <div className="cs2-lightbox-shell" onClick={(e) => e.stopPropagation()}>
        <div className="cs2-lightbox-header">
          <span className="cs2-lightbox-title">{activeItem.caption || activeItem.alt}</span>
          <div className="cs2-lightbox-actions">
            {items.length > 1 && (
              <span className="cs2-lightbox-count">
                {index + 1} / {items.length}
              </span>
            )}
            <button
              type="button"
              className="cs2-lightbox-icon-btn"
              onClick={() => setZoomed((z) => !z)}
              aria-label={zoomed ? 'Fit image to screen' : 'Zoom image'}
              title={zoomed ? 'Fit to screen' : 'Zoom to readable width'}
            >
              {zoomed ? <ZoomOut size={16} /> : <ZoomIn size={16} />}
            </button>
            <button
              type="button"
              className="cs2-lightbox-icon-btn"
              onClick={onClose}
              aria-label="Close lightbox"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        <div className={`cs2-lightbox-stage ${zoomed ? 'is-zoomed' : ''}`}>
          {items.length > 1 && (
            <button
              type="button"
              className="cs2-lightbox-arrow is-prev"
              onClick={() => handleStep(-1)}
              aria-label="Previous screen"
            >
              <ChevronLeft size={22} />
            </button>
          )}

          <div className="cs2-lightbox-scroll">
            <img src={activeItem.src} alt={activeItem.alt} />
          </div>

          {items.length > 1 && (
            <button
              type="button"
              className="cs2-lightbox-arrow is-next"
              onClick={() => handleStep(1)}
              aria-label="Next screen"
            >
              <ChevronRight size={22} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export function CaseStudyProjectFooter({
  prevProject,
  nextProject,
  onBack,
  onSelectCaseStudy,
}) {
  return (
    <footer className="cs2-project-footer" data-reveal>
      <div className="cs2-footer-grid">
        {prevProject ? (
          <button
            type="button"
            onClick={() => onSelectCaseStudy(prevProject.id)}
            className="cs2-footer-card interactive-glow-card is-prev"
          >
            <span className="cs2-footer-dir">
              <ArrowLeft size={14} aria-hidden="true" />
              PREVIOUS PROJECT
            </span>
            <strong>{prevProject.title}</strong>
            <span>{prevProject.subtitle}</span>
          </button>
        ) : (
          <button
            type="button"
            onClick={onBack}
            className="cs2-footer-card interactive-glow-card is-prev"
          >
            <span className="cs2-footer-dir">
              <ArrowLeft size={14} aria-hidden="true" />
              PORTFOLIO INDEX
            </span>
            <strong>All Selected Projects</strong>
            <span>Return to portfolio showcase</span>
          </button>
        )}

        {nextProject ? (
          <button
            type="button"
            onClick={() => onSelectCaseStudy(nextProject.id)}
            className="cs2-footer-card interactive-glow-card is-next"
          >
            <span className="cs2-footer-dir">
              NEXT PROJECT
              <ArrowRight size={14} aria-hidden="true" />
            </span>
            <strong>{nextProject.title}</strong>
            <span>{nextProject.subtitle}</span>
          </button>
        ) : (
          <button
            type="button"
            onClick={onBack}
            className="cs2-footer-card interactive-glow-card is-next"
          >
            <span className="cs2-footer-dir">
              ALL PROJECTS
              <ArrowRight size={14} aria-hidden="true" />
            </span>
            <strong>Explore More Case Studies</strong>
            <span>Return to Selected Projects overview</span>
          </button>
        )}
      </div>

      <div className="cs2-footer-bar">
        <button type="button" onClick={onBack} className="btn-secondary">
          <ArrowLeft size={15} aria-hidden="true" />
          <span>Back to Projects</span>
        </button>
        <a
          href="/Kowshika_S_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          <span>View Resume</span>
          <ArrowUpRight size={15} aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}
