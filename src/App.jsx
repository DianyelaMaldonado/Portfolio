import React from "react";
import "./App.css";
import { MainHero } from "./components/MainHero/MainHero";
import { SoftSkills } from "./components/SoftSkils/SoftSkills";
import { TechSkills } from "./components/TechSkills/TechSkills";

function App() {
  return (
    <>
      <MainHero />
      <TechSkills />
      <SoftSkills />
    </>
  );
}

export default App;
