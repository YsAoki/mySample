import React, { FC } from "react";
import { SBox } from "./style";
import { ChildrenProps, TagProps } from "../../../types/types";

const Box: FC<ChildrenProps & TagProps> = ({ tag, children, ...other }) => {
  return (
    <SBox as={tag} {...other}>
      {children}
    </SBox>
  );
};

export default Box;
