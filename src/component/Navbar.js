function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        JENEKA AD
      </div>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>

        <a href="/resume.pdf" download className="resume-btn">
          Resume
        </a>
      </div>
    </nav>
  );
}

export default Navbar;