import { styled } from "styled-components";
import TitleText from "../../atoms/TitleText";
import RegularInput from "../../atoms/RegularInput";

export const SForm = styled.form`
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 400px;
  border: 1px dotted grey;
`

export const STitleText = styled(TitleText)`
  font-size: 20px;
`

export const SRegularInput = styled(RegularInput)`
  width: 50%;
  margin-bottom: 20px;
  padding: 12px 8px;
  font-size: 16px;
`