import React from "react";
import UiMyOrder from "@/components/pages/account/my-order";
import { getCheckout } from "@/app/api/auth/auth";
export default async function MyOrder() {
  const myOrder = await getCheckout();

  return <UiMyOrder result={myOrder} />;
}
