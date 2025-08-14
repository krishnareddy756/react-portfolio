import React from 'react';
import { GitBranch, Star, Code2, Activity } from 'lucide-react';
import StatCard from '../../ui/StatCard';
import { GITHUB_DATA } from '../../../utils/constants';

const GitHubStats = () => {
  const stats = [
    {
      icon: <Code2 className="h-5 w-5" />,
      value: GITHUB_DATA.profile.publicRepos,
      label: 'Repositories',
      color: 'github'
    },
    {
      icon: <Activity className="h-5 w-5" />,
      value: GITHUB_DATA.profile.totalContributions,
      label: 'Contributions',
      color: 'success'
    },
    {
      icon: <Star className="h-5 w-5" />,
      value: GITHUB_DATA.profile.totalStars,
      label: 'Stars Earned',
      color: 'primary'
    },
    {
      icon: <GitBranch className="h-5 w-5" />,
      value: GITHUB_DATA.profile.languagesUsed,
      label: 'Languages',
      color: 'secondary'
    }
  ];

  return (
    <div className="github-stats">
      <div className="stats-header">
        <h3 className="stats-title">
          <span className="code-bracket">{'{'}</span>
          GitHub Analytics
          <span className="code-bracket">{'}'}</span>
        </h3>
        <p className="stats-subtitle">
          <span className="terminal-prompt">$</span> git log --oneline --graph --all
        </p>
      </div>
      
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-item">
            <StatCard
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              color={stat.color}
              className="programmer-stat-card"
            />
          </div>
        ))}
      </div>
      
      <div className="github-profile-link">
        <a 
          href={`https://github.com/${GITHUB_DATA.profile.username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="profile-link-btn"
        >
          <span className="btn-icon">
            <Code2 className="h-4 w-4" />
          </span>
          <span className="btn-text">View GitHub Profile</span>
          <span className="btn-arrow">→</span>
        </a>
      </div>
    </div>
  );
};

export default GitHubStats;