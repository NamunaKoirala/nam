
import React from 'react';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Calculator',
      description: 'A simple calculator application for basic arithmetic operations.',
      tags: ['JavaScript', 'HTML', 'CSS'],
      demoLink: '#',
      codeLink: 'https://github.com/NamunaKoirala/calculator',
      icon: 'fas fa-calculator'
    },
    {
      id: 2,
      title: 'Portfolio',
      description: 'A personal portfolio website showcasing projects and skills.',
      tags: ['React', 'CSS', 'JavaScript'],
      demoLink: '#',
      codeLink: 'https://github.com/NamunaKoirala/portfolio',
      icon: 'fas fa-user'
    },
    {
      id: 3,
      title: 'Portfoiloo',
      description: 'A responsive portfolio project with creative design elements.',
      tags: ['HTML', 'CSS', 'JavaScript'],
      demoLink: '#',
      codeLink: 'https://github.com/NamunaKoirala/portfoiloo',
      icon: 'fas fa-briefcase'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>My Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-icon">
                <i className={project.icon}></i>
              </div>
              <div className="project-content">
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="project-tag">{tag}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.demoLink} className="project-link demo" target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                  <a href={project.codeLink} className="project-link code" target="_blank" rel="noopener noreferrer">
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
