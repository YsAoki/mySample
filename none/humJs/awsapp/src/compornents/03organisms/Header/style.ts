import { styled } from "styled-components";
import TitleText from "../../01atoms/TitleText";
import MainInner from "../../01atoms/MainInner";
import Inner from "../../01atoms/FreeInner";

export const SHeader = styled.header`
  position:fixed;
  left: 0;
  top: 0;
  z-index: 100;
  border-bottom: 2px solid grey;
  line-height: 30px;
  background-color: aqua;
  width: 100%;
  @media(min-width: 575px) {
    line-height: 40px;
  }
`

export const SMainInner = styled(MainInner)`
  display: flex;
  justify-content: space-between;
`

export const STitleText = styled(TitleText)`
  font-size: 15px;
  
  @media (min-width: 575px) {
    font-size: 25px;
  }
`

type SHumMenuProps = {
  humOpen: boolean;
};

export const SHumMenu = styled(Inner)<SHumMenuProps>`
  padding: 10px;
  z-index: 150;
  position: fixed;
  right: 0;
  top: 0;
  width: 40vw;
  height: 100%;
  transform: ${({humOpen}) => humOpen? "translateX(100%)" : "initial"};
  background-color: red;
  transition: all 0.7s;
`

export const SHumTitleText = styled(TitleText)`
  font-size: 14px;
  @media (min-width:575px) {
  font-size: 30px;
  }
`