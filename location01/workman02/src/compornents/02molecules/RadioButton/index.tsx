import React, { FC } from "react";
import RegularInput from "../../01atoms/RegularInput";
import Label from "../../01atoms/Label";
import { ChildrenProps } from "../../../types/types";
import FlexBox from "../../01atoms/FlexBox";

type Props = {
  id: string;
  name: string;
  value: string;
};

const RadioButton: FC<Props & ChildrenProps> = ({
  id,
  name,
  value,
  children,
  ...other
}) => {
  return (
    <>
      <RegularInput id={id} name={name} value={value} type="radio" />
      <Label htmlFor={id} {...other}>
        {children}
      </Label>
    </>
  );
};

export default RadioButton;
