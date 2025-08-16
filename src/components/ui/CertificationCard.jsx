import React from 'react';
import { 
  ExternalLink, 
  CheckCircle, 
  Calendar, 
  Building, 
  Smartphone, 
  Cloud, 
  Database, 
  Layers,
  Award
} from 'lucide-react';
import './CertificationCard.css';

const CertificationCard = ({ certification, index }) => {
  // Icon mapping for logos
  const getLogoIcon = (logoName) => {
    const iconMap = {
      'smartphone': Smartphone,
      'cloud': Cloud,
      'database': Database,
      'layers': Layers,
      'award': Award
    };
    
    const IconComponent = iconMap[logoName] || Award;
    return <IconComponent className="certification-logo-icon" />;
  };

  return (
    <div className={`certification-card certification-card-${certification.color}`}>
      {/* Certificate Header with Logo */}
      <div className="certification-header">
        <div className={`certification-logo certification-logo-${certification.color}`}>
          {getLogoIcon(certification.logo)}
        </div>
        
        {certification.verified && (
          <div className="verification-badge">
            <CheckCircle className="verification-icon" />
            <span>Verified</span>
          </div>
        )}
      </div>

      {/* Certificate Content */}
      <div className="certification-content">
        <div className="certification-category">
          {certification.category}
        </div>
        
        <h3 className="certification-title">{certification.title}</h3>
        
        <div className="certification-issuer">
          <Building className="issuer-icon" />
          <span>{certification.issuer}</span>
        </div>

        <div className="certification-date">
          <Calendar className="date-icon" />
          <span>{certification.date}</span>
        </div>

        <p className="certification-description">
          {certification.description}
        </p>

        {/* Skills Tags */}
        <div className="certification-skills">
          <h4 className="skills-title">Skills Covered:</h4>
          <div className="skills-tags">
            {certification.skills.map((skill, idx) => (
              <span key={idx} className={`skill-tag skill-tag-${certification.color}`}>
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* View Certificate Button */}
        {certification.certificateUrl && certification.certificateUrl !== '#' && (
          <div className="certification-actions">
            <a 
              href={certification.certificateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`view-certificate-btn view-certificate-btn-${certification.color}`}
            >
              <ExternalLink className="btn-icon" />
              <span>View Certificate</span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default CertificationCard;