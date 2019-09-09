/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

// import Header from "./header"
import Navbar from "./navbar"
import Footer from "./footer"
import CallToAction from "./calltoaction"

import "../../static/styles/main.scss"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            menuLinks {
              name
              link
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Navbar
          menuLinks={data.site.siteMetadata.menuLinks}
          siteTitle={data.site.siteMetadata.title}
        />
        {/* <Header siteTitle={data.site.siteMetadata.title} /> */}

        <main>{children}</main>
        <CallToAction
          maintext="Enroll Your Student Today"
          subtext="Chicago's premier charter high school in STEM"
          buttontext="Enroll Now"
        />
        <Footer />
        {/* <footer>
          <div className={"container"}>
            <div className={"row"}>
              <div className={"col-5"}>
                <div className={"widget__item"}>
                  <div className={"logo"}>
                    <Link to="/" title={"Ace Amandla"}>
                      <FooterLogo alt={"Logo"} src={logo} />
                    </Link>
                  </div>

                  <div className={"about"}>
                    <p>Ace Amandla Charter High School</p>
                  </div>
                </div>
              </div>

              <div className={"col-2"}>
                <div className={"widget__item"}>
                  <ul className={"links"}>
                    <h4>HiStaff</h4>
                    <ul>
                      <li>
                        <Link to="/about" title={"About Us"}>
                          About
                        </Link>
                      </li>
                      <li>
                        <a href={"https://histaff.io/blog"}>Blog</a>
                      </li>
                      <li>
                        <a
                          className={"links__special"}
                          href={"https://feedback.histaff.io/"}
                          target={"_blank"}
                          title={
                            "We look forward to receiving your great feedback"
                          }
                        >
                          Feedback
                        </a>
                      </li>
                    </ul>
                  </ul>
                </div>
              </div>

              <div className={"col-2"}>
                <div className={"widget__item"}>
                  <div className={"links"}>
                    <h4>Support</h4>
                    <ul>
                      <li>
                        <Link to="/contact" title={"Contact Us"}>
                          Contact
                        </Link>
                      </li>
                      <li>
                        <Link to="/privacy" title={"Privacy Policy"}>
                          Privacy
                        </Link>
                      </li>
                      <li>
                        <Link to="/terms" title={"Terms Of Use"}>
                          Terms Of Use
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className={"col-3"}>
                <div className={"widget__item"}>
                  <div className={"social"}>
                    <a
                      href="https://twitter.com/histaffio"
                      target={"_blank"}
                      title={"Twitter"}
                    >
                      <img alt={"Twitter"} src={iconTwitter} />
                    </a>
                    <a
                      href="https://www.linkedin.com/company/histaff/"
                      target={"_blank"}
                      title={"LinkedIn"}
                    >
                      <img alt={"LinkedIn"} src={iconLinkedin} />
                    </a>
                    <a
                      href="https://github.com/histaff"
                      target={"_blank"}
                      title={"GitHub"}
                    >
                      <img alt={"GitHub"} src={iconGitHub} />
                    </a>
                    <a
                      href="https://www.instagram.com/histaff.io/"
                      target={"_blank"}
                      title={"Instagram"}
                    >
                      <img alt={"Instagram"} src={iconInstagram} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer> */}
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
