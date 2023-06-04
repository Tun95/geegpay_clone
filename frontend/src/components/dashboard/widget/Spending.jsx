import React, { useState } from "react";
import "./styles.scss";
import usd from "../../../assets/dashboard/usa.jpg";
// import ngn from "../../../assets/dashboard/nga.png";
// import eur from "../../../assets/dashboard/eur.png";
// import gbp from "../../../assets/dashboard/gbp.png";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import Select from "@mui/material/Select";

function Spending() {
  // const data = [
  //   {
  //     img: <img className="img_select" src={usd} alt="" />,
  //     currency: "USD",
  //     symbol: "$",
  //   },
  //   {
  //     img: <img className="img_select" src={ngn} alt="" />,
  //     currency: "NGN",
  //     symbol: "₦",
  //   },
  //   {
  //     img: <img className="img_select" src={gbp} alt="" />,
  //     currency: "GBP",
  //     symbol: "£",
  //   },
  //   {
  //     img: <img className="img_select" src={eur} alt="" />,
  //     currency: "EUR",
  //     symbol: "€",
  //   },
  // ];

  return (
    <div className="spending">
      <div className="spending_box">
        <div className="box">
          <div className="header g_flex">
            <h4>Spending</h4>
            <div className="select g_flex">
              <button className="select_btn f_flex">
                <img src={usd} alt="" />
                <span>USD</span>
                <i className="fa-sharp fa-solid fa-chevron-down"></i>
              </button>
              <button className="select_btn f_flex">
                <span>This Month</span>
                <i className="fa-sharp fa-solid fa-chevron-down"></i>
              </button>
            </div>
          </div>
          <div className="total">
            <span className="balance">$0</span>
            <span>Total</span>
          </div>
          <div className="income_exp g_flex">
            <div className="total">
              <span className="balance">$0</span>
              <span>Income</span>
            </div>
            <div className="total">
              <span className="balance">$0</span>
              <span>Expenses</span>
            </div>
          </div>
          <div className="loading_bar">
            <span className="bar"></span>
          </div>
          <div className="identifier d_flex">
            <div className="income">
              <i className="fa-solid fa-circle"></i>
              <span>Income</span>
            </div>
            <div className="expenses">
              <i className="fa-solid fa-circle"></i>
              <span>Expenses</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Spending;
