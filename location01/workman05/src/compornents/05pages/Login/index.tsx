import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [inputId, setInputId] = useState("");
  const onChangeIdEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputId(e.target.value);
  };

  const onClickEvent = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // デフォルトのフォーム送信を防ぐ
    navigate(`/checker/?id=${inputId}`);
  };

  return (
    <form onSubmit={onClickEvent}>
      <h1>ログインページ</h1>
      <input type="text" onChange={onChangeIdEvent} />
      <button type="submit">ログインする</button>
    </form>
  );
};

export default Login;
