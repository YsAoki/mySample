import React, { FC } from "react";
import Header from "../../03organisms/Header";
import { ProductGetFunction, Product, ProductsProps } from "../../../types/types";
import { SBox, SInner, STopLayout } from "./style";
import FixedBox from "../../02molecules/FixedBox";
import ProductsListBox from "../../03organisms/ProductsListBox";


const TopLayout: FC<ProductsProps> = ({products, getDataEvent}) => {
  return (
    <STopLayout>
      <Header />
      <FixedBox tag="main">
        <SInner>
          <SBox>はみ出し検知をCSS</SBox>
          <ProductsListBox products={products} getDataEvent={getDataEvent}/>
        </SInner>
      </FixedBox>
    </STopLayout>
  );
};

export default TopLayout;
