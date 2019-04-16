import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";

class Aboutus extends Component {
  render() {
    return (
      <div>
        <Typography variant="h4" align="center" gutterBottom>
          <p>
            <strong>
              Welcome to the Portable Equipment Registration Program (PERP)
            </strong>
          </p>
          <br />
          <p>
            Owners or Operators of portable engines and other types of equipment
            can register their units under the CARB Statewide Portable Equipment
            Registration Program (PERP) in order to operate their equipment
            throughout California without having to obtain individual permits
            from local air districts.
          </p>
        </Typography>
      </div>
    );
  }
}

export default Aboutus;
