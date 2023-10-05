import React, { FC } from "react";
import { RadioInput, CustomRadio, RadioLabel } from "./style";
import { ChildrenProps } from "../../../types/types";

type Props = {
  name?: string;
  id?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean;
};

const RadioButton: FC<Props & ChildrenProps> = ({
  name,
  id,
  value,
  onChange,
  checked,
  children,
}) => {
  return (
    <RadioLabel htmlFor={id}>
      <RadioInput
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        checked={checked}
      />
      <CustomRadio />
      {children}
    </RadioLabel>
  );
};

export default RadioButton;
