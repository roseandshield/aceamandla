import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import PageHeader from "../components/pageheader"

import informationImage from "../../static/images/Information-document.svg"

import ProductivityImage from "../../static/images/Increase-Productivity.svg"

const Menus = () => (
  <Layout>
    <SEO title="Menus" />
    <PageHeader
      image={require("../../static/images/ace_pic3.jpg")}
      maintext="Breakfast & Lunch Menus"
      subtext="Ace Amandla Breakfast & Lunch Menus"
    />

    <div className={"container"}>
      <div className={"targets"}>
        <div className={"title"}>
          <h2>Breakfast & Lunch Menus</h2>
        </div>

        <div className={"row"}>
          <div className={"col-6"}>
            <div className={"item"}>
              <img alt={"Information"} src={informationImage} />
              <h3>September 2019 Breakfast Menu</h3>
              <iframe
                src="https://drive.google.com/file/d/0BydpsQIFTSd0cjBmTm5IdUd2RVN1elgwaDRKbjVaNTJUaXU4/preview"
                width="640"
                height="480"
                title="Breakfast Menus"
              />
            </div>
          </div>

          <div className={"col-6"}>
            <div className={"item"} />
          </div>
        </div>

        <div className={"row"}>
          <div className={"col-6"}>
            <div className={"item"}>
              <img alt={"Productivity"} src={ProductivityImage} />
              <h3>Fall 2019 Lunch Menu</h3>
              <iframe
                src="https://drive.google.com/file/d/0BydpsQIFTSd0aXppTUVYQkFUUDZYM1V4Z1U5ekhVUExLdzJN/preview"
                width="640"
                height="480"
                title="Lunch Menus"
              />
            </div>
          </div>

          <div className={"col-6"}>
            <div className={"item"} />
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default Menus
