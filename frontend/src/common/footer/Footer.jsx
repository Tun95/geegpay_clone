import React from "react";
import "./styles.scss";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo/logo.png";
import { Fade } from "react-awesome-reveal";

function Footer() {
  const navigate = useNavigate();
  return (
    <footer className="footer">
      <div className="footer_box container">
        <div className="footer_content">
          <div className="box_1">
            <span className="block f_flex">
              <Fade cascade direction="up" triggerOnce damping={0.2}>
                <h2>
                  Meet Geegpay, the platform <br /> for smart & ambitious
                  people.
                </h2>
                <div className="link_btn">
                  <button onClick={() => navigate("/register")} className="btn">
                    Open an account
                  </button>
                </div>
              </Fade>
            </span>
          </div>

          <div className="box_2">
            <div className="logo_sub_text">
              {" "}
              <Fade cascade direction="up" triggerOnce damping={0.1}>
                <div className="logo">
                  <img src={logo} alt="" />
                </div>
                <p className="sub_text">
                  Made for smart productive people <br /> support@geegpay.africa
                </p>
              </Fade>
            </div>
            <div className="list">
              <div className="list_1">
                <Fade cascade direction="up" triggerOnce damping={0.1}>
                  <div className="title">Pages</div>
                  <ul>
                    <li>
                      <Link to="">About Us</Link>
                    </li>
                    <li>
                      <Link to="">Contact Us</Link>
                    </li>
                    <li>
                      <Link to="">Business</Link>
                    </li>
                  </ul>
                </Fade>
              </div>
              <div className="list_1">
                <Fade cascade direction="up" triggerOnce damping={0.1}>
                  <div className="title">Account</div>
                  <ul>
                    <li>
                      <Link to="/login">Log in</Link>
                    </li>
                    <li>
                      <Link to="/register">Sign up</Link>
                    </li>
                  </ul>
                </Fade>
              </div>
              <div className="list_1">
                <Fade cascade direction="up" triggerOnce damping={0.1}>
                  <div className="title">Company</div>
                  <ul>
                    <li>
                      <Link to="/terms-of-service">Terms of service</Link>
                    </li>
                    <li>
                      <Link to="/privacy-policy">Privacy Policy</Link>
                    </li>
                  </ul>
                </Fade>
              </div>
            </div>
          </div>
          <div className="box_3 f_flex">
            <span className="right_reserve">
              &#64; All rights reserved. Geegpay
            </span>
            <div className="social_icons">
              <a href="/#" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="/#" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="/#" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
