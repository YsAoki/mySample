import { styled } from "styled-components";
import RegularButton from "../../01atoms/RegularButton";
import Inner from "../../01atoms/FreeInner";

export const STodoCard = styled.div`
  border: 1px solid grey;
  margin: 0 auto;
  padding: 5px 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 60%;
`

export const SRegularButton = styled(RegularButton)`
  border: 1px solid gray;
  width: 80px;
`

export const SInner = styled(Inner)`
  width: 50%;
  display: flex;

`