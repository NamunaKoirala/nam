
import "@fortawesome/fontawesome-free/css/all.min.css";
import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="portfolio">
      <Navbar 
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      <Hero setActiveSection={setActiveSection} />
      <About />
      <Skills />
      <Projects />
      <Gallery />
      <Contact />
      <Footer setActiveSection={setActiveSection} />
    </div>
  );
}
