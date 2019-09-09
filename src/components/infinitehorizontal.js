import React from "react"
import styled, { keyframes } from "styled-components"

import featureImage from "../../static/images/ace_pic1.jpg"
import upcomingEvents from "../../static/images/ace_pic2.jpg"
import featureOne from "../../static/images/ace_pic3.jpg"

const InfiniteHorizontal = props => (
  <SectionArea colormain={props.color}>
    <Container color={props.color}>
      <Photobanner>
        <ImageFirst class="first" alt={"Board"} src={featureOne} />
        <Image alt={"Board"} src={featureImage} />
        <Image alt={"Board"} src={upcomingEvents} />
        <Image alt={"Board"} src={featureOne} />
        <Image alt={"Board"} src={featureImage} />
        <Image alt={"Board"} src={upcomingEvents} />
      </Photobanner>
    </Container>
  </SectionArea>
)

export default InfiniteHorizontal

/* CSS Styles below */

const SectionArea = styled.div`
  margin: 0;
  padding: 0;
  background: ${props => props.color};
`

const Container = styled.div`
  width: 1500px;
  overflow: hidden;
  margin: 60px auto;
  background: ${props => props.color};
`

const Photobanner = styled.div`
  height: 350px;
  width: 3550px;
  margin-top: 65px;
  margin-bottom: 40px;
`

const ImageFirst = styled.img`
  height: 250px;
  width: 355px;
  border-radius: 20px;
  margin-right: 7px;
  background:   
    /* top, gradient */ linear-gradient(
    rgba(0, 0, 0, 0.1),
    rgba(0, 0, 0, 0.8)
  );
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  cursor: pointer;
  animation: ${moveimages} 30s linear infinite;

  &:hover {
    transform: translateY(-20px);
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5);
  }
`
// Create the keyframes
const moveimages = keyframes`

from margin-left: 0px
{

}
to margin-left: -2125px
{
  
}

`

const Image = styled.img`
  height: 250px;
  width: 355px;
  border-radius: 20px;
  margin-left: 7px;
  margin-right: 7px;
  background:   
    /* top, gradient */ linear-gradient(
    rgba(0, 0, 0, 0.1),
    rgba(0, 0, 0, 0.8)
  );
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  cursor: pointer;

  &:hover {
    transform: translateY(-20px);
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5);
  }
`
