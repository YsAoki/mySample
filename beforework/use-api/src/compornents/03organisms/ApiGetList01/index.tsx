import React, { useEffect, useState } from 'react'
import TableFlame from '../../01atoms/TableParts/TableFlame'
import Th from '../../01atoms/TableParts/Th'
import ReceiveTr from '../../02molecules/ReceiveTh'

export type DataType = {
  userId: number | string,
  id: number,
  title: string,
  body: string,
}

const ApiGetList = () => {

  const [jsonData, setJsonData] = useState<DataType[]>([]);
  const jsonDataUrl = "https://jsonplaceholder.typicode.com/posts";

  const fetchData = async () => {
    try {
      const response = await fetch(jsonDataUrl, { method: "GET" });
      const data = await response.json();
      setJsonData(data);
    } catch (error) {
      alert("通信にエラーが発生しました");
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <TableFlame width='60%'>
      <tr>
        <Th width='10%'>投稿ID</Th>
        <Th width='10%'>NameNum</Th>
        <Th width='20%'>タイトル</Th>
        <Th width='50%'>コメント</Th>
        <Th width='5%'>編集</Th>
        <Th width='5%'>削除</Th>
      </tr>
      {jsonData.map((data) => (<ReceiveTr key={data.id} userId={data.userId} id={data.id} title={data.title} body={data.body}/>))}
    </TableFlame>
  )
}

export default ApiGetList;