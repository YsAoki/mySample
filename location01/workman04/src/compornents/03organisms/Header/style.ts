import styled from "styled-components";
import Inner from "../../01atoms/Inner";
import FlexBox from "../../01atoms/FlexBox";
import TitleText from "../../01atoms/TitleText";

export const SHeader = styled.header`
  height: 60px;
  width: 100vw;
  background-color: ${({theme}) => theme.color.mainBackColor};
`

export const SInner = styled(Inner)`
  height: 100%;
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const STitleText = styled(TitleText)`
  font-size: 20px;
  font-weight: 600;
  color: ${({theme}) => theme.color.fontColor};
`