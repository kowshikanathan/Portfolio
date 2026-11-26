import React, { useEffect, useState, useCallback } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Expand,
  ImagePlus,
  X,
} from 'lucide-react';
import { CaseStudyStickyHeader } from './CaseStudyPrimitives';
import {
  GREETO_BEFORE_AFTER,
  GREETO_CHALLENGE,
  GREETO_DESIGN_SYSTEM,
  GREETO_EXISTING_ANALYSIS,
  GREETO_HERO,
  GREETO_IA,
  GREETO_IMAGE_SLOTS,
  GREETO_INTERFACE_STATES,
  GREETO_MODULES,
  GREETO_NAV_SECTIONS,
  GREETO_OBJECTIVES,
  GREETO_OUTCOME,
  GREETO_OVERVIEW,
  GREETO_SHOWCASE_GALLERY,
  GREETO_WORKFLOW_JOURNEY,
} from '../data/greetoCaseStudyData';
import './CaseStudy.css';
import './CaseStudyGreeto.css';

function ScreenFrame({
  src,
  alt,
  caption,
  slotConfig = null,
  eager = false,
  className = '',
  onOpenLightbox,
}) {
  const [failed, setFailed] = useState(false);

  const handleLoad = () => {
    setFailed(false);
  };

  const handleError = () => {
    setFailed(true);
  };

  if (failed) {
    return (
      <div className={`greeto-slot-placeholder ${className}`}>
        <div className="greeto-slot-inner">
          <div className="greeto-slot-badge">
            <ImagePlus size={14} aria-hidden="true" />
            <span>{slotConfig?.slotId || 'IMAGE SLOT'}</span>
          </div>
          <h4 className="greeto-slot-title">
            {slotConfig?.title || alt || 'Product Screenshot Slot'}
          </h4>
          <p className="greeto-slot-instruction">
            {slotConfig?.instruction ||
              `Place the high-resolution screenshot at ${src} to render it here automatically.`}
          </p>
          <code className="greeto-slot-path">{src}</code>
        </div>
        {caption && <div className="greeto-media-caption">{caption}</div>}
      </div>
    );
  }

  return (
    <figure className={`greeto-media-frame ${className}`}>
      <div className="greeto-media-viewport">
        <img
          src={src}
          alt={alt}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          onLoad={handleLoad}
          onError={handleError}
        />
        {onOpenLightbox && (
          <button
            type="button"
            className="greeto-expand-btn"
            onClick={() => onOpenLightbox({ src, alt, caption: caption || alt })}
            aria-label={`Expand ${alt}`}
          >
            <Expand size={15} aria-hidden="true" />
            <span>Inspect</span>
          </button>
        )}
      </div>
      {caption && <figcaption className="greeto-media-caption">{caption}</figcaption>}
    </figure>
  );
}

function BeforeAfterComparator({
  beforeSlot,
  afterSrc,
  beforeCaption,
  afterCaption,
  onOpenLightbox,
}) {
  return (
    <div className="greeto-ba-wrapper">
      <div className="greeto-ba-toolbar">
        <div className="greeto-ba-status">
          <span className="greeto-ba-pill">BEFORE vs. AFTER · SIDE-BY-SIDE COMPARISON</span>
        </div>
      </div>

      <div className="greeto-ba-grid">
        <div className="greeto-ba-col">
          <div className="greeto-ba-col-head is-before">
            <span>01 · BEFORE</span>
            <span>Original Purple Interface</span>
          </div>
          <ScreenFrame
            src={beforeSlot.src}
            alt={beforeSlot.alt}
            caption={beforeCaption}
            slotConfig={beforeSlot}
            onOpenLightbox={onOpenLightbox}
          />
        </div>
        <div className="greeto-ba-col">
          <div className="greeto-ba-col-head is-after">
            <span>02 · AFTER</span>
            <span>Redesigned Workspace</span>
          </div>
          <ScreenFrame
            src={afterSrc}
            alt={afterCaption}
            caption={afterCaption}
            onOpenLightbox={onOpenLightbox}
          />
        </div>
      </div>
    </div>
  );
}

export default function CaseStudyGreeto({ onBack, onSelectCaseStudy }) {
  const [activeDsTab, setActiveDsTab] = useState(GREETO_DESIGN_SYSTEM.categories[0].id);
  const [activeWorkflowStep, setActiveWorkflowStep] = useState(0);
  const [activeStateGroup, setActiveStateGroup] = useState('all');
  const [moduleViews, setModuleViews] = useState({});
  const [lightboxItems, setLightboxItems] = useState([]);
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const openLightboxWithItems = useCallback((items, startIndex = 0) => {
    setLightboxItems(items);
    setLightboxIndex(startIndex);
  }, []);

  const openSingleLightbox = useCallback((item) => {
    setLightboxItems([item]);
    setLightboxIndex(0);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(-1);
  }, []);

  const stepLightbox = useCallback(
    (delta) => {
      if (lightboxItems.length <= 1) return;
      setLightboxIndex((prev) => (prev + delta + lightboxItems.length) % lightboxItems.length);
    },
    [lightboxItems.length]
  );

  useEffect(() => {
    if (lightboxIndex < 0) return undefined;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') stepLightbox(1);
      if (e.key === 'ArrowLeft') stepLightbox(-1);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [lightboxIndex, closeLightbox, stepLightbox]);

  const toggleModuleView = (moduleNumber, view) => {
    setModuleViews((prev) => ({ ...prev, [moduleNumber]: view }));
  };

  const activeDsCategory =
    GREETO_DESIGN_SYSTEM.categories.find((cat) => cat.id === activeDsTab) ||
    GREETO_DESIGN_SYSTEM.categories[0];

  const currentWorkflowStep =
    GREETO_WORKFLOW_JOURNEY.steps[activeWorkflowStep] || GREETO_WORKFLOW_JOURNEY.steps[0];

  const filteredStates =
    activeStateGroup === 'all'
      ? GREETO_INTERFACE_STATES.items
      : GREETO_INTERFACE_STATES.items.filter((item) => item.category === activeStateGroup);

  const activeLightboxItem = lightboxIndex >= 0 ? lightboxItems[lightboxIndex] : null;

  return (
    <div className="case-study-shell greeto-case-shell">
      <CaseStudyStickyHeader
        navSections={GREETO_NAV_SECTIONS}
        onBack={onBack}
        ariaLabel="Greeto case study sections"
      />

      <main id="main-content" className="greeto-main">
        {/* SECTION 01 — PROJECT HERO */}
        <section className="greeto-hero-section">
          <div className="container">
            <div className="greeto-hero-copy" data-reveal>
              <div className="greeto-eyebrow-row">
                <span className="greeto-dot" aria-hidden="true" />
                <span className="greeto-eyebrow">{GREETO_HERO.label}</span>
              </div>
              <h1 className="greeto-hero-title">{GREETO_HERO.title}</h1>
              <p className="greeto-hero-subtitle">{GREETO_HERO.subtitle}</p>
              <p className="greeto-hero-description">{GREETO_HERO.description}</p>
            </div>

            <div className="greeto-meta-grid" data-reveal>
              {GREETO_HERO.metadata.map((meta) => (
                <div key={meta.label} className="greeto-meta-item interactive-glow-card">
                  <span className="greeto-meta-label">{meta.label}</span>
                  <span className="greeto-meta-value">{meta.value}</span>
                </div>
              ))}
            </div>

            <div className="greeto-hero-mockup" data-reveal>
              <ScreenFrame
                src={GREETO_HERO.heroImage}
                alt="Greeto redesigned B2B SaaS desktop workspace dashboard"
                caption={GREETO_HERO.heroImageCaption}
                eager
                className="is-hero"
                onOpenLightbox={openSingleLightbox}
              />
            </div>
          </div>
        </section>

        {/* SECTION 02 — PRODUCT OVERVIEW */}
        <section id="overview" className="greeto-section greeto-anchor-section">
          <div className="container">
            <div className="greeto-section-head" data-reveal>
              <span className="greeto-section-num">
                {GREETO_OVERVIEW.sectionNumber} — {GREETO_OVERVIEW.eyebrow}
              </span>
              <h2 className="greeto-section-title">{GREETO_OVERVIEW.heading}</h2>
              <p className="greeto-section-lead">{GREETO_OVERVIEW.intro}</p>
            </div>

            <div className="greeto-pillars-grid" data-reveal>
              {GREETO_OVERVIEW.pillars.map((pillar) => (
                <article
                  key={pillar.number}
                  className="greeto-pillar-card interactive-glow-card"
                >
                  <span className="greeto-card-index">{pillar.number}</span>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.summary}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 03 — EXISTING PRODUCT ANALYSIS */}
        <section className="greeto-section">
          <div className="container">
            <div className="greeto-section-head" data-reveal>
              <span className="greeto-section-num">
                {GREETO_EXISTING_ANALYSIS.sectionNumber} — {GREETO_EXISTING_ANALYSIS.eyebrow}
              </span>
              <h2 className="greeto-section-title">{GREETO_EXISTING_ANALYSIS.heading}</h2>
              <p className="greeto-section-lead">{GREETO_EXISTING_ANALYSIS.intro}</p>
            </div>

            <div className="greeto-analysis-layout" data-reveal>
              <div className="greeto-analysis-visual">
                <ScreenFrame
                  src={GREETO_IMAGE_SLOTS.originalPurple.src}
                  alt={GREETO_IMAGE_SLOTS.originalPurple.alt}
                  caption="Original Greeto Workspace (Purple Sidebar Interface)"
                  slotConfig={GREETO_IMAGE_SLOTS.originalPurple}
                  onOpenLightbox={openSingleLightbox}
                />
              </div>

              <div className="greeto-observations-list">
                {GREETO_EXISTING_ANALYSIS.observations.map((obs) => (
                  <article
                    key={obs.number}
                    className="greeto-observation-card interactive-glow-card"
                  >
                    <div className="greeto-observation-top">
                      <span className="greeto-obs-num">{obs.number}</span>
                      <span className="greeto-obs-tag">{obs.note}</span>
                    </div>
                    <h3>{obs.title}</h3>
                    <p>{obs.detail}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 04 — DESIGN CHALLENGE */}
        <section id="challenge" className="greeto-section greeto-challenge-section greeto-anchor-section">
          <div className="container">
            <div className="greeto-challenge-box" data-reveal>
              <span className="greeto-section-num">
                {GREETO_CHALLENGE.sectionNumber} — {GREETO_CHALLENGE.eyebrow}
              </span>
              <blockquote className="greeto-hmw-statement">
                “{GREETO_CHALLENGE.statement}”
              </blockquote>
              <div className="greeto-challenge-context">
                {GREETO_CHALLENGE.context.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 05 — REDESIGN OBJECTIVES */}
        <section className="greeto-section">
          <div className="container">
            <div className="greeto-section-head" data-reveal>
              <span className="greeto-section-num">
                {GREETO_OBJECTIVES.sectionNumber} — {GREETO_OBJECTIVES.eyebrow}
              </span>
              <h2 className="greeto-section-title">{GREETO_OBJECTIVES.heading}</h2>
            </div>

            <div className="greeto-objectives-grid" data-reveal>
              {GREETO_OBJECTIVES.items.map((obj) => (
                <article key={obj.number} className="greeto-objective-card interactive-glow-card">
                  <span className="greeto-card-index">{obj.number}</span>
                  <h3>{obj.title}</h3>
                  <p>{obj.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 06 — INFORMATION ARCHITECTURE */}
        <section id="redesign" className="greeto-section greeto-anchor-section">
          <div className="container">
            <div className="greeto-section-head" data-reveal>
              <span className="greeto-section-num">
                {GREETO_IA.sectionNumber} — {GREETO_IA.eyebrow}
              </span>
              <h2 className="greeto-section-title">{GREETO_IA.heading}</h2>
              <p className="greeto-section-lead">{GREETO_IA.intro}</p>
            </div>

            <div className="greeto-ia-tree" data-reveal>
              <div className="greeto-ia-root">
                <span className="greeto-ia-root-badge">PERSISTENT SHELL</span>
                <h3>{GREETO_IA.root.name}</h3>
                <p>{GREETO_IA.root.subtitle}</p>
              </div>

              <div className="greeto-ia-stem" aria-hidden="true" />
              <div className="greeto-ia-crossbar" aria-hidden="true" />

              <div className="greeto-ia-branches">
                {GREETO_IA.branches.map((branch) => (
                  <div key={branch.group} className="greeto-ia-branch">
                    <div className="greeto-ia-branch-drop" aria-hidden="true" />
                    <div className="greeto-ia-branch-head">{branch.group}</div>
                    <div className="greeto-ia-nodes">
                      {branch.nodes.map((node) => (
                        <div key={node.name} className="greeto-ia-node interactive-glow-card">
                          <h4>{node.name}</h4>
                          <p>{node.detail}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 07 — BEFORE AND AFTER */}
        <section className="greeto-section">
          <div className="container">
            <div className="greeto-section-head" data-reveal>
              <span className="greeto-section-num">
                {GREETO_BEFORE_AFTER.sectionNumber} — {GREETO_BEFORE_AFTER.eyebrow}
              </span>
              <h2 className="greeto-section-title">{GREETO_BEFORE_AFTER.heading}</h2>
              <p className="greeto-section-lead">{GREETO_BEFORE_AFTER.intro}</p>
            </div>

            <div data-reveal>
              <BeforeAfterComparator
                beforeSlot={GREETO_IMAGE_SLOTS.originalPurple}
                afterSrc={GREETO_BEFORE_AFTER.afterImage}
                beforeCaption={GREETO_BEFORE_AFTER.beforeCaption}
                afterCaption={GREETO_BEFORE_AFTER.afterCaption}
                onOpenLightbox={openSingleLightbox}
              />
            </div>

            <div className="greeto-ba-annotations" data-reveal>
              {GREETO_BEFORE_AFTER.annotations.map((note) => (
                <div key={note.area} className="greeto-ba-note interactive-glow-card">
                  <h4>{note.area}</h4>
                  <div className="greeto-ba-pair">
                    <span className="is-before-label">Before</span>
                    <p>{note.before}</p>
                  </div>
                  <div className="greeto-ba-pair">
                    <span className="is-after-label">After</span>
                    <p>{note.after}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 08 — DESIGN SYSTEM */}
        <section id="design-system" className="greeto-section greeto-anchor-section">
          <div className="container">
            <div className="greeto-section-head" data-reveal>
              <span className="greeto-section-num">
                {GREETO_DESIGN_SYSTEM.sectionNumber} — {GREETO_DESIGN_SYSTEM.eyebrow}
              </span>
              <h2 className="greeto-section-title">{GREETO_DESIGN_SYSTEM.heading}</h2>
              <p className="greeto-section-lead">{GREETO_DESIGN_SYSTEM.intro}</p>
            </div>

            <div className="greeto-ds-shell" data-reveal>
              <div className="greeto-ds-tabs" role="tablist" aria-label="Greeto design system layers">
                {GREETO_DESIGN_SYSTEM.categories.map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    role="tab"
                    aria-selected={activeDsTab === cat.id}
                    className={`greeto-ds-tab ${activeDsTab === cat.id ? 'is-active' : ''}`}
                    onClick={() => setActiveDsTab(cat.id)}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              <div className="greeto-ds-panel">
                <div className="greeto-ds-panel-header">
                  <h3>{activeDsCategory.title}</h3>
                  <p>{activeDsCategory.description}</p>
                </div>

                {activeDsCategory.type === 'colors' && (
                  <div className="greeto-swatch-grid">
                    {activeDsCategory.swatches.map((swatch) => (
                      <div key={swatch.name} className="greeto-swatch-card">
                        <div
                          className="greeto-swatch-color"
                          style={{ background: swatch.hex.split(' / ')[0] }}
                        >
                          <span>{swatch.hex}</span>
                        </div>
                        <div className="greeto-swatch-info">
                          <h4>{swatch.name}</h4>
                          <p>{swatch.role}</p>
                          <span className="greeto-swatch-note">{swatch.note}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {activeDsCategory.type === 'typography' && (
                  <div className="greeto-type-stack">
                    <div className="greeto-placeholder-notice">
                      {activeDsCategory.specStatus}
                    </div>
                    {activeDsCategory.scales.map((row) => (
                      <div key={row.token} className="greeto-type-row">
                        <span className="greeto-type-token">{row.token}</span>
                        <span className="greeto-type-sample">{row.sample}</span>
                        <span className="greeto-type-spec">{row.spec}</span>
                      </div>
                    ))}
                  </div>
                )}

                {activeDsCategory.type === 'controls' && (
                  <div className="greeto-controls-showcase">
                    <ul className="greeto-controls-list">
                      {activeDsCategory.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                    <div className="greeto-ds-two-screens">
                      {activeDsCategory.previewScreens.map((src, i) => (
                        <ScreenFrame
                          key={src}
                          src={src}
                          alt={`Greeto button and modal form controls ${i + 1}`}
                          caption={
                            i === 0
                              ? 'Add Contact Dialog · Standardized Form Controls'
                              : 'Campaign Composer · Inputs, Compliance Switch & Preview'
                          }
                          onOpenLightbox={openSingleLightbox}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {activeDsCategory.type === 'badges' && (
                  <div className="greeto-badges-stage">
                    <div className="greeto-badges-row">
                      {activeDsCategory.badges.map((badge) => (
                        <span
                          key={badge.label}
                          className={`greeto-system-badge is-${badge.tone}`}
                        >
                          <span className="greeto-badge-dot" aria-hidden="true" />
                          {badge.label}
                        </span>
                      ))}
                    </div>
                    <p className="greeto-badges-caption">
                      High-contrast dot indicators preserve legibility across tables, activity drawers,
                      and real-time chat headers.
                    </p>
                  </div>
                )}

                {activeDsCategory.type === 'screens' && (
                  <div className="greeto-ds-two-screens">
                    {activeDsCategory.screens.map((item) => (
                      <ScreenFrame
                        key={item.src}
                        src={item.src}
                        alt={item.caption}
                        caption={item.caption}
                        onOpenLightbox={openSingleLightbox}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 09 — KEY PRODUCT MODULES */}
        <section id="features" className="greeto-section greeto-anchor-section">
          <div className="container">
            <div className="greeto-section-head" data-reveal>
              <span className="greeto-section-num">09 — KEY PRODUCT MODULES</span>
              <h2 className="greeto-section-title">Seven core modules redesigned end to end.</h2>
              <p className="greeto-section-lead">
                Each module balances dense enterprise data with clear primary workflows and reusable
                UI components. Toggle secondary states directly inside each showcase or click any
                screen to inspect full resolution.
              </p>
            </div>

            <div className="greeto-modules-stack">
              {GREETO_MODULES.map((mod, idx) => {
                const isReversed = idx % 2 === 1;
                const activeView = moduleViews[mod.number] || 'primary';
                const currentImg =
                  activeView === 'secondary' && mod.secondaryImage ? mod.secondaryImage : mod.image;
                const currentSlot =
                  activeView === 'primary' && mod.slotConfig ? mod.slotConfig : null;

                return (
                  <article
                    key={mod.number}
                    className={`greeto-module-row ${isReversed ? 'is-reversed' : ''}`}
                    data-reveal
                  >
                    <div className="greeto-module-copy">
                      <div className="greeto-module-top">
                        <span className="greeto-module-num">MODULE {mod.number}</span>
                        <h3>{mod.name}</h3>
                      </div>

                      <div className="greeto-module-block">
                        <span className="greeto-mini-label">User Need</span>
                        <p>{mod.userNeed}</p>
                      </div>

                      <div className="greeto-module-block">
                        <span className="greeto-mini-label">Design Approach</span>
                        <p>{mod.designApproach}</p>
                      </div>

                      <div className="greeto-module-block">
                        <span className="greeto-mini-label">Key Functionality</span>
                        <ul className="greeto-module-list">
                          {mod.functionality.map((fn) => (
                            <li key={fn}>{fn}</li>
                          ))}
                        </ul>
                      </div>

                      {mod.secondaryImage && (
                        <div className="greeto-state-toggle" role="group" aria-label={`${mod.name} view switcher`}>
                          <button
                            type="button"
                            className={`greeto-toggle-btn ${activeView === 'primary' ? 'is-active' : ''}`}
                            onClick={() => toggleModuleView(mod.number, 'primary')}
                          >
                            Primary View
                          </button>
                          <button
                            type="button"
                            className={`greeto-toggle-btn ${activeView === 'secondary' ? 'is-active' : ''}`}
                            onClick={() => toggleModuleView(mod.number, 'secondary')}
                          >
                            Alternate State
                          </button>
                        </div>
                      )}
                    </div>

                    <div className="greeto-module-media">
                      <ScreenFrame
                        src={currentImg}
                        alt={`${mod.name} redesigned desktop interface`}
                        caption={mod.imageCaption}
                        slotConfig={currentSlot}
                        onOpenLightbox={openSingleLightbox}
                      />
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION 10 — WORKFLOW BUILDER */}
        <section id="workflow-builder" className="greeto-section greeto-anchor-section">
          <div className="container">
            <div className="greeto-section-head" data-reveal>
              <span className="greeto-section-num">
                {GREETO_WORKFLOW_JOURNEY.sectionNumber} — {GREETO_WORKFLOW_JOURNEY.eyebrow}
              </span>
              <h2 className="greeto-section-title">{GREETO_WORKFLOW_JOURNEY.heading}</h2>
              <p className="greeto-section-lead">{GREETO_WORKFLOW_JOURNEY.intro}</p>
            </div>

            <div className="greeto-wf-pillars" data-reveal>
              {GREETO_WORKFLOW_JOURNEY.pillars.map((pillar) => (
                <div key={pillar.title} className="greeto-wf-pillar interactive-glow-card">
                  <h4>{pillar.title}</h4>
                  <p>{pillar.description}</p>
                </div>
              ))}
            </div>

            <div className="greeto-wf-interactive" data-reveal>
              <div className="greeto-wf-steps-rail" role="tablist" aria-label="Workflow builder user journey">
                {GREETO_WORKFLOW_JOURNEY.steps.map((step, index) => (
                  <button
                    key={step.step}
                    type="button"
                    role="tab"
                    aria-selected={activeWorkflowStep === index}
                    className={`greeto-wf-step-btn ${activeWorkflowStep === index ? 'is-active' : ''}`}
                    onClick={() => setActiveWorkflowStep(index)}
                  >
                    <span className="greeto-wf-step-num">{step.step}</span>
                    <strong>{step.label}</strong>
                    <span className="greeto-wf-step-sub">{step.title}</span>
                  </button>
                ))}
              </div>

              <div className="greeto-wf-stage">
                <div className="greeto-wf-stage-meta">
                  <div>
                    <span className="greeto-mini-label">
                      {currentWorkflowStep.step} · {currentWorkflowStep.label}
                    </span>
                    <h3>{currentWorkflowStep.title}</h3>
                    <p>{currentWorkflowStep.description}</p>
                  </div>
                  <div className="greeto-wf-nav-arrows">
                    <button
                      type="button"
                      className="greeto-circle-btn"
                      onClick={() =>
                        setActiveWorkflowStep((prev) =>
                          (prev - 1 + GREETO_WORKFLOW_JOURNEY.steps.length) %
                          GREETO_WORKFLOW_JOURNEY.steps.length
                        )
                      }
                      aria-label="Previous workflow step"
                    >
                      <ChevronLeft size={16} />
                    </button>
                    <button
                      type="button"
                      className="greeto-circle-btn"
                      onClick={() =>
                        setActiveWorkflowStep(
                          (prev) => (prev + 1) % GREETO_WORKFLOW_JOURNEY.steps.length
                        )
                      }
                      aria-label="Next workflow step"
                    >
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>

                <ScreenFrame
                  src={currentWorkflowStep.screen}
                  alt={`Greeto Workflow Builder — ${currentWorkflowStep.title}`}
                  caption={`${currentWorkflowStep.step}: ${currentWorkflowStep.title}`}
                  onOpenLightbox={() =>
                    openLightboxWithItems(
                      GREETO_WORKFLOW_JOURNEY.steps.map((s) => ({
                        src: s.screen,
                        alt: `Workflow Builder — ${s.title}`,
                        caption: `${s.step} · ${s.label}: ${s.title}`,
                      })),
                      activeWorkflowStep
                    )
                  }
                />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 11 — INTERFACE STATES */}
        <section className="greeto-section">
          <div className="container">
            <div className="greeto-section-head" data-reveal>
              <span className="greeto-section-num">
                {GREETO_INTERFACE_STATES.sectionNumber} — {GREETO_INTERFACE_STATES.eyebrow}
              </span>
              <h2 className="greeto-section-title">{GREETO_INTERFACE_STATES.heading}</h2>
              <p className="greeto-section-lead">{GREETO_INTERFACE_STATES.intro}</p>
            </div>

            <div className="greeto-states-filter" role="tablist" aria-label="Filter interface states">
              {GREETO_INTERFACE_STATES.groups.map((grp) => (
                <button
                  key={grp.id}
                  type="button"
                  role="tab"
                  aria-selected={activeStateGroup === grp.id}
                  className={`greeto-filter-pill ${activeStateGroup === grp.id ? 'is-active' : ''}`}
                  onClick={() => setActiveStateGroup(grp.id)}
                >
                  {grp.label}
                </button>
              ))}
            </div>

            <div className="greeto-states-grid" data-reveal>
              {filteredStates.map((item, idx) => (
                <article key={`${item.feature}-${item.state}`} className="greeto-state-card">
                  <ScreenFrame
                    src={item.src}
                    alt={`${item.feature} — ${item.state}`}
                    onOpenLightbox={() =>
                      openLightboxWithItems(
                        filteredStates.map((s) => ({
                          src: s.src,
                          alt: `${s.feature} — ${s.state}`,
                          caption: `${s.feature} · ${s.state}: ${s.caption}`,
                        })),
                        idx
                      )
                    }
                  />
                  <div className="greeto-state-meta">
                    <span className="greeto-state-feature">{item.feature}</span>
                    <h4>{item.state}</h4>
                    <p>{item.caption}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 12 — FINAL DESIGN SHOWCASE */}
        <section className="greeto-section">
          <div className="container">
            <div className="greeto-section-head" data-reveal>
              <span className="greeto-section-num">12 — FINAL DESIGN SHOWCASE</span>
              <h2 className="greeto-section-title">Unified system across every touchpoint.</h2>
              <p className="greeto-section-lead">
                High-resolution desktop mockups pairing the primary Workspace Dashboard with the
                omnichannel 3-pane Conversations workspace. Select either screen to inspect at full
                scale.
              </p>
            </div>

            {/* Layered Overlap Composition */}
            <div className="greeto-overlap-stage" data-reveal>
              <div className="greeto-overlap-back">
                <ScreenFrame
                  src="/images/greeto-screens/screen_06.jpg"
                  alt="Greeto Conversations 3-Pane Inbox"
                  caption="Conversations · Omnichannel 3-Pane Inbox"
                  onOpenLightbox={() =>
                    openLightboxWithItems(
                      GREETO_SHOWCASE_GALLERY.map((g) => ({
                        src: g.src,
                        alt: g.title,
                        caption: `${g.category} — ${g.caption}`,
                      })),
                      1
                    )
                  }
                />
              </div>
              <div className="greeto-overlap-front">
                <ScreenFrame
                  src="/images/greeto-dashboard.jpg"
                  alt="Greeto Workspace Dashboard"
                  caption="Workspace Dashboard · Live Telemetry & Agent Workload"
                  onOpenLightbox={() =>
                    openLightboxWithItems(
                      GREETO_SHOWCASE_GALLERY.map((g) => ({
                        src: g.src,
                        alt: g.title,
                        caption: `${g.category} — ${g.caption}`,
                      })),
                      0
                    )
                  }
                />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 13 — OUTCOME AND LEARNINGS */}
        <section id="outcome" className="greeto-section greeto-anchor-section">
          <div className="container">
            <div className="greeto-section-head" data-reveal>
              <span className="greeto-section-num">
                {GREETO_OUTCOME.sectionNumber} — {GREETO_OUTCOME.eyebrow}
              </span>
              <h2 className="greeto-section-title">{GREETO_OUTCOME.heading}</h2>
              <p className="greeto-section-lead">{GREETO_OUTCOME.summary}</p>
            </div>

            <div className="greeto-learnings-grid" data-reveal>
              {GREETO_OUTCOME.learnings.map((item, idx) => (
                <article key={item.title} className="greeto-learning-card interactive-glow-card">
                  <span className="greeto-card-index">0{idx + 1}</span>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </article>
              ))}
            </div>

            <footer className="greeto-next-footer" data-reveal>
              <div className="greeto-next-copy">
                <span className="greeto-next-kicker">NEXT CASE STUDY</span>
                <h3>Acadly — Mobile EdTech App</h3>
                <p>
                  Mobile-first student learning platform combining live courses, assessments, and
                  gamified progress tracking.
                </p>
              </div>
              <div className="greeto-next-actions">
                <button type="button" onClick={onBack} className="btn-secondary">
                  <ArrowLeft size={15} aria-hidden="true" />
                  <span>Back to Projects</span>
                </button>
                <button
                  type="button"
                  onClick={() => onSelectCaseStudy('acadly')}
                  className="btn-primary"
                >
                  <span>Next Project: Acadly</span>
                  <ArrowRight size={15} aria-hidden="true" />
                </button>
              </div>
            </footer>
          </div>
        </section>
      </main>

      {/* Lightbox Modal */}
      {activeLightboxItem && (
        <div
          className="greeto-lightbox-backdrop"
          role="dialog"
          aria-modal="true"
          aria-label={activeLightboxItem.alt}
          onClick={closeLightbox}
        >
          <div className="greeto-lightbox-frame" onClick={(e) => e.stopPropagation()}>
            <div className="greeto-lightbox-bar">
              <span className="greeto-lightbox-caption">
                {activeLightboxItem.caption || activeLightboxItem.alt}
              </span>
              <div className="greeto-lightbox-controls">
                {lightboxItems.length > 1 && (
                  <span className="greeto-lightbox-counter">
                    {lightboxIndex + 1} / {lightboxItems.length}
                  </span>
                )}
                <button
                  type="button"
                  className="greeto-lightbox-close"
                  onClick={closeLightbox}
                  aria-label="Close lightbox"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            <div className="greeto-lightbox-stage">
              {lightboxItems.length > 1 && (
                <button
                  type="button"
                  className="greeto-lightbox-arrow is-prev"
                  onClick={() => stepLightbox(-1)}
                  aria-label="Previous image"
                >
                  <ChevronLeft size={22} />
                </button>
              )}

              <img src={activeLightboxItem.src} alt={activeLightboxItem.alt} />

              {lightboxItems.length > 1 && (
                <button
                  type="button"
                  className="greeto-lightbox-arrow is-next"
                  onClick={() => stepLightbox(1)}
                  aria-label="Next image"
                >
                  <ChevronRight size={22} />
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
