
import React from 'react';

export default function Hero({ setActiveSection }) {
  return (
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
  );
}
