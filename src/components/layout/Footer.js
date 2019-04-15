import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { List, ListItem, Typography as TypoGraphy } from "@material-ui/core";

const styles = theme => ({
  flex: {
    flexGrow: 1
  },

  footer: {
    padding: 5,
    position: "absolute",
    textAlign: "center",
    left: 0,
    bottom: 0,
    right: 0,
    width: "100%",
    //height: "100px",
    backgroundColor: "#fff"
  },
  list: {
    display: "flex",
    flexDirection: "row",
    "align-items": "center",
    " justify-content": "center"
  }
});

class Footer extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.footer}>
        <Grid container spacing={8}>
          <Divider />
          <AppBar
            position="static"
            style={{ background: "#1b577d", alignItems: "center" }}
          >
            <Toolbar>
              <Typography
                variant="caption"
                color="inherit"
                className={classes.flex}
                style={{ alignItems: "center" }}
              >
                <br />
                The Air Resources Board is one of six boards, departments, and
                offices under the California Environmental Protection Agency.
              </Typography>
            </Toolbar>
            <Toolbar>
              <Typography variant="caption">
                <List
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <ListItem>
                    <a
                      style={{
                        color: "#FCBB00",
                        textDecoration: "none"
                      }}
                      href="https://www.calepa.ca.gov/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      CalEPA
                    </a>
                    &nbsp; &nbsp;| &nbsp;
                    <a
                      style={{
                        color: "#FCBB00",
                        textDecoration: "none"
                      }}
                      href="https://www.calrecycle.ca.gov/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      CalRecycle
                    </a>
                    &nbsp; &nbsp;| &nbsp;
                    <a
                      style={{
                        color: "#FCBB00",
                        textDecoration: "none"
                      }}
                      href="https://www.cdpr.ca.gov/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      &nbsp; DPR
                    </a>
                    &nbsp; &nbsp;| &nbsp;
                    <a
                      style={{
                        color: "#FCBB00",
                        textDecoration: "none"
                      }}
                      href="https://www.dtsc.ca.gov/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      &nbsp; DTSC
                    </a>
                    &nbsp; &nbsp;| &nbsp;
                    <a
                      style={{
                        color: "#FCBB00",
                        textDecoration: "none"
                      }}
                      href="https://oehha.ca.gov/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      &nbsp; OEHHA
                    </a>
                    &nbsp; &nbsp;| &nbsp;
                    <a
                      style={{
                        color: "#FCBB00",
                        textDecoration: "none"
                      }}
                      href="https://www.waterboards.ca.gov/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      &nbsp; SWRCB
                    </a>
                  </ListItem>
                </List>
                <div
                  style={{
                    color: "white"
                  }}
                >
                  Copyright © 2019 State of California
                </div>
              </Typography>
            </Toolbar>
          </AppBar>
        </Grid>
      </Paper>
    );
  }
}

export default withStyles(styles)(Footer);
