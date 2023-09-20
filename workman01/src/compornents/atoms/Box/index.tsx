import React, { FC } from "react";
import { ChildrenProps, TagProps } from "../../../types/types";
import { SBox } from "./style";

const Box: FC<TagProps & ChildrenProps> = ({ tag, children,...other }) => {
  return <SBox as={tag} {...other}>{children}</SBox>;
};

export default Box;
