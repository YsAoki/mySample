import React, { FC, useEffect, useState } from "react";
import Header from "../../03organisms/Header";
import ForFixedBox from "../../02molecules/ForFixedBox";
import { ProductsList } from "../../../types/types";
import CardBox from "../../03organisms/CardBox";

type Props = {
  productsList: ProductsList[];
};

const TopLayout: FC<Props> = ({ productsList }) => {
  return (
    <>
      <Header />
      <ForFixedBox>
        {productsList && <CardBox productsList={productsList} />}
      </ForFixedBox>
    </>
  );
};

export default TopLayout;

// const convertNumbersToNames = (numbers) => {
//   const nameMapping = {
//     1: '青木',
//     2: '山田',
//     3: '田中'
//   };

//   return numbers.map((number) => nameMapping[number] || '不明');
// };

// console.log(convertNumbersToNames([1, 2, 3]));  // 出力: ["青木", "山田", "田中"]
// console.log(convertNumbersToNames([1, 3]));    // 出力: ["青木", "田中"]
// console.log(convertNumbersToNames([4, 2]));    // 出力: ["不明", "山田"]


// const filteredItems = items.filter(item => {
//   if (selectedOptions1.length === 0 && selectedOptions2.length === 0 && selectedOptions3.length === 0) {
//     // 何も選択されていない場合、全てのアイテムを返す
//     return true;
//   }
  
//   // それぞれの選択オプションに基づいてフィルタリング
//   const match1 = selectedOptions1.length === 0 || selectedOptions1.includes(item.someProperty1);
//   const match2 = selectedOptions2.length === 0 || selectedOptions2.includes(item.someProperty2);
//   const match3 = selectedOptions3.length === 0 || selectedOptions3.includes(item.someProperty3);
  
//   // すべての条件がマッチした場合にtrueを返す
//   return match1 && match2 && match3;
// });