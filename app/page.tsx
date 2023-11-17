import React from "react";
import { getAllProduct } from "./api/product/product";

export default async function Home() {
  const getProductAll = await getAllProduct({
    categoryId: "653de9786da315897d21b805",
  });

  console.log(getProductAll);

  return <></>;
}
