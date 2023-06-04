import React, { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./styles.scss";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

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
  // ==== SELECT BUTTON === //
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const [anchorFilter, setAnchorFilter] = useState(null);
  const openFilter = Boolean(anchorFilter);
  const handleClickFilter = (event) => {
    setAnchorFilter(event.currentTarget);
  };
  const handleCloseFilter = () => {
    setAnchorFilter(null);
  };

  // ==== TAB ===//
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="top_bar invoice_top">
      <div className="top f_flex">
        <div className="top_left">
          <form action="" className="form_box a_flex">
            <SearchOutlinedIcon />
            <input type="search" placeholder="Search for an invoice" />
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
            startIcon={<AddOutlinedIcon />}
          >
            Create New Invoice
          </Button>
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
                <MailOutlineOutlinedIcon />
                Email Address
              </MenuItem>
            </StyledMenu>
          </div>
          <span>|</span>
          <div className="right">
            <span>No Filters Applied</span>
          </div>
        </div>
      </div>
      <div className="tab">
        {" "}
        <Box>
          <Box
            sx={{
              borderBottom: 1,
              borderColor: "divider",
              textTransform: "none",
            }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
              className="tab_title"
              aria-label="scrollable auto tabs example"
            >
              <Tab label="All Invoices" {...a11yProps(0)} />
              <Tab label="Draft" {...a11yProps(1)} />
              <Tab label="Pending" {...a11yProps(2)} />
              <Tab label="Processing" {...a11yProps(3)} />
              <Tab label="Paid" {...a11yProps(4)} />
              <Tab label="Due" {...a11yProps(5)} />
              <Tab label="Overdue" {...a11yProps(7)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <span className="tab_box s_flex">
              <span className="tab_content ">
                <ReceiptLongIcon className="icon" />
                <br />
                <label className="header">No Payment</label>
                <br />
                <span>
                  Once you have any payment, the information appears here
                </span>
                <br />
                <button className="btn">New Invoice</button>
              </span>
            </span>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <span className="tab_box s_flex">
              <span className="tab_content ">
                <ReceiptLongIcon className="icon" />
                <br />
                <label className="header">No Draft payments</label>
                <br />
                <span>
                  Once you have any Draft payment, the information appears here
                </span>
                <br />
                <button className="btn">New Invoice</button>
              </span>
            </span>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <span className="tab_box s_flex">
              <span className="tab_content ">
                <ReceiptLongIcon className="icon" />
                <br />
                <label className="header">No Pending payments</label>
                <br />
                <span>
                  Once you have any Pending payment, the information appears
                  here
                </span>
                <br />
                <button className="btn">New Invoice</button>
              </span>
            </span>
          </TabPanel>
          <TabPanel value={value} index={3}>
            <span className="tab_box s_flex">
              <span className="tab_content ">
                <ReceiptLongIcon className="icon" />
                <br />
                <label className="header">No Processing payments</label>
                <br />
                <span>
                  Once you have any Processing payment, the information appears
                  here
                </span>
                <br />
                <button className="btn">New Invoice</button>
              </span>
            </span>
          </TabPanel>
          <TabPanel value={value} index={4}>
            <span className="tab_box s_flex">
              <span className="tab_content ">
                <ReceiptLongIcon className="icon" />
                <br />
                <label className="header">No Paid payments</label>
                <br />
                <span>
                  Once you have any Paid payment, the information appears here
                </span>
                <br />
                <button className="btn">New Invoice</button>
              </span>
            </span>
          </TabPanel>
          <TabPanel value={value} index={5}>
            <span className="tab_box s_flex">
              <span className="tab_content ">
                <ReceiptLongIcon className="icon" />
                <br />
                <label className="header">No Due payments</label>
                <br />
                <span>
                  Once you have any Due payment, the information appears here
                </span>
                <br />
                <button className="btn">New Invoice</button>
              </span>
            </span>
          </TabPanel>
          <TabPanel value={value} index={6}>
            <span className="tab_box s_flex">
              <span className="tab_content ">
                <ReceiptLongIcon className="icon" />
                <br />
                <label className="header">No Overdue payments</label>
                <br />
                <span>
                  Once you have any Overdue payment, the information appears
                  here
                </span>
                <br />
                <button className="btn">New Invoice</button>
              </span>
            </span>
          </TabPanel>
        </Box>
      </div>
    </div>
  );
}

export default TopBox;
