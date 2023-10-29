import React, { FC } from "react";
import { SFlexBox, SHeader, SInner, SRegularText, STitleText } from "./style";
import { useMediaQuery } from "../../../hooks/UseMediaQuery";
import RouterLink from "../../01atoms/RouterLink";

const Header: FC = () => {
  // useMediaQueryでレスポンシブに応じた文字の表示をする。
  const { isPc, isSp } = useMediaQuery();

  return (
    <SHeader>
      <SInner>
        <SFlexBox>
          <RouterLink to={"/"}>
            <STitleText tag="h1">MyStudy</STitleText>
          </RouterLink>
          {isSp && <SRegularText>SPモードなう</SRegularText>}
          {isPc && <SRegularText>PCモードなう</SRegularText>}
          <SRegularText>SP背景青,PCオレンジ</SRegularText>
        </SFlexBox>
      </SInner>
    </SHeader>
  );
};

export default Header;
