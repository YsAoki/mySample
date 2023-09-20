import React, { FC } from "react";
import { SRegularInput } from "./style";

type Props = {
  id?: string;
};

type RegularInputProps = React.ComponentPropsWithoutRef<"input">;

const RegularInput: FC<Props & RegularInputProps> = ({ id, ...other }) => {
  return <SRegularInput id={id} {...other} />;
};

export default RegularInput;
