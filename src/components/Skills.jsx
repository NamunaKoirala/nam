
import React from 'react';

export default function Skills() {
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

  return (
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
  );
}
