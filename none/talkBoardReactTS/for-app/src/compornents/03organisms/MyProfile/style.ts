import styled from "styled-components";
import GreyObjectWithTitle from "../../02molecules/GreyObjectWithTitle";
import FlexBox from "../../01atoms/FlexBox";
import Button from "../../01atoms/Button";

export const StyleMyProfile = styled.div`
  padding: 20px;
  border: 5px solid #CCF2F4;
  background-color: #FFF;
  border-radius: 20px;
  width: 80%;
  margin: 0 auto;
`

export const StyleGreyObjectWithTitle = styled(GreyObjectWithTitle)`
  display: flex;
  justify-content: space-between;
`

export const StyleMyProfileTitleAndButton = styled(FlexBox)`
  margin-bottom: 10px;
`

export const StyleButton = styled(Button)`
  
`
  