import React from 'react';
import { EXPERIENCE } from '../../utils/constants';
import ExperienceCard from '../ui/ExperienceCard';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            Passionate developer with experience in mobile and web development, 
            always eager to learn and create innovative solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div className="modern-card">
              <h3 className="text-2xl font-bold mb-4">My Journey</h3>
              <p className="text-secondary leading-relaxed mb-4">
                I'm a passionate developer currently pursuing B.Tech in Computer Science at VIT Andhra Pradesh 
                with hands-on experience in mobile and web development. My journey began with curiosity about 
                technology and has evolved into expertise in Android development, MERN stack, and modern web technologies.
              </p>
              <p className="text-secondary leading-relaxed">
                With experience as an Android Developer Intern at Imarticus and multiple successful projects 
                including AI chatbots and emotion classification systems, I'm always eager to learn new technologies 
                and take on challenging projects that push the boundaries of innovation.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">Experience</h3>
            <div className="timeline">
              {EXPERIENCE.map((exp, index) => (
                <ExperienceCard key={index} experience={exp} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;