import styled from "styled-components";
import { TypeInputStyleProps } from "../../../types/types";

type StandardInput = Omit<React.ComponentProps<"input">, "ref" | "key">;

export const StyleInput = styled.input<StandardInput & TypeInputStyleProps>`
  width: ${({ width }) => width };
  font-size: ${({ fontSize }) => fontSize };
  margin: ${({ margin }) => margin };
  padding: ${({ padding }) => padding };
  border: ${({ border }) => border };
`