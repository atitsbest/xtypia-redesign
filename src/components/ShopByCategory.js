import React from "react";
import styled from "styled-components";
import { typography } from "../utils/typography";
import { Container } from "./Container";
import { SectionHeadline } from "./SectionHeadline";
import { media } from "../utils/styles";

const categories = [
  {
    title: "Text Stamps",
    src:
      "https://businessnext.utypia.com/UI/de-DE/_Shared/ShowImage?imageId=3510330"
  },
  {
    title: "Text Stamps",
    src:
      "https://businessnext.utypia.com/UI/de-DE/_Shared/ShowImage?imageId=3510247"
  },
  {
    title: "Text Stamps",
    src:
      "https://businessnext.utypia.com/UI/de-DE/_Shared/ShowImage?imageId=3510331"
  }
];

export const ShopByCategory = ({ background }) => (
  <Wrapper background={background}>
    <Container>
      <SectionHeadline>Shop by Category</SectionHeadline>
      <List>
        {categories.map((cat, idx) => (
          <Item key={idx}>
            <Img src={cat.src} />
            <Title>{cat.title}</Title>
          </Item>
        ))}
      </List>
    </Container>
  </Wrapper>
);

const Wrapper = styled.header`
  width: 100%;
  padding: ${typography.rhythm(2)} 1em ${typography.rhythm(2)};
  display: flex;
  flex-direction: column;
  justify-content: space-center;
  align-items: center;
  background: ${props => props.background};

  ${media.mobile`
    padding-left: 0;
    padding-right: 0;
  `}
`;

const List = styled.ul`
  display: flex;
  margin: 0;
  justify-content: center;

  flex-wrap: wrap;
`;

const Item = styled.li`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  padding: ${typography.rhythm(2)};
  padding-bottom: ${typography.rhythm(0.5)};
  border: 1px solid #d8d8d8;
  margin: 0 0.75em;
  width: 17rem;
  box-shadow: 0 0 24px rgba(0, 0, 0, 0.05);

  ${media.mobile`
    flex: 1 1 calc(50% - 1.5em);
    margin-bottom: ${typography.rhythm(0.5)};
    
    &:nth-child(odd) {
      margin-right: 0;
    }
  `}
`;

const Img = styled.img``;

const Title = styled.strong`
  margin-top: ${typography.rhythm(1)};
  font-size: 1.15em;
`;
