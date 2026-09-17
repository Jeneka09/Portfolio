import React from 'react'

function Education() {
  const education = [
    {
      degree: "B.Tech – Artificial Intelligence and Data Science",
      institution: "Amrita College of Engineering and Technology",
      duration: "2023 - 2026",
      result: "CGPA: 8.61 / 10"
    },
    {
      degree: "HSC – Tamil Nadu State Board",
      institution: "Gnanadeepam Matriculation Higher Secondary School",
      duration: "2022",
      result: "Percentage: 83.50%"
    },
    {
      degree: "SSLC – Tamil Nadu State Board",
      institution: "Gnanadeepam Matriculation Higher Secondary School",
      duration: "2020",
      result: "Percentage: 85.20%"
    }
  ];

  return (
    <section id="education" className="education">
      <div className="section-container">

        <p className="section-subtitle">My Academic Journey</p>

        <h2>Education</h2>

        <div className="education-container">
          {education.map((item, index) => (
            <div className="education-card" key={index}>

              <div className="education-year">
                {item.duration}
              </div>

              <div className="education-content">
                <h3>{item.degree}</h3>
                <h4>{item.institution}</h4>
                <p>{item.result}</p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Education;
