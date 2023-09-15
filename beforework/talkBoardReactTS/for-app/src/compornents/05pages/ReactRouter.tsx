import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Top from "./Top";
import LoginAndRegister from "./LoginAndRegister";
import ChangeMyProfile from "./ChangeMyProfile";

const ReactRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Top />} />
        <Route path={"login-and-register"} element={<LoginAndRegister />} />
        <Route path={"change-my-profile"} element={<ChangeMyProfile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default ReactRouter;
