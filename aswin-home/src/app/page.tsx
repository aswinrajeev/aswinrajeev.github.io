import { Fragment } from "react";
import About from "./sections/about";
import Header from "./sections/header";
import Footer from "./sections/footer";
import Affiliations from "./sections/affiliations";

export default function Home() {
  return (
    <Fragment>
      <Header/>
      <About/>
      <Affiliations/>
      <Footer/>
    </Fragment>
  );
}
