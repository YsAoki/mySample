// CardBox.tsx
import React, { FC } from "react";
import { SButton, SCardBox, SSButton } from "./style";
import Card from "../../02molecules/Card";
import { ProductsList } from "../../../types/types";
import { Button } from "@mui/material";

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
