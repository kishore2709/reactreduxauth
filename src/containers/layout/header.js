import React, { Component } from "react";
import { connect } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  List,
  Link,
  ListItem,
  ListItemText,
  Typography as TypoGraphy
} from "@material-ui/core";

const ROLE_ADMIN = "ADMIN";

class Header extends Component {
  render() {
    return (
      <div>
        <AppBar color="light" position="static">
          <Toolbar>
            <TypoGraphy variant="title" color="inherit">
              <Link component={RouterLink} to="/">
                <img
                  src="images/carb-logo.svg"
                  height="60"
                  width="250"
                  alt="California Air Resources Board"
                />
              </Link>
            </TypoGraphy>

            <List
              component="nav"
              style={{
                border: 0,
                "background-color": "transparent",
                color: "#327cac",
                marginLeft: "auto",
                align: "right",
                borderRadius: 3,
                color: "white",
                height: 48,
                padding: "0 30px"
              }}
              align="right"
            >
              <ListItem component="div">
                <ListItemText inset>
                  <TypoGraphy variant="title">
                    <Link component={RouterLink} to="/aboutus">
                      About Us
                    </Link>
                  </TypoGraphy>
                </ListItemText>

                <ListItemText inset>
                  <TypoGraphy variant="title">
                    <Link component={RouterLink} to="/contactus">
                      Contact Us
                    </Link>
                  </TypoGraphy>
                </ListItemText>

                <ListItemText inset>
                  <TypoGraphy variant="title">
                    <Link component={RouterLink} to="/signin">
                      Login
                    </Link>
                  </TypoGraphy>
                </ListItemText>

                <ListItemText inset>
                  <TypoGraphy variant="title">
                    <Link component={RouterLink} to="/signup">
                      Sign up
                    </Link>
                  </TypoGraphy>
                </ListItemText>
              </ListItem>
            </List>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
    auth: state.auth
  };
}

export default connect(mapStateToProps)(Header);
