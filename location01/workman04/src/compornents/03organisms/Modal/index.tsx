import React, { FC } from "react";
import ReactDOM from "react-dom"; // ここを修正
import Overlay from "../../01atoms/Overlay";
import { ChildrenProps } from "../../../types/types";
import { SButton, SModal } from "./style";

type Props = {
  closeModal?: () => void;
};

const Modal: FC<Props & ChildrenProps> = ({ closeModal, children }) => {
  return ReactDOM.createPortal(
    <>
      <Overlay onClick={closeModal}>
        <SModal>
          <SButton onClick={closeModal}>閉じる</SButton>
          {children}
        </SModal>
      </Overlay>
    </>,
    document.getElementById("portal")!
  );
};

export default Modal;
