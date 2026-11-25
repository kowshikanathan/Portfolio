import React from 'react';
import { ArrowUp } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p className="footer-copy">© 2026 Kowshika S — UX/UI Designer.</p>

        <div className="footer-right">
          <nav className="footer-nav" aria-label="Footer navigation">
            <a href="#top">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Toolkit</a>
            <a href="#projects">Projects</a>
            <a href="#resume">Resume</a>
            <a href="#contact">Contact</a>
          </nav>

          <button type="button" className="footer-back-top" onClick={scrollToTop}>
            <ArrowUp size={14} aria-hidden="true" />
            <span>Back to Top</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
