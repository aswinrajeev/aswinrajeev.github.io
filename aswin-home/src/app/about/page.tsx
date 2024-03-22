import { Fragment } from "react";
import Header from "../sections/header";
import AboutMe from "../sections/about-me";
import Footer from "../sections/footer";

export default function AboutPage() {
    return (
        <Fragment>
            <Header/>
            <AboutMe/>
            <Footer/>
        </Fragment>
    );
}