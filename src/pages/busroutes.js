import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

import PageHeader from "../components/pageheader"

const BusRoutes = () => (
  <Layout>
    <SEO title="Bus Routes" />
    <PageHeader
      image={require("../../static/images/ace_pic3.jpg")}
      maintext="Bus Routes"
      subtext="How to give and support the Ace Amandla students and staff."
    />

    <div className={"container"}>
      <div className={"targets"}>
        <div className={"title"}>
          <h2>2019-2020 Bus Routes</h2>
          <SubText>Coming Soon</SubText>
        </div>
      </div>
    </div>
  </Layout>
)

export default BusRoutes

const SubText = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: #121212;
`
