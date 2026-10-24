import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import CreativeToolkit from './components/CreativeToolkit';
import Approach from './components/Approach';
import Experience from './components/Experience';
import SelectedWork from './components/SelectedWork';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackgroundCanvas from './components/BackgroundCanvas';
import ScrollManager from './components/ScrollManager';
import CaseStudyLinkManagement from './components/CaseStudyLinkManagement';
import CaseStudyFeeManagement from './components/CaseStudyFeeManagement';
import CaseStudyAcademy from './components/CaseStudyAcademy';
import CaseStudyBeautyApp from './components/CaseStudyBeautyApp';

export default function App() {
  const [activeCaseStudy, setActiveCaseStudy] = useState(() => {
    try {
      const hash = window.location.hash;
      if (hash === '#case-study/link-management') return 'link-management';
      if (hash === '#case-study/fee-management') return 'fee-management';
      if (hash === '#case-study/academy') return 'academy';
      if (hash === '#case-study/beauty-app') return 'beauty-app';
    } catch {}
    return null;
  });

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#case-study/link-management') {
        setActiveCaseStudy('link-management');
      } else if (hash === '#case-study/fee-management') {
        setActiveCaseStudy('fee-management');
      } else if (hash === '#case-study/academy') {
        setActiveCaseStudy('academy');
      } else if (hash === '#case-study/beauty-app') {
        setActiveCaseStudy('beauty-app');
      } else if (hash === '#projects' || !hash.startsWith('#case-study')) {
        setActiveCaseStudy(null);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleOpenCaseStudy = (id) => {
    setActiveCaseStudy(id);
    window.location.hash = `case-study/${id}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setActiveCaseStudy(null);
    window.location.hash = 'projects';
    setTimeout(() => {
      const el = document.getElementById('projects');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 60);
  };

  return (
    <div className="portfolio-root">
      {/* Dynamic Background Animations (Grid, Floating Orbs, Micro Particles) */}
      <BackgroundCanvas />

      {/* Scroll Progress Bar & Scroll Reveal Controller */}
      <ScrollManager />

      {activeCaseStudy === 'link-management' ? (
        <CaseStudyLinkManagement onBack={handleBackToHome} />
      ) : activeCaseStudy === 'fee-management' ? (
        <CaseStudyFeeManagement onBack={handleBackToHome} />
      ) : activeCaseStudy === 'academy' ? (
        <CaseStudyAcademy onBack={handleBackToHome} />
      ) : activeCaseStudy === 'beauty-app' ? (
        <CaseStudyBeautyApp onBack={handleBackToHome} />
      ) : (
        <>
          <Navbar />
          <main id="top">
            <Hero />
            <AboutMe />
            <CreativeToolkit />
            <Approach />
            <Experience />
            <SelectedWork onSelectCaseStudy={handleOpenCaseStudy} />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}


