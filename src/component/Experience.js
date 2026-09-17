import React from 'react';

function Experience() {
  const experiences = [
    {
      role: "Data Science Intern",
      company: "Corizo",
      duration: "Aug 2025 - Dec 2025",
      description:
        "Worked with machine learning algorithms and data visualization tools such as Pandas, Matplotlib, and Tableau. Gained hands-on experience with real-life datasets, data cleaning, and data analysis."
    },
    {
      role: "Data Analytics Intern",
      company: "AgileTribers Tech Solutions",
      duration: "Jun 2025 - Jul 2025",
      description:
        "Analyzed user engagement data to identify trends and provide actionable recommendations. Collaborated with the development team using Git and GitHub to support data-driven application enhancements."
    },
    {
      role: "Machine Learning Intern",
      company: "Suven Consultants & Technology Pvt Ltd",
      duration: "Jun 2024",
      description:
        "Learned machine learning algorithms and gained hands-on experience with machine learning programming using Python."
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="section-container">

        <p className="section-subtitle">My Professional Journey</p>

        <h2>Experience</h2>

        <div className="experience-container">
          {experiences.map((experience, index) => (
            <div className="experience-card" key={index}>

              <div className="experience-date">
                {experience.duration}
              </div>

              <div className="experience-content">
                <h3>{experience.role}</h3>

                <h4>{experience.company}</h4>

                <p>{experience.description}</p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Experience;