import React, { useEffect, useState } from 'react';
import { getCaseStudyById } from './data/caseStudies';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import CreativeToolkit from './components/CreativeToolkit';
import SelectedWork from './components/SelectedWork';
import ResumeSection from './components/ResumeSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollManager from './components/ScrollManager';
import BackgroundCanvas from './components/BackgroundCanvas';
import CustomCursor from './components/CustomCursor';
import InteractiveEffects from './components/InteractiveEffects';
import CaseStudyPage from './components/CaseStudyPage';
import CaseStudyGreeto from './components/CaseStudyGreeto';
import CaseStudyAcadly from './components/CaseStudyAcadly';
import CaseStudyLearnex from './components/CaseStudyLearnex';

function resolveCaseStudyFromHash() {
  try {
    const hash = window.location.hash || '';
    if (!hash.startsWith('#case-study/')) return null;
    const rawId = hash.replace('#case-study/', '').trim();
    return getCaseStudyById(rawId)?.id || null;
  } catch {
    return null;
  }
}

export default function App() {
  const [activeCaseStudyId, setActiveCaseStudyId] = useState(resolveCaseStudyFromHash);

  useEffect(() => {
    const onHashChange = () => {
      setActiveCaseStudyId(resolveCaseStudyFromHash());
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const handleOpenCaseStudy = (id) => {
    const study = getCaseStudyById(id);
    if (!study) return;
    setActiveCaseStudyId(study.id);
    window.location.hash = `case-study/${study.id}`;
  };

  const handleBackToProjects = () => {
    setActiveCaseStudyId(null);
    window.location.hash = 'projects';
    setTimeout(() => {
      const el = document.getElementById('projects');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 60);
  };

  const activeStudy = activeCaseStudyId ? getCaseStudyById(activeCaseStudyId) : null;

  return (
    <div className="portfolio-root">
      <BackgroundCanvas />
      <CustomCursor />
      <InteractiveEffects routeKey={activeStudy ? activeStudy.id : 'home'} />

      <a href="#main-content" className="skip-link">
        Skip to content
      </a>

      <ScrollManager routeKey={activeStudy ? activeStudy.id : 'home'} />

      {activeStudy ? (
        activeStudy.id === 'greeto' ? (
          <CaseStudyGreeto
            key={activeStudy.id}
            onBack={handleBackToProjects}
            onSelectCaseStudy={handleOpenCaseStudy}
          />
        ) : activeStudy.id === 'acadly' ? (
          <CaseStudyAcadly
            key={activeStudy.id}
            onBack={handleBackToProjects}
            onSelectCaseStudy={handleOpenCaseStudy}
          />
        ) : activeStudy.id === 'learnex' ? (
          <CaseStudyLearnex
            key={activeStudy.id}
            onBack={handleBackToProjects}
            onSelectCaseStudy={handleOpenCaseStudy}
          />
        ) : (
          <CaseStudyPage
            key={activeStudy.id}
            study={activeStudy}
            onBack={handleBackToProjects}
            onSelectCaseStudy={handleOpenCaseStudy}
          />
        )
      ) : (
        <>
          <Navbar />
          <main id="main-content">
            <Hero />
            <AboutMe />
            <CreativeToolkit />
            <SelectedWork onSelectCaseStudy={handleOpenCaseStudy} />
            <ResumeSection />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}
