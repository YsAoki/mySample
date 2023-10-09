import styled from "styled-components";
import Inner from "../../01atoms/Inner";

export const StyleHeader = styled.header`
  width: 100vw;
  display: flex;
  border-bottom: 3px solid #CCF2F4;
`

export const StyleInner = styled(Inner)`
  width: 1000px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
`