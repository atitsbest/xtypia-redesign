import React from "react";
import styled from "styled-components";
import { typography } from "../utils/typography";
import { Container } from "./Container";
import { media } from "../utils/styles";

const navs = [
  {
    name: "Customized Stamps",
    categories: [
      {
        title: "Customized Text Stamps",
        items: [
          "Trodat Profiessional",
          "Trodat Printy -Everyday Use",
          "Trodat Mobile Printy Stamps"
        ]
      }
    ]
  },
  {
    name: "Standard Stamps",
    categories: [
      {
        title: "Standard Word Stamps",
        image:
          "https://businessnext.utypia.com/UI/de-DE/_Shared/ShowImage?imageId=3510331",
        items: [
          "Trodat Office Printy",
          "Stock Stamps",
          "Phrase & Date Stamps",
          "3-in-1 Office Stamp Stack",
          "round stamps for Offices"
        ]
      },
      {
        title: "Standard Date Stamps",
        items: [
          "Standard Stamps Date Only",
          "Text & Date Stamps",
          "Traditional Rubber Date Stamps"
        ]
      },
      {
        title: "Customized Text Stamps",
        image:
          "https://businessnext.utypia.com/UI/de-DE/_Shared/ShowImage?imageId=3510330",
        items: [
          "Trodat Profiessional",
          "Trodat Printy -Everyday Use",
          "Trodat Mobile Printy Stamps"
        ]
      }
    ]
  },
  { name: "Special Stamps" },
  { name: "Seals" },
  { name: "Replacement Pods" },
  { name: "Accessoires" },
  { name: "Signs & Badges" }
];

export const Nav = () => (
  <nav>
    <List>
      {navs.map((item, idx) => (
        <Item key={idx}>
          <Link href="#">{item.name}</Link>
          {item.categories && (
            <Submenu className="nav-submenu">
              <CenteredContainer>
                {item.categories.map((cat, idx) => (
                  <Category key={idx}>
                    <div>
                      <CategoryTitle>{cat.title}</CategoryTitle>
                      <CategoryItems>
                        {cat.items.map((subitem, idx2) => (
                          <CategoryItem key={idx2}>
                            <CategorySubLink href="#">
                              {subitem}
                            </CategorySubLink>
                          </CategoryItem>
                        ))}
                      </CategoryItems>
                    </div>
                    {cat.image && (
                      <CategoryImage src={cat.image} alt={cat.title} />
                    )}
                  </Category>
                ))}
              </CenteredContainer>
            </Submenu>
          )}
        </Item>
      ))}
    </List>
  </nav>
);

const List = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  list-style-type: none;

  ${media.tablet` display: none;`}
`;

const Item = styled.li`
  margin: 0 1em 0;

  &:hover .nav-submenu {
    display: flex;
  }
`;

const CategoryLink = styled.a`
  text-decoration: none;
  color: #000;
  font-weight: 700;
  font-size: 1.1rem;
  white-space: nowrap;
  position: relative;

  &:hover {
    ::after {
      content: " ";
      position: absolute;
      left: 0;
      right: 0;
      bottom: -${typography.rhythm(0.4)};
      border-bottom: 2px solid #000;
    }
  }
`;

const CategorySubLink = styled(CategoryLink)`
  &:hover {
    ::after {
      content: none;
    }
  }
`;

const Link = styled(CategoryLink)`
  line-height: ${typography.options.baseLineHeight + 0.8};
`;
const Submenu = styled.div`
  display: none;
  background: #fff;
  padding: ${typography.rhythm(1)}
  border-top: 1px solid #e6e6e6;
  border-bottom: 1px solid #e6e6e6;
  position: absolute;
  z-index: 10;
  left: 0;
  right: 0;
`;

const CenteredContainer = styled(Container)`
  display: flex;
  justify-content: space-around;
  align-items: stretch;
`;

const Category = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 1em;
`;

const CategoryTitle = styled.strong`
  color: #999;
  font-family: "Roboto Mono", mono;
  font-size: 0.925em;
  text-transform: uppercase;
  font-weight: normal;
  padding-bottom: ${typography.rhythm(0.25)};
`;

const CategoryItems = styled.ul`
  margin: 0;
  list-style-type: none;
`;

const CategoryItem = styled.li`
  margin: ${typography.rhythm(0.125)} 0;
`;

const CategoryImage = styled.img`
  max-width: 10rem;
  max-height: 10rem;
  margin: auto 0 0 2em;
`;
