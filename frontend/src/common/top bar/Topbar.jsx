import React, { useState } from "react";
import "./styles.scss";
import { Link, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";

function Topbar() {
  const navigate = useNavigate();
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
      text: <span className="drawer_list">Support</span>,
      to: "",
    },
    {
      text: <span className="drawer_list">Help</span>,
      to: "",
    },
    {
      text: <span className="drawer_list">Login</span>,
      to: "/login",
    },
  ];

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      className="top_drawer"
    >
      <List>
        {webItemList.map((item, index) => {
          const { text } = item;
          return (
            <ListItem key={index} disablePadding component={Link} to={item.to}>
              <ListItemButton className="listItemButton">
                <ListItemText primary={text} className="listItemText" />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
      {/* <Divider /> */}
    </Box>
  );
  return (
    <div className="drawer_menu">
      {["top"].map((anchor) => (
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
            className="drawer_style"
          >
            <span>{list(anchor)}</span>
            <span className="drawer_validate ">
              <button onClick={() => navigate("/register")} className="btn">
                Create an account
              </button>
            </span>
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

export default Topbar;
