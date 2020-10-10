import React from 'react';
import axios from 'axios';
import './signup.css';
 
class DemoForm extends React.Component {
    constructor() {
    super();
    this.state = {
    userId:'',
    dealerId:'',
    password:'',
    mailId:'',
    phoneNumber:'',
    confirmpassword:'',
    errors: {},
    response:[],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
 
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    }
    
  handleSubmit(event) {
    event.preventDefault();
    if(this.validate()){
        const {userId,dealerId,password,mailId,phoneNumber}=this.state;
        axios.post('http://localhost:8083/api/signup', ({userId,dealerId,password,mailId,phoneNumber})) 
      .then(res => {
        const response=res.data;
  this.setState({response});
        console.log(res);
        console.log(res.data);
      }).catch(err=>{
        console.log(err);
      })
    }
  }
 
  validate(){
      let userId=this.state.userId;
      let dealerId=this.state.dealerId;
      let mailId=this.state.mailId;
      let password=this.state.password;
      let phoneNumber=this.state.phoneNumber;
      let confirmpassword=this.state.confirmpassword;
      let errors = {};
      let isValid = true;
      if (!userId) {
        isValid = false;
        errors["userId"] = "Please enter your userId.";
      }
    if (!dealerId) {
        isValid = false;
        errors["dealerId"] = "Please enter your dealerId.";
       }
      if (!mailId) {
         isValid = false;
         errors["mailId"] = "Please enter your mailId Address.";
       }
      if (typeof mailId !== "undefined") { 
         var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
         if (!pattern.test(mailId)) {
           isValid = false;
           errors["mailId"] = "Please enter valid mailId address.";
         }
       }
      
      if(!phoneNumber){
        isValid=false;
        errors["phoneNumber"]="Please enter your phone number";
      }
      if(typeof phoneNumber!=="undefined"){
        var phoneno=/^\d{10}$/;
        if(!phoneno.test(phoneNumber)){
          isValid=false;
          errors["phoneNumber"]="Please enter valid phone number";
        }
      }
      if (!password) {
        isValid = false;
        errors["password"] = "Please enter password.";
      }
      if (!confirmpassword) {
        isValid = false;
        errors["confirmpassword"] = "Please enter confirm password.";
      }
      if (typeof password!== "undefined" && typeof confirmpassword !== "undefined") {
        if (password !== confirmpassword ) {
          isValid = false;
          errors["confirmpassword"] = "Passwords don't match.";
        }
      } 
      if(password.length<8){
        isValid=false;
        errors["confirmpassword"]="Password is too small";
      }
      this.setState({
        errors: errors
      });
      return isValid;
  }
 
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div class="form-group">
            <label for="userId">UserId:</label>
            <input 
              type="text" 
              name="userId" 
              value={this.state.userId}
              onChange={this.handleChange}
              class="form-control" 
              placeholder="Enter User Id" 
              id="userId" />
              <div className="text-danger">{this.state.errors.userId}</div>
          </div>
          <div class="form-group">
            <label for="dealerId">Dealer Id:</label>
            <input 
              type="text" 
              name="dealerId" 
              value={this.state.dealerId}
              onChange={this.handleChange}
              class="form-control" 
              placeholder="Enter Dealer Id" 
              id="dealerId" />
              <div className="text-danger">{this.state.errors.dealerId}</div>
          </div>
          <div class="form-group">
            <label for="mailId">Email Id:</label>
            <input 
              type="text" 
              name="mailId" 
              value={this.state.mailid}
              onChange={this.handleChange}
              class="form-control" 
              placeholder="Enter Email" 
              id="mailId" />
              <div className="text-danger">{this.state.errors.mailId}</div>
          </div>
              <div class="form-group">
            <label for="phoneNumber">Phone Number:</label>
            <input 
              type="tel" 
              name="phoneNumber" 
              value={this.state.phoneNumber}
              onChange={this.handleChange}
              class="form-control" 
              placeholder="Enter phone number" 
              id="phoneNumber" />
              <div className="text-danger">{this.state.errors.phoneNumber}</div>
          </div>
          <div class="form-group">
            <label for="password">Password:</label>
            <input 
              type="password" 
              name="password" 
              value={this.state.password}
              onChange={this.handleChange}
              class="form-control" 
              placeholder="Enter password" 
              id="password" />
              <div className="text-danger">{this.state.errors.password}</div>
          </div>
          <div class="form-group">
            <label for="confirmpassword">Confirm Password:</label>
            <input 
              type="password" 
              name="confirmpassword" 
              value={this.state.confirmpassword}
              onChange={this.handleChange}
              class="form-control" 
              placeholder="Enter confirm password" 
              id="confirmpassword" />
              <div className="text-danger">{this.state.errors.confirmpassword}</div>
          </div>
          <input type="submit" value="Submit" class="btn btn-success" />
        </form>
        <div>{this.state.response.message}</div> 
      </div>
    );
  }
}
 
export default DemoForm;

 