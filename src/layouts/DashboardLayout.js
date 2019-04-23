import React, { Component } from 'react';  
import { Route } from 'react-router-dom';  
import Footer from "../components/layout/Footer";

  
const DashboardLayout = ({children, ...rest}) => {  
  return (  
    <div className="page page-dashboard">  
      <div className="sidebar">
      <Footer/>
      </div>  
      <div className="main">{children}</div>  
    </div>  
  )  
}  
  
const DashboardLayoutRoute = ({component: Component, ...rest}) => {  
  return (  
    <Route {...rest} render={matchProps => (  
      <DashboardLayout>  
          <Component {...matchProps} />  
      </DashboardLayout>  
    )} />  
  )  
};  
  
export default DashboardLayoutRoute;  