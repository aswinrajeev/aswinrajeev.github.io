export default function Skills() {
    return (
        <section className="skills-container">
            <div className="skills">
                <h2>Skills</h2>
                <span>These are my go-to tools and technologies when I build stuff</span>
                <div className="skill-items">
                    <img src="/resources/java.svg" className="skill-icon" alt="Java programming language logo" title="Java"/>
                    <img src="/resources/python.svg" className="skill-icon" alt="Python programming language logo" title="Python"/>
                    <img src="/resources/nodejs.svg" className="skill-icon adaptive" alt="NodeJs logo"  title="JavaScript/NodeJs"/>
                    <img src="/resources/spring.svg" className="skill-icon" style={{"padding": "1.2em"}} alt="Spring logo" title="Spring/Spring Boot"/>
                    <img src="/resources/react.svg" className="skill-icon" style={{"padding": "1.2em"}} alt="ReactJs logo" title="React"/>
                    <img src="/resources/electron.svg" className="skill-icon" alt="Electron framework logo" title="Electron for desktop applications"/>
                    <img src="/resources/aws.svg" className="skill-icon adaptive" alt="AWS logo" title="AWS Cloud"/>
                    <img src="/resources/postgres.svg" className="skill-icon" alt="Postgres logo" title="Postgres RDBMD"/>
                    <img src="/resources/vscode.png" className="skill-icon" alt="Visual Studio Code logo" title="VSCode IDE"/>
                    <img src="/resources/intellij.png" className="skill-icon" style={{"padding": "1em"}} alt="IntelliJ logo" title="IntelliJ IDE"/>
                    <img src="/resources/github.svg" className="skill-icon adaptive" alt="GitHub logo" title="Git/GitHub"/>
                </div>
            </div>
        </section>
    );
}