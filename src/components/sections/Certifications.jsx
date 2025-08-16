import React from 'react';
import CertificationCard from '../ui/CertificationCard';
import { CERTIFICATIONS } from '../../utils/constants';
import './Certifications.css';

const Certifications = () => {
  return (
    <section id="certifications" className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Certifications</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            Professional certifications and credentials that validate my technical expertise
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="certifications-grid">
          {CERTIFICATIONS.map((certification, index) => (
            <CertificationCard 
              key={certification.id} 
              certification={certification} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;