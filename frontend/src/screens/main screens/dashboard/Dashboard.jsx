import React from "react";
import Exchange from "../../../components/dashboard/exchange/Exchange";
import Slider from "../../../components/dashboard/slider/Slider";
import Transaction from "../../../components/dashboard/transactions/Transaction";
import Invoices from "../../../components/dashboard/widget/Invoices";
import Spending from "../../../components/dashboard/widget/Spending";
import NavBar from "../../../components/nav bar/NavBar";
import SideMenu from "../../../components/side menu/SideMenu";
import "./styles.scss";

function Dashboard() {
  return (
    <>
      <div className="d_flex ">
        <span className="sideBar">
          <SideMenu />
        </span>
        <span className="dashboard">
          <NavBar />
          <Slider />
          <div className="widget g_flex">
            <Spending />
            <Invoices />
          </div>
          <div className="exchange">
            <Exchange />
          </div>
          <div className="transactions">
            <Transaction />
          </div>
        </span>
      </div>
    </>
  );
}

export default Dashboard;
