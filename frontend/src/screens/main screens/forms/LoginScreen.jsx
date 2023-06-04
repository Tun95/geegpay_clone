import React from "react";
import logo from "../../../assets/login/logo.png";
import login from "../../../assets/login/login.png";
import { Link, useNavigate } from "react-router-dom";
import "./styles.scss";

function LoginScreen() {
  const navigate = useNavigate();
  return (
    <div className="login">
      <div className="login_screen container">
        <div className="login_content">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
          <div className="box g_flex">
            <div className="img">
              <img src={login} alt="" />
            </div>
            <form action="" className="form_box">
              <div className="inner_form">
                <div className="header">
                  <h1>Sign in to Geegpay</h1>
                  <span className="link w_flex">
                    <h5>New to Geegpay?</h5>
                    <Link to="/register">Create an account</Link>
                  </span>
                </div>
                <div className="form_group">
                  <label htmlFor="email">
                    Your Email<span>*</span>
                  </label>
                  <input type="email" id="email" />
                </div>
                <div className="form_group">
                  <label htmlFor="password">
                    Your password<span>*</span>
                  </label>
                  <input type="password" id="password" />
                </div>
                <div className="text_link">
                  <Link to="">Forgot Password?</Link>
                </div>
              </div>
              <button className="btn" onClick={() => navigate("/dashboard")}>
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
