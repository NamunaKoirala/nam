
import React, { useState } from 'react';
import './App.css';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  const skills = [
    'C', 'C++', 'Java', 'C#', 'HTML', 'CSS', 'JavaScript', 
    'React.js', 'Figma', 'WordPress', 'Bootstrap'
  ];

  const galleryImages = [
    { id: 1, title: 'Project 1', image: 'https://via.placeholder.com/300x200/ff69b4/ffffff?text=Web+Design' },
    { id: 2, title: 'Project 2', image: 'https://via.placeholder.com/300x200/ffb6c1/ffffff?text=Mobile+App' },
    { id: 3, title: 'Project 3', image: 'https://via.placeholder.com/300x200/ff1493/ffffff?text=UI%2FUX' },
    { id: 4, title: 'Project 4', image: 'https://via.placeholder.com/300x200/ffc0cb/ffffff?text=Graphics' },
    { id: 5, title: 'Project 5', image: 'https://via.placeholder.com/300x200/db7093/ffffff?text=Website' },
    { id: 6, title: 'Project 6', image: 'https://via.placeholder.com/300x200/ff69b4/ffffff?text=Portfolio' }
  ];

  return (
    <div className="portfolio">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <h2 className="logo">Namuna Koirala</h2>
          <ul className="nav-menu">
            <li><a href="#home" onClick={() => setActiveSection('home')}>Home</a></li>
            <li><a href="#about" onClick={() => setActiveSection('about')}>About</a></li>
            <li><a href="#skills" onClick={() => setActiveSection('skills')}>Skills</a></li>
            <li><a href="#gallery" onClick={() => setActiveSection('gallery')}>Gallery</a></li>
            <li><a href="#contact" onClick={() => setActiveSection('contact')}>Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Hi, I'm <span className="highlight">Namuna Koirala</span></h1>
          <h3>Aspiring Computer Engineer</h3>
          <p>Currently studying Grade 12 at Adarsha Secondary School, passionate about technology and web development.</p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={() => setActiveSection('about')}>About Me</button>
            <button className="btn-secondary" onClick={() => setActiveSection('contact')}>Get In Touch</button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2>About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                Hello! I'm Namuna Koirala, a dedicated student currently pursuing my Grade 12 education at 
                Adarsha Secondary School. I have successfully completed my SEE (Secondary Education Examination) 
                from the same institution.
              </p>
              <p>
                I am passionate about computer engineering and technology. My journey in programming and 
                web development has equipped me with various skills and technologies that I continue to 
                expand upon every day.
              </p>
              <p>
                I believe in continuous learning and am always excited to take on new challenges in the 
                field of technology and software development.
              </p>
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
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="gallery">
        <div className="container">
          <h2>Latest Design Gallery</h2>
          <div className="gallery-grid">
            {galleryImages.map((item) => (
              <div key={item.id} className="gallery-item">
                <img src={item.image} alt={item.title} />
                <div className="gallery-overlay">
                  <h4>{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2>Get In Touch</h2>
          <p>Feel free to reach out to me through social media!</p>
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
