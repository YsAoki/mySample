import { styled } from "styled-components";

export const SCard = styled.button`
  border: 1px solid grey;
  padding: 5px 10px;
  cursor: pointer;
  &:hover {
    border: 2px solid red;
  }
  &.active {
    background-color: red;
  };
`