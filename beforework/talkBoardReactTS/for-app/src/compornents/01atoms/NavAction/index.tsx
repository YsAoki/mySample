import React, { FC } from "react";
import { StyleNavAction } from "./style";
type Props = {
  children: React.ReactNode;
  to: string;
  onClick?: () => void,
};

export type StyleProps = {
  margin?: string;
  color?: string;
  fontSize?: string;
  textDecoration?: string;
}

type StandardButton = Omit<React.ComponentProps<"button">, "ref" | "key">;

const NavAction: FC<Props & StyleProps & StandardButton> = ({ children, to, onClick, ...prop }) => {
  return (
    <StyleNavAction onClick={() => {}} {...prop}>
      {children}
    </StyleNavAction>
  );
};

export default NavAction;
