import React from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

const Checker = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id'); // クエリパラメータからidを取得

  const onClickNav = () => {
    navigate(`/checker2/?id=${id}`);
  };
  return (
    <>
      <div>Checker</div>
      <p>{id}</p>
      <button onClick={onClickNav}>checker2へ</button>
    </>
  );
};

export default Checker;
