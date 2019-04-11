import React, { Component } from "react";
import { Link } from "react-router-dom";
class Admin extends Component {
  render() {
    return (
      <div>
        <p>
          <strong>You're in Admin Panel</strong>
        </p>
        <br />
        <Link to="/equipmentswitch">Equipment Switch</Link>
      </div>
    );
  }
}

export default Admin;
