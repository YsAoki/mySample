import React, { useEffect, useState } from "react";
import TopLayout from "../../04templates/TopLayout";
import axios from "axios";
import { error } from "console";
import { ProductsList } from "../../../types/types";

const Top = () => {
  const [productsList, setProductsList] = useState<ProductsList[]>([]);

  const getData = () => {
    const url = " http://localhost:3000/products";
    axios
      .get(url)
      .then((res) => {
        setProductsList(res.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getData();
  }, []);

  return <TopLayout productsList={productsList} />;
};

export default Top;
