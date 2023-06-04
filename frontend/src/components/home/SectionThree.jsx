import React from "react";
import "./styles.scss";
import img2 from "../../assets/home/img2.png";
import img3 from "../../assets/home/img3.png";
import { Fade } from "react-awesome-reveal";

function SectionThree({ FadeImg }) {
  return (
    <section className="section_3">
      <div className="section_content container">
        <div className="content">
          <div className="left">
            <div className="img">
              <img src={img2} alt="icon" />
            </div>
            <div className="left_content">
              <Fade cascade direction="up" damping={0.1}>
                <h6>FOREIGN BANK ACCOUNTS</h6>
                <h2>Get free instant USD, EUR, GBP Accounts.</h2>
                <p>
                  Reduce cost and avoid delay in getting paid from your employer
                  by creating a personalized foreign bank accounts to start
                  receiving money like a pro you are!
                </p>
                <ul className="list">
                  <li className="a_flex">
                    <i className="fa-solid fa-check icon_green h_flex"></i>
                    <span>Save money on international inflow.</span>
                  </li>
                  <Fade direction="up" delay={500}>
                    <li className="a_flex">
                      <i className="fa-solid fa-check icon_green h_flex"></i>
                      <span>No maintenance cost . No minimum balance.</span>
                    </li>
                  </Fade>
                </ul>{" "}
              </Fade>
            </div>
          </div>
          <div className="right">
            <div className="right_img">
              <FadeImg bottom>
                <img src={img3} alt="banner" />
              </FadeImg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionThree;
