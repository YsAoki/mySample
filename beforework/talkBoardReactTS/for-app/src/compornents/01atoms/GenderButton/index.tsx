import React, { FC } from "react";
import { StyleGenderButton } from "./style";

// 状態管理の選択項目に応じてbooleanを渡すことで背景色の変更を行う。

type Props = {
  children: React.ReactNode;
};

const GenderButton: FC<Props> = ({ children }) => {
  return <StyleGenderButton>{children}</StyleGenderButton>;
};

export default GenderButton;
