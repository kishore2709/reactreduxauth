import React, { Component } from 'react';  
import { Route } from 'react-router-dom';  
import Header from "../components/layout/header";
import Footer from "../components/layout/Footer";
  
const LoginLayout = ({ children }) => (           
    <div>  
      <Header/>            
      {children}    
      <Footer/>                                   
    </div>  
                       
   
  );  
  
  const LoginLayoutRoute = ({component: Component, ...rest}) => {  
    return (  
    //  <Header />
      <Route {...rest} render={matchProps => (  
        
        <LoginLayout>  
            <Component {...matchProps} />  
        </LoginLayout>  
      )} />  
   //   <Footer />  
    )  
  };  
  
export default LoginLayoutRoute;  