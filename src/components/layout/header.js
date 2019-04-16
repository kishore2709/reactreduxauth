import React, { Component } from "react";
import { connect } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "@material-ui/core";
import "../../../node_modules/font-awesome/css/font-awesome.min.css";

import "../../style/navstyle.css";
const ROLE_ADMIN = "ADMIN";

class Header extends Component {
  renderUserRoleBasedLinks() {
    if (this.props.authenticated) {
      if (this.props.auth.user.roles.includes(ROLE_ADMIN)) {
        return (
          <Link
            className="nav__link is-collapsed"
            component={RouterLink}
            to="/admin"
          >
            Admin Menu
          </Link>
        );
      } else {
        return (
          <Link
            className="nav__link is-collapsed"
            component={RouterLink}
            to="/user"
          >
            User Menu
          </Link>
        );
      }
    }
  }

  renderLinks() {
    if (this.props.authenticated) {
      return [
        <li className="nav__item is-collapsed">
          <Link
            component={RouterLink}
            to="/feature"
            className="nav__link is-collapsed"
          >
            Protected Site{" "}
          </Link>
        </li>,

        <li className="nav__item is-collapsed">
          {this.renderUserRoleBasedLinks()}
        </li>,

        <li className="nav__item is-collapsed">
          <Link
            component={RouterLink}
            to="/signout"
            className="nav__link is-collapsed"
          >
            Sign Out
          </Link>
        </li>
      ];
    } else {
      return [
        <li className="nav__item is-collapsed">
          <Link
            component={RouterLink}
            to="/signin"
            className="nav__link is-collapsed"
          >
            Login
          </Link>
        </li>,

        <li className="nav__item is-collapsed">
          <Link
            component={RouterLink}
            to="/signup"
            className="nav__link is-collapsed"
          >
            Sign up
          </Link>
        </li>
      ];
    }
  }

  render() {
    return (
      <div>
        <div className="utility-header">
          <div className="container">
            <div className="utility-header__first">
              <ul className="social-media-links utility-links">
                <li>
                  <a href="https://twitter.com/AirResources">
                    <i className="fa fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/user/calairinfo">
                    <i className="fa fa-youtube" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/california-air-resources-board">
                    <i className="fa fa-linkedin" />
                  </a>
                </li>
                <li>
                  <a href="https://public.govdelivery.com/accounts/CARB/subscriber/new?topic_id=listserv">
                    <i className="fa fa-envelope" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="utility-header__second">
              <div className="site-search">
                <form
                  action="https://ww2.arb.ca.gov/search/site"
                  method="get"
                  id="search-block-form"
                  accept-charset="UTF-8"
                >
                  <div className="form-item form-item--textfield form-item--id-keys js-form-item js-form-type-textfield js-form-item-keys has-no-label">
                    <label
                      for="edit-keys--2"
                      className="form-item__label visually-hidden"
                    >
                      Search
                    </label>
                    <input
                      title="Enter the terms you wish to search for."
                      type="text"
                      id="edit-keys--2"
                      name="keys"
                      value=""
                      size="30"
                      maxlength="128"
                      className="form-item__text"
                    />
                  </div>
                  <div
                    className="form-actions form-wrapper js-form-wrapper"
                    id="edit-actions"
                  >
                    <input
                      type="submit"
                      id="edit-submit--2"
                      value="Search"
                      className="button js-form-submit"
                    />
                  </div>
                </form>
              </div>
            </div>

            <div className="utility-header__third">
              <div className="settings-links">
                <ul>
                  <li>
                    <a href="#">Calendar</a>
                  </li>
                  <li>
                    <a href="#">Help &amp; FAQs</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                  <li>
                    <a href="#">Careers</a>
                  </li>
                </ul>
              </div>
              <span
                className="language-switcher-language-url block block--language-switcher"
                id="block-languageswitcher"
                role="navigation"
              >
                <ul className="links">
                  <li hreflang="en" className="en">
                    <a href="#" className="language-link active" hreflang="en">
                      English
                    </a>
                  </li>
                  <li hreflang="es" className="es">
                    <a href="#" className="language-link" hreflang="es">
                      Español
                    </a>
                  </li>
                </ul>
              </span>
            </div>
          </div>
        </div>
        <div className="branding">
          <div className="header-cagov-logo">
            <Link to="/" component={RouterLink}>
              <img src="images/Ca-Gov-Logo-Gold.svg" alt="California Gov" />
            </Link>
          </div>
          <div className="branding__main">
            <div className="branding__banner">
              <Link to="/" component={RouterLink}>
                <img
                  src="images/carb-logo.svg"
                  height="60"
                  width="250"
                  alt="California Air Resources Board"
                />
              </Link>
            </div>
            <div className="branding__menu">
              <nav
                role="navigation"
                aria-labelledby="block-gesso-main-menu-label"
              >
                <h2
                  className="visually-hidden"
                  id="block-gesso-main-menu-label"
                >
                  Main navigation
                </h2>

                <ul className="nav nav--main">
                  <li className="nav__item is-collapsed">
                    <Link
                      component={RouterLink}
                      to="/"
                      className="nav__link is-collapsed"
                    >
                      Home
                    </Link>
                  </li>

                  <li className="nav__item is-collapsed">
                    <Link
                      component={RouterLink}
                      to="/aboutus"
                      className="nav__link is-collapsed"
                    >
                      About
                    </Link>
                  </li>

                  <li className="nav__item is-collapsed">
                    <Link
                      component={RouterLink}
                      to="/contactus"
                      className="nav__link is-collapsed"
                    >
                      Contact Us
                    </Link>
                  </li>
                  {this.renderLinks()}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
    auth: state.auth
  };
}

export default connect(mapStateToProps)(Header);