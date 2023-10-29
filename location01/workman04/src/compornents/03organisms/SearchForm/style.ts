import { styled } from "styled-components";
import Inner from "../../01atoms/Inner";
import TitleText from "../../01atoms/TitleText";

export const SForm = styled.form`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid black;
  background-color: #fff;
  width: 80vw;
  height: 80vh;
  display: none;
  overflow-y: scroll;
  z-index: 50000;
  &.active {
    display: block;
  }
`

export const STitleText = styled(TitleText)`
  font-size: 24px;
  text-align: center;
`

export const SInner = styled(Inner)`
  padding: 12px 0;
  width: 90%;
`