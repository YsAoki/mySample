import React, { FC } from "react";
import ModalOverlay from "../../01atoms/ModalOverlay";
import { SFlame } from "../forEditModal";
import Button from "../../01atoms/Button";
import { styled } from "styled-components";

type props = {
  id: number;
  clickDeleteModalEvent: () => void;
};

const ForDeleteCheckModal: FC<props> = ({ id, clickDeleteModalEvent }) => {
  return (
    <ModalOverlay>
      <SSFlame>
        <SText>本当に削除しますか？</SText>
        <Button>削除する</Button>
        <Button onClick={clickDeleteModalEvent}>キャンセル</Button>
        <p>😝</p>
      </SSFlame>
    </ModalOverlay>
  );
};

const SSFlame = styled(SFlame)`
  width: 400px;
  height: 150px;
`;

const SText = styled.p`
  margin: 0 0 20px;
`;

export default ForDeleteCheckModal;
