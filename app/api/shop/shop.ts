"use server";

import endpoints from "@/app/network/index";
import { ProductField } from "@/app/types/product";
import { cookies } from "next/headers";

export const getOneStoreUser = async () => {
  const user = cookies().get("user")?.value;
  const getUser = JSON.parse(user as any);

  const res = await fetch(`${endpoints?.product}/storeUser/${getUser?._id}`, {
    next: { revalidate: 0 },
  });

  return res.json();
};
