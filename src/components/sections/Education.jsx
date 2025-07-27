import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react';
import { EDUCATION } from '../../utils/constants';
import './Education.css';

const Education = () => {
  return (
    <section id="education" className="education-section section-padding">
      <div className="container">
        <div className="education-header">
          <h2 className="education-title">
            <span className="education-title-gradient">
              Education
            </span>
          </h2>
          <div className="education-title-underline"></div>
          <p className="education-description">
            My academic journey and educational background in Computer Science
          </p>
        </div>

        <div className="education-content">
          {EDUCATION.map((edu, index) => (
            <div key={edu.id} className="education-card">
              <div className="education-card-header">
                <div className="education-icon-wrapper">
                  <GraduationCap className="education-icon" />
                </div>
                <div className="education-badge">
                  Current
                </div>
              </div>

              <div className="education-card-content">
                <h3 className="education-institution">{edu.institution}</h3>
                <h4 className="education-degree">{edu.degree}</h4>
                
                <div className="education-meta">
                  <div className="education-duration">
                    <Calendar className="education-meta-icon" />
                    <span>{edu.duration}</span>
                  </div>
                  <div className="education-location">
                    <MapPin className="education-meta-icon" />
                    <span>{edu.location}</span>
                  </div>
                </div>

                <div className="education-cgpa">
                  <Award className="education-cgpa-icon" />
                  <span className="education-cgpa-label">CGPA:</span>
                  <span className="education-cgpa-value">{edu.cgpa}/10.0</span>
                </div>

                <p className="education-description-text">
                  {edu.description}
                </p>

                <div className="education-highlights">
                  <h5 className="education-highlights-title">
                    <BookOpen className="education-highlights-icon" />
                    Key Focus Areas:
                  </h5>
                  <ul className="education-highlights-list">
                    <li>Data Structures and Algorithms</li>
                    <li>Software Development</li>
                    
                    <li>Database Management</li>
                    <li>Machine Learning</li>
                    <li>Deep Learning</li>
                    <li>NLP</li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Academic Stats */}
        <div className="education-stats">
          <div className="education-stat">
            <div className="education-stat-number">8.64</div>
            <div className="education-stat-label">Current CGPA</div>
          </div>
          <div className="education-stat">
            <div className="education-stat-number">2026</div>
            <div className="education-stat-label">Expected Graduation</div>
          </div>
          <div className="education-stat">
            <div className="education-stat-number">4</div>
            <div className="education-stat-label">Years Program</div>
          </div>
          <div className="education-stat">
            <div className="education-stat-number">CS</div>
            <div className="education-stat-label">Major</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;