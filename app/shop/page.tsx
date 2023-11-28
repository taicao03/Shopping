import React from "react";

import ListingStore from "@/components/pages/store";
import { getOneStoreUser } from "../api/shop/shop";

export default async function Store() {
  const data = await getOneStoreUser();
  return (
    <>
      <ListingStore props={data} />
    </>
  );
}
