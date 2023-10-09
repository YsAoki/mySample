import React, { FC } from "react";
import { ChildrenProps } from "../../../types/types";
import { NavLinkProps } from "react-router-dom";
import { SNavLink } from "./style";

const NavLink: FC<NavLinkProps & ChildrenProps> = ({ children, ...other }) => {
  return <SNavLink {...other}>{children}</SNavLink>;
};

export default NavLink;
