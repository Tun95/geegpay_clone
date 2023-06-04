import React from "react";
import "./styles.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";
import usd from "../../../assets/dashboard/usa.jpg";
import gbp from "../../../assets/dashboard/gbp.png";
import eur from "../../../assets/dashboard/eur.png";

function Exchange() {
  const rows = [
    {
      id: 1,
      img: usd,
      currency: "USD $",
      buying: "₦ 733.34",
      selling: "₦ 750",
    },
    {
      id: 2,
      img: gbp,
      currency: "GBP £",
      buying: "₦ 897",
      selling: "₦ 920",
    },
    {
      id: 3,
      img: eur,
      currency: "EUR",
      buying: "₦ 789.23",
      selling: "₦ 802",
    },
  ];
  return (
    <div className="exchange_data">
      <div className="exchange_box">
        <div className="box">
          <div className="header g_flex">
            <h4>Exchange Rates</h4>
          </div>
          <TableContainer className="table_container">
            <Table sx={{ minWidth: 350 }} aria-label="simple table" id="table">
              <TableHead>
                <TableRow>
                  <TableCell className="tableCell tableHeader">
                    Currency
                  </TableCell>
                  <TableCell className="tableCell tableHeader">
                    Buying
                  </TableCell>
                  <TableCell className="tableCell tableHeader">
                    Selling
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.id} className="table_row">
                    <TableCell className="tableCell">
                      <div className="cellWrapper a_flex">
                        <img src={row.img} alt="" />
                        <span className="person">{row.currency}</span>
                      </div>
                    </TableCell>
                    <TableCell className="tableCell">{row.buying}</TableCell>
                    <TableCell className="tableCell">{row.selling}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
}

export default Exchange;
