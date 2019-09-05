import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"

import PageHeader from "../components/pageheader"

const Staff = () => (
  <Layout>
    <SEO title="About" />
    <PageHeader
      image={require("../../static/images/ace_pic3.jpg")}
      maintext="Staff Directory"
      subtext="Ace Amandla Charter High School"
    />

    <div className={"container"}>
      <div className={"targets"}>
        <div className={"title"}>
          <h2>Staff Directory List</h2>
          <h5>2019 - 2020 School Year</h5>
        </div>
      </div>
    </div>
    <IframeContainer>
      <div />
      <iframe
        src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTaOqatDeq0mTU9XVNpl7DxC4f0EMl84C-6cS6XD2XWsRs05HcWE7RKZ08YDm6cg-Hw3WmzIqwz-ZL2/pubhtml?gid=1673295213&amp;single=true&amp;widget=true&amp;headers=false"
        width="600"
        height="700"
        title="Ace Amandla Staff Directory"
      />
      <div />
    </IframeContainer>
  </Layout>
)

export default Staff

const IframeContainer = styled.div`
  display: grid;
  grid-template-columns: 150px auto 150px;
  justify-content: center;
  align-content: center;
  padding-top: 5%;
  padding-bottom: 20%;
`
