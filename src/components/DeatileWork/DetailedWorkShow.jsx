import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { DetailedWorkData } from "../../Api/Work";
import Slider from "./Slider"; // Adjust the path as needed
import "./detailesworkshow.css";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

export const DetailedWorkShow = () => {
  const { uniqueId } = useParams();
  const workItem = DetailedWorkData.find((item) => item.uniqueId === uniqueId);

  if (!workItem) {
    return <div>Work item not found</div>;
  }

  return (
    <div>
      <div className="background"></div>
      <div className="container">
        <div className="grid grid-col-two dynamic-nav">
          <div className="left-side">
            <h2 className="h2-new">{workItem.heading}</h2>
            <p className="description">{workItem.description}</p>
            <hr className="divider" />
            <div className="rating">
              <span> Skill Rating :- {workItem.rating} / 5</span>
            </div>
            <hr className="divider" />
            <div className="tags">
              {workItem.tags.map((tag, index) => (
                <span key={index} className="tag">
                  {tag}
                </span>
              ))}
            </div>
            <div className="btn-group">
              <NavLink to={"/"} className="hire-btn">
                Visit Now <FaArrowUpRightFromSquare />
              </NavLink>
            </div>
          </div>
          <div className="right-side">
            <Slider images={workItem.images} />
          </div>
        </div>
      </div>
    </div>
  );
};
