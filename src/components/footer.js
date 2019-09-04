import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql, Link } from "gatsby"

import logo from "../../static/images/logo1.png"
// import iconFacebook from "../../static/images/icon-facebook.svg"
import iconTwitter from "../../static/images/icon-twitter.svg"
import iconLinkedin from "../../static/images/icon-linkedin.svg"
import iconInstagram from "../../static/images/icon-instagram.svg"

const Footer = ({ data, children }) => (
  <Container>
    <FooterGroup>
      <div>
        <Link to="/" title={"Ace Amandla"}>
          <FooterLogo alt={"Logo"} src={logo} />
        </Link>
        <FooterMainText>Ace Amandla Charter High School</FooterMainText>
        <SubText>
          6820 S. Washtenaw Avenue, Chicago, IL 60629 | Phone 773.535.7150
        </SubText>
      </div>

      <div>
        {" "}
        <StyledLink to="/about" title={"About Us"}>
          <FooterMainText>About</FooterMainText>
        </StyledLink>
        <FooterList>
          <StyledLink to="/staff" title={"Staff Directory"}>
            Staff Directory
          </StyledLink>

          <StyledLink to="/board" title={"Board of Directors"}>
            Board of Directors
          </StyledLink>

          <StyledLink to="/contact" title={"Contact Us"}>
            Contact Us
          </StyledLink>
          <div />
          <div />
        </FooterList>
      </div>

      <div>
        {" "}
        <StyledLink to="/resources" title={"School Resources"}>
          <FooterMainText>Resources</FooterMainText>
        </StyledLink>
        <FooterList>
          <StyledLink to="/busroutes" title={"Bus Routes"}>
            Bus Routes
          </StyledLink>

          <StyledLink to="/menus" title={"Breakfast & Lunch Menus"}>
            Menus
          </StyledLink>

          <StyledLink to="/menus" title={"College/Student Career Information"}>
            Career Information
          </StyledLink>

          <div />
          <div />
        </FooterList>
      </div>

      <div>
        {" "}
        <StyledLink to="/giving" title={"How to Give"}>
          <FooterMainText>Giving</FooterMainText>
        </StyledLink>
        <FooterList>
          <StyledLink to="/giving" title={"Bus Routes"}>
            Giving Home
          </StyledLink>
          <div />
          <div />
          <div />
          <div />
        </FooterList>
      </div>

      <div>
        {" "}
        <FooterMainText>Find us on Social</FooterMainText>
        <FooterList>
          <StyledLink
            as="a"
            href="https://www.facebook.com/AmandlaCharterSchool1/"
            target={"_blank"}
            title={"Facebook"}
          >
            <StyledImg alt={"Facebook"} src={iconTwitter} />
          </StyledLink>
          <StyledLink
            as="a"
            href="https://www.instagram.com/aceamandlacharter/"
            target={"_blank"}
            title={"Instagram"}
          >
            <StyledImg alt={"Instagram"} src={iconInstagram} />
          </StyledLink>
          <StyledLink
            as="a"
            href="https://www.instagram.com/aceamandlacharter/"
            target={"_blank"}
            title={"LinkedIn"}
          >
            <StyledImg alt={"LinkedIn"} src={iconLinkedin} />
          </StyledLink>
          <div />
          <div />
        </FooterList>
      </div>

      {/* <LinkGroup>
         {data.allContentfulLink.edges.map(edge => (
        <a hef={edge.node.url}>{edge.node.title}</a>
      ))} 
      </LinkGroup> */}
    </FooterGroup>
    <CopyrightText>
      <p>
        Copyright {new Date().getFullYear()}, {` `}{" "}
        <FooterLink
          href="https://www.aceamandla.org"
          title={"Ace Amandla Home"}
        >
          Ace Amandla Charter School
        </FooterLink>
        . All rights reserved.
      </p>
    </CopyrightText>
  </Container>
)

export default Footer

/* CSS Container for Footer */
const Container = styled.div`
  max-width: 1500px;
  height: 300px;
  background-color: white;

  @media (max-width: 640px) {
    padding: 20px 10px;
    height: 200px;
  }
`

const FooterGroup = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 2fr 120px 120px 120px 120px;
  padding: 60px 150px;

  @media (max-width: 950px) {
    grid-template-columns: 2fr;
    grid-gap: 10px;
    margin: 15px 20px;
  }

  @media (max-width: 640px) {
    padding: 10px 20px;
    margin: 15px 20px;
  }
`

const FooterList = styled.div`
  display: grid;
  grid-gap: 8px;
  grid-template-columns: 1;
  grid-template-rows: repeat(5, auto);

  @media (max-width: 950px) {
    grid-gap: 6px;
  }

  @media (max-width: 640px) {
    grid-gap: 5px;
  }
`

const StyledLink = styled(Link)`
  color: #121212;
  font-size: 14px;

  &:hover {
    transform: translateY(-1px);
    background: midnightblue;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: 640px) {
    font-size: 12px;
  }
`

const StyledImg = styled.img`
  color: #121212;

  &:hover {
    transform: translateY(-1px);
  }
`

const FooterLink = styled.a`
  color: #121212;

  &:hover {
    transform: translateY(-1px);
    background: midnightblue;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  @media (max-width: 640px) {
    font-size: 13px;
  }

  @media (max-width: 720px) {
    font-size: 15px;
  }
`

const FooterMainText = styled.p`
  font-family: PT serif;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 19px;
  color: midnightblue;
  max-width: 500px;
  padding-top: 15px;
  padding-bottom: 10px;

  &:hover {
    transform: translateY(-1px);
    background: linear-gradient(90deg, midnightblue 0%, yellow 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: 720px) {
    font-size: 16px;
  }

  @media (max-width: 640px) {
    font-size: 14px;
  }
`

const SubText = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: #121212;
  max-width: 300px;
  padding-top: 15px;

  &:hover {
    transform: translateY(-1.5px);
    background: midnightblue;
    font-weight: 550;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: 720px) {
    font-size: 14px;
  }

  @media (max-width: 640px) {
    font-size: 12px;
  }
`

const FooterLogo = styled.img`
  width: 100px;
  height: 100px;
  justify-items: center;
  transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1);

  &:hover {
    transform: translateY(-10px);
  }
`

const CopyrightText = styled.div`
  color: #121212;
  display: grid;
  justify-content: center;
  margin: auto;
  margin-top: 10px;
  padding-bottom: 20px;
  max-width: 600px;
  font-size: 14px;

  @media (max-width: 640px) {
    font-size: 12px;
    margin: 10px 10px 10px 10px;
  }
`
