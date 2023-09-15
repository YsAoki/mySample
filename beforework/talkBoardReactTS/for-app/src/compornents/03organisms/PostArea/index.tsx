import React, { FC, useState } from "react";
import GreyObjectWithTitle from "../../02molecules/GreyObjectWithTitle";
import { StyleFlexBox, StyleForm, StylePostArea, StyleTextArea } from "./style";
import InputFile from "../../01atoms/InputFile";
import Button from "../../01atoms/Button";
import FlexBox from "../../01atoms/FlexBox";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { storage, db } from "../../../config/firebase";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { addDoc, collection } from "firebase/firestore";
import RegularText from "../../01atoms/RegularText";

const PostArea: FC = () => {
  // redux管理している値を取得する
  const displayName = useSelector((state: RootState) => state.user.displayName);
  const photoUrl = useSelector((state: RootState) => state.user.photoURL);
  const uid = useSelector((state: RootState) => state.user.uid);

  // 投稿に表示する日付を作成する
  const now = new Date();
  // 投稿に投稿時間をベースにしたidを持たせる
  const baseNow = Date.now();

  // 投稿欄の表示非表示の切り替えを行う
  const [thisAreaInvisible, setThisAreaInvisible] = useState<boolean>(true);
  const invisibleButtonEvent = () => {
    setThisAreaInvisible(!thisAreaInvisible);
  };

  // 入力済み内容のリセットを行う
  const clearEvent = () => {
    setKeepFile(null);
    setUpdateFileUrl(null);
    setChangeInput("");
  };

  // textareaに入力した値のchangeEventをstate管理する
  const [changeInput, setChangeInput] = useState<string>("");
  const onChangeInputEvent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setChangeInput(e.target.value);
  };

  //  アップロード時の画像の一時的なstate
  const [keepFile, setKeepFile] = useState<File | null>(null);
  // アップロードした時の新規の画像URLを取得、urlを保持するstate。
  const [updateFileUrl, setUpdateFileUrl] = useState<string | null>(null);
  // ファイルの選択が行われなかった場合は、選択時のイベントが起こらないようにif文で制御する
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files !== null) {
      const newUploadImage = e.target.files[0];
      setKeepFile(newUploadImage);
      uploadImagePostAction(newUploadImage);
    }
    if (e.target.files == null) {
      clearEvent();
    }
  };

  const uploadImagePostAction = async (keepFile: File) => {
    const uploadFileNameStorage = `${uid}/${baseNow}`;
    const storageRef = ref(storage, uploadFileNameStorage);
    await uploadBytes(storageRef, keepFile);
    const imageUrl = await getDownloadURL(storageRef);
    setUpdateFileUrl(imageUrl);
  };

  const uploadDetailForFirestore = async () => {
    if (uid) {
      const talkRef = collection(db, "talk");
      const year = now.getFullYear();
      const month = now.getMonth() + 1;
      const date = now.getDate();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const viewTime = `${year}年${month}月${date}日${hours}時${minutes}分`;
      const docData = {
        displayName: displayName,
        photoUrl: photoUrl,
        uid: uid,
        forDataTime: baseNow,
        viewTime: viewTime,
        message: changeInput,
        updateFileUrl: updateFileUrl,
      };
      await addDoc(talkRef, docData);
    }
  };

  const onSubmitEvent = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (changeInput) {
      uploadDetailForFirestore();
      clearEvent();
    }
    if (keepFile && changeInput) {
      uploadImagePostAction(keepFile);
      clearEvent();
    }
    if (!changeInput) {
      alert("文字数が0なので投稿できません");
    }
  };

  return (
    <StylePostArea>
      <FlexBox flexDirection="column">
        <GreyObjectWithTitle>書き込む</GreyObjectWithTitle>
        {thisAreaInvisible ? (
          <FlexBox justifyContent="space-between">
            <Button onClick={clearEvent}>入力内容クリア</Button>
            <Button onClick={invisibleButtonEvent}>
              フォームを非表示にする
            </Button>
          </FlexBox>
        ) : (
          <Button onClick={invisibleButtonEvent}>フォームを表示する</Button>
        )}
      </FlexBox>
      {thisAreaInvisible && (
        <StyleForm onSubmit={onSubmitEvent}>
          <StyleTextArea
            padding="4px 7px"
            fontSize="14px"
            margin="0 0 20px"
            placeholder="誹謗中傷などの内容は控えましょう"
            onChange={onChangeInputEvent}
            value={changeInput}
          />
          <FlexBox>
            <StyleFlexBox alignItems="center" justifyContent="space-between">
              <InputFile onChange={handleFileChange} />
              {updateFileUrl ? (
                <RegularText>ファイル選択済み</RegularText>
              ) : (
                <RegularText>ファイル未選択</RegularText>
              )}
              <Button>書き込む</Button>
            </StyleFlexBox>
          </FlexBox>
        </StyleForm>
      )}
    </StylePostArea>
  );
};

export default PostArea;
