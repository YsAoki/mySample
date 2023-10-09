import React, { useState } from "react";
import { styled } from "styled-components";

const AddForm = () => {
  // state管理する入力フォームのイベント
  const [inputName, setInputName] = useState("");
  const [inputTitle, setInputTitle] = useState("");
  const [inputBody, setInputBody] = useState("");
  const nameInputOnchangeEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputName(e.target.value);
  };
  const titleInputOnChangeEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputTitle(e.target.value);
  };
  const bodyInputOnchangeEvent = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setInputBody(e.target.value);
  };
  const onSubmitEvent = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const addData = {
      name: inputName,
      title: inputTitle,
      body: inputBody,
    };
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <SForm onSubmit={onSubmitEvent}>
      <p>name</p>
      <input type="text" onChange={nameInputOnchangeEvent} />
      <input type="text" onChange={titleInputOnChangeEvent} />
      <p>comment</p>
      <textarea onChange={bodyInputOnchangeEvent} />
      <SButton>送信</SButton>
    </SForm>
  );
};

const SForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  text-align: center;
  border: 3px solid blue;
  padding: 10px;
  border-radius: 5px;
  margin: 0 0 15px;
`;

const SButton = styled.button`
  cursor: pointer;
`;

export default AddForm;
