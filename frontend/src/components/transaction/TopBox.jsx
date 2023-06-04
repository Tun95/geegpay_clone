import React, { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import ContentPasteOutlinedIcon from "@mui/icons-material/ContentPasteOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import SyncAltOutlinedIcon from "@mui/icons-material/SyncAltOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

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
    borderRadius: 15,
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

function TopBox() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [anchorExp, setAnchorExp] = useState(null);
  const openExp = Boolean(anchorExp);
  const handleClickExp = (event) => {
    setAnchorExp(event.currentTarget);
  };
  const handleCloseExp = () => {
    setAnchorExp(null);
  };

  const [anchorFilter, setAnchorFilter] = useState(null);
  const openFilter = Boolean(anchorFilter);
  const handleClickFilter = (event) => {
    setAnchorFilter(event.currentTarget);
  };
  const handleCloseFilter = () => {
    setAnchorFilter(null);
  };

  return (
    <div className="top_bar">
      <div className="top f_flex">
        <div className="top_left">
          <form action="" className="form_box a_flex">
            <SearchOutlinedIcon className="icon"/>
            <input type="search" placeholder="Search for a transaction" />
          </form>
        </div>
        <div className="top_right">
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
            Send Money
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
              Single Tranfer
            </MenuItem>
          </StyledMenu>
        </div>
      </div>
      <div className="bottom f_flex">
        <div className="bottom_left a_flex">
          <div className="left">
            <Button
              id="demo-customized-button"
              aria-controls={openFilter ? "demo-customized-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={openFilter ? "true" : undefined}
              variant="outlined"
              className="btn_select_left"
              disableElevation
              onClick={handleClickFilter}
              startIcon={<AddOutlinedIcon />}
            >
              Add Filter
            </Button>
            <StyledMenu
              id="demo-customized-menu"
              MenuListProps={{
                "aria-labelledby": "demo-customized-button",
              }}
              anchorEl={anchorFilter}
              open={openFilter}
              onClose={handleCloseFilter}
            >
              <MenuItem onClick={handleCloseFilter} disableRipple>
                <AttachMoneyOutlinedIcon />
                Currency
              </MenuItem>
              <MenuItem onClick={handleCloseFilter} disableRipple>
                <DateRangeOutlinedIcon />
                Date
              </MenuItem>
              <MenuItem onClick={handleCloseFilter} disableRipple>
                <ContentPasteOutlinedIcon />
                Status
              </MenuItem>
              <MenuItem onClick={handleCloseFilter} disableRipple>
                <CreditCardOutlinedIcon />
                Category
              </MenuItem>
              <MenuItem onClick={handleCloseFilter} disableRipple>
                <SyncAltOutlinedIcon />
                Type
              </MenuItem>
            </StyledMenu>
          </div>
          <span>|</span>
          <div className="right">
            <p>No Filters Applied</p>
          </div>
        </div>
        <div className="bottom_right">
          <Button
            id="demo-customized-button"
            aria-controls={openExp ? "demo-customized-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={openExp ? "true" : undefined}
            variant="outlined"
            className="btn_select_right"
            disableElevation
            onClick={handleClickExp}
            endIcon={<KeyboardArrowDownIcon />}
          >
            Export All Transactions
          </Button>
          <StyledMenu
            id="demo-customized-menu"
            MenuListProps={{
              "aria-labelledby": "demo-customized-button",
            }}
            anchorEl={anchorExp}
            open={openExp}
            onClose={handleCloseExp}
          >
            <MenuItem onClick={handleCloseExp} disableRipple>
              CSV
            </MenuItem>
            <MenuItem onClick={handleCloseExp} disableRipple>
              PDF
            </MenuItem>
          </StyledMenu>
        </div>
      </div>
    </div>
  );
}

export default TopBox;
