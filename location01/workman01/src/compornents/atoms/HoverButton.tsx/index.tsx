import React, { FC } from "react";
import { SHoverButton } from "./style";
import { ChildrenProps } from "../../../types/types";

const HoverButton: FC<ChildrenProps> = ({ children, ...other }) => {
  return <SHoverButton {...other}>{children}</SHoverButton>;
};

export default HoverButton;
