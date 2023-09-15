import React, { FC } from "react";
import styled from "styled-components";

type props = {
  children: React.ReactNode;
};

type styleProps = {
  bgColor?: string;
};

type button = React.ComponentPropsWithoutRef<"button">;

const RegularButton: FC<button & props & styleProps> = ({
  children,
  ...other
}) => {
  return <SButton {...other}>{children}</SButton>;
};

const SButton = styled("button").withConfig({
  shouldForwardProp: (other) => !["bgColor"].includes(other)
})<styleProps>`
  background-color: ${({ bgColor }) => bgColor};
`;

export default RegularButton;
