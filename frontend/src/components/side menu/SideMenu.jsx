import React, { useState } from "react";
import "./styles.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/login/logo.png";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import SyncAltOutlinedIcon from "@mui/icons-material/SyncAltOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import { Fade } from "react-awesome-reveal";
import { styled, alpha } from "@mui/material/styles";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      margin: "15px 0px",
      fontSize: "15px",
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

function SideMenu() {
  let name = "Tunji Akande";

  // ==== USER DRAWER ====//
  const [anchorUsr, setAnchorUsr] = useState(null);
  const openUsr = Boolean(anchorUsr);
  const handleClickUsr = (event) => {
    setAnchorUsr(event.currentTarget);
  };
  const handleCloseUsr = () => {
    setAnchorUsr(null);
  };
  return (
    <div className="side_menu flex_1">
      <div className="side_menu_content ">
        <div className="logo_menu_list p_flex">
          <div className="logo">
            <Link to="/dashboard">
              <img src={logo} alt="" />
            </Link>
          </div>
          <div className="menu_list">
            <ul>
              {/* <Fade cascade triggerOnce direction="down" damping={0.1}> */}
              <li>
                <Link to="/dashboard">
                  <ArticleOutlinedIcon className="icon" />
                  <span>Dashboard</span>
                </Link>
              </li>
              <li>
                <Link to="/invoices">
                  <ReceiptLongIcon className="icon" />
                  <span>Invoices</span>
                </Link>
              </li>
              <li>
                <Link to="/cards">
                  <CreditCardIcon className="icon" />
                  <span>Cards</span>
                </Link>
              </li>
              <li>
                <Link to="/wallets">
                  <AccountBalanceWalletOutlinedIcon className="icon" />
                  <span>Wallets</span>
                </Link>
              </li>
              <li>
                <Link to="/transactions">
                  <SyncAltOutlinedIcon className="icon" />
                  <span>Transactions</span>
                </Link>
              </li>
              {/* </Fade> */}
            </ul>
          </div>
        </div>

        <div className="user_height ">
          <div className="user h_flex">
            <div className="f_flex">
              <div className="letter h_flex">{name.substring(0, 1)}</div>
              <div className="name">{name}</div>
              <div className="icon">
                <MoreHorizOutlinedIcon
                  onClick={handleClickUsr}
                  className="mui_icon"
                />
                <StyledMenu
                  id="demo-customized-menu"
                  MenuListProps={{
                    "aria-labelledby": "demo-customized-button",
                  }}
                  anchorEl={anchorUsr}
                  open={openUsr}
                  onClose={handleCloseUsr}
                >
                  <MenuItem onClick={handleCloseUsr} disableRipple>
                    <AccountBalanceIcon />
                    Beneficiaries
                  </MenuItem>
                  <MenuItem onClick={handleCloseUsr} disableRipple>
                    <SettingsIcon />
                    Settings
                  </MenuItem>
                  <MenuItem onClick={handleCloseUsr} disableRipple>
                    <LogoutIcon />
                    Log out
                  </MenuItem>
                </StyledMenu>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideMenu;
