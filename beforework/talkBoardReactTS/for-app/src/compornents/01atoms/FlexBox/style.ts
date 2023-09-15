import styled from "styled-components";
import { TypeFlexBoxStyleProps } from "../../../types/types";

export const StyleFlexBox = styled.div<TypeFlexBoxStyleProps>`
display: flex;
  align-items: ${({ alignItems }) => alignItems };
  justify-content: ${({ justifyContent }) => justifyContent };
  flex-direction: ${({ flexDirection }) => flexDirection };
`