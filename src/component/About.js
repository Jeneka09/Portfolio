import React from 'react'

function About() {
  return (
    <section id="about" className="about">
      <div className="section-container">

        <p className="section-subtitle">Get To Know Me</p>

        <h2>About Me</h2>

        <div className="about-content">

          <div className="about-text">
            <p>
              I'm Jeneka AD, a B.Tech graduate in Artificial Intelligence
              and Data Science with a strong interest in frontend development.
            </p>

            <p>
              I enjoy creating responsive and user-friendly web applications
              using HTML, CSS, JavaScript, and React.js. I also have experience
              working with Python and MongoDB.
            </p>

            <p>
              I'm passionate about learning new technologies, improving my
              development skills, and building practical applications that
              provide a good user experience.
            </p>
          </div>

          <div className="about-info">

            <div className="info-card">
              <h3>Education</h3>
              <p>B.Tech – Artificial Intelligence and Data Science</p>
              <span>CGPA: 8.61 / 10</span>
            </div>

            <div className="info-card">
              <h3>Focus</h3>
              <p>Frontend Development</p>
              <span>React.js & JavaScript</span>
            </div>

            <div className="info-card">
              <h3>Location</h3>
              <p>Kanniyakumari, Tamil Nadu</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;
