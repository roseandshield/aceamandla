import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import PageHeader from "../components/pageheader"

import informationImage from "../../static/images/Information-document.svg"
import eventImage from "../../static/images/Event-managment.svg"
import ProductivityImage from "../../static/images/Increase-Productivity.svg"
import happinessImage from "../../static/images/Make-happiness.svg"

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
          <h2>We would love to hear from you!</h2>
        </div>

        <div className={"row"}>
          <div className={"col-6"}>
            <div className={"item"}>
              <img alt={"Information"} src={informationImage} />
              <h3>Contact Us</h3>
              <p>
                You can reach us by phone at 773-535-7150 on weekdays (except
                school holidays) between 7:30 AM and 4:30 PM or by email at
                anytime by sending a message to info@amandlacharterschool.org.
              </p>
            </div>
          </div>

          <div className={"col-6"}>
            <div className={"item"}>
              <img alt={"Event"} src={eventImage} />
              <h3>
                You are also welcome to send us written correspondence or visit
                us at:
              </h3>
              <p>
                ACE Amandla Charter High School <br /> 6820 South Washtenaw
                Avenue Chicago, IL 60629
              </p>
            </div>
          </div>
        </div>

        <div className={"row"}>
          <div className={"col-6"}>
            <div className={"item"}>
              <img alt={"Productivity"} src={ProductivityImage} />
              <h3>Parking</h3>
              <p>
                Our main entrance is located on Washtenaw. The parking lot is
                accessible from South Washtenaw Avenue and West 69th Street.
                Click the map below for driving directions.
              </p>
            </div>
          </div>

          <div className={"col-6"}>
            <div className={"item"}>
              <img alt={"Meeting"} src={eventImage} />
              <h3>Schedule a Meeting</h3>
              <p>
                Please call or email in advance if you want to schedule a
                meeting with a teacher or staff member. Individual email
                addresses for staff members can be found in our Directory.
              </p>
            </div>
          </div>
        </div>

        <div className={"row"}>
          <div className={"col-6"}>
            <div className={"item"}>
              <img alt={"Productivity"} src={ProductivityImage} />
              <h3>Map</h3>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11902.924040731868!2d-87.691108!3d41.76945700000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2fd0e672ceb9%3A0xd6592f96f7a8f938!2s6820%20S%20Washtenaw%20Ave%2C%20Chicago%2C%20IL%2060629!5e0!3m2!1sen!2sus!4v1567548046943!5m2!1sen!2sus"
                width="600"
                height="450"
                frameborder="0"
                allowfullscreen=""
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

export default AboutPage
