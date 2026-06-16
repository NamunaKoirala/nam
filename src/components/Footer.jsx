
import React from 'react';

export default function Footer({ setActiveSection }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Namuna Koirala</h4>
            <p>Aspiring Individual passionate about creating innovative technological solutions.</p>
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
              <p><i className="fas fa-map-marker-alt"></i> Bhaktapur, Nepal</p>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Follow Me</h4>
            <div className="footer-social">
              <a href ="https://github.com/NamunaKoirala" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
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
          <p>&copy; Namuna Koirala. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
