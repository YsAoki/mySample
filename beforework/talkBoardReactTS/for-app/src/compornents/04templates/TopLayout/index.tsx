import React, { FC } from "react";
import Header from "../../03organisms/Header";
import MainFlame from "../../01atoms/MainFlame";
import {
  StyleFlexBoxLeft,
  StyleFlexBoxLeftIn,
  StyleFlexBoxRight,
  StyleInner,
} from "./style";
import KeywordFreeArea from "../../03organisms/KeywordFreeArea";
import BlueBarWithTitle from "../../02molecules/BlueBarWithTitle";
import MyProfile from "../../03organisms/MyProfile";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import RegularText from "../../01atoms/RegularText";
import FlexBox from "../../01atoms/FlexBox";
import PageLink from "../../01atoms/PageLink";
import PostArea from "../../03organisms/PostArea";
import TalkArea from "../../03organisms/Talk";

const TopLayout: FC = () => {
  const loginJudge = useSelector((state: RootState) => state.loginJudge);
  const displayName = useSelector((state: RootState) => state.user.displayName);
  const ViewHelloDisplayName = displayName ? displayName : "名無し";

  return (
    <>
      <Header />
      <MainFlame padding="37px 0px 87px">
        <StyleInner width="1000px">
          <FlexBox flexDirection="column">
            {loginJudge ? (
              <RegularText margin="0 0 5px">
                こんにちは！{ViewHelloDisplayName}さん！
              </RegularText>
            ) : (
              <RegularText margin="0 0 5px">
                新規登録、ログインは
                <PageLink to="login-and-register" fontSize="16px">
                  こちら
                </PageLink>
                をクリック
              </RegularText>
            )}
            <StyleFlexBoxLeft>
              <BlueBarWithTitle>掲示板</BlueBarWithTitle>
              <StyleFlexBoxLeftIn flexDirection="column">
                <KeywordFreeArea />
                {loginJudge ? (
                  <PostArea />
                ) : (
                  <RegularText margin="0 0 8px">
                    ※書き込みをするためには
                    <PageLink textDecoration="border" to="/login-and-register">
                      ログイン
                    </PageLink>
                    が必要です※
                  </RegularText>
                )}
                <TalkArea />
              </StyleFlexBoxLeftIn>
            </StyleFlexBoxLeft>
          </FlexBox>
          <StyleFlexBoxRight>{loginJudge && <MyProfile />}</StyleFlexBoxRight>
        </StyleInner>
      </MainFlame>
    </>
  );
};

export default TopLayout;
