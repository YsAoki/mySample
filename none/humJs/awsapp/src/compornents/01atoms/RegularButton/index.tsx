import React, { FC } from "react";
import { ChildrenProps } from "../../../types";
import { SRegularButton } from "./style";

type RegularButton = React.ComponentPropsWithoutRef<"button">;

const RegularButton: FC<ChildrenProps> = ({ children, ...other }) => {
  return <SRegularButton {...other}>{children}</SRegularButton>
};

export default RegularButton;
