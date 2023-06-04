import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./styles.scss";
import ngn from "../../../assets/dashboard/nga.png";
import eur from "../../../assets/dashboard/eur.png";
import gbp from "../../../assets/dashboard/gbp.png";
import usd from "../../../assets/dashboard/usa.jpg";

function SliderCard() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    // autoplay: true,
    responsive: [
      {
        breakpoint: 1324,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1060,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 490,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const data = [
    {
      img: ngn,
      currency: "NGN",
      balance: "₦0",
      info: "Available balance",
    },

    {
      img: usd,
      currency: "USD",
      balance: "$0",
      info: "Available balance",
    },
    {
      img: gbp,
      currency: "GBP",
      balance: "£0",
      info: "Available balance",
    },
    {
      img: eur,
      currency: "EUR",
      balance: "€0",
      info: "Available balance",
    },
  ];

  return (
    <>
      <Slider {...settings} className="slick_slider">
        {data?.map(({ img, currency, balance, info }, index) => (
          <div key={index} className="slider_content g_flex">
            <div className="img_currency a_flex">
              <img src={img} alt="" />
              <span>{currency}</span>
            </div>
            <div className="balance_info g_flex">
              <span>{balance}</span>
              <p>{info}</p>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
}

export default SliderCard;
