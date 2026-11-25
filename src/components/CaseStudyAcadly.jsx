import React, { useState, useCallback } from 'react';
import {
  ACADLY_ALL_SCREENS,
  ACADLY_ASSESSMENT,
  ACADLY_ASSIGNMENTS,
  ACADLY_CHALLENGE,
  ACADLY_COMMUNICATION,
  ACADLY_COURSES,
  ACADLY_DASHBOARD,
  ACADLY_DESIGN_SYSTEM,
  ACADLY_FINAL_GROUPS,
  ACADLY_GAMIFICATION,
  ACADLY_HERO,
  ACADLY_JOURNEY,
  ACADLY_NAV_SECTIONS,
  ACADLY_OBJECTIVES,
  ACADLY_ONBOARDING,
  ACADLY_OUTCOME,
  ACADLY_OVERVIEW,
  ACADLY_SELF_SERVICE,
} from '../data/acadlyCaseStudyData';
import {
  CaseStudyLightbox,
  CaseStudyProjectFooter,
  CaseStudyStickyHeader,
  InteractiveViewportFrame,
} from './CaseStudyPrimitives';
import './CaseStudyAcadly.css';

export default function CaseStudyAcadly({ onBack, onSelectCaseStudy }) {
  const [activeAssessmentIdx, setActiveAssessmentIdx] = useState(0);
  const [activeServiceGroup, setActiveServiceGroup] = useState('all');
  const [activeShowcaseGroup, setActiveShowcaseGroup] = useState('all');
  const [lightboxItems, setLightboxItems] = useState([]);
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const openSingleLightbox = useCallback((item) => {
    setLightboxItems([item]);
    setLightboxIndex(0);
  }, []);

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

  const filteredServices =
    activeServiceGroup === 'all'
      ? ACADLY_SELF_SERVICE.items
      : ACADLY_SELF_SERVICE.items.filter((item) => item.group === activeServiceGroup);

  const filteredShowcase =
    activeShowcaseGroup === 'all'
      ? ACADLY_ALL_SCREENS
      : ACADLY_ALL_SCREENS.filter((item) => item.group === activeShowcaseGroup);

  const currentAssessment =
    ACADLY_ASSESSMENT.steps[activeAssessmentIdx] || ACADLY_ASSESSMENT.steps[0];

  return (
    <div className="cs2-shell acadly-shell">
      <CaseStudyStickyHeader
        navSections={ACADLY_NAV_SECTIONS}
        onBack={onBack}
        ariaLabel="Acadly case study sections"
      />

      <main id="main-content" className="cs2-main">
        {/* SECTION 01 — HERO */}
        <section className="acadly-hero-section">
          <div className="container">
            <div className="acadly-hero-copy" data-reveal>
              <div className="acadly-eyebrow-row">
                <span className="acadly-dot" aria-hidden="true" />
                <span className="acadly-eyebrow">{ACADLY_HERO.eyebrow}</span>
              </div>
              <h1 className="acadly-hero-title">{ACADLY_HERO.title}</h1>
              <p className="acadly-hero-headline">{ACADLY_HERO.headline}</p>
              <p className="acadly-hero-description">{ACADLY_HERO.description}</p>
            </div>

            <div className="acadly-meta-grid" data-reveal>
              {ACADLY_HERO.metadata.map((meta) => (
                <div key={meta.label} className="acadly-meta-card interactive-glow-card">
                  <span className="acadly-meta-label">{meta.label}</span>
                  <span className="acadly-meta-value">{meta.value}</span>
                </div>
              ))}
            </div>

            <div className="acadly-hero-phones" data-reveal>
              {ACADLY_HERO.phones.map((phone, idx) => (
                <div
                  key={phone.src}
                  className={`acadly-hero-phone is-${phone.role}`}
                  data-parallax={phone.role === 'center-main' ? '-18' : '-32'}
                >
                  <InteractiveViewportFrame
                    src={phone.src}
                    alt={phone.alt}
                    caption={phone.caption}
                    variant="mobile"
                    scrollable={phone.role === 'center-main'}
                    eager
                    onOpenLightbox={() =>
                      openGalleryLightbox(
                        ACADLY_HERO.phones.map((p) => ({
                          src: p.src,
                          alt: p.alt,
                          caption: p.caption,
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
        <section id="acadly-overview" className="cs2-section cs2-anchor">
          <div className="container">
            <div className="cs2-section-head" data-reveal>
              <span className="cs2-section-num">
                {ACADLY_OVERVIEW.sectionNumber} — {ACADLY_OVERVIEW.eyebrow}
              </span>
              <h2 className="cs2-section-title">{ACADLY_OVERVIEW.heading}</h2>
              <p className="cs2-section-lead">{ACADLY_OVERVIEW.intro}</p>
            </div>

            <div className="acadly-three-grid" data-reveal>
              {ACADLY_OVERVIEW.pillars.map((pillar) => (
                <article key={pillar.number} className="acadly-glass-card interactive-glow-card">
                  <span className="cs2-card-index">{pillar.number}</span>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.summary}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 03 — DESIGN CHALLENGE */}
        <section id="acadly-challenge" className="cs2-section cs2-anchor acadly-challenge-band">
          <div className="container">
            <div className="acadly-challenge-inner" data-reveal>
              <span className="cs2-section-num">
                {ACADLY_CHALLENGE.sectionNumber} — {ACADLY_CHALLENGE.eyebrow}
              </span>
              <blockquote className="acadly-hmw">“{ACADLY_CHALLENGE.statement}”</blockquote>
              <div className="acadly-two-grid">
                {ACADLY_CHALLENGE.points.map((pt) => (
                  <article key={pt.title} className="acadly-glass-card interactive-glow-card">
                    <h3>{pt.title}</h3>
                    <p>{pt.detail}</p>
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
                {ACADLY_OBJECTIVES.sectionNumber} — {ACADLY_OBJECTIVES.eyebrow}
              </span>
              <h2 className="cs2-section-title">{ACADLY_OBJECTIVES.heading}</h2>
            </div>

            <div className="acadly-three-grid" data-reveal>
              {ACADLY_OBJECTIVES.items.map((obj) => (
                <article key={obj.number} className="acadly-glass-card interactive-glow-card">
                  <span className="cs2-card-index">{obj.number}</span>
                  <h3>{obj.title}</h3>
                  <p>{obj.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 05 — STUDENT JOURNEY */}
        <section id="acadly-journey" className="cs2-section cs2-anchor">
          <div className="container">
            <div className="cs2-section-head" data-reveal>
              <span className="cs2-section-num">
                {ACADLY_JOURNEY.sectionNumber} — {ACADLY_JOURNEY.eyebrow}
              </span>
              <h2 className="cs2-section-title">{ACADLY_JOURNEY.heading}</h2>
            </div>

            <div className="acadly-journey-track" data-reveal>
              {ACADLY_JOURNEY.steps.map((st, idx) => (
                <div key={st.step} className="acadly-journey-node interactive-glow-card">
                  <span className="acadly-step-pill">{st.step}</span>
                  <h3>{st.title}</h3>
                  <p>{st.detail}</p>
                  {idx < ACADLY_JOURNEY.steps.length - 1 && (
                    <span className="acadly-journey-arrow" aria-hidden="true">
                      →
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 06 — ONBOARDING */}
        <section className="cs2-section">
          <div className="container">
            <div className="cs2-section-head" data-reveal>
              <span className="cs2-section-num">
                {ACADLY_ONBOARDING.sectionNumber} — {ACADLY_ONBOARDING.eyebrow}
              </span>
              <h2 className="cs2-section-title">{ACADLY_ONBOARDING.heading}</h2>
              <p className="cs2-section-lead">{ACADLY_ONBOARDING.intro}</p>
            </div>

            <ul className="acadly-bullet-row" data-reveal>
              {ACADLY_ONBOARDING.highlights.map((hl) => (
                <li key={hl}>{hl}</li>
              ))}
            </ul>

            <div className="acadly-four-phones" data-reveal>
              {ACADLY_ONBOARDING.phones.map((phone, idx) => (
                <article key={phone.src} className="acadly-phone-col">
                  <span className="acadly-col-kicker">{phone.title}</span>
                  <InteractiveViewportFrame
                    src={phone.src}
                    alt={phone.caption}
                    caption={phone.caption}
                    variant="mobile"
                    scrollable={false}
                    onOpenLightbox={() =>
                      openGalleryLightbox(
                        ACADLY_ONBOARDING.phones.map((p) => ({
                          src: p.src,
                          alt: p.caption,
                          caption: `${p.title} — ${p.caption}`,
                        })),
                        idx
                      )
                    }
                  />
                </article>
              ))}
            </div>

            <div className="acadly-sheet-wrap" data-reveal>
              <InteractiveViewportFrame
                src={ACADLY_ONBOARDING.sheetOverview.src}
                alt={ACADLY_ONBOARDING.sheetOverview.alt}
                caption={ACADLY_ONBOARDING.sheetOverview.caption}
                variant="natural"
                scrollable={false}
                onOpenLightbox={openSingleLightbox}
              />
            </div>
          </div>
        </section>

        {/* SECTION 07 — PERSONALIZED DASHBOARD */}
        <section id="acadly-dashboard" className="cs2-section cs2-anchor">
          <div className="container">
            <div className="cs2-section-head" data-reveal>
              <span className="cs2-section-num">
                {ACADLY_DASHBOARD.sectionNumber} — {ACADLY_DASHBOARD.eyebrow}
              </span>
              <h2 className="cs2-section-title">{ACADLY_DASHBOARD.heading}</h2>
              <p className="cs2-section-lead">{ACADLY_DASHBOARD.intro}</p>
            </div>

            <div className="acadly-three-grid" data-reveal>
              {ACADLY_DASHBOARD.comparisons.map((item, idx) => (
                <article key={item.title} className="acadly-dashboard-col">
                  <div className="acadly-dashboard-meta">
                    <span className="acadly-step-pill">{item.tag}</span>
                    <h3>{item.title}</h3>
                    <p>{item.summary}</p>
                  </div>
                  <InteractiveViewportFrame
                    src={item.src}
                    alt={item.alt}
                    variant="mobile"
                    scrollable
                    onOpenLightbox={() =>
                      openGalleryLightbox(
                        ACADLY_DASHBOARD.comparisons.map((c) => ({
                          src: c.src,
                          alt: c.alt,
                          caption: `${c.tag}: ${c.title}`,
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

        {/* SECTION 08 — COURSES AND CLASSES */}
        <section id="acadly-courses" className="cs2-section cs2-anchor">
          <div className="container">
            <div className="cs2-section-head" data-reveal>
              <span className="cs2-section-num">
                {ACADLY_COURSES.sectionNumber} — {ACADLY_COURSES.eyebrow}
              </span>
              <h2 className="cs2-section-title">{ACADLY_COURSES.heading}</h2>
              <p className="cs2-section-lead">{ACADLY_COURSES.intro}</p>
            </div>

            <div className="acadly-horizontal-rail" data-reveal>
              {ACADLY_COURSES.screens.map((scr, idx) => (
                <article key={scr.title} className="acadly-rail-card">
                  <div className="acadly-rail-head">
                    <span>{scr.tag}</span>
                    <h3>{scr.title}</h3>
                  </div>
                  <InteractiveViewportFrame
                    src={scr.src}
                    alt={`Acadly ${scr.title}`}
                    caption={scr.caption}
                    variant="mobile"
                    scrollable
                    onOpenLightbox={() =>
                      openGalleryLightbox(
                        ACADLY_COURSES.screens.map((s) => ({
                          src: s.src,
                          alt: s.title,
                          caption: `${s.tag} · ${s.title}: ${s.caption}`,
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

        {/* SECTION 09 — ASSESSMENT EXPERIENCE (HIGHLIGHT) */}
        <section id="acadly-assessment" className="cs2-section cs2-anchor acadly-highlight-band">
          <div className="container">
            <div className="cs2-section-head" data-reveal>
              <span className="cs2-section-num">
                {ACADLY_ASSESSMENT.sectionNumber} — {ACADLY_ASSESSMENT.eyebrow}
              </span>
              <h2 className="cs2-section-title">{ACADLY_ASSESSMENT.heading}</h2>
              <p className="cs2-section-lead">{ACADLY_ASSESSMENT.intro}</p>
            </div>

            <div className="acadly-assessment-stage" data-reveal>
              <div className="acadly-assessment-steps" role="tablist" aria-label="Assessment journey steps">
                {ACADLY_ASSESSMENT.steps.map((st, idx) => (
                  <button
                    key={st.step}
                    type="button"
                    role="tab"
                    aria-selected={activeAssessmentIdx === idx}
                    className={`acadly-assess-btn ${activeAssessmentIdx === idx ? 'is-active' : ''}`}
                    onClick={() => setActiveAssessmentIdx(idx)}
                  >
                    <span className="acadly-step-pill">STEP {st.step}</span>
                    <strong>{st.title}</strong>
                    <span>{st.uxNote}</span>
                  </button>
                ))}
              </div>

              <div className="acadly-assessment-preview">
                <div className="acadly-assess-preview-head">
                  <span className="acadly-step-pill">STAGE {currentAssessment.step} / 07</span>
                  <h3>{currentAssessment.title}</h3>
                  <p>{currentAssessment.uxNote}</p>
                </div>
                <InteractiveViewportFrame
                  src={currentAssessment.src}
                  alt={`Acadly Assessment Stage ${currentAssessment.step}: ${currentAssessment.title}`}
                  caption={`Scroll inside device frame or click Expand for full ${currentAssessment.title} resolution`}
                  variant="mobile"
                  scrollable
                  onOpenLightbox={() =>
                    openGalleryLightbox(
                      ACADLY_ASSESSMENT.steps.map((s) => ({
                        src: s.src,
                        alt: `Step ${s.step}: ${s.title}`,
                        caption: `Step ${s.step} · ${s.title} — ${s.uxNote}`,
                      })),
                      activeAssessmentIdx
                    )
                  }
                />
              </div>
            </div>

            {/* Connected 7-phone strip */}
            <div className="acadly-connected-strip" data-reveal>
              {ACADLY_ASSESSMENT.steps.map((st, idx) => (
                <div key={st.step} className="acadly-mini-step">
                  <div className="acadly-mini-step-num">
                    <span>{st.step}</span>
                    <span>{st.title}</span>
                  </div>
                  <InteractiveViewportFrame
                    src={st.src}
                    alt={st.title}
                    variant="mobile"
                    scrollable
                    onOpenLightbox={() =>
                      openGalleryLightbox(
                        ACADLY_ASSESSMENT.steps.map((s) => ({
                          src: s.src,
                          alt: `Step ${s.step}: ${s.title}`,
                          caption: `Step ${s.step} · ${s.title} — ${s.uxNote}`,
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

        {/* SECTION 10 — ASSIGNMENT MANAGEMENT */}
        <section className="cs2-section">
          <div className="container">
            <div className="cs2-section-head" data-reveal>
              <span className="cs2-section-num">
                {ACADLY_ASSIGNMENTS.sectionNumber} — {ACADLY_ASSIGNMENTS.eyebrow}
              </span>
              <h2 className="cs2-section-title">{ACADLY_ASSIGNMENTS.heading}</h2>
              <p className="cs2-section-lead">{ACADLY_ASSIGNMENTS.intro}</p>
            </div>

            <div className="acadly-horizontal-rail" data-reveal>
              {ACADLY_ASSIGNMENTS.screens.map((scr, idx) => (
                <article key={scr.title} className="acadly-rail-card">
                  <div className="acadly-rail-head">
                    <span>STEP 0{idx + 1}</span>
                    <h3>{scr.title}</h3>
                  </div>
                  <InteractiveViewportFrame
                    src={scr.src}
                    alt={scr.title}
                    caption={scr.caption}
                    variant="mobile"
                    scrollable
                    onOpenLightbox={() =>
                      openGalleryLightbox(
                        ACADLY_ASSIGNMENTS.screens.map((s) => ({
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

        {/* SECTION 11 — COMMUNICATION */}
        <section className="cs2-section">
          <div className="container">
            <div className="cs2-section-head" data-reveal>
              <span className="cs2-section-num">
                {ACADLY_COMMUNICATION.sectionNumber} — {ACADLY_COMMUNICATION.eyebrow}
              </span>
              <h2 className="cs2-section-title">{ACADLY_COMMUNICATION.heading}</h2>
              <p className="cs2-section-lead">{ACADLY_COMMUNICATION.intro}</p>
            </div>

            <div className="acadly-horizontal-rail" data-reveal>
              {ACADLY_COMMUNICATION.screens.map((scr, idx) => (
                <article key={scr.title} className="acadly-rail-card">
                  <div className="acadly-rail-head">
                    <span>COLLABORATION</span>
                    <h3>{scr.title}</h3>
                  </div>
                  <InteractiveViewportFrame
                    src={scr.src}
                    alt={scr.title}
                    caption={scr.caption}
                    variant="mobile"
                    scrollable
                    onOpenLightbox={() =>
                      openGalleryLightbox(
                        ACADLY_COMMUNICATION.screens.map((s) => ({
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

        {/* SECTION 12 — GAMIFICATION AND PROGRESS */}
        <section className="cs2-section">
          <div className="container">
            <div className="cs2-section-head" data-reveal>
              <span className="cs2-section-num">
                {ACADLY_GAMIFICATION.sectionNumber} — {ACADLY_GAMIFICATION.eyebrow}
              </span>
              <h2 className="cs2-section-title">{ACADLY_GAMIFICATION.heading}</h2>
              <p className="cs2-section-lead">{ACADLY_GAMIFICATION.intro}</p>
            </div>

            <div className="acadly-three-grid" data-reveal>
              {ACADLY_GAMIFICATION.screens.map((scr, idx) => (
                <article key={scr.title} className="acadly-dashboard-col">
                  <div className="acadly-dashboard-meta">
                    <h3>{scr.title}</h3>
                    <p>{scr.caption}</p>
                  </div>
                  <InteractiveViewportFrame
                    src={scr.src}
                    alt={scr.title}
                    variant="mobile"
                    scrollable
                    onOpenLightbox={() =>
                      openGalleryLightbox(
                        ACADLY_GAMIFICATION.screens.map((s) => ({
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

        {/* SECTION 13 — STUDENT SELF-SERVICE */}
        <section className="cs2-section">
          <div className="container">
            <div className="cs2-section-head" data-reveal>
              <span className="cs2-section-num">
                {ACADLY_SELF_SERVICE.sectionNumber} — {ACADLY_SELF_SERVICE.eyebrow}
              </span>
              <h2 className="cs2-section-title">{ACADLY_SELF_SERVICE.heading}</h2>
              <p className="cs2-section-lead">{ACADLY_SELF_SERVICE.intro}</p>
            </div>

            <div className="acadly-filter-bar" role="tablist" aria-label="Self-service screen categories">
              {ACADLY_SELF_SERVICE.groups.map((grp) => (
                <button
                  key={grp.id}
                  type="button"
                  role="tab"
                  aria-selected={activeServiceGroup === grp.id}
                  className={`acadly-filter-pill ${activeServiceGroup === grp.id ? 'is-active' : ''}`}
                  onClick={() => setActiveServiceGroup(grp.id)}
                >
                  {grp.label}
                </button>
              ))}
            </div>

            <div className="acadly-four-grid" data-reveal>
              {filteredServices.map((item, idx) => (
                <article key={item.src} className="acadly-gallery-tile">
                  <InteractiveViewportFrame
                    src={item.src}
                    alt={item.title}
                    caption={item.title}
                    variant="mobile"
                    scrollable
                    onOpenLightbox={() =>
                      openGalleryLightbox(
                        filteredServices.map((s) => ({
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

        {/* SECTION 14 — DESIGN SYSTEM */}
        <section id="acadly-system" className="cs2-section cs2-anchor">
          <div className="container">
            <div className="cs2-section-head" data-reveal>
              <span className="cs2-section-num">
                {ACADLY_DESIGN_SYSTEM.sectionNumber} — {ACADLY_DESIGN_SYSTEM.eyebrow}
              </span>
              <h2 className="cs2-section-title">{ACADLY_DESIGN_SYSTEM.heading}</h2>
              <p className="cs2-section-lead">{ACADLY_DESIGN_SYSTEM.intro}</p>
            </div>

            <div className="acadly-swatches-grid" data-reveal>
              {ACADLY_DESIGN_SYSTEM.colors.map((swatch) => (
                <div key={swatch.name} className="acadly-swatch-card">
                  <div className="acadly-swatch-fill" style={{ background: swatch.hex }}>
                    <span>{swatch.hex}</span>
                  </div>
                  <div className="acadly-swatch-meta">
                    <h4>{swatch.name}</h4>
                    <p>{swatch.role}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="acadly-three-grid" data-reveal>
              {ACADLY_DESIGN_SYSTEM.components.map((comp, idx) => (
                <article key={comp.title} className="acadly-glass-card interactive-glow-card">
                  <span className="cs2-card-index">0{idx + 1}</span>
                  <h3>{comp.title}</h3>
                  <p>{comp.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 15 — FINAL DESIGN SHOWCASE */}
        <section id="acadly-showcase" className="cs2-section cs2-anchor">
          <div className="container">
            <div className="cs2-section-head" data-reveal>
              <span className="cs2-section-num">15 — FINAL DESIGN SHOWCASE</span>
              <h2 className="cs2-section-title">All 43 Acadly screens, organized by workflow.</h2>
              <p className="cs2-section-lead">
                Filter across feature areas or scroll inside each mobile viewport. Click Expand on
                any screen to inspect full-scale typography and spacing in the zoomable lightbox.
              </p>
            </div>

            <div className="acadly-filter-bar" role="tablist" aria-label="Filter all Acadly screens">
              {ACADLY_FINAL_GROUPS.map((grp) => (
                <button
                  key={grp.id}
                  type="button"
                  role="tab"
                  aria-selected={activeShowcaseGroup === grp.id}
                  className={`acadly-filter-pill ${activeShowcaseGroup === grp.id ? 'is-active' : ''}`}
                  onClick={() => setActiveShowcaseGroup(grp.id)}
                >
                  {grp.label}
                </button>
              ))}
            </div>

            <div className="acadly-four-grid" data-reveal>
              {filteredShowcase.map((item, idx) => (
                <article key={item.src} className="acadly-gallery-tile">
                  <InteractiveViewportFrame
                    src={item.src}
                    alt={item.title}
                    caption={item.title}
                    variant={item.src.includes('splash-screen') || item.src.includes('onboarding-screen') ? 'natural' : 'mobile'}
                    scrollable={!(item.src.includes('splash-screen') || item.src.includes('onboarding-screen'))}
                    onOpenLightbox={() =>
                      openGalleryLightbox(
                        filteredShowcase.map((s) => ({
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

        {/* SECTION 16 — OUTCOME AND LEARNINGS */}
        <section id="acadly-outcome" className="cs2-section cs2-anchor">
          <div className="container">
            <div className="cs2-section-head" data-reveal>
              <span className="cs2-section-num">
                {ACADLY_OUTCOME.sectionNumber} — {ACADLY_OUTCOME.eyebrow}
              </span>
              <h2 className="cs2-section-title">{ACADLY_OUTCOME.heading}</h2>
              <p className="cs2-section-lead">{ACADLY_OUTCOME.summary}</p>
            </div>

            <div className="acadly-three-grid" data-reveal>
              {ACADLY_OUTCOME.learnings.map((item, idx) => (
                <article key={item.title} className="acadly-glass-card interactive-glow-card">
                  <span className="cs2-card-index">0{idx + 1}</span>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </article>
              ))}
            </div>

            <CaseStudyProjectFooter
              prevProject={{
                id: 'greeto',
                title: 'Greeto',
                subtitle: 'B2B SaaS Omnichannel Engagement & Workflow Automation',
              }}
              nextProject={{
                id: 'learnex',
                title: 'Learnex',
                subtitle: 'CPA & CMA Exam Preparation & Performance Intelligence',
              }}
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
