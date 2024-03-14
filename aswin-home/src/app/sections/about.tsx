export default function About() {
    return (
        <section className="about-section">
            <div className="about">
                <div className="display-pic">
                    <img src="/dp.jpg" alt="Display picture"/>
                </div>
                <h1 className="hello">Hello</h1>
                <h2 className="tagline">My name is Aswin</h2>
                <p className="intro">
                    I&apos;m a software engineer with over 10 years of experience in software engineering and currently work at Amazon. I&apos;m skilled in software development involving a wide range of technologies and programming languages. Passionate about tech, mentoring, and writing on software engineering topics.
                </p>
                <div className="social">
                    <a href="https://blog.aswin.me"><li className="button adaptive"><i className="bi bi-medium"></i><span className="social-text"> Blog at Medium</span></li></a>
                    <a href="https://www.linkedin.com/in/aswinrajeev"><li className="button adaptive"><i className="bi bi-linkedin"></i><span className="social-text"> LinkedIn Profile</span></li></a>
                    <a href="https://www.github.com/aswinrajeev"><li className="button adaptive"><i className="bi bi-github"></i><span className="social-text"> Projects</span></li></a>
                </div>
            </div>
      </section>
    );
}