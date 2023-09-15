import React, { useState } from "react";
import { SForm, SRegularButton } from "./style";
import Paragraph from "../../01atoms/Paragraph";
import RegularInput from "../../01atoms/RegularInput";
import { addTodoList } from "../../../store/todoSlice";
import { Todo } from "../../../store/todoSlice";
import { useDispatch } from "react-redux";

const TodoInputForm = () => {
  const dispatch = useDispatch();

  const [todoInput, setTodoInput] = useState("");
  const onChangeEventTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoInput(e.target.value);
  };

  const [addInput, setAddInput] = useState("");
  const onChangeEventAdd = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddInput(e.target.value);
  };

  const onSubmitEvent = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const addVal: Todo = {
      time: new Date().toISOString(),
      todo: todoInput,
      add: addInput,
      status: false,
    };
    dispatch(addTodoList(addVal));
  };

  return (
    <SForm onSubmit={onSubmitEvent}>
      <Paragraph>todo</Paragraph>
      <RegularInput onChange={onChangeEventTodo} />
      <Paragraph>補足</Paragraph>
      <RegularInput onChange={onChangeEventAdd} />
      <SRegularButton type="submit">追加する</SRegularButton>
    </SForm>
  );
};

export default TodoInputForm;
