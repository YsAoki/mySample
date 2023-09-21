import React, { FC, useEffect, useState } from "react";
import axios from "axios";
// import { useSelector } from 'redux-tool';
import { ShopProps } from "../../../types/types";
import CardBox from "../../03organisms/CardBox";
import ViewProductsLists from "../../03organisms/ViewProductList";

const TopLayout: FC = () => {
  const [list, setList] = useState<ShopProps[]>([]);
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

  return (
    <>
      <CardBox productList={list} />
      <ViewProductsLists productList={list} />
    </>
  );
};

export default TopLayout;
