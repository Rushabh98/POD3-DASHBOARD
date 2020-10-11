// import React from 'react';
// import axios from 'axios';
// import Grid from '@material-ui/core/Grid';
// import { Container } from '@material-ui/core';
// import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import Avatar from '@material-ui/core/Avatar';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import './signin.css';
// import Table from '../components/Dashboard/Dashboard';
// import 
// import {
//     BrowserRouter as Router,
//     Route,
//     Link,
//     Switch,
//     Redirect,
//     useLocation
//     } from "react-router-dom";
    

// export default class FormUser extends React.Component {
//     state = {
//         userId: '',
//         password: '',
//         response: [],
//         erresponse:[],
//         isSignedUp: false
//     };
//     // constructor(props) {
//     //     super(props);
//     //     this.state = {
//     //       isSignedUp: false // <-- initialize the signup state as false
//     //     }
//     //   }
 
// handleChange = e => {
//     this.setState({ [e.target.name]: e.target.value });
  
//  }

// handleSubmit = event => 
// {
    
//     console.log("clicked");
    
//     event.preventDefault();
//     this.setState({isSignedUp: true});
//     // this.renderValidate()
//     // const { userId, password } = this.state;
//     // axios.post('http://localhost:8083/api/signin', 
//     //     ({ userId, password })) 
//     //         .then(res => {
//     //             const response=res.data;
//     //             this.setState({response});
//     //             console.log(res);
//     //             console.log(res.data);
//     //             if (res.message !== "Invalid UserID or password!") {
//     //                 this.setState({ isSignedUp: true}); // after signing up, set the state to true. This will trigger a re-render
//     //               }
//     //              else {
//     //                 this.setState({ isSignedUp: false}); // after signing up, set the state to true. This will trigger a re-render
//     //               }

//     //     }).catch((error) => {

//     //     console.log("Error",error);
//     // });
//     }
 
// render() {
// return (

// <Container component="main" maxWidth="md">
 
// <CssBaseline />
// <div   className="card col-8 col-lg-12 login-card mt-2 hv-center">  

// <Typography 
//     display="block" 
//     align="center" 
//     component="h1" 
//     variant="subtitle1">
          
//           Sign In

// </Typography>

       
//  <form   onSubmit={this.handleSubmit}>

//   <label >Dealer'Id:  
//     <input type="text" 
//           name="userId" 
//           className="form-control" 
//           onChange={e=>{  console.log(this.state.userId);
//             this.setState({userId:e})}}
        
//           />
//   </label>
//   <br/>
//   <label>Password:  
//     <input type="password" 
//            name="password" 
//            className="form-control" 
//            />
           
//     </label>
//     <br/>
//               <button type="submit" onClick={this.handlesubmit} className="btn btn-dark" 
//                >
//                      Sign In
//               </button>              
                 
//   <Grid container>
//             <Grid item xs>
//                 <Link to ="#" variant="body2">
//                     Forgot password?
//                 </Link>
//             </Grid>
//             <Grid item xs>
//                 <Link to ="#" variant="body2">
//                     {"Don't have an account? Sign Up"}
//                 </Link>
//             </Grid>
//           </Grid>
// </form>

// {/* if (this.state.isSignedUp) {
//       // redirect to home if signed up
//       return <Redirect to = {{ pathname: "/home" }} />;
//     } */}

 
//     <div className="myDiv">
//             {this.state.response.message}
//     </div> 
 
// </div>  
 
// </Container>
//  )
//   }
//   renderValidate() {
//         console.log("Dash");
//         console.log(this.state.isSignedUp)
//             // if (this.state.isSignedUp) {
//                 render (){
//                     return(
//                         <Redirect to = '/dashboard' />  
//                          )
//                 }
                    
                
      
//      //}
//                 }
     
 
// }



// // import React from 'react';
// // import axios from 'axios';
// // import Link from '@material-ui/core/Link';
// // import Grid from '@material-ui/core/Grid';import {​​​​​​​ Container }​​​​​​​ from '@material-ui/core';
// // import Typography from '@material-ui/core/Typography';import {​​​​​​​ makeStyles }​​​​​​​ from '@material-ui/core/styles';import CssBaseline from '@material-ui/core/CssBaseline';import Avatar from '@material-ui/core/Avatar';import LockOutlinedIcon from '@material-ui/icons/LockOutlined';import '../App.css';export default class FormUser extends React.Component {​​​​​​​    state = {​​​​​​​        userId: '',    password: '',    response: [],    erresponse:[],}​​​​​​​;handleChange = e => {​​​​​​​ this.setState({​​​​​​​ [e.target.name]: e.target.value }​​​​​​​); }​​​​​​​handleSubmit = event => {​​​​​​​event.preventDefault();const {​​​​​​​ userId, password }​​​​​​​ = this.state;axios.post('http://localhost:8081/api/signin', ({​​​​​​​ userId, password }​​​​​​​))  .then(res => {​​​​​​​  const response=res.data;  this.setState({​​​​​​​response}​​​​​​​);    console.log(res);    console.log(res.data);  }​​​​​​​).catch((error) => {​​​​​​​        console.log("Error",error);}​​​​​​​); }​​​​​​​render() {​​​​​​​  return (<Container component="main" maxWidth="md"><CssBaseline /><div   className="card col-8 col-lg-12 login-card mt-2 hv-center">  {​​​​​​​/* <Avatar><LockOutlinedIcon /></Avatar> */}​​​​​​​<Typography display="block" align="center" component="h1" variant="subtitle1">          Sign in</Typography>                <form   onSubmit={​​​​​​​this.handleSubmit}​​​​​​​>  <label >Dealer'Id:      <input type="text"           name="userId"           className="form-control"           onChange={​​​​​​​this.handleChange}​​​​​​​/>  </label>  <br/>  <label>Password:      <input type="password"            name="password"            className="form-control"            onChange={​​​​​​​this.handleChange}​​​​​​​/>               </label>    <br/>  <button type="submit"           className="btn btn-dark">                 Sign In      </button>  <Grid container>            <Grid item xs>              <Link href="#" variant="body2">                Forgot password?              </Link>            </Grid>            <Grid item xs>              <Link href="#" variant="body2">                {​​​​​​​"Don't have an account? Sign Up"}​​​​​​​              </Link>            </Grid>          </Grid></form><div class="myDiv">{​​​​​​​this.state.response.message}​​​​​​​</div> </div>  </Container> )  }​​​​​​​     }​​​​​​​

// // import React from 'react';
// // import axios from 'axios';import Link from '@material-ui/core/Link';
// // import Grid from '@material-ui/core/Grid';import {​​​​​​​ Container }​​​​​​​ from '@material-ui/core';
// // import Typography from '@material-ui/core/Typography';import {​​​​​​​ makeStyles }​​​​​​​ from '@material-ui/core/styles';import CssBaseline from '@material-ui/core/CssBaseline';import Avatar from '@material-ui/core/Avatar';import LockOutlinedIcon from '@material-ui/icons/LockOutlined';import '../App.css';export default class FormUser extends React.Component {​​​​​​​    state = {​​​​​​​        userId: '',    password: '',    response: [],    erresponse:[],}​​​​​​​;handleChange = e => {​​​​​​​ this.setState({​​​​​​​ [e.target.name]: e.target.value }​​​​​​​); }​​​​​​​handleSubmit = event => {​​​​​​​event.preventDefault();const {​​​​​​​ userId, password }​​​​​​​ = this.state;axios.post('http://localhost:8081/api/signin', ({​​​​​​​ userId, password }​​​​​​​))  .then(res => {​​​​​​​  const response=res.data;  this.setState({​​​​​​​response}​​​​​​​);    console.log(res);    console.log(res.data);  }​​​​​​​).catch((error) => {​​​​​​​        console.log("Error",error);}​​​​​​​); }​​​​​​​render() {​​​​​​​  return (<Container component="main" maxWidth="md"><CssBaseline /><div   className="card col-8 col-lg-12 login-card mt-2 hv-center">  {​​​​​​​/* <Avatar><LockOutlinedIcon /></Avatar> */}​​​​​​​<Typography display="block" align="center" component="h1" variant="subtitle1">          Sign in</Typography>                <form   onSubmit={​​​​​​​this.handleSubmit}​​​​​​​>  <label >Dealer'Id:      <input type="text"           name="userId"           className="form-control"           onChange={​​​​​​​this.handleChange}​​​​​​​/>  </label>  <br/>  <label>Password:      <input type="password"            name="password"            className="form-control"            onChange={​​​​​​​this.handleChange}​​​​​​​/>               </label>    <br/>  <button type="submit"           className="btn btn-dark">                 Sign In      </button>  <Grid container>            <Grid item xs>              <Link href="#" variant="body2">                Forgot password?              </Link>            </Grid>            <Grid item xs>              <Link href="#" variant="body2">                {​​​​​​​"Don't have an account? Sign Up"}​​​​​​​              </Link>            </Grid>          </Grid></form><div class="myDiv">{​​​​​​​this.state.response.message}​​​​​​​</div> </div>  </Container> )  }​​​​​​​     }​​​​​​​
// // import React from 'react';
// // import axios from 'axios';
// // import Grid from '@material-ui/core/Grid';
// // import { Container } from '@material-ui/core';
// // import Typography from '@material-ui/core/Typography';
// // import { makeStyles } from '@material-ui/core/styles';
// // import CssBaseline from '@material-ui/core/CssBaseline';
// // import Avatar from '@material-ui/core/Avatar';
// // import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

// // import Table from '../components/Dashboard/Dashboard';
// // import Header from './Header'
// //  import {
// //         BrowserRouter as Router,
// //         Route,
// //         Link,
// //         Switch,
// //         Redirect,
// //         useLocation
// //         } from "react-router-dom";
// // export default class FormUser extends React.Component {
// //     state = {
// //     userId: '',
// //     password: '',
// //     response: [],
// //     erresponse:[],
// // };

// // handleChange = e => {
// //  this.setState({ [e.target.name]: e.target.value });
// //  }



// // handleSubmit = event => 
// // {


// // event.preventDefault();
// // const { userId, password } = this.state;
// // axios.post('http://localhost:8081/api/signin', ({ userId, password })) 
// //  .then(res => {
// //   const response=res.data;
// //   this.setState({response});
// //     console.log(res);
// //     console.log(res.data);
// //   }).catch((error) => {
    
// //     console.log("Error",error);
// // });
// //  }

// // render() {
// // return (
// // <div   className="card col-4 col-lg-4 login-card mt-2 hv-center">  

// //   <form onSubmit={this.handleSubmit}>
// //   <label >Dealer'Id:  
// //     <input type="text" 
// //           name="userId" 
// //           className="form-control" 
// //           onChange={this.handleChange}/>
// //   </label>
// //   <br/>
// //   <label>Password:  
// //     <input type="password" 
// //            name="password" 
// //            className="form-control" 
// //            onChange={this.handleChange}/>
           
// //     </label>
// //     <br/>
// //   <button type="submit"
// //            className="btn btn-dark">
             
// //     Sign In
    
// //   </button>
// //   <Grid container>
// //             <Grid item xs>
// //               <Link href="#" variant="body2">
// //                 Forgot password?
// //               </Link>
// //             </Grid>
// //             <Grid item>
// //               <Link href="#" variant="body2">
// //                 {"Don't have an account? Sign Up"}
// //               </Link>
// //             </Grid>
// //           </Grid>
// // </form>
// // <div>{this.state.response.message}</div> 
// // </div>  
// //          )
// //         }
// //     }


import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import './signin.css';
import React from 'react';
import axios from 'axios';
// import {
//     BrowserRouter as Router,
//     Route,
//     Switch,
//     Redirect,
//     useLocation
//     } from "react-router-dom";

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
axios.post('http://localhost:8083/api/signin', ({ userId, password })) 
    .then(res=> {
        const response=res.data;
        this.setState({response});
        console.log(res);
        console.log(res.data);
        if(this.state.response.message==="Successful login")
            window.location.href="http://localhost:3003/dashboard";
  }).catch((error) => {
        const response =error.data;
        this.setState({response});
        console.log("Error",error);
});
 }
render() {

return (

<Container component="main" maxWidth="md">

<CssBaseline />

<Typography display="block" align="center" component="h1" variant="subtitle1">
          Sign in
</Typography>
         
 <form   onSubmit=
    {this.handleSubmit}>

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
  <button type="submit"
           className="btn btn-dark">        
    Sign In
  </button>
  <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
              Forgot password?
              </Link>
              </Grid>
            
            <Grid item xs>
              <Link href="http://localhost:3003/Signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
</form>

<div class="myDiv">{this.state.response.message}</div> 

  

</Container>

 )
  }
}
