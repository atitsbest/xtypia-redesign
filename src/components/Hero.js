import React from "react";
import styled from "styled-components";
import { typography } from "../utils/typography";

export const Hero = ({ background, color }) => (
  <Wrapper background={background}>
    <Headline color={color}>Willkommen</Headline>
    <Body color={color}>
      Im uTypia Business Demoshop können Sie auf einfache Weise die
      Online-Bestellung von Stempeln selbst ausprobieren. Sie werden sehen wie
      bequem die Stempelbestellung für Ihre Kunden sein könnte!
    </Body>
  </Wrapper>
);

const Wrapper = styled.header`
  width: 100%;
  padding: ${typography.rhythm(3)} 1em ${typography.rhythm(2)};
  display: flex;
  flex-direction: column;
  justify-content: space-center;
  align-items: center;
  background: ${props => props.background};
`;

const Headline = styled.h1`
  color: ${props => props.color};
`;

const Body = styled.p`
  color: ${props => props.color};
  max-width: 30rem;
  text-align: center;
  font-size: 1.15em;
`;
