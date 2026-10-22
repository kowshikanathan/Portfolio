import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem('theme');
      if (saved) return saved;
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    } catch {
      return 'light';
    }
  });

  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('top');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem('theme', theme);
    } catch {}
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    const ids = ['top', 'about', 'skills', 'process', 'journey', 'projects', 'contact'];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 140;
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav>
      <div className="pill">
        <a className="logo" href="#top" onClick={closeMenu}>
          Kowshika<i>.</i>
        </a>

        <div className={`links ${menuOpen ? 'open' : ''}`} id="links">
          <a href="#top" className={activeSection === 'top' ? 'on' : ''} onClick={closeMenu}>Home</a>
          <a href="#about" className={activeSection === 'about' ? 'on' : ''} onClick={closeMenu}>About</a>
          <a href="#skills" className={activeSection === 'skills' ? 'on' : ''} onClick={closeMenu}>Toolkit</a>
          <a href="#process" className={activeSection === 'process' ? 'on' : ''} onClick={closeMenu}>Process</a>
          <a href="#journey" className={activeSection === 'journey' ? 'on' : ''} onClick={closeMenu}>Journey</a>
          <a href="#projects" className={activeSection === 'projects' ? 'on' : ''} onClick={closeMenu}>Projects</a>
          <a href="#contact" className={activeSection === 'contact' ? 'on' : ''} onClick={closeMenu}>Contact</a>
        </div>

        <button
          className="ic"
          id="theme"
          onClick={toggleTheme}
          aria-label="Toggle dark mode"
          title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {theme === 'dark' ? '☀' : '☾'}
        </button>

        <a className="btn b1 hire" href="#contact" onClick={closeMenu}>
          Hire Me
        </a>

        <button
          className="ic menu"
          id="menu"
          aria-label="Open menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>
    </nav>
  );
}
