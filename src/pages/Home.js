import React from "react";
import { Hero } from "../components/Hero";
import { HeroSlider } from "../components/HeroSlider";
import { Sales } from "../components/Sales";
import { ShopByCategory } from "../components/ShopByCategory";
import { ShopByTemplate } from "../components/ShopByTemplate";
import { Newsletter } from "../components/Newsletter";
import { Layout } from "../components/Layout";

export function Home() {
  return (
    <Layout>
      <HeroSlider>
        <Hero background="#f5f5f5" color="#000" />
        <Hero background="#000" color="#fff" />
        <Hero background="#aa2e34" color="#fff" />
        <Hero background="#308e26" color="#fff" />
      </HeroSlider>
      <Sales />
      <ShopByTemplate background="#f5f5f5" />
      <ShopByCategory background="#fff" />
      <Newsletter />
    </Layout>
  );
}
