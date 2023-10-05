import React, { FC, useEffect, useState } from "react";
import axios from "axios";
// import { useSelector } from 'redux-tool';
import { ShopProps } from "../../../types/types";
import CardBox from "../../03organisms/CardBox";
import ViewProductsLists from "../../03organisms/ViewProductList";
import { useLocation } from "react-router-dom";
import Header from "../../03organisms/Header";
import FlexBox from "../../01atoms/FlexBox";
import ForFixedBox from "../../02molecules/ForFixedBox";
import SVGComponent from "../../../img/SVGComponent";
import RadioButton from "../../01atoms/RadioButton";

const TopLayout: FC = () => {
  const [list, setList] = useState<ShopProps[]>([]);

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

  const [selectedValue, setSelectedValue] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <>
      <Header />
      <ForFixedBox>
      <div>
      <RadioButton
        name="example"
        id="option1"
        value="option1"
        onChange={handleChange}
        checked={selectedValue === 'option1'}
      >
        Option 1
      </RadioButton>
      <RadioButton
        name="example"
        id="option2"
        value="option2"
        onChange={handleChange}
        checked={selectedValue === 'option2'}
      >
        Option 2
      </RadioButton>
    </div>
        <FlexBox>
          <CardBox productList={list} />
        </FlexBox>
      </ForFixedBox>
    </>
  );
};

export default TopLayout;
