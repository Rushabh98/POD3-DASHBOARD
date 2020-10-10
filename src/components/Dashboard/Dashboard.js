import React, { Component, Fragment,useState } from 'react'
import './App.css';
import Logout from './logout.js';
import FabIntegrationSnackbar from './snackbar';
import CustomizedTables from './table';
import Grid from '@material-ui/core/Grid';
import DateTables from './datetable';
import { MuiPickersUtilsProvider,KeyboardDatePicker} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { isThisHour } from 'date-fns';
import Button from '@material-ui/core/Button';
import avatar from './cover.jpeg';
function KeyboardDatePickerExample(props) {
   const [selectedDate, handleDateChange] = useState(new Date());
 
   return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
     <Fragment> 
       <KeyboardDatePicker
         placeholder="2020/10/10"
         value={selectedDate}
         onChange={date => handleDateChange(date)}
         format="yyyy/MM/dd"
       />
     </Fragment>
     </MuiPickersUtilsProvider>
   );
 }
class Table extends Component {

   render() {
    return (
       <div style={{backgroundColor:''}} >
          <FabIntegrationSnackbar/>
          
          <div style={{backgroundColor:'#e6e6ff'}}>
          <h1 id='title' style={{paddingTop:'75px',paddingBottom:'20px', color:'#000080'}}>Welcome Dealer!!</h1>
          <Grid container spacing={1}>
          <Grid item xs={9}>
          <center><div style={{paddingLeft:'50px',paddingRight:'50px'}} >
          <CustomizedTables/>
          </div></center>
        </Grid>


        <Grid item xs={3}>
           <div style={{ border: '1px solid black',borderRadius: '40px',
                     margin:'30px',width:'240px',height:'160px',backgroundColor:'#b3c6ff'}}>
        <center>
           <div style={{paddingLeft:'50px',paddingRight:'50px',paddingBottom:'80px',marginTop:'40px',}}>
              <h1 style={ {fontSize:'17px', color:'#0063cc',
                  fontWeight:'bold'}}>Calendar</h1>

          <KeyboardDatePickerExample style={{padding:'10px',margin:'7px',fontSize:'5px'}}/>

          <Button style={{padding:'10px',backgroundColor:'#ccffff',margin:'9px',width:'15px',height:'20px',color:'#000066'}}
            type="submit" variant="contained" > ok </Button>

          </div></center>
          </div>
        </Grid>


      </Grid>
      </div>
      
      // </div>
    )
 }
}
export default Table