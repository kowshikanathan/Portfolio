import React, { useEffect } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { CASE_STUDIES } from '../data/caseStudies';
import {
  AcademyWebsiteMockup,
  DodoConsoleMockup,
  LinkManagementMockup,
} from './ProjectMockups';
import './CaseStudy.css';

export default function CaseStudyPage({ study, onBack, onSelectCaseStudy }) {
  const [activeScreenIdx, setActiveScreenIdx] = React.useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [study.id]);

  const featuredStudies = CASE_STUDIES.filter((item) => item.featured);
  const currentIdx = featuredStudies.findIndex((item) => item.id === study.id);
  const nextStudy =
    currentIdx >= 0
      ? featuredStudies[(currentIdx + 1) % featuredStudies.length]
      : featuredStudies[0];

  return (
    <div className="case-study-shell">
      <header className="case-sticky-header">
        <div className="container case-header-inner">
          <button
            type="button"
            className="case-back-button"
            onClick={onBack}
            aria-label="Back to Selected Projects"
          >
            <ArrowLeft size={16} />
            <span>Back to Projects</span>
          </button>

          <a
            href="/Kowshika_S_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-resume-btn"
          >
            <span>Resume</span>
            <ArrowUpRight size={14} />
          </a>
        </div>
      </header>

      <main id="main-content" className="container case-main">
        {/* 01. Product Overview */}
        <section id="cs-overview" className="case-hero-block">
          <div className="scene-kicker">
            <span className="scene-kicker-dot" aria-hidden="true" />
            <span>{study.category}</span>
          </div>

          <h1 className="case-title">{study.title}</h1>
          <p className="case-subtitle">{study.subtitle}</p>

          <div className="case-meta-grid">
            <div className="case-meta-item">
              <span className="case-meta-label">Role</span>
              <span className="case-meta-value">{study.role}</span>
            </div>
            <div className="case-meta-item">
              <span className="case-meta-label">Scope</span>
              <span className="case-meta-value">{study.scope}</span>
            </div>
            <div className="case-meta-item">
              <span className="case-meta-label">Tools</span>
              <span className="case-meta-value">{study.tools.join(' · ')}</span>
            </div>
          </div>

          <div className="case-overview-card">
            <div className="case-section-label">01 — Product Overview</div>
            <p>{study.overview}</p>
          </div>
        </section>

        {/* 02. Product Objective */}
        <section id="cs-objective" className="case-section">
          <div className="case-section-label">02 — Product Objective</div>
          <h2 className="case-objective-statement">{study.productObjective}</h2>
        </section>

        {/* 03. Target Users */}
        <section id="cs-users" className="case-section">
          <div className="case-section-label">03 — Target Users</div>
          <h2 className="case-section-heading">Who the product serves</h2>

          <div className="case-users-grid">
            {study.targetUsers.map((user) => (
              <div key={user.group} className="case-feature-card">
                <h3>{user.group}</h3>
                <p>{user.need}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 04. Problem Statement */}
        <section id="cs-problem" className="case-section">
          <div className="case-section-label">04 — Problem Statement</div>
          <h2 className="case-section-heading">Challenges addressed</h2>
          <p className="case-section-lead">{study.problem.summary}</p>

          <ul className="case-points-grid">
            {study.problem.points.map((point) => (
              <li key={point} className="case-point-card">
                <span className="case-point-dot" aria-hidden="true" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* 05. My Role and Responsibilities */}
        <section id="cs-role" className="case-section">
          <div className="case-section-label">05 — My Role &amp; Responsibilities</div>
          <h2 className="case-section-heading">{study.role}</h2>

          <div className="case-objectives-list">
            {study.responsibilities.map((item, idx) => (
              <div key={item} className="case-objective-row">
                <span className="case-objective-num">0{idx + 1}</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 06. Core Product Features (Completed Designs vs. Ecosystem Architecture) */}
        <section id="cs-features" className="case-section">
          <div className="case-section-label">06 — Core Product Features</div>
          <h2 className="case-section-heading">Completed interfaces &amp; product scope</h2>

          <div className="case-capability-group">
            <div className="case-capability-badge">Completed High-Fidelity Screens</div>
            <div className="case-features-grid">
              {study.coreCapabilities.completedScreens.map((feat) => (
                <div key={feat.title} className="case-feature-card">
                  <h3>{feat.title}</h3>
                  <p>{feat.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="case-capability-group">
            <div className="case-capability-badge is-muted">
              Broader Product Modules in Architecture &amp; Navigation
            </div>
            <div className="case-features-grid">
              {study.coreCapabilities.plannedEcosystem.map((feat) => (
                <div key={feat.title} className="case-feature-card">
                  <h3>{feat.title}</h3>
                  <p>{feat.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 07. Design Process */}
        <section id="cs-process" className="case-section">
          <div className="case-section-label">07 — Design Process</div>
          <h2 className="case-section-heading">Structured product workflow</h2>

          <div className="case-process-grid">
            {study.process.map((step) => (
              <div key={step.phase} className="case-process-card">
                <h3>{step.phase}</h3>
                <p>{step.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 08. User Flows and Information Architecture */}
        <section id="cs-ia" className="case-section">
          <div className="case-section-label">08 — User Flows &amp; Information Architecture</div>
          <h2 className="case-section-heading">Navigation structure &amp; primary flow</h2>

          <div className="case-ia-list">
            {study.flowsAndIA.iaModules.map((mod) => (
              <div key={mod} className="case-ia-row">
                <span className="case-point-dot" aria-hidden="true" />
                <span>{mod}</span>
              </div>
            ))}
          </div>

          <div className="case-flow-strip" aria-label="Primary user flow">
            {study.flowsAndIA.userFlow.map((step, idx) => (
              <React.Fragment key={step}>
                <span className="case-flow-node">{step}</span>
                {idx < study.flowsAndIA.userFlow.length - 1 && (
                  <span className="case-flow-arrow" aria-hidden="true">→</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </section>

        {/* 09. Design System */}
        <section id="cs-system" className="case-section">
          <div className="case-section-label">09 — Design System</div>
          <h2 className="case-section-heading">Visual foundations &amp; tokens</h2>
          <p className="case-section-lead">{study.designSystem.summary}</p>

          <div className="case-features-grid">
            {study.designSystem.tokens.map((tok) => (
              <div key={tok.label} className="case-feature-card">
                <h3>{tok.label}</h3>
                <p>{tok.value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 10. High-Fidelity Interface Showcase */}
        <section id="cs-final-ui" className="case-section">
          <div className="case-section-label">10 — High-Fidelity Interface Showcase</div>
          <h2 className="case-section-heading">Product screens &amp; UI craftsmanship</h2>

          {study.screens && study.id === 'acadly' && (
            <div className="case-mobile-gallery">
              {study.screens.map((scr) => (
                <figure key={scr.id} className="case-mobile-figure">
                  <div className="case-mobile-device">
                    <img src={scr.image} alt={scr.label} loading="lazy" />
                  </div>
                  <figcaption>{scr.caption}</figcaption>
                </figure>
              ))}
            </div>
          )}

          {study.screens && study.id !== 'acadly' && (
            <div className="case-desktop-gallery">
              <div className="case-screen-tabs" role="tablist" aria-label="Project UI views">
                {study.screens.map((scr, idx) => (
                  <button
                    key={scr.id}
                    type="button"
                    role="tab"
                    aria-selected={activeScreenIdx === idx}
                    className={`case-screen-tab ${activeScreenIdx === idx ? 'is-active' : ''}`}
                    onClick={() => setActiveScreenIdx(idx)}
                  >
                    {scr.label}
                  </button>
                ))}
              </div>

              <figure className="case-desktop-figure">
                <div className="case-desktop-frame">
                  <img
                    src={study.screens[activeScreenIdx].image}
                    alt={study.screens[activeScreenIdx].label}
                  />
                </div>
                <figcaption>{study.screens[activeScreenIdx].caption}</figcaption>
              </figure>
            </div>
          )}

          {study.uiType === 'link-management' && (
            <div className="case-interactive-wrap">
              <LinkManagementMockup />
              <p className="case-interactive-caption">
                Interactive file-sharing view — try typing in the search bar or clicking Copy Link.
              </p>
            </div>
          )}

          {study.uiType === 'dodo' && (
            <div className="case-interactive-wrap">
              <DodoConsoleMockup />
              <p className="case-interactive-caption">
                Interactive Collections Console preview — inspect KPI summary cards, operational tiles, and sidebar states.
              </p>
            </div>
          )}

          {study.uiType === 'academy' && (
            <div className="case-interactive-wrap">
              <AcademyWebsiteMockup />
              <p className="case-interactive-caption">
                Responsive hero layout combining top batch urgency, mentorship overview, and a concise counselling form.
              </p>
            </div>
          )}
        </section>

        {/* 11. Key Design Decisions */}
        <section id="cs-decisions" className="case-section">
          <div className="case-section-label">11 — Key Design Decisions</div>
          <h2 className="case-section-heading">Choices that shaped the experience</h2>

          <div className="case-features-grid">
            {study.keyDecisions.map((dec) => (
              <div key={dec.title} className="case-feature-card">
                <h3>{dec.title}</h3>
                <p>{dec.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 12. Learnings and Takeaways */}
        <section id="cs-learnings" className="case-section">
          <div className="case-section-label">12 — Learnings &amp; Takeaways</div>
          <h2 className="case-section-heading">Product &amp; craft reflections</h2>

          <ul className="case-learnings-list">
            {study.learnings.map((item) => (
              <li key={item} className="case-learning-row">
                <CheckCircle2 size={18} className="case-learning-icon" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Case Study Footer Navigation */}
        <section className="case-bottom-nav">
          <button type="button" className="btn-secondary" onClick={onBack}>
            <ArrowLeft size={16} />
            <span>All Selected Projects</span>
          </button>

          <button
            type="button"
            className="btn-primary"
            onClick={() => onSelectCaseStudy(nextStudy.id)}
          >
            <span>Next: {nextStudy.title}</span>
            <ArrowRight size={16} />
          </button>
        </section>
      </main>
    </div>
  );
}
