"use server";

import endpoints from "@/app/network/index";
import { cookies } from "next/headers";

export const getCheckout = async () => {
  const user = cookies().get("user")?.value;
  const getUser = JSON.parse(user);

  const res = await fetch(`${endpoints?.cart}/check-out/${getUser?._id}`, {
    method: "GET",
    next: { revalidate: 0 },
  });

  return res.json();
};
