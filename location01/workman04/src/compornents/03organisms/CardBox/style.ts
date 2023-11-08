import styled from "styled-components";
import Inner from "../../01atoms/Inner";

export const SInner = styled(Inner)`
  display: flex;
  flex-direction: column;
  width: 60%;
  padding: 20px 0;
  box-shadow: ${({theme}) => theme.style.shadow};
`
