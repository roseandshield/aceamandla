import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

import PageHeader from "../components/pageheader"

import informationImage from "../../static/images/Information-document.svg"
import eventImage from "../../static/images/Event-managment.svg"
import ProductivityImage from "../../static/images/Increase-Productivity.svg"
import happinessImage from "../../static/images/Make-happiness.svg"

const CareerInfo = () => (
  <Layout>
    <SEO title="Career Information" />
    <PageHeader
      image={require("../../static/images/ace_pic3.jpg")}
      maintext="College/Student Career Information"
      subtext="How to give and support the Ace Amandla students and staff."
    />

    <div className={"container"}>
      <div className={"targets"}>
        <div className={"title"}>
          <h4 align="left">
            The ACE Amandla College and Career Office is a resource to assist
            students and parents with making well informed decisions about
            students' post high school plans. The goal is to help students find
            the best post-secondary placement that fits their academic,
            professional, social and emotional needs. <br />
            <br />
            At ACE Amandla students have the unique opportunity to learn about
            and experience careers in architecture, construction and engineering
            through career fairs, field trips, internships and more. Our staff
            provides ongoing support with college and career exploration,
            college, apprenticeship and scholarship applications, and the
            financial aid process.
          </h4>{" "}
          <br />
          <SubText align="left">
            Below are links to help in this process. Please call Ms. Beazley at
            224-908-0622 or come to room 205 if you have any questions at all!
          </SubText>
        </div>

        <div className={"title"}>
          <h4 align="left">
            College Search
            <br />
          </h4>{" "}
          <br />
          <SubText>
            You can use your Naviance account to research college, scholarship,
            and career information. Go to <br />
            <StyledLink
              as="a"
              href="https://student.naviance.com/aceachs"
              target={"_blank"}
              title={"Naviance"}
            >
              Naviance
            </StyledLink>{" "}
            to login
          </SubText>
        </div>

        <div className={"row"}>
          <div className={"col-6"}>
            <div className={"item"}>
              <img alt={"Information"} src={ProductivityImage} />
              <h2>Other helpful websites for College Research:</h2>
              <p>
                <StyledLink
                  as="a"
                  href="https://bigfuture.collegeboard.org/"
                  target={"_blank"}
                  title={"College Board Big Future"}
                >
                  College Board Big Future
                </StyledLink>
                <br />
                <StyledLink
                  as="a"
                  href="https://www.collegegreenlight.com/"
                  target={"_blank"}
                  title={"College Greenlight"}
                >
                  College Greenlight
                </StyledLink>
                <br />
                <StyledLink
                  as="a"
                  href="https://collegescorecard.ed.gov/"
                  target={"_blank"}
                  title={"US Department of Education College Scorecard"}
                >
                  US Department of Education College Scorecard
                </StyledLink>
              </p>
            </div>
          </div>

          <div className={"col-6"}>
            <div className={"item"}>
              <img alt={"Event"} src={eventImage} />
              <h2>To apply to multiple colleges at one time, check out:</h2>
              <p>
                <StyledLink
                  as="a"
                  href="https://www.schurzhs.org/apps/pages/www.commonapp.org"
                  target={"_blank"}
                  title={"Common Application"}
                >
                  Common Application
                </StyledLink>
                <br />
                <StyledLink
                  as="a"
                  href="https://commonblackcollegeapp.com/"
                  target={"_blank"}
                  title={"Common Black College Application"}
                >
                  Common Black College Application
                </StyledLink>
                <br />
                <StyledLink
                  as="a"
                  href="https://www.schurzhs.org/apps/pages/null"
                  target={"_blank"}
                  title={"Coalition Application"}
                >
                  Coalition Application
                </StyledLink>
              </p>
            </div>
          </div>
        </div>

        <div className={"row"}>
          <div className={"col-6"}>
            <div className={"item"}>
              <img alt={"Productivity"} src={informationImage} />
              <h2>Apprenticeships</h2>
              <SubText>
                Explore
                <StyledLink
                  as="a"
                  href="http://www.cisco.org/apprenticeship/"
                  target={"_blank"}
                  title={"Apprenticeships"}
                >
                  http://www.cisco.org/apprenticeship/
                </StyledLink>{" "}
                to learn more about apprenticeship programs in the Chicagoland
                area.
              </SubText>
            </div>
          </div>

          <div className={"col-6"}>
            <div className={"item"}>
              <img alt={"Happiness"} src={happinessImage} />
              <h2>Financial Aid</h2>
              <SubText>
                To apply for federal student aid, such as federal grants,
                work-study, and loans, you need to complete the Free Application
                for Federal Student Aid (FAFSA) on their website:{" "}
                <StyledLink
                  as="a"
                  href="https://collegescorecard.ed.gov/"
                  target={"_blank"}
                  title={"FAFSA"}
                >
                  FAFSA
                </StyledLink>{" "}
                <br />
                As of 2021 this will be a state of Illinois graduation
                requirement. For students to get the most aid possible it is
                important to apply early. Each year FAFSA opens October 1. In
                addition to the FAFSA this website has resources about different
                types of aid, budgeting, and preparing core college.
              </SubText>
            </div>
          </div>
        </div>

        <div className={"row"}>
          <div className={"col-6"}>
            <div className={"item"}>
              <img alt={"Information"} src={ProductivityImage} />
              <h2>Scholarships</h2>
              <SubText>
                <bold>
                  The most important thing you can do to earn scholarships is to
                  maintain a high GPA and improve your SAT score.{" "}
                </bold>{" "}
                <br />
                You can also check out these websites for the latest scholarship
                information:
                <br />
                <StyledLink
                  as="a"
                  href="https://www.fastweb.com/"
                  target={"_blank"}
                  title={"FastWeb"}
                >
                  FastWeb
                </StyledLink>
                <br />
                <StyledLink
                  as="a"
                  href="https://www.collegegreenlight.com/"
                  target={"_blank"}
                  title={"College Greenlight"}
                >
                  College Greenlight
                </StyledLink>
                <br />
                <StyledLink
                  as="a"
                  href="https://www.cappex.com/scholarships"
                  target={"_blank"}
                  title={"Cappex"}
                >
                  Cappex
                </StyledLink>
                <br />
                <StyledLink
                  as="a"
                  href="https://www.raise.me/join/amandla-charter-school"
                  target={"_blank"}
                  title={"Raise Me"}
                >
                  Raise Me
                </StyledLink>
                <br />
                <StyledLink
                  as="a"
                  href="https://www.hsf.net/home"
                  target={"_blank"}
                  title={"Hispanic Scholarship Fund"}
                >
                  Hispanic Scholarship Fund
                </StyledLink>
              </SubText>
            </div>
          </div>

          <div className={"col-6"}>
            <div className={"item"}>
              <img alt={"Event"} src={eventImage} />
              <h2>Career Search</h2>
              <SubText>
                Throughout your four years at ACE Amandla you will use Naviance
                to find your strengths, search for career clusters, and set
                career goals. <br />
                Go to
                <StyledLink
                  as="a"
                  href="https://student.naviance.com/aceachs"
                  target={"_blank"}
                  title={"Naviance"}
                >
                  https://student.naviance.com/aceachs
                </StyledLink>
                to login. <br />
                Another great resource for career search:
                <StyledLink
                  as="a"
                  href="https://www.mynextmove.org/"
                  target={"_blank"}
                  title={"My Next Move"}
                >
                  https://www.mynextmove.org/
                </StyledLink>
              </SubText>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default CareerInfo

const SubText = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: #121212;
`

const StyledLink = styled(Link)`
  color: midnightblue;
  font-size: 14px;

  &:hover {
    transform: translateY(-1.5px);
    background: midnightblue;
    font-weight: 550;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: 640px) {
    font-size: 12px;
  }
`
