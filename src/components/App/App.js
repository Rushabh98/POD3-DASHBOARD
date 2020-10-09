import React, { Component } from 'react'
import './App.css';
import Logout from './logout.js';
import FabIntegrationSnackbar from './snackbar';
import CustomizedTables from './table';
import Grid from '@material-ui/core/Grid';
import DateTables from './datetable';
import InlineDatePickerDemo from './datepicker'
class Table extends Component {
 

 render() {
    return (
       <div style={{backgroundColor:''}} >
          <FabIntegrationSnackbar/>
          <div style={{}}>
          <h1 id='title' style={{padding:'20px',color:'#9999ff'}}>Welcome Dealer!!</h1>
          <h1 id='logout'>{this.renderlogout}</h1>
          <Grid container spacing={1}>
          <Grid item xs={9}>
          <center><div style={{paddingLeft:'50px',paddingRight:'50px'}} >
          <CustomizedTables/>
          </div></center>
        </Grid>
        <Grid item xs={3}>
        <center><div style={{paddingLeft:'50px',paddingRight:'50px'}}>
          <InlineDatePickerDemo/>
          </div></center>
        </Grid>
      </Grid>
          </div>
          
         
           
       </div>
    )
 }
}
export default Table 