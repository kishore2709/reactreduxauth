import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { AUTH_USER } from "./actions/types";
import Dashboard from "./components/layout/Dashboard/Dashboard";

import { publicRoutes, dashboardRoutes } from "./routes/index";
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

import LoginLayout from "./layouts/LoginLayout";
import DashboardLayout from "./layouts/DashboardLayout";
import AppRoute from "./routes/AppRoute";
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

window.addEventListener("beforeunload", ev => {
  localStorage.removeItem("token");
  ev.preventDefault();
  return (ev.returnValue = "Are you sure you want to close?");
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
                  {publicRoutes.map(route => (
                    <AppRoute
                      exact
                      path={route.path}
                      component={route.component}
                      layout={route.layout}
                      key={route.path}
                    />
                  ))}

                  {dashboardRoutes.map(route => (
                    <PrivateRoute
                      exact
                      path={route.path}
                      layout={route.layout}
                      component={route.component}
                      key={route.path}
                    />
                  ))}
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
