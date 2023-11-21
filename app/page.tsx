import React from "react";
import { getAllProduct } from "./api/product/product";

// Page
import Royal from "@/components/pages/home/royal";
export default async function Home() {
  const getProductAll = await getAllProduct({
    query: "653de9786da315897d21b805",
  });

  console.log(getProductAll);

  return (
    <>
      <Royal props={} />
    </>
  );
}
