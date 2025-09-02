
import React, { useState, useEffect } from 'react';
import './App.css';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [currentSlide, setCurrentSlide] = useState(0);

  const skills = [
    { name: 'C', icon: 'fab fa-cuttlefish' },
    { name: 'C++', icon: 'fas fa-code' },
    { name: 'Java', icon: 'fab fa-java' },
    { name: 'C#', icon: 'fas fa-hashtag' },
    { name: 'HTML', icon: 'fab fa-html5' },
    { name: 'CSS', icon: 'fab fa-css3-alt' },
    { name: 'JavaScript', icon: 'fab fa-js-square' },
    { name: 'React.js', icon: 'fab fa-react' },
    { name: 'Figma', icon: 'fab fa-figma' },
    { name: 'WordPress', icon: 'fab fa-wordpress' },
    { name: 'Bootstrap', icon: 'fab fa-bootstrap' }
  ];

  const galleryImages = [
    { id: 1, title: 'Mountain View Adventure', image: '/attached_assets/WhatsApp Image 2025-09-02 at 20.41.14_1df4fa2b_1756825093302.jpg', description: 'Beautiful mountain scenery with cityscape view' },
    { id: 2, title: 'Evening Style', image: '/attached_assets/WhatsApp Image 2025-09-02 at 20.41.15_51f6764d_1756825095867.jpg', description: 'Stylish evening look with leather jacket' },
    { id: 3, title: 'Rock Formation Explorer', image: '/attached_assets/WhatsApp Image 2025-09-02 at 20.41.18_56895b6e_1756825098112.jpg', description: 'Adventure photography at natural rock formations' },
    { id: 4, title: 'Bridge Adventure', image: '/attached_assets/WhatsApp Image 2025-09-02 at 20.41.18_ed394e4a_1756825104058.jpg', description: 'Scenic bridge with mountain valley backdrop' },
    { id: 5, title: 'Night Photography', image: '/attached_assets/WhatsApp Image 2025-09-02 at 20.41.20_5e4c899d_1756825106620.jpg', description: 'Creative night photography with lighting effects' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Student Management System',
      description: 'A comprehensive system for managing student records, grades, and attendance built with modern web technologies.',
      image: 'https://via.placeholder.com/350x200/000000/ffc0cb?text=Student+Management',
      tags: ['React', 'CSS', 'JavaScript'],
      demoLink: '#',
      codeLink: '#'
    },
    {
      id: 2,
      title: 'Personal Blog Website',
      description: 'A responsive blog platform with admin panel, user authentication, and content management features.',
      image: 'https://via.placeholder.com/350x200/1a1a1a/ffc0cb?text=Blog+Website',
      tags: ['HTML', 'CSS', 'WordPress'],
      demoLink: '#',
      codeLink: '#'
    },
    {
      id: 3,
      title: 'Calculator App',
      description: 'A modern calculator application with advanced mathematical functions and responsive design.',
      image: 'https://via.placeholder.com/350x200/ffc0cb/000000?text=Calculator+App',
      tags: ['C++', 'Java'],
      demoLink: '#',
      codeLink: '#'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [galleryImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="portfolio">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <h2 className="logo">K.Namuna</h2>
          <ul className="nav-menu">
            <li><a href="#home" onClick={() => setActiveSection('home')}>Home</a></li>
            <li><a href="#about" onClick={() => setActiveSection('about')}>About</a></li>
            <li><a href="#skills" onClick={() => setActiveSection('skills')}>Skills</a></li>
            <li><a href="#projects" onClick={() => setActiveSection('projects')}>Projects</a></li>
            <li><a href="#gallery" onClick={() => setActiveSection('gallery')}>Gallery</a></li>
            <li><a href="#contact" onClick={() => setActiveSection('contact')}>Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1>Hi, I'm <span className="highlight">Namuna Koirala</span></h1>
            <h3>Aspiring Computer Engineer</h3>
            <p>Currently studying Grade 12 at Adarsha Secondary School, passionate about technology, programming, and creating innovative solutions through code.</p>
            <div className="hero-buttons">
              <button className="btn-primary" onClick={() => setActiveSection('about')}>About Me</button>
              <button className="btn-secondary" onClick={() => setActiveSection('contact')}>Get In Touch</button>
            </div>
          </div>
          <div className="hero-image">
            <img 
              src="/attached_assets/WhatsApp Image 2025-09-02 at 20.41.14_0b8f1508_1756824985726.jpg" 
              alt="Namuna Koirala" 
              className="profile-photo"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2>About Me</h2>
          <div className="about-container">
            <div className="about-text">
              <p>
                Hello! I'm Namuna Koirala, a dedicated student currently pursuing my Grade 12 education at 
                Adarsha Secondary School. I have successfully completed my SEE (Secondary Education Examination) 
                from the same institution with excellent results.
              </p>
              <p>
                I am passionate about computer engineering and technology. My journey in programming and 
                web development has equipped me with various skills and technologies that I continue to 
                expand upon every day. I love solving problems through code and creating user-friendly applications.
              </p>
              <p>
                I believe in continuous learning and am always excited to take on new challenges in the 
                field of technology and software development. My goal is to become a skilled computer engineer 
                and contribute to innovative technological solutions.
              </p>
            </div>
            <div className="about-photo">
              <img 
                src="/attached_assets/WhatsApp Image 2025-09-02 at 20.41.14_0b8f1508_1756824985726.jpg" 
                alt="Namuna Koirala - About" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <h2>Skills & Technologies</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-card">
                <i className={skill.icon}></i>
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2>My Projects</h2>
          <div className="projects-grid">
            {projects.map((project) => (
              <div key={project.id} className="project-card">
                <img src={project.image} alt={project.title} className="project-image" />
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

      {/* Gallery Section */}
      <section id="gallery" className="gallery">
        <div className="container">
          <h2>Latest Design Gallery</h2>
          <div className="gallery-slider">
            <div 
              className="gallery-track" 
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {galleryImages.map((item) => (
                <div key={item.id} className="gallery-slide">
                  <img src={item.image} alt={item.title} />
                  <div className="gallery-slide-overlay">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="gallery-controls">
            <button className="gallery-btn" onClick={prevSlide}>
              <i className="fas fa-chevron-left"></i> Previous
            </button>
            <button className="gallery-btn" onClick={nextSlide}>
              Next <i className="fas fa-chevron-right"></i>
            </button>
          </div>
          <div className="gallery-dots">
            {galleryImages.map((_, index) => (
              <div
                key={index}
                className={`gallery-dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              ></div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2>Get In Touch</h2>
          <p>Feel free to reach out to me through social media! Let's connect and collaborate.</p>
          <div className="social-links">
            <a href="https://www.instagram.com/n.amunaa/" target="_blank" rel="noopener noreferrer" className="social-link instagram">
              <i className="fab fa-instagram"></i>
              Instagram
            </a>
            <a href="https://www.facebook.com/namuna.ko.irala.986219" target="_blank" rel="noopener noreferrer" className="social-link facebook">
              <i className="fab fa-facebook"></i>
              Facebook
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Namuna Koirala. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
