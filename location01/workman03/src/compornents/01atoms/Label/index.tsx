import React, { FC } from "react";
import { SLabel } from "./style";
import { ChildrenProps } from "../../../types/types";

type RegularLabelProps = React.ComponentPropsWithoutRef<"label">;

const Label: FC<RegularLabelProps & ChildrenProps> = ({
  children,
  ...other
}) => {
  return <SLabel {...other}>{children}</SLabel>;
};

export default Label;
