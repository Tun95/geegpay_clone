import React from "react";
import Slider from "../slider/Slider";
import "./styles.scss";

function Testimonies() {
  return (
    <div className="testimonies">
      <div className="testimonies_box">
        <div className="testimonies_slider ">
          <Slider />
        </div>
      </div>
    </div>
  );
}

export default Testimonies;
