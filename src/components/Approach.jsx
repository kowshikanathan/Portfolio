import React from 'react';
import { GitBranch, Search, Layers, Palette, Terminal } from 'lucide-react';
import TiltCard3D from './TiltCard3D';

const steps = [
  {
    number: '01',
    title: 'Understand',
    icon: Search,
    description: 'Identify the user, the problem, and the intended outcome.',
    focus: 'User Research & Goals'
  },
  {
    number: '02',
    title: 'Structure',
    icon: GitBranch,
    description: 'Organize information, map flows, and establish the interface hierarchy.',
    focus: 'Information Architecture'
  },
  {
    number: '03',
    title: 'Design',
    icon: Palette,
    description: 'Create intuitive layouts, consistent components, and polished visual experiences.',
    focus: 'Visual & Interaction Design'
  },
  {
    number: '04',
    title: 'Build',
    icon: Terminal,
    description: 'Translate designs into responsive frontend interfaces and refine their implementation.',
    focus: 'Frontend Implementation'
  }
];

export default function Approach() {
  return (
    <section id="process" className="approach-section">
      <div className="wrap">
        {/* Eyebrow Pill */}
        <div className="section-eyebrow-center">
          <span className="eyebrow-pill">
            <GitBranch size={13} />
            PROCESS &amp; METHODOLOGY
          </span>
        </div>

        {/* Section Heading */}
        <h2>From idea to <b>interface.</b></h2>
        <p className="sub">
          A flexible four-step framework for turning complex requirements into intuitive digital reality.
        </p>

        {/* 4 Process Steps Grid with Connecting Line */}
        <div className="approach-steps-grid">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <TiltCard3D
                key={step.number}
                className="approach-step-card approach-step-3d"
                maxTilt={14}
                scale={1.03}
                perspective={900}
                glare={true}
              >
                <div className="step-card-header tilt-pop-md">
                  <div className="step-badge-number">{step.number}</div>
                  <div className="step-icon-wrap tilt-pop-lg">
                    <Icon size={20} />
                  </div>
                </div>

                <h3 className="step-card-title tilt-pop-sm">{step.title}</h3>
                <p className="step-card-desc">{step.description}</p>

                <div className="step-meta-pill tilt-pop-sm">
                  {step.focus}
                </div>
              </TiltCard3D>
            );
          })}
        </div>
      </div>
    </section>
  );
}
