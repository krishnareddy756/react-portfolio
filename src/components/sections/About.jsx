import React from 'react';
import { EXPERIENCE } from '../../utils/constants';
import ExperienceCard from '../ui/ExperienceCard';
import AnimatedSection, { StaggeredContainer, TextReveal } from '../animations/AnimatedSection';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <AnimatedSection animation="fadeInUp" className="section-header">
          <h2 className="section-title">About Me</h2>
          <div className="section-divider"></div>
          <TextReveal 
            text="Passionate developer with experience in mobile and web development, always eager to learn and create innovative solutions."
            className="section-subtitle"
            delay={0.2}
          />
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <AnimatedSection animation="fadeInLeft" delay={0.3} className="space-y-6">
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
          </AnimatedSection>

          <AnimatedSection animation="fadeInRight" delay={0.4} className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">Experience</h3>
            <StaggeredContainer className="timeline" staggerDelay={0.2}>
              {EXPERIENCE.map((exp, index) => (
                <ExperienceCard key={index} experience={exp} index={index} />
              ))}
            </StaggeredContainer>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default About;