import React, { useState } from "react";
import { NavLink, useRouteError } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import "./ErrorMsg.css";

export const EorrorMsg = ({ data }) => {
  const error = useRouteError();
  // console.log(error);

  return (
    <>
      <section className="section">
        <div className="container">
          <div className="grid grid-col-two outline-decoration">
            <div className="container-sub">
              <h1 className="h1"> {error.status}</h1>
              <h2 className="h2"> {error.data} </h2>
              <p className="peraboy">Oops! An error occurred </p>
              <NavLink to="/about" className="btn-new">
                <FaArrowLeftLong />
                Go Back
              </NavLink>
            </div>
            <div className="flex-end">
              <img
                src="https://i.postimg.cc/xCSSJfDb/404-error-page.webp"
                alt="404-error-page"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
