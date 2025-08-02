import React, { useState, useEffect, Suspense } from 'react';
import { motion } from 'framer-motion';
import { Code2, Github, Linkedin, Mail, Eye } from 'lucide-react';
import { PERSONAL_INFO } from '../../utils/constants';
import { getAdaptiveSettings } from '../../utils/performance';
import DownloadResume from '../ui/DownloadResume';
import ParticleSystem from '../3d/ParticleSystem';
import './Hero.css';

const Hero = ({ scrollToSection }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const texts = [ 'Full Stack Developer', 'MERN Stack Developer', 'Problem Solver', 'Tech Enthusiast'];
  
  // Get adaptive settings for performance optimization
  const adaptiveSettings = getAdaptiveSettings();

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
      {/* 3D Particle System Background */}
      {adaptiveSettings.enable3D && (
        <Suspense fallback={null}>
          <ParticleSystem 
            className="hero-particles" 
            performance={adaptiveSettings.enable3D ? 'high' : 'medium'} 
          />
        </Suspense>
      )}
      
      <div className="hero-container">
        <motion.div 
          className="hero-icon-container"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ 
            duration: adaptiveSettings.animationDuration,
            type: "spring",
            stiffness: 260,
            damping: 20 
          }}
        >
          <div className="hero-icon-wrapper">
            <Code2 className="hero-icon" />
          </div>
        </motion.div>
        
        <motion.h1 
          className="hero-title"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: adaptiveSettings.animationDuration,
            delay: 0.2 
          }}
        >
          <span className="hero-title-gradient">
            Hello, I'm
          </span>
          <span className="hero-title-name">{PERSONAL_INFO.name}</span>
        </motion.h1>
        
        <motion.div 
          className="hero-typing-container"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: adaptiveSettings.animationDuration,
            delay: 0.4 
          }}
        >
          <span className="hero-typing-text">
            {currentText}
            <span className="hero-cursor">|</span>
          </span>
        </motion.div>
        
        <motion.p 
          className="hero-description"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: adaptiveSettings.animationDuration,
            delay: 0.6 
          }}
        >
          {PERSONAL_INFO.summary}
        </motion.p>
        
        <motion.div 
          className="hero-buttons"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: adaptiveSettings.animationDuration,
            delay: 0.8 
          }}
        >
          <motion.button
            onClick={() => scrollToSection('projects')}
            className="btn-modern btn-modern-primary hero-button-primary"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Eye className="h-5 w-5" />
            View My Work
          </motion.button>
          <motion.button
            onClick={() => scrollToSection('contact')}
            className="btn-modern btn-modern-outline hero-button-secondary"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Mail className="h-5 w-5" />
            Contact Me
          </motion.button>
        </motion.div>
        
        <motion.div 
          className="hero-resume-section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: adaptiveSettings.animationDuration,
            delay: 1.0 
          }}
        >
          <DownloadResume variant="compact" />
        </motion.div>
        
        <motion.div 
          className="hero-social-links"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: adaptiveSettings.animationDuration,
            delay: 1.2 
          }}
        >
          {[
            { href: PERSONAL_INFO.socialLinks.github, icon: <Github className="h-5 w-5" />, label: "GitHub Profile", className: "github-link" },
            { href: PERSONAL_INFO.socialLinks.linkedin, icon: <Linkedin className="h-5 w-5" />, label: "LinkedIn Profile", className: "linkedin-link" },
            { onClick: () => scrollToSection('contact'), icon: <Mail className="h-5 w-5" />, label: "Email Contact", className: "email-link", isButton: true },
            { 
              href: PERSONAL_INFO.socialLinks.leetcode, 
              icon: (
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
                </svg>
              ), 
              label: "LeetCode Profile", 
              className: "leetcode-link" 
            }
          ].map((social, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.3,
                delay: 1.4 + index * 0.1,
                type: "spring",
                stiffness: 260,
                damping: 20 
              }}
              whileHover={{ scale: 1.2, y: -3 }}
              whileTap={{ scale: 0.9 }}
            >
              {social.isButton ? (
                <button 
                  onClick={social.onClick}
                  className={`hero-social-link ${social.className}`}
                  aria-label={social.label}
                >
                  {social.icon}
                </button>
              ) : (
                <a 
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`hero-social-link ${social.className}`}
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;