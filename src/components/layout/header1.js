import React, { Component } from "react";
import { connect } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "@material-ui/core";

import "./style.css";
const ROLE_ADMIN = "ADMIN";

class Header1 extends Component {
  renderUserRoleBasedLinks() {
    if (this.props.authenticated) {
      if (this.props.auth.user.roles.includes(ROLE_ADMIN)) {
        return (
          <Link
            class="nav__link is-collapsed"
            component={RouterLink}
            to="/admin"
          >
            Admin Menu
          </Link>
        );
      } else {
        return (
          <Link
            class="nav__link is-collapsed"
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
        <li class="nav__item is-collapsed">
          <Link
            component={RouterLink}
            to="/feature"
            class="nav__link is-collapsed"
          >
            Protected Site{" "}
          </Link>
        </li>,

        <li class="nav__item is-collapsed">
          {this.renderUserRoleBasedLinks()}
        </li>,

        <li class="nav__item is-collapsed">
          <Link
            component={RouterLink}
            to="/signout"
            class="nav__link is-collapsed"
          >
            Sign Out
          </Link>
        </li>
      ];
    } else {
      return [
        <li class="nav__item is-collapsed">
          <Link
            component={RouterLink}
            to="/signin"
            class="nav__link is-collapsed"
          >
            Login
          </Link>
        </li>,

        <li class="nav__item is-collapsed">
          <Link
            component={RouterLink}
            to="/signup"
            class="nav__link is-collapsed"
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
        <div class="utility-header">
          <div class="container">
            <div class="utility-header__first">
              <ul class="social-media-links utility-links">
                <li>
                  <a
                    href="https://twitter.com/AirResources"
                    class="ca-gov-icon-twitter"
                    tabindex="0"
                  >
                    <span>twitter</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/user/calairinfo"
                    class="ca-gov-icon-youtube"
                    tabindex="0"
                  >
                    <span>youtube</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/california-air-resources-board"
                    class="ca-gov-icon-linkedin"
                    tabindex="0"
                  >
                    <span>linkedin</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://public.govdelivery.com/accounts/CARB/subscriber/new?topic_id=listserv"
                    class="ca-gov-icon-email"
                    tabindex="0"
                  >
                    <span>email</span>
                  </a>
                </li>
              </ul>
            </div>

            <div class="utility-header__third">
              <div class="settings-links">
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
            </div>
          </div>
        </div>
        <div class="branding">
          <div class="header-cagov-logo">
            <Link to="/" component={RouterLink}>
              <img src="images/Ca-Gov-Logo-Gold.svg" alt="California Gov" />
            </Link>
          </div>
          <div class="branding__main">
            <div class="branding__banner">
              <Link to="/" component={RouterLink}>
                <img
                  src="images/carb-logo.svg"
                  height="60"
                  width="250"
                  alt="California Air Resources Board"
                />
              </Link>
            </div>
            <div class="branding__menu">
              <nav
                role="navigation"
                aria-labelledby="block-gesso-main-menu-label"
              >
                <h2 class="visually-hidden" id="block-gesso-main-menu-label">
                  Main navigation
                </h2>

                <ul class="nav nav--main">
                  <li class="nav__item is-collapsed">
                    <Link
                      component={RouterLink}
                      to="/aboutus"
                      class="nav__link is-collapsed"
                    >
                      About
                    </Link>
                  </li>

                  <li class="nav__item is-collapsed">
                    <Link
                      component={RouterLink}
                      to="/contactus"
                      class="nav__link is-collapsed"
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

export default connect(mapStateToProps)(Header1);
