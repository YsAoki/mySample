// CardBox.tsx
import React, { FC } from "react";
import { ShopProps } from "../../../types/types";
import { SCardBox } from "./style";
import Card from "../../02molecules/Card";
import { RootState } from "../../../store/store";
import { useSelector } from "react-redux";

type Props = {
  productList: ShopProps[];
};

const CardBox: FC<Props> = ({ productList }) => {
  return (
    <SCardBox>
      {productList.map((val) => (
        <Card key={val.id} id={val.id} name={val.name} price={val.price} />
      ))}
    </SCardBox>
  );
};

export default CardBox;
