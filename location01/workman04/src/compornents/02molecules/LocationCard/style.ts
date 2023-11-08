import styled from "styled-components";
import Inner from "../../01atoms/Inner";
import RegularText from "../../01atoms/RegularText";

export const SInner = styled(Inner)`
  width: 80%;
  padding: 10px 0;
  border: 1px solid red;
`

export const SText = styled(RegularText)`
 margin-bottom: 10px;
 &:last-child {
  margin-bottom: 0;
 }
`