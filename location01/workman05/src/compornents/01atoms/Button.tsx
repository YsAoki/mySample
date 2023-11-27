import React, { FC } from "react";
import styled from "styled-components";

type Props = {
  children: React.ReactNode;
};

type ButtonProps = React.ComponentPropsWithoutRef<"button">;

const Button: FC<Props> = ({ children, ...other }) => {
  return <SButton {...other}>{children}</SButton>;
};

export default Button;

const SButton = styled.button`
  color: ${({ theme }) => theme.color.mainColor};
  background-color: ${({ theme }) => theme.color.subColor};
`;
