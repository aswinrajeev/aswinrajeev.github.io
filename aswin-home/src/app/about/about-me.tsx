import { Fragment } from "react";

export default function AboutMe() {
    return (
        <Fragment>
            <section className="about-page-section">
                <div className="about">
                    <div className="display-pic">
                        <img src="/dp.jpg" alt="Display picture"/>
                    </div>
                    <h1 className="hello">Hello</h1>
                    <h2 className="tagline">My name is Aswin</h2>
                    <div className="intro">
                        <div className="intro-p">
                            <p>I am a software engineer with over 10 years of experience in developing and delivering software solutions. I currently work at Amazon and am part of the Amazon Appstore team, working on app submissions pipelines and various tools to help developers who publish through Amazon Appstore. My previous experience includes working with TCS Research and Cisco as a software developer, researcher, and training faculty.</p>
                            <p>Throughout my career, I have worked on a variety of software projects, ranging from prototype research solutions to cloud-based enterprise solutions. I have expertise in various programming languages and frameworks, including Java, Python, NodeJs, Spring Boot and Electron. My passion for technology and problem-solving drives me to continuously learn and evolve my skills.</p>
                            <p>When I&apos;m not working, I enjoy driving, photography, reading and binge-watching. I am also committed to giving back to the community through education and mentoring. If you are looking for a dedicated and experienced software engineer, please don’t hesitate to get in touch with me.</p>
                            <p>I try to regularly write articles on software engineering, career stories, technology, gadgets, movies and books. If you are interested, please do see my blog.</p>
                        </div>
                        <a href="https://aswinrajeev.medium.com" className="button adaptive">Take me to the blog</a>
                    </div>
                </div>
            </section>
            
        </Fragment>
    );
}