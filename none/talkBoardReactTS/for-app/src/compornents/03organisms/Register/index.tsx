import React, { useState } from "react";
import BlueBarWithTitle from "../../02molecules/BlueBarWithTitle";
import { StyleFlameFlexBox, StyleForm, StyleInput } from "./style";
import RegularText from "../../01atoms/RegularText";
import RegisterLoginButton from "../../01atoms/RegisterLoginButton";
import { auth } from "../../../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addEmail, addUid } from "../../../store/userSlice";
import { useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../../config/firebase";
import { loginNow } from "../../../store/loginJudgeSlice";

const Register = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmailEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onChangePasswordEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onSubmitEvent = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      alert("登録が完了しました。トップページに遷移します");
      dispatch(addEmail(user.email));
      dispatch(addUid(user.uid));
      dispatch(loginNow());
      navigate("/");
      // 登録完了と同時に、firebase内でランダムなドキュメントIDを持つアカウント情報を作成する。
      // ページ遷移以降に、名前とアドレス、プロフィール画像の表示が可能になるようにする。
      await setDoc(doc(db, "user", user.uid), {
        address: user.email,
        displayName: null,
        photoUrl: null,
        uid: user.uid,
      });
    } catch (error) {
      alert("正しく入力してください");
      console.log(error);
    }
  };

  return (
    <StyleFlameFlexBox flexDirection="column">
      <BlueBarWithTitle margin="0">新規会員登録</BlueBarWithTitle>
      <StyleForm onSubmit={onSubmitEvent}>
        <RegularText margin="0 0 11px">メールアドレス</RegularText>
        <StyleInput
          onChange={onChangeEmailEvent}
          padding="16px 0px 13px 16px"
          width="100%"
          margin="0 0 37px"
          placeholder="例)example.com"
        />
        <RegularText margin="0 0 11px">パスワード</RegularText>
        <StyleInput
          onChange={onChangePasswordEvent}
          padding="16px 0px 13px 16px"
          width="100%"
          margin="0 0 28px"
          placeholder="パスワードを入力してください"
          type="password"
        />
        <RegisterLoginButton>登録</RegisterLoginButton>
      </StyleForm>
    </StyleFlameFlexBox>
  );
};

export default Register;
