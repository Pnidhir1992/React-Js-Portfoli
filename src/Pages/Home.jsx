import React from "react";
import { Hero } from "../components/layout/UI/Hero";
import { HomeSkill } from "../components/layout/UI/HomeSkills/HomeSkill";
import { HomeSlider } from "../components/HomeSlider/HomeSlider";

export const Home = ({ data, newData }) => {
  return (
    <>
      <Hero data={data} />
      <HomeSkill data={data} />
      <HomeSlider />
    </>
  );
};
