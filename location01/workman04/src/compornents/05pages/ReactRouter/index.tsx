import React from "react";
import { Route, Routes } from "react-router-dom";
import Top from "../Top";
import ImageAddPage from "../ImageAddPage";

const ReactRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Top />}>
        <Route path=":id" />
      </Route>
      <Route path="/add" element={<ImageAddPage />}></Route>
    </Routes>
  );
};

export default ReactRouter;
