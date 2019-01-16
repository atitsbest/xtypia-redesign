import React from "react";
import { Container } from "./Container";
import styled from "styled-components";
import { typography } from "../utils/typography";
import { Button } from "./Button";

export const Newsletter = () => (
  <Wrapper>
    <CenteredContainer>
      <h2>Subscribe to our Newsletter</h2>
      <Form>
        <Input type="text" placeholder="Enter your email address" />
        <Button>Subscribe</Button>
      </Form>
    </CenteredContainer>
  </Wrapper>
);

const Wrapper = styled.div`
  background: #f5f5f5;
  padding: ${typography.rhythm(1.5)} 0;
`;

const CenteredContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Form = styled.form`
  margin: 0;
  padding: 0;
`;

const Input = styled.input`
  padding: ${typography.rhythm(0.25)} ${typography.rhythm(0.5)};
  border: 1px solid #d8d8d8;
  margin-right: 1em;
`;
