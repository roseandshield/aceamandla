import React from "react"
import styled from "styled-components"

const PageHeader = props => (
  <Container image={props.image}>
    <SectionGroup>
      <MainText>{props.maintext}</MainText>
      <SubText>{props.subtext}</SubText>
    </SectionGroup>
  </Container>
)

export default PageHeader

/* CSS Styles below */
const Container = styled.div`
  max-width: 1500px;
  height: 400px;
  background:   
    /* top, gradient */ linear-gradient(
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0.8)
    ),
    /* bottom, image */ url(${props => props.image});

  background-size: cover;
  background-position: center;
  position: relative;
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;

  @media (max-width: 640px) {
    padding: 90px 10px;

    height: 300px;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
  }
`
/* Change the "500px" column in grid-template-column to match the column of the content placement */
const SectionGroup = styled.div`
  display: grid;
  grid-template-areas: "leftcontent1 middlecontent1 rightcontent1" "leftcontent2 middlecontent2 rightcontent2" "leftcontent3 middlecontent3 rightcontent3" "leftcontent4 middlecontent4 rightcontent4";
  grid-template-columns: auto 600px auto;
  grid-template-rows: repeat(4, minmax(0px, auto));
  margin: 30px auto;
  max-width: 1000px;
  padding: 150px 50px;
  text-align: center;

  @media (max-width: 640px) {
    padding: 100px 80px;
    grid-template-columns: auto 300px auto;
  }
`

const MainText = styled.text`
  grid-area: middlecontent2;
  font-family: PT serif;
  margin: 10px;
  color: white;
  font-size: 50px;
  font-weight: 500;
  line-height: 1;
  text-transform: uppercase;
  opacity: 0;
  animation: HeroAnimation;
  animation-duration: 3s;
  animation-delay: 0.5s;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0.2, 0.8, 0.2, 1);

  @media (max-width: 640px) {
    font-size: 40px;
  }

  @keyframes HeroAnimation {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }

    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
`

const SubText = styled.text`
  grid-area: middlecontent3;
  font-family: Inter;
  margin: 10px 0 0 0;
  color: rgba(255, 255, 255, 0.8);
  font-size: 20px;
  line-height: 1.1;
  animation: HeroAnimation 3s 0.1s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
  opacity: 0;

  &:hover {
    transform: translateY(-1px);
    background: linear-gradient(90deg, white 0%, #a9b6ff 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: 640px) {
    font-size: 15px;
  }
`
