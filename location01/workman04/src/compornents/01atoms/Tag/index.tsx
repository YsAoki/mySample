import React, { FC } from "react";
import { STag } from "./style";
import { ChildrenProps } from "../../../types/types";

const Tag: FC<ChildrenProps> = ({ children, ...other }) => {
  return <STag {...other}>{children}</STag>;
};

export default Tag;
