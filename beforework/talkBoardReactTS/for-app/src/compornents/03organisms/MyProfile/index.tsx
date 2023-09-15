import React, { FC } from "react";
import NoPhoto from "../../02molecules/NoPhoto";
import FlexBox from "../../01atoms/FlexBox";
import RegularText from "../../01atoms/RegularText";
import {
  StyleButton,
  StyleMyProfile,
  StyleMyProfileTitleAndButton,
} from "./style";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import GreyObjectWithTitle from "../../02molecules/GreyObjectWithTitle";
import { useNavigate } from "react-router-dom";
import ProfileImage from "../../01atoms/ProfileImage";

const MyProfile:FC = () => {
  const displayName = useSelector((state: RootState) => state.user.displayName);
  const email = useSelector((state: RootState) => state.user.email);
  const photoUrl = useSelector((state: RootState) => state.user.photoURL);

  const navigate = useNavigate();

  const clickNavChangeMyProfile = () => {
    navigate("change-my-profile");
  };

  return (
    <StyleMyProfile>
      <StyleMyProfileTitleAndButton
        justifyContent="space-between"
        alignItems="start"
      >
        <GreyObjectWithTitle>ユーザー情報</GreyObjectWithTitle>
        <StyleButton onClick={clickNavChangeMyProfile}>
          登録内容変更
        </StyleButton>
      </StyleMyProfileTitleAndButton>
      <FlexBox flexDirection="column" alignItems="center">
        {photoUrl ? <ProfileImage src={photoUrl} /> : <NoPhoto />}
        <RegularText margin="0 0 10px">
          NAME: <span>{displayName || "未設定"}</span>
        </RegularText>
        <RegularText padding="0 0 2px">ADDRESS: {email}</RegularText>
      </FlexBox>
    </StyleMyProfile>
  );
};

export default MyProfile;
