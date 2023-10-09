import React, { FC } from "react";
import { TypesTextStyleProps } from "../../../types/types";
import { StyleText } from "./style";

type Props = {
  tag?: keyof JSX.IntrinsicElements;
  children?: React.ReactNode;
};

const RegularText: FC<TypesTextStyleProps & Props> = ({
  tag,
  children,
  ...prop
}) => {
  return (
    <StyleText {...prop} as={tag}>
      {children}
    </StyleText>
  );
};

export default RegularText;
