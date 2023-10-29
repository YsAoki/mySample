import React from "react";
import { Route, Routes } from "react-router-dom";
import Top from "../Top";
import SelectedDetails from "../SelectedDetails";

const ReactRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Top />}>
        <Route path=":id" />
      </Route>
      <Route path="/selected-details" element={<SelectedDetails />} />
    </Routes>
  );
};

export default ReactRouter;
