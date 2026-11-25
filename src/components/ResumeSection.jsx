import React from 'react';
import { Download, FileText } from 'lucide-react';
import ScrollVideo from './ScrollVideo';
import './ResumeSection.css';

const experienceList = [
  {
    period: '4 Months',
    role: 'UX/UI Designer Intern',
    org: 'NorthStar Academy',
    summary:
      'Designed UI/UX layouts for website landing pages and operational dashboards in Figma, built Link Management and Fees Management web interfaces in HTML and CSS, and collaborated via GitHub.',
  },
  {
    period: '2024 – 2025',
    role: 'Design & Coordination Support',
    org: 'Cafe Construction',
    summary:
      'Coordinated spatial planning and documentation across project stakeholders, translating requirements into clear, actionable specifications.',
  },
  {
    period: '2022 – 2023',
    role: 'Design Intern / Site Coordination',
    org: 'Rajparis & M.J. Engineering Construction',
    summary:
      'Supported architectural drafting, 2D/3D modeling, and multi-stakeholder technical documentation across residential and commercial projects.',
  },
];

const educationList = [
  {
    period: '2026',
    degree: 'Professional UX/UI Design Bootcamp',
    school: 'Design Boat School',
  },
  {
    period: '2018 – 2022',
    degree: 'B.E., Civil Engineering',
    school: 'SRM Easwari Engineering College, Chennai',
  },
];

export default function ResumeSection() {
  return (
    <section id="resume" className="scene-section resume-section">
      <div className="scene-divider" aria-hidden="true" />

      <div className="container resume-grid">
        <div className="resume-visual-col">
          <div className="resume-vertical-stage">
            <ScrollVideo
              src="/videos/resume.mp4"
              poster="/videos/posters/resume.jpg"
              fallbackPoster="/videos/posters/resume-end.jpg"
              mode="scroll"
              aspectRatio="9 / 16"
              fit="cover"
              objectPosition="50% 50%"
              seamless={true}
              className="resume-vertical-video"
              ariaLabel="3D character of Kowshika smiling and waving warmly toward the visitor"
            />
          </div>
        </div>

        <div className="resume-content-col">
          <div className="scene-kicker" data-reveal>
            <span className="scene-kicker-dot" aria-hidden="true" />
            <span>05 — Resume</span>
          </div>

          <h2 className="scene-heading" data-reveal data-reveal-delay="0.06">
            Experience &amp; <span className="accent-word">Background.</span>
          </h2>

          <p className="scene-lead resume-summary" data-reveal data-reveal-delay="0.12">
            UX/UI Designer experienced in user research, wireframing, prototyping, design systems,
            and responsive HTML/CSS layouts — comfortable from early product discovery through
            high-fidelity interface craft.
          </p>

          <div className="resume-block" data-reveal data-reveal-delay="0.16">
            <h3 className="resume-block-title">Experience</h3>
            <div className="resume-list">
              {experienceList.map((item) => (
                <div key={item.org} className="resume-item">
                  <div className="resume-item-head">
                    <div>
                      <h4>{item.role}</h4>
                      <span className="resume-org">{item.org}</span>
                    </div>
                    <span className="resume-period">{item.period}</span>
                  </div>
                  <p>{item.summary}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="resume-block" data-reveal data-reveal-delay="0.2">
            <h3 className="resume-block-title">Education</h3>
            <div className="resume-edu-grid">
              {educationList.map((edu) => (
                <div key={edu.degree} className="resume-edu-card">
                  <span className="resume-period">{edu.period}</span>
                  <h4>{edu.degree}</h4>
                  <span>{edu.school}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="resume-cta-row" data-reveal data-reveal-delay="0.24">
            <a
              href="/Kowshika_S_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <FileText size={16} />
              <span>View Resume</span>
            </a>

            <a
              href="/Kowshika_S_Resume.pdf"
              download="Kowshika_S_Resume.pdf"
              className="btn-secondary"
            >
              <Download size={16} />
              <span>Download PDF</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
