import React from 'react'

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="section-container">

        <p className="section-subtitle">My Technical Skills</p>

        <h2>Skills</h2>

        <div className="skills-container">

          <div className="skill-card">
            <h3>Frontend Development</h3>

            <div className="skill-list">
              <span>HTML5</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>React.js</span>
              <span>Bootstrap</span>
              <span>jQuery</span>
            </div>
          </div>

          <div className="skill-card">
            <h3>Backend & Database</h3>

            <div className="skill-list">
              <span>Python</span>
              <span>MongoDB</span>
            </div>
          </div>

          <div className="skill-card">
            <h3>Tools</h3>

            <div className="skill-list">
              <span>Git</span>
              <span>GitHub</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Skills;
