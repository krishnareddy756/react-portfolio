import React from 'react';
import AnimatedSection from '../../animations/AnimatedSection';
import GitHubStats from './GitHubStats';
import './GitHub.css';

const GitHub = () => {
  return (
    <AnimatedSection>
      <section id="github" className="github-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">GitHub Portfolio</h2>
            <p className="section-subtitle">Explore my coding journey and contributions</p>
          </div>
          
          {/* GitHub Stats Dashboard */}
          <div className="github-stats-container">
            <GitHubStats />
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default GitHub;