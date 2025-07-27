import React from 'react';
import { Award, ExternalLink, CheckCircle, Calendar, Building } from 'lucide-react';
import './CertificationCard.css';

const CertificationCard = ({ certification, index }) => {
  return (
    <div className="modern-card">
      <div className="flex items-center justify-between mb-4">
        <div className="icon-wrapper">
          <Award className="h-6 w-6" />
        </div>
        {certification.verified && (
          <div className="badge badge-success">
            <CheckCircle className="h-3 w-3" />
            <span>Verified</span>
          </div>
        )}
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">{certification.title}</h3>
        
        <div className="flex items-center gap-2 text-sm">
          <Building className="h-4 w-4 text-primary-color" />
          <span className="font-medium text-primary-color">{certification.issuer}</span>
        </div>

        <div className="flex items-center gap-2 text-sm text-secondary">
          <Calendar className="h-4 w-4" />
          <span>{certification.date}</span>
        </div>

        <p className="text-secondary leading-relaxed text-sm">
          {certification.description}
        </p>

        <div>
          <h4 className="font-medium mb-2 text-sm">Skills Covered:</h4>
          <div className="flex flex-wrap gap-2">
            {certification.skills.map((skill, idx) => (
              <span key={idx} className="badge">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {certification.certificateUrl && certification.certificateUrl !== '#' && (
          <div className="pt-2 border-t border-border-color">
            <a 
              href={certification.certificateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-modern btn-modern-outline w-full justify-center text-sm"
            >
              <ExternalLink className="h-4 w-4" />
              View Certificate
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default CertificationCard;