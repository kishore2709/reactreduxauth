import React, { Component } from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";

class Admin extends Component {
  render() {
    return (
      <div>
        <Grid
          container
          spacing={40}
          direction="column"
          alignItems="center"
          justify="center"
          style={{ minHeight: "25vh" }}
        >
          <p>
            <strong>You're in Admin Panel</strong>
          </p>
          <br />
          <Link to="/equipmentswitch">Equipment Switch</Link>
        </Grid>
      </div>
    );
  }
}

export default Admin;
