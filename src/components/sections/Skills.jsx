import React from 'react';
import { Code, Globe, Wrench } from 'lucide-react';
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

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            Technologies and tools I work with in my development projects
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


      </div>
    </section>
  );
};

export default Skills;