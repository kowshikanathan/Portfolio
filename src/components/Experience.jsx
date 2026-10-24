import React from 'react';
import { Briefcase } from 'lucide-react';
import TiltCard3D from './TiltCard3D';

const milestones = [
  {
    org: 'NorthStar Academy',
    role: 'UX/UI Designer and Frontend Developer Intern',
    duration: '4 months',
    description: 'Worked across UX/UI design and frontend development, contributing to digital experiences, website interfaces, and ongoing product work.',
    tags: ['Design Implementation', 'Interface Development', 'Responsive Layouts', 'Cross-Disciplinary Collaboration']
  },
  {
    org: 'Design Boat School',
    role: 'Professional Bootcamp in UX/UI Design',
    duration: '2026',
    description: 'Immersive professional curriculum focused on user research methodologies, heuristic evaluation, wireframing, high-fidelity interaction design, design systems, and usability testing.',
    tags: ['UX Research', 'Interaction Design', 'Figma Design Systems', 'Usability Testing', 'Wireframing']
  },
  {
    org: 'Cafe Construction',
    role: 'Design Intern',
    duration: '2024 → 2025',
    description: 'Collaborated on spatial architectural planning, drafting technical layouts, and coordinating visual design mockups for commercial client spaces.',
    tags: ['Spatial Planning', 'Client Collaboration', 'Design Schematics', 'Technical Coordination']
  },
  {
    org: 'Rajparis Construction',
    role: 'Design Intern',
    duration: '2022 → 2023',
    description: 'Supported architectural draft workflows, 2D/3D modeling, and cross-functional design documentation for residential and commercial projects.',
    tags: ['Architectural Drafting', '3D Modeling', 'Project Documentation', 'Cross-Functional Review']
  },
  {
    org: 'SRM EEC (Easwari Engineering College)',
    role: 'B.E. Civil Engineering',
    duration: '2018 → 2022',
    description: 'Comprehensive undergraduate engineering degree developing spatial logic, structural systems thinking, mathematics, and parametric drafting foundation.',
    tags: ['Spatial Systems', 'Parametric Logic', 'Technical Drafting', 'Structural Thinking']
  }
];

export default function Experience() {
  return (
    <section id="journey" className="experience-section">
      <div className="wrap">
        {/* Eyebrow Pill */}
        <div className="section-eyebrow-center">
          <span className="eyebrow-pill">
            <Briefcase size={13} />
            GROWTH &amp; MILESTONES
          </span>
        </div>

        {/* Section Heading */}
        <h2>Where I’m <b>growing.</b></h2>
        <p className="sub">
          A chronological timeline of my professional journey, design training, and engineering foundation.
        </p>

        {/* Timeline Layout */}
        <div className="timeline-container">
          <div className="timeline-track-line" aria-hidden="true" />

          <div className="timeline-items-wrapper">
            {milestones.map((item, idx) => (
              <div key={idx} className="timeline-item">
                <div className="timeline-node-marker">
                  <div className="timeline-node-inner" />
                </div>

                <TiltCard3D
                  className="timeline-card timeline-card-3d"
                  maxTilt={10}
                  scale={1.02}
                  perspective={950}
                  glare={true}
                >
                  <div className="timeline-card-header tilt-pop-sm">
                    <div>
                      <h3 className="timeline-org">{item.org}</h3>
                      <div className="timeline-role">{item.role}</div>
                    </div>
                    <span className="timeline-duration-badge tilt-pop-md">
                      {item.duration}
                    </span>
                  </div>

                  <p className="timeline-desc">
                    {item.description}
                  </p>

                  <div className="timeline-tags-row tilt-pop-sm">
                    {item.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="timeline-skill-pill">
                        {tag}
                      </span>
                    ))}
                  </div>
                </TiltCard3D>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
