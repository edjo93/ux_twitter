import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import'./custom.css'
import fire from "./config/fire";
import Login from "./component/Login";
import Home from "./component/Home";
import Signup from "./component/Signup"
import {Route, BrowserRouter as Router, Switch, Redirect} from "react-router-dom";
import ProtectedRoute from "./component/ProtectedRoute";

class App extends Component {
  constructor(props)
  {
    super(props);
    this.state={
      user: {}
    }
  }
  componentDidMount()
  {
    this.authListener();
    
  }
  authListener(){
    fire.auth().onAuthStateChanged((user)=>{
      if(user)
      {
        //console.log(user.email)
        this.setState({user})
      }
      else{
        this.setState({user: null})
      }
    })
  }
  render(){
    return (
      <div> 
        
        <Router>
          <Switch>
            <Redirect exact path="/" to="/Home" />
            <Route path="/Login" component= {Login}/>
            <ProtectedRoute path="/Home" exact component={Home}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
