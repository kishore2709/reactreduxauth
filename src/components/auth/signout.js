import React, { Component } from "react";
import { connect } from "react-redux";
import {signoutUser} from "../../actions/actionsLogin";

class Signout extends Component {
  componentWillMount() {
    this.props.signoutUser();
  }

  componentDidMount() {
    this.props.history.push("/");
  }

  render() {
    return <div />;
  }
}

export default connect(
  null,
  {signoutUser} 
)(Signout);
