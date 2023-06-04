import React from "react";
import "./styles.scss";
import logo from "../../assets/logo/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Topbar from "../top bar/Topbar";

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

    // classes={{list:classes.list}}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    backgroundColor: "#ddd",
   
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "20px",
      margin: "0px 15px",
    },
    "& .MuiMenuItem-root": {
      margin: "15px 0px",
      color: "#2e2e2e",
      fontWeight: "600",
      transition: "all 500ms ease",
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
      "&:hover": {
        color: "#185cff",
        background: "transparent",
      },
    },
  },
}));
function Navbar() {
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <nav className="nav s_flex">
        <div className="nav_conatainer container f_flex">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <ul className="nav_list f_flex">
            <li>
              <a href="mailto:admin@gmail.com"> Support</a>
            </li>
            <li className="opacity_none">
              <Link to="/">Help</Link>
            </li>
            <li className="opacity">
              <Link to="/">Blog</Link>
            </li>
            <li className="opacity">
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
                  Product
                </Button>
                <StyledMenu
                  id="demo-customized-menu"
                  MenuListProps={{
                    "aria-labelledby": "demo-customized-button",
                  }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  className="demo-customized-menu"
                >
                  <MenuItem onClick={handleClose} disableRipple>
                    Virtual account creation
                  </MenuItem>
                  <MenuItem onClick={handleClose} disableRipple>
                    Virtual cards
                  </MenuItem>
                  <MenuItem onClick={handleClose} disableRipple>
                    Currency conversion
                  </MenuItem>
                  <MenuItem onClick={handleClose} disableRipple>
                    Tranfer funds
                  </MenuItem>
                  <MenuItem onClick={handleClose} disableRipple>
                    Invoice
                  </MenuItem>
                </StyledMenu>
              </div>
            </li>
          </ul>
          <div className="validate a_flex">
            <Link to="/login" className="">
              Login
            </Link>
            <button onClick={() => navigate("/register")} className="btn">
              Create an account
            </button>
          </div>
          <div className="side_menu">
            <Topbar />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
