import React from "react";
import FlexBox from "../../01atoms/FlexBox";
import TriangleWithLink from "../TriangleWithLink";
import TriangleWithButton from "../TriangleWithButton";
import { useLogout } from "../../../Hooks/useLogout";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";

// reduxの状態管理で、userが値を持った場合にのみstateの値を変更して表示を切り替える

const HeaderLinkArea = () => {
  const loginJudge = useSelector((state: RootState) => state.loginJudge);
  const clickLogout = useLogout();
  return (
    <>
      {loginJudge ? (
        <FlexBox alignItems="center">
          <TriangleWithLink to="/">予約履歴</TriangleWithLink>
          <TriangleWithLink to="/change-my-profile">登録変更</TriangleWithLink>
          <TriangleWithButton onClick={clickLogout}>
            ログアウト
          </TriangleWithButton>
        </FlexBox>
      ) : (
        <FlexBox>
          <TriangleWithLink to="/login-and-register">ログイン</TriangleWithLink>
          <TriangleWithLink to="/login-and-register">新規登録</TriangleWithLink>
        </FlexBox>
      )}
    </>
  );
};

export default HeaderLinkArea;
