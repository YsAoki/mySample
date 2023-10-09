import React, { FC, useEffect, useState } from "react";
import TopLayout from "../../04templates/TopLayout";
import { Product } from "../../../types/types";
import axios from "axios";

const Top: FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const url = "https://jsonplaceholder.typicode.com/posts";

  const getDataEvent = () => {
    axios
      .get(url)
      .then((res) => setProducts(res.data))
      .catch((err) => {
        alert("通信失敗");
        console.log(err);
      });
  };

  useEffect(() => {
    getDataEvent();
  }, []);

  return (
    <TopLayout products={products} getDataEvent={getDataEvent}></TopLayout>
  );
};

export default Top;
