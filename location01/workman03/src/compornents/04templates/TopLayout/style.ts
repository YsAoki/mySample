import { styled } from "styled-components";
import Inner from "../../01atoms/Inner";
import RegularText from "../../01atoms/RegularText";

export const STopLayout = styled.div`
  display: flex;
`

export const SInner = styled(Inner)`
  padding: 20px 0px;
`
export const SBox = styled(RegularText)`
  width: 100px;
  height: 16px;
  background-color: green;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`
