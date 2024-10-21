import React, { useState } from "react";
import "./tabView.css";
import { FaArrowRightLong } from "react-icons/fa6";

export const Tabview = ({ data }) => {
  //   console.log(data);
  const [activeTab, setActiveTab] = useState("education");

  return (
    <div className="container">
      <h5 className="text-center">3+ YEARS OF EXPERIENCE</h5>
      <h2 className="heading">My Resume</h2>

      <div className="row">
        <div className="grid grid-col-one">
          <div className="grid grid-col-three tab-header">
            <button
              onClick={() => setActiveTab("education")}
              className={activeTab === "education" ? "active" : ""}
            >
              Education
            </button>
            <button
              onClick={() => setActiveTab("experience")}
              className={activeTab === "experience" ? "active" : ""}
            >
              Experience
            </button>
            <button
              onClick={() => setActiveTab("Projects")}
              className={activeTab === "Projects" ? "active" : ""}
            >
              Projects
            </button>
          </div>
        </div>
      </div>

      {/* tab-contant */}
      <div className="tab-content">
        {activeTab === "education" && (
          <div className="tab-cards">
            {data.education.map((item) => (
              <div key={item.id} className="card-about">
                <h3 className="tabviwe-heading">{item.id}</h3>
                <p className="item-details">{item.title}</p>
                <p className="item-details">{item.details}</p>
                <p className="item-details">{item.year}</p>
                <FaArrowRightLong className="scal-icon" />
              </div>
            ))}
          </div>
        )}

        {activeTab === "experience" && (
          <div className="tab-cards">
            {data.experience.map((item) => (
              <div key={item.id} className="card-about">
                <h3 className="tabviwe-heading">{item.id}</h3>
                <p className="item-details">{item.name}</p>
                <p className="item-details">{item.title}</p>
                <p className="item-details">{item.city}</p>
                <p className="item-details">{item.year}</p>
                <p className="item-details">{item.details}</p>
                <FaArrowRightLong className="scal-icon" />
              </div>
            ))}
          </div>
        )}

        {activeTab === "Projects" && (
          <div className="tab-cards">
            {data.Projects.map((item) => (
              <div key={item.id} className="card-about">
                <h3 className="tabviwe-heading">{item.id}</h3>
                <p className="item-details">{item.title}</p>
                <p className="item-details">{item.details}</p>
                <FaArrowRightLong className="scal-icon" />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
