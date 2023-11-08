import React, { FC } from "react";
import { SHoverButton } from "./style";
import { ChildrenProps } from "../../../types/types";

type Props = {
  children: ChildrenProps;
};

type RegularButtonProps = React.ComponentPropsWithoutRef<"button">;

const HoverButton: FC<Props & RegularButtonProps> = ({
  children,
  ...other
}) => {
  return <SHoverButton {...other}>{children}</SHoverButton>;
};

export default HoverButton;
