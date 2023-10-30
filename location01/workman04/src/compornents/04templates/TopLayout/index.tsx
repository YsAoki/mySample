import React, { FC, useEffect, useState } from "react";
import Header from "../../03organisms/Header";
import ForFixedBox from "../../02molecules/ForFixedBox";
import { ProductsList } from "../../../types/types";
import CardBox from "../../03organisms/CardBox";
import SearchForm from "../../03organisms/SearchForm";
import RegularButton from "../../01atoms/RegularButton";
import { useDispatch } from "react-redux";
import { openSearchModal } from "../../../store/viewModeSlice";
import TableArea from "../../03organisms/TableArea";

type Props = {
  productsList: ProductsList[];
};

const TopLayout: FC<Props> = ({ productsList }) => {
  const dispatch = useDispatch();

  const openSearchModalEvent = () => {
    dispatch(openSearchModal());
  };

  return (
    <>
      <Header />
      <ForFixedBox>
        <RegularButton onClick={openSearchModalEvent}>
          絞り込み画面を開く
        </RegularButton>
        {productsList && <CardBox productsList={productsList} />}
        {/* <TableArea productsList={productsList} /> */}
      </ForFixedBox>
      <SearchForm />
    </>
  );
};

export default TopLayout;
