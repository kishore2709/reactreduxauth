import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import Button from "@material-ui/core/Button";
import { renderTextField } from "./form_helpers";
import Grid from "@material-ui/core/Grid";

class SignupForm extends Component {
  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Oops: </strong>
          {this.props.errorMessage}
        </div>
      );
    }
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div>
        <Grid
          container
          spacing={40}
          direction="column"
          alignItems="center"
          justify="center"
          style={{ minHeight: "35vh" }}
        >
          {this.renderAlert()}
          <form onSubmit={handleSubmit}>
            <Field
              placeholder="Name"
              name="name"
              component={renderTextField}
              type="text"
            />
            <Field
              placeholder="Email"
              name="email"
              component={renderTextField}
              type="text"
            />
            <Field
              placeholder="Username"
              name="username"
              component={renderTextField}
              type="text"
            />

            <Field
              placeholder="Password"
              name="password"
              component={renderTextField}
              type="password"
            />

            <Field
              placeholder="Password Confirmation"
              name="passwordConfirmation"
              component={renderTextField}
              type="password"
            />

            <Button variant="raised" color="primary" type="submit">
              Sign Up
            </Button>
          </form>
        </Grid>
      </div>
    );
  }
}

const validate = values => {
  const errors = {};

  if (values.password !== values.passwordConfirmation) {
    errors.password = "Passwords must match";
  }
  if (!values.name) {
    errors.name = "Please enter an name";
  }
  if (!values.email) {
    errors.email = "Please enter an email";
  }
  if (!values.username) {
    errors.username = "Please enter an username";
  }
  if (!values.password) {
    errors.password = "Please enter a password";
  }

  if (!values.passwordConfirmation) {
    errors.passwordConfirmation = "Please confirm your password";
  }

  return errors;
};

export default reduxForm({
  form: "signup",
  validate
})(SignupForm);
