import React, { FC } from "react";
import { StyleButton } from "./style";

type Props = {
  children: React.ReactNode;
};

type StandardButton = Omit<React.ComponentProps<"button">, "ref" | "key">;

const Button: FC<StandardButton & Props> = ({ children, ...prop }) => {
  return <StyleButton {...prop}>{children}</StyleButton>;
};

export default Button;