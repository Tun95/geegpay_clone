import React from "react";
import img from "../../assets/home/img.png";
import img4 from "../../assets/home/img4.jpeg";
import img5 from "../../assets/home/img5.png";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

function SectionFour() {
  return (
    <section className="section_4">
      <div className="section_content container">
        <div className="content">
          <div className="left">
            <div className="img">
              <div className="img_style">
                <span className="background"></span>
                <Fade bottom>
                  <img className="img1" src={img4} alt="banner" />
                </Fade>
                <Fade bottom delay={300}>
                  <img className="img2" src={img} alt="" />
                </Fade>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="img">
              <Fade bottom>
                <img src={img5} alt="icon" />
              </Fade>
            </div>
            <div className="right_content">
              <Fade bottom>
                <h6>SMART INVOICING</h6>
              </Fade>
              <Fade bottom>
                <h2>Auto-Bill your Employer</h2>
              </Fade>
              <Fade bottom>
                <p>
                  Let Geegpay generate your monthly or weekly invoice so that
                  you can focus on what matters. Our system can auto-bill your
                  employers using your settings. Keep track of your invoices for
                  future evidence.
                </p>
              </Fade>
              <Fade bottom>
                <Link to="" className="link_animate">
                  Learn More
                </Link>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionFour;
