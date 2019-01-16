import styled from "styled-components";
import { typography } from "../utils/typography";

export const SectionHeadline = styled.span`
  font-family: "Roboto Mono", mono;
  color: rgb(153, 153, 153);
  text-transform: uppercase;
  display: block;
  margin-bottom: ${typography.rhythm(1)};
  text-align: center;
  font-weight: normal;
`;
