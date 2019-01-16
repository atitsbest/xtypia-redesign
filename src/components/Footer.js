import React from "react";
import { Container } from "./Container";
import styled from "styled-components";
import { typography } from "../utils/typography";
import FacebookIcon from "mdi-react/FacebookIcon";
import TwitterIcon from "mdi-react/TwitterIcon";
import SnapchatIcon from "mdi-react/SnapchatIcon";
import { media } from "../utils/styles";

export const Footer = () => (
  <footer>
    <Container>
      <Wrapper>
        <div />
        <Links>
          <Item>
            <Link>AGB</Link>
          </Item>
          <Item>
            <Link>Impressum</Link>
          </Item>
          <Item>
            <Link>Contact us</Link>
          </Item>
        </Links>
        <Links>
          <Item>
            <Link>Privacy Policy &amp; Cookies</Link>
          </Item>
          <Item>
            <Link>Terms and Conditions</Link>
          </Item>
        </Links>
        <Links>
          <Item>
            <Link>Shipping</Link>
          </Item>
        </Links>
        <SozialMedia>
          <p>Follow us</p>
          <FacebookIcon size={28} />
          <TwitterIcon size={28} />
          <SnapchatIcon size={28} />
        </SozialMedia>
        <div>
          <Logo>
            <img
              src="http://imagedb.trodat.co.uk/CommonPictures/Logos/uTypia-Logo[1].jpg"
              height="32"
              alt="logo"
            />
          </Logo>
          <Copyright>
            © copyright 2018, Trodat GmbH
            <br /> all rights reserved
          </Copyright>
        </div>
      </Wrapper>
    </Container>
  </footer>
);

const Wrapper = styled.div`
  display: flex;
  align-items: felx-start;
  justify-content: space-between;
  padding: ${typography.rhythm(2)} 2em ${typography.rhythm(1)};

  ${media.mobile`
    flex-direction: column;
  `}
`;
const Logo = styled.div`
  img {
    margin-bottom: ${typography.rhythm(0.5)};
  }
`;
const Links = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
`;

const Item = styled.li`
  list-style-type: none;
`;
const Link = styled.a`
  font-weight: bold;
`;

const SozialMedia = styled.div`
  color: #999;
  svg {
    margin: 0 0.1em;
  }
`;

const Copyright = styled.div`
  color: #999;
  font-size: 0.9em;
`;
