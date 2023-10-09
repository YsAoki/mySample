import React, { FC } from "react";
import { AllStyleProps, ChildrenProps } from "../../../types";
import { STitleText } from "./style";

type Props = {
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

type ThisStyleProps = Pick<AllStyleProps, "color">;

const TitleText: FC<Props & ThisStyleProps & ChildrenProps> = ({
  children,
  tag,
  ...other
}) => {
  return (
    <STitleText as={tag} {...other}>
      {children}
    </STitleText>
  );
};

export default TitleText;
