import React from "react";
import "./styles.scss";
import svg from "../../../../assets/register/svg1.svg";
import svg1 from "../../../../assets/register/svg2.svg";

export function Freelancer() {
  return (
    <div className="information">
      <div className="information_box">
        <div className="information_content">
          <img src={svg} alt="svg" />
          <div className="content">
            <div className="header">
              <h2>As a freelancer you'll get:</h2>
            </div>
            <div className="list">
              <ul>
                <li className="a_flex">
                  <i className="fa-regular fa-circle-check"></i>
                  <span>Foreign bank accounts in USD, GBP and EUR</span>
                </li>
                <li className="a_flex">
                  <i className="fa-regular fa-circle-check"></i>
                  <span>USD virtual cards</span>
                </li>
                <li className="a_flex">
                  <i className="fa-regular fa-circle-check"></i>
                  <span>Convert to your local currency</span>
                </li>
                <li className="a_flex">
                  <i className="fa-regular fa-circle-check"></i>
                  <span>Create and automate invoices</span>
                </li>
                <li className="a_flex">
                  <i className="fa-regular fa-circle-check"></i>
                  <span>Request payment</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Company() {
  return (
    <div className="information">
      <div className="information_box">
        <div className="information_content">
          <img src={svg1} alt="svg" />
          <div className="content">
            <div className="header">
              <h2>As a company you'll get:</h2>
            </div>
            <div className="list">
              <ul>
                <li className="a_flex">
                  <i className="fa-regular fa-circle-check"></i>
                  <span>Multi-currency payroll</span>
                </li>
                <li className="a_flex">
                  <i className="fa-regular fa-circle-check"></i>
                  <span>Team onboarding</span>
                </li>
                <li className="a_flex">
                  <i className="fa-regular fa-circle-check"></i>
                  <span>USD Virtual cards</span>
                </li>
                <li className="a_flex">
                  <i className="fa-regular fa-circle-check"></i>
                  <span>Foreign bank accounts in USD</span>
                </li>
                <li className="a_flex">
                  <i className="fa-regular fa-circle-check"></i>
                  <span>Convert to your local currency</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
