import { Button } from "@mui/material";
import { styled } from "styled-components";

export const SCardBox = styled.ul`
  padding: 10px 5px;
  border: 2px solid grey;
  display: flex;
  flex-direction: column;
  width: 400px;
  margin: 0 auto;
`

export const SButton = styled(Button)`
  background-color: red !important;
  color: white!important;;
  &:hover {
    background-color: blue !important;
    transition: all 3s;
  }
`

export const SSButton = styled(SButton)`
  background-color: blue !important;
  color: white!important;;
  &:hover {
    background-color: pink !important;
    transition: all 3s;
  }
`