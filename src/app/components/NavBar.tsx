import React from "react";
import NavBaLinks from "./NavBaLinks";
import { getUserId } from "@/src/utils/actions";

const NavBar = async () => {
  const user = await getUserId();

  return (
    <>
      <NavBaLinks user={user} />
    </>
  );
};

export default NavBar;
