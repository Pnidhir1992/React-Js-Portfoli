import React from "react";
import "./About-Section.css";
import { skillsArray } from "../../../../Api/Skill";

export const AboutSection = () => {
  return (
    <>
      <div className="container">
        <div className="line-and-text">
          <hr />
          <h2>
            My <span>Skills</span>
          </h2>
        </div>
      </div>
      <div className="container">
        <div className="box">
          <ul className="grid grid-col-three">
            {skillsArray.map((skill) => (
              <li key={skill.id} className="card example-2">
                <div className="inner">
                  {/* Render the icon as a component */}
                  <skill.icon className="icons" />
                  <h3 className="skill-name">{skill.name}</h3>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
