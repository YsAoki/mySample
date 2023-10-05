import React, { FC } from "react";
import { SCard } from "./style";
import TitleText from "../../01atoms/TitleText";
import { ShopProps } from "../../../types/types";
import RegularText from "../../01atoms/RegularText";
import { useNavigate } from "react-router-dom";

const Card: FC<ShopProps> = ({ id, name, price, ...other }) => {

  const navigate = useNavigate();

  const cardClickEvent = () => {
    navigate(`${id}`);
  };

  return (
    <SCard onClick={cardClickEvent} {...other}>
      <TitleText tag="h3">{name}</TitleText>
      <RegularText>{price}</RegularText>
    </SCard>
  );
};

export default Card;
