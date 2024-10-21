import React from "react";
import "../../../Hero.css";
import { NavLink } from "react-router-dom";

import { FaArrowRightLong } from "react-icons/fa6";
import { SocialIcons } from "../../SocialiIcons/SocialIcons";

export const Hero = ({ data, socilaData }) => {
  // console.log(data);
  return (
    <>
      <div className="background"></div>
      <div className="container grid grid-col-two shadow">
        <div className="wrapper">
          <h1>
            {data.title} <span>{data.name} </span>
          </h1>
          <p>{data.description}</p>
          <NavLink to="/about" className="hire-btn">
            Can We Connect <FaArrowRightLong className="icon" />
          </NavLink>
          <SocialIcons socilaData={socilaData} />
        </div>
        <div className="image-wrapper">
          <img src={data.image} alt={data.title} className="hero-image" />
        </div>
      </div>
    </>
  );
};
