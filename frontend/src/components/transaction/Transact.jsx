import React, { useState } from "react";
import "./styles.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";

function Transact() {
  const rows = [
    {
      id: 1,
      name: "Tunji Akande",
      date: "Mar 19",
      description: "Tunji",
      amount: "-₦51,140",
      category: "Tranfer",
    },
    {
      id: 2,
      name: "Tunji Akande",
      date: "Mar 19",
      description: "Wallet Conversion",
      amount: "+₦51,140",
      category: "In-system",
    },
    {
      id: 3,
      name: "Tunji Akande",
      date: "Mar 19",
      description: "Wallet Conversion",
      amount: "-$99",
      category: "In-system",
    },
    {
      id: 4,
      name: "Tunji Akande",
      date: "Mar 19",
      description: "",
      amount: "+$100",
      category: "Fund Wallet",
    },
    {
      id: 5,
      name: "Tunji Akande",
      date: "Mar 19",
      description: "Tunji",
      amount: "-₦51,140",
      category: "Tranfer",
    },
    {
      id: 6,
      name: "Tunji Akande",
      date: "Mar 19",
      description: "Tunji",
      amount: "-₦51,140",
      category: "Tranfer",
    },
    {
      id: 7,
      name: "Tunji Akande",
      date: "Mar 19",
      description: "Wallet Conversion",
      amount: "+₦51,140",
      category: "In-system",
    },
    {
      id: 8,
      name: "Tunji Akande",
      date: "Mar 19",
      description: "Wallet Conversion",
      amount: "-$99",
      category: "In-system",
    },
    {
      id: 9,
      name: "Tunji Akande",
      date: "Mar 19",
      description: "",
      amount: "+$100",
      category: "Fund Wallet",
    },
    {
      id: 10,
      name: "Tunji Akande",
      date: "Mar 19",
      description: "Tunji",
      amount: "-₦51,140",
      category: "Tranfer",
    },
  ];

  const [page, setPage] = useState(2);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  return (
    <div className="transact">
      <div className="transact_box">
        <div className="box">
          <TableContainer className="table_container">
            <Table sx={{ minWidth: 800 }} aria-label="simple table" id="table">
              <TableHead>
                <TableRow>
                  <TableCell className="tableCell tableHeader">Date</TableCell>
                  <TableCell className="tableCell tableHeader">
                    Sent To/Recieved From
                  </TableCell>
                  <TableCell className="tableCell tableHeader">
                    Amount
                  </TableCell>
                  <TableCell className="tableCell tableHeader">
                    Description
                  </TableCell>
                  <TableCell className="tableCell tableHeader">
                    Status
                  </TableCell>
                  <TableCell className="tableCell tableHeader">
                    Category
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.id} className="table_row">
                    <TableCell className="tableCell">{row.date}</TableCell>
                    <TableCell className="tableCell">{row.name}</TableCell>
                    <TableCell className="tableCell">
                      <span className="amount">{row.amount}</span>
                    </TableCell>
                    <TableCell className="tableCell">
                      {row.description}
                    </TableCell>
                    <TableCell className="tableCell">
                      <button className="cellBtn">Submitted</button>
                    </TableCell>
                    <TableCell className="tableCell">{row.category}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <div className="pagination">
            <TablePagination
              component="div"
              count={100}
              page={page}
              onPageChange={handleChangePage}
              rowsPerPage={rowsPerPage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Transact;
