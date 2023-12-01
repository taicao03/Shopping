import React, { Suspense, lazy } from "react";
import Loading from "./loading";
// Page
const Royal = lazy(() => import("@/components/pages/home/royal"));
const MenuHome = lazy(() => import("@/components/pages/home/menu_home"));
const Sales = lazy(() => import("@/components/pages/home/sales"));

export default async function Home() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <div className="main_container">
          <MenuHome />
          <Sales />
          <Royal />
        </div>
      </Suspense>
    </>
  );
}
