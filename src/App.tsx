import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { CaseStudy } from './components/CaseStudy';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'portfolio' | 'case-study'>('portfolio');

  const showCaseStudy = () => setCurrentPage('case-study');
  const showPortfolio = () => setCurrentPage('portfolio');

  if (currentPage === 'case-study') {
    return <CaseStudy onBack={showPortfolio} />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Hero onViewCaseStudy={showCaseStudy} />
      <About />
      <Experience />
      <Skills />
      <Education />
      <Contact />
    </div>
  );
}