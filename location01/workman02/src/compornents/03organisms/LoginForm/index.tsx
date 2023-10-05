import React, { ChangeEvent } from "react";
import { SForm, STitleText, SRegularInput } from "./style";
import Label from "../../01atoms/Label";
import HoverButton from "../../01atoms/HoverButton.tsx";
import RadioButton from "../../02molecules/RadioButton";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();

  const onSubmitEvent = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <SForm onSubmit={onSubmitEvent}>
      <STitleText tag="h2">ログイン画面</STitleText>
      <Label htmlFor="loginId">ログインID</Label>
      <SRegularInput id="loginId" type="text" />
      <Label htmlFor="password">パスワード</Label>
      <SRegularInput id="password" type="password" />
      <HoverButton>ログイン</HoverButton>
    </SForm>
  );
};

export default LoginForm;
