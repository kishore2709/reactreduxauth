import React from "react";
import "../../style/navstyle.css";
import "../../../node_modules/font-awesome/css/font-awesome.min.css";

class Footer extends React.Component {
  render() {
    return (
      <footer
        className="footer"
        style={{
          position: "absolute",
          left: 0,
          bottom: 0,
          right: 0,
          width: "100%"
        }}
      >
        <div className="container">
          <div className="footer__top">
            <div className="footer__first">
              <div id="block-arb-contact" className="block block--contact-us">
                <h2 className="block__title">Contact Us</h2>

                <div className="block__content">
                  <p>
                    <a href="tel:8002424450">(800) 242-4450</a>  |  
                    <a href="mailto:helpline@arb.ca.gov">helpline@arb.ca.gov</a>
                     <br />
                    1001 I Street, Sacramento, CA 95814
                    <br />
                    P.O. Box 2815, Sacramento, CA 95812
                  </p>
                </div>
              </div>
            </div>
            <div className="footer__second">
              <ul className="social-media-links">
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

              <ul className="nav nav--footer">
                <li className="nav__item">
                  <a
                    href="https://www.arb.ca.gov/html/ada/ada.htm"
                    className="nav__link"
                  >
                    Accessibility
                  </a>
                </li>
                <li className="nav__item">
                  <a
                    href="carbis-privacy-conditions-use.html"
                    className="nav__link"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li className="nav__item">
                  <a
                    href="carbis-privacy-conditions-use.html"
                    className="nav__link"
                  >
                    Conditions of Use
                  </a>
                </li>
                <li className="nav__item">
                  <a
                    href="https://www.arb.ca.gov/capcoa/roster.htm"
                    title="Contact information for California&#039;s 35 air pollution control districts"
                    className="nav__link"
                  >
                    Local Air Districts
                  </a>
                </li>
                <li className="nav__item">
                  <a
                    href="https://registertovote.ca.gov/"
                    title="California online voter registration"
                    className="nav__link"
                  >
                    Register to Vote
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__bottom">
            <div className="footer__third">
              <div
                id="block-arb-info"
                className="block block--footer-resources-board"
              >
                <div className="block__content">
                  <p>
                    The Air Resources Board is one of six boards, departments,
                    and offices under the California Environmental Protection
                    Agency.
                  </p>

                  <ul className="nav nav--epa-navigation">
                    <li className="nav__item">
                      <a
                        href="http://www.calepa.ca.gov/"
                        title="California Envronmental Protection Agency"
                        className="nav__link"
                      >
                        CalEPA
                      </a>
                    </li>
                    <li className="nav__item">
                      <a
                        href="http://www.calrecycle.ca.gov/"
                        className="nav__link"
                      >
                        CalRecycle
                      </a>
                    </li>
                    <li className="nav__item">
                      <a href="http://www.cdpr.ca.gov/" className="nav__link">
                        DPR
                      </a>
                    </li>
                    <li className="nav__item">
                      <a href="http://www.dtsc.ca.gov/" className="nav__link">
                        DTSC
                      </a>
                    </li>
                    <li className="nav__item">
                      <a href="https://oehha.ca.gov/" className="nav__link">
                        OEHHA
                      </a>
                    </li>
                    <li className="nav__item">
                      <a
                        href="https://www.waterboards.ca.gov/"
                        className="nav__link"
                      >
                        SWRCB
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="footer__fourth">
              <p>Copyright &copy; 2019 State of California</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
export default Footer;
