import React from "react";
import { SForm, STitleText, SRegularInput } from "./style";
import Label from "../../01atoms/Label";
import HoverButton from "../../01atoms/HoverButton.tsx";
import RadioButton from "../../02molecules/RadioButton";

const LoginForm = () => {
  return (
    <SForm>
      <STitleText tag="h2">ログイン画面</STitleText>
      <Label htmlFor="loginId">ログインID</Label>
      <SRegularInput id="loginId" type="text" />
      <Label htmlFor="password">パスワード</Label>
      <SRegularInput id="password" type="password" />
      <RadioButton id="good" name="how" value="最高">
        最高
      </RadioButton>
      <RadioButton id="bad" name="how" value="最低">
        最低
      </RadioButton>
      <HoverButton>ログイン</HoverButton>
    </SForm>
  );
};

export default LoginForm;
