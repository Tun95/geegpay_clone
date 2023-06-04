import React from "react";
import TopBox from "../../../components/Invoice/TopBox";
import NavBar from "../../../components/nav bar/NavBar";
import SideMenu from "../../../components/side menu/SideMenu";
import "./styles.scss";

function Invoices() {
  return (
    <>
      <div className="d_flex content_width">
        <span className="sideBar">
          <SideMenu />
        </span>
        <span className="dashboard contentWidth">
          <NavBar />
          <div className="transactions">
            <TopBox />
          </div>
        </span>
      </div>
    </>
  );
}

export default Invoices;
