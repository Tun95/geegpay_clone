import React from "react";
import Card from "../../../components/card/Card";
import SideMenu from "../../../components/side menu/SideMenu";
import "./styles.scss";
function Cards() {
  return (
    <>
      <div className="d_flex content_width">
        <span className="sideBar">
          <SideMenu />
        </span>
        <span className="dashboard contentWidth">
          <div className="cards">
            <Card />
          </div>
        </span>
      </div>
    </>
  );
}

export default Cards;
