import React, { FC, useState } from "react";
import BlueBarWithTitle from "../../02molecules/BlueBarWithTitle";
import { StyleFlameFlexBox, StyleForm, StyleInput } from "./style";
import RegularText from "../../01atoms/RegularText";
import RegisterLoginButton from "../../01atoms/RegisterLoginButton";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../config/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { db } from "../../../config/firebase";
import {
  addDisplayName,
  addEmail,
  addPhotoUrl,
  addUid,
} from "../../../store/userSlice";
import { loginNow } from "../../../store/loginJudgeSlice";
import { useNavigate } from "react-router-dom";

const Login: FC = () => {
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
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      )
      // firestoreから情報を取得して、状態管理
      const user = userCredential.user;
      const docRef = doc(db, "user", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const getData = docSnap.data();
        dispatch(addDisplayName(getData.displayName));
        dispatch(addEmail(getData.address));
        dispatch(addUid(getData.uid));
        dispatch(addPhotoUrl(getData.photoUrl));
        dispatch(loginNow());
        alert("ログインに成功しました。TOPページに遷移します");
        navigate("/");
      }
    } catch (error) {
      alert("ログインに失敗しました");
      console.log(error);
    }
  };

  return (
    <StyleFlameFlexBox flexDirection="column">
      <BlueBarWithTitle margin="0">ログイン</BlueBarWithTitle>
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
        <RegisterLoginButton>ログイン</RegisterLoginButton>
      </StyleForm>
    </StyleFlameFlexBox>
  );
};

export default Login;
