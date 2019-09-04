import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import "./navbar.css"
import logo from "../../public/images/logo1.png"

class Navbar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hasScrolled: false,
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }

  handleScroll = event => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 50) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  }

  render() {
    return (
      <PrimaryNavWrap
        className={this.state.hasScrolled ? "Header HeaderScrolled" : "Header"}
        role="navigation"
      >
        <HeaderGroup>
          {/* HeaderGropup is a 6 column CSS Grid */}
          <Link activeClassName="active" exact to="/">
            {/* Logo */}
            <NavLogo
              src={logo}
              alt="Logo"
              style={{
                margin: "0 5px",
                width: "50px",
              }}
            />
          </Link>

          {/* EMPTY cell (column1)for the css-grid based header */}
          <div />
          {/* EMPTY cell (column1)for the css-grid based header */}

          <div class="dropdown">
            <NavDropdownButton as="a" href="/about">
              about
            </NavDropdownButton>
            <div class="dropdown-content">
              <StyledLink activeClassName="active" to="/staff">
                <NavLink>Staff Directory</NavLink>
              </StyledLink>
              <StyledLink activeClassName="active" to="/board">
                <NavLink>Board of Directors</NavLink>
              </StyledLink>
              <StyledLink activeClassName="active" to="/contact">
                <NavLink>Contact Us</NavLink>
              </StyledLink>
            </div>
          </div>

          <div class="dropdown">
            <NavDropdownButton as="a" href="/resources">
              resources
            </NavDropdownButton>
            <div class="dropdown-content">
              <StyledLink activeClassName="active" to="/busroutes">
                <NavLink>Bus Routes</NavLink>
              </StyledLink>
              <StyledLink activeClassName="active" to="/menus">
                <NavLink>Breakfast & Lunch Menus</NavLink>
              </StyledLink>
              <StyledLink activeClassName="active" to="/careerinfo">
                <NavLink>Student Career Info</NavLink>
              </StyledLink>
            </div>
          </div>

          <div class="dropdown">
            <NavDropdownButton as="a" href="/giving">
              giving
            </NavDropdownButton>
            <div class="dropdown-content">
              <StyledLink activeClassName="active" to="/giving">
                <NavLink>Giving</NavLink>
              </StyledLink>
            </div>
          </div>

          {/* Sign up Link */}

          <NavButton
            as="a"
            href="https://forms.gle/WXfrpsR5uhgCSHtR7"
            target="_blank"
          >
            Enroll Now
          </NavButton>
        </HeaderGroup>
      </PrimaryNavWrap>
    )
  }
}

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar

// const HeaderArea = styled.div`
//   position: fixed;
//   top: 0;
//   width: 100%;
//   overflow: hidden;
//   background: midnightblue;
//   padding: 10px 0;
//   z-index: 100;
//   transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

//   @media (max-width: 640px) {
//     padding: 20px 0;
//   }
// `

const PrimaryNavWrap = styled.nav`
  .Header {
    position: fixed;
    top: 0;
    width: 100%;
    overflow: hidden;
    background: midnightblue;
    padding: 10px 0;
    z-index: 100;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  .HeaderScrolled {
    background: rgba(0, 0, 0, 0.7);
    padding: 15px 0;
    backdrop-filter: blur(20px);
  }

  @media (max-width: 640px) {
    padding: 20px 0;
  }
`

const HeaderGroup = styled.div`
  max-width: 1300px;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 120px auto 85px 85px 85px 150px;
  grid-template-rows: 40px;

  padding: 1px 20px;
  margin: 0 auto;

  align-items: center;
  justify-items: center;

  @media (max-width: 640px) {
    grid-template-columns: auto auto 100px 90px 90px;
    grid-template-rows: 30px;
    padding: 5px 30px 5px 1px;
    margin: 0;
  }
`

const NavLogo = styled.img`
  width: 150px;
  height: 40px;
`

const NavLink = styled.text`
  font-size: 12px;
  font-weight: 700;
  color: white;
  text-transform: uppercase;

  &:hover {
    color: #fef234;
    transform: translateY(-4px);
  }
`

const NavButton = styled.div`
  padding: 10px 24px;
  font-size: 12px;
  text-transform: uppercase;
  background: transparent;
  color: white;
  border: 1px solid white;
  font-weight: 700;
  border-radius: 3px;
  outline: none;
  cursor: pointer;
  transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1);

  &:hover {
    background: white;
    color: midnightblue;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
    transform: translateY(-4px);
  }

  &:active {
    background: white;
    color: midnightblue;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
  }

  @media (max-width: 640px) {
    padding: 6px 18px;
    font-size: 10px;
  }
`
const NavDropdownButton = styled.button`
  display: inline-block;
  background: transparent;
  color: palevioletred;
  font-size: 0.8em;
  text-transform: uppercase;
  margin: 1.5em;
  padding: 0.45em 1.7em;
  transition: 0.7s cubic-bezier(0.2, 0.8, 0.2, 1);

  &:hover {
    background: rgba(0, 0, 0, 0.25);
    border-radius: 3px;
    color: #fef234;
    transform: translateY(-2px);
  }

  &:active {
    background: white;
    color: midnightblue;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
  }

  &:headerscrolled {
    padding: 0.5em 1.7em;
  }

  @media (max-width: 640px) {
    padding: 6px 18px;
    font-size: 10px;
  }
`

const StyledLink = styled(Link)`
  color: white;
  font-size: 12px;
  text-transform: uppercase;
  transition: 2s cubic-bezier(0.2, 0.8, 0.2, 1);

  &:hover {
    transform: translateY(-2px);
    color: #fef234;
  }

  @media (max-width: 640px) {
    font-size: 12px;
  }
`
