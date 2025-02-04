import React from "react";
import "./App.css";
import { MainHero } from "./components/MainHero/MainHero";
import { SoftSkills } from "./components/SoftSkils/SoftSkills";
import { TechSkills } from "./components/TechSkills/TechSkills";
import { Projects } from "./components/Projects/Projects";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <>
      <MainHero />
      <TechSkills />
      <SoftSkills />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
