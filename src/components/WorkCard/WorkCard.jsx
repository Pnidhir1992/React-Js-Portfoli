import React from "react";
import { NavLink } from "react-router-dom";
import "./workcard.css";
import { workData } from "../../Api/Work";
import { FaArrowRightLong } from "react-icons/fa6";

export const WorkCard = () => {
  // console.log(uniqueId);
  return (
    <div>
      <div className="container">
        <div>
          <div className="line-and-text">
            <hr />
            <h2>
              My <span>Skills</span>
            </h2>
          </div>
          <ul className="grid grid-col-three">
            {workData.map((work) => (
              <li key={work.uniqueId}>
                <div className="card">
                  <div className="card-image-container">
                    <img
                      src={work.image}
                      alt="Card image"
                      className="card-image"
                    />
                    <div className="hover-overlay"></div>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{work.title}</h5>
                    <p className="card-text">{work.about}</p>
                    <NavLink
                      to={`/work/${work.uniqueId}`}
                      className="card-button"
                    >
                      Visit Link <FaArrowRightLong className="new-icons" />
                    </NavLink>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
