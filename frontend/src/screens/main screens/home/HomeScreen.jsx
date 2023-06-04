import React from "react";
import Footer from "../../../common/footer/Footer";
import Navbar from "../../../common/nav bar/Navbar";
import SectionEight from "../../../components/home/SectionEight";
import SectionFive from "../../../components/home/SectionFive";
import SectionFour from "../../../components/home/SectionFour";
import SectionNine from "../../../components/home/SectionNine";
import SectionOne from "../../../components/home/SectionOne";
import SectionSeven from "../../../components/home/SectionSeven";
import SectionSix from "../../../components/home/SectionSix";
import SectionTen from "../../../components/home/SectionTen";
import SectionThree from "../../../components/home/SectionThree";
import SectionTwo from "../../../components/home/SectionTwo";
import "./styles.scss";
import Fade from "react-reveal/Fade";

function HomeScreen() {
  return (
    <>
      <div className="home">
        {/* Nav Bar*/}
        <Navbar />
        <div className="home_content">
          <SectionOne />
          <SectionTwo />
          <SectionThree FadeImg={Fade} />
          <SectionFour FadeList={Fade} />
          <SectionFive FadeList={Fade} />
          <SectionSix FadeImg={Fade} />
          <SectionSeven FadeImg={Fade} />
          <SectionEight FadeList={Fade} />
          <SectionNine FadeImg={Fade} />
          <SectionTen />
        </div>
        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}

export default HomeScreen;
