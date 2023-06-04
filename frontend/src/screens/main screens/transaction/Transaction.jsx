import React from "react";
import NavBar from "../../../components/nav bar/NavBar";
import SideMenu from "../../../components/side menu/SideMenu";
import TopBox from "../../../components/transaction/TopBox";
import Transact from "../../../components/transaction/Transact";
import "./styles.scss";

function Transaction() {
  let data = "Transaction";
  return (
    <>
      <div className="d_flex content_width">
        <span className="sideBar">
          <SideMenu />
        </span>
        <span className="dashboard contentWidth">
          <NavBar data={data} />
          <div className="transactions">
            <TopBox />
            <Transact />
          </div>
        </span>
      </div>
    </>
  );
}

export default Transaction;
