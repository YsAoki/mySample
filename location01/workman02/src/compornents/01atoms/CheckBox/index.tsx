import React, { FC, ChangeEvent } from "react";
import { CheckboxInput, CustomCheckbox, CheckboxLabel } from "./style";
import { ChildrenProps } from "../../../types/types";

type Props = {
  name: string;
  id: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
};

const CheckboxButton: FC<Props & ChildrenProps> = ({ name, id, value, onChange, checked, children }) => {
  return (
    <CheckboxLabel htmlFor={id}>
      <CheckboxInput
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        checked={checked}
      />
      <CustomCheckbox />
      {children}
    </CheckboxLabel>
  );
};

export default CheckboxButton;