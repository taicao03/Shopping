import React, { Suspense, lazy } from "react";
import Loading from "./loading";
// Page
const Royal = lazy(() => import("@/components/pages/home/royal"));
const MenuHome = lazy(() => import("@/components/pages/home/menu_home"));
const Sales = lazy(() => import("@/components/pages/home/sales"));
const Categories = lazy(() => import("@/components/pages/home/category"));

export default async function Home() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <div className="main_container">
          <MenuHome />
          <Sales />
          <Categories />
          <Royal />
        </div>
      </Suspense>
    </>
  );
}
