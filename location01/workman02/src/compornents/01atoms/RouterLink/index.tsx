import React, { FC } from "react";
import { ChildrenProps } from "../../../types/types";
import { LinkProps } from "react-router-dom";
import { SRouterLink } from "./style";

const RouterLink: FC<ChildrenProps & LinkProps> = ({
  to,
  children,
  ...other
}) => {
  return (
    <SRouterLink to={to} {...other}>
      {children}
    </SRouterLink>
  );
};

export default RouterLink;
