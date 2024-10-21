// Pages/About.jsx
import React from "react";
import { AboutSection } from "../components/layout/UI/About/AboutSection";
import { Hero } from "../components/layout/UI/Hero";
import { Tabview } from "../components/Tabview/Tabview";
import { AboutMe } from "../components/AboutMe/AboutMe";

export const About = ({ data }) => {
  return (
    <>
      <Hero data={data} />
      <AboutMe data={data} />
      <AboutSection />
      <Tabview data={data} />
    </>
  );
};
