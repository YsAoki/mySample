import styled from "styled-components";
import { TypesTextStyleProps } from "../../../types/types";

export const StyleText = styled.p<TypesTextStyleProps>`
  color: ${({ color }) => color };
  font-size: ${({ fontSize }) => fontSize || '16px'};
  padding: ${({ padding }) => padding };
  margin: ${({ margin }) => margin };
  font-weight: ${({ fontWeight }) => fontWeight };
  text-decoration: ${({ textDecoration }) => textDecoration || 'none'};
  text-align: ${({ textAlign }) => textAlign };
  overflow: ${({ overFlow }) => overFlow || 'hidden' };
`