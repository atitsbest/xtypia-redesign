import React from "react";
import styled from "styled-components";
import ChevronLeftIcon from "mdi-react/ChevronLeftIcon";
import ChevronRightIcon from "mdi-react/ChevronRightIcon";
import { Link } from "@reach/router";

import { typography } from "../utils/typography";
import { media } from "../utils/styles";
import { Container } from "./Container";
import { SectionHeadline } from "./SectionHeadline";

const categories = [
  {
    title: "Original Printy 4.0 - 4913",
    src:
      "https://businessnext.utypia.com/UI/de-DE/_Shared/ShowImage?imageId=3501386"
  },
  {
    title: "Original Printy 4.0 - 4915-2",
    src:
      "https://businessnext.utypia.com/UI/de-DE/_Shared/ShowImage?imageId=3501386"
  },
  {
    title: "Original Printy 4.0 - 4913",
    src:
      "https://businessnext.utypia.com/UI/de-DE/_Shared/ShowImage?imageId=3501386"
  },
  {
    title: "Original Printy 4.0 - 4913",
    src:
      "https://businessnext.utypia.com/UI/de-DE/_Shared/ShowImage?imageId=3501386"
  }
];

export const Sales = ({ background }) => (
  <Wrapper background={background}>
    <Container>
      <SectionHeadline>Special Offers</SectionHeadline>
      <List>
        <ActionItem>
          <ChevronLeftIcon size={38} />
        </ActionItem>
        {categories.map((cat, idx) => (
          <Item key={idx}>
            <Link to="/detail">
              <ImgWrapper>
                <Img src={cat.src} />
              </ImgWrapper>
            </Link>
            <Title>{cat.title}</Title>
            <Price>&euro;49,99</Price>
          </Item>
        ))}
        <ActionItem>
          <ChevronRightIcon size={38} />
        </ActionItem>
      </List>
    </Container>
  </Wrapper>
);

const Wrapper = styled.header`
  width: 100%;
  padding: ${typography.rhythm(2)} 1em ${typography.rhythm(2)};
  display: flex;
  flex-direction: column;
  background: ${props => props.background};

  ${media.mobile`
    padding-left: 0;
    padding-right: 0;
  `}
`;

const List = styled.ul`
  display: flex;
  justify-content: center;
  margin: 0;
  list-style-type: none;

  ${media.mobile`
    flex-wrap: wrap;
  `};
`;

const ImgWrapper = styled.div`
  max-height: 15rem;
  max-width: 17rem;
  width: 100%;
  background: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${typography.rhythm(1)};
`;
const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: #fff;
  padding-bottom: ${typography.rhythm(0.5)};
  margin: 0 0.75em;
  cursor: pointer;

  ${media.mobile`
    flex: 1 1 calc(50% - 1.5em);

    &:nth-child(even) {
      margin-right: 0;
    }
  `}
`;

const ActionItem = styled.li`
  height: 15rem;
  display: flex;
  align-items: center;
  cursor: pointer;

  ${media.mobile`
    display: none;
  `}
`;

const Img = styled.img`
  mix-blend-mode: multiply;
`;

const Title = styled.strong`
  margin-top: ${typography.rhythm(0.25)};
  font-size: 1.15em;
`;

const Price = styled.span``;
