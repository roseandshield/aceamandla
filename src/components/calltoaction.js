import React from "react"
import styled from "styled-components"

const CallToAction = props => (
  <Container>
    <SectionGroup>
      <MainText>{props.maintext}</MainText>
      <SubText>{props.subtext}</SubText>
      <SectionButton
        as="a"
        href="https://forms.gle/WXfrpsR5uhgCSHtR7"
        target="_blank"
      >
        {props.buttontext}
      </SectionButton>
    </SectionGroup>
  </Container>
)

export default CallToAction

/* CSS Styles below */
const Container = styled.div`
  max-width: 1500px;
  height: 300px;
  background-color: #2e319c;

  border-top-left-radius: 40px;
  border-top-right-radius: 40px;

  @media (max-width: 640px) {
    padding: 60px 10px;
    height: 200px;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
  }
`
/* Change the "500px" column in grid-template-column to match the column of the content placement */
const SectionGroup = styled.div`
  display: grid;
  grid-template-areas: "leftcontent1 middlecontent1 rightcontent1" "leftcontent2 middlecontent2 rightcontent2" "leftcontent3 middlecontent3 rightcontent3" "leftcontent4 middlecontent4 rightcontent4";
  grid-template-columns: auto 700px auto;
  grid-template-rows: repeat(4, minmax(0px, auto));
  margin: 30px auto;
  max-width: 1200px;
  padding: 70px 50px 40px;
  text-align: center;

  @media (max-width: 820px) {
    grid-template-columns: auto 500px auto;
    padding: 60px 20px 20px 20px;
  }

  @media (max-width: 640px) {
    grid-template-columns: auto 280px auto;
    padding: 2px 30px 20px 30px;
  }
`

const MainText = styled.text`
  grid-area: middlecontent2;
  margin: 10;
  font-family: PT serif;
  color: white;
  font-size: 40px;
  font-weight: 500;
  line-height: 1;
  text-transform: uppercase;
  opacity: 0;
  animation: HeroAnimation;
  animation-duration: 3s;
  animation-delay: 0.5s;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0.2, 0.8, 0.2, 1);

  @media (max-width: 820px) {
    font-size: 30px;
  }

  @media (max-width: 640px) {
    font-size: 25px;
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

const SectionButton = styled.button`
  grid-area: middlecontent4;
  justify-self: center;
  padding: 15px 40px;
  margin-top: 20px;
  font-size: 15px;
  text-transform: uppercase;
  background: #fef234;
  color: midnightblue;
  border: none;
  font-weight: 700;
  border-radius: 3px;
  outline: none;
  cursor: pointer;
  transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1);

  &:hover {
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    transform: translateY(-3px);
    background: transparent;
    color: white;
    border-width: 1px;
    border-style: solid;
    border-color: #fef234;
  }
  @media (max-width: 720px) {
  }
`
