import React from "react";
import { Route, Routes } from "react-router-dom";
import Top from "../Top";

const ReactRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Top />} />
      {/* <Route path="/" element={} /> */}
      {/* <Route path="/" element={} /> */}
    </Routes>
  );
};

export default ReactRouter;
