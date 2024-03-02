import { Fragment } from "react";

export default function Home() {
  return (
    <div className="about">
      <div className="display-pic">
        <img src="/dp.jpg"/>
      </div>
      <div className="hello">Hello</div>
      <div className="tagline">I am a Software Development Engineer</div>
      <div className="intro">I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.</div>
      <div className="social">
        <a href="https://blog.aswin.me"><li><i className="bi bi-medium"></i> Blog at Medium</li></a>
        <a href="https://www.linkedin.com/in/aswinrajeev"><li><i className="bi bi-linkedin"></i> LinkedIn Profile</li></a>
        <a href="https://www.github.com/aswinrajeev"><li><i className="bi bi-github"></i> Projects</li></a>
      </div>
    </div>
  );
}
