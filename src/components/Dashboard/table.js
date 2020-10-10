import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    fontWeight:'Bold',
    backgroundColor: '#b3c6ff',
    color: '#005ce6',
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor:'#e6f2ff',
    },
  },
}))(TableRow);

function createData(Serial_No,Meeting_Id,Subject_of_Mail,Customer_Emailid
    ,Dealer_enduser_slot_start_date,Dealer_enduser_slot_start_time,Dealer_enduser_slot_end_time) {
  return { Serial_No,Meeting_Id,Subject_of_Mail,Customer_Emailid
    ,Dealer_enduser_slot_start_date,Dealer_enduser_slot_start_time,Dealer_enduser_slot_end_time};
}

const rows = [
  createData(1,1,'Buying new car','abs@gmail.com','12/12/2020','11:10:02','12:23:23'),
  createData(2,1,'Buying new car','abs@gmail.com','12/12/2020','11:10:02','12:23:23'),
  createData(3,1,'Buying new car','abs@gmail.com','12/12/2020','11:10:02','12:23:23'),
  createData(4,1,'Buying new car','abs@gmail.com','12/12/2020','11:10:02','12:23:23'),
  createData(5,1,'Buying new car','abs@gmail.com','12/12/2020','11:10:02','12:23:23'),
  createData(6,1,'Buying new car','abs@gmail.com','12/12/2020','11:10:02','12:23:23'),
  createData(7,1,'Buying new car','abs@gmail.com','12/12/2020','11:10:02','12:23:23'),
  createData(8,1,'Buying new car','abs@gmail.com','12/12/2020','11:10:02','12:23:23'),
  createData(8,1,'Buying new car','abs@gmail.com','12/12/2020','11:10:02','12:23:23'),
  createData(8,1,'Buying new car','abs@gmail.com','12/12/2020','11:10:02','12:23:23'),
  createData(8,1,'Buying new car','abs@gmail.com','12/12/2020','11:10:02','12:23:23'),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
    minHeight:300
  },
});

export default function CustomizedTables() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align ='center'>Serial_No</StyledTableCell>
            <StyledTableCell align="center">Meeting_Id</StyledTableCell>
            <StyledTableCell align="center">Subject_of_Mail</StyledTableCell>
            <StyledTableCell align="center">Customer_Emailid</StyledTableCell>
            <StyledTableCell align="center">Dealer_enduser_slot_start_date</StyledTableCell>
            <StyledTableCell align="center">Dealer_enduser_slot_start_time</StyledTableCell>
            <StyledTableCell align="center">Dealer_enduser_slot_end_date</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.Serial_No}>
              <StyledTableCell align="center" component="th" scope="row">
                {row.Serial_No}
              </StyledTableCell>
              <StyledTableCell align="center">{row.Meeting_Id}</StyledTableCell>
              <StyledTableCell align="center">{row.Subject_of_Mail}</StyledTableCell>
              <StyledTableCell align="center">{row.Customer_Emailid}</StyledTableCell>
              <StyledTableCell align="center">{row.Dealer_enduser_slot_start_date}</StyledTableCell>
              <StyledTableCell align="center">{row.Dealer_enduser_slot_start_time}</StyledTableCell>
              <StyledTableCell align="center">{row.Dealer_enduser_slot_end_time}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}