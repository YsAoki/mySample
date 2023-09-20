import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Login";
import Top from "../Top";

const ReactRouter = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Top />} />
    </Routes>
  );
};

export default ReactRouter;
