import React from "react";
import Footer from "../../../common/footer/Footer";
import Navbar from "../../../common/nav bar/Navbar";
import Privacy from "../../../components/company/Privacy";
import "./styles.scss";

function PrivacyScreen() {
  return (
    <>
      <div className="priavcy_terms">
        {/* Nav Bar */}
        <Navbar />
        <div className="container ">
          <Privacy />
        </div>
        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}

export default PrivacyScreen;
