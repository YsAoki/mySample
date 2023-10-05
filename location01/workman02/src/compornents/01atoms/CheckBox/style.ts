import styled from "styled-components";

export const CheckboxInput = styled.input.attrs({ type: "checkbox" })`
  display: none;
`;

export const CustomCheckbox = styled.span`
  display: inline-block;
  width: 20px;
  height: 20px;
  background-color: #ccc;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    width: 10px;
    height: 10px;
    background-color: white;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    transition: transform 0.3s ease;
  }
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;

  ${CheckboxInput}:checked + ${CustomCheckbox}::after {
    transform: translate(-50%, -50%) scale(1);
  }
`;