import React from "react";
import "./AbourMe.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { SocialIcons } from "../SocialiIcons/SocialIcons";
import { NavLink } from "react-router-dom";
import { FaDownload } from "react-icons/fa";
// import "../Api/Api../New-resume.pdf";

export const AboutMe = ({ data }) => {
  const handleOpen = (event) => {
    event.preventDefault(); // Prevents navigation
    window.open("../../New-resume.pdf", "_blank");
  };

  // console.log(data.totalExp);
  // console.log(SocialIcons);
  return (
    <div>
      <div className="container">
        <div className="grid grid-col-two about-me">
          <div className="right-colume">
            <img
              src="https://i.postimg.cc/rFYG8zxg/Group-1000015845.png"
              alt="Profile"
            />
          </div>
          <div className="left-colume">
            <h3 className="heading-new-one">
              Language To Speak <FaArrowRightLong />
            </h3>
            <ul className="lang">
              {data.languages.map((CurElm) => (
                <li key={CurElm}>{CurElm}</li>
              ))}
            </ul>

            <div className="colume-two">
              <div className="one">
                <h3>
                  Location <FaArrowRightLong />
                </h3>
                <p>{data.location}</p>
              </div>
              <div className="two">
                <h3>
                  Total Exp. <FaArrowRightLong />
                </h3>
                <p>{data.totalExp}</p>
              </div>
            </div>
            <div className="download">
              <NavLink to="#" onClick={handleOpen} className="hire-btn">
                Download Resume <FaDownload />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
