import React from "react";
import { Hero } from "../components/layout/UI/Hero";
import { WorkCard } from "../components/WorkCard/WorkCard";

export const Work = ({ data }) => {
  return (
    <div>
      <Hero data={data} />
      <WorkCard data={data} />
    </div>
  );
};
