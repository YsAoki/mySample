import React, { FC } from "react";
import { SCard } from "./style";
import TitleText from "../../atoms/TitleText";
import { ShopProps } from "../../../types/types";
import RegularText from "../../atoms/RegularText";

const Card: FC<ShopProps> = ({ name, price, detail, ...other }) => {
  return (
    <SCard {...other}>
      <TitleText tag="h3">{name}</TitleText>
      <RegularText>{price}</RegularText>
    </SCard>
  );
};

export default Card;
