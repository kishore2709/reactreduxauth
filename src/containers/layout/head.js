import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const ROLE_ADMIN = "ADMIN";

class Head extends Component {
  renderUserRoleBasedLinks() {
    if (this.props.authenticated) {
      if (this.props.auth.user.roles.includes(ROLE_ADMIN)) {
        return (
          <Link className="nav-link" to="/admin">
            Admin Menu
          </Link>
        );
      } else {
        return (
          <Link className="nav-link" to="/user">
            User Menu
          </Link>
        );
      }
    }
  }

  renderLinks() {
    if (this.props.authenticated) {
      return [
        <li key={1} className="nav-item">
          {this.props.auth.user.username}
          <Link className="nav-link" to="/signout">
            Sign Out
          </Link>
        </li>,
        <li key={2} className="nav-item">
          <Link className="nav-link" to="/feature">
            Protected Site
          </Link>
        </li>,
        <li key={3} className="nav-item">
          {this.renderUserRoleBasedLinks()}
        </li>
      ];
    } else {
      return [
        <li key={1} className="nav-item">
          <Link className="nav-link" to="/signin">
            Sign In
          </Link>
        </li>,
        <li key={2} className="nav-item">
          <Link className="nav-link" to="/signup">
            Sign Up
          </Link>
        </li>,
        <li key={3} className="nav-item">
          <Link className="nav-link" to="/feature">
            Protected Site
          </Link>
        </li>
      ];
    }
  }

  render() {
    return (
      <nav className="navbar navbar-light ">
        <Link to="/" className="navbar-brand">
          Home
        </Link>
        <ul className="nav navbar-nav">{this.renderLinks()}</ul>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
    auth: state.auth
  };
}

export default connect(mapStateToProps)(Head);
