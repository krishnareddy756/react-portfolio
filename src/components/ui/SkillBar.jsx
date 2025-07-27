import React, { useState, useEffect, useRef } from 'react';
import './SkillBar.css';

const SkillBar = ({ skill }) => {
  const [width, setWidth] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const skillBarRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          const timer = setTimeout(() => setWidth(skill.level), 200);
          return () => clearTimeout(timer);
        }
      },
      { threshold: 0.3 }
    );

    if (skillBarRef.current) {
      observer.observe(skillBarRef.current);
    }

    return () => {
      if (skillBarRef.current) {
        observer.unobserve(skillBarRef.current);
      }
    };
  }, [skill.level, isVisible]);

  const getSkillLevelColor = (level) => {
    if (level >= 90) return 'skill-expert';
    if (level >= 75) return 'skill-advanced';
    if (level >= 60) return 'skill-intermediate';
    return 'skill-beginner';
  };

  const getSkillLevelText = (level) => {
    if (level >= 90) return 'Expert';
    if (level >= 75) return 'Advanced';
    if (level >= 60) return 'Intermediate';
    return 'Beginner';
  };

  return (
    <div ref={skillBarRef} className="skill-bar-container">
      <div className="skill-bar-header">
        <div className="skill-info">
          <span className="skill-name">{skill.name}</span>
          <span className="skill-category">{skill.category}</span>
        </div>
        <div className="skill-level-info">
          <span className={`skill-level-badge ${getSkillLevelColor(skill.level)}`}>
            {getSkillLevelText(skill.level)}
          </span>
          <span className="skill-percentage">{skill.level}%</span>
        </div>
      </div>
      
      <div className="skill-bar-track">
        <div 
          className={`skill-bar-fill ${getSkillLevelColor(skill.level)}`}
          style={{ width: `${width}%` }}
        >
          <div className="skill-bar-shine"></div>
        </div>
      </div>
    </div>
  );
};

export default SkillBar;