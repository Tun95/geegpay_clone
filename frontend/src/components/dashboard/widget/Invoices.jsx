import React from "react";
import "./styles.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import { Link } from "react-router-dom";

function Invoices() {
  const rows = [
    {
      id: 1,
      number: 0,
      person: "Person",
      status: "Due",
    },
    {
      id: 2,
      number: 0,
      person: "Person",
      status: "OverDue",
    },
    {
      id: 3,
      number: 0,
      person: "Person",
      status: "Await Approval",
    },
  ];
  return (
    <div className="invoice">
      <div className="invoice_box">
        <div className="box">
          {" "}
          <div className="header g_flex">
            <h4>Invoices</h4>
          </div>
          <div className="content">
            <div className="table">
              <TableContainer id="table_container">
                <Table
                  // sx={{ minWidth: 650 }}
                  aria-label="simple table"
                  id="table"
                >
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow key={row.id} className="table_row">
                        <TableCell className="tableCell">
                          <div className="cellWrapper">
                            {row.number}
                            <span className="person">{row.person}</span>
                          </div>
                        </TableCell>
                        <TableCell className="tableCell" align="right">
                          <span className={`status ${row.status}`}>
                            {row.status}
                          </span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
            <div className="link">
              <Link to="/invoices">
                <span>View All Invoices</span>{" "}
                <i className="fa-solid fa-chevron-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Invoices;
