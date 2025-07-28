import React from 'react';
import { Code2, Heart, Github, Linkedin, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../../utils/constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 border-t border-[var(--border-color)] bg-[var(--background-primary)] relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Code2 className="h-6 w-6" style={{ color: 'var(--primary-color)' }} />
            <span className="text-lg font-bold" style={{ 
              background: 'linear-gradient(to right, var(--primary-color), var(--secondary-color))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              {PERSONAL_INFO.name}
            </span>
          </div>
          
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-4">
              <a 
                href={PERSONAL_INFO.socialLinks.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="transition-colors hover:scale-110"
                style={{ color: 'var(--text-secondary)' }}
                onMouseEnter={(e) => e.target.style.color = 'var(--primary-color)'}
                onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href={PERSONAL_INFO.socialLinks.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="transition-colors hover:scale-110"
                style={{ color: 'var(--text-secondary)' }}
                onMouseEnter={(e) => e.target.style.color = 'var(--primary-color)'}
                onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href={PERSONAL_INFO.socialLinks.email}
                className="transition-colors hover:scale-110"
                style={{ color: 'var(--text-secondary)' }}
                onMouseEnter={(e) => e.target.style.color = 'var(--primary-color)'}
                onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 text-center" style={{ borderTop: '1px solid var(--border-color)' }}>
          <p className="text-sm mb-2" style={{ color: 'var(--text-secondary)' }}>
            © {currentYear} {PERSONAL_INFO.name}. Made with <Heart className="h-4 w-4 text-red-500 inline mx-1" /> and lots of code.
          </p>
          <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
            Built with React, Vite, and modern web technologies.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;