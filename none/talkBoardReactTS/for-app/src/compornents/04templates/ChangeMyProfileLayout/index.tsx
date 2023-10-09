import React from "react";
import Header from "../../03organisms/Header";
import MainFlame from "../../01atoms/MainFlame";
import Inner from "../../01atoms/Inner";
import ChangeMyProfile from "../../03organisms/ChangeMyProfile";

const ChangeMyProfileLayout = () => {
  return (
    <>
      <Header />
      <MainFlame padding="40px">
        <Inner width="500px">
          <ChangeMyProfile />
        </Inner>
      </MainFlame>
    </>
  );
};

export default ChangeMyProfileLayout;
