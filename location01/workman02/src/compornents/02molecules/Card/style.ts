import { styled } from "styled-components";

export const SCard = styled.button`
  border: 1px solid grey;
  padding: 5px 10px;
  cursor: pointer;
  &.active {
    background-color: red;
  };
`