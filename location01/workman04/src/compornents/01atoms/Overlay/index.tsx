import React, { FC } from "react";
import { SOverlay } from "./style";
import { ChildrenProps } from "../../../types/types";

type Props = {
  onClick?: () => void;
};

const Overlay: FC<Props & ChildrenProps> = ({ children, onClick, ...other }) => {
  return <SOverlay onClick={onClick} {...other}>{children}</SOverlay>;
};

export default Overlay;
