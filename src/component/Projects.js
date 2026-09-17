import React from 'react'

function Projects() {
  const projects = [
    {
      title: "AI Resume Analyser",
      description:
        "A responsive web application that extracts text from PDF resumes and performs keyword-based ATS-style analysis. It identifies detected and missing technical skills and provides improvement suggestions.",
      technologies: "React.js | JavaScript | HTML5 | CSS3 | PDF.js",
      github: "https://github.com/Jeneka09/AI-RESUME-ANALYSER"
    },

    {
      title: "Earthquake Impact Rapid Map",
      description:
        "A real-time geospatial intelligence dashboard that visualizes earthquake events with impact radius analysis, population exposure estimation, and infrastructure overlays.",
      technologies: "Next.js | TypeScript | Tailwind CSS | FastAPI",
      github: "https://github.com/Jeneka09/earthquake-impact-rapid-map-JENEKA"
    },

    {
      title: "Movie Ticket Booking System",
      description:
        "A responsive movie ticket booking application that allows users to browse movies, select showtimes, and book seats through an interactive interface.",
      technologies: "HTML | CSS | JavaScript",
      github: "https://github.com/Jeneka09/Movie-Ticket-Booking-System"
    },

    {
      title: "Expense Tracker",
      description:
        "An expense management application for tracking daily income and expenses with real-time balance updates and JavaScript-based CRUD operations.",
      technologies: "HTML | CSS | JavaScript",
      github: "https://github.com/Jeneka09/Expense-Tracker"
    },

    {
      title: "GST Calculator",
      description:
        "A web application for calculating Goods and Services Tax (GST) for various products and services.",
      technologies: "HTML | CSS | JavaScript",
      github: "https://github.com/Jeneka09/GST-Calculator"
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="section-container">

        <p className="section-subtitle">My Recent Work</p>

        <h2>Projects</h2>

        <div className="projects-container">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>

              <div className="project-content">
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <span className="technologies">
                  {project.technologies}
                </span>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="project-btn"
                >
                  GitHub
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;
