import React, { FC } from "react";
import Header from "../../03organisms/Header";
import MainFlame from "../../01atoms/MainFlame";
import { StyleInner } from "./style";
import Register from "../../03organisms/Register";
import Login from "../../03organisms/Login";

const LoginAndRegisterLayout: FC = () => {
  return (
    <>
      <Header />
      <MainFlame padding="40px 0px 48px" backgroundColor="#FFFFFF">
        <StyleInner width="1000px">
          <Login />
          <Register />
        </StyleInner>
      </MainFlame>
    </>
  );
};

export default LoginAndRegisterLayout;
