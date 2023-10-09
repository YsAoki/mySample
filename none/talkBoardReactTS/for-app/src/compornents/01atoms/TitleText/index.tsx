import React, { FC } from "react";
import { StyleText } from "./style";
import { TypesTextStyleProps } from "../../../types/types";

type Props = {
  children?: React.ReactNode;
  tag: keyof JSX.IntrinsicElements;
};

const TitleText: FC<Props & TypesTextStyleProps> = ({
  tag,
  children,
  ...prop
}) => {
  return (
    <StyleText as={tag} {...prop}>
      {children}
    </StyleText>
  );
};

export default TitleText;
