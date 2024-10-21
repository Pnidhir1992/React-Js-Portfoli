import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import "../App.css";

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleButtonToggle = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <header className="header">
        {/* logo section */}
        <div className="container grid grid-col-two align-item">
          <div className="ham-menu">
            <button onClick={handleButtonToggle}>
              <GiHamburgerMenu />
            </button>
          </div>
          <nav className="navbar">
            <ul className={showMenu ? "active" : ""}>
              <li className="nav-item">
                <NavLink
                  to="/about"
                  className="nav-link hire-btn"
                  onClick={() => setShowMenu(false)}
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/work"
                  className="nav-link hire-btn"
                  onClick={() => setShowMenu(false)}
                >
                  Work
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/contact"
                  className="nav-link hire-btn"
                  onClick={() => setShowMenu(false)}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>

          <div className="navbar-brand">
            <NavLink to="/">
              <img
                src="https://i.postimg.cc/cgpM4bK2/logo-1.png"
                alt="logo-1"
              />
            </NavLink>
          </div>
        </div>
      </header>
    </>
  );
};
