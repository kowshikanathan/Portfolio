import React from 'react';
import ScrollVideo from './ScrollVideo';
import './CreativeToolkit.css';

const designSkills = [
  'UX Research',
  'UI Design',
  'Wireframing',
  'Prototyping',
  'Design Systems',
  'Interaction Design',
];

const developmentSkills = ['HTML', 'CSS'];

const tools = [
  {
    name: 'Figma',
    role: 'Interface & Systems',
    svg: (
      <svg viewBox="0 0 24 36" aria-hidden="true" width="22" height="30">
        <path fill="#f24e1e" d="M12 0H6a6 6 0 000 12h6z" />
        <path fill="#ff7262" d="M12 0h6a6 6 0 010 12h-6z" />
        <path fill="#a259ff" d="M0 18a6 6 0 016-6h6v12H6a6 6 0 01-6-6z" />
        <circle fill="#1abcfe" cx="18" cy="18" r="6" />
        <path fill="#0acf83" d="M0 30a6 6 0 016-6h6v6a6 6 0 01-12 0z" />
      </svg>
    ),
  },
  {
    name: 'Framer',
    role: 'Interactive Prototyping',
    svg: (
      <svg viewBox="0 0 14 21" aria-hidden="true" width="20" height="26">
        <path fill="currentColor" d="M0 0h14v7H7zM0 7h7l7 7H7v7L0 14z" />
      </svg>
    ),
  },
  {
    name: 'Photopea',
    role: 'Image Editing & Assets',
    svg: (
      <svg viewBox="0 0 24 24" aria-hidden="true" width="24" height="24">
        <circle cx="12" cy="12" r="11" fill="#18a0fb" />
        <path fill="#fff" d="M8.5 6h4.2a3.6 3.6 0 010 7.2H10.7V18H8.5zm2.2 2v3.2h2a1.6 1.6 0 000-3.2z" />
      </svg>
    ),
  },
  {
    name: 'Behance',
    role: 'Case Study Showcase',
    svg: (
      <svg viewBox="0 0 24 24" aria-hidden="true" width="24" height="24">
        <rect width="24" height="24" rx="5" fill="#1769ff" />
        <text
          x="12"
          y="16"
          textAnchor="middle"
          fontFamily="Space Grotesk, Inter, sans-serif"
          fontSize="10"
          fontWeight="700"
          fill="#fff"
        >
          Bē
        </text>
      </svg>
    ),
  },
  {
    name: 'Antigravity',
    role: 'AI-Assisted Design & Web',
    svg: (
      <svg viewBox="0 0 24 24" aria-hidden="true" width="24" height="24">
        <path fill="#FF7900" d="M12 2L2 21h4.4l1.6-3.2h8l1.6 3.2H22zm0 7.6L14.6 15H9.4z" />
        <path fill="#FFB45B" d="M12 2l3.2 6.4-3.2-1.6z" />
      </svg>
    ),
  },
  {
    name: 'Visual Studio Code',
    role: 'Code & Architecture',
    svg: (
      <svg viewBox="0 0 24 24" aria-hidden="true" width="24" height="24">
        <path
          fill="#1f9cf0"
          fillRule="evenodd"
          d="M23 3.5v17l-5.5 2.5L7 14l-4 3-1.5-1V8L3 7l4 3 10.5-9zM17.5 8L11 12l6.5 4z"
        />
      </svg>
    ),
  },
  {
    name: 'GitHub',
    role: 'Version Control & CI',
    svg: (
      <svg viewBox="0 0 16 16" aria-hidden="true" width="24" height="24">
        <path
          fill="currentColor"
          d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
        />
      </svg>
    ),
  },
  {
    name: 'Revit',
    role: '3D Spatial Modeling',
    svg: (
      <svg viewBox="0 0 24 24" aria-hidden="true" width="24" height="24">
        <rect width="24" height="24" rx="5" fill="#2f6fd0" />
        <text
          x="12"
          y="17"
          textAnchor="middle"
          fontFamily="Space Grotesk, Inter, sans-serif"
          fontSize="14"
          fontWeight="700"
          fill="#fff"
        >
          R
        </text>
      </svg>
    ),
  },
  {
    name: 'AutoCAD',
    role: 'Technical Drafting',
    svg: (
      <svg viewBox="0 0 24 24" aria-hidden="true" width="24" height="24">
        <rect width="24" height="24" rx="5" fill="#e51050" />
        <text
          x="12"
          y="17"
          textAnchor="middle"
          fontFamily="Space Grotesk, Inter, sans-serif"
          fontSize="14"
          fontWeight="700"
          fill="#fff"
        >
          A
        </text>
      </svg>
    ),
  },
];

export default function CreativeToolkit() {
  return (
    <section id="skills" className="scene-section toolkit-section">
      <div className="scene-divider" aria-hidden="true" />

      <div className="container">
        <div className="toolkit-hero-row">
          <div className="toolkit-header-col">
            <div className="scene-kicker" data-reveal>
              <span className="scene-kicker-dot" aria-hidden="true" />
              <span>03 — Skills &amp; Tools</span>
            </div>

            <h2 className="scene-heading" data-reveal data-reveal-delay="0.06">
              My Creative <span className="accent-word">Toolkit.</span>
            </h2>

            <p className="scene-lead toolkit-lead" data-reveal data-reveal-delay="0.12">
              A focused discipline across UX strategy, visual craft, and responsive web interfaces
              — combining product design tools with clean HTML and CSS.
            </p>
          </div>

          <div className="toolkit-video-col" data-parallax="-14">
            <div className="toolkit-video-frame">
              <ScrollVideo
                src="/videos/Skill.mp4"
                poster="/videos/posters/Skill.jpg"
                fallbackPoster="/videos/posters/Skill-end.jpg"
                mode="scroll"
                aspectRatio="16 / 9"
                fit="contain"
                objectPosition="50% 50%"
                seamless={true}
                ariaLabel="3D character of Kowshika introducing her dark studio creative desk and laptop workspace"
              />
            </div>
          </div>
        </div>

        {/* Structured Three-Category Matrix */}
        <div className="toolkit-categories">
          <div className="toolkit-band" data-reveal>
            <div className="toolkit-band-label">
              <span className="band-index">01</span>
              <h3>Design</h3>
            </div>
            <div className="toolkit-pill-group">
              {designSkills.map((skill) => (
                <span key={skill} className="toolkit-skill-pill">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="toolkit-band" data-reveal data-reveal-delay="0.06">
            <div className="toolkit-band-label">
              <span className="band-index">02</span>
              <h3>Development</h3>
            </div>
            <div className="toolkit-pill-group">
              {developmentSkills.map((skill) => (
                <span key={skill} className="toolkit-skill-pill">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="toolkit-band toolkit-band-tools" data-reveal data-reveal-delay="0.12">
            <div className="toolkit-band-label">
              <span className="band-index">03</span>
              <h3>Tools</h3>
            </div>
            <div className="toolkit-tools-grid">
              {tools.map((tool) => (
                <div key={tool.name} className="toolkit-tool-item">
                  <div className="toolkit-tool-icon">{tool.svg}</div>
                  <div className="toolkit-tool-text">
                    <span className="toolkit-tool-name">{tool.name}</span>
                    <span className="toolkit-tool-role">{tool.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
