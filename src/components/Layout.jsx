import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Outlet } from "react-router-dom";

export const Layout = ({ data }) => {
  // console.log(data);
  return (
    <>
      <Header />
      <Outlet />
      <Footer data={data} />
    </>
  );
};
