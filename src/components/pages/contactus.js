import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";

class Contactus extends Component {
  render() {
    return (
      <div>
        <Typography variant="h4" align="center" gutterBottom>
          <p>
            <strong>
              Welcome to the Portable Equipment Registration Program (PERP)
            </strong>
          </p>
        </Typography>

        <br />
        <Typography variant="body1" align="center" gutterBottom>
          <p>
            Statewide Portable Equipment Registration Program (PERP)
            <br />
            <br />
            CARB / PERP
            <br />
            P.O. Box 2038
            <br />
            Sacramento, CA 95812
          </p>
        </Typography>
      </div>
    );
  }
}

export default Contactus;
