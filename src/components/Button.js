import styled from "styled-components";
import { typography } from "../utils/typography";

export const Button = styled.button`
  color: #fff;
  background: #e30613;
  border: none;
  padding: ${typography.rhythm(0.25)} ${typography.rhythm(1)};
  font-weight: bold;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.1);
  text-transform: uppercase;

  &:hover {
    box-shadow: 0 0 24px rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
`;
