import React, { FC } from "react";
import { ChildrenProps, TagProps } from "../../../types/types";
import { SFlexBox } from "./style";

const FlexBox: FC<TagProps & ChildrenProps> = ({ tag, children, ...other }) => {
  return <SFlexBox {...other}>{children}</SFlexBox>;
};

export default FlexBox;
