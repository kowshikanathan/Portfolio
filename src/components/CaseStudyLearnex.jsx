import React, { useState, useCallback } from 'react';
import {
  LEARNEX_AI,
  LEARNEX_CHALLENGE,
  LEARNEX_COMMUNITY,
  LEARNEX_CYCLE,
  LEARNEX_DASHBOARD,
  LEARNEX_DESIGN_SYSTEM,
  LEARNEX_FLASHCARDS,
  LEARNEX_HERO,
  LEARNEX_NAV_SECTIONS,
  LEARNEX_OBJECTIVES,
  LEARNEX_OUTCOME,
  LEARNEX_OVERVIEW,
  LEARNEX_PERFORMANCE,
  LEARNEX_PLANNING,
  LEARNEX_PRACTICE,
  LEARNEX_PREP_DASHBOARD,
  LEARNEX_SUPPORTING,
  LEARNEX_TEXTBOOK,
  LEARNEX_WORKSPACE,
} from '../data/learnexCaseStudyData';
import {
  CaseStudyLightbox,
  CaseStudyProjectFooter,
  CaseStudyStickyHeader,
  InteractiveViewportFrame,
} from './CaseStudyPrimitives';
import './CaseStudyLearnex.css';

export default function CaseStudyLearnex({ onBack, onSelectCaseStudy }) {
  const [activePerfIdx, setActivePerfIdx] = useState(0);
  const [lightboxItems, setLightboxItems] = useState([]);
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const openGalleryLightbox = useCallback((items, index) => {
    setLightboxItems(items);
    setLightboxIndex(index);
  }, []);

  const closeLightbox = useCallback(() => setLightboxIndex(-1), []);

  const stepLightbox = useCallback(
    (delta) => {
      if (lightboxItems.length <= 1) return;
      setLightboxIndex((prev) => (prev + delta + lightboxItems.length) % lightboxItems.length);
    },
    [lightboxItems.length]
  );

  const currentPerf = LEARNEX_PERFORMANCE.highlights[activePerfIdx] || LEARNEX_PERFORMANCE.highlights[0];

  return (
    <div className="cs2-shell learnex-shell">
      <CaseStudyStickyHeader
        navSections={LEARNEX_NAV_SECTIONS}
        onBack={onBack}
        ariaLabel="Learnex case study sections"
      />

      <main id="main-content" className="cs2-main">
        {/* SECTION 01 — HERO */}
        <section className="learnex-hero-section">
          <div className="container">
            <div className="learnex-hero-copy" data-reveal>
              <div className="learnex-eyebrow-row">
                <span className="learnex-dot" aria-hidden="true" />
                <span className="learnex-eyebrow">{LEARNEX_HERO.eyebrow}</span>
              </div>
              <h1 className="learnex-hero-title">{LEARNEX_HERO.title}</h1>
              <p className="learnex-hero-headline">{LEARNEX_HERO.headline}</p>
              <p className="learnex-hero-description">{LEARNEX_HERO.description}</p>
            </div>

            <div className="learnex-meta-grid" data-reveal>
              {LEARNEX_HERO.metadata.map((meta) => (
                <div key={meta.label} className="learnex-meta-card interactive-glow-card">
                  <span className="learnex-meta-label">{meta.label}</span>
                  <span className="learnex-meta-value">{meta.value}</span>
                </div>
              ))}
            </div>

            <div className="learnex-hero-browsers" data-reveal>
              {LEARNEX_HERO.browserScreens.map((scr, idx) => (
                <div
                  key={scr.src}
                  className={`learnex-hero-browser is-${scr.role}`}
                  data-parallax={scr.role === 'center' ? '-16' : '-30'}
                >
                  <InteractiveViewportFrame
                    src={scr.src}
                    alt={scr.alt}
                    caption={scr.title}
                    variant="browser"
                    urlLabel={scr.url}
                    scrollable
                    eager
                    onOpenLightbox={() =>
                      openGalleryLightbox(
                        LEARNEX_HERO.browserScreens.map((b) => ({
                          src: b.src,
                          alt: b.alt,
                          caption: b.title,
                        })),
                        idx
                      )
                    }
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 02 — PRODUCT OVERVIEW */}
        <section id="learnex-overview" className="cs2-section cs2-anchor">
          <div className="container">
            <div className="cs2-section-head" data-reveal>
              <span className="cs2-section-num">
                {LEARNEX_OVERVIEW.sectionNumber} — {LEARNEX_OVERVIEW.eyebrow}
              </span>
              <h2 className="cs2-section-title">{LEARNEX_OVERVIEW.heading}</h2>
              <p className="cs2-section-lead">{LEARNEX_OVERVIEW.intro}</p>
            </div>

            <div className="learnex-three-grid" data-reveal>
              {LEARNEX_OVERVIEW.pillars.map((pillar) => (
                <article key={pillar.title} className="learnex-glass-card interactive-glow-card">
                  <span className="cs2-card-index">{pillar.number}</span>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.summary}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 03 — DESIGN CHALLENGE */}
        <section id="learnex-challenge" className="cs2-section cs2-anchor learnex-challenge-band">
          <div className="container">
            <div className="learnex-challenge-inner" data-reveal>
              <span className="cs2-section-num">
                {LEARNEX_CHALLENGE.sectionNumber} — {LEARNEX_CHALLENGE.eyebrow}
              </span>
              <blockquote className="learnex-hmw">“{LEARNEX_CHALLENGE.statement}”</blockquote>
              <div className="learnex-two-grid">
                {LEARNEX_CHALLENGE.details.map((item) => (
                  <article key={item.title} className="learnex-glass-card interactive-glow-card">
                    <h3>{item.title}</h3>
                    <p>{item.detail}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 04 — DESIGN OBJECTIVES */}
        <section className="cs2-section">
          <div className="container">
            <div className="cs2-section-head" data-reveal>
              <span className="cs2-section-num">
                {LEARNEX_OBJECTIVES.sectionNumber} — {LEARNEX_OBJECTIVES.eyebrow}
              </span>
              <h2 className="cs2-section-title">{LEARNEX_OBJECTIVES.heading}</h2>
            </div>

            <div className="learnex-three-grid" data-reveal>
              {LEARNEX_OBJECTIVES.items.map((obj) => (
                <article key={obj.number} className="learnex-glass-card interactive-glow-card">
                  <span className="cs2-card-index">{obj.number}</span>
                  <h3>{obj.title}</h3>
                  <p>{obj.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 05 — LEARNING ECOSYSTEM */}
        <section id="learnex-cycle" className="cs2-section cs2-anchor">
          <div className="container">
            <div className="cs2-section-head" data-reveal>
              <span className="cs2-section-num">
                {LEARNEX_CYCLE.sectionNumber} — {LEARNEX_CYCLE.eyebrow}
              </span>
              <h2 className="cs2-section-title">{LEARNEX_CYCLE.heading}</h2>
            </div>

            <div className="learnex-cycle-grid" data-reveal>
              {LEARNEX_CYCLE.steps.map((st, idx) => (
                <div key={st.step} className="learnex-cycle-node interactive-glow-card">
                  <span className="learnex-step-pill">{st.step}</span>
                  <h3>{st.title}</h3>
                  <p>{st.detail}</p>
                  {idx < LEARNEX_CYCLE.steps.length - 1 && (
                    <span className="learnex-cycle-arrow" aria-hidden="true">
                      →
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 06 — PERSONALIZED DASHBOARD */}
        <section className="cs2-section">
          <div className="container">
            <div className="cs2-section-head" data-reveal>
              <span className="cs2-section-num">
                {LEARNEX_DASHBOARD.sectionNumber} — {LEARNEX_DASHBOARD.eyebrow}
              </span>
              <h2 className="cs2-section-title">{LEARNEX_DASHBOARD.heading}</h2>
              <p className="cs2-section-lead">{LEARNEX_DASHBOARD.intro}</p>
            </div>

            <div className="learnex-three-grid" data-reveal>
              {LEARNEX_DASHBOARD.screens.map((scr, idx) => (
                <article key={scr.title} className="learnex-browser-card">
                  <h3>{scr.title}</h3>
                  <InteractiveViewportFrame
                    src={scr.src}
                    alt={scr.title}
                    caption={scr.caption}
                    variant={scr.src.includes('canvas') ? 'natural' : 'browser'}
                    urlLabel={scr.url}
                    scrollable={!scr.src.includes('canvas')}
                    onOpenLightbox={() =>
                      openGalleryLightbox(
                        LEARNEX_DASHBOARD.screens.map((s) => ({
                          src: s.src,
                          alt: s.title,
                          caption: `${s.title} — ${s.caption}`,
                        })),
                        idx
                      )
                    }
                  />
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 07 — PREPARATION DASHBOARD */}
        <section className="cs2-section">
          <div className="container">
            <div className="cs2-section-head" data-reveal>
              <span className="cs2-section-num">
                {LEARNEX_PREP_DASHBOARD.sectionNumber} — {LEARNEX_PREP_DASHBOARD.eyebrow}
              </span>
              <h2 className="cs2-section-title">{LEARNEX_PREP_DASHBOARD.heading}</h2>
              <p className="cs2-section-lead">{LEARNEX_PREP_DASHBOARD.intro}</p>
            </div>

            <div className="learnex-three-grid" data-reveal>
              {LEARNEX_PREP_DASHBOARD.screens.map((scr, idx) => (
                <article key={scr.title} className="learnex-browser-card">
                  <h3>{scr.title}</h3>
                  <InteractiveViewportFrame
                    src={scr.src}
                    alt={scr.title}
                    caption={scr.caption}
                    variant="browser"
                    urlLabel={scr.url}
                    scrollable
                    onOpenLightbox={() =>
                      openGalleryLightbox(
                        LEARNEX_PREP_DASHBOARD.screens.map((s) => ({
                          src: s.src,
                          alt: s.title,
                          caption: `${s.title} — ${s.caption}`,
                        })),
                        idx
                      )
                    }
                  />
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 08 — LEARNING WORKSPACE */}
        <section id="learnex-workspace" className="cs2-section cs2-anchor">
          <div className="container">
            <div className="cs2-section-head" data-reveal>
              <span className="cs2-section-num">
                {LEARNEX_WORKSPACE.sectionNumber} — {LEARNEX_WORKSPACE.eyebrow}
              </span>
              <h2 className="cs2-section-title">{LEARNEX_WORKSPACE.heading}</h2>
              <p className="cs2-section-lead">{LEARNEX_WORKSPACE.intro}</p>
            </div>

            <div className="learnex-horizontal-rail" data-reveal>
              {LEARNEX_WORKSPACE.screens.map((scr, idx) => (
                <article key={scr.title} className="learnex-rail-card">
                  <div className="learnex-rail-head">
                    <span>WORKSPACE PANEL</span>
                    <h3>{scr.title}</h3>
                  </div>
                  <InteractiveViewportFrame
                    src={scr.src}
                    alt={scr.title}
                    caption={scr.caption}
                    variant="browser"
                    urlLabel={scr.url}
                    scrollable
                    onOpenLightbox={() =>
                      openGalleryLightbox(
                        LEARNEX_WORKSPACE.screens.map((s) => ({
                          src: s.src,
                          alt: s.title,
                          caption: `${s.title} — ${s.caption}`,
                        })),
                        idx
                      )
                    }
                  />
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 09 — PRACTICE AND ASSESSMENT */}
        <section className="cs2-section">
          <div className="container">
            <div className="cs2-section-head" data-reveal>
              <span className="cs2-section-num">
                {LEARNEX_PRACTICE.sectionNumber} — {LEARNEX_PRACTICE.eyebrow}
              </span>
              <h2 className="cs2-section-title">{LEARNEX_PRACTICE.heading}</h2>
              <p className="cs2-section-lead">{LEARNEX_PRACTICE.intro}</p>
            </div>

            <div className="learnex-horizontal-rail" data-reveal>
              {LEARNEX_PRACTICE.screens.map((scr, idx) => (
                <article key={scr.title} className="learnex-rail-card">
                  <div className="learnex-rail-head">
                    <span>ASSESSMENT FLOW</span>
                    <h3>{scr.title}</h3>
                  </div>
                  <InteractiveViewportFrame
                    src={scr.src}
                    alt={scr.title}
                    caption={scr.caption}
                    variant="browser"
                    urlLabel={scr.url}
                    scrollable
                    onOpenLightbox={() =>
                      openGalleryLightbox(
                        LEARNEX_PRACTICE.screens.map((s) => ({
                          src: s.src,
                          alt: s.title,
                          caption: `${s.title} — ${s.caption}`,
                        })),
                        idx
                      )
                    }
                  />
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 10 — DIGITAL TEXTBOOK */}
        <section id="learnex-tools" className="cs2-section cs2-anchor">
          <div className="container">
            <div className="cs2-section-head" data-reveal>
              <span className="cs2-section-num">
                {LEARNEX_TEXTBOOK.sectionNumber} — {LEARNEX_TEXTBOOK.eyebrow}
              </span>
              <h2 className="cs2-section-title">{LEARNEX_TEXTBOOK.heading}</h2>
              <p className="cs2-section-lead">{LEARNEX_TEXTBOOK.intro}</p>
            </div>

            <div className="learnex-horizontal-rail" data-reveal>
              {LEARNEX_TEXTBOOK.screens.map((scr, idx) => (
                <article key={scr.title} className="learnex-rail-card">
                  <div className="learnex-rail-head">
                    <span>TEXTBOOK TOOL</span>
                    <h3>{scr.title}</h3>
                  </div>
                  <InteractiveViewportFrame
                    src={scr.src}
                    alt={scr.title}
                    caption={scr.caption}
                    variant="browser"
                    urlLabel={scr.url}
                    scrollable
                    onOpenLightbox={() =>
                      openGalleryLightbox(
                        LEARNEX_TEXTBOOK.screens.map((s) => ({
                          src: s.src,
                          alt: s.title,
                          caption: `${s.title} — ${s.caption}`,
                        })),
                        idx
                      )
                    }
                  />
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 11 — AI STUDY ASSISTANT */}
        <section className="cs2-section learnex-ai-band">
          <div className="container">
            <div className="cs2-section-head" data-reveal>
              <span className="cs2-section-num">
                {LEARNEX_AI.sectionNumber} — {LEARNEX_AI.eyebrow}
              </span>
              <h2 className="cs2-section-title">{LEARNEX_AI.heading}</h2>
              <p className="cs2-section-lead">{LEARNEX_AI.intro}</p>
            </div>

            <div className="learnex-three-grid" data-reveal>
              {LEARNEX_AI.screens.map((scr, idx) => (
                <article key={scr.title} className="learnex-browser-card">
                  <h3>{scr.title}</h3>
                  <InteractiveViewportFrame
                    src={scr.src}
                    alt={scr.title}
                    caption={scr.caption}
                    variant="browser"
                    urlLabel={scr.url}
                    scrollable
                    onOpenLightbox={() =>
                      openGalleryLightbox(
                        LEARNEX_AI.screens.map((s) => ({
                          src: s.src,
                          alt: s.title,
                          caption: `${s.title} — ${s.caption}`,
                        })),
                        idx
                      )
                    }
                  />
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 12 — FLASHCARDS */}
        <section className="cs2-section">
          <div className="container">
            <div className="cs2-section-head" data-reveal>
              <span className="cs2-section-num">
                {LEARNEX_FLASHCARDS.sectionNumber} — {LEARNEX_FLASHCARDS.eyebrow}
              </span>
              <h2 className="cs2-section-title">{LEARNEX_FLASHCARDS.heading}</h2>
              <p className="cs2-section-lead">{LEARNEX_FLASHCARDS.intro}</p>
            </div>

            <div className="learnex-four-grid" data-reveal>
              {LEARNEX_FLASHCARDS.screens.map((scr, idx) => (
                <article key={scr.title} className="learnex-browser-card">
                  <h3>{scr.title}</h3>
                  <InteractiveViewportFrame
                    src={scr.src}
                    alt={scr.title}
                    caption={scr.caption}
                    variant="browser"
                    urlLabel={scr.url}
                    scrollable
                    onOpenLightbox={() =>
                      openGalleryLightbox(
                        LEARNEX_FLASHCARDS.screens.map((s) => ({
                          src: s.src,
                          alt: s.title,
                          caption: `${s.title} — ${s.caption}`,
                        })),
                        idx
                      )
                    }
                  />
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 13 — INTELLIGENT STUDY PLANNING */}
        <section className="cs2-section">
          <div className="container">
            <div className="cs2-section-head" data-reveal>
              <span className="cs2-section-num">
                {LEARNEX_PLANNING.sectionNumber} — {LEARNEX_PLANNING.eyebrow}
              </span>
              <h2 className="cs2-section-title">{LEARNEX_PLANNING.heading}</h2>
              <p className="cs2-section-lead">{LEARNEX_PLANNING.intro}</p>
            </div>

            <div className="learnex-four-grid" data-reveal>
              {LEARNEX_PLANNING.screens.map((scr, idx) => (
                <article key={scr.title} className="learnex-browser-card">
                  <h3>{scr.title}</h3>
                  <InteractiveViewportFrame
                    src={scr.src}
                    alt={scr.title}
                    caption={scr.caption}
                    variant="browser"
                    urlLabel={scr.url}
                    scrollable
                    onOpenLightbox={() =>
                      openGalleryLightbox(
                        LEARNEX_PLANNING.screens.map((s) => ({
                          src: s.src,
                          alt: s.title,
                          caption: `${s.title} — ${s.caption}`,
                        })),
                        idx
                      )
                    }
                  />
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 14 — PERFORMANCE INTELLIGENCE (FLAGSHIP) */}
        <section id="learnex-analytics" className="cs2-section cs2-anchor learnex-flagship-band">
          <div className="container">
            <div className="cs2-section-head" data-reveal>
              <span className="cs2-section-num">
                {LEARNEX_PERFORMANCE.sectionNumber} — {LEARNEX_PERFORMANCE.eyebrow}
              </span>
              <h2 className="cs2-section-title">{LEARNEX_PERFORMANCE.heading}</h2>
              <p className="cs2-section-lead">{LEARNEX_PERFORMANCE.intro}</p>
            </div>

            <div className="learnex-flagship-layout" data-reveal>
              <div className="learnex-flagship-tabs" role="tablist" aria-label="Performance Intelligence modules">
                {LEARNEX_PERFORMANCE.highlights.map((sig, idx) => (
                  <button
                    key={sig.title}
                    type="button"
                    role="tab"
                    aria-selected={activePerfIdx === idx}
                    className={`learnex-flagship-btn ${activePerfIdx === idx ? 'is-active' : ''}`}
                    onClick={() => setActivePerfIdx(idx)}
                  >
                    <span className="learnex-step-pill">{sig.label}</span>
                    <strong>{sig.title}</strong>
                    <span>{sig.description}</span>
                  </button>
                ))}
              </div>

              <div className="learnex-flagship-stage">
                <InteractiveViewportFrame
                  src={currentPerf.src}
                  alt={currentPerf.title}
                  caption={`${currentPerf.title} — Scroll smoothly inside browser stage or click Expand for zoomed full-page inspection`}
                  variant="browser"
                  urlLabel={currentPerf.url}
                  scrollable
                  onOpenLightbox={() =>
                    openGalleryLightbox(
                      LEARNEX_PERFORMANCE.highlights.map((h) => ({
                        src: h.src,
                        alt: h.title,
                        caption: `${h.title} — ${h.description}`,
                      })),
                      activePerfIdx
                    )
                  }
                />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 15 — COMMUNITY AND ENGAGEMENT */}
        <section className="cs2-section">
          <div className="container">
            <div className="cs2-section-head" data-reveal>
              <span className="cs2-section-num">
                {LEARNEX_COMMUNITY.sectionNumber} — {LEARNEX_COMMUNITY.eyebrow}
              </span>
              <h2 className="cs2-section-title">{LEARNEX_COMMUNITY.heading}</h2>
              <p className="cs2-section-lead">{LEARNEX_COMMUNITY.intro}</p>
            </div>

            <div className="learnex-horizontal-rail" data-reveal>
              {LEARNEX_COMMUNITY.screens.map((scr, idx) => (
                <article key={scr.src} className="learnex-rail-card">
                  <div className="learnex-rail-head">
                    <span>COMMUNITY</span>
                    <h3>{scr.title}</h3>
                  </div>
                  <InteractiveViewportFrame
                    src={scr.src}
                    alt={scr.title}
                    variant="browser"
                    urlLabel="app.learnex.edu/community"
                    scrollable
                    onOpenLightbox={() =>
                      openGalleryLightbox(
                        LEARNEX_COMMUNITY.screens.map((s) => ({
                          src: s.src,
                          alt: s.title,
                          caption: s.title,
                        })),
                        idx
                      )
                    }
                  />
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 16 — SUPPORTING EXPERIENCES */}
        <section className="cs2-section">
          <div className="container">
            <div className="cs2-section-head" data-reveal>
              <span className="cs2-section-num">
                {LEARNEX_SUPPORTING.sectionNumber} — {LEARNEX_SUPPORTING.eyebrow}
              </span>
              <h2 className="cs2-section-title">{LEARNEX_SUPPORTING.heading}</h2>
              <p className="cs2-section-lead">{LEARNEX_SUPPORTING.intro}</p>
            </div>

            <div className="learnex-horizontal-rail" data-reveal>
              {LEARNEX_SUPPORTING.screens.map((scr, idx) => (
                <article key={scr.src} className="learnex-rail-card">
                  <div className="learnex-rail-head">
                    <span>SYSTEM FLOW</span>
                    <h3>{scr.title}</h3>
                  </div>
                  <InteractiveViewportFrame
                    src={scr.src}
                    alt={scr.title}
                    variant="browser"
                    urlLabel="app.learnex.edu/account"
                    scrollable
                    onOpenLightbox={() =>
                      openGalleryLightbox(
                        LEARNEX_SUPPORTING.screens.map((s) => ({
                          src: s.src,
                          alt: s.title,
                          caption: s.title,
                        })),
                        idx
                      )
                    }
                  />
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 17 — DESIGN SYSTEM */}
        <section id="learnex-system" className="cs2-section cs2-anchor">
          <div className="container">
            <div className="cs2-section-head" data-reveal>
              <span className="cs2-section-num">
                {LEARNEX_DESIGN_SYSTEM.sectionNumber} — {LEARNEX_DESIGN_SYSTEM.eyebrow}
              </span>
              <h2 className="cs2-section-title">{LEARNEX_DESIGN_SYSTEM.heading}</h2>
              <p className="cs2-section-lead">{LEARNEX_DESIGN_SYSTEM.intro}</p>
            </div>

            <div className="learnex-swatches-grid" data-reveal>
              {LEARNEX_DESIGN_SYSTEM.colors.map((swatch) => (
                <div key={swatch.name} className="learnex-swatch-card">
                  <div className="learnex-swatch-fill" style={{ background: swatch.hex }}>
                    <span>{swatch.hex}</span>
                  </div>
                  <div className="learnex-swatch-meta">
                    <h4>{swatch.name}</h4>
                    <p>{swatch.role}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="learnex-three-grid" data-reveal>
              {LEARNEX_DESIGN_SYSTEM.components.map((comp, idx) => (
                <article key={comp.title} className="learnex-glass-card interactive-glow-card">
                  <span className="cs2-card-index">0{idx + 1}</span>
                  <h3>{comp.title}</h3>
                  <p>{comp.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 18 — OUTCOME AND LEARNINGS */}
        <section id="learnex-outcome" className="cs2-section cs2-anchor">
          <div className="container">
            <div className="cs2-section-head" data-reveal>
              <span className="cs2-section-num">
                {LEARNEX_OUTCOME.sectionNumber} — {LEARNEX_OUTCOME.eyebrow}
              </span>
              <h2 className="cs2-section-title">{LEARNEX_OUTCOME.heading}</h2>
              <p className="cs2-section-lead">{LEARNEX_OUTCOME.summary}</p>
            </div>

            <div className="learnex-three-grid" data-reveal>
              {LEARNEX_OUTCOME.learnings.map((item, idx) => (
                <article key={item.title} className="learnex-glass-card interactive-glow-card">
                  <span className="cs2-card-index">0{idx + 1}</span>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </article>
              ))}
            </div>

            <CaseStudyProjectFooter
              prevProject={{
                id: 'acadly',
                title: 'Acadly',
                subtitle: 'Mobile EdTech LMS & Assessment Journey (43 Screens)',
              }}
              nextProject={null}
              onBack={onBack}
              onSelectCaseStudy={onSelectCaseStudy}
            />
          </div>
        </section>
      </main>

      <CaseStudyLightbox
        items={lightboxItems}
        index={lightboxIndex}
        onClose={closeLightbox}
        onStep={stepLightbox}
      />
    </div>
  );
}
