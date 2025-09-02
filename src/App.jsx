
import React, { useState, useEffect } from 'react';
import './App.css';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    { 
      id: 1, 
      title: 'Mountain View Adventure', 
      image: '/attached_assets/WhatsApp Image 2025-09-02 at 20.41.14_1df4fa2b_1756825093302.jpg', 
      description: 'Exploring the beautiful landscapes of Nepal with stunning mountain views',
      location: 'Kathmandu Valley',
      category: 'Travel Photography'
    },
    { 
      id: 2, 
      title: 'Traditional Fashion Style', 
      image: '/attached_assets/WhatsApp Image 2025-09-02 at 20.41.15_51f6764d_1756825095867.jpg', 
      description: 'Embracing traditional Nepali fashion with modern photography techniques',
      location: 'Cultural Heritage Site',
      category: 'Portrait Photography'
    },
    { 
      id: 3, 
      title: 'Natural Rock Formations', 
      image: '/attached_assets/WhatsApp Image 2025-09-02 at 20.41.18_56895b6e_1756825098112.jpg', 
      description: 'Capturing the raw beauty of Nepal\'s geological wonders and natural formations',
      location: 'Rocky Terrain',
      category: 'Nature Photography'
    },
    { 
      id: 4, 
      title: 'Scenic Bridge Journey', 
      image: '/attached_assets/WhatsApp Image 2025-09-02 at 20.41.18_ed394e4a_1756825104058.jpg', 
      description: 'Adventure photography showcasing Nepal\'s infrastructure against natural backdrops',
      location: 'Mountain Bridge',
      category: 'Adventure Photography'
    },
    { 
      id: 5, 
      title: 'Creative Night Vision', 
      image: '/attached_assets/WhatsApp Image 2025-09-02 at 20.41.20_5e4c899d_1756825106620.jpg', 
      description: 'Experimental photography exploring creative lighting and atmospheric effects',
      location: 'Urban Setting',
      category: 'Creative Photography'
    }
  ];

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
          <div className="hamburger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
            <li><a href="#home" onClick={() => {setActiveSection('home'); setMobileMenuOpen(false);}}>Home</a></li>
            <li><a href="#about" onClick={() => {setActiveSection('about'); setMobileMenuOpen(false);}}>About</a></li>
            <li><a href="#skills" onClick={() => {setActiveSection('skills'); setMobileMenuOpen(false);}}>Skills</a></li>
            <li><a href="#projects" onClick={() => {setActiveSection('projects'); setMobileMenuOpen(false);}}>Projects</a></li>
            <li><a href="#gallery" onClick={() => {setActiveSection('gallery'); setMobileMenuOpen(false);}}>Gallery</a></li>
            <li><a href="#contact" onClick={() => {setActiveSection('contact'); setMobileMenuOpen(false);}}>Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-container">
          <div className="hero-image mobile-first">
            <img 
              src="/attached_assets/WhatsApp Image 2025-09-02 at 20.41.14_0b8f1508_1756824985726.jpg" 
              alt="Namuna Koirala" 
              className="profile-photo"
            />
          </div>
          <div className="hero-content">
            <h1>Hi, I'm <span className="highlight">Namuna Koirala</span></h1>
            <h3>Aspiring Computer Engineer</h3>
            <p>Currently studying Grade 12 at Adarsha Secondary School, passionate about technology, programming, and creating innovative solutions through code.</p>
            <div className="hero-buttons">
              <button className="btn-primary" onClick={() => setActiveSection('about')}>About Me</button>
              <button className="btn-secondary" onClick={() => setActiveSection('contact')}>Get In Touch</button>
            </div>
            <div className="hero-social-links">
              <a href="https://www.instagram.com/n.amunaa/" target="_blank" rel="noopener noreferrer" className="hero-social-link">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.facebook.com/namuna.ko.irala.986219" target="_blank" rel="noopener noreferrer" className="hero-social-link">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="mailto:namunakoirala506@gmail.com" className="hero-social-link">
                <i className="fas fa-envelope"></i>
              </a>
              <a href="tel:+9779767413656" className="hero-social-link">
                <i className="fas fa-phone"></i>
              </a>
            </div>
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

      {/* Gallery Section */}
      <section id="gallery" className="gallery">
        <div className="container">
          <h2>Latest Design Gallery</h2>
          <div className="modern-gallery">
            <div className="gallery-display">
              <div className="gallery-images-stack">
                {galleryImages.map((item, index) => (
                  <div
                    key={item.id}
                    className={`gallery-image-card ${index === currentSlide ? 'active' : ''} ${
                      index === (currentSlide + 1) % galleryImages.length ? 'next' : ''
                    }`}
                    style={{
                      zIndex: index === currentSlide ? 3 : index === (currentSlide + 1) % galleryImages.length ? 2 : 1,
                      transform: `
                        ${index === currentSlide ? 'translateX(0) scale(1)' : 
                          index === (currentSlide + 1) % galleryImages.length ? 'translateX(30%) scale(0.85)' : 
                          'translateX(60%) scale(0.7)'}
                      `
                    }}
                  >
                    <img src={item.image} alt={item.title} />
                    <div className="image-overlay">
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                      <div className="image-meta">
                        <span><i className="fas fa-map-marker-alt"></i> {item.location}</span>
                        <span><i className="fas fa-camera"></i> {item.category}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="gallery-navigation">
              <div className="gallery-counter">
                <span>Image {currentSlide + 1} of {galleryImages.length}</span>
              </div>
              
              <div className="gallery-direct-buttons">
                {galleryImages.map((_, index) => (
                  <button
                    key={index}
                    className={`direct-btn ${index === currentSlide ? 'active' : ''}`}
                    onClick={() => goToSlide(index)}
                  >
                    Direct to {index + 1}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2>Get In Touch</h2>
          <p>I'm always excited to connect with fellow developers, potential collaborators, or anyone interested in technology. Feel free to reach out!</p>
          
          <div className="contact-grid">
            <div className="contact-info">
              <h3>Let's Connect</h3>
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:namunakoirala506@gmail.com">namunakoirala506@gmail.com</a>
                </div>
              </div>
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <div>
                  <h4>Phone</h4>
                  <a href="tel:+9779767413656">+977 9767413656</a>
                </div>
              </div>
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <h4>Location</h4>
                  <span>Kathmandu, Nepal</span>
                </div>
              </div>
            </div>
            
            <div className="contact-form">
              <h3>Send a Message</h3>
              <form>
                <div className="form-group">
                  <input type="text" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <input type="text" placeholder="Subject" required />
                </div>
                <div className="form-group">
                  <textarea rows="5" placeholder="Your Message" required></textarea>
                </div>
                <button type="submit" className="btn-primary contact-btn">Send Message</button>
              </form>
            </div>
          </div>
          
          <div className="social-links">
            <a href="https://www.instagram.com/n.amunaa/" target="_blank" rel="noopener noreferrer" className="social-link instagram">
              <i className="fab fa-instagram"></i>
              Instagram
            </a>
            <a href="https://www.facebook.com/namuna.ko.irala.986219" target="_blank" rel="noopener noreferrer" className="social-link facebook">
              <i className="fab fa-facebook"></i>
              Facebook
            </a>
            <a href="mailto:namunakoirala506@gmail.com" className="social-link email">
              <i className="fas fa-envelope"></i>
              Email
            </a>
            <a href="tel:+9779767413656" className="social-link phone">
              <i className="fas fa-phone"></i>
              Call
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>Namuna Koirala</h4>
              <p>Aspiring Computer Engineer passionate about creating innovative technological solutions.</p>
            </div>
            
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#home" onClick={() => setActiveSection('home')}>Home</a></li>
                <li><a href="#about" onClick={() => setActiveSection('about')}>About</a></li>
                <li><a href="#skills" onClick={() => setActiveSection('skills')}>Skills</a></li>
                <li><a href="#projects" onClick={() => setActiveSection('projects')}>Projects</a></li>
                <li><a href="#gallery" onClick={() => setActiveSection('gallery')}>Gallery</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Contact Info</h4>
              <div className="footer-contact">
                <p><i className="fas fa-envelope"></i> namunakoirala506@gmail.com</p>
                <p><i className="fas fa-phone"></i> +977 9767413656</p>
                <p><i className="fas fa-map-marker-alt"></i> Kathmandu, Nepal</p>
              </div>
            </div>
            
            <div className="footer-section">
              <h4>Follow Me</h4>
              <div className="footer-social">
                <a href="https://www.instagram.com/n.amunaa/" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://www.facebook.com/namuna.ko.irala.986219" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="mailto:namunakoirala506@gmail.com">
                  <i className="fas fa-envelope"></i>
                </a>
                <a href="tel:+9779767413656">
                  <i className="fas fa-phone"></i>
                </a>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 2024 Namuna Koirala. All rights reserved. | Built with passion and React.js</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
