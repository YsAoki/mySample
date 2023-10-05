import React from "react";
import Header from "../../03organisms/Header";
import ForFixedBox from "../../02molecules/ForFixedBox";
import Inner from "../../01atoms/Inner";
import LoginForm from "../../03organisms/LoginForm";

const LoginLayout = () => {
  return (
    <>
      <Header />
      <ForFixedBox>
        <Inner>
          <LoginForm />
        </Inner>
      </ForFixedBox>
    </>
  );
};

export default LoginLayout;
