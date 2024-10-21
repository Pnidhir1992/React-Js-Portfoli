import React from "react";
import { EorrorMsg } from "../components/layout/UI/EorrorMsg";

export const Error = ({ data }) => {
  return (
    <>
      <EorrorMsg data={data} />
    </>
  );
};
