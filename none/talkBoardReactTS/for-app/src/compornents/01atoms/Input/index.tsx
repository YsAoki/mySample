import React, { FC } from "react";
import { StyleInput } from "./style";
import { TypeInputStyleProps } from "../../../types/types";

type StandardInput = Omit<React.ComponentProps<"input">, "ref" | "key">;

const Input: FC<StandardInput & TypeInputStyleProps> = (props) => {
  return <StyleInput {...props} />;
};

export default Input;
