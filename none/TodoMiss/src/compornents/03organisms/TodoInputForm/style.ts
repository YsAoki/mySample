import { styled } from "styled-components";
import RegularButton from "../../01atoms/RegularButton";

export const SForm = styled.form`
  border: 1px solid grey;
  width: 400px;
  height: 200px;
  margin: 0 auto 40px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  text-align: center;
`

export const SRegularButton = styled(RegularButton)`
  border: 1px solid grey;
  background-color: grey;
  width: 50%;
  margin: 0 auto;
  &:hover {
    border: 1px solid red;
  }
`