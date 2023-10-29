import styled from "styled-components";

export const CheckBoxInput = styled.input.attrs({ type: 'checkbox' })`
  display: none;
  &:checked + span {
    border: 2px solid black;
    &:after {
      opacity: 1;
    }
  }
`;

export const CustomCheckBox = styled.span`
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 2px solid black;
  position: relative;
  margin-right: 8px;
  &:after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 6px;
    height: 10px;
    border: solid black;
    border-width: 0 2px 2px 0;
    transform: translate(-50%, -50%) rotate(45deg);
    opacity: 0;
  }
`;

export const CheckBoxLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
