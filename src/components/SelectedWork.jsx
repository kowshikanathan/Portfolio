import React from 'react';
import TiltCard3D from './TiltCard3D';
import { Layers, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: 'link-management',
    title: 'Link Management Website',
    desc: 'A clean, easy-to-use website for creating, organizing and sharing links. I designed the full experience.',
    thumb: '/images/project-ziplin.webp',
    tags: ['UX/UI Design', 'Web', 'Information Architecture'],
    caseStudyId: 'link-management',
    status: 'View case study',
    highlight: 'Featured Case',
  },
  {
    id: 'academy',
    title: 'Academy Website',
    desc: 'A website for an academy that helps students find courses and get in touch with ease.',
    thumb: '/images/project-academy.webp',
    tags: ['UX/UI Design', 'Web', 'Course Portal'],
    caseStudyId: 'academy',
    status: 'View case study',
    highlight: 'EdTech Platform',
  },
  {
    id: 'fee-management',
    title: 'Fee Management Website',
    desc: 'An ongoing project: a fee management platform inspired by Jodo, making fee payments simple for schools and parents. I’m designing it and building the frontend.',
    thumb: '/images/project-fee-management.webp',
    tags: ['UX/UI Design', 'Frontend', 'React', 'Ongoing'],
    caseStudyId: 'fee-management',
    status: 'View case study',
    isOngoing: true,
    highlight: 'Fintech & EdTech',
  },
  {
    id: 'beauty-app',
    title: 'Beauty Shopping App',
    desc: 'An app that simplifies skincare routines and product discovery, with personalized picks from a skin-type quiz and AI skin analysis through the camera.',
    thumb: '/images/project-beauty-app.webp',
    tags: ['UX Research', 'UI Design', 'iOS & Android'],
    caseStudyId: 'beauty-app',
    status: 'View case study',
    highlight: 'Mobile Experience',
  },
];

export default function SelectedWork({ onSelectCaseStudy }) {
  return (
    <section id="projects" className="projects-3d-section">
      <div className="wrap">
        <div className="section-eyebrow-center">
          <span className="eyebrow-pill">
            <Layers size={13} />
            FEATURED PORTFOLIO
          </span>
        </div>

        <h2>My <b>Projects</b></h2>
        <p className="sub">Interactive 3D showcase of my recent design and frontend work</p>

        <div className="grid g3 projects-3d-grid">
          {projects.map((p, idx) => (
            <TiltCard3D
              key={idx}
              className="card project-3d-card"
              maxTilt={14}
              scale={1.03}
              perspective={1100}
              glare={true}
            >
              <div className="project-card-inner">
                {/* 3D Floating Thumbnail */}
                <div className="thumb tilt-pop-md project-thumb-3d">
                  <img src={p.thumb} alt={p.title} loading="lazy" />
                  <div className="project-badge-highlight tilt-pop-lg">
                    {p.highlight}
                  </div>
                </div>

                <div className="project-info-3d tilt-pop-sm">
                  <h3 className="project-title-3d">{p.title}</h3>
                  <p className="project-desc-3d">{p.desc}</p>

                  <div className="tags tilt-pop-sm">
                    {p.tags.map((t, tIdx) => (
                      <span key={tIdx} className="project-tag-pill">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="project-action-row tilt-pop-md">
                    {p.caseStudyId ? (
                      <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 10 }}>
                        <button
                          type="button"
                          className="go project-link-3d"
                          onClick={() => onSelectCaseStudy && onSelectCaseStudy(p.caseStudyId)}
                          style={{ border: 'none', cursor: 'pointer' }}
                        >
                          <span>{p.status}</span>
                          <ArrowUpRight size={15} className="link-arrow-icon" />
                        </button>

                        {p.isOngoing && (
                          <span className="ongoing-pill" title="Project is currently active & ongoing">
                            <span className="pulse-dot"></span>
                            Ongoing
                          </span>
                        )}
                      </div>
                    ) : p.link ? (
                      <a
                        className="go project-link-3d"
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span>{p.status}</span>
                        <ArrowUpRight size={15} className="link-arrow-icon" />
                      </a>
                    ) : (
                      <span className="soon project-status-pill">{p.status}</span>
                    )}
                  </div>
                </div>
              </div>
            </TiltCard3D>
          ))}
        </div>
      </div>
    </section>
  );
}

