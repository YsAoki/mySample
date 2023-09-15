import React, { ComponentProps, FC } from "react";
import { StyleButton } from "./style";

type Props = {
  children: React.ReactNode;
};

type StandardButton = Omit<ComponentProps<"button">, "ref" | "key">;

const RegisterLoginButton: FC<Props & StandardButton> = ({ children }) => {
  return <StyleButton>{children}</StyleButton>;
};

export default RegisterLoginButton;
