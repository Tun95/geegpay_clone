import React from "react";
import "./styles.scss";
import { Link } from "react-router-dom";
import img6 from "../../assets/home/img6.png";
import img7 from "../../assets/home/img7.png";
import img8 from "../../assets/home/img8.png";
import { Fade } from "react-awesome-reveal";
function SectionFive({ FadeList }) {
  const data = [
    {
      img: img6,
      title: "Free Transfer",
      desc: "Easily send and receive money from friends and families at zero cost using Geeg tag or email.",
    },
    {
      img: img7,
      title: "Multi-withdrawal Channels",
      desc: "Withdraw your fund to banks and mobile money in over 100 countries, Paypal, Wise and Revolut.",
    },
    {
      img: img8,
      title: "Instant Exchange",
      desc: "Exchange foreign currency to NGN, KES, GHS and others at competitive exchange rates in seconds.",
    },
  ];

  return (
    <section className="section_5">
      <div className="section_content container">
        <div className="content">
          <div className="header s_flex">
            <span>
              <Fade cascade direction="up" damping={0.1}>
                <h6>DO MORE WITH GEEGPAY</h6>
                <h2>
                  Hustle smartly with a full-stack online bank account that
                  suits your needs.
                </h2>
              </Fade>
            </span>
          </div>
          <div className="info_box">
            {data.map(({ img, title, desc }, index) => (
              <div className="box" key={index}>
                <FadeList bottom>
                  <img src={img} alt="" />
                </FadeList>
                <FadeList bottom>
                  <h4>{title}</h4>
                </FadeList>
                <FadeList bottom>
                  <span className="descrition">
                    <p>{desc}</p>
                  </span>
                </FadeList>
                <span className="link_span s_flex">
                  <Fade direction="up">
                    <Link to="/register" className="link_animate">
                      GET STARTED NOW
                    </Link>
                  </Fade>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionFive;
