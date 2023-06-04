import React from "react";
import "./styles.scss";
import img9 from "../../assets/home/img9.png";
import img12 from "../../assets/home/img12.jpeg";
import img10 from "../../assets/home/img10.png";
import img11 from "../../assets/home/img11.png";
import { Fade } from "react-awesome-reveal";

function SectionSix({ FadeImg }) {
  return (
    <section className="section_6">
      <div className="section_content s_flex">
        <div className="content ">
          <div className="left background h_flex">
            <div className="inner_content">
              <Fade cascade direction="up" damping={0.1}>
                <img className="img1" src={img9} alt="" />
                <h6>MOBILE APP</h6>
                <h2>Do more on the go.</h2>
                <p>Geegpay is coming soon to Google and Apple store!</p>
              </Fade>
              <div className="app_store a_flex">
                <Fade cascade damping={0.1} direction="up">
                  <img className="img2" src={img10} alt="" />
                  <img className="img3" src={img11} alt="" />
                </Fade>
              </div>
            </div>
          </div>

          <div className="right">
            <FadeImg bottom>
              <img src={img12} alt="" />
            </FadeImg>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionSix;
