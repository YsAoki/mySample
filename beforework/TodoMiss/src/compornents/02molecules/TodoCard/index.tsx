import React, { FC } from "react";
import { SInner, SRegularButton, STodoCard } from "./style";
import Paragraph from "../../01atoms/Paragraph";
import { Todo } from "../../../store/todoSlice";

const TodoCard: FC<Todo> = ({ status, time, todo, add }) => {
  return (
    <STodoCard>
      <Paragraph>{time}</Paragraph>
      <Paragraph>{todo}</Paragraph>
      <Paragraph>{add}</Paragraph>
      {status ? (
        <SInner>
          <SRegularButton>戻す</SRegularButton>
          <SRegularButton>削除</SRegularButton>
        </SInner>
      ) : (
        <SInner>
          <SRegularButton>完了</SRegularButton>
          <SRegularButton>削除</SRegularButton>
        </SInner>
      )}
    </STodoCard>
  );
};

export default TodoCard;
