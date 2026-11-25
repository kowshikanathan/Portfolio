import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import ScrollVideo from './ScrollVideo';
import './AboutMe.css';

const highlights = [
  {
    label: 'NorthStar Academy',
    value: '4-Month Internship',
    detail: 'UI/UX design for web dashboards and landing pages with HTML and CSS',
  },
  {
    label: 'Core Focus',
    value: 'Research to Interface',
    detail: 'User research, wireframes, design systems, and responsive UI',
  },
  {
    label: 'Foundation',
    value: 'Design + Engineering',
    detail: 'Design Boat UX/UI Bootcamp paired with B.E. Civil Engineering',
  },
];

export default function AboutMe() {
  return (
    <section id="about" className="scene-section about-section">
      <div className="scene-divider" aria-hidden="true" />

      <div className="container about-grid">
        <div className="about-visual-col">
          <div className="about-vertical-stage">
            <ScrollVideo
              src="/videos/about.mp4"
              poster="/videos/posters/about.jpg"
              fallbackPoster="/videos/posters/about-end.jpg"
              mode="scroll"
              aspectRatio="9 / 16"
              fit="cover"
              objectPosition="50% 35%"
              seamless={true}
              className="about-vertical-video"
              ariaLabel="3D animated character of Kowshika walking forward in warm studio lighting"
            />
          </div>
        </div>

        <div className="about-story-col">
          <div className="scene-kicker" data-reveal>
            <span className="scene-kicker-dot" aria-hidden="true" />
            <span>02 — About Me</span>
          </div>

          <h2 className="scene-heading" data-reveal data-reveal-delay="0.06">
            Behind the <span className="accent-word">Design.</span>
          </h2>

          <div className="about-prose" data-reveal data-reveal-delay="0.12">
            <p>
              I&apos;m Kowshika S, a UX/UI Designer focused on simplifying complex workflows into
              clear, calm digital products. I move fluidly between discovery research, Figma design
              systems, and responsive web interfaces in HTML and CSS.
            </p>
            <p>
              During my four-month internship at <strong>NorthStar Academy</strong>, I designed
              UI/UX layouts for landing pages and operational dashboards in Figma and built
              responsive interfaces for a Link Management Website and a Fees Management platform
              using HTML and CSS, collaborating cleanly via GitHub.
            </p>
          </div>

          <div className="about-highlights" data-reveal data-reveal-delay="0.18">
            {highlights.map((item) => (
              <div key={item.label} className="about-highlight-row">
                <div className="about-highlight-meta">
                  <span className="about-highlight-label">{item.label}</span>
                  <strong className="about-highlight-value">{item.value}</strong>
                </div>
                <p className="about-highlight-detail">{item.detail}</p>
              </div>
            ))}
          </div>

          <div className="about-actions" data-reveal data-reveal-delay="0.24">
            <a href="#projects" className="btn-secondary">
              <span>See Selected Projects</span>
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
