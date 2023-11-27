import React, { FC, PropsWithChildren } from "react";
import { STitleText } from "./style";

type Props = {
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

const TitleText: FC<Props & PropsWithChildren> = ({
  tag,
  children,
  ...other
}) => {
  return (
    <STitleText as={tag} {...other}>
      {children}
    </STitleText>
  );
};

export default TitleText;
