import React, { FC } from "react";
import { SHoverButton } from "./style";
import { ChildrenProps } from "../../../types/types";

type RegularButtonProps = React.ComponentPropsWithoutRef<"button">;

const HoverButton: FC<RegularButtonProps & ChildrenProps> = ({
  children,
  ...other
}) => {
  return <SHoverButton {...other}>{children}</SHoverButton>;
};

export default HoverButton;
