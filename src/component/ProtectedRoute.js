import React, {Component} from "react";
import { Redirect, Route } from "react-router-dom";
import fire from "../config/fire";

class ProtectedRoute extends Component{
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
        this.setState({user})
      }
      else{
        this.setState({user: null})
      }
    })
  }
  
  render(){
    const { component: Component, ...rest} = this.props;
    console.log(this.state.user);
    return (
      <Route
        {...rest}
        render={(props) => (this.state.user ? <Component {...props} /> : <Redirect to="/login" />)}
      />
    );
  }
};

export default ProtectedRoute;