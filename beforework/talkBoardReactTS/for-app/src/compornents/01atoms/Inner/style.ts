import styled from "styled-components";
import { StyleProps } from ".";

export const StyleInner = styled.div<StyleProps>`
  margin: 0 auto;
  width: ${({ width })=> width };
`