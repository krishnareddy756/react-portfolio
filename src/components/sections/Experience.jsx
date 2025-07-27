import React from 'react';
import { Calendar, MapPin, Building, Award } from 'lucide-react';
import { EXPERIENCE } from '../../utils/constants';
import ExperienceCard from '../ui/ExperienceCard';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Professional Experience</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            My professional journey and hands-on experience in software development
          </p>
        </div>

        <div className="timeline">
          {EXPERIENCE.map((exp, index) => (
            <ExperienceCard key={exp.id} experience={exp} index={index} />
          ))}
        </div>

        {/* Experience Summary Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          <div className="stat-item">
            <div className="stat-number">1+</div>
            <div className="stat-label">Years Experience</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">3+</div>
            <div className="stat-label">Projects Completed</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">5+</div>
            <div className="stat-label">Technologies Used</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">1</div>
            <div className="stat-label">Internship</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;