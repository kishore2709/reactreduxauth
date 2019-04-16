import React from "react";
import Typography from "@material-ui/core/Typography";
import "../../node_modules/font-awesome/css/font-awesome.min.css";

export default () => {
  return (
    <div>
      <Typography variant="h4" align="center" gutterBottom>
        <p>
          <strong>
            Welcome to the Portable Equipment Registration Program (PERP)
          </strong>
        </p>

        <br />
        <img src="images/woodchipper.jpg" alt="woodchipper" />
      </Typography>
    </div>
  );
};
