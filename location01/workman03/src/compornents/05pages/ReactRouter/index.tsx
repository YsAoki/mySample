import React from "react";
import { Route, Routes } from "react-router-dom";
import Top from "../Top";

const ReactRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Top />} />
    </Routes>
  );
};

export default ReactRouter;
