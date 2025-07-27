import React from 'react';
import { Code, Globe, Wrench, Trophy, GitBranch, Target, Star, Activity } from 'lucide-react';
import { SKILLS } from '../../utils/constants';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code className="w-5 h-5" />,
      skills: SKILLS.languages.map(skill => skill.name),
      color: 'blue'
    },
    {
      title: 'Frameworks & Libraries',
      icon: <Globe className="w-5 h-5" />,
      skills: SKILLS.frameworks.map(skill => skill.name),
      color: 'green'
    },
    {
      title: 'Tools & Technologies',
      icon: <Wrench className="w-5 h-5" />,
      skills: SKILLS.tools.map(skill => skill.name),
      color: 'orange'
    }
  ];

  // LeetCode Stats (you can update these with real data)
  const leetcodeStats = {
    problemsSolved: '300',
    ranking: '~387k',
    badges: 3,
    streak: 45
  };

  // GitHub Stats (you can update these with real data)
  const githubStats = {
    repositories: 15,
    contributions: 100,
    followers: 2,
    stars: 5
  };

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            Technologies I work with and my coding journey statistics
          </p>
        </div>

        {/* Skills Categories */}
        <div className="skills-categories">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="skills-category modern-card">
              <div className="skills-category-header">
                <div className={`skills-category-icon skills-icon-${category.color}`}>
                  {category.icon}
                </div>
                <h3 className="skills-category-title">{category.title}</h3>
              </div>
              
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Coding Stats */}
        <div className="coding-stats">
          <h3 className="coding-stats-title">Coding Journey</h3>
          
          <div className="stats-grid">
            {/* LeetCode Stats */}
            <div className="stat-card modern-card">
              <div className="stat-card-header">
                <div className="stat-card-icon leetcode-icon">
                  <Target className="w-6 h-6" />
                </div>
                <h4 className="stat-card-title">LeetCode</h4>
              </div>
              
              <div className="stat-items">
                <div className="stat-item">
                  <div className="stat-number">{leetcodeStats.problemsSolved}+</div>
                  <div className="stat-label">Problems Solved</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">{leetcodeStats.ranking}</div>
                  <div className="stat-label">Global Ranking</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">{leetcodeStats.badges}</div>
                  <div className="stat-label">Badges Earned</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">{leetcodeStats.streak}</div>
                  <div className="stat-label">Day Streak</div>
                </div>
              </div>
            </div>

            {/* GitHub Stats */}
            <div className="stat-card modern-card">
              <div className="stat-card-header">
                <div className="stat-card-icon github-icon">
                  <GitBranch className="w-6 h-6" />
                </div>
                <h4 className="stat-card-title">GitHub</h4>
              </div>
              
              <div className="stat-items">
                <div className="stat-item">
                  <div className="stat-number">{githubStats.repositories}</div>
                  <div className="stat-label">Repositories</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">{githubStats.contributions}</div>
                  <div className="stat-label">Contributions</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">{githubStats.followers}</div>
                  <div className="stat-label">Followers</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">{githubStats.stars}</div>
                  <div className="stat-label">Stars Earned</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;