import React from "react";
import FirstView from "./components/FirstView";
import HomePage from "./components/HomePage";

export default async function Home() {
  return (
    <>
      <FirstView />
      <HomePage/>
    </>
  );
}
