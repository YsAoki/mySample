import React, { FC, ChangeEvent } from "react";
import { CheckBoxLabel, CheckBoxInput, CustomCheckBox } from "./style";
import { ChildrenProps } from "../../../types/types";

type Props = {
  name: string;
  id: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
  children: React.ReactNode;
};

const CheckBox: React.FC<Props> = ({
  name,
  id,
  value,
  onChange,
  checked,
  children,
}) => {
  return (
    <CheckBoxLabel htmlFor={id}>
      <CheckBoxInput
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        checked={checked}
      />
      <CustomCheckBox />
      {children}
    </CheckBoxLabel>
  );
};

export default CheckBox;
