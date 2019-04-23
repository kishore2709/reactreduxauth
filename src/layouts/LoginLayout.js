import React from 'react';  
import Header from "../components/layout/header";
import Footer from "../components/layout/Footer";
  
const LoginLayout  = props => (           
    <div>  
      <Header/>            
      {props.children} 
      <Footer/>                                   
    </div>  
                       
   
  );  
  
export default LoginLayout;  