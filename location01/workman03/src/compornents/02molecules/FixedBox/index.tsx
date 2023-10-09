import React, { FC } from "react";
import { ChildrenProps, TagProps } from "../../../types/types";
import { SFixedBox } from "./style";

const FixedBox: FC<ChildrenProps & TagProps> = ({
  children,
  tag,
  ...other
}) => {
  return <SFixedBox as={tag} {...other}>{children}</SFixedBox>;
};

export default FixedBox;
