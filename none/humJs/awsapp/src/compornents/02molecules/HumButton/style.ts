import { styled } from "styled-components";
import RegularButton from "../../01atoms/RegularButton";
import Bar from "../../01atoms/Bar";

export const SRegularButton = styled(RegularButton)`
  z-index: 200;
  background-color: grey;
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  @media (min-width: 575px){
    width: 40px;
  }
`

export const SBarTop = styled(Bar)`
  background-color: black;
  width: ${({status}) => status? "110%" : "100%"};
  height: 15%;
  transition: all 0.8s;
  transform-origin: left top;
  transform: ${({status}) => status? "rotate(45deg) translateX(7%)" : "initial"}
`

export const SBarCenter = styled(Bar)`
  background-color: black;
  width: 100%;
  height: 15%;
  transition: all 0.8s;
  opacity: ${({status}) => status? "0" : "initial"};
`

export const SBarBottom = styled(Bar)`
  background-color: black;
  width: ${({status}) => status? "110%" : "100%"};
  height: 15%;
  transition: all 0.8s;
  transform-origin: left bottom;
  transform: ${({status}) => status? "rotate(-45deg) translateX(7%)" : "initial"}
`