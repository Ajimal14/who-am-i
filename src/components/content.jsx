import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styled from "styled-components";
import {
  faCss3,
  faHtml5,
  faJs,
  faNodeJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCartPlus,
  faFutbol,
  faGamepad,
  faHandsWash,
  faHeart,
  faMagic,
  faMobile,
  faSchool,
  faTv,
  faUserSecret,
} from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  max-width: 900px;
  min-height: 500px;
  position: relative;
  display: flex;
  margin: 0 auto;

  hr {
    border: 1px dotted ${(props) => props.theme.headingColor};
    background: ${(props) => props.theme.contentDropColor};
    height: 2px;
    width: 25px;
    margin: 15px 0;
    border-radius: 50px;
  }
  @media only screen and (max-width: 480px) {
    max-width: 95%;
    min-height: 200px;
  }
`;

const MiddleContent = styled.div`
  background: ${(props) => props.theme.contentDropColor};
  border-radius: 10px;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1) 0s;
  padding: 20px;
  width: 100%;
  margin-top: -30px;
  border: 2px solid;
  border-color: ${(props) => props.theme.borderColor};
  color: ${(props) => props.theme.textColor};
  font-weight: bold;
  @media only screen and (max-width: 480px) {
    margin-top: -20px;
    padding: 10px;
  }
`;

const Heading = styled.div`
  color: ${(props) => props.theme.headingColor};
  font-family: "Bebas Neue";
  font-size: 35px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  @media only screen and (max-width: 480px) {
    font-size: 25px;
    margin-bottom: 5px;
  }
`;

const Icons = styled.div`
  display: flex;
  svg {
    font-size: 35px;
    margin-right: 10px;
    color: ${(props) => props.theme.headingColor};
  }
  @media only screen and (max-width: 480px) {
    svg {
      font-size: 20px;
      margin-right: 5px;
      color: ${(props) => props.theme.headingColor};
    }
  }
`;

const Text = styled.div`
  font-size: 16px;
  line-height: 1.5;
  font-family: "Raleway";
  padding: 10px;

  svg {
    margin: 0px 5px;
    color: ${(props) => props.theme.headingColor};
  }

  @media only screen and (max-width: 480px) {
    font-size: 14px;
    padding: 5px;
  }
`;

const Spacer = styled.div`
  margin-top: 40px;
  @media only screen and (max-width: 480px) {
    margin-top: 20px;
  }
`;

const SubHeading = styled.div`
  color: ${(props) => props.theme.headingColor};
  font-family: "Poppins";
  font-size: 16px;
  margin: 10px auto;
  font-weight: bold;

  @media only screen and (max-width: 480px) {
    font-size: 14px;
    margin: 5px auto;
  }
`;

const TimelineText = styled.div`
  font-size: 14px;
  margin-left: 10px;

  svg {
    margin: 0px 5px;
    color: ${(props) => props.theme.headingColor};
  }

  @media only screen and (max-width: 480px) {
    font-size: 12px;
    margin-left: 5px;
  }
`;

const Roster = styled.img`
  height: 250px;
  @media only screen and (max-width: 480px) {
    height: 150px;
  }
`;

const FourFourTwoGrid = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-gap: 70px;
  font-family: "Raleway";
  font-size: 14px;
  @media only screen and (max-width: 480px) {
    grid-gap: 20px;
    grid-template-columns: 1fr;
    div {
      font-size: 12px;
      align-items: normal;
    }
    .roster-wrapper {
      text-align: center;
    }
  }
`;

const FourFourTwoText = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  svg {
    margin-right: 10px;
    color: ${(props) => props.theme.headingColor};
    vertical-align: middle;
  }
  @media only screen and (max-width: 480px) {
    padding: 5px;
    svg {
      margin-right: 5px;
    }
  }
`;

const Content = () => {
  return (
    <Container>
      <MiddleContent>
        <Heading>
          <div>Full Stack Dev.</div>
          <Icons>
            <FontAwesomeIcon icon={faReact} />
            <FontAwesomeIcon icon={faJs} />
            <FontAwesomeIcon icon={faNodeJs} />
            <FontAwesomeIcon icon={faHtml5} />
            <FontAwesomeIcon icon={faCss3} />
            <FontAwesomeIcon icon={faMobile} />
          </Icons>
        </Heading>
        <Text>
          I have more than 3 Years of experience in Frontend Development with
          React Ecosystem.
          <br />I write Full Stack Applications and sometimes Mobile Apps with
          React Native.
        </Text>
        <Spacer />
        <Heading>Timeline</Heading>
        <Text>
          <div>
            <SubHeading>
              {" "}
              <FontAwesomeIcon icon={faMagic} /> Fantasy
            </SubHeading>

            <TimelineText>
              A Promising Fantasy Sports startup disrupted the space with
              Advanced Fantasy sports experience.
              <br />
              As the fantasy space grew in India we launched multiple sports
              with exciting features.
              <br />
              Unluckily, our startup ran out of funds too soon.
            </TimelineText>
          </div>
          <hr />
          <div>
            <SubHeading>
              <FontAwesomeIcon icon={faHandsWash} /> Laundry
            </SubHeading>

            <TimelineText>
              Early Laundry startup with pick and drop services for Gurgaon.
              <br />
              We suspended operations after few months due to a lack of storage
              and logistic power.
            </TimelineText>
          </div>
          <hr />
          <div>
            <SubHeading>
              <FontAwesomeIcon icon={faCartPlus} /> E-Commerce
            </SubHeading>

            <TimelineText>
              A midsized e-commerce company, producing and selling health
              supplements in India.
              <br />
              India's biggest online marketplace supplements and health goods.
            </TimelineText>
          </div>
          <hr />
          <div>
            <SubHeading>
              <FontAwesomeIcon icon={faMagic} /> Fantasy 2.0
            </SubHeading>

            <TimelineText>
              Designed and developed a fantasy platform from scratch with plug
              and playable fantasy model.
              <br />
            </TimelineText>
          </div>
          <hr />
          <div>
            <SubHeading>
              <FontAwesomeIcon icon={faSchool} /> Education
            </SubHeading>

            <TimelineText>
              Ed-tech company with the largest catalog of specialization courses
              in the government and banking sector.
            </TimelineText>
          </div>
          <hr />
          <div>
            <SubHeading>
              <FontAwesomeIcon icon={faUserSecret} /> Security
            </SubHeading>

            <TimelineText>
              Currently working in a Cyber Security Company with solutions
              ranging from communication endpoint security, encryption, network
              security, cloud security, email security, mobile security and
              unified threat management.
            </TimelineText>
          </div>
        </Text>

        <Spacer />
        <Heading>Four-Four-Two.</Heading>
        <FourFourTwoGrid>
          <div>
            <FourFourTwoText>
              <FontAwesomeIcon icon={faTv} />
              <div>
                I love to watch football on weekends worsening my sleeping
                pattern with a pint of wheat beer and a cold slice of pizza in
                my hand.
              </div>
            </FourFourTwoText>
            <FourFourTwoText>
              <FontAwesomeIcon icon={faHeart} />
              <div>I support Paris Saint Germain.</div>
            </FourFourTwoText>
            <FourFourTwoText>
              <FontAwesomeIcon icon={faFutbol} />
              <div>
                I've played football in the past for Local Clubs in Delhi and
                9-aside National Tournament.
              </div>
            </FourFourTwoText>
            <FourFourTwoText>
              <FontAwesomeIcon icon={faGamepad} />
              <div>I enjoy playing FIFA in my spare time.</div>
            </FourFourTwoText>
          </div>
          <div className="roster-wrapper">
            <Roster src="/roster.png" />
          </div>
        </FourFourTwoGrid>
      </MiddleContent>
    </Container>
  );
};

export default Content;
