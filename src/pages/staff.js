import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import PageHeader from "../components/pageheader"

import informationImage from "../../static/images/Information-document.svg"
import eventImage from "../../static/images/Event-managment.svg"
import ProductivityImage from "../../static/images/Increase-Productivity.svg"
import happinessImage from "../../static/images/Make-happiness.svg"

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
          <h2>COMING SOON - Staff Directory List</h2>
          <h5>2019 - 2020 School Year</h5>
        </div>

        <div className={"row"}>
          <div className={"col-6"}>
            <div className={"item"}>
              <h3>Joan Archie, Board Chairman</h3>
              <p>
                Executive Director <br />
                UChicago Medicine
              </p>
            </div>
          </div>

          <div className={"col-6"}>
            <div className={"item"}>
              <h3>Mark Jolicoeur, Vice Chairman</h3>
              <p>
                Principal <br />
                Perkins + Will
              </p>
            </div>
          </div>
        </div>

        <div className={"row"}>
          <div className={"col-6"}>
            <div className={"item"}>
              <h3>A. Jason Bonaparte, Director</h3>
              <p>
                Executive Vice President <br />
                B3 Integrated Solutions
              </p>
            </div>
          </div>

          <div className={"col-6"}>
            <div className={"item"}>
              <h3>Andy Burkhart, Director</h3>
              <p>
                National Service Manager
                <br /> Armstrong Fluid Technology
              </p>
            </div>
          </div>
        </div>

        <div className={"row"}>
          <div className={"col-6"}>
            <div className={"item"}>
              <h3>Mark Eames, Director </h3>
              <p>
                Vice President
                <br />
                Clark Construction Group
              </p>
            </div>
          </div>

          <div className={"col-6"}>
            <div className={"item"}>
              <h3>Jonathan Jones</h3>
              <p>
                Business Representative/Organizer <br />
                Carpenter’s Local 10
              </p>
            </div>
          </div>
        </div>

        <div className={"row"}>
          <div className={"col-6"}>
            <div className={"item"}>
              <h3>Maurice King, Director</h3>
              <p>
                Vice President <br />
                IBEW/NECA
              </p>
            </div>
          </div>

          <div className={"col-6"}>
            <div className={"item"}>
              <h3>Edward McKinnie, Director</h3>
              <p>
                President
                <br /> Black Contractors United
              </p>
            </div>
          </div>
        </div>

        <div className={"row"}>
          <div className={"col-6"}>
            <div className={"item"}>
              <h3>Anthony Tysinger, Director</h3>
              <p>
                Project Executive <br />
                Gilbane Building Company
              </p>
            </div>
          </div>

          <div className={"col-6"}>
            <div className={"item"}>
              <h3>Alvin Boutte, Director</h3>
              <p>
                CEO <br />
                Bronzeville Academy Charter School
              </p>
            </div>
          </div>
        </div>

        <div className={"title"}>
          <h2>Advisory Members</h2>
        </div>

        <div className={"row"}>
          <div className={"col-6"}>
            <div className={"item"}>
              <h3>Sarah Brennan</h3>
              <p>
                Operations Specialist
                <br /> McMaster-Carr
              </p>
            </div>
          </div>

          <div className={"col-6"}>
            <div className={"item"}>
              <h3>Joseph Scarpelli</h3>
              <p>
                Executive Vice President <br /> F.H. Paschen, S.N. Nielsen
              </p>
            </div>
          </div>
        </div>

        <div className={"row"}>
          <div className={"col-6"}>
            <div className={"item"}>
              <h3>Todd Pressley</h3>
              <p>
                Vice President
                <br /> Ujamaa Construction
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default Staff
