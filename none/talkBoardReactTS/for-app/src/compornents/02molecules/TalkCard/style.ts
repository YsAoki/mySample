import styled from "styled-components";
import FlexBox from "../../01atoms/FlexBox";

export const StyleTalkCard = styled.article`
  width: 100%;
  padding: 8px 4px;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  border: 1px solid grey;
  align-items: center;
  flex-direction: column;
  margin-bottom: 20px;
  overflow: auto;
`

export const StyleFlameFlexBox = styled(FlexBox)`
  width: 100%;
`

export const  StyleFlexBox = styled(FlexBox)`
  width: 360px;
`