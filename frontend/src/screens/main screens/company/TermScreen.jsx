import React from "react";
import Footer from "../../../common/footer/Footer";
import Navbar from "../../../common/nav bar/Navbar";
import Term from "../../../components/company/Term";
import "./styles.scss";

function TermScreen() {
  return (
    <>
      <div className="priavcy_terms">
        {/* Nav Bar */}
        <Navbar />
        <div className="container">
          <Term />
        </div>
        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}

export default TermScreen;
