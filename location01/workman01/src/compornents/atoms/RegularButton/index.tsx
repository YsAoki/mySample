import React, { FC } from "react";
import { SRegularButton } from "./style";
import { ChildrenProps } from "../../../types/types";

const RegularButton: FC<ChildrenProps> = ({ children, ...other }) => {
  return <SRegularButton {...other}>{children}</SRegularButton>;
};

export default RegularButton;
