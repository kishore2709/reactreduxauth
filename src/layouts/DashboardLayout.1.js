import React, { Component } from "react";
import { Route } from 'react-router-dom';  
import Footer from "../components/layout/Footer";
import { connect } from "react-redux";
import Signin from "../components/auth/signin";

import LoginLayoutRoute from "./LoginLayout";  


  
const DashboardLayout = ({children, ...rest}) => {  
  return (  
    <div className="page page-dashboard">  
      <div className="sidebar">
     Header
      </div>  
      <div className="main">{children}</div>  
      <div className="sidebar">
     Footer
      </div>
    </div>  
  )  
}  
  
const DashboardLayoutRoute2 = ({component: Component, ...rest}) => {  
  return (  
    <Route
    {...rest}
    render={ matchProps =>
      this.props.authenticated ? (
          <DashboardLayout>  
          <Component {...matchProps} />  
      </DashboardLayout>  
            ) : (
          <LoginLayoutRoute path="/signin" component={Signin} />
          )
    } /> 
  )  
};  
function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated };
}
const DashboardLayoutRoute3 = connect(mapStateToProps)(DashboardLayoutRoute2);
export default DashboardLayoutRoute3;  