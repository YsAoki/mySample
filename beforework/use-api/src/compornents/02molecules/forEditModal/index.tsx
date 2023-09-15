import React, { FC, useState } from "react";
import ModalOverlay from "../../01atoms/ModalOverlay";
import { styled } from "styled-components";
import Button from "../../01atoms/Button";

type props = {
  id: number;
  body: string;
  clickEditModalEvent: () => void;
};

const ForEditModal: FC<props> = ({ body, clickEditModalEvent, id }) => {
  const [changeTextarea, setChangeTextarea] = useState(body);
  const EditTextareaEvent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setChangeTextarea(e.target.value);
  };
  const onSubmitEvent = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(changeTextarea);
  };

  return (
    <ModalOverlay>
      <SFlame>
        <SEditForm onSubmit={onSubmitEvent}>
          <STextarea onChange={EditTextareaEvent}>{body}</STextarea>
          <Button>変更する</Button>
        </SEditForm>
        <Button onClick={clickEditModalEvent}>キャンセル</Button>
      </SFlame>
    </ModalOverlay>
  );
};

const SEditForm = styled.form`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 90%;
`;

export const SFlame = styled.div`
  background-color: #fff;
  position: fixed;
  top: 50%;
  left: 50%;
  width: 50%;
  height: 300px;
  transform: translate(-50%, -50%);
  z-index: 11;
  text-align: center;
  padding: 10px;
`;

const STextarea = styled.textarea`
  height: 200px;
`;

export default ForEditModal;
