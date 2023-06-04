import React from "react";
import NavBar from "../../../components/nav bar/NavBar";
import SideMenu from "../../../components/side menu/SideMenu";
import Transaction from "../../../components/wallet/transact/Transaction";
import Widget from "../../../components/wallet/widget/Widget";
import "./styles.scss";
function Wallets() {
  return (
    <>
      <div className="d_flex wallets content_width">
        <span className="sideBar">
          <SideMenu />
        </span>
        <span className="dashboard contentWidth">
          <NavBar />
          <div className="transactions main">
            <Widget />
            <Transaction />
          </div>
        </span>
      </div>
    </>
  );
}

export default Wallets;
