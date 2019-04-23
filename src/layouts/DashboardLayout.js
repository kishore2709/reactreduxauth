import React from 'react';   
import Footer from "../components/layout/Footer";

  
const DashboardLayout = props => (  
    <div className="page page-dashboard">  
      <div className="sidebar">
      <Footer/>
      </div>  
      <div className="main"> {props.children}</div>  
    </div>  
  )  
export default DashboardLayout;  