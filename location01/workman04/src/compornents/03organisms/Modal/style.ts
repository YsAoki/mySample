import styled from "styled-components";
import RegularButton from "../../01atoms/RegularButton";

export const SModal = styled.div`
  width: 50%;
  height: 50%;
  padding: 4px 8px;
  background-color: #fff;
  border-radius: 4px;
  position: relative;
`

export const SButton = styled(RegularButton)`
position: absolute;
  top: 0%;
  right: 0;
  transform: translate(50%, -50%);
  line-height: 20px;
  width: 90px;
  text-align: center;
  background-color: black;
  color: #fff;
  border-radius: 50%;
`