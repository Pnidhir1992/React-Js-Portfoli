// src/components/SocialIcons.js
import React from "react";
import { NavLink } from "react-router-dom";

import {
  FaFacebook,
  FaGithubAlt,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa6";

export const socialIcons = [
  {
    name: "Facebook",
    icon: <FaFacebook />,
    link: "https://www.facebook.com/yourprofile",
  },
  {
    name: "Instagram",
    icon: <FaInstagram />,
    link: "https://www.instagram.com/yourprofile",
  },
  {
    name: "Github",
    icon: <FaGithubAlt />,
    link: "https://www.github.com/yourprofile",
  },
  {
    name: "Twitter",
    icon: <FaTwitter />,
    link: "https://twitter.com/yourprofile",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/nidhir-parmar-935130b2/",
  },
];

export const SocialIcons = () => {
  // console.log(socialIcons);

  return (
    <div className="social-icons">
      {socialIcons.map((social, index) => (
        <a
          key={index}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          className="hover-me"
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};
