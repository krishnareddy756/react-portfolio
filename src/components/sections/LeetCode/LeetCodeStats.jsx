import React from 'react';
import { Trophy, Target, Zap, Award } from 'lucide-react';
import StatCard from '../../ui/StatCard';
import AnimatedCounter from '../../ui/AnimatedCounter';
import { LEETCODE_DATA } from '../../../utils/constants';

const LeetCodeStats = () => {
  const mainStats = [
    {
      icon: <Trophy className="h-5 w-5" />,
      value: `~${(LEETCODE_DATA.profile.ranking / 1000).toFixed(0)}k`,
      label: 'Global Ranking',
      color: 'warning'
    },
    {
      icon: <Zap className="h-5 w-5" />,
      value: LEETCODE_DATA.profile.currentStreak,
      label: 'Current Streak',
      color: 'success'
    },
    {
      icon: <Award className="h-5 w-5" />,
      value: LEETCODE_DATA.profile.maxStreak,
      label: 'Max Streak',
      color: 'danger'
    },
    {
      icon: <Target className="h-5 w-5" />,
      value: LEETCODE_DATA.profile.contestRating,
      label: 'Contest Rating',
      color: 'primary'
    }
  ];

  return (
    <div className="leetcode-stats">
      <div className="stats-header">
        <h3 className="stats-title">
          <span className="code-bracket">class</span>
          <span className="class-name">LeetCodeStats</span>
          <span className="code-bracket">{'{'}</span>
        </h3>
        <p className="stats-subtitle">
          <span className="function-keyword">function</span> 
          <span className="function-name">solveProblem</span>
          <span className="parentheses">()</span>
          <span className="code-bracket">{' {'}</span>
        </p>
      </div>
      
      <div className="main-dashboard">
        <div className="primary-stats">
          <div className="solved-counter-container">
            <div className="solved-counter">
              <AnimatedCounter 
                value={LEETCODE_DATA.profile.totalSolved} 
                className="animated-counter-xl leetcode-counter"
              />
              <span className="counter-label">Problems Solved</span>
            </div>
          </div>
        </div>
        
        <div className="secondary-stats">
          <div className="stats-grid">
            {mainStats.map((stat, index) => (
              <div key={index} className="stat-item">
                <StatCard
                  icon={stat.icon}
                  value={stat.value}
                  label={stat.label}
                  color={stat.color}
                  className="leetcode-stat-card"
                  animated={typeof stat.value === 'number'}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="leetcode-profile-link">
        <a 
          href={`https://leetcode.com/u/${LEETCODE_DATA.profile.username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="profile-link-btn leetcode-btn"
        >
          <span className="btn-icon">
            <Target className="h-4 w-4" />
          </span>
          <span className="btn-text">View LeetCode Profile</span>
          <span className="btn-arrow">→</span>
        </a>
      </div>
      
      <div className="code-closing">
        <span className="code-bracket">{'}'}</span>
        <span className="semicolon">;</span>
      </div>
    </div>
  );
};

export default LeetCodeStats;