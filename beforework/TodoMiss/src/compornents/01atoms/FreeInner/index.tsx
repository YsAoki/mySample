import React, { FC } from "react";
import { ChildrenProps } from "../../../types";

const Inner: FC<ChildrenProps> = ({ children, ...other }) => {
  return <div {...other}>{children}</div>;
};

export default Inner;
