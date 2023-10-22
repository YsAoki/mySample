// CardBox.tsx
import React, { FC } from "react";
import { SCardBox } from "./style";
import Card from "../../02molecules/Card";
import { ProductsList } from "../../../types/types";

type Props = {
  productsList: ProductsList[];
};

const CardBox: FC<Props> = ({ productsList }) => {
  return (
    <SCardBox>
      {productsList.map((val) => (
        <Card productsData={val} key={val.id} />
      ))}
    </SCardBox>
  );
};

export default CardBox;
