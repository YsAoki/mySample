import React, { FC, useState } from "react";
import { StyleTalkCard, StyleFlexBox, StyleFlameFlexBox } from "./style";
import ProfileImage from "../../01atoms/ProfileImage";
import FlexBox from "../../01atoms/FlexBox";
import RegularText from "../../01atoms/RegularText";
import TitleText from "../../01atoms/TitleText";
import ViewFileButton from "../ViewFileButton";

type Props = {
  displayName?: string;
  photoUrl?: string;
  uid?: string;
  forDataTime?: string;
  viewTime?: string;
  message?: string;
  upDateFileUrl?: string | null;
  time: string,
};

const TalkCard: FC<Props> = (props) => {

  const upDateFileUrl = props.upDateFileUrl;
  const displayName = props.displayName ? props.displayName : "名無しさん";

  return (
    <StyleTalkCard>
      <StyleFlameFlexBox justifyContent="space-between" alignItems="center">
      <ProfileImage src={props.photoUrl} />
        <StyleFlexBox flexDirection="column">
          <TitleText tag="h5" margin="0 0 7px" fontWeight={600}>name: {displayName}</TitleText>
          <FlexBox flexDirection="column">
            <RegularText margin="0 0 5px">{props.viewTime}</RegularText>
            <RegularText margin="0 0 5px">ID:{props.uid}</RegularText>
          </FlexBox>
          <RegularText>{props.message}</RegularText>
        </StyleFlexBox>
      </StyleFlameFlexBox>
      {upDateFileUrl && <ViewFileButton upDateFileUrl={upDateFileUrl} />}
    </StyleTalkCard>
  );
};

export default TalkCard;
