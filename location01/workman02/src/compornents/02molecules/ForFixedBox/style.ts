import { styled } from "styled-components";
import Box from "../../atoms/Box";

export const SForFixedBox = styled(Box)`
  margin-top: ${({theme: {size}}) => size.headerHeightSp};
  @media (min-width: ${({theme : {breakPoints}}) => breakPoints.mobile}) {
    margin-top: ${({theme: {size}}) => size.headerHeightPc };
  }
`