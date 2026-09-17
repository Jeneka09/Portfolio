import React from "react";

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="section-container">

        <p className="section-subtitle">Get In Touch</p>

        <h2>Contact Me</h2>

        <p className="contact-intro">
          I'm currently looking for opportunities as a Frontend Developer.
          Feel free to reach out if you'd like to connect or discuss a project.
        </p>

        <div className="contact-container">

          <a
            href="mailto:jenekaad2005@gmail.com"
            className="contact-card"
          >
            <h3>Email</h3>
            <p>jenekaad2005@gmail.com</p>
          </a>

          <a
            href="https://github.com/Jeneka09"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <h3>GitHub</h3>
            <p>github.com/Jeneka09</p>
          </a>

          <a
            href="https://www.linkedin.com/in/jeneka-a-d"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <h3>LinkedIn</h3>
            <p>linkedin.com/in/jeneka-a-d</p>
          </a>

        </div>

      </div>
    </section>
  );
}

export default Contact;