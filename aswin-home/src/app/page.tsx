import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <header className="header">
        <img className="logo" src="/aswinrajeev.webp" alt="Aswin Rajeev logo"/>
        <nav className="navbar">
          <ul>
            <a href="/"><li className="nav-link">Home</li></a>
            <a href="https://blog.aswin.me"><li className="nav-link">Blog</li></a>
            <a href="#"><li className="nav-link">Works</li></a>
            <a href="#"><li className="nav-link">About</li></a>
            <a href="#"><li className="nav-link">Contact</li></a>
          </ul>
        </nav>
      </header>
      <div className="about">
        <div className="display-pic">
          <img src="/dp.jpg" alt="Display picture"/>
        </div>
        <div className="hello">Hello</div>
        <div className="tagline">I am a Software Development Engineer</div>
        <div className="intro">I am a paragraph. Click here to add your own text and edit me. I am a great place for you to tell a story and let your users know a little more about you.</div>
        <div className="social">
          <a href="https://blog.aswin.me"><li><i className="bi bi-medium"></i> <span className="social-text">Blog at Medium</span></li></a>
          <a href="https://www.linkedin.com/in/aswinrajeev"><li><i className="bi bi-linkedin"></i> <span className="social-text">LinkedIn Profile</span></li></a>
          <a href="https://www.github.com/aswinrajeev"><li><i className="bi bi-github"></i> <span className="social-text">Projects</span></li></a>
        </div>
      </div>
    </Fragment>
  );
}
