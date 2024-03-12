export default function CareerAndSkills() {
    return (
        <section className="career-skills-container">
            <div className="career-skills">
                <div className="career cs-section">
                    <h1>Career</h1>
                    <div className="career-org">
                        <div className="org">
                            <img className="org-logo" src="/resources/amazon.svg"/>
                            <h2 className="org-title">Amazon Development Centre (India)</h2>
                        </div>
                        <div className="role">
                            <h2 className="role-title">Software Development Engineer (SDE II)</h2>
                            <h3 className="role-tenure">June 2022 to Present</h3>
                            <span className="role-description">Lorem ipsum......</span>
                        </div>
                    </div>
                    <div className="career-org">
                        <div className="org">
                            <img className="org-logo" src="/resources/cisco.svg"/>
                            <h2 className="org-title">Cisco Systems (India)</h2>
                        </div>
                        <div className="role">
                            <h2 className="role-title">Software Development Engineer (SDE II)</h2>
                            <h3 className="role-tenure">June 2022 to Present</h3>
                            <span className="role-description">Lorem ipsum......</span>
                        </div>
                    </div>
                    <div className="career-org">
                        <div className="org">
                            <img className="org-logo" src="/resources/tcs.svg" width={70}/>
                            <h2 className="org-title">TCS Research</h2>
                        </div>
                        <div className="role">
                            <h2 className="role-title">Software Development Engineer (SDE II)</h2>
                            <h3 className="role-tenure">June 2022 to Present</h3>
                            <span className="role-description">Lorem ipsum......</span>
                        </div>
                        <div className="role">
                            <h2 className="role-title">Software Development Engineer (SDE II)</h2>
                            <h3 className="role-tenure">June 2022 to Present</h3>
                            <span className="role-description">Lorem ipsum......</span>
                        </div>
                    </div>
                </div>
                <div className="skills cs-section">
                    <h1>Skills</h1>
                </div>
            </div>
      </section>
    );
}