import React from "react";
import styled from "styled-components";
import { Link } from "@reach/router";

export function Path({ to }) {
  return (
    <PathWrapper>
      {to.map((item, idx) => (
        <PathItem key={idx}>
          <ItemLink to="/">{item}</ItemLink>
        </PathItem>
      ))}
    </PathWrapper>
  );
}

const PathWrapper = styled.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;
  display: flex;
  flex: 1 0 100%;
`;

const PathItem = styled.li`
  text-transform: uppercase;
  font-size: 0.8em;
  color: #a5a5a5;

  &::after {
    content: "/";
    padding: 0 0.33em;
  }

  &:last-child {
    &::after {
      content: none;
    }
  }
`;

const ItemLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  font-weight: inherit;
`;
