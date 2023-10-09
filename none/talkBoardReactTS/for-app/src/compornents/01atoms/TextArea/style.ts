import styled from "styled-components";
import { StyleProps } from ".";

export const StyleTextArea = styled.textarea<StyleProps>`
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  font-size: ${({ fontSize }) => fontSize};
`