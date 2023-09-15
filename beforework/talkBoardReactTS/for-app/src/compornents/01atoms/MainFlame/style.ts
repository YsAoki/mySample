import styled from "styled-components";
import { StyleProps } from ".";

export const StyleMainFlame = styled.main<StyleProps>`
  background-color: ${({ backgroundColor }) => backgroundColor || "#F4F9F9"};
  padding: ${({ padding }) => padding};
  /* height: calc(100vh - 67px); */
`