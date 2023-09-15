import styled from "styled-components";
import TextArea from "../../01atoms/TextArea";
import FlexBox from "../../01atoms/FlexBox";

export const StylePostArea = styled.section`
  margin-bottom: 40px;
`

export const StyleForm = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 20px 10px;
`

export const StyleTextArea = styled(TextArea)`
  border: 2px solid grey;
  border-radius: 10px;
  width: 100%;
  height: 100px;
`

export const StyleFlexBox = styled(FlexBox)`
  width: 100%;
`