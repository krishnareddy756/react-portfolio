import React from 'react';
import { Award, CheckCircle } from 'lucide-react';
import { CERTIFICATIONS } from '../../utils/constants';
import './Certifications.css';

const Certifications = () => {
  const certificationCategories = [
    {
      title: 'Development Certifications',
      icon: <Award className="w-5 h-5" />,
      certifications: CERTIFICATIONS.filter(cert => 
        cert.title.includes('Developer') || cert.title.includes('MERN')
      ),
      color: 'blue'
    },
    {
      title: 'Cloud & Infrastructure',
      icon: <Award className="w-5 h-5" />,
      certifications: CERTIFICATIONS.filter(cert => 
        cert.title.includes('AWS') || cert.title.includes('Cloud')
      ),
      color: 'orange'
    }
  ];

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

        {/* Certifications Categories */}
        <div className="certifications-categories">
          {certificationCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="certifications-category modern-card">
              <div className="certifications-category-header">
                <div className={`certifications-category-icon certifications-icon-${category.color}`}>
                  {category.icon}
                </div>
                <h3 className="certifications-category-title">{category.title}</h3>
              </div>
              
              <div className="certifications-list">
                {category.certifications.map((cert, certIndex) => (
                  <a 
                    key={certIndex} 
                    href={cert.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="certification-tag certification-link"
                    title={`View ${cert.title} certificate`}
                  >
                    {cert.title} - {cert.issuer}
                    {cert.verified && (
                      <CheckCircle className="h-3 w-3 ml-2 text-success-color" />
                    )}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;