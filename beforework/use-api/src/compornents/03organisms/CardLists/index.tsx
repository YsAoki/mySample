import React, { FC, useEffect, useState } from "react";
import FlexBox from "../../01atoms/FlexBox";
import Card from "../../02molecules/Card";

type TextProps = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

// state管理してデータの取得を行っての値の引き渡し。で対応すること。
const CardLists: FC = () => {
  // getするjsonデータをstate
  const [getData, setGetData] = useState<TextProps[]>([]);

  // getするjsonデータURL
  const jsonUrl = "https://jsonplaceholder.typicode.com/posts";

  const fetchData = async () => {
    try {
      const response = await fetch(jsonUrl, { method: "GET" });
      // 渡してげる必要がある。　データ。　POSTメソッド
      const data = await response.json();
      setGetData(data);
    } catch (error) {
      alert('読み込みに失敗しました');
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onClickSortLegacy = () => {
    const sortData = [...getData].sort((a, b) => a.userId - b.userId);
    setGetData(sortData);
  };

  const onClickSortNew = () => {
    const sortData = [...getData].sort((a, b) => b.userId - a.userId);
    setGetData(sortData);
  };

  return (
    <>
      <button onClick={onClickSortLegacy}>古い順</button>
      <button onClick={onClickSortNew}>新しい順</button>
      <FlexBox flexDirection="column">
        {getData.map((data) => (
          <Card
            key={data.id}
            userId={data.userId}
            id={data.id}
            title={data.title}
            body={data.body}
          />
        ))}
      </FlexBox>
    </>
  );
};

export default CardLists;
