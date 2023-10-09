import styled from "styled-components";
import TitleText from "../../01atoms/TitleText";
import { StyleProps } from ".";

export const StyleBlueBarWithTitle = styled(TitleText)<StyleProps>`
  padding-left: 25px;
  line-height: 48px;
  background-color: #CCF2F4;
  width: 100%;
  margin: ${({ margin }) => margin || "0 0 24px"}
`