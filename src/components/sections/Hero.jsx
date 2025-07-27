import React, { useState, useEffect } from 'react';
import { Code2, Github, Linkedin, Mail, ChevronDown, Phone, ExternalLink, Eye, MessageCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../../utils/constants';
import DownloadResume from '../ui/DownloadResume';
import './Hero.css';

const Hero = ({ scrollToSection }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const texts = [ 'Full Stack Developer', 'MERN Stack Developer', 'Problem Solver', 'Tech Enthusiast'];

  // Typing animation
  useEffect(() => {
    const timer = setTimeout(() => {
      if (isTyping) {
        if (charIndex < texts[currentIndex].length) {
          setCurrentText(texts[currentIndex].substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setIsTyping(false);
          setTimeout(() => {
            setIsTyping(true);
            setCharIndex(0);
            setCurrentIndex((currentIndex + 1) % texts.length);
          }, 2000);
        }
      }
    }, 120);

    return () => clearTimeout(timer);
  }, [charIndex, currentIndex, isTyping, texts]);

  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        <div className="hero-icon-container">
          <div className="hero-icon-wrapper">
            <Code2 className="hero-icon" />
          </div>
        </div>
        
        <h1 className="hero-title">
          <span className="hero-title-gradient">
            Hello, I'm
          </span>
          <span className="hero-title-name">{PERSONAL_INFO.name}</span>
        </h1>
        
        <div className="hero-typing-container">
          <span className="hero-typing-text">
            {currentText}
            <span className="hero-cursor">|</span>
          </span>
        </div>
        
        <p className="hero-description">
          {PERSONAL_INFO.summary}
        </p>
        
        <div className="hero-buttons">
          <button
            onClick={() => scrollToSection('projects')}
            className="btn-modern btn-modern-primary hero-button-primary"
          >
            <Eye className="h-5 w-5" />
            View My Work
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="btn-modern btn-modern-outline hero-button-secondary"
          >
            <MessageCircle className="h-5 w-5" />
            Get In Touch
          </button>
        </div>
        
        <div className="hero-resume-section">
          <DownloadResume variant="compact" />
        </div>
        
        <div className="hero-social-links">
          <a 
            href={PERSONAL_INFO.socialLinks.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="hero-social-link github-link"
            aria-label="GitHub Profile"
          >
            <Github className="h-5 w-5" />
          </a>
          <a 
            href={PERSONAL_INFO.socialLinks.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="hero-social-link linkedin-link"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a 
            href={PERSONAL_INFO.socialLinks.email}
            className="hero-social-link email-link"
            aria-label="Email Contact"
          >
            <Mail className="h-5 w-5" />
          </a>
          <a 
            href={PERSONAL_INFO.socialLinks.phone}
            className="hero-social-link phone-link"
            aria-label="Phone Contact"
          >
            <Phone className="h-5 w-5" />
          </a>
          <a 
            href={PERSONAL_INFO.socialLinks.leetcode} 
            target="_blank" 
            rel="noopener noreferrer"
            className="hero-social-link leetcode-link"
            aria-label="LeetCode Profile"
          >
            <Code2 className="h-5 w-5" />
          </a>
        </div>
      </div>
      
      <div className="hero-scroll-indicator">
        <ChevronDown className="hero-scroll-icon" />
      </div>
    </section>
  );
};

export default Hero;