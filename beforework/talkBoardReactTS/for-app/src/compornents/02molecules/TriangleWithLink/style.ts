import styled from "styled-components";
import FlexBox from "../../01atoms/FlexBox";
import { StyleProps } from ".";

export const StyleFlexBox = styled(FlexBox)<StyleProps>`
  margin-right: ${({ marginRight }) => marginRight};
`;