import React from "react";
import styled from "styled-components";
import { typography } from "../utils/typography";
import { media } from "../utils/styles";

import ChevronDownIcon from "mdi-react/ChevronDownIcon";
import { Container } from "./Container";

export const TopHeader = () => (
  <Wrapper>
    <StyledContainer>
      <span style={{ cursor: "pointer" }}>free shipping above €50</span>
      <Promotion>Cyber Sale: 25% Off - Use Code: CYBERMONDAY</Promotion>
      <Dropdown>
        DE
        <ChevronDownIcon />
      </Dropdown>
    </StyledContainer>
  </Wrapper>
);

const Wrapper = styled.header`
  width: 100%;
  padding: ${typography.rhythm(0.33)} 0;
  background: #000;
  color: #fff;
  font-weight: 700;
  font-size: 0.9em;
`;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1em;
`;

const Dropdown = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Promotion = styled.span`
  ${media.mobile`
    display: none;
  `}
`;

const Flag = styled.img`
  height: 24px;
  margin: 0 0.25em 0 0;
  padding: 0;
`;
