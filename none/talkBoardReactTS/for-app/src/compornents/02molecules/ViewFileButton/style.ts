import styled from "styled-components";

export const StyleButton = styled.button`
  padding: 10px 5px;
  text-align: center;
  font-size: 20px;
`

export const StyleImage = styled.img<{ MaxOrMin: boolean }>`
  width: ${props => (props.MaxOrMin ? '100%' : '30%')};
  height: auto;
`;