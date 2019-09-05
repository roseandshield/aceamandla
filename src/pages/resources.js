import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import PageHeader from "../components/pageheader"

const ResourcesPage = () => (
  <Layout>
    <SEO title="Resources" />
    <PageHeader
      image={require("../../static/images/ace_pic3.jpg")}
      maintext="Resources"
      subtext="Ace Amandla Resources"
    />

    <div className={"container"}>
      <div className={"targets"}>
        <div className={"title"}>
          <h2>(Coming Soon)</h2>
        </div>
      </div>
    </div>
  </Layout>
)

export default ResourcesPage
