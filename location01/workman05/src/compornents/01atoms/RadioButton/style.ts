
import styled from "styled-components";

export const RadioInput = styled.input.attrs({ type: "radio" })`
  display: none;
  &:checked + span {
    border: 2px solid black;
    &:after {
      opacity: 1;
    }
  }
`;

export const CustomRadio = styled.span`
  /* ここでスタイリング */
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 2px solid grey;
  border-radius: 50%;
  position: relative;
  &:after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 10px;
    height: 10px;
    background-color: black;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.8s;
    opacity: 0;
  }
`;

export const RadioLabel = styled.label`
  display: flex;
  align-items: center;
`;