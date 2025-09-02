
import React from 'react';

export default function Navbar({ activeSection, setActiveSection, mobileMenuOpen, setMobileMenuOpen }) {
  return (
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
  );
}
