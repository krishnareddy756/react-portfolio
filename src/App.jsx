import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './hooks/useTheme.jsx';
import { initPerformanceMonitoring } from './utils/performance.js';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Education from './components/sections/Education';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import GitHub from './components/sections/GitHub/GitHub';
import LeetCode from './components/sections/LeetCode/LeetCode';
import Certifications from './components/sections/Certifications';
import Achievements from './components/sections/Achievements';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import './App.css';

const AppContent = () => {
  const [activeSection, setActiveSection] = useState('home');

  // Scroll spy for active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'education', 'skills', 'projects', 'github', 'leetcode', 'certifications', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ 
      backgroundColor: 'var(--background-primary)', 
      color: 'var(--text-primary)' 
    }}>
      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />
      <Hero scrollToSection={scrollToSection} />
      <About />
      <Education />
      <Skills />
      <Projects />
      <GitHub />
      <LeetCode />
      <Certifications />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
};

const App = () => {
  // Initialize performance monitoring on app start
  useEffect(() => {
    initPerformanceMonitoring();
  }, []);

  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;