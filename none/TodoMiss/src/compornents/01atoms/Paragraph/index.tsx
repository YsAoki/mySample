import React, { FC } from "react";
import { SParagraph } from "./style";
import { AllStyleProps, ChildrenProps } from "../../../types";

type RegularParagraph = React.ComponentPropsWithoutRef<"p">;

export type ThisStyleProps = Pick<AllStyleProps, "color">;

const Paragraph: FC<RegularParagraph & ThisStyleProps & ChildrenProps> = ({
  children,
  ...other
}) => {
  return <SParagraph {...other}>{children}</SParagraph>;
};

export default Paragraph;
