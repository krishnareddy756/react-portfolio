import React from 'react';
import AnimatedSection from '../../animations/AnimatedSection';
import LeetCodeStats from './LeetCodeStats';
import './LeetCode.css';

const LeetCode = () => {
  return (
    <AnimatedSection>
      <section id="leetcode" className="leetcode-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">LeetCode Journey</h2>
            <p className="section-subtitle">Problem solving and algorithmic thinking</p>
          </div>
          
          {/* LeetCode Stats Dashboard */}
          <div className="leetcode-stats-container">
            <LeetCodeStats />
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default LeetCode;