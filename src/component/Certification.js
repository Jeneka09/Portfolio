import React from "react";

function Certifications() {
  const certifications = [
    {
      title: "Full Stack Sprink: Learn, Build, Deploy",
      institution: "Kpr Institute of Engineering and Technology",
      duration: "Feb 2025 - Jan 2026",
      mode: "Virtual, Coimbatore"
    },
    {
      title: "MERN Stack",
      institution: "Besant Technologies",
      duration: "June 2026 ",
      mode: "Virtual, Chennai"
    }
  ];

  return (
    <section id="certifications" className="certifications">
      <div className="section-container">

        <p className="section-subtitle">Learning & Training</p>

        <h2>Certifications & Training</h2>

        <div className="certifications-container">
          {certifications.map((item, index) => (
            <div className="certification-card" key={index}>

              <h3>{item.title}</h3>

              <h4>{item.institution}</h4>

              <p>{item.duration}</p>

              <span>{item.mode}</span>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Certifications;