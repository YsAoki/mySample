import { styled } from "styled-components";

export const SProductListBox = styled.ul`
  width: 400px;
  display: flex;
  flex-direction: column;
  border: 1px solid ${({theme}) => theme.color.borderColor};
  height: 100%;
`