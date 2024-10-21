import React from "react";
import "./Footer.css";
import { SocialIcons } from "./SocialiIcons/SocialIcons";
import { NavLink } from "react-router-dom";
import { MdOutlinePhoneCallback } from "react-icons/md";
import { MdOutgoingMail } from "react-icons/md";

export const Footer = ({ data }) => {
  // console.log(data.contact);
  // Sample data for each tab
  const imgLogo = "https://i.postimg.cc/cgpM4bK2/logo-1.png";

  return (
    <div>
      <footer className="footer">
        <div className="footer-top">
          <div className="container grid grid-col-two">
            <div className="social-text">
              <span>Get connected with us on social networks:</span>
            </div>
            <div className="social-icons-new">
              <SocialIcons />
            </div>
          </div>
        </div>

        <div className="footer-content container">
          <div className="footer-row grid grid-col-three">
            <div className="footer-col">
              <NavLink to={"/"}>
                <img src={imgLogo} alt={imgLogo} className="footer-logo" />
              </NavLink>
            </div>
            <div className="footer-col">
              <h6 className="footer-title">Useful links</h6>
              <NavLink to={"./about"}>About</NavLink>
              <NavLink to={"./work"}>Work</NavLink>
              <NavLink to={"./contact"}>Contact</NavLink>
            </div>

            <div className="footer-col">
              <h6 className="footer-title">Contact</h6>
              <p className="d-flex">
                <MdOutgoingMail /> parmar.nidhir@gmail.com
              </p>
              <p className="d-flex">
                <MdOutlinePhoneCallback /> +91-7984011615
              </p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © 2024 Copyright: <NavLink to={"/"}>Nidhir Parmar</NavLink>
          </p>
        </div>
      </footer>
    </div>
  );
};
