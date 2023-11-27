import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Login";
import Checker from "../Checker";
import Checker2 from "../Checker2";

const ReactRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/checker/" element={<Checker />} />
      <Route path="/checker2/" element={<Checker2 />} />
    </Routes>
  );
};

export default ReactRouter;
