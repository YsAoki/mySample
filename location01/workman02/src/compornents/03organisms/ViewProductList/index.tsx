import React, { FC } from "react";
import { ShopProps } from "../../../types/types";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { useNavigate } from "react-router-dom";

type Props = {
  productList: ShopProps[];
};

const ViewProductsLists: FC<Props> = ({ productList }) => {
  const navigate = useNavigate();

  const selectedId = useSelector(
    (state: RootState) => state.selectedProducts.id
  );

  const onClickEvent = () => {
    navigate("./login");
  };

  const filterProducts = productList.filter((val) => val.id === selectedId)[0];
  return (
    <>
      {filterProducts ? (
        <div>
          <p>商品名: {filterProducts.name}</p>
          <p>価格: {filterProducts.price}</p>
          <p>詳細: {filterProducts.detail}</p>
          <button onClick={onClickEvent}>
            ここでページ遷移して戻るとエラーになる
          </button>
        </div>
      ) : (
        <p>選択された商品はありません。</p>
      )}
    </>
  );
};

export default ViewProductsLists;
