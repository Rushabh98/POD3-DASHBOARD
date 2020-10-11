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
    backgroundColor: '#666699',
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(Meeting_Date) {
  return { Meeting_Date};
}

const rows = [
  createData('12/12/2020'),
  createData('12/12/2020'),
  createData('12/12/2020'),
  createData('12/12/2020'),
  createData('12/12/2020'),
  createData('12/12/2020'),
  createData('12/12/2020'),
  createData('12/12/2020'),
];

const useStyles = makeStyles({
  table: {
    minWidth: 100,
    minHeight:300
  },
});

export default function DateTables() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align ='center'>Meeting_Date</StyledTableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.Meeting_Date}>
              <StyledTableCell align='center' component="th" scope="row">
               {/* <a href=''>{row.Meeting_Date}</a>  */}
              </StyledTableCell>
              
              
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}