import React, { FC } from "react";
import { SHeader } from "./style";
import { ChildrenProps } from "../../../types";
import MainInner from "../../01atoms/MainInner";

const Header: FC<ChildrenProps> = ({ children }) => {
  return (
    <SHeader>
      <MainInner>{children}</MainInner>
    </SHeader>
  );
};

export default Header;
