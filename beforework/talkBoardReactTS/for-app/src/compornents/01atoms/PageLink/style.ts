import { Link } from "react-router-dom";
import styled from "styled-components";
import { StyleProps } from ".";

export const StylePageLink = styled(Link)<StyleProps>`
  font-size: ${({fontSize}) => fontSize || "14px"};
  color: ${({ color }) => color || "#000"};
  text-decoration: ${({textDecoration}) => textDecoration || "none"};
  margin: ${({ margin }) => margin};
`