import React from 'react';
import { Github, ExternalLink, Calendar, Tag } from 'lucide-react';
import { PROJECTS } from '../../utils/constants';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            A showcase of my recent work and personal projects that demonstrate my technical skills and problem-solving abilities.
          </p>
        </div>

        <div className="projects-grid">
          {PROJECTS.map((project, index) => (
            <div key={project.id} className="project-card modern-card">
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
            </div>
          ))}
        </div>

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