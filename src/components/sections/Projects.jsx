import React, { useState } from 'react';
import { Github, ExternalLink, Calendar, Tag, Filter } from 'lucide-react';
import { PROJECTS } from '../../utils/constants';
import AnimatedSection, { StaggeredContainer, HoverAnimation } from '../animations/AnimatedSection';
import './Projects.css';

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  
  // Get unique categories for filtering
  const categories = ['All', ...new Set(PROJECTS.map(project => project.category))];
  
  // Filter projects based on selected category
  const filteredProjects = selectedFilter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(project => project.category === selectedFilter);

  return (
    <section id="projects" className="section">
      <div className="container">
        <AnimatedSection animation="fadeInUp" className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            A showcase of my recent work and personal projects that demonstrate my technical skills and problem-solving abilities.
          </p>
        </AnimatedSection>

        {/* Project Filter */}
        <AnimatedSection animation="fadeInUp" delay={0.2} className="projects-filter">
          <div className="filter-header">
            <Filter className="h-5 w-5" />
            <span>Filter by Category</span>
          </div>
          <div className="filter-buttons">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedFilter(category)}
                className={`filter-btn ${selectedFilter === category ? 'active' : ''}`}
              >
                {category}
              </button>
            ))}
          </div>
        </AnimatedSection>

        <StaggeredContainer className="projects-grid" staggerDelay={0.15}>
          {filteredProjects.map((project, index) => (
            <HoverAnimation key={project.id} className="project-card modern-card" scale={1.02} y={-8}>
              {/* Project Header */}
              <div className="project-header">
                <div className="project-category">
                  <Tag className="h-4 w-4" />
                  <span>{project.category}</span>
                </div>
                <div className="project-status">
                  <div className={`status-indicator ${project.status.toLowerCase()}`}></div>
                  <span>{project.status}</span>
                </div>
              </div>

              {/* Project Title */}
              <div className="project-title-section">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-subtitle">{project.subtitle}</p>
              </div>

              {/* Project Description */}
              <p className="project-description">{project.description}</p>

              {/* Project Features */}
              <div className="project-features">
                <h4 className="project-features-title">Key Features:</h4>
                <ul className="project-features-list">
                  {project.features.slice(0, 3).map((feature, idx) => (
                    <li key={idx} className="project-feature-item">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="project-technologies">
                <h4 className="project-tech-title">Technologies:</h4>
                <div className="project-tech-list">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="project-tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Links */}
              <div className="project-links">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-modern btn-modern-outline project-link"
                >
                  <Github className="h-4 w-4" />
                  Code
                </a>
                {project.liveUrl && project.liveUrl !== '#' && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-modern btn-modern-primary project-link"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                )}
              </div>
            </HoverAnimation>
          ))}
        </StaggeredContainer>

        {/* View More Projects */}
        <div className="projects-footer">
          <a
            href={PROJECTS[0]?.githubUrl?.replace(/\/[^\/]*$/, '') || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-modern btn-modern-outline projects-view-all"
          >
            <Github className="h-4 w-4" />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;