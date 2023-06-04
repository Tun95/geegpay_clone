import React from "react";
import "./styles.scss";
import img1 from "../../assets/home/img1.jpeg";
// import { fadeIn, merge, slideInUp } from "react-animations";
// import { StyleSheet, css } from "aphrodite";
import { Fade } from "react-awesome-reveal";
import { useNavigate } from "react-router-dom";

// const fadeInSlide = merge(fadeIn, slideInUp);

// const styles = StyleSheet.create({
//   animSlideInUpSpan: {
//     animationName: fadeInSlide,
//     animationDuration: "0.2s",
//     animationIterationCount: "1",
//   },
//   animSlideInUph1: {
//     animationName: fadeInSlide,
//     animationDuration: "1s",
//     animationIterationCount: "1",
//   },
//   animSlideInUplist: {
//     animationName: fadeInSlide,
//     animationDuration: "1.5s",
//     animationIterationCount: "1",
//   },
//   animSlideInUpbtn: {
//     animationName: fadeInSlide,
//     animationDuration: "2s",
//     animationIterationCount: "1",
//   },
//   animSlideInUpImg: {
//     animationName: fadeInSlide,
//     animationDuration: "0.8s",
//     animationIterationCount: "1",
//     visibility: "visible",
//   },
// });
function SectionOne() {
  const navigate = useNavigate();

  return (
    <section className="section_1">
      <div className="background"></div>
      <div className="section_content container">
        <div className="content mtb">
          <div className="left">
            <Fade cascade direction="up" triggerOnce damping={0.3}>
              <div className={`span_info a_flex `}>
                <i className="fa-solid fa-check h_flex"></i>
                <span>Get paid in minutes</span>
              </div>
              <div className="info">
                <h1>Digital Financial Platform for the Gig Economy.</h1>
              </div>
              <ul className={`list `}>
                <li>
                  Create a USD, GBP, EUR accounts to receive payments for your
                  gigs.
                </li>
                <li>Automate employer billing.</li>
                <li>Debit cards for easy spending.</li>
                <li>Build your credit score.</li>
              </ul>
              <div className={`btn_btn`}>
                <button onClick={() => navigate("/register")} className="btn">
                  Open an account
                </button>
              </div>
            </Fade>
          </div>
          {/* <AnimationOnScroll animateIn="fadeIn"> */}
          <div className="right">
            <div className="img_right">
              <Fade direction="up" triggerOnce>
                <img src={img1} alt="banner" />
              </Fade>
            </div>
          </div>
          {/* </AnimationOnScroll> */}
        </div>
      </div>
    </section>
  );
}

export default SectionOne;
