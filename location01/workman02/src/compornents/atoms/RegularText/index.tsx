import React, { FC } from "react";
import { ChildrenProps, TagProps } from "../../../types/types";
import { SRegularText } from "./style";

const RegularText: FC<TagProps & ChildrenProps> = ({
  tag,
  children,
  ...other
}) => {
  return (
    <SRegularText as={tag} {...other}>
      {children}
    </SRegularText>
  );
};

export default RegularText;
