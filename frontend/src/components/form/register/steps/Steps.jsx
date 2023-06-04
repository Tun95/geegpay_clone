import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../../assets/login/logo.png";
import "./styles.scss";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

export function EmailStep() {
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="reg_stepper">
      <div className="reg_stepper_box s_flex">
        <div className="reg_stepper_content ">
          <div className="logo logo_back_btn">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
            <button className="btn_back a_flex" onClick={() => navigate(-1)}>
              <ChevronLeftIcon className="icon" />
              <span> Go back</span>
            </button>
          </div>
          <div className="content s_flex">
            <form action="" onSubmit={submitHandler} className="content_box">
              <div className="header_text">
                <h1>Enter your email</h1>
                <p>
                  We need an email address that is not already used for another
                  Geegpay account.
                </p>
              </div>
              <div className="state_business">
                <div className="form_group">
                  <label htmlFor="email" className="label">
                    Email Address <span className="star_red">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter email address"
                  />
                </div>
                <div className="form_group">
                  <label htmlFor="email" className="label">
                    Referral Code (Optional)
                  </label>
                  <input
                    type="text"
                    id="referral"
                    placeholder="Enter refarral code"
                  />
                </div>
              </div>
              <div className="terms">
                <p>
                  By confirming your email, you agree to our{" "}
                  <Link to="/terms-of-service">Terms of Service</Link>, and that
                  you have read and understood our{" "}
                  <Link to="/privacy-policy">Privacy Policy</Link>.
                </p>
              </div>
              <div className="button_btn">
                <button className="submit_btn">Continue</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
