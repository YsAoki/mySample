import React, { FC } from "react";
import { ChildrenProps } from "../../../types/types";
import { STitleText } from "./style";

type Props = {
  tag: string;
};

const TitleText: FC<Props & ChildrenProps> = ({ tag, children, ...other }) => {
  return (
    <STitleText as={tag} {...other}>
      {children}
    </STitleText>
  );
};

export default TitleText;
