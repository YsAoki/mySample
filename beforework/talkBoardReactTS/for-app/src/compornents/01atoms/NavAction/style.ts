import styled from "styled-components";
import { StyleProps } from ".";



export const StyleNavAction = styled.button<StyleProps>`
  font-size: ${({fontSize}) => fontSize || "14px"};
  color: ${({ color }) => color || "#000"};
  text-decoration: ${({textDecoration}) => textDecoration || "none"};
  margin: ${({ margin }) => margin};
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  text-align: initial;
  transition: all 0.9s;
  line-height: 14px;
  :hover {
    opacity: 0.8;
  }
`