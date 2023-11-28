import React, { Suspense, lazy } from "react";
import Loading from "./loading";
// Page
const Royal = lazy(() => import("@/components/pages/home/royal"));
export default async function Home() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <div className="main_container">
          <Royal />
        </div>
      </Suspense>
    </>
  );
}
