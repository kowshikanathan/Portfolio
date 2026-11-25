import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import './Navbar.css';

const NAV_LINKS = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Toolkit' },
  { id: 'projects', label: 'Projects' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('top');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sectionIds = ['top', 'about', 'skills', 'projects', 'resume', 'contact'];
    const onScroll = () => {
      setScrolled(window.scrollY > 36);
      const triggerY = window.scrollY + 180;
      let current = 'top';
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= triggerY) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className={`site-nav ${scrolled || menuOpen ? 'is-scrolled' : ''}`}>
        <div className="container nav-inner">
          <a href="#top" className="nav-brand" onClick={closeMenu}>
            <span className="nav-brand-mark" aria-hidden="true" />
            <span>KOWSHIKA S</span>
          </a>

          <nav className="nav-links" aria-label="Primary navigation">
            {NAV_LINKS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`nav-link ${activeSection === item.id ? 'is-active' : ''}`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="nav-actions">
            <a
              href="/Kowshika_S_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-resume-btn"
            >
              <span>Resume</span>
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>

            <button
              type="button"
              className="nav-mobile-toggle"
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav-drawer"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              {menuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </header>

      {menuOpen &&
        createPortal(
          <div
            id="mobile-nav-drawer"
            className="nav-mobile-drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            onClick={closeMenu}
          >
            <nav
              className="nav-mobile-panel"
              aria-label="Mobile navigation links"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="nav-mobile-list">
                {NAV_LINKS.map((item, idx) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`nav-mobile-link ${activeSection === item.id ? 'is-active' : ''}`}
                    onClick={closeMenu}
                  >
                    <span className="nav-mobile-index">0{idx + 1}</span>
                    <span>{item.label}</span>
                  </a>
                ))}
              </div>
              <a
                href="/Kowshika_S_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary nav-mobile-cta"
                onClick={closeMenu}
              >
                <span>View Resume</span>
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </nav>
          </div>,
          document.body
        )}
    </>
  );
}
