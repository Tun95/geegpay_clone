import React from "react";
import "./styles.scss";
import svg from "../../assets/card/card.svg";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import TranslateOutlinedIcon from "@mui/icons-material/TranslateOutlined";
import NightlightOutlinedIcon from "@mui/icons-material/NightlightOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { useNavigate } from "react-router-dom";

function Card() {
  const navigate = useNavigate();
  return (
    <div className="card">
      <div className="card_box">
        <div className="content">
          <div className="content_nav s_flex">
            <div className="nav_icon">
              <span className="icons h_flex" onClick={() => navigate(-1)}>
                <ClearOutlinedIcon className="icon" />
              </span>
            </div>
          </div>
          <div className="content_box s_flex">
            <span>
              <div className="action_btn">
                <div className="action_width p_flex">
                  <TranslateOutlinedIcon className="icon" />
                  <NightlightOutlinedIcon className="icon" />
                  <NotificationsNoneOutlinedIcon className="icon" />
                </div>
              </div>
              <div className="banner_btn ">
                <div className="banner_style h_flex">
                  <img src={svg} alt="" />
                  <button className="card_btn">Create New Card</button>
                </div>
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
