import React from "react";
import UiMyAccount from "@/components/pages/account/my-account";
import { getOneUser } from "@/app/actions/auth";
export default async function MyAccount() {
  const user = await getOneUser();

  return <UiMyAccount user={user} />;
}
