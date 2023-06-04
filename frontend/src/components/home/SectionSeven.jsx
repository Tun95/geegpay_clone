import React, { useState } from "react";
import "./styles.scss";
import img13 from "../../assets/home/img13.jpeg";
import img14 from "../../assets/home/img14.png";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

function SectionSeven({ FadeImg }) {
  // ===Virtual==//
  const [virtual, setVirtual] = useState(true);
  const closeVirtual = () => {
    setVirtual(false);
    document.body.style.overflow = "unset";
  };
  const showVirtual = () => {
    setVirtual(true);
  };
  const VirtualList = () => {
    showVirtual();
    closePhysical();
  };

  // ===Physical==//
  const [physical, setPhysical] = useState(false);
  const closePhysical = () => {
    setPhysical(false);
    document.body.style.overflow = "unset";
  };
  const showPhysical = () => {
    setPhysical(true);
  };
  const PhysicalList = () => {
    showPhysical();
    closeVirtual();
  };

  return (
    <section className="section_7">
      <div className="section_content container">
        <div className="content">
          <div className="left">
            <div className="background"></div>
            <FadeImg bottom>
              <img className="img1" src={img13} alt="" />
            </FadeImg>
            <FadeImg bottom>
              <img className="img2" src={img14} alt="" />
            </FadeImg>
          </div>
          <div className="right">
            <Fade cascade direction="up" damping={0.1}>
              <h6>DEBIT CARDS</h6>
              <h2>Spend with no barrier</h2>
              <p>
                Easily spend across millions of websites with our customized
                virtual and physical debit cards.
              </p>
            </Fade>
            <div className="card_btn g_flex">
              <button
                onClick={VirtualList}
                className={virtual === true ? "btn_state active" : "btn_state"}
              >
                <i
                  className={
                    virtual === true
                      ? "fa-solid fa-user-tie icon_active "
                      : "fa-solid fa-user-tie"
                  }
                ></i>
                <span>Virtual Card</span>
              </button>
              <button
                onClick={PhysicalList}
                className={physical === true ? "btn_state active" : "btn_state"}
              >
                <i
                  className={
                    physical === true
                      ? "fa-sharp fa-solid fa-briefcase icon_active"
                      : "fa-sharp fa-solid fa-briefcase"
                  }
                ></i>
                <span>Physical Card</span>
              </button>
            </div>
            <div className="list">
              <h5>Lifestyle Benefits :</h5>
              <>
                {virtual && (
                  <ul>
                    <li className="a_flex">
                      <i className="fa-regular fa-circle-check"></i>
                      <span>Spend across the globe with Geegpay card</span>
                    </li>
                    <li className="a_flex">
                      <i className="fa-regular fa-circle-check"></i>
                      <span>Manage expenses by setting spending limit</span>
                    </li>
                  </ul>
                )}
                {physical && (
                  <ul>
                    <li className="a_flex">
                      <i className="fa-regular fa-circle-check"></i>
                      <span>Physical MasterCard</span>
                    </li>
                    <li className="a_flex">
                      <i className="fa-regular fa-circle-check"></i>
                      <span>Travel round the world with Geegpay card</span>
                    </li>
                  </ul>
                )}
              </>
              <div className="btn_link">
                <Fade direction="up">
                  <Link to="/register" className="btn">
                    Get started now
                  </Link>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionSeven;
