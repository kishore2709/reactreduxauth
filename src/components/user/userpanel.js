import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";

class UserPanel extends Component {
  render() {
    return (
      <div>
        <Grid
          container
          spacing={40}
          direction="column"
          alignItems="center"
          justify="center"
        >
          <p>
            <strong>You're in user Panel</strong>
          </p>
        </Grid>
      </div>
    );
  }
}

export default UserPanel;
