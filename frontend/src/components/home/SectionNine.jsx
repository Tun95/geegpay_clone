import React from "react";
import "./styles.scss";
import img15 from "../../assets/home/img15.jpeg";
import { Fade } from "react-awesome-reveal";

function SectionNine({ FadeImg }) {
  return (
    <section className="section_9">
      <div className="section_content container">
        <div className="content">
          <div className="left">
            <div className="background"></div>
            <FadeImg bottom>
              <img className="img1" src={img15} alt="" />
            </FadeImg>
          </div>
          <div className="right">
            <Fade cascade direction="up" triggerOnce damping={0.1}>
              <h6>OUR USERS ARE HAPPY WITH US !</h6>
              <div className="star_icons d_flex">
                <i className="fa-sharp fa-solid fa-star"></i>
                <i className="fa-sharp fa-solid fa-star"></i>
                <i className="fa-sharp fa-solid fa-star"></i>
              </div>
              <h2>Converting at transparent rates!</h2>
              <p>
                “ The fact I can get salary in USD and also sell at a good
                exchange rate on the same platform and still have a USD salary
                account makes Geegpay the best. Salary advance also makes my
                life easier. Thanks Geegpay❤️“
              </p>
              <div className="bottom f_flex">
                <div className="user f_flex">
                  <i className="fa-solid fa-user-tie"></i>
                  <div className="name_status">
                    <h5>Wale</h5>
                    <div className="status">Product Designer</div>
                  </div>
                </div>
                <div className="arrows a_flex">
                  <i className="fa-solid h_flex fa-chevron-left"></i>
                  <i className="fa-solid h_flex fa-chevron-right"></i>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionNine;
