import React, { FC } from "react";
import SVGComponent from "../../../img/SVGComponent";

type Props = {
  count: number;
};

const ConvertNumIcon: FC<Props> = ({ count }) => {
  const icons = Array.from({ length: count }, (_, index) => (
    <SVGComponent key={index} size={22}/>
  ));

  return <div>{icons}</div>;
};

export default ConvertNumIcon;
