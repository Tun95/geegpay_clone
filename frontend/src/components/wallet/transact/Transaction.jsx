import React from 'react'
import "./styles.scss"
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import { Link } from "react-router-dom";

function Transaction() {
	 const rows = [
     {
       id: 1,
       name: "Tunji Akande",
       date: "Mar 19",
       method: "Tunji",
       amount: "-₦51,140",
       status: "Tranfer",
     },
     {
       id: 2,
       name: "Tunji Akande",
       date: "Mar 19",
       method: "Wallet Conversion",
       amount: "+₦51,140",
       status: "In-system",
     },
     {
       id: 3,
       name: "Tunji Akande",
       date: "Mar 19",
       method: "Wallet Conversion",
       amount: "-$99",
       status: "In-system",
     },
     {
       id: 4,
       name: "Tunji Akande",
       date: "Mar 19",
       method: "",
       amount: "+$100",
       status: "Fund Wallet",
     },
     {
       id: 5,
       name: "Tunji Akande",
       date: "Mar 19",
       method: "Tunji",
       amount: "-₦51,140",
       status: "Tranfer",
     },
   ];
   return (
     <div className="transact_data wallet_transact">
       <div className="transact_box">
         <div className="box">
           <div className="header g_flex">
             <h4>Recent Transactions</h4>
           </div>
           <TableContainer className="table_container">
             <Table sx={{ minWidth: 750 }} aria-label="simple table" id="table">
               <TableBody>
                 {rows.map((row) => (
                   <TableRow key={row.id} className="table_row">
                     <TableCell className="tableCell">{row.date}</TableCell>
                     <TableCell className="tableCell">{row.name}</TableCell>
                     <TableCell className="tableCell">
                       <span className="amount">{row.amount}</span>
                     </TableCell>
                     <TableCell className="tableCell">{row.method}</TableCell>
                     <TableCell className="tableCell">
                       <button className="cellBtn">Submitted</button>
                     </TableCell>
                     <TableCell className="tableCell">{row.status}</TableCell>
                   </TableRow>
                 ))}
               </TableBody>
             </Table>
           </TableContainer>
           <div className="link">
             <Link to="/transactions">
               <span>View All Transactions</span>{" "}
               <i className="fa-solid fa-chevron-right"></i>
             </Link>
           </div>
         </div>
       </div>
     </div>
   );
}

export default Transaction