import React, { FC } from "react";
import { SRegularButton } from "./style";
import { ChildrenProps } from "../../../types/types";

type RegularButtonProps = React.ComponentPropsWithoutRef<"button">;

const RegularButton: FC<RegularButtonProps & ChildrenProps> = ({
  children,
  ...other
}) => {
  return (
    <SRegularButton type="button" {...other}>
      {children}
    </SRegularButton>
  );
};

export default RegularButton;
