import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme.jsx';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const { theme, toggleTheme, isDark, isLoading } = useTheme();

  if (isLoading) {
    return (
      <div className="theme-toggle-loading">
        <div className="theme-toggle-spinner"></div>
      </div>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle-circle focus-ring"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      {isDark ? (
        <Moon className="h-4 w-4" />
      ) : (
        <Sun className="h-4 w-4" />
      )}
    </button>
  );
};

export default ThemeToggle;