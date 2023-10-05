import React, { FC } from "react";
import { ShopProps } from "../../../types/types";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { useNavigate } from "react-router-dom";
import HoverButton from "../../01atoms/HoverButton.tsx";

type Props = {
  productList: ShopProps[];
};

const ViewProductsLists: FC<Props> = ({ productList }) => {
  return (
    <>
      <p>商品画像の詳細。</p>
    </>
  );
};

export default ViewProductsLists;
