import React from 'react';
import TiltCard3D from './TiltCard3D';
import { User, Sparkles } from 'lucide-react';

export default function AboutMe() {
  return (
    <section id="about" className="about-3d-section">
      <div className="wrap about">
        <TiltCard3D
          className="about-pic-card"
          maxTilt={14}
          scale={1.025}
          perspective={1000}
          glare={true}
        >
          <div className="pic about-pic-3d">
            <img
              src="/images/about-illustration.webp"
              alt="Illustration of Kowshika holding a laptop and tablet"
              width="418"
              height="481"
              loading="lazy"
              className="tilt-pop-md"
            />
            <div className="about-3d-badge tilt-pop-lg">
              <Sparkles size={13} className="badge-sparkle-icon" />
              <span>UX + Code Hybrid</span>
            </div>
          </div>
        </TiltCard3D>

        <div className="about-text-content">
          <div className="section-eyebrow-left">
            <span className="eyebrow-pill">
              <User size={13} />
              BACKGROUND &amp; PHILOSOPHY
            </span>
          </div>

          <h2>About <b>Me</b></h2>
          <div className="box about-box-3d">
            I’m Kowshika, a UI/UX designer passionate about simplifying complex user experiences through thoughtful design. I design the interface and build it too, working in HTML, CSS, JavaScript, React, and interactive 3D WebGL. I’m motivated and dedicated, and I’m looking for opportunities to apply my skills and grow professionally.
          </div>

          <div className="stats about-stats-3d">
            <div className="stat-card-3d">
              <b>4 mo</b>
              <span>Internship</span>
            </div>
            <div className="stat-card-3d">
              <b>4+</b>
              <span>Projects</span>
            </div>
            <div className="stat-card-3d">
              <b>2</b>
              <span>Roles: design + code</span>
            </div>
          </div>

          <a className="btn b2 btn-3d-glass" href="#journey">
            Explore My Journey →
          </a>
        </div>
      </div>
    </section>
  );
}
