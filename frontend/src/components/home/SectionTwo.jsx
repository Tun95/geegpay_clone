import React from "react";
import "./styles.scss";
import { Fade } from "react-awesome-reveal";

function SectionTwo() {
  return (
    <section className="section_2">
      <div className="section_content container s_flex">
        <div className="content ">
          <div className="left">
            <Fade direction="up" triggerOnce>
              <p>Go borderless with us</p>
            </Fade>
          </div>{" "}
          <div className="right">
            <Fade cascade direction="up" triggerOnce damping={0.1}>
              <h3>Endless possibilities with Geegpay.</h3>
              <p>
                With Geegpay, it's easy to convert to your local currency at
                competitive exchange rates in minutes. Send money and receive
                money from overseas, and spend globally with Geegpay virtual and
                physical cards.
              </p>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionTwo;
