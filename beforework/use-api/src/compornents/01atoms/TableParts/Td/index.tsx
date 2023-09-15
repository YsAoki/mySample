import React, { FC } from "react";
import { oftenType, sizeStyleProps } from "../../../../types/myTypes";
import { styled } from "styled-components";

// tdコンポーネントは、受け取った情報を表示するもの

const Td: FC<oftenType & sizeStyleProps> = ({ children, ...other }) => {
  return <STd>{children}</STd>;
};

const STd = styled.td<sizeStyleProps>`
  border: 1px solid black;
  text-align: center;
  width: ${({ width }) => width};
  line-height: ${({ lineHeight }) => lineHeight || "20px"};
  font-size: ${({ fontSize }) => fontSize || "15px"};
`;

export default Td;
