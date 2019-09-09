import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Hero from "../components/hero"
// import InfiniteHorizontal from "../components/infinitehorizontal"
import featureImage from "../../static/images/ace_pic1.jpg"
import upcomingEvents from "../../static/images/ace_pic2.jpg"
import featureOne from "../../static/images/ace_pic3.jpg"

const IndexPage = () => (
  <Layout>
    <SEO title="Ace Amandla Charter High School" />
    <Hero
      image={require("../../static/images/ace_pic1.jpg")}
      tag="New"
      maintext="S.T.E.M. Education Redefined"
      subtext="Chicago's premier charter high school in S.T.E.M."
      buttontext="Enroll Today"
    />
    <div className={"container"}>
      <div className={"targets"}>
        <div className={"title"}>
          <h2>Mission and Vision</h2>
          <SubText>
            ACE Amandla Charter High School is an inclusive community that
            prepares students for rewarding careers in architecture,
            construction, and engineering. Our Vision rests upon Four Pillars:
            Professionalism for 21st Century Careers, Social Responsibility,
            Learning through Experience and Empathy, and Academic Preparedness
            for Postsecondary Success.
          </SubText>
        </div>
      </div>
    </div>

    <div className={"container"}>
      <div className={"targets"}>
        <div className={"title"}>
          <h2>Upcoming Events</h2>
          <SubText>
            Follow the Ace Amandla 2019 - 2020 academic school year events!
          </SubText>
        </div>
      </div>
    </div>

    {/* <InfiniteHorizontal colormain="black" color="white" /> */}

    <div className={"container"}>
      <div className={"features"}>
        <div className={"feature__item"}>
          <div className={"row"}>
            <div className={"col-6 first"}>
              <div className={"thumbnail"}>
                <Image alt={"Event"} src={upcomingEvents} />
              </div>
            </div>

            <div className={"col-6"}>
              <div className={"feature__content"}>
                <h2>Upcoming Events</h2>
                <p>Coming Soon</p>
              </div>
            </div>
          </div>
        </div>

        <div className={"feature__item"}>
          <div className={"row"}>
            <div className={"col-6"}>
              <div className={"feature__content"}>
                <h2>Gallery</h2>
                <p>Instagram integration coming soon!</p>
              </div>
            </div>

            <div className={"col-6 first"}>
              <div className={"thumbnail"}>
                <Image alt={"Board"} src={featureOne} />
              </div>
            </div>
          </div>
        </div>

        <div className={"feature__item"}>
          <div className={"row"}>
            <div className={"col-6 first"}>
              <div className={"thumbnail"}>
                <Image alt={"Feature"} src={featureImage} />
              </div>
            </div>

            <div className={"col-6"}>
              <div className={"feature__content"}>
                <h2>Professionalism for 21st Century Careers</h2>
                <p>
                  ACE careers, and success beyond high school, demand many
                  technical and professional skills that are broadly applicable
                  across sectors. Our students embody this professional skill
                  set with their clear communication, ability to collaborate,
                  attention to detail, research and strategic planning, and
                  critical problem solving that will ensure their success in an
                  ever-changing economy.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={"feature__item"}>
          <div className={"row"}>
            <div className={"col-6"}>
              <div className={"feature__content"}>
                <h2>Learning through Experience and Empathy</h2>
                <p>
                  The world is diverse and full of new and exciting experiences.
                  Students’ exposure to these experiences inform their decisions
                  and the lens with which they approach the world. Our students
                  have the resilience, discipline, self-awareness, and
                  self-advocacy to continually redefine what is possible for
                  themselves and rise to surpass their own expectations.
                </p>
              </div>
            </div>

            <div className={"col-6 first"}>
              <div className={"thumbnail"}>
                <Image alt={"Team"} src={featureOne} />
              </div>
            </div>
          </div>
        </div>

        <div className={"feature__item"}>
          <div className={"row"}>
            <div className={"col-6 first"}>
              <div className={"thumbnail"}>
                <Image alt={"Users"} src={upcomingEvents} />
              </div>
            </div>

            <div className={"col-6"}>
              <div className={"feature__content"}>
                <h2>Academic Preparedness for Postsecondary Success</h2>
                <p>
                  Our students are fully prepared for the further learning
                  opportunities they choose to pursue after high school. Whether
                  their skills take them to and through college, into ACE
                  careers, or down a different path for postsecondary success,
                  their academic foundations open doors and broaden their
                  options.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage

const Image = styled.img`
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  cursor: pointer;

  &:hover {
    transform: translateY(-20px);
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5);
  }
`
const SubText = styled.p`
  font-size: 16px;
  font-weight: 400;
  text-align: left;
  color: #121212;
`
