import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card group relative" style={{
      background: 'var(--background-secondary)',
      borderColor: 'var(--border-color)'
    }}>
      <div className={`project-image h-48 ${project.image} relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
        <div className="absolute top-4 right-4 flex gap-2">
          {project.githubUrl && project.githubUrl !== '#' && (
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-link p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors"
              aria-label="View GitHub Repository"
            >
              <Github size={16} className="text-white" />
            </a>
          )}
          {project.liveUrl && project.liveUrl !== '#' && (
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-link p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors"
              aria-label="View Live Demo"
            >
              <ExternalLink size={16} className="text-white" />
            </a>
          )}
        </div>
      </div>
      <div className="p-6">
        <h3 className="project-title text-xl font-bold mb-2 transition-colors" style={{ color: 'var(--text-primary)' }}>
          {project.title}
        </h3>
        {project.subtitle && (
          <p className="project-subtitle text-sm mb-2" style={{ color: 'var(--primary-color)' }}>
            {project.subtitle}
          </p>
        )}
        <p className="project-description mb-4 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span 
              key={index} 
              className="project-tech-tag px-3 py-1 rounded-full text-sm transition-colors"
              style={{ 
                backgroundColor: 'var(--background-tertiary)', 
                color: 'var(--primary-color)',
                border: '1px solid var(--border-color)'
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;