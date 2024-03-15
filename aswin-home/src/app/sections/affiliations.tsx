export default function Affiliations() {
    return (
        <section className="affiliations-container">
            <div className="affiliations">
                <div className="partneships">
                    <h2>Partnerships</h2>
                    <span>I got to work with some of the most amazing companies on earth</span>
                    <div className="parter-orgs">
                        <div className="partner-info">
                            <img src="./resources/amazon.svg" className="partner-logo"/>
                            <p>Amazon is my current employer and I already completed around 2 years in the Amazon Appstore org. At Appstore, I led development of an Android SDK for integration of Android apps in Windows 11 and a catalog analysis system. My current team owns various services that power Appstore submissions. You could read more about my experience at Amazon in <a href="https://aswinrajeev.medium.com/1-year-amazon-as-sde-ii-how-has-it-been-so-far-391f60bafe94?source=user_profile---------2----------------------------">in this article</a>.</p>    
                        </div>
                        <div className="partner-info">
                            <img src="./resources/cisco.svg" className="partner-logo"/>
                            <p>My tenure at Cisco was short (exactly a year), but I learnt much more in this one year than the previous years. I was part of the WebEx product development team and led the development of a major micro-service responsible for one-time and continuous synchronisation of data from legacy contact services to WebEx.</p>    
                        </div>
                        <div className="partner-info">
                            <img src="./resources/tcs.svg" className="partner-logo"/>
                            <p>I worked at TCS Research for over 7 years in Software Developer and Researcher roles. My tenure at TCS Research enabled me to analyse problem space deeply and think big for the solutions available. I created 2 distinct patents in this tenure and was part of various research initiatives including digital twins, data integration and migration and software architecture.</p>    
                        </div>
                    </div>
                </div>
            </div>
      </section>
    );
}