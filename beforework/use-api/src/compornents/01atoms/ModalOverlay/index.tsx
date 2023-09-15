import React, { FC } from "react";
import { styled } from "styled-components";
import { oftenType } from "../../../types/myTypes";

const ModalOverlay:FC<oftenType> = ({children}) => {
  return (
    <SModalOverlay>
      {children}
    </SModalOverlay>
  );
};

const SModalOverlay = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  transition: all 0.8s;
`;

export default ModalOverlay;
