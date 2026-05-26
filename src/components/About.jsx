
import React from 'react';

export default function About() {
  return (
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
              I am passionate about programming and technology. My journey in programming and 
              web development has equipped me with various skills and technologies that I continue to 
              expand upon every day. I love solving problems through code and creating user-friendly applications.
            </p>
            <p>
              I believe in continuous learning and am always excited to take on new challenges in the 
              field of technology and software development. My goal is to become skilled in coding 
              and contribute to innovative technological solutions.
            </p>
          </div>
          <div className="about-photo">
            <img 
              src="../assets/qfx.jpeg" 
              alt="Namuna Koirala - About" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
