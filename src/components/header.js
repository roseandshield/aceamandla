import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../../static/images/logo.png"

const Header = ({ siteTitle }) => (
  <header>
    <div className={"container"}>
      <div className={"top-menu"}>
        <div className={"logo"}>
          <Link to="/" title={"AceAmandla"}>
            <img alt={"Logo"} src={logo} />
          </Link>
        </div>

        <div className={"get-started"}>
          <a href={"https://app.histaff.io"}>Enroll Today</a>
        </div>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
