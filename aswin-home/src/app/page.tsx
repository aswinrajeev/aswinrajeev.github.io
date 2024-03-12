import { Fragment } from "react";
import About from "./sections/about";
import Header from "./sections/header";
import Footer from "./sections/footer";
import CareerAndSkills from "./sections/career-skills";

export default function Home() {
  return (
    <Fragment>
      <Header/>
      <About/>
      <CareerAndSkills/>
      <Footer/>
    </Fragment>
  );
}
