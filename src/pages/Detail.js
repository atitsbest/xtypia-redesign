import React from "react";
import { Layout } from "../components/Layout";
import { ProductDetails } from "../components/ProductDetails";

const name = "Original Printy 4.0 - 4913";

export function Detail() {
  return (
    <Layout>
      <ProductDetails name={name} />
    </Layout>
  );
}
