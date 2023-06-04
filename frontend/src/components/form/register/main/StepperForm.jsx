import React, { useState } from "react";
import "./styles.scss";
import logo from "../../../../assets/login/logo.png";
import { CountryDropdown } from "react-country-region-selector";
import { Link, useNavigate } from "react-router-dom";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Helmet } from "react-helmet-async";

export function BusinessType(props) {
  const navigate = useNavigate();

  const { freelancer, FreelancerList, company, CompanyList } = props;

  const [specifiedCountry, setSpecifiedCountry] = useState("");
  const [country, setCountry] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="reg_stepper">
      <div className="reg_stepper_box s_flex">
        <div className="reg_stepper_content ">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
          <div className="content s_flex">
            <form action="" onSubmit={submitHandler} className="content_box">
              <div className="header_text">
                <h1>How will you like to use Geegpay?</h1>
                <p>
                  Start your effortless journey into borderless payments. Let’s
                  get you started.
                </p>
              </div>
              <div className="state_business">
                <div
                  className={freelancer ? "freelancer action" : "freelancer"}
                >
                  <div className="action">
                    <label
                      htmlFor="freelancer"
                      onClick={FreelancerList}
                      className="freelancer_action f_flex"
                    >
                      <h4>I am a freelancer</h4>
                      <input type="radio" id="freelancer" name="business" />
                    </label>
                  </div>
                  {freelancer && (
                    <div className="details">
                      <p>
                        You’re self-employed and operate under your own name
                      </p>
                      <CountryDropdown
                        className="select_styles"
                        value={specifiedCountry}
                        onChange={(val) => setSpecifiedCountry(val)}
                      />
                    </div>
                  )}
                </div>
                <div className={company ? "company action" : "company"}>
                  <div className="action">
                    <label
                      htmlFor="company"
                      onClick={CompanyList}
                      className="company_action f_flex"
                    >
                      <h4>I want to create a company account</h4>
                      <input type="radio" id="company" name="business" />
                    </label>
                  </div>
                  {company && (
                    <div className="details">
                      <p>
                        The company is registered and operates as a legal entity
                      </p>
                      <CountryDropdown
                        className="select_styles"
                        value={country}
                        onChange={(val) => setCountry(val)}
                      />
                    </div>
                  )}
                </div>
              </div>
              <div className="button_btn">
                <button
                  onClick={() => navigate("/dashboard")}
                  className="submit_btn"
                >
                  Continue
                </button>
              </div>
              <div className="link_text a_flex">
                <p>You already have an account?</p>
                <Link to="/login">Sign in</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export function EmailReferer() {
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

function getSteps() {
  return ["Billing Address", "Confirmation", "Payment", "Finish"];
}
function getStepContent(step) {
  switch (step) {
    case 0:
      return <BusinessType />;
    case 1:
      return <EmailReferer />;
    // case 2:
    //   return <Payment />;
    // case 3:
    //   return <Finish />;
    default:
      return "unknown step";
  }
}
export function StepperSteps(){
  
  const [activeStep, setActiveStep] = useState(0);
  const [skippedSteps, setSkippedSteps] = useState([]);
  const steps = getSteps();

  const isStepSkipped = (step) => {
    return skippedSteps.includes(step);
  };

  const handleNext = (data) => {
    console.log(data);
    if (activeStep === steps.length - 1) {
      fetch("https://jsonplaceholder.typicode.com/comments")
        .then((data) => data.json())
        .then((res) => {
          console.log(res);
          setActiveStep(activeStep + 1);
        });
    } else {
      setActiveStep(activeStep + 1);
      setSkippedSteps(
        skippedSteps.filter((skipItem) => skipItem !== activeStep)
      );
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  return (
    <div className="form_container">
      <Helmet>
        <title>Checkout</title>
      </Helmet>
      <div className="mtb form_box_content">
       

        {activeStep === steps.length ? (
          <Typography variant="h3" align="center">
            Thank You
          </Typography>
        ) : (
          <>
            {/* <FormProvider {...methods}>
              <form onSubmit={methods.handleSubmit(handleNext)}>
                {getStepContent(activeStep)}
                <div className="d_flex">
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className="stepper_back_btn"
                  >
                    back
                  </Button>

                  <Button
                    variant="contained"
                    color="primary"
                    // onClick={handleNext}
                    type="submit"
                  >
                    {activeStep === steps.length - 3 ? "Place Order" : "Next"}
                  </Button>
                </div>
              </form>
            </FormProvider> */}
          </>
        )}
      </div>
    </div>
  );
}