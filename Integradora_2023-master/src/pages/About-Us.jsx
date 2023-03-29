import React from "react";
import { HeaderAbout, AboutVideo, OurStory, InnovationHub, Experience} from "../componentes/About-Us/aboutUs.jsx"
import { Navbar, Footer } from '../componentes/Home/headerAndNavbar';

class AboutUs extends React.Component {
  render() {
    return (
      <div className="About-Us">
        <Navbar />
          <HeaderAbout />
          <AboutVideo />
          <Experience />
          <OurStory />
          <InnovationHub />
        <Footer />
      </div>
    );
  }
}

export default AboutUs;
