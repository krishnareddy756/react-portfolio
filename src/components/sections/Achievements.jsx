import React from 'react';
import { Trophy, Award, Code, GraduationCap, Star, Target } from 'lucide-react';
import { ACHIEVEMENTS } from '../../utils/constants';
import './Achievements.css';

const Achievements = () => {
  const getIconForCategory = (category) => {
    switch (category) {
      case 'Academic':
        return <GraduationCap className="achievement-icon" />;
      case 'Programming':
        return <Code className="achievement-icon" />;
      case 'Projects':
        return <Target className="achievement-icon" />;
      default:
        return <Trophy className="achievement-icon" />;
    }
  };

  const getIconForType = (icon) => {
    switch (icon) {
      case 'trophy':
        return <Trophy className="achievement-metric-icon" />;
      case 'award':
        return <Award className="achievement-metric-icon" />;
      case 'code':
        return <Code className="achievement-metric-icon" />;
      case 'project':
        return <Target className="achievement-metric-icon" />;
      default:
        return <Star className="achievement-metric-icon" />;
    }
  };

  return (
    <section id="achievements" className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Achievements</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            Academic accomplishments and milestones that showcase my dedication and growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ACHIEVEMENTS.map((achievement, index) => (
            <div 
              key={achievement.id} 
              className={`modern-card ${achievement.highlight ? 'card-elevated' : ''}`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="icon-wrapper">
                  {React.cloneElement(getIconForCategory(achievement.category), { className: "h-6 w-6" })}
                </div>
                <div className="badge badge-primary">
                  {achievement.category}
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold">{achievement.title}</h3>
                
                <div className="flex items-center gap-2">
                  {React.cloneElement(getIconForType(achievement.icon), { className: "h-5 w-5 text-primary-color" })}
                  <span className="font-medium text-primary-color">{achievement.metric}</span>
                </div>

                <p className="text-secondary leading-relaxed">
                  {achievement.description}
                </p>

                <div className="flex items-center gap-2 text-sm">
                  <span className="text-muted">Year:</span>
                  <span className="font-medium">{achievement.year}</span>
                </div>
              </div>

              {achievement.highlight && (
                <div className="absolute top-3 right-3">
                  <div className="flex items-center gap-1 bg-warning-color text-white px-2 py-1 rounded-full text-xs">
                    <Star className="h-3 w-3" />
                    <span>Featured</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;