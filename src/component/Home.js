function Home() {
  return (
    <section id="home" className="home">
      <div className="home-content">

        <p className="greeting">Hi, I'm</p>

        <h1>Jeneka AD</h1>

        <h2>Frontend Developer</h2>

        <p className="intro">
          I build responsive and user-friendly web applications
          using HTML, CSS, JavaScript, and React.js.
        </p>

        <div className="home-buttons">
          <a href="#projects" className="primary-btn">
            View My Projects
          </a>

          <a href="/resume.pdf" download className="secondary-btn">
            Download Resume
          </a>
        </div>

        <div className="social-links">
          <a
            href="https://github.com/Jeneka09"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/jeneka-a-d"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a href="mailto:jenekaad2005@gmail.com">
            Email
          </a>
        </div>

      </div>
    </section>
  );
}

export default Home;
