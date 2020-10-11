import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Table from './components/Dashboard/Dashboard';
import * as serviceWorker from './serviceWorker';
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import DemoForm from './SignUp/signup';
import  App from './SignIn/finallogin';

// ReactDOM.render(
//   <React.StrictMode>
//     <Table/>
//   </React.StrictMode>,
//   document.getElementById('root')
// );
const hist = createBrowserHistory();
ReactDOM.render(
  <Router history={hist}>
    <Switch>
    <Route path="/login" component={App}/> 

      <Route path="/dashboard" component={Table} /> 

       <Route path="/Signup" component={DemoForm} /> 

     
    </Switch>
  </Router>,
  document.getElementById("root")
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();