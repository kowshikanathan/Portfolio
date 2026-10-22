import React from 'react';

export default function Hero() {
  return (
    <div className="wrap hero">
      <div>
        <div className="soc">
          <a href="https://www.linkedin.com/in/kowshika-s-5b744a214/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
            in
          </a>
          <a href="https://www.behance.net/sweetyak" aria-label="Behance" target="_blank" rel="noopener noreferrer">
            Bē
          </a>
          <a href="mailto:kowshikanathan@gmail.com" aria-label="Email">
            @
          </a>
        </div>

        <h1>Hi, I’m <b>Kowshika</b></h1>
        <div className="role">UX/UI Designer &amp; Frontend Developer</div>
        <p>Designing digital products where visual design meets usability.</p>
        <p className="q">“Good design is invisible — great design feels effortless.”</p>

        <div className="cta">
          <a
            className="btn b1"
            href="https://drive.google.com/file/d/1vZuf7pPSAPx1jknZtaeKwcbvcMFIUbMQ/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV
          </a>
          <a className="btn b2" href="#contact">
            Contact Me
          </a>
        </div>
      </div>

      <div className="pic">
        <img
          src="/images/hero-illustration.webp"
          alt="Illustration of Kowshika with a laptop and design tool icons"
          width="383"
          height="463"
        />
      </div>
    </div>
  );
}
