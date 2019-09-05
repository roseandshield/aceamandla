import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

import PageHeader from "../components/pageheader"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <PageHeader
      image={require("../../static/images/ace_pic3.jpg")}
      maintext="About Ace Amandla"
      subtext="Chicago's premier charter high school in STEM"
    />

    <div className={"container"}>
      <div className={"targets"}>
        <div className={"title"}>
          <h2>About Ace Amandla</h2>
          <SubText>
            ACE Technical Charter High School was founded in 2004 by Chicagoland
            Architecture, Construction and Engineering industry leaders
            committed increasing the number of urban, low income, minority and
            female youth who pursue education and careers in the architecture,
            construction and engineering professions. <br /> <br />
            Since its inception, students have gained professional exposure
            through partnerships with a number of organizations including ACE
            Mentors. ACE Tech graduates have successfully applied and been
            accepted into apprenticeships in the International Brotherhood of
            Electrical Workers (IBEW), Carpenter’s and the Plumber’s
            Apprenticeship programs as well other labor unions. Students are
            working in architectural, construction as well as other firms
            throughout the city including: the University of Chicago, FH Paschen
            and the Ford Motor Company. Some have become construction business
            owners in the City of Chicago. Amandla Charter School was founded in
            2008 to prepare Chicago’s students for college and beyond. Amandla
            in the Nguni languages means "power" and was used as a rallying cry
            during the resistance against apartheid in South Africa. <br />{" "}
            <br />
            Amandla Charter School’s founders chose it as the school’s name so
            as to have a constant reminder of the power and importance of a good
            education. Amandla began with 5th graders and graduated its first
            high school class in 2016, sending more than 90% of those graduates
            to college. In July 2019, ACE Technical Charter High School and
            Amandla Charter School merged to form ACE Amandla Charter High
            School. ACE Amandla Charter High School stands apart from other high
            schools in Chicago in its vision, focus and mission. At ACE Amandla,
            students are exposed to hands-on, project-based learning in the
            classroom, as well as given opportunities for work experience
            through internship opportunities. Whether a student is plotting a
            course directly into an apprenticeable trade or planning on
            attending a four-year college, ACE Amandla will prepare them with a
            strong foundation.
          </SubText>
        </div>

        <div className={"title"}>
          <h2>Vision Statement</h2>
          <SubText>
            ACE Amandla Charter High School strives to be an inclusive community
            that prepares students for rewarding careers in architecture,
            construction, and engineering.
          </SubText>
        </div>

        <div className={"title"}>
          <h2>Mission Statement</h2>
          <SubText>
            ACE Amandla Charter High School seeks to prepare students
            academically and socially with the skills needed for post-secondary
            success by providing high quality instruction, real world
            experiences, and comprehensive support in a professional
            environment.
          </SubText>
        </div>

        <div className={"title"}>
          <h2>Long Term Instructional Goals</h2>
          <SubText>
            Students at ACE Amandla are collaborative and critical problem
            solvers who actively participate in relevant project-based learning.
            We encourage students to be curious and reflective learners who are
            self-advocates and communicators.
          </SubText>
        </div>
      </div>
    </div>
  </Layout>
)

export default AboutPage

const SubText = styled.p`
  font-size: 16px;
  font-weight: 400;
  text-align: left;
  color: #121212;
`
