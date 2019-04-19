import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AUTH_USER } from "./actions/types";
import Header from "./components/layout/header";
import Footer from "./components/layout/Footer";

import Welcome from "./components/welcome";
import jwt_decode from "jwt-decode";

import Signin from "./containers/auth/signin";
import Signout from "./containers/auth/signout";
import Signup from "./containers/auth/signup";
import Aboutus from "./components/pages/aboutus";
import Contactus from "./components/pages/contactus";

import { PrivateRoute } from "./containers/auth/require_auth";
import Feature from "./components/feature";
import reducers from "./reducers";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Admin from "./components/admin/adminpanel";
import UserPanel from "./components/user/userpanel";
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

if (token) {
  const decoded = jwt_decode(token);

  store.dispatch({ type: AUTH_USER, payload: decoded });
}

ReactDOM.render(
  <Provider store={store}>
    <Router>
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
          <Header />
          <div
            style={{
              // marginTop: "80px",
              marginBottom: "260px"
            }}
          >
            <Route path="/" exact={true} component={Welcome} />
            <Route path="/signin" component={Signin} />
            <Route path="/signout" component={Signout} />
            <Route path="/signup" component={Signup} />
            <Route path="/aboutus" component={Aboutus} />
            <Route path="/contactus" component={Contactus} />

            <PrivateRoute path="/admin" component={Admin} />
            <PrivateRoute path="/user" component={UserPanel} />

            <PrivateRoute path="/feature" component={Feature} />
          </div>
          <Footer />
        </div>
      </MuiThemeProvider>
    </Router>
  </Provider>,
  document.getElementById("root")
);
