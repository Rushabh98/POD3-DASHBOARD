import React from 'react';
import axios from 'axios';

import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import './style.css';
import Table from '../components/Dashboard/Dashboard';
import {
    BrowserRouter as Router,
    Switch,
    Route,Link
  } from "react-router-dom";

export default class FormUser extends React.Component {
    state = {
        userId: '',
        password: '',
        response: [],
        erresponse:[],
    };
 
handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
 }

 handleSubmit = event => 
{
 
    event.preventDefault();
    const { userId, password } = this.state;
    axios.post('http://localhost:8081/api/signin', 
        ({ userId, password })) 
            .then(res => {
                const response=res.data;
                this.setState({response});
                console.log(res);
                console.log(res.data);
        }).catch((error) => {

        console.log("Error",error);
    });
    }
 
render() {
return (
 
<Container component="main" maxWidth="md">
 
<CssBaseline />
<div   className="card col-8 col-lg-12 login-card mt-2 hv-center">  

<Typography 
    display="block" 
    align="center" 
    component="h1" 
    variant="subtitle1">
          
          SignIn

</Typography>
       
 <form   onSubmit={this.handleSubmit}>

  <label >Dealer'Id:  
    <input type="text" 
          name="userId" 
          className="form-control" 
          onChange={this.handleChange}/>
  </label>
  <br/>
  <label>Password:  
    <input type="password" 
           name="password" 
           className="form-control" 
           onChange={this.handleChange}/>
           
    </label>
    <br/>
 
            <Router>
                <Link to="/dealerdashboard">
                     <button type="submit" className="btn btn-dark">
                             Sign In
                    </button>
                </Link>
               
                <Switch>
                    <Route exact path="/dealerdashboard" component={Table}/>
                </Switch>  
            </Router> 
  <Grid container>
            <Grid item xs>
                <Link href="#" variant="body2">
                    Forgot password?
                </Link>
            </Grid>
            <Grid item xs>
                <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                </Link>
            </Grid>
          </Grid>
</form>


 
    <div class="myDiv">
        {this.state.response.message}
    </div> 
 
</div>  
 
</Container>
 )
  }
     
 
}