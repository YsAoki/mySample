import React, { FC } from "react";
import { SInner } from "./style";
import { ChildrenProps } from "../../../types/types";

const Inner: FC<ChildrenProps> = ({ children, ...other }) => {
  return <SInner {...other}>{children}</SInner>;
};

export default Inner;
