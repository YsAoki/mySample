import React, { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NoPhoto from "../../02molecules/NoPhoto";
import FlexBox from "../../01atoms/FlexBox";
import RegularText from "../../01atoms/RegularText";
import {
  StyleButton,
  StyleMyProfile,
  StyleMyProfileTitleAndButton,
  StyleText,
} from "./style";
import { RootState } from "../../../store/store";
import GreyObjectWithTitle from "../../02molecules/GreyObjectWithTitle";
import Input from "../../01atoms/Input";
import ProfileImage from "../../01atoms/ProfileImage";
import { useNavigate } from "react-router-dom";
import {
  addDisplayName,
  addEmail,
  addPhotoUrl,
} from "../../../store/userSlice";
import InputFile from "../../01atoms/InputFile";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../../../config/firebase";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../../config/firebase";

const ChangeMyProfile: FC = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const displayName = useSelector((state: RootState) => state.user.displayName);
  const email = useSelector((state: RootState) => state.user.email);
  const photoUrl = useSelector((state: RootState) => state.user.photoURL);
  const uid = useSelector((state: RootState) => state.user.uid);

  const forNamePlaceholder = displayName || "未設定";
  const forEmailPlaceholder = email || "未設定";

  const [uploadImage, setUploadImage] = useState<File | null>(null);

  // 更新する画像イメージのアドレスを取得してstate管理する
  const [getForNewImageAddress, setGetForNewImageAddress] = useState<
    string | null
  >(photoUrl);

  const handleChangeProfileImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files !== null) {
      const newUploadImage = e.target.files[0];
      setUploadImage(newUploadImage);
      upLoadImagePostAction(newUploadImage);
    }
  };

  const upLoadImagePostAction = (uploadImage: File) => {
    // 投稿時間とuidの名称を持つ画像を投稿する
    const postTime = Date.now();
    const uploadFileNameStorage = `${uid}/${postTime}`;
    const storageRef = ref(storage, uploadFileNameStorage);
    uploadBytes(storageRef, uploadImage)
      .then((snapshot) => {
        getDownloadURL(storageRef).then((url) => {
          setGetForNewImageAddress(url);
        });
      })
      .catch((error) => {
        console.error("Error uploading file:", error);
      });
  };

  const [changeName, setChangeName] = useState<string | null>(displayName);
  const [changeEmail, setChangeEmail] = useState<string | null>(email);
  // const [changePhotoUrl, setChangePhotoUrl] = useState<string | null>(photoUrl);

  const onChangeEventName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChangeName(e.target.value);
  };

  const onChangeEventEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChangeEmail(e.target.value);
  };

  // 現在のログイン状態に対しての更新
  const updateProfile = () => {
    dispatch(addEmail(changeEmail));
    dispatch(addDisplayName(changeName));
    dispatch(addPhotoUrl(getForNewImageAddress));
  };

  // 管理状態と同様のものをfirestore内に置き換える
  const updateProfileForFirestore = async (
    uid: string,
    displayName: string,
    email: string,
    photoUrl: string
  ) => {
    const userRef = doc(db, "user", uid);
    await setDoc(userRef, { displayName, email, photoUrl }, { merge: true });
  };

  const onSubmitEvent = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile();
    if (uid && changeName && changeEmail && getForNewImageAddress) {
      updateProfileForFirestore(
        uid,
        changeName,
        changeEmail,
        getForNewImageAddress
      );
      alert("変更が完了しました。TOPページに移動します");
      navigate("/");
    } else {
      console.error("何かが足りない");
    }
  };

  return (
    <StyleMyProfile>
      <form onSubmit={onSubmitEvent}>
        <StyleMyProfileTitleAndButton
          justifyContent="space-between"
          alignItems="start"
        >
          <GreyObjectWithTitle>ユーザー情報の変更</GreyObjectWithTitle>
          <StyleButton>変更を確定する</StyleButton>
        </StyleMyProfileTitleAndButton>
        <FlexBox flexDirection="column" alignItems="center">
          <RegularText margin="0 0 5px">現在のプロフィール写真</RegularText>
          {getForNewImageAddress ? (
            <ProfileImage src={getForNewImageAddress} />
          ) : (
            <NoPhoto />
          )}
          {getForNewImageAddress === photoUrl ? (
            <RegularText>選択されていません</RegularText>
          ) : (
            <RegularText>画像アップロード済</RegularText>
          )}
          <InputFile onChange={handleChangeProfileImage} />
          <StyleText margin="0 0 10px">
            Name :
            <Input
              type="text"
              padding="4px"
              onChange={onChangeEventName}
              value={changeName || ""}
              placeholder={forNamePlaceholder}
            />
          </StyleText>
          <StyleText>
            Address:
            <Input
              type="email"
              placeholder={forEmailPlaceholder}
              padding="4px"
              onChange={onChangeEventEmail}
              value={changeEmail || ""}
              required
            />
          </StyleText>
        </FlexBox>
      </form>
    </StyleMyProfile>
  );
};

export default ChangeMyProfile;
