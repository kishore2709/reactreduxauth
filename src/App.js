import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import { BrowserRouter as Router, Route, Redirect,Switch } from "react-router-dom";
import { AUTH_USER } from "./actions/types";
import Header from "./components/layout/header";
import Footer from "./components/layout/Footer";
import Dashboard from "./components/layout/Dashboard/Dashboard";


import Welcome from "./components/welcome";
import jwt_decode from "jwt-decode";

import Signin from "./components/auth/signin";
import Signout from "./components/auth/signout";
import Signup from "./components/auth/signup";
import Aboutus from "./components/pages/aboutus";
import Contactus from "./components/pages/contactus";

import { PrivateRoute } from "./components/auth/require_auth";
import Feature from "./components/feature";
import reducers from "./reducers";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Admin from "./components/admin/adminpanel";
import UserPanel from "./components/user/userpanel";

import LoginLayoutRoute from "./layouts/LoginLayout";  
import DashboardLayoutRoute3 from "./layouts/DashboardLayout.1";  
//import injectTapEventPlugin from 'react-tap-event-plugin'
// Needed for onTouchTap with material-ui
//injectTapEventPlugin()

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);
const token = localStorage.getItem("token");
const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  }
});

window.addEventListener("beforeunload", (ev) => 
{  
  localStorage.removeItem("token");
    ev.preventDefault();
    return ev.returnValue = 'Are you sure you want to close?';
});
                                                              
if (token) {
  const decoded = jwt_decode(token);

  store.dispatch({ type: AUTH_USER, payload: decoded });
}
class App extends Component {
    state = {
      name: ""
    };
  
    render() {
      return (
        <Provider store={store}>
          <Router>
          <Switch>  
      <MuiThemeProvider theme={theme}>
        <div
          style={{
            minHeight: "100vh",
            overflow: " hidden",
            display: "block",
            position: " relative",
            paddingBottom: "100px"
          }}
        >
        
          <div
            style={{
              // marginTop: "80px",
              marginBottom: "260px"
            }}
          >
            <LoginLayoutRoute path="/" exact={true} component={Welcome} />
            <LoginLayoutRoute path="/signin" component={Signin} />
            <LoginLayoutRoute path="/signout" component={Signout} />
            <LoginLayoutRoute path="/signup" component={Signup} />
            <LoginLayoutRoute path="/aboutus" component={Aboutus} />
            <LoginLayoutRoute path="/contactus" component={Contactus} />

            <DashboardLayoutRoute3 path="/dashboard" component={Dashboard} /> 
            <PrivateRoute path="/admin" component={Admin} />
            <PrivateRoute path="/user" component={UserPanel} />
            <PrivateRoute path="/dashboard" component={Dashboard} />

            <PrivateRoute path="/feature" component={Feature} />
          </div>
        </div>
      </MuiThemeProvider>
      </Switch> 
    </Router>
     
        </Provider>
      );
    }
  }
  
  export default App;