import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { reduxForm, Field } from "redux-form";
import { renderTextField } from "../../utilities/form_helpers";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import {signinUser} from "../../actions/actionsLogin";

class Signin extends Component {
  state = {
    email: "",
    password: "",
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

  displayRedirectMessages() {
    const location = this.props.location;
    return (
      location.state && (
        <div className="alert alert-danger">{location.state.message}</div>
      )
    );
  }

  handleSubmit= e => {
    e.preventDefault();
    const loginCredentials = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.signinUser(loginCredentials);
  }

  onChangeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };


  getRedirectPath() {
    const locationState = this.props.location.state;
    if (locationState && locationState.from.pathname) {
      return locationState.from.pathname; // redirects to referring url
    } else {
      return "/dashboard";
    }
  }

  render() {
    if (this.props.authenticated ){
      return <Redirect
        to={{
          pathname: this.getRedirectPath(),
          state: {
            from: this.props.location
          }
        }}
      />
    }
    return (
      <div>
        {this.displayRedirectMessages()}
         <Grid
          container
          direction="column"
          alignItems="center"
          justify="center"
          style={{ minHeight: "25vh" }}
        >
          {this.renderAlert()}
          <form onSubmit={this.handleSubmit.bind(this)}>
            <Field
              name="email"
              component={renderTextField}
              type="text"
              placeholder="Username"
              value={this.state.email}
              onChange={this.onChangeHandler}
            />

            <Field
              name="password"
              component={renderTextField}
              type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.onChangeHandler}
            />
            <br />
            <Button variant="contained" color="primary" type="submit">
              Sign In
            </Button>
          </form>
        </Grid>
      
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
    errorMessage: state.auth.error
  };
}

Signin = connect(
  mapStateToProps,
  {signinUser} 
)(Signin);


Signin = reduxForm({
  form: "signin"
})(Signin);

export default Signin;