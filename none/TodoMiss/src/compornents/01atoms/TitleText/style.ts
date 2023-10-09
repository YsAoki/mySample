import { styled } from "styled-components";
import { ThisStyleProps } from "../Paragraph";

export const STitleText = styled.p<ThisStyleProps>`
color: ${({color}) => color};
`;