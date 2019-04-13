import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

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

    backgroundColor: "#1E88E5"
  }
});

class Footer extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.footer}>
        <Grid container spacing={8}>
          <Grid item xs={12} sm={6} md={6}>
            <Typography variant="subheading" color="inherit">
              Footer Content
            </Typography>

            <Typography color="inherit" variant="caption">
              You can use rows and columns of Material-UI Grid here to organize
              your footer content.
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={6} />

          <Divider />

          <AppBar position="static">
            <Toolbar variant="dense">
              <Typography
                variant="caption"
                color="inherit"
                className={classes.flex}
              >
                The Air Resources Board is one of six boards, departments, and
                offices under the California Environmental Protection Agency.
              </Typography>
              <Typography color="inherit" variant="caption">
                Copyright © 2019 State of California{" "}
              </Typography>
            </Toolbar>
          </AppBar>
        </Grid>
      </Paper>
    );
  }
}

export default withStyles(styles)(Footer);
