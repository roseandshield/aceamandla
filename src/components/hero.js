import React from "react"
import styled from "styled-components"

const Hero = props => (
  <HeroContainer image={props.image}>
    <HeroGroup>
      <HeroTagText>{props.tag}</HeroTagText>
      <HeroMainText>{props.maintext}</HeroMainText>
      <HeroSubText>{props.subtext}</HeroSubText>
      <HeroButton
        as="a"
        href="https://forms.gle/WXfrpsR5uhgCSHtR7"
        target="_blank"
      >
        {props.buttontext}
      </HeroButton>
    </HeroGroup>
  </HeroContainer>
)

export default Hero

/* CSS Styles below */
const HeroContainer = styled.div`
  max-width: 1500px;
  height: 720px;
  background:   
    /* top, gradient */ linear-gradient(
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0.8)
    ),
    /* bottom, image */ url(${props => props.image});

  background-size: cover;
  background-position: center;
  position: relative;
  z-index: 1;
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;

  @media (max-width: 640px) {
    padding: 90px 10px;
    height: 400px;
  }
`
/* Change the "500px" column in grid-template-column to match the column of the content placement */
const HeroGroup = styled.div`
  display: grid;
  grid-template-areas: "leftcontent1 middlecontent1 rightcontent1" "leftcontent2 middlecontent2 rightcontent2" "leftcontent3 middlecontent3 rightcontent3" "leftcontent4 middlecontent4 rightcontent4";
  grid-template-columns: auto 500px auto;
  grid-template-rows: repeat(4, minmax(0px, auto));
  margin: 30px auto;
  max-width: 1000px;
  padding: 150px 50px;
  text-align: left;

  @media (max-width: 640px) {
    padding: 100px 80px;
  }
`

const HeroTagText = styled.button`
  grid-area: middlecontent1;
  background: transparent;
  justify-self: left;
  border-radius: 3px;
  font-size: 16px;
  color: white;
  margin-bottom: 10px;
  padding: 6px 15px;

  &:hover {
    transform: translateY(-1px);
    background: linear-gradient(90deg, white 0%, #a9b6ff 50%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`

const HeroMainText = styled.text`
  font-family: PT serif;
  font-size: 70px;
  font-weight: 700;
  grid-area: middlecontent2;
  margin: 10;
  color: white;

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

const HeroSubText = styled.text`
  grid-area: middlecontent3;
  margin: 10px 0 0 0;
  color: rgba(255, 255, 255, 0.8);
  font-size: 25px;
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

const HeroButton = styled.button`
  grid-area: middlecontent4;
  justify-self: left;
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
