import React, { useState } from 'react';
import { Code, Menu, X } from 'lucide-react';
import { NAVIGATION } from '../../utils/constants';
import ThemeToggle from '../ui/ThemeToggle';
import './Navbar.css';

const Navbar = ({ activeSection, scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-content">
          {/* Logo */}
          <div className="navbar-logo">
            <Code className="navbar-logo-icon" />
            <span className="navbar-logo-text">Sai Krishna</span>
          </div>

          {/* Desktop Navigation */}
          <div className="navbar-menu">
            {NAVIGATION.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`navbar-link ${activeSection === item.id ? 'navbar-link-active' : ''}`}
              >
                {item.label}
              </button>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="navbar-mobile">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="navbar-mobile-toggle"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="navbar-mobile-menu">
          <div className="navbar-mobile-content">
            {NAVIGATION.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`navbar-mobile-link ${activeSection === item.id ? 'navbar-mobile-link-active' : ''}`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;