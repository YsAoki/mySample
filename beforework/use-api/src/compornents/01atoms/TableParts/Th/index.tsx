import React, { FC } from "react";
import { styled } from "styled-components";
import { oftenType, sizeStyleProps } from "../../../../types/myTypes";

// th(見出しのパーツコンポーネント1個単位)

const Th: FC<sizeStyleProps & oftenType> = ({ children, ...other }) => {
  return <STh {...other}>{children}</STh>;
};

const STh = styled.th<sizeStyleProps>`
  border: 1px solid black;
  text-align: center;
  width: ${({ width }) => width};
  line-height: ${({ lineHeight }) => lineHeight};
  font-size: ${({ fontSize }) => fontSize}
`;

export default Th;
