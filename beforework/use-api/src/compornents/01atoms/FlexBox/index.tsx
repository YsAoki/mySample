import React, { FC } from "react";
import { styled } from "styled-components";

type props = {
  children: React.ReactNode;
};

type StyleProps = {
  flexDirection?: string,
  justifyContent?: string,
  alignItems?: string,
  padding?: string,
  margin?: string,
};

const FlexBox: FC<props & StyleProps> = ({ children, ...other }) => {
  return <SFlexBox {...other}>{children}</SFlexBox>;
};

const SFlexBox = styled.div<StyleProps>`
  flex-direction: ${({ flexDirection }) => flexDirection};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
`;

export default FlexBox;
