import React, { FC } from "react";
import { styled } from "styled-components";
import { oftenType, sizeStyleProps } from "../../../../types/myTypes";

// typesディレクトリ内からwidth: stringの抜き出しを行っている。練習用として作ってみた。この形式が実際に使われているのかは少し疑問。
// type forTableType = Extract<sizeStyleProps, "width">;
// 実行したらエラーになったため一旦保留。

const TableFlame: FC<oftenType & sizeStyleProps> = ({ children, ...other }) => {
  return <STableFlame {...other}>{children}</STableFlame>;
};

const STableFlame = styled.table<sizeStyleProps>`
  border: 3px solid blue;
  padding: 5px;
  width: ${({ width }) => width || "100%"};
`;

export default TableFlame;
