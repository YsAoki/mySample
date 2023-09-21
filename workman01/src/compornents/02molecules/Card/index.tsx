import React, { FC } from "react";
import { SCard } from "./style";
import TitleText from "../../atoms/TitleText";
import { ShopProps } from "../../../types/types";
import RegularText from "../../atoms/RegularText";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { addSelectedProductsId } from "../../../store/selectedProductsSlice";

const Card: FC<ShopProps> = ({ id, name, price, ...other }) => {

  const dispatch = useDispatch();

  const selectedProductsId = useSelector(
    (state: RootState) => state.selectedProducts.id
  );

  const cardClickEvent = () => {
    dispatch(addSelectedProductsId(id));
    alert(id)
  };

  return (
    <SCard onClick={cardClickEvent} className={id === selectedProductsId ? "active" : ""} {...other}>
      <TitleText tag="h3">{name}</TitleText>
      <RegularText>{price}</RegularText>
    </SCard>
  );
};

export default Card;
