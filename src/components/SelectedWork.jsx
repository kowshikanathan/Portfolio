import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { CASE_STUDIES } from '../data/caseStudies';
import ScrollVideo from './ScrollVideo';
import TiltCard3D from './TiltCard3D';
import { ProjectThumbnailMockup } from './ProjectMockups';
import './SelectedWork.css';

export default function SelectedWork({ onSelectCaseStudy }) {
  const featuredProjects = CASE_STUDIES.filter((p) => p.featured);

  return (
    <section id="projects" className="scene-section projects-section">
      <div className="scene-divider" aria-hidden="true" />

      <div className="container">
        {/* Cinematic Project Intro Header */}
        <div className="projects-intro-grid">
          <div className="projects-intro-copy">
            <div className="scene-kicker" data-reveal>
              <span className="scene-kicker-dot" aria-hidden="true" />
              <span>04 — Selected Projects</span>
            </div>

            <h2 className="scene-heading" data-reveal data-reveal-delay="0.06">
              Ideas Turned Into <span className="accent-word">Experiences.</span>
            </h2>

            <p className="scene-lead projects-lead" data-reveal data-reveal-delay="0.12">
              Real product interfaces, mobile flows, and SaaS dashboards designed from user
              research through high-fidelity design systems.
            </p>
          </div>

          <div className="projects-intro-video" data-parallax="-14">
            <div className="projects-video-frame">
              <ScrollVideo
                src="/videos/project.mp4"
                poster="/videos/posters/project.jpg"
                fallbackPoster="/videos/posters/project-end.jpg"
                mode="scroll"
                aspectRatio="16 / 9"
                fit="contain"
                objectPosition="50% 50%"
                seamless={true}
                ariaLabel="3D character of Kowshika presenting product work on a laptop at a studio desk"
              />
            </div>
          </div>
        </div>

        {/* Featured Projects (Greeto, Acadly, Learnex) */}
        <div className="featured-projects-list">
          {featuredProjects.map((project, index) => (
            <article
              key={project.id}
              className={`project-featured-row ${index % 2 === 1 ? 'is-reversed' : ''}`}
              data-reveal
            >
              <div className="project-featured-visual">
                <TiltCard3D maxTilt={6} scale={1.015} glare={true}>
                  <ProjectThumbnailMockup project={project} />
                </TiltCard3D>
              </div>

              <div className="project-featured-content">
                <div className="project-meta-top">
                  <span className="project-index">0{index + 1}</span>
                  <span className="project-category">{project.category}</span>
                </div>

                <h3 className="project-featured-title">{project.title}</h3>
                <p className="project-featured-desc">{project.description}</p>

                <div className="project-role-line">
                  <span className="project-role-label">Role</span>
                  <span className="project-role-value">{project.role}</span>
                </div>

                <div className="project-action-wrap">
                  <button
                    type="button"
                    className="btn-primary project-case-btn"
                    onClick={() => onSelectCaseStudy(project.id)}
                  >
                    <span>View Case Study</span>
                    <ArrowUpRight size={16} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
