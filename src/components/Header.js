// http://imagedb.trodat.co.uk/CommonPictures/Logos/uTypia-Logo[1].jpg

import React from "react";
import styled from "styled-components";
import SearchIcon from "mdi-react/SearchIcon";
import PermIdentityIcon from "mdi-react/PermIdentityIcon";
import ShoppingCartIcon from "mdi-react/ShoppingCartIcon";
import HamburgerMenu from "react-hamburger-menu";
import { typography } from "../utils/typography";
import { media } from "../utils/styles";
import logo from "../images/trodat-logo.png";

export const Header = () => (
  <Wrapper>
    <UserActions>
      <MobileMenu>
        <HamburgerMenu isOpen={false} height={16} width={24} />
      </MobileMenu>
      <Search>
        <SearchIcon />
        <SearchField placeholder="Suche" />
      </Search>
    </UserActions>
    <Logo>
      <Img src={logo} alt="logo" />
    </Logo>
    <UserActions>
      <SignIn>
        <PermIdentityIcon />
        <Text>Sign in</Text>
      </SignIn>
      <Cart>
        <ShoppingCartIcon />
        <Text>Cart</Text>
      </Cart>
    </UserActions>
  </Wrapper>
);

const Wrapper = styled.header`
  width: 100%;
  padding: ${typography.rhythm(0.5)} 0;
  display: flex;
  justify-content: space-around;
  align-items: baseline;

  ${media.tablet`
    align-items: center;
  `}
`;

const MobileMenu = styled.li`
  && {
    display: none;
    ${media.mobile`display: flex;`}
  }
`;

const Logo = styled.div`
  flex: 1 0 33.33%;
  display flex;
  justify-content: center;
  margin: ${typography.rhythm(0.5)};
`;

const Img = styled.img`
  margin: 0;
  max-height: 50px;
  width: auto;
  object-fit: contain;
`;

const Text = styled.span`
  ${media.mobile`
    display: none;
  `}
`;

const Search = styled.li`
  flex: 1 1 33.33%;
  color: #000;
  font-size: 0.93em;
  font-weight: 700;
  display: flex;
  align-items: center;
`;

const SearchField = styled.input`
  border: none;
  padding: ${typography.rhythm(0.25)} 1em;
  padding-left: 0;
  width: 100%;
  transition: background 250ms ease-out, padding 250ms ease-out;
  outline: none;

  &:hover,
  &:focus {
    background: #f5f5f5;
    padding-left: 1em;
    border: none;
    outline: 1px solid #e6e6e6;

    &::placeholder {
      opacity: 0.5;
    }
  }

  &::placeholder {
    opacity: 1;
  }

  ${media.mobile`
    display: none;
  `}
`;

const UserActions = styled.ul`
  display: flex;
  flex: 1 0 33.33%;
  list-style-type: none;
  justify-content: flex-end;
  padding: 0;
  margin: 0;

  > li {
    margin: 0 1em;
    color: #000;
    font-size: 0.93em;
    font-weight: 700;
    display: flex;
    align-items: center;
  }
`;

const SignIn = styled.li``;

const Cart = styled.li``;
