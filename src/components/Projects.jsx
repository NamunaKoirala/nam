
import React from 'react';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Student Management System',
      description: 'A comprehensive system for managing student records, grades, and attendance built with modern web technologies.',
      tags: ['React', 'CSS', 'JavaScript'],
      demoLink: '#',
      codeLink: '#',
      icon: 'fas fa-graduation-cap'
    },
    {
      id: 2,
      title: 'Personal Blog Website',
      description: 'A responsive blog platform with admin panel, user authentication, and content management features.',
      tags: ['HTML', 'CSS', 'WordPress'],
      demoLink: '#',
      codeLink: '#',
      icon: 'fas fa-blog'
    },
    {
      id: 3,
      title: 'Calculator App',
      description: 'A modern calculator application with advanced mathematical functions and responsive design.',
      tags: ['C++', 'Java'],
      demoLink: '#',
      codeLink: '#',
      icon: 'fas fa-calculator'
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
