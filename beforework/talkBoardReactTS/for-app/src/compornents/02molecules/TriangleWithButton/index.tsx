import React, { FC } from "react";
import FlexBox from "../../01atoms/FlexBox";
import Triangle from "../../01atoms/Triangle";
import { StyleButton } from "./style";

type Props = {
  children: React.ReactNode;
};

type StandardButton = Omit<React.ComponentProps<"button">, "ref" | "key">;

const TriangleWithButton: FC<Props & StandardButton> = ({
  children,
  ...prop
}) => {
  return (
    <FlexBox>
      <Triangle />
      <StyleButton {...prop}>{children}</StyleButton>
    </FlexBox>
  );
};

export default TriangleWithButton;
