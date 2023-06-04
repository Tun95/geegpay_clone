import React from "react";
import "./styles.scss";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import SyncAltOutlinedIcon from "@mui/icons-material/SyncAltOutlined";
import CurrencyExchangeOutlinedIcon from "@mui/icons-material/CurrencyExchangeOutlined";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import logo from "../../assets/dashboard/logo.png";
import DrawerMenu from "../menu drawer/DrawerMenu";

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
      margin: "10px 0px",
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
function NavBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="nav_bar">
      <div className="nav_bar_content s_flex">
        <div className="info_actions f_flex">
          <div className="info a_flex">
            <img src={logo} alt="" className="logo" />
            <div>
              Welcome, <span className="name">Tunji</span>
            </div>
          </div>
          <div className="actions f_flex">
            <div>
              <Button
                id="demo-customized-button"
                aria-controls={open ? "demo-customized-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                variant="contained"
                className="btn_select_right"
                disableElevation
                onClick={handleClick}
                endIcon={<KeyboardArrowDownIcon />}
              >
                Quick Actions
              </Button>
              <StyledMenu
                id="demo-customized-menu"
                MenuListProps={{
                  "aria-labelledby": "demo-customized-button",
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose} disableRipple>
                  <SendOutlinedIcon />
                  Send Money
                  <ChevronRightOutlinedIcon />
                </MenuItem>
                <MenuItem onClick={handleClose} disableRipple>
                  <CurrencyExchangeOutlinedIcon />
                  Convert Funds
                </MenuItem>
                <MenuItem onClick={handleClose} disableRipple>
                  <SyncAltOutlinedIcon />
                  Fund Wallet
                </MenuItem>
                <MenuItem onClick={handleClose} disableRipple>
                  <ReceiptLongIcon />
                  Create New Invoice
                </MenuItem>
              </StyledMenu>
            </div>
            <div className="notification h_flex">
              <NotificationsNoneOutlinedIcon className="icon" />
            </div>
            <div className="side_bar">
              <DrawerMenu />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
