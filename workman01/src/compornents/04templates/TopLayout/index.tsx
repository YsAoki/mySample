import React, { FC, useEffect, useState } from "react";
import axios from "axios";
// import { useSelector } from 'redux-tool'; 
import { ShopProps } from "../../../types/types";
import CardBox from "../../03organisms/CardBox";

const TopLayout: FC = () => {
  const [List, setList] = useState<ShopProps[]>([]);
  // const selectedId = useSelector(state => state.selectedId); // Reduxから選択されたIDを取得

  useEffect(() => {
    const url = "http://localhost:3000/products";
    axios
      .get(url)
      .then((response) => {
        setList(response.data);
      })
      .catch((error) => {
        console.error("データの取得に失敗:", error);
      });
  }, []);

  // 選択されたIDと一致する商品をフィルタリング
  // const selectedProduct = List.filter(product => product.id === selectedId)[0];

  return (
    <>
      <CardBox productList={List} />
      <div>
        {/* {selectedProduct ? (
          <>
            <h2>{selectedProduct.name}</h2>
            <p>{selectedProduct.price}</p>
          </>
        ) : (
          "商品が選択されていません"
        )} */}
      </div>
    </>
  );
};

export default TopLayout;