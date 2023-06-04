import React from "react";
import Slider from "react-slick";
import "./styles.scss";
function SliderCard() {
  const data = [
    {
      details: (
        <p>
          "This morning, I had a financial emergency and they came to the rescue.
          I have never seen an international transaction as fast as that since I
          became a freelancer. <br /> ✅ Low fees <br /> ✅ Superfast transfer.
          This has to be the hope of africa freelancers!"
        </p>
      ),
      name: "Felix Eshiet",
      status: "Content Writer",
    },
    {
      details: (
        <p>
          "You guys are the best. This is my first time commending any fintech
          company openly. Within 12 hours, my funds from payooner landed In my
          USD virtual and within 30 minutes my naira account was credited. I
          commend you and pray you keep up the good work."
        </p>
      ),
      name: "Websiter designer",
      status: "Prineagle",
    },
    {
      details: (
        <p>
          "This has to be the best payment platform for Nigerian Freelancers
          right now. <br /> Customer Service✅ <br /> Good Rates✅ <br />
          Speed✅"
        </p>
      ),
      name: "Nifemi",
      status: "Script Writer",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    fade: true,
    speed: 1000,
    autoplaySpeed: 5000,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    appendDots: (dots) => {
      return <ul className="slider_dot">{dots}</ul>;
    },
  };
  return (
    <>
      <Slider {...settings} className="reg_slick_slider">
        {data.map((item, index) => (
          <div key={index} className="box ">
            <div className="top">
              <span>{item.details}</span>
            </div>
            <div className="bottom a_flex">
              <span className="first_letter h_flex">
                {item.name.substring(0, 1)}
              </span>
              <div>
                <h3>{item.name}</h3>
                <h5>{item.status}</h5>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
}

export default SliderCard;
