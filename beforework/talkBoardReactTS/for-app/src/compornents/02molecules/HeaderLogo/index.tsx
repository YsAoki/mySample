import React from "react";
import BlueCircle from "../../01atoms/BlueCircle";
import TitleText from "../../01atoms/TitleText";
import { StyleFlexBox, StyleLink } from "./style";

const HeaderLogo = () => {
  return (
    <StyleLink to={"/"}>
      <StyleFlexBox justifyContent="space-between">
        <BlueCircle />
        <TitleText tag="h1" fontSize="32px">
          予約システムサイト
        </TitleText>
      </StyleFlexBox>
    </StyleLink>
  );
};

export default HeaderLogo;
