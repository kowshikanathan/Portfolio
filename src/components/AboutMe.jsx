import React from 'react';

export default function AboutMe() {
  return (
    <section id="about">
      <div className="wrap about">
        <div className="pic">
          <img
            src="/images/about-illustration.webp"
            alt="Illustration of Kowshika holding a laptop and tablet"
            width="418"
            height="481"
            loading="lazy"
          />
        </div>

        <div>
          <h2>About Me</h2>
          <div className="box">
            I’m Kowshika, a UI/UX designer passionate about simplifying complex user experiences through thoughtful design. I design the interface and build it too, working in HTML, CSS, JavaScript and React. I’m motivated and dedicated, and I’m looking for opportunities to apply my skills and grow professionally.
          </div>

          <div className="stats">
            <div>
              <b>4 mo</b>
              <span>Internship</span>
            </div>
            <div>
              <b>4</b>
              <span>Projects</span>
            </div>
            <div>
              <b>2</b>
              <span>Roles: design + code</span>
            </div>
          </div>

          <a className="btn b2" href="#journey">
            My Journey
          </a>
        </div>
      </div>
    </section>
  );
}
