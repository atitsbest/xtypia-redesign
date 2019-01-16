import React from "react";
import { Link } from "@reach/router";
import { TopHeader } from "../components/TopHeader";
import { Header } from "../components/Header";
import { Container } from "../components/Container";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";

export function Layout({ children }) {
  return (
    <React.Fragment>
      <TopHeader />
      <Container>
        <Header />
        <Nav />
      </Container>
      {children}
      <Footer />
    </React.Fragment>
  );
}
