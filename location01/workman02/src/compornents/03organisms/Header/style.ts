import { styled } from "styled-components";
import TitleText from "../../atoms/TitleText";
import Inner from "../../atoms/Inner";
import FlexBox from "../../atoms/FlexBox";
import RegularText from "../../atoms/RegularText";

export const SHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  /* 分割代入と、ブレイクポイントもthemeより取得する */
  background-color: ${({ theme: { color } }) => color.mainColor};
  /* breakpointsを、propsで表示する */
  @media (min-width: ${props => props.theme.breakPoints.mobile}) {
    background-color: ${({ theme: {color}}) => color.subColor};
  }
`

export const SInner = styled(Inner)`
  /* propsでの記入 */
  max-width: ${props =>props.theme.innerWidth.maxWidth};
  width: 90%;
`

export const SFlexBox = styled(FlexBox)`
  justify-content: space-between;
  align-items: center;
  height: ${({theme: {size}}) => size.headerHeightSp};
  @media(min-width: ${({theme: {breakPoints}}) => breakPoints.mobile}) {
    height: ${({theme: {size}}) => size.headerHeightPc}
  }
`

export const STitleText = styled(TitleText)`
  font-size: 16px;
  color: ${({theme: {color}}) => color.fontColor};
  /* ブレイクポイントを分割代入する */
  @media(min-width: ${({theme: {breakPoints}}) => breakPoints.mobile}) {
    font-size: 24px;
  }
`

export const SRegularText = styled(RegularText)`
  font-size: 12px;
  color: ${({theme: {color}}) => color.fontColor}
`