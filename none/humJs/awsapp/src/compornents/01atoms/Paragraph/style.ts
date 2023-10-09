import { styled } from "styled-components";
import { ThisStyleProps } from ".";

export const SParagraph = styled.p<ThisStyleProps>`
  color: ${({color}) => color};
`