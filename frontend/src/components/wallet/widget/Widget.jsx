import React, { useState } from "react";
import "./styles.scss";
import Button from "@mui/material/Button";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import SyncAltOutlinedIcon from "@mui/icons-material/SyncAltOutlined";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import FileCopyOutlinedIcon from "@mui/icons-material/FileCopyOutlined";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
import usd from "../../../assets/dashboard/usa.jpg";
function Widget() {
  const [name, setName] = useState("");
  const [bank, setBank] = useState("");
  const [account, setAccount] = useState("");

  //TOGGLE PASSWOD VIEW
  const [type, setType] = useState("text");
  const [icon, setIcon] = useState(eye);

  const handleToggle = () => {
    if (type === "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeOff);
      setType("password");
    }
  };
  return (
    <div className="widget_transact">
      <div className="widget_box">
        <div className="action_btn a_flex">
          <Button
            id="demo-customized-button"
            variant="outlined"
            className="btn_select"
            disableElevation
            startIcon={<AddOutlinedIcon />}
          >
            Add Funds
          </Button>
          <Button
            id="demo-customized-button"
            variant="outlined"
            className="btn_select"
            disableElevation
            startIcon={<SyncAltOutlinedIcon />}
          >
            Convert Funds
          </Button>
          <Button
            id="demo-customized-button"
            variant="outlined"
            className="btn_select"
            disableElevation
            startIcon={<SendOutlinedIcon />}
          >
            Send Money
          </Button>
        </div>
        <div className="widget_content">
          <div className="box a_flex">
            <div className="box_widget">
              <div className="box_widget_1">
                <div className="select">
                  <button className="f_flex">
                    <span className="a_flex">
                      <img src={usd} alt="" />
                      <span>US Dollar($)</span>
                    </span>
                    <small>Switch</small>
                  </button>
                </div>
                <div className="input_box">
                  <input type={type} value="$0.16" disabled />
                </div>
                <div className="view">
                  <span className="wallet_text">Wallet balance</span>
                  <span onClick={handleToggle} style={{ cursor: "pointer" }}>
                    <Icon icon={icon} size={16} className="eye-icon" />
                  </span>
                </div>
                <div className="link">
                  <Link to="" className="a_flex">
                    <span>More Actions</span>
                    <ChevronRightOutlinedIcon className="icon" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="box_widget">
              <div className="box_widget_2">
                <>
                  <div className="header f_flex">
                    <h4>Bank Details</h4>
                    <Link to="" className="a_flex">
                      <span>View Details </span>
                      <ChevronRightOutlinedIcon className="icon" />
                    </Link>
                  </div>{" "}
                  <div className="bank_info">
                    <div className="name">
                      <div className="details a_flex">
                        <h5>Tunji Akande</h5>
                        <CopyToClipboard
                          text={name}
                          onCopy={() => setName({ copied: true })}
                        >
                          <FileCopyOutlinedIcon className="icon" />
                        </CopyToClipboard>
                        {name ? <span className="copied">Copied!</span> : null}
                      </div>
                      <label>Account Holder</label>
                    </div>
                    <div className="bank">
                      <div className="details a_flex">
                        <h5>Unknow bank, NY</h5>
                        <CopyToClipboard
                          text={bank}
                          onCopy={() => setBank({ copied: true })}
                        >
                          <FileCopyOutlinedIcon className="icon" />
                        </CopyToClipboard>
                        {bank ? <span className="copied">Copied!</span> : null}
                      </div>
                      <label>Bank Name</label>
                    </div>
                    <div className="accont">
                      <div className="details a_flex">
                        <h5>1234567890</h5>
                        <CopyToClipboard
                          text={account}
                          onCopy={() => setAccount({ copied: true })}
                        >
                          <FileCopyOutlinedIcon className="icon" />
                        </CopyToClipboard>
                        {account ? (
                          <span className="copied">Copied!</span>
                        ) : null}
                      </div>
                      <label>Account Number</label>
                    </div>
                  </div>
                </>
                {/* <>
                  <div className="header f_flex">
                    <h4>Bank Details</h4>
                  </div>
                  <div className="no_data h_flex">
                    <span>
                      <h4>No data yet</h4>
                      <p>Add a bank account to continue</p>
                      <button>Request Account Details</button>
                    </span>
                  </div>
                </> */}
              </div>
            </div>
            <div className="box_widget">
              <div className="box_widget_3 ">
                <div className="header g_flex">
                  <h4>Expenses</h4>
                </div>
                <div className="income_exp g_flex">
                  <div className="total">
                    <span className="balance">$0</span>
                    <span className="label">Income</span>
                  </div>
                  <div className="total">
                    <span className="balance">$0</span>
                    <span className="label">Expenses</span>
                  </div>
                </div>
                <div className="loading_bar">
                  <span className="bar"></span>
                </div>
                <div className="identifier d_flex">
                  <div className="income">
                    <i className="fa-solid fa-circle"></i>
                    <span>Income</span>
                  </div>
                  <div className="expenses">
                    <i className="fa-solid fa-circle"></i>
                    <span>Expenses</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Widget;
