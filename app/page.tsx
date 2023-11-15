import React from "react";
import { getAllProduct } from "./api/product/product";

export default async function Home() {
  const getProductAll = await getAllProduct();

  return <></>;
}
