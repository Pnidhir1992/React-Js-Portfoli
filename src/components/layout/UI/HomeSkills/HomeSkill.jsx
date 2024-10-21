import React from "react";
import "./HomeSkill.css"; // Import the CSS file

export const HomeSkill = ({ data }) => {
  // console.log(data);
  return (
    <div className="container">
      <div className="line-and-text">
        <hr />
        <h2 className="h2">
          using <span>Tools</span>
        </h2>
      </div>
      <ul className="grid grid-col-three skills-list">
        {data.skills.map((skill) => (
          <li key={skill.id} className="skill-card">
            <div className="ag-courses-item_bg"></div>
            <span>{skill.name}</span>
            {/* Use the icon component instead of an img tag */}
            <skill.iconPath className="skill-icon" />
          </li>
        ))}
      </ul>
    </div>
  );
};
