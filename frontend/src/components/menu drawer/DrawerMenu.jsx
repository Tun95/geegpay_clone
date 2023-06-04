import React, { useState } from "react";
import "./styles.scss";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import { styled, alpha } from "@mui/material/styles";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import SyncAltOutlinedIcon from "@mui/icons-material/SyncAltOutlined";
import CurrencyExchangeOutlinedIcon from "@mui/icons-material/CurrencyExchangeOutlined";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
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
function DrawerMenu() {
  // ==== SUB MENU ====//
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // ==== USER DRAWER ====//
  const [anchorUsr, setAnchorUsr] = useState(null);
  const openUsr = Boolean(anchorUsr);
  const handleClickUsr = (event) => {
    setAnchorUsr(event.currentTarget);
  };
  const handleCloseUsr = () => {
    setAnchorUsr(null);
  };

  const [state, setState] = useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const webItemList = [
    {
      text: <span className="drawer_list">Dashboard</span>,
      icon: <ArticleOutlinedIcon className="drawer_icon" />,
      to: "/dashboard",
    },
    {
      text: <span className="drawer_list">Invoices</span>,
      icon: <ReceiptLongIcon className="drawer_icon" />,
      to: "/invoices",
    },
    {
      text: <span className="drawer_list">Cards</span>,
      icon: <CreditCardIcon className="drawer_icon" />,
      to: "/cards",
    },
    {
      text: <span className="drawer_list">Wallets</span>,
      icon: <AccountBalanceWalletOutlinedIcon className="drawer_icon" />,
      to: "/wallets",
    },
    {
      text: <span className="drawer_list">Transactions</span>,
      icon: <SyncAltOutlinedIcon className="drawer_icon" />,
      to: "/transactions",
    },
  ];

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {webItemList.map((item, index) => {
          const { text, icon } = item;
          return (
            <ListItem key={index} disablePadding component={Link} to={item.to}>
              <ListItemButton>
                {icon && <ListItemIcon>{icon}</ListItemIcon>}
                <ListItemText primary={text} className="listItemText" />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
      {/* <Divider /> */}
    </Box>
  );
  let name = "Tunji Akande";
  return (
    <div className="drawer_menu">
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button
            className="drawer_btn_icon"
            onClick={toggleDrawer(anchor, true)}
          >
            <MenuIcon className="menu_icon" />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            className="drawer"
          >
            <div className="sub_list">
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
            <span>{list(anchor)}</span>

            <div className="user_drawer">
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
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

export default DrawerMenu;
