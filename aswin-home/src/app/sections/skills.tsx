export default function Skills() {
    return (
        <section className="skills-container">
            <div className="skills">
                <h2>Skills</h2>
                <span>These are my go-to tools and technologies when I build stuff</span>
                <div className="skill-items">
                    <img src="/resources/java.svg" className="skill-icon"/>
                    <img src="/resources/python.svg" className="skill-icon"/>
                    <img src="/resources/nodejs.svg" className="skill-icon adaptive"/>
                    <img src="/resources/spring.svg" className="skill-icon" style={{"padding": "1.2em"}}/>
                    <img src="/resources/react.svg" className="skill-icon" style={{"padding": "1.2em"}}/>
                    <img src="/resources/electron.svg" className="skill-icon"/>
                    <img src="/resources/aws.svg" className="skill-icon adaptive"/>
                    <img src="/resources/postgres.svg" className="skill-icon"/>
                    <img src="/resources/vscode.png" className="skill-icon"/>
                    <img src="/resources/intellij.png" className="skill-icon" style={{"padding": "1em"}}/>
                    <img src="/resources/github.svg" className="skill-icon adaptive"/>
                </div>
            </div>
        </section>
    );
}