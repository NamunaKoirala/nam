
import React from 'react';

export default function Contact() {
  return (
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
  );
}
