import React, { useState } from 'react';
import { Wrench } from 'lucide-react';

const tools = [
  {
    name: 'Figma',
    category: 'uiux',
    categoryLabel: 'UI/UX Design & Prototyping',
    badge: 'UI/UX DESIGN',
    desc: 'Interface design, scalable component libraries, and interactive prototype testing.',
    svg: (
      <svg viewBox="0 0 24 36" aria-hidden="true" width="26" height="36">
        <path fill="#f24e1e" d="M12 0H6a6 6 0 000 12h6z"/>
        <path fill="#ff7262" d="M12 0h6a6 6 0 010 12h-6z"/>
        <path fill="#a259ff" d="M0 18a6 6 0 016-6h6v12H6a6 6 0 01-6-6z"/>
        <circle fill="#1abcfe" cx="18" cy="18" r="6"/>
        <path fill="#0acf83" d="M0 30a6 6 0 016-6h6v6a6 6 0 01-12 0z"/>
      </svg>
    )
  },
  {
    name: 'Framer',
    category: 'uiux',
    categoryLabel: 'UI/UX Design & Prototyping',
    badge: 'UI/UX DESIGN',
    desc: 'High-fidelity micro-interactions, responsive canvas design, and direct web publishing.',
    svg: (
      <svg viewBox="0 0 14 21" aria-hidden="true" width="24" height="28">
        <path fill="currentColor" d="M0 0h14v7H7zM0 7h7l7 7H7v7L0 14z"/>
      </svg>
    )
  },
  {
    name: 'Photopea',
    category: 'creative',
    categoryLabel: 'Image Editing & Creative Inspiration',
    badge: 'IMAGE EDITING',
    desc: 'Vector asset refinement, advanced image masking, and raster graphics preparation.',
    svg: (
      <svg viewBox="0 0 24 24" aria-hidden="true" width="28" height="28">
        <circle cx="12" cy="12" r="11" fill="#18a0fb"/>
        <path fill="#fff" d="M8.5 6h4.2a3.6 3.6 0 010 7.2H10.7V18H8.5zm2.2 2v3.2h2a1.6 1.6 0 000-3.2z"/>
      </svg>
    )
  },
  {
    name: 'Behance',
    category: 'creative',
    categoryLabel: 'Creative Inspiration & Portfolios',
    badge: 'IMAGE EDITING',
    desc: 'Design trend exploration, moodboarding, and international UX/UI case study publishing.',
    svg: (
      <svg viewBox="0 0 24 24" aria-hidden="true" width="28" height="28">
        <rect width="24" height="24" rx="5" fill="#1769ff"/>
        <text x="12" y="16" textAnchor="middle" fontFamily="Poppins,Arial,sans-serif" fontSize="10" fontWeight="700" fill="#fff">Bē</text>
      </svg>
    )
  },
  {
    name: 'Antigravity',
    category: 'frontend',
    categoryLabel: 'Frontend Development',
    badge: 'FRONTEND DEVELOPMENT',
    desc: 'Full-stack frontend development, automated testing, and intelligent codebase engineering.',
    svg: (
      <svg viewBox="0 0 24 24" aria-hidden="true" width="28" height="28">
        <path fill="#4285f4" d="M12 2L2 21h4.4l1.6-3.2h8l1.6 3.2H22zm0 7.6L14.6 15H9.4z"/>
        <path fill="#ea4335" d="M12 2l3.2 6.4-3.2-1.6z"/>
      </svg>
    )
  },
  {
    name: 'Visual Studio Code',
    category: 'frontend',
    categoryLabel: 'Frontend Development',
    badge: 'FRONTEND DEVELOPMENT',
    desc: 'Modern React architecture, clean CSS styling, TypeScript integration, and modular workflow.',
    svg: (
      <svg viewBox="0 0 24 24" aria-hidden="true" width="28" height="28">
        <path fill="#1f9cf0" fillRule="evenodd" d="M23 3.5v17l-5.5 2.5L7 14l-4 3-1.5-1V8L3 7l4 3 10.5-9zM17.5 8L11 12l6.5 4z"/>
      </svg>
    )
  },
  {
    name: 'GitHub',
    category: 'frontend',
    categoryLabel: 'Frontend Development',
    badge: 'FRONTEND DEVELOPMENT',
    desc: 'Git workflow management, open-source repositories, and CI/CD continuous deployment.',
    svg: (
      <svg viewBox="0 0 16 16" aria-hidden="true" width="26" height="26">
        <path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
      </svg>
    )
  },
  {
    name: 'Revit',
    category: 'arch',
    categoryLabel: 'Architecture & Technical Design',
    badge: 'ARCHITECTURE & TECHNICAL',
    desc: 'Parametric 3D spatial modeling, architectural structures, and technical documentation.',
    svg: (
      <svg viewBox="0 0 24 24" aria-hidden="true" width="28" height="28">
        <rect width="24" height="24" rx="5" fill="#2f6fd0"/>
        <text x="12" y="17.5" textAnchor="middle" fontFamily="Poppins,Arial,sans-serif" fontSize="15" fontWeight="700" fill="#fff">R</text>
      </svg>
    )
  },
  {
    name: 'AutoCAD',
    category: 'arch',
    categoryLabel: 'Architecture & Technical Design',
    badge: 'ARCHITECTURE & TECHNICAL',
    desc: 'Precision 2D technical drawings, spatial schematics, and geometry-driven layouts.',
    svg: (
      <svg viewBox="0 0 24 24" aria-hidden="true" width="28" height="28">
        <rect width="24" height="24" rx="5" fill="#e51050"/>
        <text x="12" y="17.5" textAnchor="middle" fontFamily="Poppins,Arial,sans-serif" fontSize="15" fontWeight="700" fill="#fff">A</text>
      </svg>
    )
  }
];

const filters = [
  { id: 'all', label: 'All Tools' },
  { id: 'uiux', label: 'UI/UX Design' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'creative', label: 'Creative & Inspiration' },
  { id: 'arch', label: 'Architecture & Technical' },
];

export default function CreativeToolkit() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredTools = activeFilter === 'all'
    ? tools
    : tools.filter(t => t.category === activeFilter);

  return (
    <section id="skills" className="toolkit-section">
      <div className="wrap">
        {/* Section Eyebrow Pill */}
        <div className="section-eyebrow-center">
          <span className="eyebrow-pill">
            <Wrench size={13} />
            CREATIVE ARSENAL
          </span>
        </div>

        {/* Section Heading */}
        <h2>My <b>Creative Toolkit</b></h2>
        <p className="sub">
          The tools I use to design, build, prototype, and bring ideas to life.
        </p>

        {/* Filter Pills Bar */}
        <div className="toolkit-filter-bar">
          {filters.map((f) => (
            <button
              key={f.id}
              className={`toolkit-filter-btn ${activeFilter === f.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(f.id)}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* 3-Column Tool Cards Grid */}
        <div className="toolkit-grid">
          {filteredTools.map((tool, idx) => (
            <div key={idx} className="tool-card">
              <div className="tool-card-top">
                <div className="tool-icon-wrapper">
                  {tool.svg}
                </div>
                <span className="tool-category-badge">{tool.badge}</span>
              </div>

              <div className="tool-meta">
                <h3 className="tool-name">{tool.name}</h3>
                <div className="tool-category-label">{tool.categoryLabel}</div>
              </div>

              <p className="tool-desc">{tool.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
