import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

/**
 * ScrollManager
 * Handles scroll-driven interactive experiences:
 * 1. Glowing top progress bar showing user's reading depth
 * 2. IntersectionObserver for smooth scroll-reveal on sections & cards
 * 3. Floating back-to-top button with smooth scroll
 */
export default function ScrollManager() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = height > 0 ? (winScroll / height) * 100 : 0;

      setScrollProgress(scrolled);
      setShowBackToTop(winScroll > 380);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // IntersectionObserver to orchestrate smooth scroll-reveal animations across all sections
  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      // Reveal everything immediately if reduced motion is requested
      document.querySelectorAll('.scroll-reveal, section, .card, .approach-step-card, .timeline-item, .toolkit-card, .box, .stats')
        .forEach(el => el.classList.add('is-revealed'));
      return;
    }

    const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          // Once revealed, unobserve to keep animation lightweight
          observer.unobserve(entry.target);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -60px 0px', // trigger slightly before it enters full viewport
      threshold: 0.12
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Target elements to animate on scroll
    const selectors = [
      '.scroll-reveal',
      'section > .wrap > h2',
      'section > .wrap > .sub',
      'section > .wrap > .section-eyebrow-center',
      '.about .box',
      '.about .stats',
      '.approach-step-card',
      '.toolkit-card',
      '.timeline-item',
      '.card',
      '.contact .pic',
      '.contact form'
    ];

    const elements = document.querySelectorAll(selectors.join(', '));
    elements.forEach(el => {
      el.classList.add('reveal-init');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {/* 1. Top Scroll Indicator Line with Theme Neon Glow */}
      <div
        className="scroll-progress-bar"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label="Page reading progress"
      />

      {/* 2. Floating Return-To-Top Button */}
      <button
        type="button"
        className={`back-to-top-btn ${showBackToTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll back to top"
        title="Back to top"
      >
        <ArrowUp size={18} strokeWidth={2.4} />
      </button>
    </>
  );
}
