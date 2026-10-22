import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import CreativeToolkit from './components/CreativeToolkit';
import Approach from './components/Approach';
import Experience from './components/Experience';
import SelectedWork from './components/SelectedWork';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="portfolio-root">
      <Navbar />
      <main id="top">
        <Hero />
        <AboutMe />
        <CreativeToolkit />
        <Approach />
        <Experience />
        <SelectedWork />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
