import React, { FC } from "react";
import Triangle from "../../01atoms/Triangle";
import PageLink from "../../01atoms/PageLink";
import { StyleFlexBox } from "./style";

type Props = {
  children: React.ReactNode;
  to: string;
};

export type StyleProps = {
  marginRight?: string;
};

const TriangleWithLink: FC<Props & StyleProps> = ({
  children,
  to,
  ...props
}) => {
  return (
    <StyleFlexBox {...props}>
      <Triangle />
      <PageLink to={to}>{children}</PageLink>
    </StyleFlexBox>
  );
};

export default TriangleWithLink;
