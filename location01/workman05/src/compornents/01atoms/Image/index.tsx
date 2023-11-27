import React, { FC } from "react";
import { SImage } from "./style";

type RegularImageProps = React.ComponentPropsWithoutRef<"img">;

const Image: FC<RegularImageProps> = ({ ...other }) => {
  return <SImage {...other} />;
};

export default Image;
