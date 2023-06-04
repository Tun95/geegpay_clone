import React from "react";
import "./styles.scss";
// import { Link } from "react-router-dom";
import PaidIcon from "@mui/icons-material/Paid";
import { Fade } from "react-awesome-reveal";
import { useNavigate } from "react-router-dom";

function SectionEight({ FadeList }) {
  const navigate = useNavigate();
  return (
    <section className="section_8 background">
      <div className="section_content container">
        <div className="content f_flex">
          <div className="box ">
            <div className="box_header">
              <Fade cascade direction="up" triggerOnce damping={0.1}>
                <h6>GET MORE FROM OUR PARTNERS</h6>
                <h2>We’re there during rainy days.</h2>
                <span className="link_span">
                  <button onClick={() => navigate("/register")} className="btn">
                    Start Now
                  </button>
                </span>
              </Fade>
            </div>
          </div>
          <div className="box_list">
            <div className=" f_flex">
              <div className="box">
                <div className="header a_flex">
                  <Fade cascade direction="up">
                    <span className="span_icon h_flex">
                      <PaidIcon className=" mui_icon " />
                    </span>{" "}
                  </Fade>
                  <h5>Salary Advance</h5>
                </div>
                <ul>
                  <FadeList bottom>
                    <li className="a_flex">
                      <i className="fa-regular fa-circle-check"></i>
                      <span>Low interest salary advance</span>
                    </li>
                  </FadeList>
                  <Fade cascade direction="up">
                    <li className="a_flex">
                      <i className="fa-regular fa-circle-check"></i>
                      <span>
                        We provide your pay evidence to lending platforms
                      </span>
                    </li>
                  </Fade>
                </ul>
              </div>
              <div className="box">
                <div className="header a_flex">
                  <Fade cascade direction="up">
                    <i className="fa-solid fa-book icon h_flex"></i>
                  </Fade>
                  <h5>BNPL</h5>
                </div>
                <ul>
                  <FadeList bottom>
                    <li className="a_flex">
                      <i className="fa-regular fa-circle-check"></i>
                      <span>Get your home-office equipments</span>
                    </li>
                  </FadeList>
                  <Fade cascade direction="up">
                    <li className="a_flex">
                      <i className="fa-regular fa-circle-check"></i>
                      <span>
                        Alternative power-source to boost your productivity
                      </span>
                    </li>
                  </Fade>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionEight;
