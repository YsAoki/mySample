import React, { FC } from "react";
import { SCard } from "./style";
import TitleText from "../../01atoms/TitleText";
import RegularText from "../../01atoms/RegularText";
import { ProductsList } from "../../../types/types";
import Image from "../../01atoms/Image";
import { SRegularText } from "../../01atoms/RegularText/style";
import { convertViewDate } from "../../../hooks/hooks";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { addSelectedProductsId } from "../../../store/selectedProductsSlice";

type Props = {
  productsData: ProductsList;
};

const Card: FC<Props> = ({ productsData, ...other }) => {

  const dispatch = useDispatch();

  const selectedProductId = useSelector((state: RootState) => state.selectedProducts.id);

  const selectCardEvent = () => {
    dispatch(addSelectedProductsId(productsData.id));
  }

  return (
    <SCard onClick={selectCardEvent} {...other} className={productsData.id === selectedProductId? "active": undefined} >
      <TitleText tag="h3" >{productsData.name}</TitleText>
      <RegularText>{productsData.price}</RegularText>
      <Image src={productsData.imageUrl} />
      <SRegularText>
        発売日開始：{convertViewDate(productsData.startDate)}
      </SRegularText>
      <SRegularText>
        発売終了日：{convertViewDate(productsData.endDate)}
      </SRegularText>
    </SCard>
  );
};

export default Card;
