import React from 'react';
import { Calendar, MapPin, Building, Award, CheckCircle } from 'lucide-react';
import './ExperienceCard.css';

const ExperienceCard = ({ experience, index }) => {
  return (
    <div className="timeline-item">
      <div className="modern-card">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="icon-wrapper">
              <Building className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">{experience.position}</h3>
              <p className="text-primary-color font-medium">{experience.company}</p>
            </div>
          </div>
          {experience.type && (
            <div className="badge badge-primary">
              {experience.type}
            </div>
          )}
        </div>
        
        <div className="flex flex-wrap gap-4 mb-4 text-sm text-secondary">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>{experience.duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span>{experience.location}</span>
          </div>
        </div>

        <div className="space-y-3">
          {experience.description.map((item, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <CheckCircle className="h-4 w-4 text-success-color mt-0.5 flex-shrink-0" />
              <span className="text-secondary leading-relaxed">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;