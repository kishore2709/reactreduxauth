import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { reduxForm, Field } from "redux-form";
import Button from "@material-ui/core/Button";
import { renderTextField } from "../../utilities/form_helpers";
import Grid from "@material-ui/core/Grid";
import {signupUser} from "../../api/apiLogin";

class Signup extends Component {
  state = {
    name: "",
    email: "",
    username: "",
    password: "",
    passwordConfirmation: "",
    errors: {}
  };
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
  componentWillUnmount() {
    if (this.props.errorMessage) {
      this.props.authError(null);
    }
  }

  handleSubmit= e => {
    e.preventDefault();
    const signUpDetails = { name: this.state.name, 
      email: this.state.email, 
      username: this.state.username, 
      password: this.state.password, 
      passwordConfirmation: this.state.passwordConfirmation };
    this.props.signupUser(signUpDetails);
  }

  getRedirectPath() {
    const locationState = this.props.location.state;
    if (locationState && locationState.from.pathname) {
      return locationState.from.pathname;
    } else {
      return "/";
    }
  }

  render() {
    return this.props.authenticated ? (
      <Redirect
        to={{
          pathname: this.getRedirectPath(),
          state: {
            from: this.props.location
          }
        }}
      />
    ) : (
      <div>
        <Grid
          container
          direction="column"
          alignItems="center"
          justify="center"
          style={{ minHeight: "35vh" }}
        >
          {this.renderAlert()}
          <form onSubmit={this.handleSubmit.bind(this)}>
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
            <br />
            <Button variant="contained" color="primary" type="submit">
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

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
    errorMessage: state.auth.error
  };
}

Signup = connect(
  mapStateToProps,
  {signupUser}
)(Signup);
Signup = reduxForm({
  form: "signup",
  validate
})(Signup);
export default Signup;