import React from "react";
import { getAllProduct } from "./api/product/product";

// Page
import Royal from "@/components/pages/home/royal";

export default async function Home() {
  const getProductAll = await getAllProduct({
    query: "?keyCategory=royal",
  });

  return (
    <div className="main_container">
      <Royal props={getProductAll} />
    </div>
  );
}
